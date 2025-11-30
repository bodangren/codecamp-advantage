import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

export default function GetStarted() {
  return (
    <>
      <Hero 
        title="Get Started with Codecamp Advantage"
        subtitle="Your gateway to a thriving career in web development"
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-24">
        <div className="z-10 max-w-4xl w-full">
          <p className="mb-8 text-lg text-center">
            Welcome to Codecamp Advantage! We're excited to embark on this transformative journey with you. Follow these steps to begin your adventure into the world of coding:
          </p>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Choose Your Path</h2>
            <p className="mb-4">
              Select the course that aligns with your goals. Whether you're a complete beginner or looking to level up your skills, we have the perfect program for you. Contact our admissions team to discuss your options:
            </p>
            <p className="mb-4 font-semibold">
              Email: admin@reading-advantage.com
            </p>
            <p>Our team will guide you through the course options and help you make the best choice for your career aspirations.</p>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">2. Secure Your Spot</h2>
            <p className="mb-4">Once you've chosen your course, it's time to reserve your place:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Units 0-1 are completely free! This allows you to experience our cutting-edge platform and ensure it's the right fit for you.</li>
              <li>For subsequent units, you'll need to provide payment information. We offer flexible payment plans to suit your needs.</li>
              <li>Remember, you're not just paying for a course—you're investing in your future.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">3. Set Up Your Account</h2>
            <p className="mb-4">To access our platform, you'll use your GitHub credentials. This integration allows for seamless code sharing and version control throughout the course.</p>
            <ul className="list-disc list-inside mb-4">
              <li>If you don't have a GitHub account, create one at <a href="https://github.com" className="text-blue-600 hover:underline">github.com</a>.</li>
              <li>Once you have your GitHub account, you can log in to Codecamp Advantage using those credentials.</li>
            </ul>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">4. Embrace the AI-Enhanced Learning Experience</h2>
            <p className="mb-4">Our platform leverages advanced AI to provide a personalized and interactive learning experience. To get the most out of your course:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Engage with Integrity:</strong> Our AI is here to assist, not to do the work for you. Approach each interaction with honesty and a genuine desire to learn.</li>
              <li><strong>Ask Questions Abundantly:</strong> There's no such thing as a silly question. Our AI thrives on your curiosity, so ask away!</li>
              <li><strong>Dive Deep into Exercises:</strong> Each exercise is crafted to build your skills. Approach them with diligence and attention to detail.</li>
              <li><strong>Reflect and Apply:</strong> After each lesson, take time to think about how you can apply what you've learned to real-world scenarios.</li>
            </ul>
            <p>Remember, in coding as in life, you get out what you put in. Your dedication and hard work here will directly translate to your future success.</p>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">5. Connect with Your Coding Community</h2>
            <p className="mb-4">You're not on this journey alone! Take advantage of our vibrant community (coming soon!):</p>
            <ul className="list-disc list-inside mb-4">
              <li>Participate in discussion forums</li>
              <li>Join study groups</li>
              <li>Attend virtual meetups and workshops</li>
            </ul>
            <p>Building your network now can lead to exciting opportunities in the future.</p>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">6. Look to Your Bright Future</h2>
            <p className="mb-4">As you begin this journey, keep your eyes on the horizon. Every line of code you write, every problem you solve, and every concept you master is a step toward a fulfilling career in tech. Visualize yourself:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Building innovative web applications that impact millions</li>
              <li>Collaborating with talented developers from around the world</li>
              <li>Continuously learning and growing in a dynamic field</li>
            </ul>
            <p>Your future in coding starts here, and it's brilliantly bright!</p>
          </section>

          <section className="mb-12 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
            <p className="mb-4">
              The world of web development is waiting for you. Your next great achievement, your "aha!" moment, your future career breakthrough—it all starts with the first step.
            </p>
            <p className="mb-8">
              Click the "Start Learning" button below to begin your coding odyssey with Codecamp Advantage. Let's shape the future of the web together!
            </p>
            <div className="text-center">
              <Link href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Start Learning
              </Link>
            </div>
          </section>

          <p className="text-xl font-semibold text-center mt-12 mb-8">
            Welcome aboard, future coding champion! We can't wait to see what you'll create.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
