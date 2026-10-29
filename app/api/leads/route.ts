import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseAdmin } from '@/lib/supabase';

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  interest: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Please provide valid contact details.' }, { status: 400 });
    }

    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from('leads').insert({
      ...parsed.data,
      status: 'new',
      created_at: new Date().toISOString(),
    });

    if (error) {
      return NextResponse.json({ message: 'Could not save your enquiry. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Thank you. Your enquiry has been stored securely.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }
}
