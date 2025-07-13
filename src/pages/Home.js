import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Users, TrendingUp, ArrowRight, MapPin, DollarSign, Clock } from 'lucide-react';

const Home = () => {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp India',
      location: 'Bangalore, Karnataka',
      salary: '₹15L - ₹25L',
      type: 'Full-time',
      posted: '2 days ago',
      logo: 'https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=T'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLab India',
      location: 'Mumbai, Maharashtra',
      salary: '₹12L - ₹20L',
      type: 'Full-time',
      posted: '1 day ago',
      logo: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=I'
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'DesignStudio India',
      location: 'Remote',
      salary: '₹8L - ₹15L',
      type: 'Full-time',
      posted: '3 days ago',
      logo: 'https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=D'
    }
  ];

  const stats = [
    { icon: Briefcase, number: '10,000+', label: 'Active Jobs' },
    { icon: Users, number: '50,000+', label: 'Job Seekers' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Job
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Connect with top companies and opportunities. Whether you're looking for your next career move or hiring talent, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest opportunities from top companies around India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <div key={job.id} className="card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img src={job.logo} alt={job.company} className="w-10 h-10 rounded" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type} • {job.posted}
                  </div>
                </div>

                <Link
                  to={`/jobs/${job.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/jobs" className="btn-primary">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Post a Job?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Reach thousands of qualified candidates and find the perfect fit for your team.
          </p>
          <Link to="/post-job" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Post a Job
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 