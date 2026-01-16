export default function VideoSection() {
  return (
    <section id="video" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          1分で分かる武藤雄大
        </h2>
        <p className="text-center text-[var(--muted)] mb-10">
          自己紹介動画をご覧ください
        </p>

        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[var(--primary)] rounded-full flex items-center justify-center cursor-pointer hover:bg-[var(--primary-light)] transition-colors">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 text-[var(--muted)] text-sm">
                YouTube動画埋め込み
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-light)] font-medium"
          >
            YouTubeチャンネルで他の動画を見る
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
