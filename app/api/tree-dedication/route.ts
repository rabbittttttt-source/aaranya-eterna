import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseAdmin } from '@/lib/supabase';

const dedicationSchema = z.object({
  dedicator_name: z.string().min(2),
  email: z.string().email(),
  tree_name: z.string().min(2),
  dedication_type: z.string().min(2),
  message: z.string().min(10),
});

function makeTreeId() {
  return `TREE-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = dedicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Please provide valid dedication details.' }, { status: 400 });
    }

    const treeId = makeTreeId();
    const qrToken = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from('tree_dedications').insert({
      tree_id: treeId,
      private_qr_token: qrToken,
      dedicator_name: parsed.data.dedicator_name,
      email: parsed.data.email,
      tree_name: parsed.data.tree_name,
      dedication_type: parsed.data.dedication_type,
      message: parsed.data.message,
      status: 'pending',
      created_at: new Date().toISOString(),
    });

    if (error) {
      return NextResponse.json({ message: 'Could not create the dedication request.' }, { status: 500 });
    }

    return NextResponse.json({
      message: `Tree dedication request received. Your private tree ID is ${treeId}.`,
      treeId,
      qrToken,
    }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid tree dedication payload.' }, { status: 400 });
  }
}
