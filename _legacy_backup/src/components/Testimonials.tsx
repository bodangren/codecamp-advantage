import React from 'react'
import Image from 'next/image'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The AI-powered feedback was like having a personal mentor available 24/7. It helped me improve my coding skills faster than I thought possible.",
      author: "Sarah J.",
      role: "Full-Stack Developer",
      avatar: "/avatar-1.jpg",
    },
    {
      quote: "I tried other online courses, but the personalized learning path in this AI Codecamp made all the difference. I landed my dream job after just 3 months!",
      author: "Mike T.",
      role: "Frontend Specialist",
      avatar: "/avatar-2.jpg",
    },
  ]

  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.author} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
