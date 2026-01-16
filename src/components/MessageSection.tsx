export default function MessageSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-12">
          なぜ、政治家を目指すのか
        </h2>

        <div className="prose prose-lg mx-auto">
          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            学生時代、東日本大震災後の福島に通い、原発事故の影響を受けた高校生たちと向き合いました。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            「支援される側だから」「言っても意味がない」——自分の本音を飲み込んでしまう若者たちがそこにいました。
            届かない声が、社会にはあまりにも多い。そのことを強く感じました。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            NHK記者として、災害現場や地方政治の現場を取材してきました。
            そこで感じたのは、現場と政治の距離が、あまりにも遠いということ。
          </p>

          <blockquote className="border-l-4 border-[var(--primary)] pl-6 my-8 text-lg sm:text-xl font-medium text-[var(--primary)]">
            だから私は「伝える側」ではなく「決める側」に行くと決めました。
          </blockquote>

          <p className="text-[var(--foreground)] leading-relaxed mb-6">
            今、0歳の子どもを育てる父親として、子育ての大変さを日々実感しています。
            当事者として、同じ世代の声を政治に届けたい。
          </p>

          <p className="text-[var(--foreground)] leading-relaxed">
            届かない声を、届ける政治家になる。それが私の決意です。
          </p>
        </div>
      </div>
    </section>
  );
}
