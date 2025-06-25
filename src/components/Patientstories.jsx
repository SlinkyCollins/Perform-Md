"use client"

import { Play } from "lucide-react"
import { useState } from "react"

const stories = [
  {
    id: 1,
    title: "Meniscus tear Recovery without surgery",
    subtitle: "Martin Fuentes (Regenexx)",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "Ellie Pro Comeback Story",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    title: "Ellie Pro Comeback Story",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 4,
    title: "Crossfit National Master's Champion Story",
    thumbnail: "/placeholder.svg?height=150&width=200",
  },
]

const Patientstories = () => {
    const [selectedStory, setSelectedStory] = useState(stories[0])
  return (
    <section className="bg-slate-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12">
          <span className="lg:hidden">Patient Stories</span>
          <span className="hidden lg:inline">Regenexx® Patient Success Stories</span>
        </h2>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="max-w-md mx-auto">
            <div className="relative group cursor-pointer">
              <img
                src={selectedStory.thumbnail || "/placeholder.svg"}
                alt={selectedStory.title}
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold mb-1">{selectedStory.title}</h3>
                {selectedStory.subtitle && <p className="text-sm text-gray-300">– {selectedStory.subtitle}</p>}
              </div>
            </div>
            <div className="mt-6 h-1 bg-slate-800 rounded-full">
              <div className="h-full bg-cyan-400 rounded-full w-1/4" />
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <div className="relative group cursor-pointer">
                <img
                  src={selectedStory.thumbnail || "/placeholder.svg"}
                  alt={selectedStory.title}
                  className="w-full rounded-lg aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold mb-2">{selectedStory.title}</h3>
                  {selectedStory.subtitle && <p className="text-gray-300">– {selectedStory.subtitle}</p>}
                </div>
              </div>
            </div>

            {/* Video Sidebar */}
            <div className="space-y-4">
              {stories.slice(1).map((story) => (
                <div key={story.id} className="relative group cursor-pointer" onClick={() => setSelectedStory(story)}>
                  <img
                    src={story.thumbnail || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full rounded-lg aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-sm font-medium leading-tight">{story.title}</h4>
                  </div>
                </div>
              ))}

              {/* Show More Button */}
              <div className="flex justify-center pt-4">
                <button className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Patientstories