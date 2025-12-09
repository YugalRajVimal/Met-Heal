import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00A86A] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpeg"
            alt="Met Heal Logo"
            className="w-10 h-10"
          />
          <span className="text-white text-2xl font-semibold">
            Met Heal
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* {[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "CONTACT US", href: "/contact" },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-[#075533] text-sm font-medium flex items-center gap-1 hover:text-[#00A86A] transition"
              >
                {item.label}
              </a>
            </div>
          ))} */}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-[#075533] text-sm">
            <PhoneCall className="w-5 h-5 mr-2 text-white" />
            <div>
              <p className="text-xs text-white">Emergency Call:</p>
              <p className="font-semibold text-white">+919798405830</p>
            </div>
          </div>

          <button
            className="bg-[#00A86A] hover:bg-[#75BC84] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Appointment
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* <div className="bg-white/10 hover:bg-white/20 rounded-xl p-3 cursor-pointer transition">
            <div className="w-5 h-5 bg-white/70 rounded-md"></div>
          </div> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00A86A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden  text-[#075533] flex flex-col items-start px-6 pb-4 space-y-3">
          {/* {[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about" },
            { label: "CONTACT US", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-full text-left font-medium py-1 hover:text-[#00A86A] block"
            >
              {item.label}
            </a>
          ))} */}
          <div className="pt-4 flex flex-col gap-3 ">
            <a
              href="tel:+919798405830"
              className="bg-[#00A86A] hover:bg-[#75BC84] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition no-underline"
            >
              Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919798405830"
              className="mt-2 flex items-center gap-2 text-white font-semibold underline underline-offset-4"
            >
              <span>Emergency Call:</span> <span>+919798405830</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
