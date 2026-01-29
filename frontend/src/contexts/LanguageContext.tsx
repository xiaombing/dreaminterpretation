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

        // Dream Interpretations - 梦境解释
        'dream.water': 'Water in dreams often symbolizes purification, spiritual cleansing, and renewal. In Islamic tradition, clear water represents faith and knowledge, while turbulent water may indicate trials or emotional turmoil. This dream suggests you are seeking spiritual clarity or going through a period of emotional transformation.',
        'dream.snake': 'Seeing a snake in a dream can have various interpretations. In Islamic dream interpretation, a snake often represents an enemy or hidden danger. However, if the snake is harmless or you overcome it, this indicates victory over adversaries. The specific context matters greatly in understanding this symbol.',
        'dream.flying': 'Flying in dreams represents freedom, spiritual elevation, and transcendence. In Islamic interpretation, flying with ease suggests achieving your goals and spiritual growth. It may indicate that you are rising above worldly concerns and seeking higher understanding.',
        'dream.house': 'A house in dreams typically represents the self, family, or one\'s life situation. In Islamic tradition, a well-maintained house suggests stability and blessings, while a damaged house may indicate challenges in family life or personal struggles. Pay attention to the condition and atmosphere of the house for deeper meaning.',
        'dream.default': 'Dreams are messages from Allah and can carry important spiritual significance. Your dream contains unique symbolism that reflects your current life situation, spiritual state, or future events. Consider the emotions you felt, the people involved, and the overall atmosphere. Reflect on your current life challenges and prayers, as dreams often provide guidance for your path.',
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

        // Dream Interpretations - تفسير الأحلام
        'dream.water': 'الماء في الأحلام غالبًا يرمز إلى التطهير والتنقية الروحية والتجديد. في التقاليد الإسلامية، الماء الصافي يمثل الإيمان والمعرفة، بينما الماء المضطرب قد يشير إلى الابتلاءات أو الاضطراب العاطفي. يشير هذا الحلم إلى أنك تسعى للوضوح الروحي أو تمر بفترة من التحول العاطفي.',
        'dream.snake': 'رؤية الأفعى في الحلم يمكن أن يكون لها تفسيرات مختلفة. في تفسير الأحلام الإسلامي، غالبًا ما تمثل الأفعى عدوًا أو خطرًا خفيًا. ومع ذلك، إذا كانت الأفعى غير ضارة أو تغلبت عليها، فهذا يشير إلى النصر على الخصوم. السياق المحدد مهم جدًا في فهم هذا الرمز.',
        'dream.flying': 'الطيران في الأحلام يمثل الحرية والارتقاء الروحي والتسامي. في التفسير الإسلامي، الطيران بسهولة يشير إلى تحقيق أهدافك والنمو الروحي. قد يشير إلى أنك ترتفع فوق الهموم الدنيوية وتسعى للفهم الأعمق.',
        'dream.house': 'المنزل في الأحلام عادة ما يمثل الذات أو العائلة أو حالة الحياة. في التقاليد الإسلامية، المنزل المحفوظ جيدًا يشير إلى الاستقرار والبركات، بينما المنزل المتضرر قد يشير إلى تحديات في الحياة العائلية أو صراعات شخصية. انتبه لحالة وأجواء المنزل للحصول على معنى أعمق.',
        'dream.default': 'الأحلام هي رسائل من الله ويمكن أن تحمل أهمية روحية مهمة. حلمك يحتوي على رمزية فريدة تعكس حالة حياتك الحالية أو حالتك الروحية أو الأحداث المستقبلية. ضع في اعتبارك المشاعر التي شعرت بها والأشخاص المعنيين والجو العام. تأمل في تحديات حياتك الحالية ودعواتك، فالأحلام غالبًا ما توفر التوجيه لمسارك.',
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

        // Dream Interpretations - 梦境解释
        'dream.water': '梦中的水通常象征着净化、精神洁净和重生。在伊斯兰传统中，清澈的水代表信仰和知识，而混浊的水可能预示着考验或情感动荡。这个梦境表明您正在寻求精神上的清晰或正在经历情感转变期。',
        'dream.snake': '梦见蛇可以有多种解释。在伊斯兰解梦中，蛇通常代表敌人或隐藏的危险。然而，如果蛇无害或您战胜了它，这表示您将战胜对手。具体情境对理解此象征非常重要。',
        'dream.flying': '梦中飞翔代表自由、精神提升和超越。在伊斯兰解释中，轻松飞翔暗示您将实现目标并获得精神成长。这可能表明您正在超越世俗烦恼，寻求更高的理解。',
        'dream.house': '梦中的房子通常代表自我、家庭或生活状况。在伊斯兰传统中，保养良好的房子象征稳定和祝福，而受损的房子可能预示家庭生活的挑战或个人困扰。注意房子的状况和氛围以获得更深层的含义。',
        'dream.default': '梦境是来自真主的信息，具有重要的精神意义。您的梦境包含独特的象征意义，反映了您当前的生活状况、精神状态或未来事件。考虑您感受到的情绪、涉及的人物和整体氛围。反思您当前的生活挑战和祈祷，因为梦境常常为您的道路提供指引。',
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
