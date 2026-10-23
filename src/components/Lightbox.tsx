import { useEffect } from 'react';
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-md" />
      <div
        className="relative bg-[#f7f5f1] border hairline max-w-[900px] w-full max-h-[90vh] overflow-auto p-8 sm:p-12 flex flex-col items-center gap-6"
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
            <p className="font-mono-lt text-[10px] uppercase text-ink/50 mt-2">{subtitle}</p>
          )}
        </div>
        <div className="flex-1 flex items-center justify-center w-full py-6">
          {children}
        </div>
        {caption && (
          <p className="font-body text-base italic text-ink/65 text-center max-w-[60ch]">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
