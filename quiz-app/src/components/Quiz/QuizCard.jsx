import React, { useState, useEffect } from 'react';
import { Check, X, Clock, AlertCircle } from 'lucide-react';
import QuizTimer from './QuizTimer';

const QuizCard = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  onTimeUp,
  showResults = false 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeUp(false);
  }, [question]);

  const handleAnswer = (answerIndex) => {
    if (isAnswered || timeUp) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    const isCorrect = answerIndex === question.correctAnswer;
    setTimeout(() => {
      onAnswer(answerIndex, isCorrect);
    }, 1500);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    setTimeout(() => {
      onTimeUp();
    }, 1000);
  };

  const getOptionStyle = (optionIndex) => {
    if (!isAnswered && !timeUp) {
      return "bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50";
    }

    const isCorrect = optionIndex === question.correctAnswer;
    const isSelected = optionIndex === selectedAnswer;

    if (isCorrect) {
      return "bg-green-100 border-green-500 text-green-900";
    }

    if (isSelected && !isCorrect) {
      return "bg-red-100 border-red-500 text-red-900";
    }

    return "bg-gray-100 border-gray-300 text-gray-500";
  };

  const getOptionIcon = (optionIndex) => {
    if (!isAnswered && !timeUp) return null;

    const isCorrect = optionIndex === question.correctAnswer;
    const isSelected = optionIndex === selectedAnswer;

    if (isCorrect) {
      return <Check className="w-5 h-5 text-green-600" />;
    }

    if (isSelected && !isCorrect) {
      return <X className="w-5 h-5 text-red-600" />;
    }

    return null;
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
              Question {questionNumber}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold">
              {question.points} pts
            </span>
          </div>
          <h2 className="text-xl font-black text-gray-900 leading-relaxed">
            {question.question}
          </h2>
        </div>
        
        <QuizTimer 
          initialTime={question.timeLimit}
          onTimeUp={handleTimeUp}
          isPaused={isAnswered || timeUp}
        />
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={isAnswered || timeUp}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between group ${
              getOptionStyle(index)
            } ${!isAnswered && !timeUp ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold border-2 ${
                !isAnswered && !timeUp 
                  ? 'bg-gray-100 border-gray-300 text-gray-700 group-hover:bg-blue-100 group-hover:border-blue-500 group-hover:text-blue-700'
                  : getOptionStyle(index).includes('green') 
                    ? 'bg-green-500 text-white border-green-500'
                    : getOptionStyle(index).includes('red')
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-gray-100 border-gray-300 text-gray-500'
              }`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="font-medium text-lg">{option}</span>
            </div>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {(isAnswered || timeUp) && (
        <div className={`p-4 rounded-xl border-2 ${
          timeUp 
            ? 'bg-orange-50 border-orange-200' 
            : selectedAnswer === question.correctAnswer 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-start space-x-3">
            {timeUp ? (
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
            ) : selectedAnswer === question.correctAnswer ? (
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-red-600 mt-0.5" />
            )}
            <div>
              <h4 className={`font-bold ${
                timeUp ? 'text-orange-800' : 
                selectedAnswer === question.correctAnswer ? 'text-green-800' : 'text-red-800'
              }`}>
                {timeUp ? "Time's Up!" : 
                 selectedAnswer === question.correctAnswer ? "Correct Answer!" : "Incorrect Answer"}
              </h4>
              <p className="text-gray-700 mt-1 leading-relaxed">
                {question.explanation}
              </p>
              {!timeUp && selectedAnswer !== question.correctAnswer && (
                <p className="text-green-700 font-semibold mt-2">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;