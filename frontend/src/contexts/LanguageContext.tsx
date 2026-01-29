import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'zh';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译字典
const translations: Record<Language, Record<string, string>> = {
    en: {
        // Header
        'site.title': 'Muslim Dream Interpretation',
        'nav.home': 'Home',
        'nav.about': 'About',

        // Hero Section
        'hero.title': 'Discover the Meaning of Your Dreams',
        'hero.subtitle': 'Explore dream interpretations rooted in Islamic tradition and the wisdom of scholars like Ibn Sirin',

        // Search
        'search.placeholder': 'Describe your dream...',

        // Result Card
        'result.title': 'Interpretation',
        'result.dreamLabel': 'Dream:',
        'result.source': 'Source: Islamic Dream Interpretation (Ibn Sirin)',

        // Footer
        'footer.copyright': 'Muslim Dream Interpretation. All knowledge is with Allah.',

        // Common
        'common.loading': 'Loading...',
    },
    ar: {
        // Header - العربية
        'site.title': 'تفسير الأحلام الإسلامي',
        'nav.home': 'الرئيسية',
        'nav.about': 'عن الموقع',

        // Hero Section
        'hero.title': 'اكتشف معنى أحلامك',
        'hero.subtitle': 'استكشف تفسيرات الأحلام المتجذرة في التقاليد الإسلامية وحكمة العلماء مثل ابن سيرين',

        // Search
        'search.placeholder': 'صف حلمك...',

        // Result Card
        'result.title': 'التفسير',
        'result.dreamLabel': 'الحلم:',
        'result.source': 'المصدر: تفسير الأحلام الإسلامي (ابن سيرين)',

        // Footer
        'footer.copyright': 'تفسير الأحلام الإسلامي. كل العلم عند الله.',

        // Common
        'common.loading': 'جاري التحميل...',
    },
    zh: {
        // Header - 中文
        'site.title': '穆斯林解梦',
        'nav.home': '首页',
        'nav.about': '关于',

        // Hero Section
        'hero.title': '探索您梦境的含义',
        'hero.subtitle': '探索植根于伊斯兰传统和伊本·西林等学者智慧的梦境解释',

        // Search
        'search.placeholder': '描述您的梦境...',

        // Result Card
        'result.title': '解释',
        'result.dreamLabel': '梦境：',
        'result.source': '来源：伊斯兰解梦（伊本·西林）',

        // Footer
        'footer.copyright': '穆斯林解梦。一切知识归于真主。',

        // Common
        'common.loading': '加载中...',
    },
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    const isRTL = language === 'ar';

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
