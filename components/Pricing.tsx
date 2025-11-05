export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: 'one-time',
      features: ['LLC formation', 'Registered agent (1 year)', 'Articles of Organization', 'Compliance reminders'],
      cta: 'Start Starter',
      popular: false,
    },
    {
      name: 'Growth',
      price: '$499',
      period: 'one-time',
      features: ['C?Corp or LLC', 'Registered agent (1 year)', 'EIN included', 'Banking intro', 'Bylaws/Operating Agreement'],
      cta: 'Start Growth',
      popular: true,
    },
    {
      name: 'Scale',
      price: '$79',
      period: '/mo',
      features: ['Compliance dashboard', 'Annual reports filing', 'RA renewal', 'Priority support'],
      cta: 'Subscribe Scale',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold sm:text-4xl">Simple, founder-friendly pricing</h2>
        <p className="mt-3 max-w-2xl text-white/75">Transparent pricing with everything you need to launch and stay compliant.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-xl border ${p.popular ? 'border-brand-400' : 'border-white/10'} bg-white/5 p-6`}>
              {p.popular && (
                <div className="absolute -top-3 right-4 rounded-full border border-brand-400 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-200">
                  Most popular
                </div>
              )}
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="mt-2 text-3xl font-bold">{p.price}<span className="text-base font-normal text-white/70">{p.period}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="btn-primary mt-6 inline-flex w-full justify-center">{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/60">State fees not included. Final pricing varies by state and entity type.</p>
      </div>
    </section>
  );
}
