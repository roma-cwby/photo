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
  termsTitle: {
    en: 'Terms and conditions',
    ua: 'Правила та умови',
  },
  termsText1: {
    en: 'You have 30 days to download the photos from your gallery. Remember to download them within this time frame. After 30 days, the files will be securely stored in my archive for one year. If you need to download them again after this period, there will be an extra fee of £30.',
    ua: 'У вас є 30 днів, щоб завантажити фотографії з вашої галереї. Не забудьте завантажити їх протягом цього періоду часу. Через 30 днів файли надійно зберігатимуться в моєму архіві протягом одного року. Якщо вам знадобиться завантажити їх знову після закінчення цього періоду, стягуватиметься додаткова плата у розмірі £30.',
  },
  termsText2: {
    en: 'If you want to book a studio, you need to pay for it upfront.',
    ua: 'Якщо ви хочете забронювати студію, вам потрібно заплатити за неї наперед.',
  },
  termsText3: {
    en: 'The agreed shooting time is determined before booking, and any changes will be considered based on the cancellation policy.',
    ua: 'Узгоджений час зйомки визначається перед бронюванням, і будь-які зміни розглядатимуться відповідно до правил скасування.',
  },
  termsText4: {
    en: 'Any additional hours during the shoot will be charged according to the photographer`s rates. The shooting starts at the agreed time, so if you arrive late, it will reduce the total shooting time, and the additional time will be charged separately.',
    ua: 'Будь-які додаткові години під час зйомки оплачуються згідно з тарифами фотографа. Зйомки починаються в узгоджений час, тому якщо ви приїдете пізно, це скоротить загальний час зйомки, а додатковий час буде оплачуватися окремо.',
  },
  termsText5: {
    en: 'For photographing weddings or other celebrations, you will be billed from the agreed start time until the moment when I finish the work and we say goodbye.',
    ua: 'За фотозйомку весілля чи інших урочистостей рахунок виставляється з узгодженого часу початку до моменту, коли я закінчу роботу і ми попрощаємось.',
  },
  termsText6: {
    en: 'The studio fee cannot be refunded unless there is an exception in the studio`s cancellation policy.',
    ua: 'Плата за студію не повертається, якщо немає винятків у політиці скасування студії.',
  },
  termsText7: {
    en: 'A 50% prepayment is required for the shoot. You can change the shooting date once, on any available date. A 25% deposit is refundable if you cancel three days before the shoot, and a full refund is given if you cancel seven days before the shoot.',
    ua: 'Для зйомки потрібна передоплата 50%. Ви можете змінити дату зйомки один раз, на будь-яку доступну дату. Застава в розмірі 25% повертається, якщо ви скасуєте замовлення за три дні до зйомки, і повне повернення, якщо ви скасовуєте замовлення за сім днів до зйомки.',
  },
  termsText8: {
    en: 'The photographer may postpone or cancel the shoot due to illness or an emergency. In such cases, all deposits will be returned.',
    ua: 'Фотограф може відкласти або скасувати зйомку через хворобу або екстрену ситуацію. У таких випадках усі депозити повертаються.',
  },
  termsText9: {
    en: 'Limited liability can be applied if the photographic materials are damaged, lost, or otherwise affected without the photographer`s fault. This means that the photographer would not be held responsible for such incidents, and their liability would be limited in such cases.',
    ua: 'Обмежена відповідальність може бути застосована, якщо фотоматеріали пошкоджені, втрачені або іншим чином постраждали без вини фотографа. Це означає, що фотограф не несе відповідальності за такі випадки, а його відповідальність у таких випадках буде обмежена.',
  },
  termsText10: {
    en: 'I have the right to use the photos for my portfolio unless you inform me before the shoot that the photos should not be used.',
    ua: 'Я маю право використовувати фотографії для свого портфоліо, якщо ви не повідомите мене перед зйомкою, що фотографії не можна використовувати.',
  },
  termsText11: {
    en: 'All shoot details mat be discussed and confirmed before booking. Any changes made after booking may result in additional charges.',
    ua: 'Усі деталі зйомки повинні бути обговорені та підтверджені перед бронюванням. Будь-які зміни, внесені після бронювання, можуть призвести до додаткових витрат.',
  },
  termsText12: {
    en: 'All images will be deleted from my archive after one year.',
    ua: 'Усі зображення будуть видалені з мого архіву через рік.',
  },
  termsText13: {
    en: 'Your images will be delivered within 7 days, and for events with a large number of photos, it may take up to 14 days.',
    ua: 'Ваші зображення будуть доставлені протягом 7 днів, для заходів із великою кількістю фотографій це може зайняти до 14 днів.',
  },
  termsText14: {
    en: 'Please note: The package price includes a specific number of edited JPEG images. The RAW images are the photographer`s property and are not included. I can provide unretouched JPEG copies for an additional fee.',
    ua: 'Зверніть увагу: у вартість пакета входить певна кількість відредагованих зображень JPEG. Зображення RAW є власністю фотографа і не включені. Я можу надати невідретушовані копії JPEG за додаткову плату.',
  },
  termsText15: {
    en: 'By booking a shoot with me, you are agreeing to have your photos taken and processed in my unique style. You can get a sense of my style by viewing my portfolio, which showcases my previous work.',
    ua: 'Замовляючи зйомку у мене, ви погоджуєтеся на те, щоб ваші фотографії були зроблені й оброблені в моєму унікальному стилі. Ви можете отримати уявлення про мій стиль, переглянувши моє портфоліо, яке демонструє мої попередні роботи.',
  },
  termsText16: {
    en: 'Any additional retouched photos that are not included in the package you purchased will be charged separately.',
    ua: 'Будь-які додаткові відретушовані фотографії, які не входять до пакету, який ви придбали, оплачуватимуться окремо.',
  },
  termsText17: {
    en: 'Please note that if the shoot location is outside of London, additional travel payments will be incurred.',
    ua: 'Будь ласка, зверніть увагу, що якщо місце зйомки знаходиться за межами Лондона, стягуються додаткові витрати на дорогу.',
  },
  termsThanks: {
    en: 'Thank you for your cooperation, I appreciate it!',
    ua: 'Дякую за співпрацю, я ціную це!',
  },
};

const lang = getLanguage() === 'ua' ? true : false;

export const getText = key => (lang ? text[key].ua : text[key].en);
