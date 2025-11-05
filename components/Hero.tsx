export function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Bank-ready documents in days
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Form your company the right way ? fast, compliant, and stress?free
          </h1>
          <p className="max-w-xl text-white/80">
            Incorporation, registered agent, EIN, banking, and ongoing compliance. One simple workflow designed for founders, builders, and global teams.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="btn-primary">Start now</a>
            <a href="#how" className="btn-secondary">See how it works</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-white/70">
            <div>Trusted by 2,500+ founders</div>
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full bg-white/20" />
              <span className="h-8 w-8 rounded-full bg-white/20" />
              <span className="h-8 w-8 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: 'LLC & C?Corp', desc: 'Delaware, Wyoming and more' },
              { title: 'Registered Agent', desc: 'All 50 states' },
              { title: 'EIN & IRS', desc: 'Tax ID without hassle' },
              { title: 'Banking', desc: 'Bank-ready documents' },
              { title: 'Compliance', desc: 'Annual reports & reminders' },
              { title: 'Global Founders', desc: 'No SSN required' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 h-8 w-8 rounded bg-brand-500/80" />
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-white/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
