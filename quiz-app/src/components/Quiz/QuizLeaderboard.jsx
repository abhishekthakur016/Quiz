import React from 'react';
import { Trophy, Crown, Award, Star, TrendingUp } from 'lucide-react';

const QuizLeaderboard = ({ leaderboard, currentUserScore }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" fill="currentColor" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" fill="currentColor" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-500" fill="currentColor" />;
      default:
        return <span className="text-sm font-bold text-gray-500">{rank}</span>;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300';
      case 2:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300';
      case 3:
        return 'bg-gradient-to-r from-orange-100 to-orange-200 border-orange-300';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-black text-gray-900">Live Leaderboard</h3>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {leaderboard.slice(0, 3).map((player, index) => (
          <div
            key={player.rank}
            className={`text-center p-4 rounded-2xl border-2 transform ${
              index === 0 
                ? 'scale-105 -mt-2' 
                : index === 1 
                  ? 'scale-95' 
                  : 'scale-90'
            } transition-all duration-300 ${getRankColor(player.rank)}`}
          >
            <div className="flex justify-center mb-2">
              {getRankIcon(player.rank)}
            </div>
            <div className="font-black text-gray-900 text-lg mb-1">
              {player.name}
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text mb-1">
              {player.score}
            </div>
            <div className="text-sm text-gray-600">
              {player.time} • {player.accuracy}
            </div>
          </div>
        ))}
      </div>

      {/* Rest of Leaderboard */}
      <div className="space-y-3">
        {leaderboard.slice(3).map((player) => (
          <div
            key={player.rank}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">{player.rank}</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{player.name}</div>
                <div className="text-sm text-gray-500">{player.time}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-black text-gray-900">{player.score}</div>
              <div className="text-sm text-gray-600">{player.accuracy}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Current User Score */}
      {currentUserScore && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-blue-100">Your Score</div>
                <div className="text-xl font-black">{currentUserScore.score}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-100">Rank</div>
                <div className="text-xl font-black">#{currentUserScore.rank}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizLeaderboard;