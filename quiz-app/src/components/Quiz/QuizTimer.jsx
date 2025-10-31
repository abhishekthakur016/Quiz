import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const QuizTimer = ({ initialTime, onTimeUp, isPaused = false, size = "medium" }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  const sizes = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-base",
    large: "w-16 h-16 text-lg"
  };

  useEffect(() => {
    if (isPaused || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused, onTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeLeft <= 10) return 'text-red-500 border-red-500 bg-red-50';
    if (timeLeft <= 30) return 'text-orange-500 border-orange-500 bg-orange-50';
    return 'text-blue-500 border-blue-500 bg-blue-50';
  };

  const getProgress = () => (timeLeft / initialTime) * 100;

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className={`${sizes[size]} border-2 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-300 ${getTimerColor()}`}>
          {timeLeft <= 10 && <AlertTriangle className="w-4 h-4 animate-pulse" />}
          {timeLeft > 10 && formatTime(timeLeft)}
        </div>
        
        {/* Circular Progress */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="301.59"
            strokeDashoffset={301.59 - (getProgress() * 301.59) / 100}
            className={`transition-all duration-1000 ${
              timeLeft <= 10 ? 'text-red-500' : 
              timeLeft <= 30 ? 'text-orange-500' : 'text-blue-500'
            }`}
            opacity="0.3"
          />
        </svg>
      </div>
      
      {timeLeft <= 30 && (
        <div className={`flex items-center space-x-1 ${
          timeLeft <= 10 ? 'text-red-600' : 'text-orange-600'
        } font-semibold text-sm animate-pulse`}>
          <Clock className="w-4 h-4" />
          <span>Hurry!</span>
        </div>
      )}
    </div>
  );
};

export default QuizTimer;