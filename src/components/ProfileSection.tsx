"use client";

import { useState } from "react";

const timeline = [
  {
    period: "学生時代",
    title: "早稲田大学政治経済学部",
    description: "米国・北京への留学経験",
    highlight: false,
  },
  {
    period: "学生時代",
    title: "福島での被災地支援",
    description: "「届かない声」との出会い——原体験",
    highlight: true,
  },
  {
    period: "2010年代",
    title: "NHK記者として入局",
    description: "山形→宮城→東京。災害報道・行政取材",
    highlight: false,
  },
  {
    period: "記者時代",
    title: "災害・地方政治を取材",
    description: "制度を動かす取材実績",
    highlight: false,
  },
  {
    period: "2020年代",
    title: "POTETO Media",
    description: "政治分野ディレクターとして活動",
    highlight: false,
  },
  {
    period: "現在",
    title: "国民民主党 千葉6区総支部長",
    description: "0歳児の父として活動中",
    highlight: true,
  },
];

const episodes = [
  {
    number: "01",
    title: "福島で出会った「届かない声」",
    summary: "東日本大震災後の福島で、声を飲み込む高校生たちと出会う",
    content: `学生時代、東日本大震災後の福島に通い、原発事故の影響を受けた高校生たちと向き合いました。

「支援される側だから」「言っても意味がない」——自分の本音を飲み込んでしまう若者たちが、そこにはたくさんいました。

届かない声が、社会にはあまりにも多い。

このとき感じた問題意識が、私のすべての活動の原点になっています。`,
  },
  {
    number: "02",
    title: "記者として現場を歩いた日々",
    summary: "NHK記者として災害現場、地方政治を取材",
    content: `大学卒業後、NHKに記者として入局しました。山形、宮城、東京と、日本各地で災害現場や地方政治を取材してきました。

現場と政治の距離があまりにも遠いことを、何度も痛感しました。

声は途中で消え、制度はあるのに、現場では機能しない。

「見えない声を見えるようにする」——これが記者としての私の仕事でした。条例や制度を動かすところまでつなぐ取材を、何度も経験しました。`,
  },
  {
    number: "03",
    title: "「伝える側」から「決める側」へ",
    summary: "声を届けるだけでは変わらない。決める側に行くという決意",
    content: `記者として声を届けても、それだけでは社会は変わらない。

だから私は、「伝える側」ではなく、「決める側」に行くと決めました。

政策を作って終わりにしない。現場で本当に機能するまで見届ける。

それができるのは、現場を見てきた自分だからこそだと思っています。`,
  },
  {
    number: "04",
    title: "0歳児の父として、今",
    summary: "子どもが生まれ、子育て世代の痛みを自分ごととして感じる",
    content: `いま私は、0歳の子どもを育てる父親です。

子どもが生まれる前後、本当にお金がかかりました。ベビー用品、部屋の準備、そして育休中の収入減。まとまったお金があれば、どれだけ助かったか。

この千葉6区は、子育て世代、働く世代が本当に多い地域です。ベビーカーを押す家族を見ながら、常に思います。

この社会は、現役世代が安心して将来設計を描ける国になっているだろうか。

だからこそ、私はここに立っています。`,
  },
];

export default function ProfileSection() {
  const [expandedEpisode, setExpandedEpisode] = useState<string | null>(null);

  const toggleEpisode = (number: string) => {
    setExpandedEpisode(expandedEpisode === number ? null : number);
  };

  return (
    <section id="profile" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-12">
          プロフィール
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Basic Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <div className="w-40 h-40 bg-gray-200 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <span className="text-[var(--muted)] text-sm">写真</span>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">
                    武藤 雄大
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
                        国民民主党 千葉6区（松戸市）総支部長
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h4 className="text-lg font-bold text-[var(--foreground)] mb-6">経歴</h4>
            <div className="space-y-6">
              {timeline.map((entry, index) => (
                <div key={index} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-1 w-3 h-3 rounded-full ${
                      entry.highlight ? "bg-[var(--primary)]" : "bg-gray-300"
                    }`}
                  />
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[5px] top-4 w-0.5 h-full bg-[var(--border)]" />
                  )}

                  <div className="text-xs text-[var(--muted)] mb-1">
                    {entry.period}
                  </div>
                  <h5 className={`text-base font-bold mb-1 ${
                    entry.highlight ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                  }`}>
                    {entry.title}
                  </h5>
                  <p className="text-sm text-[var(--muted)]">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-8 text-center">
            ストーリー
          </h3>

          <div className="space-y-4">
            {episodes.map((episode) => (
              <div
                key={episode.number}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleEpisode(episode.number)}
                  className="w-full p-6 text-left flex items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex-shrink-0 w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center font-bold">
                    {episode.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[var(--foreground)] mb-1">
                      {episode.title}
                    </h4>
                    <p className="text-sm text-[var(--muted)] truncate">
                      {episode.summary}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[var(--muted)] transition-transform flex-shrink-0 ${
                      expandedEpisode === episode.number ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedEpisode === episode.number
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-[var(--border)]">
                    <p className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
                      {episode.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
