import Hero from '../components/Hero'
import Features from '../components/Features'
import Courses from '../components/Courses'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <div className="container mx-auto px-4 py-8">
        <Courses />
        <div className="text-center mt-8">
          <Link href="/courses" className="text-blue-600 hover:underline">
            Compare all 10 full-stack development courses
          </Link>
        </div>
      </div>
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}
