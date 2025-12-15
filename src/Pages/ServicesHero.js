import React from "react";

export default function ServicesHero() {
  return (
    <section className="relative bg-lime-50 w-full">
      {/* Background section with gradient overlay and image */}
      <div
        className="h-[480px] bg-gradient-to-r from-green-900/70 to-transparent rounded-b-3xl overflow-hidden flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/010.png')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 flex backdrop-blur-xs z-0"></div>
        {/* Centered Text Content */}
        <div className="flex flex-col justify-center items-center h-full z-20 text-center">
          <h1 className="text-white text-5xl font-semibold mb-2 font-serif">Services</h1>
          {/* Breadcrumb */}
          <div className="mt-5 flex items-center justify-center">
            <span className="bg-lime-400 px-2 py-1 rounded-full text-white text-xs font-semibold">
              HOME
            </span>
            <span className="mx-2 text-white text-xs font-bold">/</span>
            <span className="text-white text-xs font-semibold">Services</span>
          </div>
        </div>
        {/* Optional: overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
