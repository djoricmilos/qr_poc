import { en } from '@locales/en';
import { srb } from '@locales/srb';
import { LocalizationKeys, Translations } from './types';

const translations: Translations = {
    srb,
    en,
};

export const useTranslation = () => {
    const locale = 'srb';
    // const locale = getLocales()[0].languageCode;

    const t = (lKey: LocalizationKeys): string => {
        return translations[locale][lKey];
    };

    const unsafeT = (key: string): string => {
        const trans = translations[locale] as any;
        return trans[key] ? (trans[key] as string) : key;
    };

    return { t, unsafeT };
};
