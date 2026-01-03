
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
  // State for all form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    option: "",
    date: "",
    message: "",
  });

  // UI state for submission status
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission and send to API endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: "", error: "" });

    try {
      const apiBaseUrl = process.env.REACT_APP_API_URL || "";
      const url = `${apiBaseUrl.replace(/\/$/, "")}/send-mail`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.text();
        throw new Error(data || "Submission failed");
      }

      setSubmitStatus({
        loading: false,
        success:
          "Your enquiry has been submitted to Met Heal, and a confirmation has been sent to your email.",
        error: "",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        option: "",
        date: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        loading: false,
        error: error.message || "Submission failed",
        success: "",
      });
    }
  };

  return (
    <section className="bg-lime-50">
      <ContactUsHero />

      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        {/* Left - Contact Details & Emergency Line */}
        <div className="md:w-1/2 p-8 rounded-2xl flex flex-col">
          <h2 className="text-3xl font-bold text-green-600 mb-3">
            Emergency Call:
          </h2>
          <p className="text-green-600 mb-6 font-medium">
            <span>
              Need our services urgently? Call our Emergency Number:{" "}
              <a
                href="tel:+919798405830"
                className="font-bold text-green-600 underline hover:text-green-600"
              >
                +919798405830
              </a>
            </span>
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white rounded-full p-3">
                <MdOutlineLocationOn size={24} />
              </span>
              <div>
                <div className="font-bold text-green-600">Visit Us</div>
                <div className="text-green-600 text-base">
                  Met Heal Medical Booking & Patient Support Centre, <br /> Gurgaon, Sector 56 D 235
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white rounded-full p-3">
                <MdOutlineMail size={24} />
              </span>
              <div>
                <div className="font-bold text-green-600">General Inquiries</div>
                <div>
                  <a
                    href="mailto:info.metheal@gmail.com"
                    className="text-green-600 font-semibold underline"
                  >
                    info.metheal@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-green-600 text-white rounded-full p-3">
                <MdOutlinePhone size={24} />
              </span>
              <div>
                <div className="font-bold text-green-600">
                  Appointment Booking
                </div>
                <div>
                  <a
                    href="tel:+919798405830"
                    className="text-green-600 font-semibold underline hover:text-green-600"
                  >
                    +919798405830
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Operating Hours */}
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Operating Hours
            </h3>
            <div className="mb-6">
              <div className="flex justify-between py-1">
                <span className="text-green-600">Mon - Sat</span>
                <span className="font-medium text-green-600">10:00 AM - 09:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-green-600">Sun</span>
                <span className="font-medium text-green-600">
                  By Appointment Only
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-green-600">Emergency</span>
                <span className="font-medium text-green-600">24/7</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-600 p-2 rounded-full text-white text-xl"
                aria-label="Met Heal Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-600 p-2 rounded-full text-white text-xl"
                aria-label="Met Heal LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/919798405830"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-600 p-2 rounded-full text-white text-xl"
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
            <span className="inline-block rounded-full px-3 py-1 bg-green-600 text-white text-sm font-semibold mb-2">
              Medical Booking and Patient Support Centre
            </span>
            <h2 className="text-4xl font-extrabold text-green-600 mt-2 mb-3 leading-tight">
              Book a Service Appointment
            </h2>
            <p className="text-green-600 font-medium mb-6">
              Secure, simple, and fast booking for medical guidance, hospital recommendations, and patient companion services. We streamline your journey to world-class care.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                required
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                required
              >
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
              <select
                name="option"
                value={form.option}
                onChange={handleChange}
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                required
              >
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
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Select Date"
                className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
              className="w-full border border-green-600 rounded-lg px-4 py-2 text-lg text-green-600 focus:outline-none focus:border-green-600 bg-white resize-none"
            />
            <button
              type="submit"
              disabled={submitStatus.loading}
              className={`block w-full bg-green-600 hover:bg-green-600 text-white text-lg font-semibold py-3 rounded-lg transition ${
                submitStatus.loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {submitStatus.loading ? "Booking..." : "Book Service"}
            </button>
            {submitStatus.success && (
              <div className="mt-2 text-green-700 bg-green-100 border border-green-300 rounded px-3 py-2">
                {submitStatus.success}
              </div>
            )}
            {submitStatus.error && (
              <div className="mt-2 text-red-700 bg-red-100 border border-red-300 rounded px-3 py-2">
                {submitStatus.error}
              </div>
            )}
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

