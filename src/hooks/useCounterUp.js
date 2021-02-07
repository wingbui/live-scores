import React from 'react';

export const useCounterUp = ({ num, times = 10 }) => {
  const [counter, setCounter] = React.useState(num);

  React.useEffect(() => {
    let i = times;

    const interval = setInterval(() => {
      i -= 1;
      setCounter((prev) => Math.floor(prev + (num - prev) / times));

      // finish increasing counter if 'times' is over
      if (i <= 0) {
        setCounter(num);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [num, times]);

  return counter;
};
