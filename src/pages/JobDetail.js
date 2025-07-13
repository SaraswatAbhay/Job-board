import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Clock, Building, Users, Globe, ArrowLeft, Share2, Bookmark } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock job data - in a real app, this would come from an API
  const job = {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp India',
    location: 'Bangalore, Karnataka',
    salary: '₹15,00,000 - ₹25,00,000',
    type: 'Full-time',
    posted: '2 days ago',
    logo: 'https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=T',
    description: `We are looking for an experienced React developer to join our growing team. You will be responsible for building and maintaining high-quality web applications using modern React practices.

## About the Role

As a Senior React Developer, you will:
- Develop and maintain React-based web applications
- Collaborate with cross-functional teams to define, design, and ship new features
- Write clean, maintainable, and efficient code
- Participate in code reviews and technical discussions
- Mentor junior developers and share best practices

## Requirements

- 5+ years of experience with React and modern JavaScript
- Strong understanding of React hooks, context, and state management
- Experience with TypeScript and modern build tools
- Knowledge of testing frameworks (Jest, React Testing Library)
- Experience with responsive design and CSS-in-JS solutions
- Familiarity with Git and collaborative development workflows

## Nice to Have

- Experience with Next.js or similar frameworks
- Knowledge of backend technologies (Node.js, Python, etc.)
- Experience with cloud platforms (AWS, GCP, Azure)
- Understanding of CI/CD pipelines
- Experience with performance optimization

## Benefits

- Competitive salary and equity package
- Comprehensive health, dental, and vision insurance
- Flexible work arrangements and remote options
- Professional development budget
- Regular team events and activities
- Modern office in downtown Bangalore`,
    companyDescription: 'TechCorp India is a leading technology company focused on building innovative solutions that help businesses grow and succeed. We are passionate about creating products that make a difference.',
    companySize: '50-100 employees',
    companyWebsite: 'https://techcorp.in',
    companyIndustry: 'Technology',
    requirements: [
      '5+ years of experience with React and modern JavaScript',
      'Strong understanding of React hooks, context, and state management',
      'Experience with TypeScript and modern build tools',
      'Knowledge of testing frameworks (Jest, React Testing Library)',
      'Experience with responsive design and CSS-in-JS solutions',
      'Familiarity with Git and collaborative development workflows'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote options',
      'Professional development budget',
      'Regular team events and activities',
      'Modern office in downtown Bangalore'
    ]
  };

  const similarJobs = [
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'InnovateLab India',
      location: 'Mumbai, Maharashtra',
      salary: '₹10L - ₹18L',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'React Native Developer',
      company: 'MobileTech India',
      location: 'Remote',
      salary: '₹8L - ₹15L',
      type: 'Full-time'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/jobs" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Job Header */}
          <div className="card mb-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <img src={job.logo} alt={job.company} className="w-16 h-16 rounded" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-lg text-gray-600 mb-2">{job.company}</p>
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
                      {job.type} • {job.posted}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-lg border ${
                    isBookmarked 
                      ? 'bg-primary-50 border-primary-200 text-primary-600' 
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:border-gray-400">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-primary flex-1">
                Apply for this position
              </button>
              <button className="btn-secondary">
                Save for later
              </button>
            </div>
          </div>

          {/* Job Description */}
          <div className="card mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {job.description}
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="card mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Company Info */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.company}</h3>
            <p className="text-gray-700 mb-4">{job.companyDescription}</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Building className="h-4 w-4 mr-2" />
                {job.companyIndustry}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                {job.companySize}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Globe className="h-4 w-4 mr-2" />
                <a href={job.companyWebsite} className="text-primary-600 hover:text-primary-700">
                  {job.companyWebsite}
                </a>
              </div>
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
            <div className="space-y-4">
              {similarJobs.map((similarJob) => (
                <div key={similarJob.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <Link to={`/jobs/${similarJob.id}`} className="block hover:bg-gray-50 p-2 rounded-lg -m-2">
                    <h4 className="font-medium text-gray-900 mb-1">{similarJob.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{similarJob.company}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{similarJob.location}</span>
                      <span>{similarJob.salary}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail; 