"use client";

import { CheckCircle2, LoaderCircle } from "lucide-react";
import {
  useActionState,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
} from "react";

import { sendQuoteRequest } from "@/app/kontakt/actions";
import { projectTypeOptions } from "@/content/services";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import {
  quoteFields,
  quoteSchema,
  readQuoteForm,
  validateQuote,
  type QuoteErrors,
  type QuoteField,
  type QuoteState,
} from "@/lib/quote-schema";

export function QuoteForm() {
  const [resetKey, setResetKey] = useState(0);
  const submitted = useRef(false);

  useLayoutEffect(
    () => () => {
      if (submitted.current) {
        submitted.current = false;
        setResetKey((k) => k + 1);
      }
    },
    [],
  );

  const markSubmitted = useCallback(() => {
    submitted.current = true;
  }, []);

  return <QuoteFormInner key={resetKey} onSuccess={markSubmitted} />;
}

function QuoteFormInner({ onSuccess }: { onSuccess: () => void }) {
  const [state, formAction, pending] = useActionState<QuoteState, FormData>(
    sendQuoteRequest,
    { status: "idle" },
  );
  const [clientErrors, setClientErrors] = useState<QuoteErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  const serverErrors = state.status === "error" ? state.errors : {};
  const errors: QuoteErrors = { ...serverErrors, ...clientErrors };
  const values = state.status === "error" ? state.values : undefined;

  useEffect(() => {
    if (state.status === "success") onSuccess();
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state, onSuccess]);

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("tjanst");
    const select = formRef.current?.elements.namedItem("projekttyp");
    if (
      type &&
      select instanceof HTMLSelectElement &&
      !select.value &&
      projectTypeOptions.some((o) => o.value === type)
    ) {
      select.value = type;
    }
  }, []);

  const validateField = (field: QuoteField, value: string) => {
    const result = quoteSchema.shape[field].safeParse(value);
    setClientErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  };

  const fieldProps = (field: QuoteField, hint = false) => {
    const describedBy = [
      hint && `${uid}-${field}-tips`,
      errors[field] && `${uid}-${field}-fel`,
    ].filter(Boolean);
    return {
      id: `${uid}-${field}`,
      name: field,
      defaultValue: values?.[field],
      "aria-invalid": errors[field] ? true : undefined,
      "aria-describedby": describedBy.length
        ? describedBy.join(" ")
        : undefined,
      onBlur: (e: FocusEvent<FieldElement>) => {
        if (e.target.value !== "" || errors[field])
          validateField(field, e.target.value);
      },
      onChange: (e: ChangeEvent<FieldElement>) => {
        if (clientErrors[field]) validateField(field, e.target.value);
      },
    };
  };

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start gap-5 border border-forest/30 bg-limestone p-8 outline-none sm:p-10"
      >
        <CheckCircle2
          aria-hidden="true"
          className="size-10 text-forest"
          strokeWidth={1.5}
        />
        <h3 className="font-display text-display-sm font-semibold [font-stretch:110%]">
          Tack för din förfrågan!
        </h3>
        <p className="max-w-md text-[1.0625rem] leading-relaxed text-ink-muted">
          Vi har tagit emot ditt meddelande och återkommer så snart vi kan. Är
          det brådskande når du oss på{" "}
          <a
            href={site.phone.href}
            className="font-semibold text-graphite underline"
          >
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      onSubmit={(e) => {
        const { errors: found } = validateQuote(
          readQuoteForm(new FormData(e.currentTarget)),
        );
        setClientErrors(found);
        const first = quoteFields.find((f) => found[f]);
        if (first) {
          e.preventDefault();
          formRef.current
            ?.querySelector<HTMLElement>(`[name="${first}"]`)
            ?.focus();
        }
      }}
      className="relative grid gap-x-6 gap-y-7 sm:grid-cols-2"
    >
      {state.status === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-copper-deep bg-copper/10 px-5 py-4 text-[0.9375rem] font-medium text-graphite outline-none sm:col-span-2"
        >
          {state.message}
        </div>
      )}

      <Field label="Namn" htmlFor={`${uid}-namn`} error={errors.namn}>
        <input
          type="text"
          autoComplete="name"
          required
          className={inputClass}
          {...fieldProps("namn")}
        />
      </Field>

      <Field label="E-post" htmlFor={`${uid}-epost`} error={errors.epost}>
        <input
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className={inputClass}
          {...fieldProps("epost")}
        />
      </Field>

      <Field
        label="Telefonnummer"
        optional
        htmlFor={`${uid}-telefon`}
        error={errors.telefon}
      >
        <input
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={inputClass}
          {...fieldProps("telefon")}
        />
      </Field>

      <Field
        label="Typ av projekt"
        htmlFor={`${uid}-projekttyp`}
        error={errors.projekttyp}
      >
        <select
          required
          className={cn(
            inputClass,
            "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%2212%22%20fill=%22none%22%20stroke=%22%23242825%22%20stroke-width=%221.75%22%3E%3Cpath%20d=%22m2%204%204%204%204-4%22/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10",
          )}
          {...fieldProps("projekttyp")}
          defaultValue={values?.projekttyp ?? ""}
        >
          <option value="" disabled>
            Välj ett alternativ
          </option>
          {projectTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Projektbeskrivning"
        htmlFor={`${uid}-beskrivning`}
        error={errors.beskrivning}
        hint="Berätta vad du vill göra, var projektet ligger och gärna önskad tidsplan."
        className="sm:col-span-2"
      >
        <textarea
          rows={6}
          required
          className={cn(inputClass, "resize-y py-3.5")}
          {...fieldProps("beskrivning", true)}
        />
      </Field>

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor={`${uid}-webbplats`}>Lämna detta fält tomt</label>
        <input
          id={`${uid}-webbplats`}
          name="webbplats"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
          Vi använder dina uppgifter endast för att besvara din förfrågan.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-13 items-center justify-center gap-3 bg-copper-deep px-7 py-3.5 font-semibold text-limestone transition-colors duration-300 hover:bg-graphite disabled:cursor-wait disabled:opacity-80"
        >
          {pending && (
            <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
          )}
          {pending ? "Skickar…" : "Skicka förfrågan"}
        </button>
      </div>
    </form>
  );
}

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const inputClass =
  "block min-h-13 w-full border border-graphite/25 bg-limestone px-4 text-base text-graphite transition-colors duration-200 placeholder:text-ink-muted/70 hover:border-graphite/50 focus:border-graphite focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-copper-deep aria-invalid:border-copper-deep";

function Field({
  label,
  htmlFor,
  error,
  hint,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between gap-3 text-sm font-semibold"
      >
        {label}
        {optional && (
          <span className="text-xs font-medium text-ink-muted">Valfritt</span>
        )}
      </label>
      {hint && (
        <p id={`${htmlFor}-tips`} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p
          id={`${htmlFor}-fel`}
          className="mt-2 text-sm font-medium text-copper-deep"
        >
          {error}
        </p>
      )}
    </div>
  );
}
