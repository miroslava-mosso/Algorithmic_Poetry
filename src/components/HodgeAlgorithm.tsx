<p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/80 max-w-[62ch] mb-8">
  Si te da curiosidad, puedes calcular el <em>k-ésimo número de Betti</em> sumando los números de Hodge para los que p + q = k; en el diamante, cada suma corresponde a una diagonal. La fórmula general es:
</p>

<div className="border hairline p-6 sm:p-10 mb-10 bg-[#f4b6c2]/8">
  <p className="font-mono-lt text-base sm:text-lg text-center text-ink">
    b<sub>k</sub> = Σ<sub>p+q=k</sub> h<sup className="text-[0.72em]">pq</sup>
  </p>
</div>

<p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/80 max-w-[62ch] mb-8">
  Para una superficie K3, los números de Betti son b₀ = b₄ = 1, b₁ = b₃ = 0 y b₂ = 22. Al sustituir los números por palabras, cada suma se convierte también en una posible lectura del poema.
</p>

<div className="grid gap-6 sm:grid-cols-3">
  {[
    {
      k: 'b₀ = b₄',
      formula: <>h<sup className="text-[0.72em]">00</sup> = h<sup className="text-[0.72em]">22</sup> = 1</>,
      words: 'bruma',
    },
    {
      k: 'b₂',
      formula: <>h<sup className="text-[0.72em]">20</sup> + h<sup className="text-[0.72em]">11</sup> + h<sup className="text-[0.72em]">02</sup> = 1 + 20 + 1 = 22</>,
      words: 'bruma + veinte sílabas + bruma',
    },
    {
      k: 'b₁ = b₃',
      formula: <>
        h<sup className="text-[0.72em]">10</sup> + h<sup className="text-[0.72em]">01</sup>
        {' = '}
        h<sup className="text-[0.72em]">21</sup> + h<sup className="text-[0.72em]">12</sup>
        {' = 0 + 0 = 0'}
      </>,
      words: '[silencio]',
    },
  ].map((item) => (
    <div key={item.k} className="border hairline p-6 flex flex-col gap-3">
      <span className="font-mono-lt text-2xl sm:text-3xl text-[#f4b6c2] leading-none">{item.k}</span>
      <span className="font-mono-lt text-xs text-ink/70">{item.formula}</span>
      <span className="font-body text-lg italic text-ink/75">{item.words}</span>
    </div>
  ))}
</div>