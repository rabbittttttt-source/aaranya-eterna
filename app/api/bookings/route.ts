import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseAdmin } from '@/lib/supabase';

const bookingSchema = z.object({
  guest_name: z.string().min(2),
  email: z.string().email(),
  preferred_dates: z.string().min(3),
  guest_count: z.coerce.number().min(1).max(20),
  booking_type: z.string().min(2),
  notes: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Please provide valid booking details.' }, { status: 400 });
    }

    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from('bookings').insert({
      ...parsed.data,
      status: 'pending',
      created_at: new Date().toISOString(),
    });

    if (error) {
      return NextResponse.json({ message: 'Could not save your booking request.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Booking request received. We will review it and contact you soon.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid booking payload.' }, { status: 400 });
  }
}
