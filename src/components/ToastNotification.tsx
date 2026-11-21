import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useAppContext } from '../context/RouterContext';

export const ToastNotification: React.FC = () => {
  const { toast, dismissToast } = useAppContext();

  if (!toast) return null;

  return (
    <div
      className="fixed top-20 right-4 z-50 max-w-sm w-full bg-white border border-slate-200 rounded-xl shadow-lg p-4 flex items-start gap-3"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#0B1F3A]">{toast.title}</p>
        {toast.description && (
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{toast.description}</p>
        )}
      </div>
      <button
        type="button"
        onClick={dismissToast}
        aria-label="Dismiss notification"
        className="text-slate-400 hover:text-slate-600 p-1 rounded cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
