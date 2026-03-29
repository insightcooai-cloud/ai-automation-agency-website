export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#18181B] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-white/10 grid grid-cols-2 gap-[3px] p-[4.5px]">
            <div className="bg-white rounded-[1px]" />
            <div className="bg-white/30 rounded-[1px]" />
            <div className="bg-white/30 rounded-[1px]" />
            <div className="bg-white rounded-[1px]" />
          </div>
          <span className="text-xs text-[#71717A]">Blueprint Labs</span>
        </div>
        <p className="text-xs text-[#71717A]">
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
              className="text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B] rounded-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
