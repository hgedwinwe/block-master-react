import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    counter != 0 ? setCounter(counter - value) : 0;
  };

  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
