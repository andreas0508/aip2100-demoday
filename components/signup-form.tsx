"use client"

import { useState } from "react"
import { registerEmail } from "@/app/actions"

export function SignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")
    const result = await registerEmail(formData)
    
    if (result.error) {
      setStatus("error")
      setMessage(result.error)
    } else {
      setStatus("success")
      setMessage("Takk! Vi sender deg en invitasjon.")
    }
  }

  if (status === "success") {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
          <p className="text-primary font-medium">{message}</p>
        </div>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <p className="text-primary text-sm tracking-widest uppercase text-center">
        Be om invitasjon
      </p>
      <div className="space-y-3">
        <input
          type="email"
          name="email"
          placeholder="din@epost.no"
          required
          className="w-full px-4 py-4 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
        >
          {status === "loading" ? "SENDER..." : "SEND"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-destructive text-sm text-center">{message}</p>
      )}
      <p className="text-muted-foreground text-xs text-center">
        AI I PRAKSIS — HØYSKOLEN KRISTIANIA
      </p>
    </form>
  )
}
