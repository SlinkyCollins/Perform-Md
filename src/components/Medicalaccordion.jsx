"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const hipConditions = [
  "Arthritis",
  "Meniscus Tears",
  "ACL, MCL, PCL, Or LCL Sprain Or Tear",
  "Knee Instability",
  "Patellofemoral Syndrome/ Chondromalacia",
  "Pes Anserine Bursitis",
  "Baker's Cyst",
  "Patellar Tendonitis",
  "Biceps Femoris Insertional Tendinopathy",
  "Hamstrings Tendinopathy",
]

const outcomeData = [
  {
    percentage: 88,
    label: "Up to 88% Average Function Regained",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    percentage: 34,
    label: "34% Decrease In Joint Pain After 3 Months",
    color: "from-slate-400 to-slate-500",
  },
  {
    percentage: 55,
    label: "55% Overall Improvement After 3 Months",
    color: "from-cyan-400 to-cyan-500",
  },
]

// Circular Progress Component
function CircularProgress({ percentage, label, color }) {
  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      <div className="relative w-24 h-24 lg:w-28 lg:h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-700"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={`stop-color-cyan-400`} />
              <stop offset="100%" className={`stop-color-cyan-500`} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl lg:text-3xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <p className="text-xs lg:text-sm text-gray-300 text-center max-w-32 lg:max-w-40">{label}</p>
    </div>
  )
}

const Medicalaccordion = () => {
  return (
     <section className="bg-slate-900 text-white py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Commonly Treated Elbow Conditions */}
          <AccordionItem value="elbow-conditions" className="border-0">
            <AccordionTrigger className="bg-slate-800 hover:bg-slate-700 px-6 py-4 lg:py-6 rounded-lg border-l-4 border-cyan-400 text-left hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg lg:text-xl font-bold">Commonly Shoulder Conditions</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-800 px-6 pb-6 rounded-b-lg border-l-4 border-cyan-400 mt-1">
              <div className="space-y-4 text-gray-300">
                <p className="text-sm lg:text-base leading-relaxed">
                  This Is Not A Complete List, So Please Contact Us Or Complete The Regenexx Candidate Form If You Have
                  Questions About Whether You Or Your Condition Can Be Treated With These Non-Surgical Procedures.
                </p>
                <ul className="space-y-2">
                  {[
                    "Tennis Elbow (Lateral Epicondylitis)",
                    "Golfer's Elbow (Medial Epicondylitis)",
                    "Elbow Arthritis",
                    "Ulnar Collateral Ligament Injuries",
                    "Elbow Bursitis",
                    "Cubital Tunnel Syndrome",
                  ].map((condition, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Commonly Treated Hip Conditions
          <AccordionItem value="hip-conditions" className="border-0">
            <AccordionTrigger className="bg-slate-800 hover:bg-slate-700 px-6 py-4 lg:py-6 rounded-lg border-l-4 border-cyan-400 text-left hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg lg:text-xl font-bold">Commonly Treated Hip Conditions</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-800 px-6 pb-6 rounded-b-lg border-l-4 border-cyan-400 mt-1">
              <div className="space-y-4 text-gray-300">
                <p className="text-sm lg:text-base leading-relaxed">
                  This Is Not A Complete List, So Please Contact Us Or Complete The Regenexx Candidate Form If You Have
                  Questions About Whether You Or Your Condition Can Be Treated With These Non-Surgical Procedures.
                </p>
                <ul className="space-y-2">
                  {hipConditions.map((condition, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm lg:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>\\ */}

          {/* Patient Outcome Data */}
          <AccordionItem value="outcome-data" className="border-0">
            <AccordionTrigger className="bg-slate-800 hover:bg-slate-700 px-6 py-4 lg:py-6 rounded-lg border-l-4 border-cyan-400 text-left hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg lg:text-xl font-bold">Patient Outcome Data</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-800 px-6 pb-6 rounded-b-lg border-l-4 border-cyan-400 mt-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {outcomeData.map((data, index) => (
                  <CircularProgress key={index} percentage={data.percentage} label={data.label} color={data.color} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* About Regenexx */}
          <AccordionItem value="about-regenexx" className="border-0">
            <AccordionTrigger className="bg-slate-800 hover:bg-slate-700 px-6 py-4 lg:py-6 rounded-lg border-l-4 border-cyan-400 text-left hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg lg:text-xl font-bold">
                  About Regenexx And Our Highly Skilled Physician Network
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-800 px-6 pb-6 rounded-b-lg border-l-4 border-cyan-400 mt-1">
              <div className="space-y-4 text-gray-300">
                <p className="text-sm lg:text-base leading-relaxed">
                  <span className="font-semibold text-white">Regenexx Physicians</span> represent a very selective,
                  highly-skilled, interventional orthopedics network that is 100% focused on orthopedic conditions. All
                  Regenexx physicians are musculoskeletal experts with extensive training and experience in the
                  diagnosis and treatment of musculoskeletal conditions, as well as complex, image-guided injections of
                  your body's own healing agents to treat orthopedic issues. Regenexx patient outcomes are tracked in a
                  registry and with that information, we provide transparent outcome data (below) for those who may be
                  considering this treatment option.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Medicalaccordion