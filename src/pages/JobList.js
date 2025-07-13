import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, DollarSign, Clock, ArrowRight, Briefcase } from 'lucide-react';

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp India',
      location: 'Bangalore, Karnataka',
      salary: '₹15L - ₹25L',
      type: 'Full-time',
      posted: '2 days ago',
      logo: 'https://via.placeholder.com/40x40/3B82F6/FFFFFF?text=T',
      description: 'We are looking for an experienced React developer to join our team...'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLab India',
      location: 'Mumbai, Maharashtra',
      salary: '₹12L - ₹20L',
      type: 'Full-time',
      posted: '1 day ago',
      logo: 'https://via.placeholder.com/40x40/10B981/FFFFFF?text=I',
      description: 'Lead product strategy and development for our innovative platform...'
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'DesignStudio India',
      location: 'Remote',
      salary: '₹8L - ₹15L',
      type: 'Full-time',
      posted: '3 days ago',
      logo: 'https://via.placeholder.com/40x40/F59E0B/FFFFFF?text=D',
      description: 'Create beautiful and intuitive user experiences for our products...'
    },
    {
      id: 4,
      title: 'Backend Engineer',
      company: 'DataFlow Systems',
      location: 'Hyderabad, Telangana',
      salary: '₹10L - ₹18L',
      type: 'Full-time',
      posted: '4 days ago',
      logo: 'https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=D',
      description: 'Build scalable backend systems and APIs for our platform...'
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      company: 'GrowthCo India',
      location: 'Delhi, NCR',
      salary: '₹6L - ₹12L',
      type: 'Full-time',
      posted: '5 days ago',
      logo: 'https://via.placeholder.com/40x40/EF4444/FFFFFF?text=G',
      description: 'Develop and execute marketing strategies to drive growth...'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudTech India',
      location: 'Pune, Maharashtra',
      salary: '₹12L - ₹22L',
      type: 'Full-time',
      posted: '1 week ago',
      logo: 'https://via.placeholder.com/40x40/06B6D4/FFFFFF?text=C',
      description: 'Manage and optimize our cloud infrastructure and deployment processes...'
    }
  ];

  const locations = ['All Locations', 'Mumbai, Maharashtra', 'Delhi, NCR', 'Bangalore, Karnataka', 'Hyderabad, Telangana', 'Chennai, Tamil Nadu', 'Pune, Maharashtra', 'Kolkata, West Bengal', 'Ahmedabad, Gujarat', 'Noida, Uttar Pradesh', 'Gurgaon, Haryana', 'Remote'];
  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesType = selectedType === '' || selectedType === 'All Types' || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Job</h1>
        <p className="text-gray-600">Discover thousands of job opportunities with all the information you need</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {filteredJobs.length} of {jobs.length} jobs
        </p>
        <div className="flex items-center space-x-2 text-gray-600">
          <Filter className="h-4 w-4" />
          <span>Sort by: Relevance</span>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12 rounded" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-gray-700 mb-3">{job.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <Link
                  to={`/jobs/${job.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
                <button className="btn-primary text-sm py-1 px-3">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredJobs.length > 0 && (
        <div className="mt-8 flex items-center justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-2 bg-primary-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">2</button>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">3</button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700">
              Next
            </button>
          </nav>
        </div>
      )}

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search criteria or browse all available jobs.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedLocation('');
              setSelectedType('');
            }}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList; 