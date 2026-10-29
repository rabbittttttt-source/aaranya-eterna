import Link from 'next/link';

export const metadata = {
  title: 'Login',
  description: 'Login to Aaranya Eterna with your email and password.',
};

export default function LoginPage() {
  return (
    <div className="page-content container auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <p>Access your account and your personal records securely.</p>
        <form className="form-card compact-form">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required />
          </label>
          <button type="submit" className="button button-primary">Login</button>
        </form>
        <div className="auth-meta">
          <Link href="/auth/register">Create an account</Link>
          <Link href="/auth/reset">Reset password</Link>
        </div>
      </div>
    </div>
  );
}
