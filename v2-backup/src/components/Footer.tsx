export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t border-white/[0.06]"
      style={{ backgroundColor: "var(--color-bg-inverse)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-white/10 grid grid-cols-2 gap-[3px] p-[4.5px]">
            <div className="bg-white rounded-[1px]" />
            <div className="bg-white/30 rounded-[1px]" />
            <div className="bg-white/30 rounded-[1px]" />
            <div className="bg-white rounded-[1px]" />
          </div>
          <span className="text-xs text-[color:var(--color-text-tertiary)]">Blueprint Labs</span>
        </div>
        <p className="text-xs text-[color:var(--color-text-tertiary)]">
          &copy; {new Date().getFullYear()} Blueprint Labs. All rights reserved.
        </p>
        <nav
          className="flex items-center gap-6"
          aria-label="Footer navigation"
        >
          {[
            ["#services", "Services"],
            ["#how-i-work", "Process"],
            ["#about", "About"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-xs text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-inverse)] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-inverse)] rounded-sm"
            >
              {label}
            </a>
          ))}
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/steve-jun-74827379/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--color-text-tertiary)] hover:text-[color:var(--color-text-inverse)] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-inverse)] rounded-sm"
            aria-label="Steve Jun on LinkedIn"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
