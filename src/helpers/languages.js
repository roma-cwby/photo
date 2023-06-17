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
    en: 'Hello! I am Lilia, a photographer who captures your uniqueness in the moment. My mission is to reveal the truth, showcase depth, and inspire love in the photo. I invite you to my world of photography, share your desires with me, and we will bring them to life together!',
    ua: 'Вітаю! Я Лілія - фотограф, який побачить та упіймає в моменті твою унікальність. Моя місія - розкрити справжнє у фотографії, показати глибину та закохати. Запрошую тебе до мене на зйомку! Поділись  своїми бажаннями і ми втілимо їх разом!',
  },
  principlesTitle: {
    en: 'I am open to your ideas and inspired to explore new, interesting, unusual, special, and creative ones. Here are the principles I work by:',
    ua: 'Я відкрита до ваших ідей, а також натхненна на пошук нових, цікавих та незвичних, особливих та креативних. Ось принципи за якими я працюю:',
  },
  principlesCard1: {
    en: 'I will help you choose an idea that fits your request, or we can discuss the idea you propose',
    ua: 'Я допоможу обрати ідею під ваш запит, або ми обговоримо ідею, яку пропонуєте ви',
  },
  principlesCard2: {
    en: 'We will select a location that best suits the shooting style, or find a suitable studio',
    ua: 'Оберемо локацію, яка найкраще підійде під стиль зйомки, або студію',
  },
  principlesCard3: {
    en: 'I can assist with styling clothing for the shoot, as well as select accessories and additional details to complement the look',
    ua: 'Допоможу зі стилізацією одягу на зйомку, якщо це буде необхідно, підберемо аксесуари, додаткові деталі для доповнення образу',
  },
  principlesCard4: {
    en: 'We will choose props that best reveal our idea',
    ua: 'Підберемо реквізити, які найкраще розкриють нашу ідею',
  },
  principlesCard5: {
    en: 'I will provide references for you and help with posing during the shoot',
    ua: 'Підберу референси для вас, допоможу з позуванням під час зйомки',
  },
  processTitle: {
    en: 'Stages of work',
    ua: 'Етапи роботи',
  },
  processCard1: {
    en: 'Introduction',
    ua: 'Знайомство',
  },
  processCard2: {
    en: 'Defining the shooting concept: idea, location, style, discussing all details of your request',
    ua: 'Визначення концепції зйомки: ідея, локація, образ, обговорюємо всі деталі вашого запиту',
  },
  processCard3: {
    en: 'Creating a mood board to be used during the shoot',
    ua: 'Створення мудборду, яким користуватимемося на зйомці',
  },
  processCard4: {
    en: 'Shooting, editing, and delivering the final photos',
    ua: 'Зйомка, обробка, видача готових фото',
  },
};

const lang = getLanguage() === 'ua' ? true : false;

export const getText = key => (lang ? text[key].ua : text[key].en);
