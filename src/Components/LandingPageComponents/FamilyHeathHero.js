import React from "react";

export default function FamilyHealthHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 md:px-0 pt-10 pb-4 bg-white overflow-hidden">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full">
        <button className="bg-[#f3f7fd] text-[#19204d] px-5 py-1 rounded-full text-sm shadow mb-4">
          About Met Heal
        </button>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full gap-8 lg:gap-0">
        {/* Left: Text and Image */}
        <div className="flex-1 flex flex-col items-start lg:pr-8 z-10">
          <h1 className="text-[#1b204e] leading-tight font-semibold text-4xl md:text-5xl mb-2">
            Caring for You Like
          </h1>
          <span className="text-[#38b6bf] italic font-serif text-4xl md:text-5xl mb-8">
            Family Health
          </span>
          {/* Team Image Block */}
          <div className="relative mt-3">
            <div className="rounded-3xl overflow-hidden max-w-[500px] shadow-md">
              <img
                src="/hero1.jpg"
                alt="Doctors"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Opening hours card */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-auto lg:-right-24 bg-[#17b5c6] text-white shadow-lg rounded-3xl px-8 py-6 min-w-[240px] text-center lg:text-left">
              <div className="text-xl font-medium mb-2">Opening Hours:</div>
              <div className="flex flex-col gap-1 text-white text-base font-light">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span>8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span>24/7 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Stats and Text */}
        <div className="flex-1 flex flex-col items-start pt-12 lg:pt-0 z-10">
          {/* Big 25+ with overlays */}
          <div className="relative w-full mb-6 flex items-center">
            <span className="text-[9rem] font-bold text-[#e9f2f7] leading-none tracking-tighter z-10">
              25<span className="text-[#e9f2f7]">+</span>
            </span>
            {/* Overlays: images in numbers if needed */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              {/* Place doctor/team overlays here as needed (use CSS position/absolute for effect) */}
            </span>
          </div>
          {/* Experts Row */}
          <div className="flex items-center gap-3 mb-2">
            {/* <div className="flex items-center -space-x-4">
              <img
                src="/staff1.jpg"
                alt=""
                className="rounded-full border-2 border-white w-10 h-10 object-cover"
              />
              <img
                src="/staff2.jpg"
                alt=""
                className="rounded-full border-2 border-white w-10 h-10 object-cover"
              />
              <img
                src="/staff3.jpg"
                alt=""
                className="rounded-full border-2 border-white w-10 h-10 object-cover"
              />

            </div> */}
            <span className="text-[#153070] font-semibold text-sm ml-2">
              TRUSTED EXPERTS IN MEDICAL
              <br />
              HEALTH AND WELLNESS
            </span>
          </div>
          {/* Description */}
          <p className="text-[#595959] text-lg mb-8 max-w-xl">
            We’re committed to offering compassionate and comprehensive
            healthcare tailored to your needs. At Met Heal, your health
            is our priority every step of the way.
          </p>
          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-[#17b5c6] text-white px-8 py-3 rounded-lg font-medium text-lg border-2 border-[#17b5c6] hover:bg-transparent hover:text-[#17b5c6] transition mt-2">
            Discover More
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect
                x="1"
                y="1"
                width="22"
                height="22"
                rx="5"
                stroke="#17b5c6"
                fill="none"
              />
              <path d="M9 12h6m0 0l-3-3m3 3l-3 3" stroke="#17b5c6" />
            </svg>
          </button>
        </div>
      </div>
      {/* Floating Arrow - Bottom Right */}
      {/* <div className="fixed bottom-8 right-8 z-30">
        <button className="bg-[#17b5c6] p-3 rounded-lg shadow-lg">
          <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
            <path d="M12 8l-7 8h14z" />
          </svg>
        </button>
      </div> */}
    </section>
  );
}
