import Link from "next/link";

const navLinks = [
  { href: "/", label: "Timeline" },
  { href: "/articles", label: "Articles" },
  { href: "/tags", label: "Tags" },
  { href: "/search", label: "Search" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-[10px] font-medium uppercase tracking-widest text-mist">
            Jin Blog
          </span>
          <span className="text-base font-semibold tracking-tight text-ink">
            年-月-周 · 公开周记
          </span>
        </Link>
        <nav className="flex items-center gap-8 text-sm text-mist">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
