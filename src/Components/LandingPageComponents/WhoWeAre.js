import { FaUserMd, FaHospital, FaFlask, FaUserFriends, FaHeartbeat, FaPills, FaVial, FaFileInvoice } from "react-icons/fa";

// Use green/lime palette only, replace all # hex colors as per allowed list
const WHO_SERVICES = [
  { icon: <FaUserMd className="text-green-600 w-5 h-5" />, label: "Doctor Guidance" },
  { icon: <FaHospital className="text-lime-600 w-5 h-5" />, label: "Hospital Recommendation" },
  { icon: <FaFlask className="text-lime-400 w-5 h-5" />, label: "Lab Diagnostics" },
  { icon: <FaUserFriends className="text-green-900 w-5 h-5" />, label: "Patient Companions" },
  { icon: <FaHeartbeat className="text-lime-700 w-5 h-5" />, label: "Checkups / Special Care" },
  { icon: <FaPills className="text-green-600 w-5 h-5" />, label: "Medicine & Pharmacy" },
  { icon: <FaVial className="text-lime-400 w-5 h-5" />, label: "Diagnostics/Tests" },
  { icon: <FaFileInvoice className="text-green-900 w-5 h-5" />, label: "Billing & Paperwork" },
];

export default function WhoWeAre() {
  return (
    <section className=" py-12 md:py-24 w-full  mx-auto px-4 md:px-8 bg-lime-50">
      {/* Left Text: Concise Introduction and Services Grid */}
      <div className=" flex mx-auto flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-0 max-w-7xl">
      <div className="flex-1 max-w-xl">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-lime-100 text-green-900 mb-4">
          • Who We Are
        </span>
        <h1 className="text-green-900 font-serif text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          Simplifying Medical Care
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          We guide, support, and escort patients through doctor visits, treatments, and health tasks—with complete trust and care.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-lime-700 mb-4">
            What We Help With
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-green-900 text-base">
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
        <div className="w-64 h-64 md:w-[420px] md:h-[520px] rounded-3xl shadow-xl flex items-center justify-center bg-lime-100">
          <img src="/images/08.png" className="h-full w-full rounded-xl object-cover shadow-md" alt="Medical support illustration" />
        </div>
      </div>
      </div>
    
    </section>
  );
}
