import React from "react";
import Footer from "../Components/Footer";
import AboutUsHero from "./AboutUsHero";
import InfiniteMarquee from "../Components/LandingPageComponents/InfiniteMarquee";
import AboutUsSlider from "./AboutUsSlider";

const About = () => {
  const lang = "en";
  const texts = {
    title: {
      en: "About Met Heal – Medical Guidance & Patient Support Centre",
    },
    tagline: {
      en: "Helping patients make the right medical decisions with clarity, care, and trusted support.",
    },
    paragraphs: {
      en: [
        "Welcome to Met Heal — a Medical Booking and Patient Support Centre built to simplify healthcare journeys for individuals and families. We are not a hospital or a clinic, and we do not provide medical treatment. Our role is to guide, assist, and support patients through complex medical decisions and hospital processes.",
        "Healthcare today can be confusing — which doctor to consult, which hospital to choose, where to get reliable diagnostics, and how to manage hospital visits. Met Heal exists to remove this confusion by offering clear guidance and dependable support at every step.",
        "We help patients identify the right specialist based on their condition, compare hospitals and treatment options, and connect with trusted diagnostic labs. Our guidance is practical, unbiased, and focused on what is best for the patient.",
        "Beyond guidance, we provide trained medical companions who assist patients during OPD and IPD visits, diagnostics, dialysis, chemotherapy sessions, and routine checkups. These companions are not caretakers — they are trained to escort, coordinate, and manage hospital formalities safely and responsibly.",
        "Met Heal also supports patients with medical errands such as pharmacy medicine pickups, billing assistance, admissions, discharge coordination, and follow-up visit scheduling — saving families time, effort, and stress.",
        "Our services are especially valuable for elderly patients, working professionals, out-of-station families, and anyone who needs reliable medical assistance without confusion or chaos.",
        "At Met Heal, our mission is simple: to make healthcare easier to navigate. We combine structured guidance, human support, and transparent processes so patients can focus on recovery — not logistics.",
        "We stand for trust, clarity, and responsibility in healthcare support. No medical advice, no treatment claims — just honest guidance and dependable assistance when it matters most.",
      ],
    },
    footer: {
      en: "Met Heal — guiding patients through healthcare with confidence and care.",
    },
    years: {
      en: "Years of Trusted Patient Support Services",
    }
  };

  return (
    <div className="w-full">
      <AboutUsHero />

      <section className="bg-lime-50 px-4 md:px-12 pt-14 pb-20 flex flex-col md:flex-row items-stretch justify-center gap-14 ">
        {/* LEFT SIDE */}
        <div className="flex-1 flex w-full flex-col items-center md:items-start justify-center">
          <div className="w-full flex flex-col items-center md:items-start">
            <span className="text-green-900 font-extrabold text-2xl mb-3 tracking-wide uppercase">
              About Met Heal
            </span>
            <div className="relative flex items-end w-full">
              <div className="flex-shrink-0 flex items-end drop-shadow-xl bg-gradient-to-t from-lime-100 to-green-50 rounded-2xl">
                <span className="block text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] leading-none font-extrabold text-green-900/90 tracking-tight p-1 md:p-2">
                  3+
                </span>
                <span className="block text-[1.7rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[5rem] leading-none font-extrabold text-green-900/90 tracking-tight p-1 md:p-2">
                  Years
                </span>
              </div>
            </div>
            <span className="mt-4 text-base md:text-lg text-lime-700 font-semibold tracking-wider">
              of Trusted Patient Support in Gurgaon
            </span>
          </div>

          <div className="flex items-center mt-8">
            <span className="ml-7 text-green-900 font-semibold text-md md:text-lg leading-tight md:leading-snug">
              <span className="text-lime-700 font-bold">
                Medical Guidance & Patient Support Professionals
              </span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="w-[3px] h-2/3 mx-6 bg-gradient-to-b from-lime-100 via-lime-400 to-green-200 rounded-full" />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-[1.5] flex flex-col gap-8 justify-center items-center md:items-center">
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 shadow-md rounded-2xl px-7 py-7">
            <p>
              At <span className="font-medium text-lime-700">Met Heal</span>, we provide
              <span className="text-green-600 font-semibold"> medical guidance, hospital recommendations,</span>
              and <span className="text-lime-600 font-semibold">trained patient companion services</span>.
              Our role is to simplify healthcare decisions, coordinate medical visits,
              and support patients through diagnostics, treatments, and hospital processes —
              with clarity, safety, and trust.
            </p>
            <a
              href="#"
              className="inline-block mt-3 bg-gradient-to-r from-lime-400 via-lime-500 to-green-600 text-white py-2 px-5 rounded-xl font-semibold text-base shadow hover:bg-lime-600 transition"
            >
              Explore Our Services
            </a>
          </div>
          <img
            src="/images/010.png"
            alt="Met Heal Team"
            className="rounded-2xl w-full max-w-md md:max-w-lg mt-3 border-4 border-white shadow-xl object-cover"
          />
        </div>
      </section>

      <InfiniteMarquee />

      <section className="pt-10 bg-lime-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Text Section */}
            <div className="md:w-[60%] mt-20 md:mt-0 prose max-w-none flex flex-col justify-center items-center">
              <h3 className="text-3xl md:text-4xl text-green-900 font-bold font-montserrat mb-6 tracking-tight ">
                {texts.title[lang]}
              </h3>

              <p className="text-lime-600 font-roboto mb-6 text-lg italic">
                {texts.tagline[lang]}
              </p>

              {texts.paragraphs[lang].map((para, index) => (
                <p key={index} className="text-green-900 font-roboto mb-4">
                  {para}
                </p>
              ))}

              <p className="text-lime-700 font-roboto italic text-right">
                {texts.footer[lang]}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[40%] relative aspect-square md:aspect-auto rounded-lg md:h-[600px]">
              <img
                src="/images/03.png"
                alt="Met Heal Patient Support"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute -bottom-20 md:-bottom-24 -right-4 bg-gradient-to-r from-lime-400 to-green-600 border border-lime-300 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-lime-700 shadow-text">
                    3+
                  </p>
                  <p className="text-xs md:text-base text-green-900 font-roboto mt-1 md:mt-2">
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
