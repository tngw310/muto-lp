"use client";

import { useState } from "react";

const policies = [
  {
    id: "economy",
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
      "基礎控除の引き上げを実現。次は社会保険の壁を壊し、さらなる手取り増を目指します。",
    highlight: "103万円→178万円を実現",
    detail: {
      problem: `「働いても働いても、暮らしは楽にならない」

給料が上がっても、税金・社会保険料で持っていかれる。物価は上がり続ける。30年間据え置かれてきた103万円の壁。頑張りが報われない社会になっていました。`,
      solution: `国民民主党は「103万円→178万円」の引き上げを実現しました。2024年の衆院選で掲げた公約が、2025年12月に実現。言い続ければ、政治は動く。

でも、これで終わりではありません。

・住民税の控除は据え置き
・社会保険の壁（106万円・130万円）は残ったまま
・年収400万円の人の手取り増は、年間わずか5,000円程度

税の壁は動かした。次は、社会保険の壁。
働いた分が、ちゃんと暮らしに残る社会を、必ず実現します。`,
      keyNumbers: [
        { label: "103万→178万円", description: "基礎控除の引き上げ（実現済み）" },
        { label: "106万・130万円", description: "社会保険の壁（次の課題）" },
        { label: "年間約5,000円", description: "年収400万円の手取り増（道半ば）" },
      ],
    },
  },
  {
    id: "childcare",
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
    tagline: "子育ての\"今しんどい\"に応える",
    description:
      "出産・育児の「今」に届く支援を。一括か分割か、受け取り方はあなたが選ぶ。届くまでの手続きは国がやる。",
    highlight: "児童手当500万円",
    detail: {
      problem: `子ども1人育てるのに、約3,000万円かかると言われています。
でも今の児童手当は、総額でたった200万円。

出産前後、お金がかかりますよね。ベビー用品、部屋の準備、育休中の収入減。
でも手当は月々少額。必要なときに届かない。`,
      solution: `だから私は、児童手当を1人500万円に増額します。

さらに、受け取り方を選べるようにします。
・出産時に一括でほしい人
・18歳まで分割でほしい人
・その組み合わせ

いつ受け取るかは、国ではなくあなたが決める。

届け方も変えます。今の制度は、申請しないともらえない。届くまで数ヶ月かかる。
出生届を出したら、申請なしで届く仕組みにします。届かない人をゼロにする。`,
      keyNumbers: [
        { label: "500万円", description: "児童手当の総額（1人あたり）" },
        { label: "3,000万円", description: "子育て費用の総額" },
        { label: "5,000万円以上", description: "子ども1人の生涯納税額（投資リターン）" },
      ],
      faq: [
        {
          question: "財源はどうするの？",
          answer: "「子ども国債」で調達します。道路や橋を作るとき建設国債を使うように、人への投資にも国債を使う。子どもが将来納める税金は5,000万円以上。500万円の投資は、必ず返ってきます。",
        },
        {
          question: "一括支給で財政が膨らむのでは？",
          answer: "一括分は18年償還の国債で調達するので、単年度の負担は分割と同じに平準化されます。総額は変わりません。",
        },
      ],
    },
  },
  {
    id: "disaster",
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
      "申請しないと届かない支援を変える。必要な人に、必要な支援を、自動で届ける。",
    highlight: "プッシュ型支援体制",
    detail: {
      problem: `私は記者として、何度も災害現場を取材してきました。
そこで見たのは、「届かない支援」の現実です。

・物資はあるのに届かない
・誰がどこにいるか分からない
・申請しないと支援を受けられない

松戸市は江戸川沿いに位置し、水害のリスクを抱えています。`,
      solution: `だから私は、マイナンバーを活用した防災体制を提案します。

平時から情報を連携し、災害時には必要な人に、必要な支援を、申請なしで届ける。

「待つ支援」から「届ける支援」へ。

監視ではありません。届けるための仕組みです。
声を上げられない人にも、支援が届く。これも私の仕事です。`,
      keyNumbers: [
        { label: "24時間以内", description: "安否確認完了の目標" },
        { label: "80%以上", description: "申請なしでの給付率目標" },
      ],
    },
  },
];

export default function PolicySection() {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);

  const togglePolicy = (id: string) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (
    <section id="policy" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
          武藤雄大の政策
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
          暮らしを支える3つの柱。経済・子育て・防災——現役世代が安心して将来設計を描ける社会をつくります。
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {policies.map((policy) => (
            <div
              key={policy.id}
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

              <div className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm rounded-full mb-6">
                {policy.highlight}
              </div>

              <button
                onClick={() => togglePolicy(policy.id)}
                className="w-full flex items-center justify-between text-[var(--primary)] text-sm font-medium hover:text-[var(--primary-light)] transition-colors pt-4 border-t border-[var(--border)]"
              >
                詳しく見る
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedPolicy === policy.id ? "rotate-180" : ""
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
            </div>
          ))}
        </div>

        {/* Policy Detail Panels */}
        {policies.map((policy) => (
          <div
            key={`detail-${policy.id}`}
            className={`overflow-hidden transition-all duration-500 ${
              expandedPolicy === policy.id
                ? "max-h-[2000px] opacity-100 mb-12"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-[var(--primary)]">{policy.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">
                  {policy.title}政策の詳細
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">!</span>
                    問題
                  </h4>
                  <div className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
                    {policy.detail.problem}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    解決策
                  </h4>
                  <div className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
                    {policy.detail.solution}
                  </div>
                </div>
              </div>

              {policy.detail.keyNumbers && (
                <div className="mt-8 pt-8 border-t border-[var(--border)]">
                  <h4 className="text-lg font-bold text-[var(--foreground)] mb-6">
                    重要な数字
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {policy.detail.keyNumbers.map((num, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 text-center"
                      >
                        <p className="text-2xl font-bold text-[var(--primary)] mb-1">
                          {num.label}
                        </p>
                        <p className="text-sm text-[var(--muted)]">
                          {num.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {policy.detail.faq && (
                <div className="mt-8 pt-8 border-t border-[var(--border)]">
                  <h4 className="text-lg font-bold text-[var(--foreground)] mb-6">
                    よくある質問
                  </h4>
                  <div className="space-y-4">
                    {policy.detail.faq.map((item, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6">
                        <p className="font-bold text-[var(--foreground)] mb-2">
                          Q. {item.question}
                        </p>
                        <p className="text-[var(--muted)] text-sm leading-relaxed">
                          A. {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setExpandedPolicy(null)}
                className="mt-8 text-[var(--muted)] hover:text-[var(--foreground)] text-sm font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                閉じる
              </button>
            </div>
          </div>
        ))}

        {/* Participation Message */}
        <div className="bg-[var(--primary)]/5 rounded-2xl p-8 text-center">
          <p className="text-[var(--foreground)] mb-6">
            この政策は「たたき台」です。みなさんの声を聞いて、一緒につくっていく政策です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-medium rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              政策PDFをダウンロード
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-full hover:bg-[var(--primary-light)] transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              声を届ける
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
