import { FOURTH_COLOR } from "./constants";

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
   return `display: flex; align-items: ${y}; justify-content: ${x}`;
};

export const setBackground = (url) => {
   if (url) {
      return `url(${url})`
   } else {
      return `${FOURTH_COLOR}`
   }
}