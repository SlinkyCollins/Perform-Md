"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, User } from "lucide-react"
import Link from "next/link"

export default function HeroForm({ bgImage }) {
  return (
    <section
      className="relative py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg?height=600&width=1200')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto lg:max-w-lg">
          <div className="text-white text-center lg:text-left mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Back To The Activities You Love, Without Surgery.
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Receive A Regenexx® Patient Info Packet By Email To Learn More About Our Regenerative Orthopedic
              Procedures.
            </p>
          </div>

          <form className="space-y-4">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name *"
              className="h-12 bg-white/90 border-0 placeholder:text-gray-600"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              className="h-12 bg-white/90 border-0 placeholder:text-gray-600"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              className="h-12 bg-white/90 border-0 rounded-none placeholder:text-gray-600 text-black"
            />
            <Button type="submit" className="w-full h-12 bg-cyan-500 rounded-none hover:bg-cyan-600 text-white font-medium text-lg cursor-pointer">
              SEND
            </Button>
          </form>

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9 text-white text-sm justify-center sm:justify-start">
            <Link href="tel:702-830-7216" className="flex items-center gap-2 hover:text-cyan-400 transition-colors lg:text-xl">
              <Phone className="w-4 h-4 text-[#50C3E9] lg:w-6 lg:h-6" />
              Call 702-830-7216
            </Link>
            <Link href="/candidate" className="flex items-center gap-2 hover:text-cyan-400 transition-colors lg:text-xl">
              <User className="w-4 h-4 text-[#50C3E9] lg:w-6 lg:h-6" />
              Are you a candidate?
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
