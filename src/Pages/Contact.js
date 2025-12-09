// import React, { useState } from "react";
// import { FiSend } from "react-icons/fi";
// import {
//   MdOutlineMail,
//   MdOutlinePhone,
//   MdOutlineLocationOn,
// } from "react-icons/md";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Footer from "../Components/Footer";
// import ContactUsHero from "./ContactUsHero";

// const Contact = () => {
//   const lang = "en";

//   const texts = {
//     en: {
//       heading: "Get in Touch with Met Heal",
//       subText:
//         "Have a dental concern, cosmetic query, or need expert advice? Fill out the form below — our team at Met Heal, led by Dr. Himanshu Singh (BDS, MDS Orthodontics & TMJ Specialist), will reach out to assist you promptly.",
//       fullName: "Full Name",
//       fullNamePlaceholder: "John Doe",
//       email: "Email Address",
//       emailPlaceholder: "john@example.com",
//       phoneNumber: "Phone Number",
//       phonePlaceholder: "98765 43210",
//       message: "Message",
//       messagePlaceholder: "Your dental query or message...",
//       sendButton: "Send Message",
//       contactInfo: "Contact Information",
//       emailLabel: "Email",
//       phoneLabel: "Phone",
//       locationLabel: "Clinic Address",
//       workingHours: "Working Hours",
//       workingHoursText:
//         "Mon - Fri: 9:00 AM – 6:00 PM\nSat - Sun: 8:00 AM – 4:00 PM\nEmergency: 24/7 Available",
//       getInTouch: "Contact Us",
//     },

//     hi: {
//       heading: "संपर्क करें - स्माइल डेंटल केयर",
//       subText:
//         "क्या आपके पास दंत चिकित्सा से जुड़ी कोई चिंता है या सलाह चाहिए? नीचे फॉर्म भरें — डॉ. हिमांशु सिंह (BDS, MDS ऑर्थोडॉन्टिक्स एवं TMJ विशेषज्ञ) की टीम आपसे शीघ्र संपर्क करेगी।",
//       fullName: "पूरा नाम",
//       fullNamePlaceholder: "जॉन डो",
//       email: "ईमेल पता",
//       emailPlaceholder: "john@example.com",
//       phoneNumber: "फोन नंबर",
//       phonePlaceholder: "98765 43210",
//       message: "संदेश",
//       messagePlaceholder: "आपका दंत प्रश्न या संदेश...",
//       sendButton: "संदेश भेजें",
//       contactInfo: "संपर्क जानकारी",
//       emailLabel: "ईमेल",
//       phoneLabel: "फोन",
//       locationLabel: "क्लिनिक का पता",
//       workingHours: "कार्य समय",
//       workingHoursText:
//         "सोम - शुक्र: सुबह 9:00 बजे – शाम 6:00 बजे\nशनि - रवि: सुबह 8:00 बजे – शाम 4:00 बजे\nआपातकालीन सेवा: 24/7 उपलब्ध",
//       getInTouch: "संपर्क करें",
//     },
//   };

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [countryCode, setCountryCode] = useState("India (+91)");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [consent, setConsent] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!consent) {
//       toast.error(
//         lang === "hi"
//           ? "कृपया गोपनीयता नीति से सहमत हों।"
//           : "Please accept the privacy policy."
//       );
//       return;
//     }

//     if (fullName.length > 30) {
//       toast.error(
//         lang === "hi"
//           ? "नाम 30 अक्षरों से अधिक नहीं होना चाहिए।"
//           : "Name must not exceed 30 characters."
//       );
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error(
//         lang === "hi"
//           ? "कृपया मान्य ईमेल पता दर्ज करें।"
//           : "Please enter a valid email address."
//       );
//       return;
//     }

//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       toast.error(
//         lang === "hi"
//           ? "कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।"
//           : "Please enter a valid 10-digit phone number."
//       );
//       return;
//     }

//     const wordCount = message.trim().split(/\s+/).length;
//     if (wordCount > 500) {
//       toast.error(
//         lang === "hi"
//           ? "संदेश 500 शब्दों से अधिक नहीं होना चाहिए।"
//           : "Message must not exceed 500 words."
//       );
//       return;
//     }

//     const formData = {
//       fullName,
//       email,
//       countryCode,
//       phone,
//       clinic: "Met Heal Contact Form",
//       message,
//     };

//     const loadingMsg =
//       lang === "hi" ? "संदेश भेजा जा रहा है..." : "Sending message...";
//     const successMsg =
//       lang === "hi"
//         ? "संदेश सफलतापूर्वक भेजा गया!"
//         : "Message sent successfully!";
//     const errorMsg =
//       lang === "hi" ? "भेजने में त्रुटि ❌" : "Failed to send ❌";

//     const toastId = toast.loading(loadingMsg);

//     try {
//       const response = await axios.post(
//         "https://your-server-endpoint/send-mail",
//         formData
//       );

//       if (response.status === 200) {
//         toast.update(toastId, {
//           render: successMsg,
//           type: "success",
//           isLoading: false,
//           autoClose: 3000,
//         });
//         setFullName("");
//         setEmail("");
//         setCountryCode("India (+91)");
//         setPhone("");
//         setMessage("");
//         setConsent(false);
//       } else {
//         toast.update(toastId, {
//           render: errorMsg,
//           type: "error",
//           isLoading: false,
//           autoClose: 3000,
//         });
//       }
//     } catch (err) {
//       toast.update(toastId, {
//         render: errorMsg,
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     }
//   };

//   const contactInfo = {
//     email: "himanshusingh118763@gmail.com",
//     phone: "+919798405830",
//     location: {
//       address1: "Met Heal, Sector 56 D-235, Gurgaon, Haryana, India",
//     },
//   };

//   return (
//     <div className="  ">
//       <ContactUsHero />
//       <section className="py-12 md:py-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             {/* Form Section */}
//             <div className="flex-1">
//               <h2 className="text-sm uppercase text-black tracking-widest text-danger mb-2 font-montserrat">
//                 {texts[lang].getInTouch}
//               </h2>
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-montserrat">
//                 {texts[lang].heading}
//               </h3>
//               <p className="text-gray-light mb-6 font-roboto">
//                 {texts[lang].subText}
//               </p>

//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block mb-2 font-semibold">
//                       {texts[lang].fullName}
//                     </label>
//                     <input
//                       type="text"
//                       placeholder={texts[lang].fullNamePlaceholder}
//                       required
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block mb-2 font-semibold">
//                       {texts[lang].email}
//                     </label>
//                     <input
//                       type="email"
//                       placeholder={texts[lang].emailPlaceholder}
//                       required
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-end">
//                   <div className="flex flex-col">
//                     <label className="mb-2 font-semibold">
//                       {texts[lang].phoneNumber}
//                     </label>
//                     <select
//                       value={countryCode}
//                       onChange={(e) => setCountryCode(e.target.value)}
//                       className="w-full bg-white border px-4 py-2 rounded-md"
//                     >
//                       <option>India (+91)</option>
//                       <option>USA (+1)</option>
//                       <option>UK (+44)</option>
//                     </select>
//                   </div>
//                   <div className="flex-1 flex flex-col">
//                     <label className="mb-2 font-semibold invisible">
//                       {texts[lang].phoneNumber}
//                     </label>
//                     <input
//                       type="text"
//                       placeholder={texts[lang].phonePlaceholder}
//                       required
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block mb-2 font-semibold">
//                     {texts[lang].message}
//                   </label>
//                   <textarea
//                     rows={4}
//                     placeholder={texts[lang].messagePlaceholder}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="w-full bg-white border px-4 py-2 rounded-md focus:outline-none resize-none"
//                   ></textarea>
//                 </div>

//                 <div className="flex items-start">
//                   <input
//                     type="checkbox"
//                     id="consent"
//                     checked={consent}
//                     onChange={(e) => setConsent(e.target.checked)}
//                     className="mt-1 mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor="consent" className="text-sm text-gray-700">
//                     {lang === "hi"
//                       ? "मैं स्माइल डेंटल केयर की गोपनीयता नीति से सहमत हूँ।"
//                       : "I agree to Met Heal’s privacy policy."}
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full mt-4 flex items-center justify-center gap-3 border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-md transition-all duration-300"
//                 >
//                   <FiSend size={18} />
//                   <span className="font-semibold text-sm">
//                     {texts[lang].sendButton}
//                   </span>
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info Section */}
//             <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-lg border border-danger/20">
//               <h3 className="text-2xl font-bold font-montserrat mb-6">
//                 {texts[lang].contactInfo}
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <MdOutlineMail className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-medium font-montserrat mb-1">
//                       {texts[lang].emailLabel}
//                     </h4>
//                     <p className="text-gray-light font-roboto">
//                       {contactInfo.email}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <MdOutlinePhone className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-medium font-montserrat mb-1">
//                       {texts[lang].phoneLabel}
//                     </h4>
//                     <p className="text-gray-light font-roboto">
//                       {contactInfo.phone}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <MdOutlineLocationOn className="w-6 h-6 text-danger mr-4 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-medium font-montserrat mb-1">
//                       {texts[lang].locationLabel}
//                     </h4>
//                     <p className="text-gray-light font-roboto">
//                       {contactInfo.location.address1}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h4 className="font-medium font-montserrat mb-2">
//                   {texts[lang].workingHours}
//                 </h4>
//                 <p className="text-gray-light font-roboto whitespace-pre-line">
//                   {texts[lang].workingHoursText}
//                 </p>
//               </div>

//               {/* <div className="mt-8">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.317775623959!2d77.087989!3d28.585912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1839b66c3d75%3A0x4c64b6f2d6f92a41!2sSmile%20Dental%20Care%20-%20Sector%2056%20Gurgaon!5e0!3m2!1sen!2sin!4v1731222400000!5m2!1sen!2sin"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="rounded-lg shadow-md"
//                 ></iframe>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import ContactUsHero from "./ContactUsHero";
import Footer from "../Components/Footer";
// import axios, toast, and other dependencies as needed

const Contact = () => {
  // Form state and handlers here...

  return (
    <section className=" ">
      <ContactUsHero />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        {/* Left - Emergency and Info */}
        <div className="md:w-1/2 bg-white p-8 rounded-2xl  flex flex-col">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            In Case of Emergency
          </h2>
          <p className="text-gray-700 mb-6 font-medium">
            <span>
              For immediate dental help, you can also call our personal number:{" "}
              <a
                href="tel:+919798405830"
                className="font-bold text-blue-700 underline hover:text-blue-900"
              >
                +919798405830
              </a>
              .
            </span>
          </p>
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="bg-teal-500 text-white rounded-full p-3">
                <MdOutlineLocationOn size={24} />
              </span>
              <div>
                <div className="font-bold text-gray-900">Visit Our Clinic</div>
                <div className="text-gray-700 text-base">
                  Met Heal Gurgaon, Sector 56 D 235
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-teal-500 text-white rounded-full p-3">
                <MdOutlineMail size={24} />
              </span>
              <div>
                <div className="font-bold text-gray-900">General Inquiries</div>
                <div className="text-teal-800 font-semibold underline">
                  himanshusingh118763@gmail.com
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-teal-500 text-white rounded-full p-3">
                <MdOutlinePhone size={24} />
              </span>
              <div>
                <div className="font-bold text-gray-900">
                  Appointment Scheduling
                </div>
                <div className="text-blue-800 font-semibold underline">
                  +919798405830
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              Opening Hours
            </h3>
            <div className="mb-6">
              <div className="flex justify-between py-1">
                <span>Mon - Sat</span>
                <span className="font-medium">03:00 - 07:00</span>
              </div>
              <div className="flex justify-between py-1">
                <span> Sun</span>
                <span className="font-medium">
                  OFF ( Emergency By Appointment )
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span>Emergency</span>
                <span className="font-medium">24/7 Hours</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full text-blue-800 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full text-blue-800 text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-teal-100 p-2 rounded-full text-teal-700 text-xl"
              >
                <RiWhatsappLine />
              </a>
            </div>
          </div>
        </div>
        {/* Right - Appointment */}
        <div className="md:w-1/2 bg-white p-8 rounded-2xl">
          <div className="mb-4">
            <span className="inline-block rounded-full px-3 py-1 bg-gray-100 text-blue-800 text-sm font-semibold mb-2">
              • Contact Us
            </span>
            <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-3 leading-tight">
              Book an Appointment
            </h2>
            <p className="text-gray-700 font-medium mb-6">
              We’re here to help you with your healthcare needs. Whether you
              have questions, need to schedule an appointment.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none"
              />
              <select className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none">
                <option>Select Department</option>
                <option>Root Canal Treatment (Single Sitting) - 10% Off</option>
                <option>Implantologist - 20% Off</option>
                <option>Cleaning & Bleaching</option>
                <option>TMJ Specialist</option>
                <option>Orthodontic Treatment</option>
                <option>Fillings</option>
                <option>Cosmetic Dentistry</option>
                <option>Hair Transplant</option>
                <option>Skin Specialist</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none">
                <option>Select Doctor</option>
                <option>Dr. Himanshu Singh</option>
              </select>
              {/* Date input example */}
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Type Your Message"
              className="w-full border rounded-lg px-4 py-2 text-lg focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold py-3 rounded-lg transition"
            >
              Book Appointment
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
          title="Our Location"
        ></iframe>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
