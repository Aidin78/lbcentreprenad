import { z } from "zod";

import { projectTypeOptions } from "@/content/services";

const projectTypes = projectTypeOptions.map((o) => o.value) as [
  string,
  ...string[],
];

export const quoteSchema = z.object({
  namn: z
    .string()
    .trim()
    .min(2, "Ange ditt namn.")
    .max(120, "Namnet är för långt."),
  epost: z
    .string()
    .trim()
    .min(1, "Ange din e-postadress.")
    .pipe(
      z.email("Ange en giltig e-postadress, till exempel namn@exempel.se."),
    ),
  telefon: z
    .string()
    .trim()
    .max(30, "Telefonnumret är för långt.")
    .refine(
      (value) => value === "" || /^\+?[\d\s()-]{7,}$/.test(value),
      "Ange ett giltigt telefonnummer, till exempel 070-123 45 67.",
    ),
  projekttyp: z.enum(projectTypes, {
    error: "Välj vilken typ av projekt det gäller.",
  }),
  beskrivning: z
    .string()
    .trim()
    .min(20, "Beskriv projektet med minst 20 tecken.")
    .max(4000, "Beskrivningen får vara högst 4 000 tecken."),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteField = keyof QuoteInput;
export type QuoteErrors = Partial<Record<QuoteField, string>>;

export const quoteFields = Object.keys(quoteSchema.shape) as QuoteField[];

export function readQuoteForm(formData: FormData) {
  return Object.fromEntries(
    quoteFields.map((field) => [field, String(formData.get(field) ?? "")]),
  ) as Record<QuoteField, string>;
}

export function validateQuote(values: Record<QuoteField, string>) {
  const result = quoteSchema.safeParse(values);
  if (result.success) return { data: result.data, errors: {} as QuoteErrors };
  const errors: QuoteErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as QuoteField;
    errors[field] ??= issue.message;
  }
  return { data: null, errors };
}

export type QuoteState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      message: string;
      errors: QuoteErrors;
      values: Record<QuoteField, string>;
    };
