export default function MessageSection() {
  return (
    <section id="greeting" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-12">
          なぜ、政治家を目指すのか
        </h2>

        <div className="prose prose-lg mx-auto">
          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            学生時代、東日本大震災後の福島に通い、原発事故の影響を受けた高校生たちと向き合いました。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            「支援される側だから」「言っても意味がない」——自分の本音を飲み込んでしまう若者たちが、そこにはたくさんいました。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed mb-6 font-medium text-lg">
            届かない声が、社会にはあまりにも多い。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            NHK記者として災害現場や地方政治を取材する中で、現場と政治の距離があまりにも遠いことを痛感しました。声は途中で消え、制度はあるのに、現場では機能しない。
          </p>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 my-8 text-lg sm:text-xl font-medium text-[var(--primary)]">
            だから私は、「伝える側」ではなく、「決める側」に行くと決めました。
          </blockquote>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            いま私は、0歳の子どもを育てる父親です。この千葉6区も、子育て世代、働く世代が本当に多い地域です。
          </p>

          <div className="my-10 py-8 px-6 bg-[var(--primary)]/5 rounded-2xl text-center">
            <p className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-2">
              「届かない声を、届ける。」
            </p>
            <p className="text-[var(--foreground)]">
              これが私の使命です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
