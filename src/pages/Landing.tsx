import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

export default function Landing() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    // Set initial hash or default to #about
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#writing" },
    { name: "Music", href: "#music" },
    { name: "Misc", href: "#misc" },
  ];

  return (
    <div className="min-h-screen text-white bg-black px-8 py-20 flex flex-col justify-between">
      {/* Centered container */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-[180px_1fr] gap-16">
        
        {/* Sidebar Navigation */}
        <aside className="flex flex-col gap-8">
          <nav className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2 transition-colors ${
                    isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-white transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Header Name */}
          <h1 className="font-daemones text-3xl font-normal tracking-wide">
            MICHAEL SHEHATA
          </h1>

          {/* Bio Text */}
          <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl font-ltc font-normal tracking-normal">
            <p>
              21 year old hailing from Egypt. 
              I mostly develop things I deem useful, and make music.
              I've had great success with music and want to enjoy that much success in my developer career.
              I've been taught to work hard and enjoy what I do, there isn't much space for anything else in my mind.
              Check the sections to the left to find out more about my work and what I like to do with 
              my time on this planet.
            </p>
            <p>
              I'm extremely lucky to have had access to a laptop and an internet connection 
              early on in my life. I've been creating cool stuff ever since in many disciplines.
              I'm also very fortunate to have explored different parts of the world and interacted with many.
              It's deeply exciting being young and having the world as a blank canvas, even though it does 
              induce remarkable anxiety at times, if I'm honest.
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