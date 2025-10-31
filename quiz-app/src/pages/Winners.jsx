import React from 'react'
import { Crown, Trophy, Star, Award, TrendingUp, Users } from 'lucide-react'

const Winners = () => {
  const winners = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 1,
      contest: 'Tech Trivia Championship',
      prize: '$10,000',
      avatar: '👩‍💻',
      country: 'United States',
      points: 9850,
      category: 'Technology',
      date: '2024-01-10'
    },
    {
      id: 2,
      name: 'Alex Chen',
      position: 2,
      contest: 'Science Challenge Pro',
      prize: '$5,000',
      avatar: '👨‍🔬',
      country: 'Canada',
      points: 9420,
      category: 'Science',
      date: '2024-01-08'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      position: 3,
      contest: 'History Masters',
      prize: '$3,000',
      avatar: '👩‍🏫',
      country: 'Spain',
      points: 9180,
      category: 'History',
      date: '2024-01-05'
    },
    {
      id: 4,
      name: 'James Wilson',
      position: 1,
      contest: 'Sports Knowledge Bowl',
      prize: '$7,500',
      avatar: '👨‍🏫',
      country: 'United Kingdom',
      points: 9670,
      category: 'Sports',
      date: '2024-01-03'
    },
    {
      id: 5,
      name: 'Priya Patel',
      position: 2,
      contest: 'Entertainment Quiz Show',
      prize: '$4,000',
      avatar: '👩‍🎤',
      country: 'India',
      points: 9350,
      category: 'Entertainment',
      date: '2023-12-28'
    },
    {
      id: 6,
      name: 'David Kim',
      position: 3,
      contest: 'General Knowledge Daily',
      prize: '$2,000',
      avatar: '👨‍💼',
      country: 'South Korea',
      points: 8920,
      category: 'General',
      date: '2023-12-25'
    }
  ]

  const topWinners = winners.filter(winner => winner.position === 1)

  const getPositionColor = (position) => {
    switch(position) {
      case 1: return 'from-yellow-400 to-yellow-600'
      case 2: return 'from-gray-400 to-gray-600'
      case 3: return 'from-orange-400 to-orange-600'
      default: return 'from-blue-400 to-blue-600'
    }
  }

  const getPositionIcon = (position) => {
    switch(position) {
      case 1: return <Crown className="w-6 h-6" fill="currentColor" />
      case 2: return <Trophy className="w-6 h-6" fill="currentColor" />
      case 3: return <Award className="w-6 h-6" fill="currentColor" />
      default: return <Star className="w-6 h-6" fill="currentColor" />
    }
  }

  return (
    <div className="page-transition min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">Champions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the brilliant minds who have conquered our challenges and won amazing prizes
          </p>
        </div>

        {/* Top Winners Spotlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topWinners.slice(0, 3).map((winner, index) => (
            <div key={winner.id} className={`relative bg-gradient-to-br ${getPositionColor(winner.position)} rounded-3xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300 shadow-2xl`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  {getPositionIcon(winner.position)}
                </div>
              </div>
              
              <div className="text-6xl mb-4">{winner.avatar}</div>
              <h3 className="text-2xl font-black mb-2">{winner.name}</h3>
              <p className="text-white/80 mb-2">{winner.country}</p>
              <div className="text-3xl font-black mb-2">{winner.prize}</div>
              <p className="text-white/90 font-semibold">{winner.contest}</p>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center bg-black/20 rounded-full px-3 py-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-bold">{winner.points} pts</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Winners List */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-black text-gray-900 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
              Recent Winners
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {winners.map(winner => (
              <div key={winner.id} className="p-6 hover:bg-gray-50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`relative flex-shrink-0 ${
                      winner.position === 1 ? 'w-16 h-16' :
                      winner.position === 2 ? 'w-14 h-14' :
                      winner.position === 3 ? 'w-12 h-12' :
                      'w-10 h-10'
                    }`}>
                      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${getPositionColor(winner.position)} flex items-center justify-center text-white font-bold text-lg`}>
                        {winner.position}
                      </div>
                      <div className="absolute -top-1 -right-1">
                        {getPositionIcon(winner.position)}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                          {winner.name}
                        </h3>
                        <span className="text-2xl">{winner.avatar}</span>
                      </div>
                      <p className="text-gray-600">{winner.country}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded-lg">
                          {winner.category}
                        </span>
                        <span className="text-sm text-gray-500">{winner.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text mb-1">
                      {winner.prize}
                    </div>
                    <p className="text-gray-600 font-semibold">{winner.contest}</p>
                    <div className="flex items-center justify-end space-x-2 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-bold text-gray-700">{winner.points} points</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900">250+</div>
            <div className="text-gray-600">Winners Crowned</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900">$500K+</div>
            <div className="text-gray-600">Total Prizes Won</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
            <div className="text-2xl font-black text-gray-900">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winners