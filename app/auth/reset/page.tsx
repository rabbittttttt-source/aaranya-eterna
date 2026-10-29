import Link from 'next/link';

export const metadata = {
  title: 'Reset Password',
  description: 'Send a password reset email for Aaranya Eterna.',
};

export default function ResetPage() {
  return (
    <div className="page-content container auth-page">
      <div className="auth-card">
        <h1>Reset password</h1>
        <p>Enter your email to receive a reset link.</p>
        <form className="form-card compact-form">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <button type="submit" className="button button-primary">Send reset link</button>
        </form>
        <div className="auth-meta">
          <Link href="/auth/login">Back to login</Link>
        </div>
      </div>
    </div>
  );
}
