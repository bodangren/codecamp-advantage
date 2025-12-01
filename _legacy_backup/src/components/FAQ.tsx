import React from 'react'

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI-powered learning work?",
      answer: "Our AI analyzes your coding style, pace, and areas of difficulty to create a personalized learning path and provide targeted feedback.",
    },
    {
      question: "Can I switch between different tech stack courses?",
      answer: "Yes, you can switch between courses at any time. Your progress will be saved for each course separately.",
    },
    {
      question: "Is there a job placement program?",
      answer: "While we don't offer direct job placement, our courses are designed to prepare you for the job market with relevant skills and portfolio projects.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
