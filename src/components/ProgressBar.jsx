import { useState, useEffect } from "react";

const ProgressBar = ({ max }) => {
  const [remainingTime, setRemainingTime] = useState(max);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL SET");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("interval clear");
    };
  }, []);

  return <progress value={remainingTime} max={max} />;
};

export default ProgressBar;
