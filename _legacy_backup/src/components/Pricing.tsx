import React from 'react'

const Pricing: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Pricing</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Daily Learning Plan</h3>
          <p className="text-4xl font-bold mb-4">US$20 <span className="text-lg font-normal">/ daily lesson</span></p>
          <ul className="mb-6">
            <li className="mb-2">✅ Access to all courses</li>
            <li className="mb-2">✅ AI-powered personalized learning</li>
            <li className="mb-2">✅ Real-time code reviews</li>
            <li className="mb-2">✅ Progress tracking</li>
          </ul>
          <p className="mb-4"><strong>Free Trial:</strong> Units 0-1 at no cost</p>
          <a href="#" className="block text-center bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">Start Free Trial</a>
        </div>
      </div>
    </section>
  )
}

export default Pricing

