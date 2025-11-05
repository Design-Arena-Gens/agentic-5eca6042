export function Testimonials() {
  const testimonials = [
    { name: 'Amira K.', role: 'Founder, Atlas AI', quote: 'We launched in days. Banking and EIN were seamless.' },
    { name: 'Diego S.', role: 'CEO, Oceanic', quote: 'Compliance reminders saved us from missing deadlines.' },
    { name: 'Mina P.', role: 'COO, Sol Labs', quote: 'Clear steps, great support, zero paperwork headache.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold sm:text-4xl">Loved by modern founders</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">?{t.quote}?</p>
              <div className="mt-4 text-sm text-white/60">{t.name} ? {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
