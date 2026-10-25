
/** Zurvan — superposición tipográfica del espacio y el tiempo. */

export function Diamante({ lines: _lines }: { lines: string[] }) {
  const space = '#171717';
  const time = '#8f2638';

  const vertical = (
    text: string,
    color: string,
    className: string,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt text-[10px] sm:text-xs ${className}`}
      style={{ color, transform: 'translate(-50%, -50%) rotate(90deg)' }}
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
      style={{ color, transform: 'translate(-50%, -50%)' }}
    >
      {text}
    </span>
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative mx-auto w-full min-w-[340px] max-w-[620px] aspect-[6/5] font-mono-lt">

        {/* ESPACIO — símbolo exterior, negro */}

        {vertical('superficie', space, 'left-[14%] top-[24%]')}

        {horizontal(
          'suavemente',
          space,
          'left-[34%] top-[37%]',
        )}

        {horizontal(
          'infinita',
          space,
          'left-[53%] top-[37%]',
        )}

        {vertical(
          'cerrada en',
          space,
          'left-[77%] top-[24%]',
        )}

        {vertical(
          'sí misma',
          space,
          'left-[53%] top-[78%]',
        )}

        {/* TIEMPO — símbolo interior, rojo oscuro */}

        {horizontal(
          'los amaneceres seguirán',
          time,
          'left-[53%] top-[48%]',
        )}

        {vertical(
          'existir en el tiempo',
          time,
          'left-[27%] top-[66%]',
        )}

        {vertical(
          'repitiéndose y los cerezos',
          time,
          'left-[79%] top-[66%]',
        )}

        {horizontal(
          'aunque deje de',
          time,
          'left-[24%] top-[83%]',
        )}

        {horizontal(
          'seguirán floreciendo',
          time,
          'left-[82%] top-[83%]',
        )}

      </div>
    </div>
  );
}
