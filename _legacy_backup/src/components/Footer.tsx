import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">AI Codecamp</h3>
            <p>Empowering developers through AI-assisted learning.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/courses" className="hover:underline">Courses</Link></li>
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/get-started" className="hover:underline">Get Started</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="mb-2">Subscribe to our newsletter for the latest updates.</p>
            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded text-gray-800" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 AI Codecamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
