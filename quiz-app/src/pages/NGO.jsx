import React from 'react'
import { HeartHandshake, Users, GraduationCap, Target, Shield, ArrowRight } from 'lucide-react'

const NGO = () => {
  const initiatives = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Digital Literacy Programs',
      description: 'Providing tablets and internet access to underprivileged students for online learning.',
      impact: '5,000+ students educated'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Scholarship Programs',
      description: 'Full scholarships for talented students from low-income families to pursue education.',
      impact: '1,200+ scholarships awarded'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Career Guidance',
      description: 'Mentorship and career counseling to help students make informed career choices.',
      impact: '8,000+ students guided'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe Learning Spaces',
      description: 'Creating safe and conducive learning environments in rural areas.',
      impact: '50+ learning centers'
    }
  ]

  const successStories = [
    {
      name: 'Rahul Sharma',
      story: 'Received full scholarship and now studying Computer Science at IIT',
      from: 'Mumbai, India'
    },
    {
      name: 'Maria Gonzalez',
      story: 'Digital literacy program helped her start online business',
      from: 'Lima, Peru'
    },
    {
      name: 'David Okafor',
      story: 'Career guidance led to internship at international company',
      from: 'Lagos, Nigeria'
    }
  ]

  return (
    <div className="page-transition min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
            <HeartHandshake className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-red-700 font-semibold text-sm">Making Education Accessible</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Education For
            <span className="bg-gradient-to-r from-red-500 to-pink-600 text-transparent bg-clip-text"> Every Child</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            At QuizVerse, we believe knowledge should be accessible to all. That's why we've committed 20% of our profits 
            to support underprivileged students through various educational initiatives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <div className="text-3xl font-black text-red-600 mb-2">20%</div>
            <div className="text-gray-600 font-semibold">Profits Donated</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <div className="text-3xl font-black text-green-600 mb-2">15K+</div>
            <div className="text-gray-600 font-semibold">Students Helped</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <div className="text-3xl font-black text-blue-600 mb-2">$250K+</div>
            <div className="text-gray-600 font-semibold">Funds Raised</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 shadow-lg">
            <div className="text-3xl font-black text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 font-semibold">Countries Reached</div>
          </div>
        </div>

        {/* Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Initiatives</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 text-white group-hover:scale-110 transition-transform duration-300">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="text-sm font-semibold text-green-600">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-4">🌟</div>
                <p className="text-white/90 italic mb-4 leading-relaxed">
                  "{story.story}"
                </p>
                <div>
                  <div className="font-black text-lg">{story.name}</div>
                  <div className="text-white/70 text-sm">{story.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every quiz you participate in helps support educational initiatives for underprivileged students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 flex items-center">
                Donate Now
                <HeartHandshake className="ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300 flex items-center">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="mt-6 text-gray-500">
              <p>100% of donations go directly to educational programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NGO