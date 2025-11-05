import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // In a real app, store to a database or send to CRM/email.
    console.log('New lead:', { name, email, company, ts: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
