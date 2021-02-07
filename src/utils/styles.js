export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
   return `display: flex; align-items: ${y}; justify-content: ${x}`;
};

export const setBackground = (url, imgBg) => {
   if (url) {
      return `url(${url})`
   } else {
      return `${imgBg}`
   }
}