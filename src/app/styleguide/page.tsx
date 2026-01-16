export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          デザインシステム スタイルガイド
        </h1>

        {/* カラーパレット */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            カラーパレット
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColorSwatch name="Background" color="bg-background" hex="#fafafa" />
            <ColorSwatch name="Foreground" color="bg-foreground" hex="#1a1a1a" />
            <ColorSwatch name="Primary" color="bg-primary" hex="#1e3a5f" />
            <ColorSwatch
              name="Primary Light"
              color="bg-primary-light"
              hex="#2d5a8b"
            />
            <ColorSwatch name="Accent" color="bg-accent" hex="#d4a574" />
            <ColorSwatch name="Muted" color="bg-muted" hex="#6b7280" />
            <ColorSwatch name="Border" color="bg-border" hex="#e5e7eb" />
          </div>
        </section>

        {/* タイポグラフィ */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            タイポグラフィ
          </h2>
          <div className="space-y-4 rounded-lg border border-border bg-white p-6">
            <div>
              <span className="text-sm text-muted">text-4xl / font-bold</span>
              <p className="text-4xl font-bold text-foreground">
                届かない声を、届ける。
              </p>
            </div>
            <div>
              <span className="text-sm text-muted">text-3xl / font-bold</span>
              <p className="text-3xl font-bold text-foreground">
                届かない声を、届ける。
              </p>
            </div>
            <div>
              <span className="text-sm text-muted">text-2xl / font-bold</span>
              <p className="text-2xl font-bold text-foreground">
                届かない声を、届ける。
              </p>
            </div>
            <div>
              <span className="text-sm text-muted">text-xl / font-medium</span>
              <p className="text-xl font-medium text-foreground">
                届かない声を、届ける。
              </p>
            </div>
            <div>
              <span className="text-sm text-muted">text-lg</span>
              <p className="text-lg text-foreground">届かない声を、届ける。</p>
            </div>
            <div>
              <span className="text-sm text-muted">text-base（本文）</span>
              <p className="text-base text-foreground">
                0歳児の父。記者出身。現場から政治へ。国民民主党
                千葉6区（松戸市）総支部長として、皆様の声を国政に届けます。
              </p>
            </div>
            <div>
              <span className="text-sm text-muted">text-sm</span>
              <p className="text-sm text-foreground">届かない声を、届ける。</p>
            </div>
            <div>
              <span className="text-sm text-muted">text-muted（サブテキスト）</span>
              <p className="text-base text-muted">
                このテキストはミュートカラーで表示されています。
              </p>
            </div>
          </div>
        </section>

        {/* ボタン */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">ボタン</h2>
          <div className="flex flex-wrap gap-4 rounded-lg border border-border bg-white p-6">
            <button className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-light">
              Primary Button
            </button>
            <button className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:opacity-90">
              Accent Button
            </button>
            <button className="rounded-lg border border-primary bg-transparent px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white">
              Outline Button
            </button>
            <button className="rounded-lg border border-border bg-transparent px-6 py-3 font-medium text-foreground transition-colors hover:bg-border">
              Secondary Button
            </button>
          </div>
        </section>

        {/* アニメーション */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            アニメーション
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="mb-4 text-sm text-muted">
              animate-fade-in-up（ページをリロードして確認）
            </p>
            <div className="space-y-4">
              <div className="animate-fade-in-up rounded-lg bg-primary p-4 text-white opacity-0">
                Fade In Up（遅延なし）
              </div>
              <div className="animate-fade-in-up animate-delay-100 rounded-lg bg-primary-light p-4 text-white opacity-0">
                Fade In Up（100ms遅延）
              </div>
              <div className="animate-fade-in-up animate-delay-200 rounded-lg bg-accent p-4 text-white opacity-0">
                Fade In Up（200ms遅延）
              </div>
              <div className="animate-fade-in-up animate-delay-300 rounded-lg bg-muted p-4 text-white opacity-0">
                Fade In Up（300ms遅延）
              </div>
            </div>
          </div>
        </section>

        {/* スペーシング */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            スペーシング例
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <div className="space-y-2">
              {[1, 2, 4, 6, 8, 12, 16].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <span className="w-12 text-sm text-muted">{size * 4}px</span>
                  <div
                    className="bg-primary"
                    style={{ width: `${size * 16}px`, height: "24px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* カード */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">カード</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-foreground">
                カードタイトル
              </h3>
              <p className="text-muted">
                カードのコンテンツがここに入ります。ボーダーとシャドウを使用したシンプルなカードデザインです。
              </p>
            </div>
            <div className="rounded-lg bg-primary p-6 text-white">
              <h3 className="mb-2 text-xl font-bold">Primary カード</h3>
              <p className="opacity-90">
                プライマリカラーを背景に使用したカードです。強調したいコンテンツに使用します。
              </p>
            </div>
          </div>
        </section>

        {/* セレクション */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            テキスト選択
          </h2>
          <div className="rounded-lg border border-border bg-white p-6">
            <p className="text-foreground">
              このテキストを選択すると、プライマリカラーでハイライトされます。マウスでドラッグして選択してみてください。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function ColorSwatch({
  name,
  color,
  hex,
}: {
  name: string;
  color: string;
  hex: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={`${color} h-20`} />
      <div className="bg-white p-3">
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-sm text-muted">{hex}</p>
      </div>
    </div>
  );
}
