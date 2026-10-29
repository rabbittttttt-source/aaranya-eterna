import { BookingForm } from '@/components/BookingForm';

export const metadata = {
  title: 'Stay / Retreat',
  description: 'Explore the concept of a future retreat experience rooted in trees, calm, and thoughtful hospitality.',
};

export default function StayPage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">Stay / Retreat Concept</p>
        <h1>A calm forest retreat experience shaped for gentle renewal.</h1>
      </section>

      <section className="split-layout">
        <div>
          <p>
            This section describes a future guest experience built around introspection, nature immersion, slow mornings, and restorative design. It is presented as a concept until verified operational details are finalised.
          </p>
          <ul className="feature-list">
            <li>Quiet & nature-centred stays</li>
            <li>Personalized guest journeys</li>
            <li>Future retreat planning</li>
            <li>Flexible cancellation options</li>
          </ul>
        </div>
        <BookingForm />
      </section>
    </div>
  );
}
