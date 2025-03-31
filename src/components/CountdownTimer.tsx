
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

type CountdownTimerProps = {
  hours: number;
  onComplete?: () => void;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, onComplete }) => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState(() => {
    // Try to get saved end time from localStorage
    const savedEndTime = localStorage.getItem('countdownEndTime');
    if (savedEndTime) {
      const endTime = parseInt(savedEndTime, 10);
      const now = new Date().getTime();
      const difference = endTime - now;
      
      // If the saved timer is still valid (not expired)
      if (difference > 0) {
        return {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }
    }
    
    // If no saved time or expired, initialize with the prop
    return {
      hours: hours,
      minutes: 0,
      seconds: 0
    };
  });

  const [urgencyMessage, setUrgencyMessage] = useState("");

  useEffect(() => {
    // Set the end time in localStorage when the component mounts
    const now = new Date().getTime();
    const totalMilliseconds = (timeLeft.hours * 60 * 60 + timeLeft.minutes * 60 + timeLeft.seconds) * 1000;
    const endTime = now + totalMilliseconds;
    
    if (!localStorage.getItem('countdownEndTime')) {
      localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const savedEndTime = localStorage.getItem('countdownEndTime');
      
      if (savedEndTime) {
        const endTime = parseInt(savedEndTime, 10);
        const difference = endTime - now;
        
        if (difference <= 0) {
          clearInterval(timer);
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
          if (onComplete) onComplete();
          localStorage.removeItem('countdownEndTime');
          return;
        }
        
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        
        // Set urgency messages based on time left
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        if (totalHours < 1) {
          setUrgencyMessage("⚠️ HURRY! Less than 1 hour remaining at this price!");
        } else if (totalHours < 3) {
          setUrgencyMessage("⏰ Limited time offer ending soon!");
        } else if (totalHours < 6) {
          setUrgencyMessage("🔥 Don't miss out on this special price!");
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center shadow-lg">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-sm text-brand-navy mt-1">Hours</span>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center shadow-lg">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-sm text-brand-navy mt-1">Minutes</span>
        </div>
        <div className="text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold w-16 h-16 rounded-lg bg-brand-navy text-white flex items-center justify-center shadow-lg">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-sm text-brand-navy mt-1">Seconds</span>
        </div>
      </div>
      
      {urgencyMessage && (
        <div className="mt-4 text-red-500 font-bold text-sm md:text-base animate-pulse">
          {urgencyMessage}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
