import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="footer" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      </div>
      <style>{`
        .footer {
          padding: 2rem 0;
          margin-top: auto;
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.875rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </footer>
  );
};
