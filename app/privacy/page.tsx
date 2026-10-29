import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Draft privacy policy for Aaranya Eterna.',
};

export default function PrivacyPage() {
  return (
    <div className="page-content container legal-page">
      <h1>Privacy Policy (Draft)</h1>
      <p>
        Aaranya Eterna collects personal information to respond to enquiries, manage tree dedication requests, simplify booking conversations, and support secure authentication. This policy is a draft and should be reviewed by legal counsel before launch.
      </p>
      <p>
        We use data only for the purpose stated at the time of collection. We do not sell customer data. We store payment or account data using secure providers and do not retain card numbers in the application itself.
      </p>
      <p>
        If you are using the service, you may request access, correction, or deletion of your records where local law permits. Contact us at hello@aaranyaeterna.example for more information.
      </p>
      <Link href="/terms" className="button button-secondary">Read Terms</Link>
    </div>
  );
}
