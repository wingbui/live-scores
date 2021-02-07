
// sorting an object array based on value of an object property
export const objectArraySort = function (keyName) {
  return function (objectA, objectB) {
    var valueA = objectA[keyName];
    var valueB = objectB[keyName];
    return valueB - valueA;
  };
};

