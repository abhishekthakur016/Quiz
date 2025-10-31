import React from 'react'
import { Target, Users, Zap, Heart, Award, Globe, Shield, Rocket } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'To make learning engaging and rewarding through competitive quizzes while supporting education for all.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'Building a global community of knowledge enthusiasts who learn and grow together.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly evolving our platform with cutting-edge technology and engaging formats.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Social Impact',
      description: 'Committed to donating 20% of profits to educational initiatives for underprivileged students.'
    }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'Former education technology specialist with 10+ years experience',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack developer passionate about EdTech and gamification',
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Content',
      bio: 'Quiz master and educational content creator',
      avatar: '👨‍🏫'
    },
    {
      name: 'Emma Davis',
      role: 'Community Manager',
      bio: 'Building and nurturing our global community',
      avatar: '👩‍🎤'
    }
  ]

  return (
    <div className="page-transition min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">QuizVerse</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the way people learn and compete through engaging quiz experiences, 
            while making a positive impact on global education.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  QuizVerse was born from a simple idea: learning should be fun, engaging, and rewarding. 
                  In 2023, our founders noticed a gap in the market for high-quality, competitive quiz platforms 
                  that also gave back to the community.
                </p>
                <p>
                  What started as a small project among friends has grown into a global platform with 
                  thousands of active users. We've hosted hundreds of contests and awarded significant prizes, 
                  all while maintaining our commitment to educational philanthropy.
                </p>
                <p>
                  Today, we're proud to be at the intersection of education, technology, and social impact, 
                  creating opportunities for people to learn, compete, and make a difference.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <Rocket className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-black">2023</div>
                <div className="text-blue-100">Founded</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-6 text-white text-center">
                <Globe className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-black">50+</div>
                <div className="text-green-100">Countries</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-black">50K+</div>
                <div className="text-orange-100">Users</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white text-center">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-black">$500K+</div>
                <div className="text-purple-100">Prizes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white inline-block group-hover:scale-110 transition-transform duration-300 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            Meet Our <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">Team</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Through our partnership with educational NGOs, we've helped thousands of underprivileged students 
            access quality education and learning resources.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black mb-2">20%</div>
              <div className="text-green-100">Profits Donated</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">15K+</div>
              <div className="text-green-100">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">25+</div>
              <div className="text-green-100">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">$250K+</div>
              <div className="text-green-100">Funds Raised</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About