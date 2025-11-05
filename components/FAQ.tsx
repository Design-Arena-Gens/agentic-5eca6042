export function FAQ() {
  const faqs = [
    { q: 'Which state should I incorporate in?', a: 'Delaware for startups raising capital; Wyoming for cost and privacy; your home state if you operate locally.' },
    { q: 'How long does it take?', a: 'Formation approvals vary by state. Most companies are ready within 2?10 business days.' },
    { q: 'Can non?US founders apply?', a: 'Yes. We support founders globally and help obtain your EIN without an SSN.' },
    { q: 'Do you handle compliance?', a: 'Yes. Registered agent, annual reports, and reminders to keep your company in good standing.' },
  ];
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-white/[0.03]">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>{f.q}</span>
                <span className="text-white/60 transition group-open:rotate-45">?</span>
              </summary>
              <p className="mt-2 text-white/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
