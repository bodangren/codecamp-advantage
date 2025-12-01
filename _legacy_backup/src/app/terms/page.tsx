import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service - Codecamp Advantage',
  description: 'Terms of Service for Codecamp Advantage',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
      />
      <main className="container mx-auto px-4 py-8">
        <section className="prose max-w-none" aria-labelledby="terms-of-service">
          <h1 id="terms-of-service" className="sr-only">Terms of Service</h1>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Codecamp Advantage's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Codecamp Advantage provides online coding bootcamps and related educational services. We reserve the right to modify or discontinue any part of our service without notice.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>

          <h2>4. Payment and Refunds</h2>
          <p>
            Payments for our services are non-refundable unless otherwise specified. We reserve the right to change our pricing at any time.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            The content, organization, graphics, design, and other matters related to Codecamp Advantage are protected under applicable copyrights and other proprietary laws. Copying, redistribution, use or publication of any such matters or any part of the site is prohibited.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Codecamp Advantage shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the services.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will always post the most current version on our site. By continuing to use the service after changes become effective, you agree to be bound by the revised terms.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at [Your Contact Information].
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
