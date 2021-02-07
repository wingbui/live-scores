import { FOURTH_COLOR, FIRST_COLOR, SECOND_COLOR, THIRD_COLOR, MAX_RANDOM, MIN_RANDOM } from '../../utils/constants';
import { objectArraySort } from '../../utils/helpers';

// detecting background based on ranking of a user
export const detectBgRank = (ranking) => {
  switch (ranking) {
    case 1:
      return FIRST_COLOR;
    case 2:
      return SECOND_COLOR;
    case 3:
      return THIRD_COLOR;
    default:
      return FOURTH_COLOR;
  }
};

// assign ranking for a user after sorting users based on the user's point 
const assignRanking = (userID, arr) => {
  let result = null;
  arr.forEach((item, index) => {
    if (item.userID === userID) {
      result = index + 1;
    }
  });
  return result;
};

// add ramdon point for a user with a range of MAX_RANDOM & MIN_RANDOM
export const formatData = (arr) => {
  const newArr = [...arr].map((item) => {
    return {
      ...item,
      score:  (item.score += Math.floor(Math.random() * MAX_RANDOM+ MIN_RANDOM))
,
    };
  });

  newArr.sort(objectArraySort('score'));

  return arr.map((item) => {
    return {
      ...item,
      ranking: assignRanking(item.userID, newArr),
    };
  });
};

