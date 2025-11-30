import React from 'react'
import { FaRobot, FaCode, FaProjectDiagram } from 'react-icons/fa'

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaRobot className="text-4xl mb-4 text-blue-500" />,
      title: 'AI-Powered Learning',
      description: 'Personalized curriculum adapts to your learning pace and style.',
    },
    {
      icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
      title: 'Real-Time Feedback',
      description: 'Get instant code reviews and optimization suggestions from our AI.',
    },
    {
      icon: <FaProjectDiagram className="text-4xl mb-4 text-blue-500" />,
      title: 'Industry-Relevant Projects',
      description: 'Build a portfolio with projects that matter in today\'s job market.',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

