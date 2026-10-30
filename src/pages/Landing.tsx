import Footer from "../components/Footer";

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
          <h1 className="font-daemones text-3xl font-normal tracking-wide">
            MICHAEL SHEHATA
          </h1>

          {/* Bio */}
          <div className="space-y-6 text-neutral-300 text-base leading-relaxed max-w-2xl">
            <p>
              21 year old hailing from Egypt. 
              I mostly develop things I deem useful, and make music.
              I've had great success with music and want to enjoy that much success in my development career.
              I've been taught to work hard and enjoy what I did, there isn't much space on earth for anything else.
              Check the sections to the left to find out more about my work and what I like to do with 
              my time on this planet.
            </p>
            <p>
              I'm extremely lucky to have had access to a laptop and an internet connection 
              early on in my life. I've been creating cool stuff ever since in many disciplnes.
              I'm also very fortunate to have explored different parts of the world and interacted with many.
              It's deeply exciting being young and having the world as a blank canvas, even though it does 
              induce remarkable anxiety at times, if I'am to honest.
              Regardless, I don't plan on halting my curiosity and exploration for this world anytime soon.
            </p>
          </div>
          {/* Footer Component */}
          <Footer />
        </main>

      </div>
    </div>
  );
}

