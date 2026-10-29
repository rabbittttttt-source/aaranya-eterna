export const metadata = {
  title: 'About',
  description: 'Learn about the vision behind Aaranya Eterna and the values guiding the brand.',
};

export default function AboutPage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>Nature as a place for remembrance, renewal, and meaning.</h1>
      </section>

      <section className="content-section split-layout">
        <div>
          <p>
            Aaranya Eterna is imagined as a premium destination where people can honour memory, celebrate life milestones, and imagine a future shaped by stillness and nature.
          </p>
          <p>
            The brand voice is calm, thoughtful, and elegant. It avoids hard sales language and instead focuses on trust, clarity, and the emotional meaning behind tree dedications and restorative retreat experiences.
          </p>
        </div>
        <div className="info-panel">
          <h3>Brand values</h3>
          <ul>
            <li>Quiet luxury</li>
            <li>Environmental stewardship</li>
            <li>Meaningful rituals</li>
            <li>Respectful, personal experiences</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
