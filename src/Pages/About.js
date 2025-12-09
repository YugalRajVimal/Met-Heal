import React from "react";
import Footer from "../Components/Footer";
import AboutUsHero from "./AboutUsHero";
import InfiniteMarquee from "../Components/LandingPageComponents/InfiniteMarquee";
import AboutUsSlider from "./AboutUsSlider";

const About = () => {
  const lang = "en";
  const texts = {
    title: {
      en: "About Met Heal, Gurgaon Sector 56",
      hi: "स्माइल डेंटल केयर, गुरुग्राम सेक्टर 56 के बारे में",
    },

    tagline: {
      en: "Modern Dental & Aesthetic Care by AIIMS-trained Specialist Dr. Himanshu Singh.",
      hi: "AIIMS-प्रशिक्षित विशेषज्ञ डॉ. हिमांशु सिंह द्वारा आधुनिक दंत और सौंदर्य देखभाल।",
    },

    paragraphs: {
      en: [
        "Welcome to Met Heal, Gurgaon — a modern dental and cosmetic clinic led by Dr. Himanshu Singh (BDS, MDS – Orthodontics & TMJ Specialist). Located at D-235, Sector 56, Gurgaon, our clinic is dedicated to providing world-class dental and aesthetic care in a comfortable, patient-friendly environment.",
        "Dr. Himanshu Singh completed his BDS from IDS Dental College, Ghaziabad and is a highly skilled and compassionate Orthodontist and TMJ Specialist with extensive experience in advanced dental and facial treatments.",
        "A proud AIIMS-trained specialist, Dr. Himanshu Singh has completed 2 years of clinical and research experience at AIIMS, Ansari Nagar, New Delhi — one of India’s most prestigious medical institutes.",
        "His expertise extends beyond orthodontics to comprehensive oral rehabilitation and facial aesthetics, ensuring that every patient receives personalized, long-lasting results.",
        "At Met Heal, we combine the latest dental technology with compassionate care to create healthy, confident smiles. Our key services include Root Canal Treatments (single sitting), Dental Implants, Braces & Aligners, Cosmetic Dentistry, TMJ Disorder Management, and more — all tailored to your comfort and needs.",
        "We also provide aesthetic and skin care services including Hair Transplant and advanced dermatological treatments, offering a complete wellness experience under one roof.",
        "Why choose us? AIIMS-trained expertise, modern facilities, personalized care, affordable pricing, and a hygienic, friendly environment — all designed to make your dental experience stress-free and exceptional.",
        "Our mission is to provide affordable, high-quality dental and aesthetic care backed by medical expertise and compassion — helping every patient achieve a healthy smile and renewed confidence.",
      ],

      hi: [
        "स्माइल डेंटल केयर, गुरुग्राम में आपका स्वागत है — एक आधुनिक दंत और कॉस्मेटिक क्लिनिक जिसका नेतृत्व डॉ. हिमांशु सिंह (BDS, MDS – ऑर्थोडॉन्टिक्स और TMJ विशेषज्ञ) कर रहे हैं। D-235, सेक्टर 56, गुरुग्राम में स्थित हमारा क्लिनिक आरामदायक और मरीज-हितैषी वातावरण में विश्वस्तरीय दंत और सौंदर्य देखभाल प्रदान करने के लिए समर्पित है।",
        "डॉ. हिमांशु सिंह एक अत्यंत कुशल और संवेदनशील ऑर्थोडॉन्टिस्ट और TMJ विशेषज्ञ हैं, जिनके पास उन्नत दंत और चेहरे के उपचारों का व्यापक अनुभव है। AIIMS, नई दिल्ली से प्रशिक्षित होने के साथ, उन्होंने 2 वर्षों का क्लिनिकल और रिसर्च अनुभव प्राप्त किया है — जो भारत के सबसे प्रतिष्ठित चिकित्सा संस्थानों में से एक है।",
        "उनकी विशेषज्ञता ऑर्थोडॉन्टिक्स से आगे बढ़कर संपूर्ण मौखिक पुनर्वास और चेहरे की सौंदर्य चिकित्सा तक फैली हुई है, जिससे प्रत्येक मरीज को व्यक्तिगत और दीर्घकालिक परिणाम मिलते हैं।",
        "स्माइल डेंटल केयर में हम नवीनतम दंत तकनीक और करुणामय सेवा का संयोजन करते हैं ताकि हर मरीज को एक स्वस्थ और आत्मविश्वासी मुस्कान मिल सके। हमारी प्रमुख सेवाओं में रूट कैनाल ट्रीटमेंट (सिंगल सिटिंग), डेंटल इम्प्लांट्स, ब्रेसेस और एलाइनर्स, कॉस्मेटिक डेंटिस्ट्री, TMJ डिसऑर्डर मैनेजमेंट आदि शामिल हैं।",
        "हम हेयर ट्रांसप्लांट और उन्नत त्वचा उपचार जैसी सौंदर्य सेवाएँ भी प्रदान करते हैं ताकि मरीजों को संपूर्ण वेलनेस अनुभव मिल सके।",
        "हमारा क्लिनिक अपनी विशेषज्ञता, आधुनिक सुविधाओं, व्यक्तिगत देखभाल, पारदर्शी मूल्य निर्धारण और स्वच्छ वातावरण के लिए जाना जाता है — जिससे आपकी दंत चिकित्सा अनुभव आरामदायक और उत्कृष्ट बन सके।",
        "हमारा उद्देश्य है — सुलभ, उच्च-गुणवत्ता और सहानुभूतिपूर्ण दंत एवं सौंदर्य देखभाल प्रदान करना, ताकि हर मरीज स्वस्थ मुस्कान और आत्मविश्वास के साथ घर लौटे।",
      ],
    },

    footer: {
      en: "Healthy smiles and renewed confidence — only at Met Heal, Gurgaon.",
      hi: "स्वस्थ मुस्कान और नया आत्मविश्वास — केवल स्माइल डेंटल केयर, गुरुग्राम में।",
    },

    years: {
      en: "Years of Trusted Dental & Aesthetic Care",
      hi: "विश्वसनीय दंत और सौंदर्य देखभाल के वर्ष",
    },
  };

  return (
    <div className="w-full">
      <AboutUsHero />
      <section className="bg-white  px-4 md:px-12 pt-14 pb-20 flex flex-col md:flex-row items-stretch justify-center gap-14 ">
        {/* LEFT SIDE */}
        <div className="flex-1 flex w-full flex-col items-center md:items-start justify-center">
          <div className="w-full flex flex-col items-center md:items-start">
            <span className="text-blue-800 font-extrabold text-2xl mb-3 tracking-wide uppercase">
              Meet Dr. Himanshu Singh
            </span>
            <div className="relative flex items-end w-full">
              <div className="flex-shrink-0 flex items-end drop-shadow-xl bg-gradient-to-t from-teal-50 to-blue-100 rounded-2xl">
                <span className="block text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] leading-none font-extrabold text-blue-900/90 tracking-tight p-1 md:p-2">
                  3+
                </span>
                <span className="block text-[1.7rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[5rem] leading-none font-extrabold text-blue-900/90 tracking-tight p-1 md:p-2">
                  Years
                </span>
              </div>
            </div>
            <span className="mt-4 text-base md:text-lg text-teal-600 font-semibold tracking-wider">
              of Trusted Dental Excellence in Gurgaon
            </span>
          </div>

          <div className="flex items-center mt-8">
            <span className="ml-7 text-blue-900 font-semibold text-md md:text-lg leading-tight md:leading-snug">
              AIIMS-trained{" "}
              <span className="text-teal-700 font-bold">
                Orthodontist & TMJ Specialist
              </span>
              <br className="hidden md:block" />
              Committed to Precision & Compassion
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="w-[3px] h-2/3 mx-6 bg-gradient-to-b from-blue-200 via-blue-400 to-teal-200 rounded-full" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-[1.5] flex flex-col gap-8 justify-center items-center md:items-center">
          <div className="bg-gradient-to-br from-[#e7f6ff] to-[#f7fafc] shadow-md rounded-2xl px-7 py-7">
            <p className="text-lg md:text-xl text-gray-800 font-light max-w-2xl mb-4">
              At{" "}
              <span className="font-medium text-teal-700">
                Met Heal, Gurgaon
              </span>
              , we blend{" "}
              <span className="text-blue-700 font-semibold">
                advanced dental technology
              </span>{" "}
              with{" "}
              <span className="text-teal-600 font-semibold">
                personalized, compassionate care
              </span>
              . Led by{" "}
              <span className="font-bold text-blue-800">
                Dr. Himanshu Singh (BDS, MDS, TMJ Specialist)
              </span>
              , our mission is to deliver{" "}
              <span className="text-blue-800 font-semibold">
                pain-free and precise
              </span>{" "}
              treatments that restore confidence and health.
            </p>
            <a
              href="#"
              className="inline-block mt-3 bg-gradient-to-r from-[#08b6d0] via-[#2580cb] to-[#04989d] text-white py-2 px-5 rounded-xl font-semibold text-base shadow hover:bg-blue-800 transition"
            >
              Explore Our Services
            </a>
          </div>
          <img
            src="/dentalTeam.jpg"
            alt="Dr. Himanshu Singh and Team"
            className="rounded-2xl w-full max-w-md md:max-w-lg mt-3 border-4 border-white shadow-xl object-cover"
          />
        </div>
      </section>

      <InfiniteMarquee />

      <section className="py-24 text-white mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Text Section */}
            <div className="md:w-[60%] mt-20 md:mt-0 prose prose-invert max-w-none flex flex-col justify-center items-center">
              <h3 className="text-3xl md:text-4xl text-black font-bold font-montserrat mb-6 tracking-tight md:whitespace-nowrap">
                {texts.title[lang]}
              </h3>

              <p className="text-black font-roboto mb-6 text-lg italic">
                {texts.tagline[lang]}
              </p>

              {texts.paragraphs[lang].map((para, index) => (
                <p key={index} className="text-black font-roboto mb-4">
                  {para}
                </p>
              ))}

              <p className="text-black font-roboto italic text-right">
                {texts.footer[lang]}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[40%] relative aspect-square md:aspect-auto rounded-lg md:h-[600px]">
              <img
                src="/den7.jpg"
                alt="Met Heal Clinic Gurgaon"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute -bottom-20 md:-bottom-24 -right-4 bg-gradient-to-r from-[#023893] to-[#3ec2ce] border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-danger shadow-text">
                    3+
                  </p>
                  <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                    {texts.years[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUsSlider />
      <Footer />
    </div>
  );
};

export default About;
