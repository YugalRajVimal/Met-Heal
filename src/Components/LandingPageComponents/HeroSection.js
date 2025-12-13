import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// You can swap these image paths to match your branding
const slides = [
  {
    id: 1,
    title: "Confused about which doctor to visit for your condition?",
    description: "We guide you to the right specialist.",
    image: "/.jpg"
  },
  {
    id: 2,
    title: "Unsure which hospital is best for your treatment?",
    description: "We compare and recommend the best options.",
    image: "/.jpg"
  },
  {
    id: 3,
    title: "Want to know which lab gives the most reliable reports?",
    description: "We suggest trusted labs for accurate diagnostics.",
    image: "/.jpg"
  },
  {
    id: 4,
    title: "From health issues to treatment planning",
    description: "Our expert consultation simplifies every medical decision.",
    image: "/.jpg"
  },
  {
    id: 5,
    title: "For OPD / IPD Visits",
    description: "Now you can trust our trained companions and hand over the responsibility for OPD or IPD visits.",
    image: "/.jpg"
  },
  {
    id: 6,
    title: "For Diagnostics & Scans",
    description: "Need help for MRI, CT scan, Ultrasound, or X-ray? Our companion will handle it all safely and conveniently.",
    image: "/.jpg"
  },
  {
    id: 7,
    title: "For Dialysis / Chemotherapy / Regular Treatments",
    description: "We offer reliable companion support for Dialysis and smooth assistance for Chemotherapy sessions.",
    image: "/.jpg"
  },
  {
    id: 8,
    title: "For Cardiac / General Health Checkups",
    description: "Our medical companion is ready to assist in heart or routine health check-ups.",
    image: "/.jpg"
  },
  {
    id: 9,
    title: "For Pharmacy & Medicines",
    description: "We manage arranging pharmacy medicines and handling ongoing prescription requirements.",
    image: "/.jpg"
  },
  {
    id: 10,
    title: "For Diagnostic Tests",
    description: "We guide you to the right lab and provide assistance throughout diagnostic procedures.",
    image: "/.jpg"
  },
  {
    id: 11,
    title: "For Billing & Admissions",
    description: "We handle hospital billing, admissions, and documentation to save your time and stress.",
    image: "/.jpg"
  }
];

export default function HeroSection() {
  return (
    <section className="relative w-full md:min-h-[90vh] h-[90vh] overflow-hidden rounded-b-3xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay using green-900/60 for a branded dark overlay */}
              {/* <div className="absolute inset-0 bg-green-900/60"></div> */}

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-16"
              >
                <div className="backdrop-blur-md bg-white/60 p-6 md:p-10 rounded-2xl max-w-3xl text-left border border-lime-300/80 shadow-lg">
                  {/* Main Title */}
                  <h1 className="text-3xl md:text-5xl font-serif font-bold mb-5 text-green-900">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl mb-6 text-lime-700">
                    {slide.description}
                  </p>

                  {/* Call-to-Action Button - strong green/gradient with shadow */}
                  <Link
                    to="/contact"
                    className="
                      bg-gradient-to-tr from-lime-400 via-green-600 to-lime-100 text-white font-semibold py-2 rounded-xl px-4 text-lg shadow-lg hover:scale-[1.05] transition
                    "
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
