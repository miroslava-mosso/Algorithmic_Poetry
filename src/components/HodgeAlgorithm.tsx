function Diamond({ values }: { values: string[][] }) {
  return (
    <div className="flex flex-col items-center gap-2 font-mono-lt text-sm sm:text-base text-center">
      {values.map((row, i) => (
        <div key={i} className="flex justify-center gap-6 sm:gap-10 min-h-[1.2em]">
          {row.map((value, j) => (
            <span key={`${i}-${j}`} className={value.length > 2 ? 'text-[#f4b6c2]' : 'text-ink'}>
              {value}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function HodgeAlgorithm() {
  return (
    <section id="mi-algoritmo" className="border-b hairline">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-28">
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
              Una geometría puede ser también una partitura.
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
              <Diamond values={[
                ['h⁰⁰'],
                ['h¹⁰', 'h⁰¹'],
                ['h²⁰', 'h¹¹', 'h⁰²'],
                ['h²¹', 'h¹²'],
                ['h²²'],
              ]} />
              <span className="font-body text-base text-ink/55 italic">la arquitectura, antes del poema</span>
            </div>

            <svg viewBox="0 0 100 80" className="w-20 h-16 mx-auto text-[#a84739]" aria-hidden="true">
              <path d="M 8 65 C 42 68 66 45 82 17" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M 74 18 L 84 16 L 80 26" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="border hairline p-7 sm:p-10 min-h-[270px] flex flex-col justify-between bg-[#f4b6c2]/10">
              <span className="font-mono-lt text-[10px] uppercase text-ink/55">Sustituyendo los números de Hodge para una superficie K3</span>
              <Diamond values={[
                ['1'],
                ['0', '0'],
                ['1', '20', '1'],
                ['0', '0'],
                ['1'],
              ]} />
              <span className="font-body text-base text-ink/60 italic">la superficie K3, ya despierta</span>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 sm:mt-24 grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="font-display text-4xl text-[#f4b6c2]">02</span>
              <h3 className="font-display text-3xl">Sustituye los números por lenguaje</h3>
            </div>
            <ol className="font-body text-lg leading-[1.58] text-ink/80 space-y-4 list-decimal pl-6">
              <li>Donde veas un <strong>1</strong>, escribe una palabra.</li>
              <li>Donde veas un <strong>0</strong>, agrega algo relacionado con la nada, el vacío o una pausa. Si es silencio, escríbelo fonéticamente, como en los subtítulos para personas sordas: <span className="font-mono-lt text-sm text-ink/60">[silencio]</span>.</li>
              <li>Los números mayores que 1 se convierten en un verso cuyo total de sílabas sea exactamente ese número.</li>
            </ol>
          </div>
          <div className="border hairline p-6 sm:p-8 self-start">
            <span className="font-mono-lt text-[10px] uppercase text-ink/45">Un ejemplo de traducción</span>
            <div className="mt-6 space-y-3 font-body text-lg leading-[1.6]">
              <p><span className="font-mono-lt text-[#a84739]">1</span> → <span className="pink-underline-thin">bruma</span></p>
              <p><span className="font-mono-lt text-[#a84739]">0</span> → <span className="font-mono-lt text-sm">[silencio]</span></p>
              <p><span className="font-mono-lt text-[#a84739]">20</span> → <em>veinte sílabas para cruzar la noche sin tocarla</em></p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 sm:mt-24">
          <div className="flex items-baseline gap-4 mb-5">
            <span className="font-display text-4xl text-[#f4b6c2]">03</span>
            <h3 className="font-display text-3xl sm:text-4xl">Deja que la simetría responda</h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-[1fr_0.85fr] font-body text-lg leading-[1.58] text-ink/80">
            <div className="space-y-4">
              <p>
                El diamante de Hodge de una variedad Kähler tiene simetrías que hacen que el poema se mire en varios espejos: <strong>simetría conjugada</strong>, donde hᵖᑫ = hᑫᵖ; <strong>simetría de Poincaré</strong>, donde hᵖᑫ = hⁿ⁻ᵖ,ⁿ⁻ᑫ; y el eje central que conserva la forma completa.
              </p>
              <p>
                En la superficie K3, el 1 de arriba encuentra al 1 de abajo; los ceros se reflejan; y el 20 permanece en el corazón. Juega con tu poema inicial: repite, invierte o refleja versos siguiendo esas reglas. La simetría no corrige el poema; le abre otra puerta.
              </p>
            </div>
            <div className="border-l-2 border-[#f4b6c2] pl-6 italic">
              <p>Ejemplo:</p>
              <p className="mt-3">bruma<br />[silencio] &nbsp; [silencio]<br />bruma — veinte sílabas — bruma<br />[silencio] &nbsp; [silencio]<br />bruma</p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 border-t hairline pt-8 font-body text-lg sm:text-xl leading-[1.55] text-ink/75">
          <span className="font-mono-lt text-[10px] uppercase text-ink/45 block mb-3">Último gesto</span>
          Recuerda escribir al final a qué geometría corresponde el diamante de Hodge que dio origen a tu constricción. En nuestro ejemplo: <span className="pink-underline italic">la superficie K3</span>.
        </div>
      </div>
    </section>
  );
}
