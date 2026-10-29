export default function Landing() {
  return (
    <div className="min-h-screen text-white bg-black px-8 py-20">
      {/* Centered container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
        
        {/* Sidebar Navigation */}
        <aside className="flex flex-col gap-8">
          {/* Navigation */}
          <nav className="flex flex-col gap-3 text-sm text-neutral-400">
            <a href="#about" className="text-white-400 font-medium flex items-center gap-2">
              <span className="text-xs">•</span> About
            </a>
            <a href="#writing" className="hover:text-white transition-colors">
              Writing
            </a>
            <a href="#misc" className="hover:text-white transition-colors">
              Misc
            </a>
          </nav>
        </aside>

        
        <main className="space-y-8">
          {/*  Name */}
          <h1 className="font-daemones text-3xl font-bold tracking-wide">
            MICHAEL SHEHATA
          </h1>

          {/* Bio */}
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed max-w-2xl">
            <p>
              In progress
            </p>
            <p>
              In progress
            </p>
          </div>
        </main>

      </div>
    </div>
  );
}