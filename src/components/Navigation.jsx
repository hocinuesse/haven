"use client";
import { useState, useEffect } from "react";
import { Menu, Coffee, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Offerings", href: "#offerings" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <Coffee className="w-8 h-8 text-[#C4A77D] transition-transform group-hover:rotate-12" />
            <span className="font-serif text-2xl font-semibold text-[#2C1A14]">
              Haven Spot
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Experience", "Offerings", "Community", "Details"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-[#C4A77D] ${
                  activeSection === item.toLowerCase()
                    ? "text-[#C4A77D]"
                    : "text-[#2C1A14]/70"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2C1A14]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAF8F5] border-b border-[#2C1A14]/10 py-6 flex flex-col items-center gap-6 shadow-xl animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // يغلق القائمة عند الضغط
                className="text-xl font-medium hover:text-[#C4A77D]"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
