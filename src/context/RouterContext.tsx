import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface ConsultationPreFill {
  visaCategory?: string;
  destination?: string;
  source?: string;
}

export interface ToastMessage {
  id: number;
  title: string;
  description?: string;
}

interface AppContextValue {
  currentPath: string;
  navigate: (to: string) => void;
  isConsultationModalOpen: boolean;
  consultationPreFill: ConsultationPreFill;
  openConsultationModal: (prefill?: ConsultationPreFill) => void;
  closeConsultationModal: () => void;
  toast: ToastMessage | null;
  showToast: (title: string, description?: string) => void;
  dismissToast: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

function getInitialPath(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname || '/';
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPreFill, setConsultationPreFill] = useState<ConsultationPreFill>({});
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const [pathPart, hashPart] = to.split('#');
    const targetPath = pathPart || '/';

    if (targetPath !== window.location.pathname) {
      window.history.pushState({}, '', to);
      setCurrentPath(targetPath);
    }

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openConsultationModal = useCallback((prefill?: ConsultationPreFill) => {
    setConsultationPreFill(prefill || {});
    setIsConsultationModalOpen(true);
  }, []);

  const closeConsultationModal = useCallback(() => {
    setIsConsultationModalOpen(false);
  }, []);

  const showToast = useCallback((title: string, description?: string) => {
    const id = Date.now();
    setToast({ id, title, description });
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? null : prev));
    }, 5000);
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        isConsultationModalOpen,
        consultationPreFill,
        openConsultationModal,
        closeConsultationModal,
        toast,
        showToast,
        dismissToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return ctx;
}
