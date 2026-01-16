const policies = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "経済・手取り",
    tagline: "働いた分が、ちゃんと暮らしに残る",
    description:
      "103万円の壁を178万円に引き上げ、手取りを増やす。国民民主党として実現した政策を、さらに前へ進めます。",
    highlight: "103万円 → 178万円",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "子育て",
    tagline: "子育ての「今しんどい」に応える",
    description:
      "0歳児の父として、当事者の声を届けます。必要なときに必要な支援が届く、使いやすい制度を実現します。",
    highlight: "児童手当 500万円",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "防災",
    tagline: "待つ支援から、届ける支援へ",
    description:
      "災害現場を取材してきた記者として、「待っていては届かない支援」の現実を見てきました。プッシュ型支援を推進します。",
    highlight: "プッシュ型支援",
  },
];

export default function PolicySection() {
  return (
    <section id="policy" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          武藤雄大の政策
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
          現場を見てきた記者として、当事者として、3つの柱で政策を実現します
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[var(--primary)] mb-6">{policy.icon}</div>

              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                {policy.title}
              </h3>

              <p className="text-[var(--primary)] font-medium mb-4">
                {policy.tagline}
              </p>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
                {policy.description}
              </p>

              <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm rounded-full">
                {policy.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
