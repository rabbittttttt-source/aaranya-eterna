import { NextResponse } from 'next/server';
import { z } from 'zod';

const paymentSchema = z.object({
  amount: z.coerce.number().positive(),
  bookingId: z.string().min(1),
  provider: z.string().optional().default('test'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = paymentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid payment request.' }, { status: 400 });
    }

    if (process.env.PAYMENT_TEST_MODE !== 'true') {
      return NextResponse.json({ message: 'Payment test mode is disabled in this environment.' }, { status: 403 });
    }

    return NextResponse.json({
      status: 'test_mode_success',
      payment_id: `mock_${Date.now()}`,
      amount: parsed.data.amount,
      currency: 'INR',
      bookingId: parsed.data.bookingId,
      provider: 'test',
      message: 'This is a server-side test-mode success. No real card details were processed.',
    }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid payment payload.' }, { status: 400 });
  }
}
