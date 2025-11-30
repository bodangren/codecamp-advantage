import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us - Reading Advantage (Thailand)',
  description: 'Learn about Reading Advantage (Thailand) and our innovative educational platforms',
}

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Reading Advantage (Thailand)"
        subtitle="Revolutionizing Education Through Innovation"
      />
      <main className="container mx-auto px-4 py-12">
        <section className="prose max-w-none lg:prose-xl" aria-labelledby="about-us">
          <h1 id="about-us" className="sr-only">About Reading Advantage (Thailand)</h1>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            Reading Advantage (Thailand) is at the forefront of educational technology, committed to transforming learning experiences across Southeast Asia. Our mission is to make high-quality education accessible to all, fostering language proficiency, coding skills, and personal growth through innovative, AI-enhanced learning solutions.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p>
            We envision a future where every learner in Thailand and Southeast Asia has the tools and opportunities to reach their full potential. By bridging educational gaps and leveraging cutting-edge technology, we aim to empower students, educators, and communities to thrive in an increasingly digital world.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-12 mb-6">Our Innovative Platforms</h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">Reading Advantage</h3>
            <p className="mb-4">
              An AI-powered extensive reading platform designed to enhance language learning through:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized content across multiple proficiency levels</li>
              <li>Interactive exercises and comprehension questions</li>
              <li>Spaced Repetition System (SRS) for effective vocabulary retention</li>
              <li>Engaging progress tracking using an XP system</li>
            </ul>

          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">Tutor Advantage</h3>
            <p className="mb-4">
              A comprehensive tutoring platform that combines AI-generated content with a network of skilled tutors:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized learning paths tailored to individual needs</li>
              <li>AI-powered content generation for diverse and engaging lessons</li>
              <li>Ethical multi-level marketing structure to expand our reach and impact</li>
              <li>Seamless integration with Reading Advantage for enhanced learning experiences</li>
            </ul>

          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4">Codecamp Advantage</h3>
            <p className="mb-4">
              An intensive, AI-driven coding bootcamp focused on cutting-edge web development skills:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>71-day comprehensive curriculum covering Next.js 14, React, TypeScript, and Google Cloud Platform</li>
              <li>Project-based learning with four major real-world projects</li>
              <li>AI-powered code review and feedback system</li>
              <li>Integration of industry-standard tools and practices</li>
            </ul>

          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-12 mb-6">Our Commitment to Social Impact</h2>
          <p className="mb-4">
            At Reading Advantage (Thailand), we believe in the power of education to transform lives and communities. Our initiatives include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>"Pay It Forward" Education Program: Providing free or discounted access to our platforms for underprivileged students</li>
            <li>Future Leaders Program: Supporting high-potential students from disadvantaged backgrounds</li>
            <li>Community Impact Tracking: Measuring and reporting on our social impact to ensure we're making a real difference</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-12 mb-6">Join Us in Shaping the Future of Education</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            Whether you're a student eager to learn, an educator looking to enhance your teaching, or a school administrator seeking innovative solutions, Reading Advantage (Thailand) is here to support your educational journey. Together, we can create a brighter, more knowledgeable future for all.
          </p>

          <p className="text-2xl md:text-3xl font-semibold text-blue-600 italic text-center mt-12">
            Discover the power of AI-enhanced learning with Reading Advantage (Thailand) - where innovation meets education.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
