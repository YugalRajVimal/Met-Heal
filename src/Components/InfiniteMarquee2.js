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

function InfiniteMarquee2() {
  const marqueeRef = useRef(null);

  return (
    <div className="overflow-hidden  w-full  flex items-center  py-6">
      <motion.div
        className="flex h-fit  items-center justify-center whitespace-nowrap text-8xl font-sans font-semibold text-[#162146]"
        style={{ willChange: "transform" }}
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 300,
          repeat: Infinity,
        }}
        ref={marqueeRef}
      >
        {/* Repeat content to create seamless loop */}
        {[...Array(2)].map((_, i) => (
          <span key={i} className="flex items-center ">
            {words.map((word, idx) => (
              <span
                key={word + idx}
                className="flex items-center text-white"
              >
                <span className="">{word}</span>
                {idx !== words.length - 1 && (
                  <span
                    className="mx-16 text-4xl flex items-center"
                 
                  >
                    <FaRegStar size={36} />
                  </span>
                )}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteMarquee2;
