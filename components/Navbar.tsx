export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold">
          <span className="inline-block h-6 w-6 rounded bg-brand-500" />
          <span>IncorporatePro</span>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#features" className="text-white/80 hover:text-white">Features</a>
          <a href="#how" className="text-white/80 hover:text-white">How it works</a>
          <a href="#pricing" className="text-white/80 hover:text-white">Pricing</a>
          <a href="#faq" className="text-white/80 hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn-secondary hidden md:inline-flex" href="#cta">Talk to us</a>
          <a className="btn-primary" href="#cta">Get started</a>
        </div>
      </div>
    </header>
  );
}
