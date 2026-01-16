export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-sm text-[var(--muted)] mb-2 animate-fade-in-up">
              国民民主党 千葉6区（松戸市）総支部長
            </p>

            <h1 className="animate-fade-in-up animate-delay-100">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary)] tracking-tight">
                武藤雄大
              </span>
              <span className="block text-sm text-[var(--muted)] mt-2 font-normal tracking-widest">
                むとう ゆうだい
              </span>
            </h1>

            <p className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--foreground)] leading-relaxed animate-fade-in-up animate-delay-200">
              届かない声を、届ける。
            </p>

            <p className="mt-6 text-base sm:text-lg text-[var(--muted)] animate-fade-in-up animate-delay-300">
              0歳児の父。記者出身。現場から政治へ。
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animate-delay-300">
              <a
                href="#video"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                武藤を知る
              </a>
              <a
                href="#policy"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                政策を見る
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-full" />
              <div className="absolute inset-4 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-[var(--muted)] text-sm">写真</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#video" aria-label="下へスクロール">
          <svg
            className="w-6 h-6 text-[var(--muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
