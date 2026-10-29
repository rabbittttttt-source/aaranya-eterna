import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Contact Aaranya Eterna for enquiries, custom plans, tree dedications, and future retreat conversations.',
};

export default function ContactPage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">Contact</p>
        <h1>Ask us anything about a dedication, a memorial, or a future forest stay.</h1>
      </section>

      <section className="split-layout">
        <div>
          <p>We welcome thoughtful questions and custom enquiries.</p>
          <div className="info-panel compact">
            <h3>Connect</h3>
            <ul>
              <li>Email: hello@aaranyaeterna.example</li>
              <li>Phone: +91 99999 99999</li>
              <li><a href="https://wa.me/919999999999?text=Hello%20Aaranya%20Eterna%2C%20I%20would%20like%20to%20ask%20about%20a%20tree%20dedication." target="_blank" rel="noreferrer">WhatsApp enquiry</a></li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
