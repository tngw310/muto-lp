const socialLinks = [
  {
    href: "https://twitter.com/",
    label: "X (Twitter)",
    color: "bg-black",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/",
    label: "Instagram",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    color: "bg-red-600",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const supportActions = [
  {
    title: "イベントに参加する",
    description: "街頭演説や集会など、直接お会いできる機会を設けています。",
    link: "#",
    linkText: "SNSで最新情報をチェック",
  },
  {
    title: "後援会に入会する",
    description: "武藤雄大を継続的に応援いただける方はぜひご入会ください。",
    link: "#",
    linkText: "入会フォームへ",
  },
  {
    title: "ボランティアに参加する",
    description: "チラシ配布やポスター貼りなど、一緒に活動しませんか。",
    link: "#",
    linkText: "お問い合わせ",
  },
];

export default function SupportSection() {
  return (
    <section id="support" className="py-20 sm:py-28 bg-[var(--primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-4">
          一緒に、届かない声を届けませんか
        </h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          あなたの一票、あなたの声が、政治を動かします
        </p>

        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-white mb-6">
            まずはフォローから
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} w-14 h-14 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportActions.map((action, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-bold mb-3">{action.title}</h4>
              <p className="text-white/80 text-sm mb-4">{action.description}</p>
              <a
                href={action.link}
                className="inline-flex items-center text-[var(--accent)] hover:underline text-sm font-medium"
              >
                {action.linkText}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
