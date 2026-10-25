
/** Zurvan — superposición tipográfica del espacio y el tiempo. */

type DiamanteProps = {
  lines: string[];
  compact?: boolean;
};

export function Diamante({
  lines: _lines,
  compact = false,
}: DiamanteProps) {
  const space = '#171717';
  const time = '#8f2638';

  const vertical = (
    text: string,
    color: string,
    position: string,
    direction: 'up' | 'down' = 'down',
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[10px] sm:text-xs ${position}`}
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
    position: string,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[10px] sm:text-xs ${position}`}
      style={{
        color,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {text}
    </span>
  );

  const composition = (
    <div
      className={`relative aspect-[6/5] font-mono-lt ${
        compact ? 'w-[520px]' : 'mx-auto w-full min-w-[340px] max-w-[620px]'
      }`}
    >
      {/* ESPACIO — negro */}
      {vertical('superficie', space, 'left-[8%] top-[24%]')}

      {horizontal('suavemente', space, 'left-[25%] top-[37%]')}

      {horizontal('infinita', space, 'left-[47%] top-[37%]')}

      {horizontal('está', space, 'left-[72%] top-[37%]')}

      {vertical('cerrada', space, 'left-[89%] top-[24%]', 'up')}

      {vertical('sí misma', space, 'left-[47%] top-[57%]')}

      {/* TIEMPO — rojo oscuro */}
      {horizontal(
        'los amaneceres seguirán',
        time,
        'left-[43%] top-[27%]',
      )}

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

      {horizontal(
        'aunque deje de',
        time,
        'left-[14%] top-[83%]',
      )}

      {horizontal(
        'seguirán floreciendo',
        time,
        'left-[82%] top-[83%]',
      )}
    </div>
  );

  if (compact) {
    return (
      <div className="relative aspect-[6/5] w-full overflow-hidden">
        <div
          className="absolute top-0"
          style={{
            left: '50%',
            transform: 'translateX(-50%) scale(0.45)',
            transformOrigin: 'top center',
          }}
        >
          {composition}
        </div>
      </div>
    );
  }

  return <div className="w-full overflow-x-auto">{composition}</div>;
}
