# JobBoard - React Job Board Application

A modern, responsive job board web application built with React, featuring a beautiful UI and comprehensive functionality for job seekers and employers in India.

## Features

### For Job Seekers
- **Browse Jobs**: Search and filter through job listings across major Indian cities
- **Job Details**: View comprehensive job information including requirements and benefits
- **Search & Filter**: Find jobs by title, company, location, and job type
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### For Employers
- **Post Jobs**: Multi-step form to create detailed job listings
- **Job Management**: Easy-to-use interface for posting and managing job openings
- **Company Profiles**: Showcase company information and culture

### General Features
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Mobile-first design approach
- **Fast Performance**: Optimized React components and routing
- **Accessibility**: Built with accessibility best practices
- **Indian Focus**: Tailored for the Indian job market with local cities and salary formats



## Project Structure

```
frontend/
├── public/              # Static files
│   └── index.html       # Main HTML file
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.js    # Navigation component
│   │   └── Footer.js    # Footer component
│   ├── pages/           # Page components
│   │   ├── Home.js      # Landing page
│   │   ├── JobList.js   # Job listings page
│   │   ├── JobDetail.js # Individual job details
│   │   └── PostJob.js   # Job posting form
│   ├── App.js           # Main app component with routing
│   ├── index.js         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
```

## Pages Overview

### Home Page (`/`)
- Hero section with job search
- Featured job listings from Indian companies
- Statistics and call-to-action sections

### Job List Page (`/jobs`)
- Search and filter functionality
- Job cards with key information
- Pagination support
- Indian city locations and salary formats

### Job Detail Page (`/jobs/:id`)
- Comprehensive job information
- Company details
- Application functionality
- Similar jobs recommendations

### Post Job Page (`/post-job`)
- Multi-step form for job posting
- Form validation
- Preview before submission
- Indian salary format support

## Indian Market Features

### Supported Cities
- Mumbai, Maharashtra
- Delhi, NCR
- Bangalore, Karnataka
- Hyderabad, Telangana
- Chennai, Tamil Nadu
- Pune, Maharashtra
- Kolkata, West Bengal
- Ahmedabad, Gujarat
- Noida, Uttar Pradesh
- Gurgaon, Haryana
- Remote

### Salary Formats
- Indian Rupee (₹) format
- Lakhs (L) notation for larger amounts
- Annual salary ranges

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file to change colors, fonts, and other design tokens
2. Updating component classes in the JSX files
3. Adding custom CSS in `src/index.css`

### Adding New Features
- Create new components in the `src/components/` directory
- Add new pages in the `src/pages/` directory
- Update routing in `src/App.js`

