"use server"

import { createClient } from "@/lib/supabase/server"

export async function registerEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || !email.includes("@")) {
    return { error: "Vennligst oppgi en gyldig e-postadresse" }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("registrations")
    .insert({ email: email.toLowerCase().trim() })

  if (error) {
    if (error.code === "23505") {
      return { error: "Denne e-postadressen er allerede registrert" }
    }
    return { error: "Noe gikk galt. Prøv igjen senere." }
  }

  return { success: true }
}
