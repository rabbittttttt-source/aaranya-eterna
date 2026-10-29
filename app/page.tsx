import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/lib/site';

const highlights = [
  { title: 'Meaningful memorials', text: 'Create a quiet, lasting tribute that reflects a life, memory, or milestone with care and intention.' },
  { title: 'Forest-first experiences', text: 'Explore future stay experiences shaped around nature, mindful routines, and a calm rhythm.' },
  { title: 'Private, elegant process', text: 'From dedication to booking, every step is designed to feel personal, premium, and secure.' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">A future forest sanctuary</p>
            <h1>Plant lasting memories in a quieter, greener world.</h1>
            <p className="hero-copy">
              Aaranya Eterna is a nature-based concept for heartfelt tree dedications, memorials, personal milestones, and future retreat experiences designed with intention.
            </p>
            <div className="button-row">
              <Link href="/tree" className="button button-primary">
                Dedicate a tree
              </Link>
              <Link href="/stay" className="button button-secondary">
                Explore stays
              </Link>
            </div>
            <ul className="mini-stats">
              <li><strong>Tree dedication</strong><span>Meaningful</span></li>
              <li><strong>Retreat concept</strong><span>Future-facing</span></li>
              <li><strong>Luxury quiet</strong><span>Mindful</span></li>
            </ul>
          </div>
          <div className="hero-card">
            <div className="card-badge">Concept preview</div>
            <h3>Designed for remembrance, reflection, and future renewal.</h3>
            <p>
              The experience is imagined as a premium nature destination where every tree can carry personal meaning and every visit can feel restorative.
            </p>
            <div className="hero-price-box">
              <span>Future offering</span>
              <strong>Private, guided, and thoughtful</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section muted-bg">
        <div className="container">
          <SectionHeading
            eyebrow="Why Aaranya Eterna"
            title="A destination shaped around care, memory, and nature."
            description="This brand concept focuses on meaningful experiences built for reflection, legacy, and slow living."
            align="center"
          />
          <div className="cards-grid three-up">
            {highlights.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Thoughtful design for quiet, premium experiences.</h2>
            <p>
              Aaranya Eterna is a place for families, individuals, and communities to honour milestones with nature, dignity, and beauty. The digital experience reflects that calm, elevated tone through clear storytelling, soft contrast, and accessible structure.
            </p>
          </div>
          <div className="info-panel">
            <h3>Brand intent</h3>
            <ul>
              <li>Forest green, warm ivory, and quiet gold</li>
              <li>Elegant typography and strong readability</li>
              <li>Mobile-first and accessible by default</li>
              <li>SEO ready and built for trust</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section gradient-bg">
        <div className="container center-box">
          <p className="eyebrow">Ready to begin?</p>
          <h2>Start with a tree dedication or a stay enquiry.</h2>
          <div className="button-row center">
            <Link href="/tree" className="button button-primary">Dedicate a tree</Link>
            <Link href="/contact" className="button button-secondary">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Aaranya Eterna',
  description: siteConfig.description,
};
