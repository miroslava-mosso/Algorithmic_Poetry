import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  caption?: string;
  children: ReactNode;
}

export function Lightbox({ open, onClose, title, subtitle, caption, children }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-md" />
      <div
        className="relative bg-[#f7f5f1] border hairline w-[96vw] max-w-none max-h-[95vh] overflow-auto p-4 sm:p-6 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 font-mono-lt text-sm text-ink/50 hover:text-ink transition w-8 h-8 flex items-center justify-center"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <div className="text-center">
          <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
          {subtitle && (
  <p className="font-mono-lt text-xs uppercase text-ink/50 mt-2">
    {subtitle}
  </p>
)}
        </div>
        <div className="flex-none flex items-center justify-center w-full py-0.5">
  {children}
</div>
        {caption && (
  <p className="font-body text-lg italic text-ink/100 text-center max-w-[60ch] leading-relaxed">
    {caption}
  </p>
)}
      </div>
    </div>,
    document.body
  );
}
