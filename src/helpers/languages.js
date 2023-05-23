import { getLanguage } from './localStorage';

const text = {
  about: {
    en: 'About ',
    ua: 'Про мене',
  },
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
  aboutSpan: {
    en: 'me',
    ua: 'мене',
  },
  aboutText: {
    en: 'Greetings! I am Lilia a photographer who captures your uniqueness in the moment. My mission is to reveal the truth, showcase depth, and inspire love. I invite you to my world of photography, share your desires with me, and we will bring them to life together!',
    ua: 'Вітаю! Я Лілія, фотограф, який побачить та упіймає в моменті твою унікальність. Моя місія - розкрити справжнє, показати глибину та закохати. Запрошую тебе в мій світ фотографії, розкажи мені свої бажання і ми втілимо їх разом!',
  },
};

const lang = getLanguage() === 'ua' ? 1 : 0;

export const getText = key => (lang ? text[key].ua : text[key].en);
