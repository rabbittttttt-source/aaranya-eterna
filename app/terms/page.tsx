import Link from 'next/link';

export const metadata = {
  title: 'Terms',
  description: 'Draft terms and conditions for Aaranya Eterna.',
};

export default function TermsPage() {
  return (
    <div className="page-content container legal-page">
      <h1>Terms & Conditions (Draft)</h1>
      <p>
        These terms are a draft template. They describe how the website and concept offerings are intended to work and should be reviewed before the business begins live operations.
      </p>
      <p>
        Users are responsible for providing accurate information when submitting forms or making booking requests. Aaranya Eterna may change offerings, pricing, or service availability at any time before a confirmed booking is accepted.
      </p>
      <p>
        By using the site, users agree not to misuse the platform, impersonate others, or submit abusive or unlawful information. Any breach may result in account restrictions or removal of access.
      </p>
      <Link href="/refund" className="button button-secondary">Read Refund Policy</Link>
    </div>
  );
}
