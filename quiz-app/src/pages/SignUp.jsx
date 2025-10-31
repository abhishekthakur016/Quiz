import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, User, Mail, Lock, Check, Zap, Github, Twitter, Facebook, Award, Users, Trophy } from 'lucide-react'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    newsletter: true
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup attempt:', formData)
  }

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const features = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Win Real Prizes",
      description: "Compete for cash prizes, gadgets, and exclusive rewards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join Community",
      description: "Connect with thousands of quiz enthusiasts worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Earn Badges",
      description: "Unlock achievements and showcase your expertise"
    }
  ]

  return (
    <div className="page-transition min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Zap size={24} className="text-white" fill="white" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  QuizVerse
                </span>
              </Link>
              
              <h1 className="text-3xl font-black text-gray-900 mb-2">
                Join QuizVerse Today
              </h1>
              <p className="text-gray-600">
                Create your account and start your quiz journey
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step === currentStep
                      ? 'bg-blue-600 text-white scale-110'
                      : step < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <Check className="w-5 h-5" /> : step}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${
                    step === currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step === 1 ? 'Account' : step === 2 ? 'Profile' : 'Complete'}
                  </span>
                </div>
              ))}
              <div className="flex-1 h-1 bg-gray-200 mx-2 -mt-5">
                <div 
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Must be at least 8 characters with numbers and symbols
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className="w-full pl-10 pr-12 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-1"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Privacy Policy</a>
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        Send me updates about new contests, features, and special offers
                      </span>
                    </label>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Almost there! 🎉</h4>
                    <p className="text-blue-700 text-sm">
                      You're about to join a community of 50,000+ quiz enthusiasts. Get ready to compete and win amazing prizes!
                    </p>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                  >
                    Back
                  </button>
                )}
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Create Account
                  </button>
                )}
              </div>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative bg-white px-4 text-sm text-gray-500">
                Or sign up with
              </div>
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Sign in now
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-black mb-6">
                Why Join QuizVerse?
              </h2>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center py-6 border-t border-blue-400">
                <div>
                  <div className="text-2xl font-black">50K+</div>
                  <div className="text-blue-100 text-sm">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-black">$500K+</div>
                  <div className="text-blue-100 text-sm">Prizes Won</div>
                </div>
                <div>
                  <div className="text-2xl font-black">200+</div>
                  <div className="text-blue-100 text-sm">Contests</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/10 rounded-2xl p-6 mt-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    👑
                  </div>
                  <div>
                    <div className="font-black">Sarah Johnson</div>
                    <div className="text-blue-100 text-sm">Top Quiz Champion</div>
                  </div>
                </div>
                <p className="text-blue-100 italic">
                  "I've won over $5,000 in prizes while having fun and learning new things every day. QuizVerse changed how I test my knowledge!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp