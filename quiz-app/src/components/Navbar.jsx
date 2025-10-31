import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Home,
  Trophy,
  Users,
  HeartHandshake,
  Info,
  LogIn,
  User,
  Bell,
  Search,
  Menu,
  X,
  Crown,
  Zap,
  Sparkles,
  LogOut,
  Settings,
  Award,
  BookOpen,
  Star
} from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(location.pathname)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active state when location changes
  useEffect(() => {
    setActive(location.pathname)
    setIsMobileMenuOpen(false)
    setIsUserMenuOpen(false)
    setShowSearch(false)
  }, [location])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false)
      }
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isUserMenuOpen, isMobileMenuOpen])

  const navItems = [
    { name: 'Home', icon: <Home size={22} />, path: '/', badge: null },
    { name: 'Contests', icon: <Trophy size={22} />, path: '/contests', badge: 'New' },
    { name: 'Winners', icon: <Crown size={22} />, path: '/winners', badge: null },
    { name: 'NGO', icon: <HeartHandshake size={22} />, path: '/ngo', badge: 'Hot' },
    { name: 'About', icon: <Info size={22} />, path: '/about', badge: null },
  ]

  const userMenuItems = [
    { name: 'My Profile', icon: <User size={18} />, path: '/profile' },
    { name: 'My Contests', icon: <Trophy size={18} />, path: '/my-contests' },
    { name: 'Achievements', icon: <Award size={18} />, path: '/achievements' },
    { name: 'Learning Hub', icon: <BookOpen size={18} />, path: '/learn' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ]

  const mobileMenuItems = [
    { name: 'Search', icon: <Search size={22} />, action: () => setShowSearch(true) },
    { name: 'Notifications', icon: <Bell size={22} />, action: () => navigate('/notifications') },
    { name: 'Leaderboard', icon: <Crown size={22} />, path: '/leaderboard' },
    { name: 'Learning Hub', icon: <BookOpen size={22} />, path: '/learn' },
  ]

  const handleLogin = () => {
    setUserLoggedIn(true)
    setIsUserMenuOpen(false)
    navigate('/profile')
  }

  const handleLogout = () => {
    setUserLoggedIn(false)
    setIsUserMenuOpen(false)
    navigate('/')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setShowSearch(false)
    }
  }

  const notificationCount = 3

  return (
    <>
      {/* Enhanced Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 py-3 border-b border-blue-100/50'
            : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-lg py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          {/* Logo with animation */}
          <Link
            to="/"
            className="group flex items-center space-x-3"
            onClick={() => setActive('/')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Zap size={24} className="text-white" fill="white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text tracking-tight">
                QuizVerse
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                Challenge Your Mind
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1 bg-white/50 rounded-2xl px-2 py-1 border border-gray-100 shadow-lg shadow-blue-500/5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActive(item.path)}
                className={`relative px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 group ${
                  active === item.path
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-md shadow-blue-500/10 border border-blue-200/50'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`transition-transform duration-300 ${active === item.path ? 'scale-110' : 'group-hover:scale-105'}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                
                {/* Active indicator */}
                {active === item.path && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}

                {/* Badge */}
                {item.badge && (
                  <span className={`absolute -top-1 -right-1 text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    item.badge === 'New' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            {showSearch ? (
              <div className="relative">
                <form onSubmit={handleSearch} className="flex items-center">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search quizzes, topics..."
                    className="w-64 pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-lg"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowSearch(false)}
                    className="ml-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </form>
              </div>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="p-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 group"
              >
                <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
              </button>
            )}

            {/* Notifications */}
            <button className="relative p-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 group">
              <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
              {hasNotification && (
                <>
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {notificationCount}
                  </span>
                </>
              )}
            </button>

            {/* User/Auth Section */}
            {userLoggedIn ? (
              <div className="relative user-menu">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative">
                    <User className="w-4 h-4" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">John Doe</div>
                    <div className="text-xs text-blue-100">Pro Member</div>
                  </div>
                  <Sparkles className="w-4 h-4 text-yellow-300" fill="currentColor" />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-100/50 z-50">
                    {/* User Info */}
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" />
                            Pro Member
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                        <div>
                          <div className="font-black text-gray-900">1,250</div>
                          <div className="text-xs text-gray-500">Points</div>
                        </div>
                        <div>
                          <div className="font-black text-gray-900">24</div>
                          <div className="text-xs text-gray-500">Wins</div>
                        </div>
                        <div>
                          <div className="font-black text-gray-900">85%</div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="p-2">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                        >
                          <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Logout */}
                    <div className="p-2 border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 group"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-6 py-2.5 rounded-xl font-semibold text-gray-700 hover:text-blue-600 hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-blue-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Sign Up Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-md z-50 mobile-menu">
        <div className="relative">
          <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/50"></div>
          
          <div className="relative flex justify-around items-center px-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActive(item.path)
                  setIsMobileMenuOpen(false)
                }}
                className={`relative flex flex-col items-center justify-center flex-1 transition-all duration-300 group ${
                  active === item.path
                    ? 'text-blue-600 transform -translate-y-1'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                {/* Active background effect */}
                {active === item.path && (
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-100 to-blue-200/50 rounded-2xl blur-sm"></div>
                )}
                
                <div className={`relative p-2.5 rounded-2xl transition-all duration-300 ${
                  active === item.path 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-110' 
                    : 'bg-transparent group-hover:bg-blue-50/50'
                }`}>
                  {item.icon}
                  
                  {/* Notification badge */}
                  {item.badge && (
                    <span className={`absolute -top-1 -right-1 text-[10px] px-1 rounded-full font-bold ${
                      item.badge === 'New' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <span className={`text-xs font-semibold mt-1 transition-all duration-300 ${
                  active === item.path ? 'text-blue-600 scale-105' : 'scale-100'
                }`}>
                  {item.name}
                </span>

                {/* Active indicator dot */}
                {active === item.path && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative flex flex-col items-center justify-center flex-1 transition-all duration-300 group"
            >
              <div className={`relative p-2.5 rounded-2xl transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-110'
                  : 'bg-transparent group-hover:bg-blue-50/50 text-gray-500'
              }`}>
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </div>
              <span className="text-xs font-semibold mt-1">Menu</span>
            </button>
          </div>
        </div>

        {/* Expanded Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 mb-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/50 p-4 transform origin-bottom transition-all duration-300 z-50">
            <div className="space-y-2">
              {/* Quick Actions Header */}
              <div className="flex items-center justify-between p-3">
                <span className="font-semibold text-gray-700">Quick Actions</span>
                {hasNotification && (
                  <div className="relative">
                    <Bell className="w-5 h-5 text-gray-500" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-bold">
                      {notificationCount}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Search */}
              <div 
                onClick={() => setShowSearch(true)}
                className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
              >
                <Search className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Search Quizzes</span>
              </div>

              {/* Additional Menu Items */}
              {mobileMenuItems.map((item, index) => (
                item.path ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-blue-50 transition-all duration-200"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <div
                    key={item.name}
                    onClick={item.action}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-gray-50/50 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </div>
                )
              ))}

              {/* Auth Section */}
              <div className="pt-2 border-t border-gray-100">
                {userLoggedIn ? (
                  <div className="space-y-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 p-3 rounded-2xl bg-blue-50 text-blue-600 font-semibold transition-all duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span>My Profile</span>
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-center p-3 rounded-2xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      className="text-center p-3 rounded-2xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-200"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="text-center p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-200"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Search Overlay */}
      {showSearch && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-50 p-4">
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={() => setShowSearch(false)}
              className="p-2 rounded-xl bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-black text-gray-900">Search</h2>
          </div>
          
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search quizzes, topics, categories..."
                className="w-full pl-10 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                autoFocus
              />
            </div>
          </form>

          {/* Recent Searches */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Recent Searches</h3>
            <div className="space-y-2">
              {['Technology', 'Science Quiz', 'Math Challenge', 'History'].map((term, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(term)
                    handleSearch({ preventDefault: () => {} })
                  }}
                  className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  )
}

export default Navbar