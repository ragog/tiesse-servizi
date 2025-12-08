import it from './it';
import en from './en';

export const translations = {
  it,
  en
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.it;
}
