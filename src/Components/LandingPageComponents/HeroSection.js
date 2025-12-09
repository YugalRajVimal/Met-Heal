import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// You can swap these image paths to match your branding
const slides = [
  {
    id: 1,
    title: "Confused about which doctor to visit for your condition?",
    description: "We guide you to the right specialist.",
    image: "/Banner11.jpg"
  },
  {
    id: 2,
    title: "Unsure which hospital is best for your treatment?",
    description: "We compare and recommend the best options.",
    image: "/Banner11.jpg"
  },
  {
    id: 3,
    title: "Want to know which lab gives the most reliable reports?",
    description: "We suggest trusted labs for accurate diagnostics.",
    image: "/Banner11.jpg"
  },
  {
    id: 4,
    title: "From health issues to treatment planning",
    description: "Our expert consultation simplifies every medical decision.",
    image: "/Banner11.jpg"
  },
  {
    id: 5,
    title: "For OPD / IPD Visits",
    description: "Now you can trust our trained companions and hand over the responsibility for OPD or IPD visits.",
    image: "/Banner22.jpg"
  },
  {
    id: 6,
    title: "For Diagnostics & Scans",
    description: "Need help for MRI, CT scan, Ultrasound, or X-ray? Our companion will handle it all safely and conveniently.",
    image: "/Banner22.jpg"
  },
  {
    id: 7,
    title: "For Dialysis / Chemotherapy / Regular Treatments",
    description: "We offer reliable companion support for Dialysis and smooth assistance for Chemotherapy sessions.",
    image: "/Banner22.jpg"
  },
  {
    id: 8,
    title: "For Cardiac / General Health Checkups",
    description: "Our medical companion is ready to assist in heart or routine health check-ups.",
    image: "/Banner22.jpg"
  },
  {
    id: 9,
    title: "For Pharmacy & Medicines",
    description: "We manage arranging pharmacy medicines and handling ongoing prescription requirements.",
    image: "/Banner22.jpg"
  },
  {
    id: 10,
    title: "For Diagnostic Tests",
    description: "We guide you to the right lab and provide assistance throughout diagnostic procedures.",
    image: "/Banner22.jpg"
  },
  {
    id: 11,
    title: "For Billing & Admissions",
    description: "We handle hospital billing, admissions, and documentation to save your time and stress.",
    image: "/Banner22.jpg"
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-16"
              >
                 <div className="backdrop-blur-md bg-white/10 p-6 md:p-10 rounded-2xl max-w-3xl text-left text-white">
                  {/* Main Title */}
                  <h1
                    className="text-3xl md:text-5xl font-bold mb-5"
                    style={{ color: "#00A86A" }}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl mb-6" style={{ color: "#75BC84" }}>
                    {slide.description}
                  </p>

                  {/* Call-to-Action Button with green branding */}
                  <button
                    className="font-medium px-6 py-3 rounded-xl transition mt-4 shadow-lg"
                    style={{
                      background: "linear-gradient(90deg, #00A86A 0%, #75BC84 100%)",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
