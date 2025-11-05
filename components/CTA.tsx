"use client";
import { useState } from 'react';

export function CTA() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="cta" className="section">
      <div className="container">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/15 to-white/5 p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">Get bank?ready in days</h3>
              <p className="mt-2 text-white/80">Tell us a bit about you and we?ll reach out with next steps.</p>
              <ul className="mt-4 space-y-1 text-sm text-white/70">
                <li>? EIN and formation documents included on eligible plans</li>
                <li>? Global founder support</li>
                <li>? Transparent, state?specific pricing</li>
              </ul>
            </div>
            <form action={onSubmit} className="space-y-3">
              <input required name="name" placeholder="Your name" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
              <input required name="email" type="email" placeholder="Email" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
              <input name="company" placeholder="Company (optional)" className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" />
              <button type="submit" disabled={status==='loading'} className="btn-primary w-full">{status==='loading' ? 'Submitting?' : 'Request a call'}</button>
              {status==='success' && <p className="text-emerald-300">Thanks! We?ll be in touch shortly.</p>}
              {status==='error' && <p className="text-rose-300">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
