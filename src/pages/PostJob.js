import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, X } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: '',
    salaryMin: '',
    salaryMax: '',
    description: '',
    requirements: [''],
    benefits: [''],
    contactEmail: '',
    companyWebsite: '',
    applicationDeadline: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // In a real app, you would handle success/error states
    alert('Job posted successfully!');
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Job Details' },
    { number: 3, title: 'Review & Submit' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
        <p className="text-gray-600">Fill out the form below to post your job listing</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                currentStep >= step.number 
                  ? 'bg-primary-600 border-primary-600 text-white' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                {step.number}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep >= step.number ? 'text-primary-600' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  currentStep > step.number ? 'bg-primary-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="e.g., Senior React Developer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="e.g., TechCorp India"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="e.g., Bangalore, Karnataka or Remote"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Type *
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="">Select job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Salary (₹)
                </label>
                <input
                  type="number"
                  name="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., 800000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Salary (₹)
                </label>
                <input
                  type="number"
                  name="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., 1200000"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="contact@company.com"
              />
            </div>
          </div>
        )}

        {/* Step 2: Job Details */}
        {currentStep === 2 && (
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Job Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="input-field"
                  placeholder="Provide a detailed description of the role, responsibilities, and what you're looking for in a candidate..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                {formData.requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) => handleArrayChange(index, 'requirements', e.target.value)}
                      className="input-field flex-1"
                      placeholder="e.g., 5+ years of React experience"
                    />
                    {formData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('requirements', index)}
                        className="p-2 text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('requirements')}
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add requirement
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Benefits
                </label>
                {formData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={benefit}
                      onChange={(e) => handleArrayChange(index, 'benefits', e.target.value)}
                      className="input-field flex-1"
                      placeholder="e.g., Health insurance, flexible hours"
                    />
                    {formData.benefits.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('benefits', index)}
                        className="p-2 text-red-600 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('benefits')}
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add benefit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="https://company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {currentStep === 3 && (
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Review Your Job Posting</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Job Title</h3>
                  <p className="text-gray-600">{formData.jobTitle}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Company</h3>
                  <p className="text-gray-600">{formData.company}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{formData.location}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Job Type</h3>
                  <p className="text-gray-600">{formData.jobType}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Salary Range</h3>
                  <p className="text-gray-600">
                    {formData.salaryMin && formData.salaryMax 
                      ? `₹${formData.salaryMin} - ₹${formData.salaryMax}`
                      : 'Not specified'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Contact Email</h3>
                  <p className="text-gray-600">{formData.contactEmail}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Job Description</h3>
                <p className="text-gray-600 whitespace-pre-line">{formData.description}</p>
              </div>

              {formData.requirements.length > 0 && formData.requirements[0] && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {formData.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {formData.benefits.length > 0 && formData.benefits[0] && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Benefits</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {formData.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex space-x-4">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Posting Job...' : 'Post Job'}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostJob; 