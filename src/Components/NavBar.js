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

  // Determine text color based on scroll state
  const textColor = isScrolled ? "text-green-900" : "text-white";
  const subTextColor = isScrolled ? "text-lime-700" : "text-lime-100";
  const navHoverColor = isScrolled
    ? "hover:text-lime-600"
    : "hover:text-lime-300";
  const navBg = isScrolled
    ? "bg-green-50 shadow-md"
    : "backdrop-blur-md bg-green-900/40";
  const mobileMenuBg =
    isScrolled ? "bg-white/80" : "backdrop-blur-md bg-green-900/40";

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpeg"
            alt="Met Heal Logo"
            className="w-10 h-10 rounded-lg border-2 border-lime-300"
            style={{ backgroundColor: "#CDE393" }}
          />
          <span className={`text-2xl font-semibold ${textColor}`}>
            Met Heal
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about" },
            { label: "SERVICES", href: "/services" },
            { label: "CONTACT US", href: "/contact" },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`${textColor} text-sm font-medium flex items-center gap-1 transition ${navHoverColor}`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className={`flex items-center text-sm ${textColor}`}>
            <PhoneCall className="w-5 h-5 mr-2" color={isScrolled ? "#94C973" : "#E0FFC1"} />
            <div>
              <p className={`text-xs ${subTextColor}`}>
                Emergency Call:
              </p>
              <p className={`font-semibold ${textColor}`}>+919798405830</p>
            </div>
          </div>

          <button
            className="bg-lime-600 hover:bg-lime-500 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Appointment
            <ArrowRight className="w-4 h-4" color={isScrolled ? "#94C973" : "#E0FFC1"} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-lime-600" : "text-lime-200"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} color={isScrolled ? "#94C973" : "#E0FFC1"} />
          ) : (
            <Menu size={28} color={isScrolled ? "#94C973" : "#E0FFC1"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`
            md:hidden 
            flex flex-col items-start px-6 pb-4 space-y-3 pt-4
            rounded-b-xl shadow-lg
            ${mobileMenuBg} 
            ${isScrolled ? "text-green-900" : "text-white"}
          `}
        >
          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about" },
            { label: "SERVICES", href: "/services" },

            { label: "CONTACT US", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`w-full text-left font-medium py-1 block transition ${isScrolled ? "hover:text-lime-700" : "hover:text-lime-300"}`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3 ">
            <a
              href="tel:+919798405830"
              className="bg-lime-600 hover:bg-lime-500 text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 transition no-underline"
            >
              Appointment
              <ArrowRight className="w-4 h-4" color={isScrolled ? "#94C973" : "#E0FFC1"} />
            </a>
            <a
              href="tel:+919798405830"
              className={`mt-2 flex items-center gap-2 font-semibold underline underline-offset-4 ${textColor}`}
              style={!isScrolled ? { color: "white" } : {}}
            >
              <span>Emergency Call:</span> <span>+919798405830</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
