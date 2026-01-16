const downloads = [
  {
    title: "プロフィールPDF",
    description: "経歴・政策をまとめた資料",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    href: "#",
  },
  {
    title: "広報用写真",
    description: "高解像度写真データ",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    href: "#",
  },
  {
    title: "政策PDF",
    description: "政策の詳細資料",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    href: "#",
  },
  {
    title: "チラシPDF",
    description: "印刷・配布用チラシ",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
    href: "#",
  },
];

export default function DownloadSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          ダウンロード
        </h2>
        <p className="text-center text-[var(--muted)] mb-12">
          広報活動やメディア掲載にご利用ください
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group block bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-[var(--primary)] mb-4">{item.icon}</div>
              <h3 className="font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{item.description}</p>
              <div className="mt-4 flex items-center text-[var(--primary)] text-sm font-medium">
                ダウンロード
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
