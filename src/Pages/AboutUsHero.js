
// AboutUsHero.jsx
import React from "react";

export default function ServicesHero() {
  return (
    <section className="relative bg-lime-50 w-full">
      {/* Background section with gradient overlay and image */}
      <div
        className="h-[480px] bg-gradient-to-r from-green-900/70 to-transparent rounded-b-3xl overflow-hidden flex items-center relative"
        style={{
          backgroundImage: "url('/.png')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
        }}
      >
          <div className="flex flex-col justify-center h-full  pl-6 md:pl-20 z-20">
          <h1 className="text-white text-5xl font-semibold mb-2 font-serif">About Us</h1>
          {/* Breadcrumb */}
          <div className="mt-5 flex items-center">
            <span className="bg-lime-400 px-2 py-1 rounded-full text-white text-xs font-semibold">
              HOME
            </span>
            <span className="mx-2 text-white text-xs font-bold">/</span>
            <span className="text-white text-xs font-semibold">ABOUT US</span>
          </div>
        </div>

        {/* Optional: overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10 pointer-events-none"></div>
      </div>
       {/* Mission Statement */}
       <div className="rounded-t-3xl  px-4 pb-16 pt-24 flex flex-col items-center text-center ">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          <span className="text-green-900 font-serif">Our mission is</span>
          <span className="text-lime-600 font-normal font-serif"> simple:</span>
        </h2>
        <p className="text-2xl md:text-3xl text-lime-700 max-w-4xl font-light">
          To simplify healthcare by guiding patients to the right doctors,
          hospitals, and diagnostics — and by providing dependable human support
          throughout every medical visit.
        </p>
      </div>
    </section>
  );
}

