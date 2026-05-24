"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Layanan", href: "#services" },
  { label: "Lokasi", href: "#location" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "#location") {
      setShowLocationModal(true);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        <nav
          className={`bg-neutral/95 backdrop-blur-sm border-b border-gray-100 px-6 transition-all duration-300 ${
            scrolled ? "py-3 shadow-md" : "py-4 lg:py-5"
          }`}
        >
          <div className="container mx-auto max-w-7xl flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-3 group"
            >
              {/* Logo SVG inline */}
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-light transition-colors duration-200">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <path
                    d="M12 4C12 4 10 6 10 8C10 10 12 10 12 10C12 10 14 10 14 8C14 6 12 4 12 4Z"
                    fill="white"
                    opacity="0.5"
                  />
                  <path
                    d="M6 10C6 10 4 11 4 13C4 15 6 15 6 15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  <path
                    d="M18 10C18 10 20 11 20 13C20 15 18 15 18 15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <span className="font-grandstander font-semibold text-lg text-accent tracking-wide">
                Kios Laundry
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-8 font-outfit font-medium text-sm text-grey">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-accent transition-colors duration-200 relative group py-1"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button Desktop */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-outfit font-semibold hover:bg-accent-light transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-grey hover:text-accent hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="container mx-auto max-w-7xl pb-4">
              <ul className="flex flex-col space-y-1 font-outfit">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 text-sm text-grey hover:text-accent hover:bg-secondary rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-accent-light transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Location Modal */}
      {showLocationModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-[100] p-4"
          onClick={() => setShowLocationModal(false)}
        >
          <p className="text-white text-sm mb-3 font-outfit">
            Klik di luar peta untuk menutup
          </p>
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125075.71620272267!2d104.80778671296422!3d11.579352598718401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1759645908351!5m2!1sen!2skh"
              className="w-full h-[400px] lg:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <button
            onClick={() => setShowLocationModal(false)}
            className="mt-4 text-white/70 hover:text-white text-sm font-outfit transition-colors"
          >
            ✕ Tutup
          </button>
        </div>
      )}
    </>
  );
}
