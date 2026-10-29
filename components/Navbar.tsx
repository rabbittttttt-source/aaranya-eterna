import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/tree', label: 'Tree Dedication' },
  { href: '/stay', label: 'Stay / Retreat' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="Aaranya Eterna home">
          <span className="brand-mark">A</span>
          <span>Aaranya Eterna</span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/auth/login" className="button button-ghost">
            Login
          </Link>
          <Link href="/contact" className="button button-primary">
            Enquire
          </Link>
        </div>
      </div>
    </header>
  );
}
