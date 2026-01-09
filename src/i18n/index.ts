import pt from './pt'
import en from './en'

export const dictionaries = {
  pt,
  en,
}

export const getDictionary = (locale: string) => {
  return dictionaries[locale as 'pt' | 'en'] ?? pt
}
