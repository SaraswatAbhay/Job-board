import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Briefcase, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">JobBoard</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-primary-600 transition-colors">
              Find Jobs
            </Link>
            <Link to="/post-job" className="text-gray-700 hover:text-primary-600 transition-colors">
              Post a Job
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
            <button className="btn-primary">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                to="/post-job"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Post a Job
              </Link>
              <div className="pt-4 space-y-2">
                <button className="w-full btn-secondary">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </button>
                <button className="w-full btn-primary">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 