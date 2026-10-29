import Link from 'next/link';

export default function AdminHome() {
  return (
    <div className="page-content container">
      <section className="page-header">
        <p className="eyebrow">Admin</p>
        <h1>Access denied</h1>
      </section>
      <p>This area requires a verified administrator account.</p>
      <Link href="/auth/login" className="button button-primary">Login</Link>
    </div>
  );
}
