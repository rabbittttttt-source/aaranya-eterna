import { TreeDedicationForm } from '@/components/TreeDedicationForm';

export const metadata = {
  title: 'Tree Dedication',
  description: 'Request a meaningful tree dedication or memorial tribute through Aaranya Eterna.',
};

export default function TreePage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">Tree Dedication</p>
        <h1>Mark a life, a milestone, or a future intention with a living tribute.</h1>
      </section>

      <section className="split-layout">
        <div>
          <p>
            Your dedication can honour a loved one, celebrate a family achievement, or mark a personal chapter with care. Every request is reviewed individually and every tree is given a unique identifier for private tracking and future communication.
          </p>
          <ul className="feature-list">
            <li>Unique tree ID generation</li>
            <li>Private QR-based reference page</li>
            <li>Memorial, gratitude, or milestone celebration</li>
            <li>Conceptual and future-facing service flow</li>
          </ul>
        </div>
        <TreeDedicationForm />
      </section>
    </div>
  );
}
