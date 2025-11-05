export function HowItWorks() {
  const steps = [
    { title: 'Answer a few questions', desc: 'We configure the right entity for your situation.' },
    { title: 'We file with the state', desc: 'Registered agent and formation documents submitted fast.' },
    { title: 'Receive EIN & documents', desc: 'Get your EIN and bank-ready documents securely.' },
    { title: 'Stay compliant', desc: 'Annual reports and registered agent renewals, on autopilot.' },
  ];

  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-sm text-white/60">Step {i + 1}</div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-white/70">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
