import type { ReactNode } from 'react';

function hpq(p: number, q: number): ReactNode {
  return (
    <span>h<sup className="text-[0.72em] font-normal not-italic">{p}{q}</sup></span>
  );
}

function Diamond({ values }: { values: ReactNode[][] }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 font-mono-lt text-sm sm:text-base text-center">
      {values.map((row, i) => (
        <div key={i} className="flex justify-center items-center gap-4 sm:gap-8 min-h-[1.4em]">
          {row.map((value, j) => (
            <span key={`${i}-${j}`} className="flex items-center text-ink not-italic whitespace-nowrap">
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

const rawK3: ReactNode[][] = [
  [hpq(0, 0)],
  [hpq(1, 0), hpq(0, 1)],
  [hpq(2, 0), hpq(1, 1), hpq(0, 2)],
  [hpq(2, 1), hpq(1, 2)],
  [hpq(2, 2)],
];

const hodgeSymK3: ReactNode[][] = [
  [hpq(0, 0)],
  [hpq(0, 1), hpq(1, 0)],
  [hpq(0, 2), hpq(1, 1), hpq(2, 0)],
  [hpq(1, 2), hpq(2, 1)],
  [hpq(2, 2)],
];

const conjugationK3: ReactNode[][] = [
  [hpq(2, 2)],
  [hpq(2, 1), hpq(1, 2)],
  [hpq(2, 0), hpq(1, 1), hpq(0, 2)],
  [hpq(1, 0), hpq(0, 1)],
  [hpq(0, 0)],
];

const serreK3: ReactNode[][] = [
  [hpq(2, 2)],
  [hpq(1, 2), hpq(2, 1)],
  [hpq(0, 2), hpq(1, 1), hpq(2, 0)],
  [hpq(0, 1), hpq(1, 0)],
  [hpq(0, 0)],
];

const numericK3: ReactNode[][] = [
  ['1'],
  ['0', '0'],
  ['1', <span key="20" className="text-[#a84739]">20</span>, '1'],
  ['0', '0'],
  ['1'],
];

const wordK3: ReactNode[][] = [
  ['bruma'],
  ['[silencio]', '[silencio]'],
  ['bruma', <em key="verse" className="text-ink/90">veinte sílabas para cruzar la noche sin tocarla</em>, 'bruma'],
  ['[silencio]', '[silencio]'],
  ['bruma'],
];

function SymmetryBlock({
  title,
  description,
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  title: string;
  description: ReactNode;
  before: ReactNode[][];
  after: ReactNode[][];
  beforeLabel: string;
  afterLabel: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-display text-2xl sm:text-3xl mb-3">{title}</h4>
        <p className="font-body text-base sm:text-lg leading-[1.55] text-ink/75 max-w-[60ch]">{description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border hairline p-6 sm:p-8 min-h-[220px] flex flex-col justify-between">
          <span className="font-mono-lt text-[10px] uppercase text-ink/45">{beforeLabel}</span>
          <Diamond values={before} />
          <span className="font-body text-sm text-ink/50 italic">antes</span>
        </div>
        <div className="border hairline p-6 sm:p-8 min-h-[220px] flex flex-col justify-between bg-[#f4b6c2]/8">
          <span className="font-mono-lt text-[10px] uppercase text-ink/55">{afterLabel}</span>
          <Diamond values={after} />
          <span className="font-body text-sm text-ink/55 italic">después</span>
        </div>
      </div>

      <div className="border hairline p-6 sm:p-8 bg-[#f4b6c2]/8 min-h-[220px] flex flex-col justify-between max-w-[480px] mx-auto">
        <span className="font-mono-lt text-[10px] uppercase text-ink/55">El poema con la simetría aplicada</span>
        <Diamond values={wordK3} />
        <span className="font-body text-sm text-ink/55 italic">el diamante hecho verso</span>
      </div>
    </div>
  );
}

export function HodgeAlgorithm() {
  return (
    <section id="mi-algoritmo" className="border-b hairline">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-28">
        {/* Intro */}
        <div className="reveal grid gap-10 sm:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Mi algoritmo</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
              Un poema en forma de <span className="pink-underline">diamante</span>
            </h2>
            <p className="font-body text-xl leading-[1.5] text-ink/75 mt-7 max-w-[34ch]">
              Mi algoritmo, o constricción, está inspirado en el diamante de Hodge de las <em>Kähler manifolds</em>.
            </p>
            <p className="font-mono-lt text-[10px] uppercase text-ink/45 mt-8 leading-[1.7]">
              Autora: Miroslava Mosso Rojas
            </p>
          </div>

          <div className="font-body text-lg leading-[1.58] text-ink/80 space-y-5">
            <p>
              Elige una geometría que te intrigue y deja que sus simetrías escriban contigo. No hace falta dominar toda la matemática: basta con mirar el diamante como quien mira un mapa antes de emprender un viaje.
            </p>
            <div className="border-l-2 border-[#f4b6c2] pl-5 py-1">
              <p className="font-mono-lt text-[11px] uppercase text-ink/60 leading-[1.7]">
                <strong className="font-normal text-ink">Primera chispa:</strong> escoge tu <em>Kähler manifold</em> favorita y busca su diamante de Hodge asociado.
              </p>
            </div>
            <p>
              Si no encuentras uno, puedes experimentar buscando uno aleatoriamente en{' '}
              <a href="https://ahuchala.com/hodge/" target="_blank" rel="noreferrer" className="pink-underline-thin text-ink">
                esta página de diamantes de Hodge
              </a>.
            </p>
          </div>
        </div>

        {/* Step 01 */}
        <div className="reveal mt-16 sm:mt-24">
          <div className="flex items-baseline gap-4 mb-7">
            <span className="font-display text-4xl text-[#f4b6c2]">01</span>
            <h3 className="font-display text-3xl sm:text-4xl">Mira el diamante antes de tocarlo</h3>
          </div>
          <p className="font-body text-lg text-ink/70 max-w-[60ch] mb-9">
            Tomemos una superficie K3. A la izquierda está el diamante de Hodge con sus números todavía en forma de variables; a la derecha, la misma estructura después de revelar sus valores.
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] items-center">
            <div className="border hairline p-7 sm:p-10 min-h-[270px] flex flex-col justify-between">
              <span className="font-mono-lt text-[10px] uppercase text-ink/45">Diamante sin sustituir</span>
              <Diamond values={rawK3} />
              <span className="font-body text-base text-ink/55 italic">la arquitectura, antes del poema</span>
            </div>

            <svg viewBox="0 0 100 80" className="w-20 h-16 mx-auto text-[#a84739]" aria-hidden="true">
              <path d="M 8 65 C 42 68 66 45 82 17" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 74 18 L 84 16 L 80 26" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="border hairline p-7 sm:p-10 min-h-[270px] flex flex-col justify-between bg-[#f4b6c2]/10">
              <span className="font-mono-lt text-[10px] uppercase text-ink/55">Sustituyendo los números de Hodge para una superficie K3</span>
              <Diamond values={numericK3} />
              <span className="font-body text-base text-ink/60 italic">la superficie K3, ya despierta</span>
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="reveal mt-16 sm:mt-24">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-display text-4xl text-[#f4b6c2]">02</span>
            <h3 className="font-display text-3xl sm:text-4xl">Sustituye los números por lenguaje</h3>
          </div>
          <ol className="font-body text-lg leading-[1.58] text-ink/80 space-y-4 list-decimal pl-6 max-w-[62ch] mb-10">
            <li>
              Donde veas un <strong>1</strong>, escribe una palabra. No tiene que ser necesariamente la misma palabra cada vez: cada 1 puede convertirse en una palabra distinta.
            </li>
            <li>
              Donde veas un <strong>0</strong>, agrega algo relacionado con la nada, el vacío o una pausa. Si es silencio, escríbelo fonéticamente, como en los subtítulos para personas sordas: <span className="font-mono-lt text-sm text-ink/60">[silencio]</span>. Estas palabras pueden variar en cada aparición, o pueden simplemente ser espacios vacíos.
            </li>
            <li>Los números mayores que 1 se convierten en un verso cuyo total de sílabas sea exactamente ese número.</li>
          </ol>

          <p className="font-body text-lg leading-[1.58] text-ink/75 max-w-[62ch] mb-10">
            El poema puede ser leído como el lector guste: en vertical, en horizontal o en diagonal. Cada dirección revela un recorrido distinto por el diamante.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border hairline p-6 sm:p-8 self-start">
              <span className="font-mono-lt text-[10px] uppercase text-ink/45">Un ejemplo de traducción</span>
              <div className="mt-6 space-y-3 font-body text-lg leading-[1.6]">
                <p><span className="font-mono-lt text-[#a84739]">1</span> → <span className="pink-underline-thin">bruma</span></p>
                <p><span className="font-mono-lt text-[#a84739]">0</span> → <span className="font-mono-lt text-sm">[silencio]</span></p>
                <p><span className="font-mono-lt text-[#a84739]">20</span> → <em>veinte sílabas para cruzar la noche sin tocarla</em></p>
              </div>
            </div>

            <div className="border hairline p-6 sm:p-8 bg-[#f4b6c2]/8 flex flex-col justify-between min-h-[300px]">
              <span className="font-mono-lt text-[10px] uppercase text-ink/55">El diamante completo con las palabras sustituidas</span>
              <Diamond values={wordK3} />
              <span className="font-body text-sm text-ink/55 italic">superficie K3 traducida a poema</span>
            </div>
          </div>
        </div>

        {/* Step 03 — Symmetries */}
        <div className="reveal mt-16 sm:mt-24 space-y-16">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-4xl text-[#f4b6c2]">03</span>
            <h3 className="font-display text-3xl sm:text-4xl">Deja que la simetría responda</h3>
          </div>

          <SymmetryBlock
            title="Simetría de Hodge"
            description={<>
              La simetría de Hodge refleja el diamante sobre su eje vertical: h<sup className="text-[0.72em]">pq</sup> = h<sup className="text-[0.72em]">qp</sup>. La columna izquierda se vuelve la derecha, y viceversa. En la superficie K3, el diamante ya es simétrico, así que la forma se preserva; pero en tu poema puedes aprovechar este reflejo para repetir, invertir o cambiar las palabras de cada lado.
            </>}
            before={rawK3}
            after={hodgeSymK3}
            beforeLabel="Diamante original (K3)"
            afterLabel="Con simetría de Hodge aplicada"
          />

          <SymmetryBlock
            title="Complex conjugation"
            description={<>
              La conjugación compleja refleja el diamante sobre su eje horizontal: arriba y abajo intercambian lugares. En la superficie K3, h<sup className="text-[0.72em]">00</sup> = h<sup className="text-[0.72em]">22</sup> = 1 y h<sup className="text-[0.72em]">10</sup> = h<sup className="text-[0.72em]">21</sup> = 0, así que la forma se preserva. En tu poema, puedes reflejar el primer verso en el último, el segundo en el penúltimo, y así sucesivamente.
            </>}
            before={rawK3}
            after={conjugationK3}
            beforeLabel="Diamante original (K3)"
            afterLabel="Con conjugación compleja aplicada"
          />

          <SymmetryBlock
            title="Dualidad de Serre"
            description={<>
              La dualidad de Serre establece que h<sup className="text-[0.72em]">pq</sup> = h<sup className="text-[0.72em]">n-p,n-q</sup>, donde n es la dimensión compleja de la variedad. Para la superficie K3 (n=2), esto significa que h<sup className="text-[0.72em]">00</sup> = h<sup className="text-[0.72em]">22</sup>, h<sup className="text-[0.72em]">10</sup> = h<sup className="text-[0.72em]">12</sup>, h<sup className="text-[0.72em]">01</sup> = h<sup className="text-[0.72em]">21</sup>, y h<sup className="text-[0.72em]">20</sup> = h<sup className="text-[0.72em]">02</sup>. El diamante se refleja entonces a través de su centro, como un espejo rotado 180°.
            </>}
            before={rawK3}
            after={serreK3}
            beforeLabel="Diamante original (K3)"
            afterLabel="Con dualidad de Serre aplicada"
          />
        </div>

        {/* Step 04 — Betti numbers (optional) */}
        <div className="reveal mt-16 sm:mt-24">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-display text-4xl text-[#f4b6c2]">04</span>
            <h3 className="font-display text-3xl sm:text-4xl">
              Paso extra opcional: el número de Betti
            </h3>
          </div>
          <p className="font-body text-lg leading-[1.58] text-ink/80 max-w-[62ch] mb-8">
            Si te queda curiosidad, puedes calcular el <em>k-ésimo número de Betti</em> de tu variedad sumando los números de Hodge a lo largo de la anti-diagonal k del diamante. La fórmula general es:
          </p>

          <div className="border hairline p-6 sm:p-10 mb-10 bg-[#f4b6c2]/8">
            <p className="font-mono-lt text-base sm:text-lg text-center text-ink">
              b<sub>k</sub> = Σ<sub>p+q=k</sub> h<sup className="text-[0.72em]">pq</sup>
            </p>
          </div>

          <p className="font-body text-lg leading-[1.58] text-ink/80 max-w-[62ch] mb-8">
            Reemplazando los números de Hodge por las palabras y versos de nuestro ejemplo, la suma se vuelve una lectura: cada número de Betti es el total de palabras y versos que confluyen en esa diagonal.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: 'b₀', formula: <>h<sup className="text-[0.72em]">00</sup> = 1</>, words: 'bruma' },
              { k: 'b₂', formula: <>h<sup className="text-[0.72em]">20</sup> + h<sup className="text-[0.72em]">11</sup> + h<sup className="text-[0.72em]">02</sup> = 1 + 20 + 1</>, words: 'bruma + veinte sílabas + bruma' },
              { k: 'b₄', formula: <>h<sup className="text-[0.72em]">22</sup> = 1</>, words: 'bruma' },
            ].map((item) => (
              <div key={item.k} className="border hairline p-6 flex flex-col gap-3">
                <span className="font-mono-lt text-lg text-[#f4b6c2]">{item.k}</span>
                <span className="font-mono-lt text-xs text-ink/70">{item.formula}</span>
                <span className="font-body text-base italic text-ink/75">{item.words}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Último gesto */}
        <div className="reveal mt-16 border-t hairline pt-8 font-body text-lg sm:text-xl leading-[1.55] text-ink/75">
          <span className="font-mono-lt text-[10px] uppercase text-ink/45 block mb-3">Último gesto</span>
          Recuerda escribir al final a qué geometría corresponde el diamante de Hodge que dio origen a tu constricción. En nuestro ejemplo: <span className="pink-underline italic">la superficie K3</span>.
        </div>

        {/* Authorship */}
        <div className="reveal mt-10 pt-6 border-t hairline">
          <p className="font-mono-lt text-[11px] uppercase text-ink/50 leading-[1.7]">
            Algoritmo y constricción poética por <span className="text-ink">Miroslava Mosso Rojas</span>
          </p>
        </div>
      </div>
    </section>
  );
}
