import React from 'react';
import { Check, X, Clock } from 'lucide-react';

const QuizProgress = ({ currentQuestion, totalQuestions, answeredQuestions = [] }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  const getQuestionStatus = (index) => {
    if (index < currentQuestion - 1) {
      const answer = answeredQuestions[index];
      return answer?.isCorrect ? 'correct' : 'wrong';
    }
    if (index === currentQuestion - 1) return 'current';
    return 'upcoming';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'correct':
        return <Check className="w-3 h-3 text-white" />;
      case 'wrong':
        return <X className="w-3 h-3 text-white" />;
      case 'current':
        return <Clock className="w-3 h-3 text-white" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'correct':
        return 'bg-green-500 border-green-600';
      case 'wrong':
        return 'bg-red-500 border-red-600';
      case 'current':
        return 'bg-blue-500 border-blue-600 animate-pulse';
      default:
        return 'bg-gray-300 border-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Quiz Progress</h3>
        <span className="text-sm font-semibold text-gray-600">
          {currentQuestion} of {totalQuestions}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Dots */}
      <div className="grid grid-cols-10 gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const status = getQuestionStatus(index);
          return (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${getStatusColor(status)}`}
              title={`Question ${index + 1}`}
            >
              {getStatusIcon(status)}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-4 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">Correct</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">Wrong</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-gray-600">Current</span>
        </div>
      </div>
    </div>
  );
};

export default QuizProgress;