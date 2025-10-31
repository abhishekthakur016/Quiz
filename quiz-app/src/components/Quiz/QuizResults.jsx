import React from 'react';
import { Trophy, Star, Target, Clock, Award, Share2, Home, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuizResults = ({ 
  score, 
  totalScore, 
  totalQuestions, 
  correctAnswers, 
  timeTaken,
  contest,
  onRetry 
}) => {
  const percentage = (score / totalScore) * 100;
  const accuracy = (correctAnswers / totalQuestions) * 100;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a quiz master! 🎯";
    if (percentage >= 75) return "Excellent performance! 🌟";
    if (percentage >= 60) return "Good job! Well done! 👍";
    if (percentage >= 50) return "Not bad! Keep practicing! 💪";
    return "Keep learning and try again! 📚";
  };

  const getRank = () => {
    if (percentage >= 90) return { name: "Quiz Master", color: "from-yellow-500 to-orange-500" };
    if (percentage >= 75) return { name: "Expert", color: "from-purple-500 to-pink-500" };
    if (percentage >= 60) return { name: "Pro", color: "from-blue-500 to-teal-500" };
    if (percentage >= 50) return { name: "Intermediate", color: "from-green-500 to-blue-500" };
    return { name: "Beginner", color: "from-gray-500 to-gray-700" };
  };

  const rank = getRank();

  const shareResults = () => {
    const text = `I scored ${score}/${totalScore} points in ${contest.title} on QuizVerse! 🎯 Can you beat my score?`;
    if (navigator.share) {
      navigator.share({
        title: 'My Quiz Results',
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Quiz Complete! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Main Results Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
              <Trophy className="w-12 h-12 text-white" fill="white" />
            </div>
            <div className={`text-2xl font-black bg-gradient-to-r ${rank.color} text-transparent bg-clip-text mb-2`}>
              {rank.name}
            </div>
            <div className="text-5xl font-black text-gray-900 mb-2">
              {score}<span className="text-2xl text-gray-500">/{totalScore}</span>
            </div>
            <div className="text-lg text-gray-600">
              {correctAnswers} out of {totalQuestions} correct
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-black text-gray-900">{accuracy.toFixed(1)}%</div>
              <div className="text-gray-600 font-semibold">Accuracy</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
              <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-black text-gray-900">{correctAnswers}</div>
              <div className="text-gray-600 font-semibold">Correct Answers</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-100">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-black text-gray-900">{timeTaken}</div>
              <div className="text-gray-600 font-semibold">Time Taken</div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Overall Score</span>
                <span className="font-bold text-gray-900">{percentage.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contest Info */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 text-white mb-8">
          <h3 className="text-xl font-black mb-4">Contest Summary</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-blue-100">Contest</h4>
              <p className="font-semibold text-lg">{contest.title}</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-100">Difficulty</h4>
              <p className="font-semibold text-lg">{contest.difficulty}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={onRetry}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          
          <button
            onClick={shareResults}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Results</span>
          </button>
          
          <Link
            to="/contests"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>More Contests</span>
          </Link>
        </div>

        {/* Achievement Badges */}
        {percentage >= 80 && (
          <div className="bg-yellow-50 rounded-3xl p-6 border border-yellow-200 mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-yellow-600" fill="currentColor" />
              <h3 className="text-lg font-black text-yellow-800">Achievement Unlocked!</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-bold text-yellow-800">High Scorer</div>
                  <div className="text-yellow-600 text-sm">Scored 80% or above</div>
                </div>
              </div>
              {accuracy === 100 && (
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-green-800">Perfect Score</div>
                    <div className="text-green-600 text-sm">100% Accuracy</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizResults;