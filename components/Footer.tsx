import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Aaranya Eterna</h3>
          <p>Meaningful tree dedications and future nature-retreat experiences, thoughtfully designed for remembrance and renewal.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/tree">Tree Dedication</Link></li>
            <li><Link href="/stay">Stay / Retreat</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Aaranya Eterna</span>
        <Link href="/refund">Refund Policy</Link>
      </div>
    </footer>
  );
}
