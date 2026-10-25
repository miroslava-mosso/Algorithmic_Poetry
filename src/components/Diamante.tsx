
/** Zurvan — superposición tipográfica del espacio y el tiempo. */

export function Diamante({
  lines: _lines,
  compact = false,
}: {
  lines: string[];
  compact?: boolean;
}) {
  const space = '#171717';
  const time = '#8f2638';

  // Miniatura adaptada a la tarjeta.
 
if (compact) {
  const miniVertical = (
    text: string,
    color: string,
    position: string,
    direction: 'up' | 'down' = 'down',
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[8px] ${position}`}
      style={{
        color,
        writingMode: 'vertical-rl',
        transform: `translate(-50%, -50%) ${
          direction === 'up' ? 'rotate(180deg)' : ''
        }`,
      }}
    >
      {text}
    </span>
  );

  const miniHorizontal = (
    text: string,
    color: string,
    position: string,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[8px] ${position}`}
      style={{
        color,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {text}
    </span>
  );

  return (
    <div className="relative mx-auto w-full max-w-[360px] aspect-[6/5] overflow-hidden font-mono-lt">
      {/* ESPACIO — negro */}
      {miniVertical('superficie', space, 'left-[8%] top-[25%]')}
      {miniHorizontal('suavemente', space, 'left-[27%] top-[39%]')}
      {miniHorizontal('infinita', space, 'left-[50%] top-[39%]')}
      {miniHorizontal('está', space, 'left-[75%] top-[39%]')}
      {miniVertical('cerrada', space, 'left-[92%] top-[25%]', 'up')}
      {miniVertical('sí misma', space, 'left-[50%] top-[59%]')}

      {/* TIEMPO — rojo */}
      {miniHorizontal('los amaneceres seguirán', time, 'left-[51%] top-[25%]')}
      {miniVertical('existir en el tiempo', time, 'left-[23%] top-[65%]', 'up')}
      {miniVertical('repitiéndose y los cerezos', time, 'left-[77%] top-[60%]')}
      {miniHorizontal('aunque deje de', time, 'left-[25%] top-[85%]')}
      {miniHorizontal('seguirán floreciendo', time, 'left-[75%] top-[85%]')}
    </div>
  );
}
