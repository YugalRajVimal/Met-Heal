// AboutUsHero.jsx
import React from "react";

export default function AboutUsHero() {
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
          <h1 className="text-white text-5xl font-semibold mb-2">About Us</h1>
          {/* Breadcrumb */}
          <div className="mt-5">
            <span className="bg-teal-500 px-2 py-1 rounded-full text-white text-xs">
              HOME
            </span>
            <span className="mx-2 text-white text-xs">/</span>
            <span className="text-white text-xs font-medium">ABOUT US</span>
          </div>
        </div>
        {/* Optional: overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10 pointer-events-none"></div>
      </div>
      {/* Mission Statement */}
      <div className=" bg-white rounded-t-3xl px-4 pb-16 pt-24 flex flex-col items-center text-center ">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          <span className="text-blue-900">Our mission is</span>
          <span className="text-gray-500 font-normal"> simple:</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl font-light">
          to serve with care, act with integrity, and always put your needs
          first.
        </p>
      </div>
    </section>
  );
}
