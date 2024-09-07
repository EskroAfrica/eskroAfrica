import React, { useState, useEffect } from 'react';

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => (
  <div>
      <div className="flex flex-col items-center justify-center bg-baseColor shadow-lg text-neutral-500 text-2xl rounded-lg p-4 w-24 h-24">
        <span className="text-5xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <p className="text-neutral-500 text-xl text-center">{label}</p>
  </div>
);

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3 * 24 * 60 * 60); // 3 days in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-between">
        <TimeBox value={days} label="Days" />
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Minutes" />
        <TimeBox value={seconds} label="Seconds" />
    </div>
  );
};

export default CountDown;