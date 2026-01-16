const downloads = [
  {
    title: "プロフィールPDF（日本語）",
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
    title: "ダウンロード用広報写真",
    description: "高解像度の写真をダウンロードできます",
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
    title: "政策ダイジェストPDF",
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
];

export default function DownloadSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          ダウンロード
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
          講演・取材依頼の方は、下記よりプロフィールPDF、画像をダウンロードしてお使いください。
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
