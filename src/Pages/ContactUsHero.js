// AboutUsHero.jsx
import React from "react";

export default function ContactUsHero() {
  return (
    <section className="relative">
      {/* Background section with gradient overlay and image */}
      <div
        className="h-[480px] bg-gradient-to-r from-teal-900/70 to-transparent rounded-b-3xl overflow-hidden flex items-center relative"
        style={{
          backgroundImage: "url('/.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="flex flex-col justify-center h-full pl-6 md:pl-20 z-20">
          <h1 className="text-white text-5xl font-semibold mb-2 font-serif">Contact Us</h1>
          {/* Breadcrumb */}
          <div className="mt-5">
            <span className="bg-teal-500 px-2 py-1 rounded-full text-white text-xs">
              HOME
            </span>
            <span className="mx-2 text-white text-xs">/</span>
            <span className="text-white text-xs font-medium">CONTACT US</span>
          </div>
        </div>
        {/* Optional: overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
