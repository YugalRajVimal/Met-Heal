import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMedicalServices, MdOutlineSupportAgent, MdOutlineAddShoppingCart } from "react-icons/md";
import { TbAmbulance } from "react-icons/tb";

// Use only the allowed colors
const OUR_SERVICES = [
  {
    id: 1,
    title: "Medical Consultation Services",
    icon: <MdOutlineMedicalServices className="w-7 h-7 text-white" />,
    description:
      "We help you make the right medical decisions by guiding you on:",
    features: [
      "Which doctor to visit for your specific problem or condition",
      "Which hospital is best for your required treatment",
      "Which diagnostic lab gives the most reliable and accurate tests",
      "Treatment guidance for various medical conditions",
      "Second-opinion support for patients and families"
    ],
  },
  {
    id: 2,
    title: "Companion Services for Patients",
    icon: <MdOutlineSupportAgent className="w-7 h-7 text-white" />,
    description:
      "(Trained male companions for support — not caretakers)",
    features: [
      "OPD / IPD Visit Assistance",
      "Companion support for parent’s OPD/IPD visits",
      "Assistance in registration, documentation, and escorting patients",
      "Taking patients safely for Dialysis",
      "Taking patients for Chemotherapy",
      "Help with MRI, CT Scan, Ultrasound, X-ray & other imaging"
    ],
  },
  {
    id: 3,
    title: "Medical Errand Services",
    icon: <MdOutlineAddShoppingCart className="w-7 h-7 text-white" />,
    description: "",
    features: [
      "Assistance in pharmacy needs (medicines pickup & delivery)",
      "Help with hospital billing & admission formalities",
      "Managing discharge processes",
      "Coordinating follow-up visits"
    ],
  },
  {
    id: 4,
    title: "Full Patient Movement & Escort Services",
    icon: <TbAmbulance className="w-7 h-7 text-white" />,
    description: "",
    features: [
      "Pick-up & drop for patients",
      "Safe transportation to hospital, lab, or clinic",
      "Waiting-area supervision",
      "Drop back home after completion of the visit or procedure"
    ],
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function OurServices() {
  return (
    <section className="py-20 bg-lime-50" id="our-services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <span className="inline-block bg-lime-100 text-green-600 px-5 py-1.5 rounded-full font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-green-600">
            We Simplify Medical Journeys
            <br />
            <span className="italic text-lime-600 font-serif font-medium">
              End-to-End Patient Support
            </span>
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {OUR_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 * idx }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 text-left flex flex-col h-full border border-lime-200"
            >
              <div className="flex items-center gap-4 bg-green-600 p-4 rounded-t-3xl shadow">
                <div className="bg-lime-400 p-3 rounded-xl flex items-center justify-center shadow-lg transition group-hover:bg-lime-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white">{service.title}</h3>
              </div>
              <div className="flex-1 flex flex-col justify-start py-7 pb-8 px-7 bg-white/60">
                {service.description && (
                  <p className="text-gray-700 text-base mb-4">{service.description}</p>
                )}
                <ul className="pl-4 text-green-600 list-disc space-y-2 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
