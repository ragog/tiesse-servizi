import it from './it';
import en from './en';
import es from './es';

export const translations = {
  it,
  en,
  es
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.it;
}
