import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

const painLinks = [
  { name: "Knee Pain", href: "/services/knee-pain" },
  { name: "Hip Pain", href: "/services/hip-pain" },
  { name: "Shoulder Pain", href: "/services/shoulder-pain" },
  { name: "Neck Pain", href: "/services/neck-pain" },
  { name: "Spine Pain", href: "/services/spine-pain" },
  { name: "Hand & Wrist Pain", href: "/services/hand-wrist-pain" },
  { name: "Elbow Pain", href: "/services/elbow-pain" },
  { name: "Ankle & Foot Pain", href: "/services/ankle-foot-pain" },
]

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">Address:</p>
                <p>123 Mockingbird Lane</p>
                <p>Springfield, FA 98765</p>
                <p>United States</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone:</p>
                <Link href="tel:+13052248850" className="hover:text-cyan-400 transition-colors">
                  +1 (305) 224-8850
                </Link>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email:</p>
                <Link href="mailto:Info@perform-md.com" className="hover:text-cyan-400 transition-colors">
                  Info@perform-md.com
                </Link>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300">
              {painLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Learn More Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Learn More</h3>
            <div className="space-y-3 text-gray-300">
              <p className="font-medium text-white">Dr. Peter Michael</p>
              <p className="text-sm lg:text-base">Perform MD regenerative orthopedics and spine</p>
              <Link href="/about" className="inline-block hover:text-cyan-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media and Logo Section */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6">
              <Link
                href="https://instagram.com/performmd"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://youtube.com/performmd"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-6 h-6" />
              </Link>
              {/* <Link
                href="https://tiktok.com/@performmd"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </Link> */}
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <div className="text-lg font-bold">PERFORM MD</div>
                <div className="text-xs text-gray-400 -mt-1">REGENERATIVE ORTHOPEDICS & SPINE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-gray-500">
            © 2023 Perform MD regenerative orthopedics and spine | All rights reserved |{" "}
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer