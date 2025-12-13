// Footer.jsx
import React from "react";
import InfiniteMarquee2 from "./InfiniteMarquee2";

// Services pulled from DentalAppointment.js (lines 126-133)
const SERVICES_LIST = [
  {
    label: "Doctor Guidance"
  },
  {
    label: "Hospital Recommendation"
  },
  {
    label: "Patient Companion/Escort"
  },
  {
    label: "Lab Diagnostics"
  },
  {
    label: "Medicine & Pharmacy Pick-Up"
  },
  {
    label: "Billing & Admission Help"
  },
  {
    label: "Patient Movement/Escort Services"
  },
  {
    label: "Checkups & Special Care"
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-600 via-green-600 to-green-600 pt-20 pb-0 px-4 md:px-0">
      <div className="mx-auto rounded-3xl overflow-visible pb-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-8 py-12">
          {/* Left CARD */}
          <div className="bg-white rounded-xl p-8 shadow-lg w-full sm:w-[350px] mb-4 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/logo.jpeg"
                alt="Met Heal Logo"
                className="w-20 h-20 object-cover rounded-xl"
              />
              <span className="text-[#00A86A] text-3xl font-semibold">
                Met Heal
              </span>
            </div>
            <p className="text-gray-700 text-base mt-1 mb-4">
              We are dedicated to providing flexible & accessible healthcare
              services.
            </p>
            <div className="pt-2 border-t border-[#BCDFCE] text-sm text-[#00A86A] space-y-2">
              <div className="flex justify-between pt-2">
                <span className="font-medium">Mon - Sat</span>
                <span>10:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sun</span>
                <span className="font-medium">
                  By Appointment Only
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Emergency</span>
                <span>24/7 Hours</span>
              </div>
            </div>
          </div>
          {/* QUICK LINKS, SERVICES, NEWSLETTER */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="/" className="text-white hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Services - from DentalAppointment.js (options 126-133) */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Services</h3>
              <ul className="space-y-3 text-base">
                {SERVICES_LIST.map((service) => (
                  <li key={service.label} className="flex items-center">
                    <a href="/services" className="text-white hover:underline">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Newsletter</h3>
              <p className="text-white text-base mb-4">
                Join the Community and Receive Our Monthly Newsletter Straight
                to Your Inbox
              </p>
              <form className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#00A86A] rounded-r-lg px-4 flex items-center justify-center"
                >
                  {/* Send icon */}
                  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Footer bottom mini-links */}
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-evenly py-4 bg-transparent gap-5 border-t border-[#75BC84] px-8">
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#75BC84] rounded-full p-2">
              {/* location icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
             
            </span>
            <span>
              Medical Booking and Patient Support Centre

              </span>
            <span>
              
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#BCDFCE] rounded-full p-2">
              {/* mail icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span>General Inquiries info.metheal@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#00A86A] rounded-full p-2">
              {/* phone icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span>Emergency Cases +919798405830</span>
          </div>
        </div>
      </div>

      <InfiniteMarquee2 />
      {/* Attribution */}
      <div className="text-center text-[#00A86A] bg-white rounded-t-3xl w-[96%] mx-auto mt-8 py-3 text-base z-10 relative">
        © 2025, Met Heal. Made with passion by{" "}
        <a
          href="https://gowappily.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-lime-700 transition"
        >
          GoWappily Infotech
        </a>.
      </div>
      {/* Floating Arrow */}
      {/* <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-[#00A86A] p-3 rounded-lg">

          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 8l-7 8h14z" />
          </svg>
        </button>
      </div> */}
    </footer>
  );
}
