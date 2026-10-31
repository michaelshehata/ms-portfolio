// src/components/Footer.tsx
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
      {/* Copyright Text */}
      <div>© 2026 Michael Shehata.</div>

      {/* Social / Contact Icons */}
      <div className="flex items-center gap-4 text-lg">
        <a 
          href="mailto:michael.efshehata@gmail.com" 
          aria-label="Email"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/michaelshehata" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/michaelehabshehata" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}