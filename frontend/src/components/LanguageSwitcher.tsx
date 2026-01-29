import React from 'react';
import { useLanguage, type Language } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
        { code: 'zh', label: '中文', flag: '🇨🇳' },
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                    onClick={() => setLanguage(lang.code)}
                    aria-label={`Switch to ${lang.label}`}
                >
                    <span className="flag">{lang.flag}</span>
                    <span className="label">{lang.label}</span>
                </button>
            ))}
            <style>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.75rem;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius-md);
          color: var(--color-text-muted);
          font-size: 0.875rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .lang-btn:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--color-primary);
          color: var(--color-text);
        }
        .lang-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
        }
        .lang-btn .flag {
          font-size: 1.125rem;
        }
        .lang-btn .label {
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .lang-btn .label {
            display: none;
          }
        }
      `}</style>
        </div>
    );
};
