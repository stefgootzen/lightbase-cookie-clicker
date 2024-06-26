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
  const [isAutomated, setIsAutomated] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleAutomateOn = () => {
    setIsAutomated(true);

    intervalRef.current = setInterval(() => {
      incrementByOne();
    }, 1000);
  };

  const handleAutomateOff = () => {
    setIsAutomated(false);

    if (!intervalRef.current) {
      return;
    }
    clearInterval(intervalRef.current);
  };

  const toggleAutomate = () => {
    isAutomated ? handleAutomateOff() : handleAutomateOn();
  };

  const reset = () => {
    setCount(0);
  };

  const incrementByOne = () => {
    setCount(prevCount => prevCount + 1);
  };

  return {
    count,
    isAutomated,
    incrementByOne,
    toggleAutomate,
    reset,
  };
}
