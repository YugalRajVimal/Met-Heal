import { FaUserMd, FaHospital, FaFlask, FaUserFriends, FaHeartbeat, FaPills, FaVial, FaFileInvoice } from "react-icons/fa";

const WHO_SERVICES = [
  { icon: <FaUserMd className="text-[#7367F0] w-5 h-5" />, label: "Doctor Guidance" },
  { icon: <FaHospital className="text-[#7367F0] w-5 h-5" />, label: "Hospital Recommendation" },
  { icon: <FaFlask className="text-[#7367F0] w-5 h-5" />, label: "Lab Diagnostics" },
  { icon: <FaUserFriends className="text-[#7367F0] w-5 h-5" />, label: "Patient Companions" },
  { icon: <FaHeartbeat className="text-[#7367F0] w-5 h-5" />, label: "Checkups / Special Care" },
  { icon: <FaPills className="text-[#7367F0] w-5 h-5" />, label: "Medicine & Pharmacy" },
  { icon: <FaVial className="text-[#7367F0] w-5 h-5" />, label: "Diagnostics/Tests" },
  { icon: <FaFileInvoice className="text-[#7367F0] w-5 h-5" />, label: "Billing & Paperwork" },
];

export default function WhoWeAre() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-0 py-12 md:py-24 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Left Text: Concise Introduction and Services Grid */}
      <div className="flex-1 max-w-xl">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-[#162146] mb-4">
          • Who We Are
        </span>
        <h1 className="text-[#162146] text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Simplifying Medical Care
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          We guide, support, and escort patients through doctor visits, treatments, and health tasks—with complete trust and care.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-[#7367F0] mb-4">
            What We Help With
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[#162146] text-base">
            {WHO_SERVICES.map((s, idx) => (
              <li key={idx} className="flex items-center gap-2 py-2">
                {s.icon}
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center w-full h-72 md:h-[420px] relative">
        <div className="w-64 h-64 md:w-[420px] md:h-[520px] rounded-3xl shadow-xl flex items-center justify-center">
          <img src="/den7.jpg" className="h-full w-full rounded-xl object-cover" alt="Medical support illustration" />
        </div>
      </div>
    </section>
  );
}
