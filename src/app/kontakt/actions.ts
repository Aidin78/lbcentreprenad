"use server";

import { projectTypeOptions } from "@/content/services";
import { site } from "@/content/site";
import {
  readQuoteForm,
  validateQuote,
  type QuoteInput,
  type QuoteState,
} from "@/lib/quote-schema";

const fallbackContact = `Ring ${site.phone.display} eller maila ${site.email} så hjälper vi dig direkt.`;

export async function sendQuoteRequest(
  _previous: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  if (String(formData.get("webbplats") ?? "") !== "") {
    return { status: "success" };
  }

  const values = readQuoteForm(formData);
  const { data, errors } = validateQuote(values);
  if (!data) {
    return {
      status: "error",
      message: "Kontrollera de markerade fälten.",
      errors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL ?? site.email;

  if (!apiKey || !from) {
    console.error(
      "Offertformuläret saknar RESEND_API_KEY eller QUOTE_FROM_EMAIL.",
    );
    return {
      status: "error",
      message: `Formuläret kan inte skicka meddelanden just nu. ${fallbackContact}`,
      errors: {},
      values,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.epost,
        subject: `Offertförfrågan: ${projectLabel(data)} – ${data.namn}`,
        text: emailBody(data),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        "Resend svarade med status",
        response.status,
        await response.text(),
      );
      throw new Error("E-postleverantören avvisade meddelandet");
    }
  } catch (error) {
    console.error("Kunde inte skicka offertförfrågan", error);
    return {
      status: "error",
      message: `Något gick fel och förfrågan skickades inte. ${fallbackContact}`,
      errors: {},
      values,
    };
  }

  return { status: "success" };
}

function projectLabel(data: QuoteInput) {
  return (
    projectTypeOptions.find((o) => o.value === data.projekttyp)?.label ??
    data.projekttyp
  );
}

function emailBody(data: QuoteInput) {
  return [
    "Ny offertförfrågan via webbplatsen",
    "",
    `Namn: ${data.namn}`,
    `E-post: ${data.epost}`,
    `Telefon: ${data.telefon || "–"}`,
    `Typ av projekt: ${projectLabel(data)}`,
    "",
    "Projektbeskrivning:",
    data.beskrivning,
  ].join("\n");
}
