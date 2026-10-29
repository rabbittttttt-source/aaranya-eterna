const faqs = [
  {
    question: 'What is Aaranya Eterna?',
    answer: 'Aaranya Eterna is a conceptual destination brand focused on meaningful tree dedications, memorials, and future forest retreat experiences.',
  },
  {
    question: 'Are the services active now?',
    answer: 'The current site is a premium MVP concept. Operational details and guest offerings will be confirmed before any live service launch.',
  },
  {
    question: 'Can I dedicate a tree?',
    answer: 'Yes, the concept supports tree dedication requests. The process is intentionally simple and reviewed manually.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer: 'Booking confirmations and cancellation policy are intentionally presented in a draft form until verified by the business operations team.',
  },
];

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Aaranya Eterna and its future offerings.',
};

export default function FaqPage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">FAQ</p>
        <h1>Helpful answers before you enquire.</h1>
      </section>

      <div className="faq-list">
        {faqs.map((faq) => (
          <article key={faq.question} className="info-card faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
