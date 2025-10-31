import React from 'react'
import { Link } from 'react-router-dom'
import { Play, Users, Trophy, Star, ArrowRight, Calendar } from 'lucide-react'

const Home = () => {
  const featuredContests = [
    {
      id: 1,
      title: 'Tech Trivia Showdown',
      date: '2024-01-15',
      prize: '$5,000',
      participants: 1234,
      category: 'Technology',
      difficulty: 'Medium'
    },
    {
      id: 2,
      title: 'Science Challenge',
      date: '2024-01-20',
      prize: '$3,000',
      participants: 856,
      category: 'Science',
      difficulty: 'Hard'
    },
    {
      id: 3,
      title: 'General Knowledge Marathon',
      date: '2024-01-25',
      prize: '$2,500',
      participants: 2100,
      category: 'General',
      difficulty: 'Easy'
    }
  ]

  const stats = [
    { icon: <Users className="text-blue-500" />, value: '50K+', label: 'Active Users' },
    { icon: <Trophy className="text-yellow-500" />, value: '$500K+', label: 'Total Prizes' },
    { icon: <Star className="text-green-500" />, value: '200+', label: 'Contests Hosted' },
    { icon: <Play className="text-purple-500" />, value: '1M+', label: 'Quizzes Played' }
  ]

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <Star className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" />
            <span className="text-blue-700 font-semibold text-sm">Join 50,000+ Quiz Enthusiasts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Challenge Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> Mind</span>
            <br />
            Win Amazing
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text"> Prizes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the most exciting quiz platform where knowledge meets rewards. 
            Compete, learn, and earn real prizes every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contests"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              Join Contest Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center">
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-gray-100">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contests */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Contests</span>
              </h2>
              <p className="text-gray-600 text-lg">Join these exciting upcoming contests</p>
            </div>
            <Link
              to="/contests"
              className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContests.map((contest) => (
              <div key={contest.id} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                      {contest.category}
                    </span>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {contest.date}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    contest.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    contest.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {contest.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {contest.title}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                    {contest.prize}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm font-semibold">{contest.participants}</span>
                  </div>
                </div>
                
                <Link
                  to="/contests"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold text-center block hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  Participate Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home