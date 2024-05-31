import { useRef, useState } from "react";

interface UseCounterReturn {
  count: number;
  isAutomated: boolean;
  incrementByOne: () => void;
  toggleAutomate: () => void;
  reset: () => void;
}

export function useCounter(initialCount = 0): UseCounterReturn {
  const [count, setCount] = useState(initialCount);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const handleAutomateOn = () => {
    const ref = setInterval(() => {
      incrementByOne();
    }, 1000);

    setIntervalId(ref);
  };

  const handleAutomateOff = () => {
    if (!intervalId) {
      return;
    }
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const toggleAutomate = () => {
    intervalId ? handleAutomateOff() : handleAutomateOn();
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  return {
    count,
    isAutomated: !!intervalId,
    incrementByOne,
    toggleAutomate,
    reset,
  };
}
