import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Trophy, Clock, Filter, Search, Star, Zap, Play, Award } from 'lucide-react'

const Contests = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Technology', 'Science', 'History', 'Sports', 'Entertainment', 'General']

  const contests = [
    {
      id: 1,
      title: 'AI & Machine Learning Challenge',
      description: 'Test your knowledge in cutting-edge AI technologies and machine learning concepts.',
      date: '2024-01-15',
      time: '18:00 UTC',
      prize: '$5,000',
      participants: 1234,
      maxParticipants: 2000,
      category: 'Technology',
      difficulty: 'Hard',
      entryFee: '$10',
      duration: '15 min',
      totalQuestions: 10,
      featured: true,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Space & Astronomy Quiz',
      description: 'Explore the universe with questions about planets, stars, and space exploration.',
      date: '2024-01-18',
      time: '20:00 UTC',
      prize: '$3,000',
      participants: 856,
      maxParticipants: 1500,
      category: 'Science',
      difficulty: 'Medium',
      entryFee: 'Free',
      duration: '20 min',
      totalQuestions: 15,
      featured: true,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'World History Championship',
      description: 'From ancient civilizations to modern history, test your historical knowledge.',
      date: '2024-01-20',
      time: '19:00 UTC',
      prize: '$4,000',
      participants: 2100,
      maxParticipants: 3000,
      category: 'History',
      difficulty: 'Medium',
      entryFee: '$5',
      duration: '25 min',
      totalQuestions: 20,
      featured: false,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Sports Trivia Extravaganza',
      description: 'All things sports! Football, basketball, Olympics, and more.',
      date: '2024-01-22',
      time: '21:00 UTC',
      prize: '$2,500',
      participants: 1500,
      maxParticipants: 2500,
      category: 'Sports',
      difficulty: 'Easy',
      entryFee: 'Free',
      duration: '10 min',
      totalQuestions: 8,
      featured: false,
      status: 'live'
    },
    {
      id: 5,
      title: 'Movie & TV Show Quiz',
      description: 'Test your knowledge of popular movies, TV shows, and entertainment.',
      date: '2024-01-25',
      time: '19:30 UTC',
      prize: '$3,500',
      participants: 1800,
      maxParticipants: 3000,
      category: 'Entertainment',
      difficulty: 'Easy',
      entryFee: '$8',
      duration: '18 min',
      totalQuestions: 12,
      featured: false,
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'General Knowledge Daily',
      description: 'Quick daily quiz covering various topics. Perfect for beginners!',
      date: '2024-01-26',
      time: '12:00 UTC',
      prize: '$1,000',
      participants: 950,
      maxParticipants: 2000,
      category: 'General',
      difficulty: 'Easy',
      entryFee: 'Free',
      duration: '12 min',
      totalQuestions: 10,
      featured: true,
      status: 'upcoming'
    },
    {
      id: 7,
      title: 'JavaScript Master Challenge',
      description: 'Advanced JavaScript concepts, ES6+, and modern frameworks.',
      date: '2024-01-28',
      time: '17:00 UTC',
      prize: '$4,500',
      participants: 890,
      maxParticipants: 1500,
      category: 'Technology',
      difficulty: 'Hard',
      entryFee: '$15',
      duration: '30 min',
      totalQuestions: 25,
      featured: false,
      status: 'upcoming'
    },
    {
      id: 8,
      title: 'Biology & Life Sciences',
      description: 'From cells to ecosystems, test your biology knowledge.',
      date: '2024-01-30',
      time: '16:00 UTC',
      prize: '$2,800',
      participants: 670,
      maxParticipants: 1200,
      category: 'Science',
      difficulty: 'Medium',
      entryFee: 'Free',
      duration: '22 min',
      totalQuestions: 18,
      featured: false,
      status: 'completed'
    }
  ]

  const filteredContests = contests.filter(contest => {
    const matchesCategory = selectedCategory === 'All' || contest.category === selectedCategory
    const matchesSearch = contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contest.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getProgressPercentage = (current, max) => {
    return (current / max) * 100
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      upcoming: { color: 'bg-blue-100 text-blue-700 border-blue-200', text: 'Upcoming' },
      live: { color: 'bg-green-100 text-green-700 border-green-200', text: 'Live Now' },
      completed: { color: 'bg-gray-100 text-gray-700 border-gray-200', text: 'Completed' }
    }
    return statusConfig[status] || statusConfig.upcoming
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700'
      case 'Medium': return 'bg-yellow-100 text-yellow-700'
      case 'Hard': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="page-transition min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Upcoming <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Contests</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join exciting quiz contests, showcase your knowledge, and win amazing prizes
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-200 shadow-lg">
            <div className="text-2xl font-black text-blue-600 mb-1">{contests.length}</div>
            <div className="text-gray-600 text-sm font-semibold">Total Contests</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-200 shadow-lg">
            <div className="text-2xl font-black text-green-600 mb-1">
              ${contests.reduce((sum, contest) => sum + parseInt(contest.prize.replace('$', '').replace(',', '')), 0).toLocaleString()}+
            </div>
            <div className="text-gray-600 text-sm font-semibold">Total Prizes</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-200 shadow-lg">
            <div className="text-2xl font-black text-purple-600 mb-1">
              {contests.reduce((sum, contest) => sum + contest.participants, 0).toLocaleString()}
            </div>
            <div className="text-gray-600 text-sm font-semibold">Participants</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center border border-gray-200 shadow-lg">
            <div className="text-2xl font-black text-orange-600 mb-1">
              {contests.filter(c => c.entryFee === 'Free').length}
            </div>
            <div className="text-gray-600 text-sm font-semibold">Free Contests</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 w-full lg:w-auto">
              <Filter className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Contests Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContests.map(contest => (
            <div key={contest.id} className={`bg-white rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
              contest.featured 
                ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20' 
                : 'border-gray-200 shadow-lg'
            }`}>
              {contest.featured && (
                <div className="flex items-center px-4 py-2 bg-yellow-100 border-b border-yellow-200">
                  <Star className="w-4 h-4 text-yellow-600 mr-2" fill="currentColor" />
                  <span className="text-yellow-700 font-bold text-sm">Featured Contest</span>
                </div>
              )}
              
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      contest.category === 'Technology' ? 'bg-blue-100 text-blue-700' :
                      contest.category === 'Science' ? 'bg-green-100 text-green-700' :
                      contest.category === 'History' ? 'bg-orange-100 text-orange-700' :
                      contest.category === 'Sports' ? 'bg-red-100 text-red-700' :
                      contest.category === 'Entertainment' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {contest.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(contest.difficulty)}`}>
                      {contest.difficulty}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(contest.status).color}`}>
                    {getStatusBadge(contest.status).text}
                  </span>
                </div>

                {/* Contest Title & Description */}
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {contest.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {contest.description}
                </p>

                {/* Contest Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{contest.date} at {contest.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{contest.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{contest.participants} / {contest.maxParticipants}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{contest.totalQuestions} Qs</span>
                    </div>
                  </div>
                </div>

                {/* Prize Pool */}
                <div className="text-center mb-4">
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                    {contest.prize}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Prize Pool</div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${getProgressPercentage(contest.participants, contest.maxParticipants)}%` }}
                  ></div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {contest.status === 'live' ? (
                    <Link
                      to={`/quiz/${contest.id}`}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Join Live</span>
                    </Link>
                  ) : contest.status === 'upcoming' ? (
                    <Link
                      to={`/quiz/${contest.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start Quiz</span>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-400 text-white py-3 rounded-xl font-bold text-center cursor-not-allowed"
                    >
                      Contest Ended
                    </button>
                  )}
                  
                  <button className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    <Trophy className="w-5 h-5" />
                  </button>
                </div>

                {/* Entry Fee */}
                <div className="text-center mt-3">
                  <span className={`text-sm font-bold ${
                    contest.entryFee === 'Free' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    Entry: {contest.entryFee}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContests.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">No contests found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of players competing in daily quizzes and win amazing prizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Sign Up Free
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contests