"use client"; // This is needed because we are using React state for the mobile menu

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add blur and subtle border when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Name/Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Marjia Khatun
            </Link>
          </div>

          {/* Right side - Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
            {/* GitHub Icon Link */}
            <a
              href="https://github.com/marjia999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/marjia999"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-cyan-400 px-3 py-2 text-base font-medium"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}