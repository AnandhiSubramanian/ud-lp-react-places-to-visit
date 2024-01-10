import { useEffect, useState } from "react";

export default function ProgressBar() {
  const TIMER = 3000;
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER}></progress>;
}
