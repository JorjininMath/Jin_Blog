export const Footer = () => {
  return (
    <footer className="border-t border-black/[0.08] bg-graphite/30">
      <div className="container-shell flex flex-col gap-2 py-10 text-xs text-mist">
        <p>© 2026 Jin Blog by <a href="https://github.com/JorjininMath" target="_blank" rel="noopener noreferrer" className="text-glow hover:underline">JorjininMath</a>. Structured weekly notes with Apple-inspired design.</p>
        <p>Built with Next.js · Minimal, calm, and searchable.</p>
      </div>
    </footer>
  );
};
