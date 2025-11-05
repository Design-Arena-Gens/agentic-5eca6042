export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 text-sm text-white/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded bg-brand-500" />
            <span>? {new Date().getFullYear()} IncorporatePro</span>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
