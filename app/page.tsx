import { SignupForm } from "@/components/signup-form"

export default function DemoDay() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg text-center space-y-8">
        {/* Header */}
        <header className="space-y-1">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Høyskolen Kristiania · AIP2100
          </p>
        </header>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            Demo Day
          </h1>
          <p className="text-5xl md:text-6xl font-bold text-primary">2026</p>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-foreground text-lg font-medium text-balance">
            20 team. 15+ bransjer. Hundrevis av intervjuer med norsk næringsliv.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed text-pretty">
            Etter et helt semester med research presenterer studentene i{" "}
            <span className="text-primary">AI i praksis</span> sine funn og
            konkrete AI-anbefalinger — direkte til beslutningstakerne.
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-1 text-muted-foreground text-sm tracking-widest uppercase">
          <p>Mai 2026</p>
          <p>Oslo</p>
          <p>Kun inviterte</p>
        </div>

        {/* Signup Form */}
        <SignupForm />
      </div>
    </main>
  )
}
