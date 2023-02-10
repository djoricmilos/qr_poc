import { srb } from '@locales/srb';

export type Locale = typeof srb;

export type Translations = {
    srb: Locale;
    en: Locale;
};
export type LocalizationKeys = keyof typeof srb;
