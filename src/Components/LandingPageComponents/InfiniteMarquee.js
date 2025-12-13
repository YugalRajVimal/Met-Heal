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

// Tailwind green/lime palette gradients for visual variety
const gradients = [
  { from: "from-lime-400", to: "to-green-600" },
  { from: "from-green-900", to: "to-lime-500" },
  { from: "from-green-600", to: "to-lime-300" }
];

function InfiniteMarquee() {
  const marqueeRef = useRef(null);

  return (
    <div className="overflow-hidden bg-lime-50 w-full flex items-center pb-16">
      <motion.div
        className="flex h-fit items-center justify-center whitespace-nowrap text-8xl font-sans font-semibold"
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
        {[...Array(2)].map((_, setIdx) => (
          <span key={setIdx} className="flex items-center">
            {words.map((word, idx) => {
              // Pick Tailwind green/lime gradient for text, cycling by index
              const grad = gradients[idx % gradients.length];
              // Compose Tailwind classes for gradient text
              const textClasses = [
                "flex",
                "items-center",
                "bg-clip-text",
                "text-transparent",
                "font-semibold",
                "transition-colors",
                "duration-300",
                `bg-gradient-to-r`,
                grad.from,
                grad.to
              ].join(" ");
              return (
                <span key={word + idx} className={textClasses}>
                  <span>{word}</span>
                  {idx !== words.length - 1 && (
                    <span className="mx-16 text-4xl text-green-600 flex items-center">
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
