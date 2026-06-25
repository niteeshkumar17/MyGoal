import { useState, useEffect } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {
  const examDate = new Date('2027-05-23T09:00:00+05:30');

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = examDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <span className="countdown-exam-label">UPSC Prelims 2027</span>
        <span className="countdown-date">May 23, 2027</span>
      </div>
      <div className="countdown-units">
        <div className="countdown-unit">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <span className="countdown-separator">:</span>
        <div className="countdown-unit">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <div className="countdown-motivation">Every second counts. Keep going! 🔥</div>
    </div>
  );
}

export default CountdownTimer;
