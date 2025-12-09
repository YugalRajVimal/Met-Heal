// AboutUsHero.jsx
import React from "react";

export default function ServicesHero() {
  return (
    <section className="relative w-full">
      {/* Background section with gradient overlay and image */}
      <div
        className="h-[480px] bg-gradient-to-r from-teal-900/70 to-transparent rounded-b-3xl overflow-hidden flex items-center relative"
        style={{
          backgroundImage: "url('/abtBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      >
        <div className="flex flex-col justify-center h-full pl-20 z-20">
          <h1 className="text-white text-5xl font-semibold mb-2">Services</h1>
          {/* Breadcrumb */}
          <div className="mt-5">
            <span className="bg-teal-500 px-2 py-1 rounded-full text-white text-xs">
              HOME
            </span>
            <span className="mx-2 text-white text-xs">/</span>
            <span className="text-white text-xs font-medium">Services</span>
          </div>
        </div>
        {/* Optional: overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
