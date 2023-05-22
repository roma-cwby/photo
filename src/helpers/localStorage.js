export const setLanguage = lan => {
  localStorage.setItem('lang', JSON.stringify(lan));
};

export const getLanguage = () => {
  return JSON.parse(localStorage.getItem('lang'));
};
