import Link from "next/link";

const navLinks = [
  { href: "/", label: "Timeline" },
  { href: "/articles", label: "Articles" },
  { href: "/tags", label: "Tags" },
  { href: "/search", label: "Search" }
];

export const Header = () => {
  return (
    <header className="border-b border-white/5">
      <div className="container-shell flex items-center justify-between py-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-mist">
            Jin Blog
          </p>
          <h1 className="text-lg font-semibold">年-月-周 · 公开周记</h1>
        </div>
        <nav className="flex items-center gap-6 text-sm text-mist">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
