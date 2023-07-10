import { getLanguage } from './localStorage';

const text = {
  about: {
    en: 'About',
    ua: 'Про',
  },
  principles: {
    en: 'Principles',
    ua: 'Принципи',
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
    en: 'Pricing',
    ua: 'Ціни',
  },
  contacts: {
    en: 'Contacts',
    ua: 'Контакти',
  },
  aboutSpan: {
    en: ' me',
    ua: ' мене',
  },
  likes: {
    en: 'likes',
    ua: 'вподобання',
  },
  aboutText: {
    en: 'Hello! I am Lilia, a photographer who captures your uniqueness in the moment. My mission is to reveal the truth, showcase depth, and inspire love in the photo. I invite you to my world of photography, share your desires with me, and we will bring them to life together!',
    ua: 'Вітаю! Я Лілія - фотограф, який побачить та упіймає в моменті твою унікальність. Моя місія - розкрити справжнє у фотографії, показати глибину та закохати. Запрошую тебе до мене на зйомку! Поділись  своїми бажаннями і ми втілимо їх разом!',
  },
  principlesTitle: {
    en: 'I am open to your ideas and inspired to explore new, interesting, unusual, special, and creative ones',
    ua: 'Я відкрита до ваших ідей, а також натхненна на пошук нових, цікавих та незвичних, особливих та креативних',
  },
  principlesTitle2: {
    en: 'Here are the principles I work by:',
    ua: 'Ось принципи за якими я працюю:',
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
  pricingTitle: {
    en: 'Packages',
    ua: 'Пакети послуг',
  },
  package1Title: {
    en: 'Package 1',
    ua: 'Пакет 1',
  },
  package11: {
    en: '1 hour of shooting',
    ua: '1 год зйомки',
  },
  package12: {
    en: '30 photos with color correction and professional retouching',
    ua: '30 фото в кольорокорекції та професійній ретуші',
  },
  package13: {
    en: 'The shooting includes one look, one location, and studio rental is paid separately',
    ua: 'Зйомка передбачає один образ, виїзд на одну локацію, студія оплачується окремо',
  },
  package2Title: {
    en: 'Package 2',
    ua: 'Пакет 2',
  },
  package21: {
    en: '2 hours of shooting',
    ua: '2 год зйомки',
  },
  package22: {
    en: '50 photos with color correction and professional retouching',
    ua: '50 фото в кольорокорекції та професійній ретуші',
  },
  package23: {
    en: 'The shooting includes 1/2 looks, one/two locations, and studio rental is paid separately',
    ua: 'Зйомка передбачає 1/2 образи, одна/дві локації, студія оплачується окремо',
  },
  package3Title: {
    en: 'Package 3',
    ua: 'Пакет 3',
  },
  package31: {
    en: '4 hours of shooting',
    ua: '4 год зйомки',
  },
  package32: {
    en: '70 photos with color correction and professional retouching',
    ua: '70 фото в кольорокорекції та професійній ретуші',
  },
  package33: {
    en: 'The shooting includes portrait and product photography, 2/3 looks, studio + 1 location, and studio rental is paid separately',
    ua: 'Зйомка передбачає портретну/предметну зйомку, 2/3 образи, студія +1 локація, студія оплачується окремо',
  },
  package34: {
    en: 'This can be a content shoot for you as a professional/your product to fill your profile for a month ahead',
    ua: 'Це може бути контент зйомка для вас як професіонала/ вашого продукту для заповнення профілю на місяць вперед',
  },
  contactsTitle: {
    en: 'Do you have any questions for me or do you need a consultation? Contact me in any convenient for you, I will be happy to answer all your questions and help you make your plans a reality',
    ua: 'Якщо у вас залишились запитання чи вам потрібна консультація - зв’яжіться зі мною у будь-який зручний для вас спосіб. З радістю допоможу втілити ваші плани у реальність',
  },
};

const lang = getLanguage() === 'ua' ? true : false;

export const getText = key => (lang ? text[key].ua : text[key].en);
