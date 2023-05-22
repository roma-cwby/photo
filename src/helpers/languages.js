import { getLanguage } from './localStorage';

const text = {
  gallery: {
    en: 'Gallery',
    ua: 'Галерея',
  },
  process: {
    en: 'Process',
    ua: 'Процес',
  },
  price: {
    en: 'Price',
    ua: 'Ціна',
  },
  contacts: {
    en: 'Contacts',
    ua: 'Контакти',
  },
};

const lang = getLanguage() === 'ua' ? 1 : 0;

export const getText = key => {
  if (lang) return text[key].ua;
  return text[key].en;
};
