"use client"
import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu, X, Phone, Calendar } from "lucide-react"
import Link from "next/link"

const servicesItems = ["Knee", "Hip", "Shoulder", "Foot & Ankle", "Hand & Wrist", "Elbow", "Spine"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-slate-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-gray-300">GIVE US A CALL</span>
            <Link href="tel:+18888282131" className="text-cyan-400 hover:text-cyan-300">
              +1 (888) 828-2131
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">SCHEDULE APPOINTMENT</span>
            <Link href="/schedule" className="text-cyan-400 hover:text-cyan-300">
              CLICK HERE
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Contact Info */}
            <div className="lg:hidden flex flex-col text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <span>GIVE US A CALL</span>
                <Link href="tel:+18888282131" className="text-cyan-400">
                  +1 (888) 828-2131
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span>SCHEDULE APPOINTMENT</span>
                <Link href="/schedule" className="text-cyan-400">
                  CLICK HERE
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm lg:text-base">P</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg lg:text-xl font-bold">PERFORM MD</div>
                  <div className="text-xs text-gray-400 -mt-1">REGENERATIVE ORTHOPEDICS & SPINE</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="hover:text-cyan-400 transition-colors">
                ABOUT US
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  SERVICES
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {servicesItems.map((item) => (
                      <Link
                        key={item}
                        href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                        className="block px-4 py-2 text-sm hover:bg-slate-700 hover:text-cyan-400 transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/learn-more" className="hover:text-cyan-400 transition-colors">
                LEARN MORE
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  LOCATIONS
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
                <Link href="/call">
                  CALL NOW
                  <Phone className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
                <Link href="/schedule">
                  SCHEDULE
                  <Calendar className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-slate-900 text-white border-slate-800">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between py-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                      <div>
                        <div className="text-lg font-bold">PERFORM MD</div>
                        <div className="text-xs text-gray-400 -mt-1">REGENERATIVE ORTHOPEDICS & SPINE</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                      <X className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="py-4 border-b border-slate-800 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-300">GIVE US A CALL</span>
                      <Link href="tel:+18888282131" className="text-cyan-400">
                        +1 (888) 828-2131
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-300">SCHEDULE APPOINTMENT</span>
                      <Link href="/schedule" className="text-cyan-400">
                        CLICK HERE
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6 space-y-6">
                    <Link
                      href="/about"
                      className="block text-xl font-medium hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      ABOUT US
                    </Link>

                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-xl font-medium hover:text-cyan-400 transition-colors"
                      >
                        SERVICES
                        <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="mt-4 ml-4 space-y-3">
                          {servicesItems.map((item) => (
                            <Link
                              key={item}
                              href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/learn-more"
                      className="block text-xl font-medium hover:text-cyan-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      LEARN MORE
                    </Link>

                    <div>
                      <button
                        onClick={() => setLocationsOpen(!locationsOpen)}
                        className="flex items-center justify-between w-full text-xl font-medium hover:text-cyan-400 transition-colors"
                      >
                        LOCATIONS
                        <ChevronDown className={`w-5 h-5 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="space-y-4 pb-6">
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white h-12 text-lg" asChild>
                      <Link href="/schedule" onClick={() => setIsOpen(false)}>
                        SCHEDULE
                        <Calendar className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-slate-900 h-12 text-lg"
                      asChild
                    >
                      <Link href="/call" onClick={() => setIsOpen(false)}>
                        CALL NOW
                        <Phone className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
