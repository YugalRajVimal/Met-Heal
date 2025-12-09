import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaUserMd, FaMagic } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import ServicesHero from "./ServicesHero";
import Footer from "../Components/Footer";

const services = [
  {
    id: 1,
    title: "Root Canal Treatment (Single Sitting) - 10% Off",
    desc: "Save time and money with our advanced single-visit root canal treatment, now at an exclusive 10% discount. Experience pain-free care for severely decayed or infected teeth. Our specialists ensure complete infection removal using digital X-rays and rotary endodontics for lasting results.",
    icon: <FaTooth className="w-6 h-6 text-white" />,
    image: "/image5.jpeg",
  },
  {
    id: 2,
    title: "Implantologist - 20% Off",
    desc: "Restore missing teeth with permanent, natural-looking dental implants placed by our experienced implantologist, now at 20% off for a limited time. Our implant solutions provide the strength and stability of natural teeth — improving speech, eating comfort, and facial aesthetics.",
    icon: <FaUserMd className="w-6 h-6 text-white" />,
    image: "/image3.jpeg",
  },
  {
    id: 3,
    title: "Cleaning & Bleaching",
    desc: "Achieve a brilliant, fresh smile with professional dental cleaning and teeth bleaching services for stain-free, sparkling teeth. Regular cleaning prevents gum infections and bad breath, while advanced bleaching brightens your smile by multiple shades — all in one visit.",
    icon: <GiToothbrush className="w-6 h-6 text-white" />,
    image: "/cleaning.jpeg",
  },
  {
    id: 4,
    title: "TMJ Specialist",
    desc: "Get expert diagnosis and treatment for jaw joint (TMJ) disorders to relieve pain, popping, or restricted movement with our TMJ specialist. We use advanced imaging and bite analysis to create custom solutions, ensuring comfort and improved jaw function.",
    icon: <FaUserMd className="w-6 h-6 text-white" />,
    image: "/tmj.jpeg",
  },
  {
    id: 5,
    title: "Orthodontic Treatment",
    desc: "Straighten crooked or crowded teeth with braces or aligners. Our orthodontic treatments help children, teens, and adults achieve beautiful, aligned smiles. Choose from traditional metal braces or modern clear aligners designed for discretion and comfort.",
    icon: <FaTooth className="w-6 h-6 text-white" />,
    image: "/den3.jpg",
  },
  {
    id: 6,
    title: "Fillings",
    desc: "Restore decayed, cracked, or chipped teeth with modern, long-lasting dental fillings that blend seamlessly with your natural smile. We use high-quality, tooth-colored composite materials for both strength and aesthetics — ensuring your teeth look and feel natural.",
    icon: <FaTooth className="w-6 h-6 text-white" />,
    image: "/filling.jpeg",
  },
  {
    id: 7,
    title: "Cosmetic Dentistry",
    desc: "Boost your confidence with veneers, smile designing, and other cosmetic dentistry solutions tailored to enhance the appearance of your teeth. Our personalized cosmetic approach focuses on symmetry, color, and proportion to craft your ideal smile.",
    icon: <FaMagic className="w-6 h-6 text-white" />,
    image: "/cosmetic.jpeg",
  },
  {
    id: 8,
    title: "Hair Transplant",
    desc: "Regain your hair and confidence with proven, minimally-invasive hair transplant solutions performed by qualified experts. We use the latest Follicular Unit Extraction (FUE) techniques for natural, permanent, and scar-free results.",
    icon: <FaUserMd className="w-6 h-6 text-white" />,
    image: "/image4.jpeg",
  },
  {
    id: 9,
    title: "Skin Specialist",
    desc: "Avail advanced dermatological treatments for acne, pigmentation, anti-aging, and more from our experienced skin specialists. From laser therapy to chemical peels, we offer safe, personalized skincare solutions for all skin types.",
    icon: <FaUserMd className="w-6 h-6 text-white" />,
    image: "/skin.jpeg",
  },
];

const Services = () => {
  return (
    <div className="text-gray-800">
      <ServicesHero />

      {/* ---------- Intro Section ---------- */}
      <section className="mx-auto py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif">
            Why Choose Our Services?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Your comfort and results are at the heart of what we do. Our
            treatments are driven by precision, experience, and empathy —
            ensuring you feel confident every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Modern Equipment",
              desc: "State-of-the-art imaging, sterilization units, and precision tools ensure comfort and accuracy in every procedure.",
            },
            {
              title: "Qualified Experts",
              desc: "Our team consists of certified specialists with advanced training in dental, skin, and aesthetic treatments.",
            },
            {
              title: "Patient-Centric Care",
              desc: "Personalized treatments designed around your comfort, clarity, and satisfaction from start to finish.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-500 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Services Grid ---------- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-t from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Specialized Treatments
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our range of specialized dental and cosmetic services —
            expertly designed for precision, comfort, and long-lasting results.
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
              className={`flex flex-col md:flex-row items-center gap-10 rounded-3xl shadow-xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 w-full h-72 md:h-96 relative group overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-4 rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 w-full p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Closing Section ---------- */}
      <section className="bg-blue-700 text-white text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Book Your Appointment Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl mx-auto text-blue-100 mb-8 text-lg"
        >
          Whether it’s a simple cleaning or a complete smile transformation, our
          specialists are ready to help you rediscover confidence — one smile at
          a time.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          Contact Us
        </motion.a>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
