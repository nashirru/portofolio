export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border bg-[#09090B]/60 backdrop-blur-md py-8 z-10">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans">
        
        {/* Copyright */}
        <p className="text-[#A1A1AA]/60">
          &copy; {currentYear} Muhammad Abdun Nasir. All rights reserved.
        </p>

        {/* Tech tags info */}
        <p className="text-[#A1A1AA]/60 font-mono tracking-wider">
          Built with React &bull; Tailwind &bull; Framer Motion
        </p>

      </div>
    </footer>
  );
}
