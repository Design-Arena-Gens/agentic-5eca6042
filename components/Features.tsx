export function Features() {
  const features = [
    {
      title: 'Guided formation',
      desc: 'LLC or C?Corp with state-specific requirements handled for you.',
    },
    {
      title: 'Compliance, handled',
      desc: 'Registered agent, annual reports, and reminders in one place.',
    },
    {
      title: 'Tax & EIN',
      desc: 'Get your EIN and IRS registrations without the paperwork maze.',
    },
    {
      title: 'Founder-friendly',
      desc: 'Built-in cap table, officer info, and investor-grade docs.',
    },
    {
      title: 'Bank-ready',
      desc: 'Open US business banking with accurate, complete documentation.',
    },
    {
      title: 'Global support',
      desc: 'Launch from anywhere. We help non?US founders navigate requirements.',
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to launch</h2>
        <p className="mt-3 max-w-2xl text-white/75">
          Inspired by leading platforms, refined for speed and clarity.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 h-10 w-10 rounded bg-brand-500/80" />
              <div className="font-semibold">{f.title}</div>
              <div className="text-sm text-white/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
