import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, LogIn, User, Mail, Lock, Zap, Github, Twitter } from 'lucide-react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <div className="page-transition min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-md w-full">
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
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to your account to continue your quiz journey
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
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

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            >
              <LogIn className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative bg-white px-4 text-sm text-gray-500">
                Or continue with
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">GitHub</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-gray-700">Twitter</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <User className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-sm text-gray-600">50K+ Users</div>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-sm text-gray-600">Fast & Secure</div>
          </div>
          <div className="text-center">
            <Lock className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-sm text-gray-600">Privacy First</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login