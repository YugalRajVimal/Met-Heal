
import React, { useState } from "react";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import ContactUsHero from "./ContactUsHero";
import Footer from "../Components/Footer";

const Contact = () => {
  // Example state hooks (not functional, since no logic is needed for this prompt)
  // const [form, setForm] = useState({ ... });

  return (
    <section className="bg-lime-50">
      <ContactUsHero />

      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        {/* Left - Contact Details & Emergency Line */}
        <div className="md:w-1/2 p-8 rounded-2xl flex flex-col">
          <h2 className="text-3xl font-bold text-green-900 mb-3">
            Emergency Call:
          </h2>
          <p className="text-gray-700 mb-6 font-medium">
            <span>
              Need our services urgently? Call our Emergency Number:{" "}
              <a
                href="tel:+919798405830"
                className="font-bold text-green-600 underline hover:text-green-900"
              >
                +919798405830
              </a>
            </span>
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="bg-lime-500 text-white rounded-full p-3">
                <MdOutlineLocationOn size={24} />
              </span>
              <div>
                <div className="font-bold text-green-900">Visit Us</div>
                <div className="text-gray-700 text-base">
                  Met Heal Medical Booking & Patient Support Centre, <br /> Gurgaon, Sector 56 D 235
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-lime-500 text-white rounded-full p-3">
                <MdOutlineMail size={24} />
              </span>
              <div>
                <div className="font-bold text-green-900">General Inquiries</div>
                <div>
                  <a
                    href="mailto:info.metheal@gmail.com"
                    className="text-lime-700 font-semibold underline"
                  >
                    info.metheal@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-lime-500 text-white rounded-full p-3">
                <MdOutlinePhone size={24} />
              </span>
              <div>
                <div className="font-bold text-green-900">
                  Appointment Booking
                </div>
                <div>
                  <a
                    href="tel:+919798405830"
                    className="text-green-600 font-semibold underline hover:text-green-900"
                  >
                    +919798405830
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Operating Hours */}
          <div>
            <h3 className="text-2xl font-semibold text-green-900 mb-3">
              Operating Hours
            </h3>
            <div className="mb-6">
              <div className="flex justify-between py-1">
                <span>Mon - Sat</span>
                <span className="font-medium">10:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sun</span>
                <span className="font-medium">
                  By Appointment Only
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span>Emergency</span>
                <span className="font-medium">24/7</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-green-50 p-2 rounded-full text-blue-600 text-xl"
                aria-label="Met Heal Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-green-50 p-2 rounded-full text-sky-500 text-xl"
                aria-label="Met Heal LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/919798405830"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-green-50 p-2 rounded-full text-lime-600 text-xl"
                aria-label="Met Heal WhatsApp"
              >
                <RiWhatsappLine />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Appointment Booking Form */}
        <div className="md:w-1/2 p-8 rounded-2xl">
          <div className="mb-4">
            <span className="inline-block rounded-full px-3 py-1 bg-lime-100 text-green-700 text-sm font-semibold mb-2">
              Medical Booking and Patient Support Centre
            </span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-2 mb-3 leading-tight">
              Book a Service Appointment
            </h2>
            <p className="text-lime-700 font-medium mb-6">
              Secure, simple, and fast booking for medical guidance, hospital recommendations, and patient companion services. We streamline your journey to world-class care.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white"
              />
              <select className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white">
                <option value="">Select Service</option>
                <option>Medical Consultation</option>
                <option>Doctor Guidance</option>
                <option>Hospital Recommendation</option>
                <option>Lab/Diagnostics Help</option>
                <option>Treatment Planning</option>
                <option>Second Opinion</option>
                <option>Companion Service</option>
                <option>OPD/IPD Support</option>
                <option>Dialysis Escort</option>
                <option>Chemotherapy Help</option>
                <option>Medical Errands</option>
                <option>Medicine Pickup</option>
                <option>Billing & Admissions</option>
                <option>Patient Transport</option>
                <option>Checkup Escorts</option>
                <option>Pharmacy Assistance</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white">
                <option value="">Select Option</option>
                <option>Doctor Guidance</option>
                <option>Hospital Recommendation</option>
                <option>Lab/Diagnostics Help</option>
                <option>Treatment Planning</option>
                <option>Second Opinion</option>
                <option>OPD / IPD Visit Assistance</option>
                <option>Companion support for parent’s OPD/IPD visits</option>
                <option>Assistance in registration, documentation, and patient escort</option>
                <option>Dialysis Escort</option>
                <option>Chemotherapy Help</option>
                <option>Help with MRI, CT Scan, Ultrasound, X-ray</option>
                <option>Assistance in pharmacy/medicines</option>
                <option>Hospital billing/admission help</option>
                <option>Discharge & follow-ups</option>
                <option>Patient Pickup & Drop</option>
                <option>Waiting area supervision</option>
                <option>Checkup Escorts</option>
                <option>Pharmacy Assistance</option>
              </select>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your Message (Optional)"
              className="w-full border border-lime-200 rounded-lg px-4 py-2 text-lg text-green-900 focus:outline-none focus:border-lime-400 bg-white resize-none"
            />
            <button
              type="submit"
              className="block w-full bg-lime-500 hover:bg-lime-600 text-white text-lg font-semibold py-3 rounded-lg transition"
            >
              Book Service
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
          title="Met Heal Location"
        ></iframe>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
