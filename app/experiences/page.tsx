export const metadata = {
  title: 'Experiences',
  description: 'Explore the concept of personalised forest experiences, memorial rituals, and future nature moments.',
};

const experiences = [
  {
    title: 'Tree dedication rituals',
    text: 'A quiet way to honour a life, a family milestone, a personal chapter, or a future intention in a natural setting.',
  },
  {
    title: 'Nature reflection journeys',
    text: 'Thoughtful, guided experiences that help people slow down, reconnect, and reflect in a memorable environment.',
  },
  {
    title: 'Future retreat concept',
    text: 'A carefully designed stay model built around rest, outdoors, wellness, and stillness for future guests.',
  },
];

export default function ExperiencesPage() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">Experiences</p>
        <h1>Quiet experiences designed around care and connection.</h1>
      </section>

      <section className="cards-grid three-up">
        {experiences.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
