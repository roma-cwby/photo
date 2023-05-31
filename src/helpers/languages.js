import { getLanguage } from './localStorage';

const text = {
  about: {
    en: 'About',
    ua: 'Про',
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
    en: ' me',
    ua: ' мене',
  },
  aboutText: {
    en: 'Greetings! I am Lilia a photographer who captures your uniqueness in the moment. My mission is to reveal the truth, showcase depth, and inspire love. I invite you to my world of photography, share your desires with me, and we will bring them to life together!',
    ua: 'Вітаю! Я Лілія, фотограф, який побачить та упіймає в моменті твою унікальність. Моя місія - розкрити справжнє, показати глибину та закохати. Запрошую тебе в мій світ фотографії, розкажи мені свої бажання і ми втілимо їх разом!',
  },
  principlesTitle: {
    en: 'I am open to the craziest ideas and ready to implement different concepts, experiment, suggest, search, and embody:',
    ua: 'Я відкрита до найбожевільніших ідей, готова втілювати різні задуми, експериментувати, пропонувати, шукати, втілювати:',
  },
  principlesCard1: {
    en: 'I will help you choose an idea that fits your request, or we can discuss the idea you propose.',
    ua: 'Я допоможу обрати ідею під ваш запит, або ми обговоримо ідею, яку пропонуєте ви. ',
  },
  principlesCard2: {
    en: 'We will select a location that best suits the shooting style, or find a suitable studio.',
    ua: 'Оберемо локацію, яка найкраще підійде під стиль зйомки, або підберемо студію.',
  },
  principlesCard3: {
    en: 'I can assist with styling clothing for the shoot, as well as select accessories and additional details to complement the look.',
    ua: 'Допоможу зі стилізацією одягу на зйомку, підберемо аксесуари, додаткові деталі для доповнення образу.',
  },
  principlesCard4: {
    en: 'We will choose props that best reveal our idea.',
    ua: 'Підберемо реквізити, які найкраще розкриють нашу ідею.',
  },
  principlesCard5: {
    en: 'I will provide references for you and help with posing during the shoot. ',
    ua: 'Підберу референси для вас, допоможу з позуванням під час зйомки. ',
  },
};

const lang = getLanguage() === 'ua' ? 1 : 0;

export const getText = key => (lang ? text[key].ua : text[key].en);
