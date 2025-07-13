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

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

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

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Various Platforms

**Netlify:**
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

**GitHub Pages:**
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## Future Enhancements

- User authentication and profiles
- Job application tracking
- Email notifications
- Advanced search filters
- Company dashboard
- Analytics and reporting
- Mobile app version
- Integration with Indian job portals
- Regional language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please open an issue in the repository or contact the development team. 