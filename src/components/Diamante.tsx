
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
    return (
      <div className="mx-auto flex w-full max-w-[360px] aspect-[6/5] flex-col items-center justify-center gap-3 overflow-hidden font-mono-lt px-2">
        <div className="flex w-full items-center justify-between gap-2 text-[9px] sm:text-[10px]" style={{ color: space }}>
          <span className="writing-vertical">superficie</span>
          <span>suavemente infinita</span>
          <span>está cerrada</span>
        </div>

        <div className="w-full text-center text-[9px] sm:text-[10px] whitespace-nowrap" style={{ color: time }}>
          los amaneceres seguirán
        </div>

        <div className="flex w-full items-center justify-around gap-2 text-[9px] sm:text-[10px]">
          <span className="max-w-[42%] text-center leading-relaxed" style={{ color: time }}>
            existir en el tiempo
          </span>
          <span className="max-w-[48%] text-center leading-relaxed" style={{ color: space }}>
            sí misma
          </span>
        </div>

        <div className="w-full text-center text-[9px] sm:text-[10px] leading-relaxed" style={{ color: time }}>
          repitiéndose y los cerezos
        </div>

        <div className="flex w-full justify-between gap-2 text-[9px] sm:text-[10px]" style={{ color: time }}>
          <span>aunque deje de</span>
          <span>seguirán floreciendo</span>
        </div>
      </div>
    );
  }

  const vertical = (
    text: string,
    color: string,
    className: string,
    direction: 'up' | 'down' = 'down',
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[10px] sm:text-xs ${className}`}
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

  const horizontal = (
    text: string,
    color: string,
    className: string,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[10px] sm:text-xs ${className}`}
      style={{
        color,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {text}
    </span>
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative mx-auto aspect-[6/5] w-full min-w-[340px] max-w-[620px] font-mono-lt">
        {vertical('superficie', space, 'left-[8%] top-[24%]')}

        {horizontal('suavemente', space, 'left-[25%] top-[37%]')}
        {horizontal('infinita', space, 'left-[47%] top-[37%]')}
        {horizontal('está', space, 'left-[72%] top-[37%]')}

        {vertical('cerrada', space, 'left-[89%] top-[24%]', 'up')}
        {vertical('sí misma', space, 'left-[47%] top-[57%]')}

        {horizontal('los amaneceres seguirán', time, 'left-[43%] top-[27%]')}

        {vertical(
          'existir en el tiempo',
          time,
          'left-[24%] top-[61%]',
          'up',
        )}

        {vertical(
          'repitiéndose y los cerezos',
          time,
          'left-[66%] top-[53%]',
        )}

        {horizontal('aunque deje de', time, 'left-[14%] top-[83%]')}
        {horizontal('seguirán floreciendo', time, 'left-[82%] top-[83%]')}
      </div>
    </div>
  );
}
