import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy',
  description: 'Draft refund policy for Aaranya Eterna.',
};

export default function RefundPage() {
  return (
    <div className="page-content container legal-page">
      <h1>Refund Policy (Draft)</h1>
      <p>
        This refund policy is a draft and should be reviewed by legal counsel before operational use. It is intended to outline how reservations, payments, or service fees may be treated if a booking is cancelled or a service is rescheduled.
      </p>
      <p>
        In general, refundable amounts may depend on provider policy, timing of cancellation, and any third-party fees. All real transactions must be processed through secure payment providers and must be confirmed using provider-side verification before final settlement.
      </p>
      <p>
        Customers are encouraged to contact the business directly before making a final booking decision. Any live policy must be published in clear terms and reviewed in line with local compliance requirements.
      </p>
      <Link href="/contact" className="button button-primary">Contact us</Link>
    </div>
  );
}
