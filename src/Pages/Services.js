import React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineMedicalServices,
  MdOutlineSupportAgent,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { TbAmbulance } from "react-icons/tb";
import ServicesHero from "./ServicesHero";
import Footer from "../Components/Footer";

// 4 main services from DentalServices.js
const services = [
  {
    id: 1,
    title: "Medical Consultation Services",
    icon: <MdOutlineMedicalServices className="w-7 h-7 text-white" />,
    image: "/images/01.png",
    description:
      "We help you make the right medical decisions by guiding you on:",
    features: [
      "Which doctor to visit for your specific problem or condition",
      "Which hospital is best for your required treatment",
      "Which diagnostic lab gives the most reliable and accurate tests",
      "Treatment guidance for various medical conditions",
      "Second-opinion support for patients and families",
    ],
  },
  {
    id: 2,
    title: "Companion Services for Patients",
    icon: <MdOutlineSupportAgent className="w-7 h-7 text-white" />,
    image: "/images/05.png",
    description: "(Trained male companions for support — not caretakers)",
    features: [
      "OPD / IPD Visit Assistance",
      "Companion support for parent’s OPD/IPD visits",
      "Assistance in registration, documentation, and escorting patients",
      "Taking patients safely for Dialysis",
      "Taking patients for Chemotherapy",
      "Help with MRI, CT Scan, Ultrasound, X-ray & other imaging",
    ],
  },
  {
    id: 3,
    title: "Medical Errand Services",
    icon: <MdOutlineAddShoppingCart className="w-7 h-7 text-white" />,
    image: "/images/15.png",
    description: "",
    features: [
      "Assistance in pharmacy needs (medicines pickup & delivery)",
      "Help with hospital billing & admission formalities",
      "Managing discharge processes",
      "Coordinating follow-up visits",
    ],
  },
  {
    id: 4,
    title: "Full Patient Movement & Escort Services",
    icon: <TbAmbulance className="w-7 h-7 text-white" />,
    image: "/images/012.png",
    description: "",
    features: [
      "Pick-up & drop for patients",
      "Safe transportation to hospital, lab, or clinic",
      "Waiting-area supervision",
      "Drop back home after completion of the visit or procedure",
    ],
  },
];

const highlightCards = [
  {
    title: "Unbiased Medical Guidance",
    desc: "Clear recommendations for doctors, hospitals, and diagnostics — focused only on what’s right for the patient.",
    gradient: "from-green-50 via-lime-100 to-white",
    text: "text-green-600",
    border: "border-green-200",
  },
  {
    title: "Trained Patient Companions",
    desc: "Reliable escort and assistance for OPD, IPD, diagnostics, dialysis, chemotherapy, and checkups.",
    gradient: "from-green-50 via-lime-100 to-white",
    text: "text-green-600",
    border: "border-green-200",
  },
  {
    title: "End-to-End Support",
    desc: "From appointments and billing to pharmacy pickups and transport — we handle the logistics so families don’t have to.",
    gradient: "from-green-50 via-lime-100 to-white",
    text: "text-green-600",
    border: "border-green-200",
  },
];

const Services = () => {
  return (
    <div className="text-green-600 bg-lime-50">
      <ServicesHero />

      {/* ---------- Intro Section ---------- */}
      <section className="mx-auto py-20 px-6 md:px-12 w-screen overflow-x-hidden ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 font-serif">
            We Simplify Medical Journeys
          </h2>
          <p className="text-green-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Met Heal provides end-to-end medical guidance and patient support — helping individuals and families navigate healthcare decisions, hospital visits, and medical logistics with clarity and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {highlightCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`
                bg-gradient-to-br ${card.gradient}
                p-10 rounded-2xl shadow-lg border ${card.border}
                hover:border-lime-600 transition-all
              `}
            >
              <h3 className={`text-xl font-semibold mb-3 ${card.text}`}>
                {card.title}
              </h3>
              <p className="text-green-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Services Grid ---------- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 font-serif mb-4">
            Our Patient Support Services
          </h2>
          <p className="text-green-600 max-w-3xl mx-auto text-lg">
            A complete range of medical guidance, coordination, and patient companion services designed to make healthcare simpler, safer, and stress-free.
          </p>
        </div>

        <div className="space-y-20 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`
                flex flex-col md:flex-row items-center gap-10
                rounded-3xl 
                shadow-xl
                overflow-hidden
                bg-gradient-to-br from-white via-lime-50 to-lime-100
                border border-lime-200
                hover:shadow-2xl transition-all
                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Image Section */}
              <div className="md:w-[40%] w-full h-72 md:h-96 relative group overflow-hidden bg-lime-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                  style={{
                    background:
                      "linear-gradient(135deg, #CDE393 0%, #94C973 50%, #D9F99D 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 bg-green-600 p-4 rounded-full shadow-md border-2 border-white">
                  {service.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="md:w-[60%] w-full p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-green-600">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-green-600 text-md mb-4">{service.description}</p>
                )}
                {service.features && service.features.length > 0 && (
                  <ul className="list-disc list-inside text-green-600 text-lg space-y-2">
                    {service.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Closing Section ---------- */}
      <section className="bg-green-600 text-center py-20 px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-white">
          Need Help With a Medical Visit?
        </motion.h2>

        <motion.p className="max-w-2xl mx-auto text-lime-100 mb-8 text-lg">
          From choosing the right doctor to completing hospital visits smoothly, Met Heal is here to guide and support you at every step.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-lime-100 hover:text-green-600 transition"
        >
          Contact Us
        </motion.a>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
