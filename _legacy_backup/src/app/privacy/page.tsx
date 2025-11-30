import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy - Codecamp Advantage',
  description: 'Privacy Policy for Codecamp Advantage',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
      />
      <main className="container mx-auto px-4 py-8">
        <section className="prose max-w-none" aria-labelledby="privacy-policy">
          <h1 id="privacy-policy" className="sr-only">Privacy Policy</h1>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact us for support. This may include your name, email address, payment information, and any other information you choose to provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events.
          </p>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>
            We do not share your personal information with third parties except as described in this policy. We may share your information with service providers who perform services on our behalf, or when required by law.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2>5. Your Rights and Choices</h2>
          <p>
            You may update, correct, or delete your account information at any time by logging into your online account or by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those messages.
          </p>

          <h2>6. Cookies and Similar Technologies</h2>
          <p>
            We use cookies and similar technologies to collect information about your browsing activities and to personalize your experience on our site.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at privacy@codecampadvantage.com.
          </p>

          <p>Last Updated: {new Date().toISOString().split('T')[0]}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
