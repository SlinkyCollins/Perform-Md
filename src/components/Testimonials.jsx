"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    rating: 5,
    timeAgo: "1 Year Ago",
    text: "Dr. Peter Michael And The Team At Perform MD Worked Wonders For My Chronic Wrist Pain. Their Regenerative Treatments Brought Relief I Never Thought Possible. Grateful For Their Expertise!",
    source: "Google Reviews",
  },
  {
    id: 2,
    rating: 5,
    timeAgo: "6 Months Ago",
    text: "Michael Is A Miracle Worker! Thanks To Perform MD, My Shoulder Pain Is Finally A Thing Of The Past. The Personalized Care And Advanced Treatments Made All The Difference.",
    source: "Google Reviews",
  },
  {
    id: 3,
    rating: 5,
    timeAgo: "3 Weeks Ago",
    text: "Kudos To Perform MD For Their Incredible Spine Care! Dr. Peter Michael's Expertise Eased My Chronic Neck Pain. Grateful For The Attentive Staff And Life-Changing Treatments.",
    source: "Google Reviews",
  },
  {
    id: 4,
    rating: 5,
    timeAgo: "3 Weeks Ago",
    text: "If You're Struggling With Neck Pain, Look No Further Than Perform MD. Dr. Michael And His Team Are Dedicated Professionals Who Genuinely Care. Their Treatments Worked Wonders For Me!",
    source: "Google Reviews",
  },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="bg-slate-900 text-white py-12 lg:py-16">
            <div className="container mx-auto px-4">
                {/* Mobile View - Single Testimonial */}
                <div className="lg:hidden">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                            ))}
                            <span className="ml-2 text-gray-400">{testimonials[currentIndex].timeAgo}</span>
                        </div>
                        <p className="text-lg mb-6 leading-relaxed">{testimonials[currentIndex].text}</p>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">G</span>
                            </div>
                            <span className="font-medium">Google Reviews</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full">
                            <div
                                className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Desktop View - Multiple Testimonials */}
                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center justify-between mb-8">
                            <Button variant="ghost" size="icon" onClick={prevTestimonial} className="text-white hover:text-cyan-400">
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={nextTestimonial} className="text-white hover:text-cyan-400">
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="space-y-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                                        ))}
                                        <span className="ml-2 text-sm text-gray-400">{testimonial.timeAgo}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed">{testimonial.text}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-blue-500 rounded-sm flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">G</span>
                                        </div>
                                        <span className="text-sm font-medium">{testimonial.source}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto">
                        *DISCLAIMER: Like All Medical Procedures, Perform MD Regenerative Orthopedics And Spine® Procedures Have A
                        Success And Failure Rate. Patient Reviews And Testimonials On This Site Should Not Be Interpreted As A
                        Statement On The Effectiveness Of Our Treatments For Anyone Else.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials