const timeline = [
  {
    period: "学生時代",
    items: [
      "早稲田大学政治経済学部 卒業",
      "米国・北京に留学",
      "東日本大震災後の福島で被災地支援活動",
    ],
  },
  {
    period: "NHK記者時代",
    items: [
      "NHK入局（山形 → 宮城 → 東京）",
      "災害報道、行政、地方政治を取材",
      "条例・制度を動かした取材実績",
    ],
  },
  {
    period: "POTETO Media",
    items: [
      "政治分野ディレクター",
      "政治家の広報サポート",
    ],
  },
  {
    period: "現在",
    items: [
      "国民民主党 千葉6区総支部長",
      "0歳児の父として子育て中",
    ],
  },
];

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-12">
          プロフィール
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <div className="w-40 h-40 bg-gray-200 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <span className="text-[var(--muted)] text-sm">写真</span>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    武藤雄大
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-4">
                    むとう ゆうだい
                  </p>

                  <dl className="space-y-2 text-sm">
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="text-[var(--muted)] sm:w-20">出身地</dt>
                      <dd className="text-[var(--foreground)]">千葉県習志野市</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="text-[var(--muted)] sm:w-20">家族</dt>
                      <dd className="text-[var(--foreground)]">妻、0歳の子ども</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="text-[var(--muted)] sm:w-20">所属</dt>
                      <dd className="text-[var(--foreground)]">
                        国民民主党 千葉6区総支部長
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-[var(--foreground)] mb-4">
                原体験
              </h4>
              <blockquote className="text-[var(--muted)] leading-relaxed border-l-4 border-[var(--primary)] pl-4">
                学生時代、東日本大震災後の福島に通い、原発事故の影響を受けた高校生たちと向き合った。
                「支援される側だから」「言っても意味がない」——自分の本音を飲み込んでしまう若者たちがそこにいた。
                届かない声が、社会にはあまりにも多い。
              </blockquote>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[var(--foreground)] mb-6">経歴</h4>
            <div className="space-y-8">
              {timeline.map((entry, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--primary)] rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[5px] top-4 w-0.5 h-full bg-[var(--border)]" />
                  )}

                  <h5 className="text-base font-bold text-[var(--primary)] mb-2">
                    {entry.period}
                  </h5>
                  <ul className="space-y-1">
                    {entry.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-sm text-[var(--foreground)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
