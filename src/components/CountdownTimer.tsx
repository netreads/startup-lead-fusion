
import React, { useState, useEffect } from "react";

type CountdownTimerProps = {
  hours: number;
  onComplete?: () => void;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, onComplete }) => {
  const calculateTimeLeft = () => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + hours);
    
    const difference = targetTime.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      if (onComplete) onComplete();
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="flex items-center justify-center space-x-4 w-full">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center">
          {formatTime(timeLeft.hours)}
        </div>
        <span className="text-sm text-brand-navy mt-1">Hours</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center">
          {formatTime(timeLeft.minutes)}
        </div>
        <span className="text-sm text-brand-navy mt-1">Minutes</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center">
          {formatTime(timeLeft.seconds)}
        </div>
        <span className="text-sm text-brand-navy mt-1">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
