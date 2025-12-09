const cards = [
  {
    title: "Specialist Guidance",
    desc: "We connect you to the right doctor, hospital, and diagnostic lab.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="none" />
        <text x="17" y="37" fontSize="14" fill="#162146">👨‍⚕️</text>
      </svg>
    ),
  },
  {
    title: "Trained Companions",
    desc: "Trustworthy support for all medical visits and procedures.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="none" />
        <text x="17" y="37" fontSize="14" fill="#00A86A">🧑‍🤝‍🧑</text>
      </svg>
    ),
    active: true,
  },
  {
    title: "Family-Friendly Help",
    desc: "We safely escort, assist, and support your family’s medical needs.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="none" />
        <text x="14" y="37" fontSize="14" fill="#162146">👪</text>
      </svg>
    ),
  },
];

export default function DentalCards() {
  return (
    <div className="w-full flex justify-center py-16 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`relative flex flex-col p-8 rounded-[40px] border ${
              card.active
                ? "bg-[#75BC84] border-[#75BC84] text-white shadow-xl"
                : "bg-white border-gray-100 text-[#162146] shadow"
            } transition-colors duration-200`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {card.title}
            </h3>
            <p className="mb-6 text-lg font-medium">
              {card.desc}
            </p>
            {/* <div className="flex-1 flex items-end mb-3">{card.icon}</div> */}
            {/* Number badge */}
            <div className={`absolute bottom-0 right-6 transform translate-y-1/2`}>
              <span className={`inline-flex items-center justify-center rounded-full bg-gray-100 
                ${card.active ? "bg-[#BCDFCE] text-[#00A86A]" : "text-[#162146]"} 
                font-bold text-xl w-14 h-14`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            {/* Unique shape for active card */}
            {card.active && (
              <span className="absolute -bottom-7 left-6 w-24 h-16 rounded-b-[40px] bg-[#75BC84] blur-md opacity-40"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
