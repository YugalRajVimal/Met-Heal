import { motion } from "framer-motion";
import { useRef } from "react";
import { FaRegStar } from "react-icons/fa";

const words = [
  "Medical Consultation",
  "Doctor Guidance",
  "Hospital Recommendation",
  "Lab/Diagnostics Help",
  "Treatment Planning",
  "Second Opinion",
  "Companion Service",
  "OPD/IPD Support",
  "Dialysis Escort",
  "Chemotherapy Help",
  "Medical Errands",
  "Medicine Pickup",
  "Billing & Admissions",
  "Patient Transport",
  "Checkup Escorts",
  "Pharmacy Assistance"
];

function InfiniteMarquee() {
  const marqueeRef = useRef(null);

  // Cycle through green gradient options for visual variety
  const gradients = [
    { from: "#BCDFCE", to: "#75BC84" },
    { from: "#75BC84", to: "#00A86A" },
    { from: "#00A86A", to: "#162146" },
  ];

  return (
    <div className="overflow-hidden bg-white w-full flex items-center pb-16">
      <motion.div
        className="flex h-fit items-center justify-center whitespace-nowrap text-8xl font-sans font-semibold text-[#162146]"
        style={{ willChange: "transform" }}
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 200,
          repeat: Infinity,
        }}
        ref={marqueeRef}
      >
        {/* Repeat content to create seamless loop */}
        {[...Array(2)].map((_, i) => (
          <span key={i} className="flex items-center ">
            {words.map((word, idx) => {
              // For visual interest, pick a gradient from the array based on index
              const grad = gradients[idx % gradients.length];
              return (
                <span
                  key={word + idx}
                  className="flex items-center bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${grad.from} 0%, ${grad.to} 100%)`
                  }}
                >
                  <span>{word}</span>
                  {idx !== words.length - 1 && (
                    <span className="mx-16 text-4xl text-[#162146] flex items-center">
                      <FaRegStar size={36} />
                    </span>
                  )}
                </span>
              );
            })}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteMarquee;
