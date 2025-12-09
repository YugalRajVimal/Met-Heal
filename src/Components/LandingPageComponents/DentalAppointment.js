import React from "react";

export default function DentalAppointment() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center px-2 py-12">
      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden bg-white/15 backdrop-blur-xl border border-[#585bcf2e]">
        {/* Left Side (Info) */}
        <div className="md:w-1/2 w-full flex flex-col justify-between bg-gradient-to-b from-[#01704d] to-[#264d41]">
          <div className="pt-14 pl-10 pr-10 pb-6">
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="w-3 h-3 bg-[#BCDFCE] rounded-full animate-pulse"></span>
              <span className="bg-[#75BC84]/80 text-white px-4 py-1 rounded-full text-sm font-semibold drop-shadow-lg tracking-wide shadow">
                Book Our Services
              </span>
            </div>
            <h1 className="text-white drop-shadow-lg text-[2.8rem] md:text-[3.2rem] font-semibold leading-tight mb-2">
              Experience Hassle-Free
            </h1>
            <h2 className="text-[#BCDFCE] italic text-[2.2rem] md:text-[2.7rem] font-serif mb-8">
              Patient Support & Medical Guidance
            </h2>
            <p className="text-[#E7F7EE] text-lg mb-8 max-w-md font-light leading-relaxed hidden md:block">
              Secure, simple, and fast appointment booking for guidance, hospital recommendations, and patient companion services. We streamline your journey to world-class medical care.
            </p>
          </div>
          <div className="bg-[#75BC84]/70 w-full px-10 pt-10 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-7 border-t" style={{ borderTopColor: "#BCDFCE" }}>
            <div className="w-full">
              <div className="flex flex-col w-full gap-2 text-[#F2FCF7] text-sm font-medium">
                <div className="flex justify-between w-full ">
                  <span className="opacity-80">Mon - Sat</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="flex justify-between  w-full">
                  <span className="opacity-80">Sun</span>
                  <span> By Appointment Only</span>
                </div>
                <div className="flex justify-between w-full">
                  <span>Emergency</span>
                  <span className="font-semibold text-[#00A86A]">24/7</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#00A86A]/70 rounded-b-3xl px-10 py-7 flex flex-col md:flex-row gap-6 border-t" style={{ borderTopColor: "#BCDFCE" }}>
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="bg-[#BCDFCE] p-2 rounded-full flex items-center justify-center shadow-md">
                {/* Modern Home icon */}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12L2 13m0 0V21a1 1 0 001 1h6m-7-9 10-8 10 8m0 0 2-1m-2 1v8a1 1 0 01-1 1h-6v-6a1 1 0 00-2 0v6H5a1 1 0 01-1-1v-8z" />
                </svg>
              </span>
              <span>
                <span className="font-semibold ">
                  Met Heal
                </span>

                <br />
                Medical Booking and Patient Support Centre
              </span>
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="bg-[#BCDFCE] p-2 rounded-full flex items-center justify-center shadow-md">
                {/* Modern Call icon */}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M15 13c2.21 0 4 1.79 4 4v2a2 2 0 01-2 2 16 16 0 01-16-16 2 2 0 012-2h2c2.21 0 4 1.79 4 4v1a1 1 0 01-1 1H6.02" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">
                  Need Our Services?
                </span>
                <br />
                <a
                  href="tel:+919798405830"
                  className=" hover:underline font-semibold"
                >
                  +919798405830
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="md:w-1/2 w-full bg-white/95 rounded-none md:rounded-l-3xl flex flex-col items-center justify-center py-12 px-7 md:px-14 relative z-10">
          <h2 className="text-[#00A86A] text-3xl font-extrabold mb-6 tracking-tight font-serif">
            Book a Service Appointment
          </h2>
          <form className="w-full flex flex-col gap-5">
            <div className="flex gap-4">
              <input
                className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none"
                placeholder="Your Name"
                autoComplete="off"
              />
              <input
                className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none"
                placeholder="Email Address"
                type="email"
                autoComplete="off"
              />
            </div>
            <div className="flex gap-4">
              <input
                className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none"
                placeholder="Phone"
                type="tel"
                autoComplete="off"
              />
              <select className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base appearance-none transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none">
                <option>Select Service</option>
                <option>Doctor Guidance</option>
                <option>Hospital Recommendation</option>
                <option>Patient Companion/Escort</option>
                <option>Lab Diagnostics</option>
                <option>Medicine & Pharmacy Pick-Up</option>
                <option>Billing & Admission Help</option>
                <option>Patient Movement/Escort Services</option>
                <option>Checkups & Special Care</option>
              </select>
            </div>
            <div className="flex gap-4">
              <select className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base appearance-none transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none">
                <option>Select Option</option>
                <option>First-Time Consultation</option>
                <option>Follow-Up</option>
                <option>Emergency</option>
                <option>Errand Service</option>
              </select>
              <input
                className="w-1/2 border border-gray-200 rounded-xl py-3 px-4 text-base transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none"
                placeholder="Date"
                type="date"
              />
            </div>
            <textarea
              className="w-full border border-gray-200 rounded-xl py-3 px-4 min-h-[100px] text-base transition focus:ring-2 focus:ring-[#00A86A] focus:bg-[#BCDFCE] outline-none"
              placeholder="Your Message (Optional)"
            ></textarea>
            <button
              className="bg-gradient-to-tr from-[#75BC84] via-[#00A86A] to-[#BCDFCE] text-white font-semibold py-4 rounded-xl w-2/3 mx-auto mt-3 text-lg shadow-lg hover:opacity-90 transition"
              type="submit"
            >
              Book Service
            </button>
          </form>
        </div>
      </div>
      {/* Floating Arrow */}
      <div className="fixed bottom-8 right-8 z-30 group">
        <button
          className="bg-[#00A86A] hover:bg-[#75BC84] p-3 rounded-full shadow-lg flex items-center transition-all duration-200 group-hover:scale-110"
          aria-label="Scroll to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
            <path d="M12 8l-7 8h14z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
