import Link from 'next/link';

export const metadata = {
  title: 'Register',
  description: 'Create a secure account with Aaranya Eterna.',
};

export default function RegisterPage() {
  return (
    <div className="page-content container auth-page">
      <div className="auth-card">
        <h1>Create account</h1>
        <p>Register to save your bookings, dedications, and personal information.</p>
        <form className="form-card compact-form">
          <label>
            Full name
            <input type="text" name="full_name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" minLength={8} required />
          </label>
          <button type="submit" className="button button-primary">Register</button>
        </form>
        <div className="auth-meta">
          <Link href="/auth/login">Back to login</Link>
        </div>
      </div>
    </div>
  );
}
