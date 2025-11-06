import React, { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [drawnProjects, setDrawnProjects] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate projects appearing like being sketched
          projects.forEach((_, index) => {
            setTimeout(() => {
              setDrawnProjects(prev => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const projects = [
    {
      id: 1,
      title: 'QMail - Quantum-Secure Email Client',
      description: 'A secure email client application that integrates quantum key distribution (QKD) for end-to-end encryption of emails and attachments. Features modern web interface with advanced security protocols.',
      icon: '�',
      technologies: ['React 18', 'Node.js', 'Python Flask', 'MongoDB', 'JWT', 'SMTP', 'Tailwind CSS'],
      features: [
        'Quantum Key Distribution (QKD) integration for secure key generation',
        'XOR-based encryption for email content and attachments',
        'Multi-service architecture with React frontend and Python backend',
        'Custom SMTP server for email reception and transmission',
        'JWT-based authentication with bcrypt password hashing',
        'Real-time email status updates and secure file attachments'
      ],
      // status: 'Development',
      sketch: {
        mainDoodle: '📧🔐',
        arrows: ['→', '↗', '↘'],
        notes: ['quantum', 'secure', 'encrypted']
      },
      link: 'https://github.com/parassadafule/QMail'
    },
    {
      id: 2,
      title: 'GradLink - Alumni Management Platform',
      description: 'A comprehensive web-based alumni management platform that connects graduates, fosters professional networking, and provides mentorship opportunities using Java EE technologies.',
      icon: '🎓',
      technologies: ['Java EE', 'MySQL', 'JSP', 'Servlets', 'JDBC', 'Tomcat'],
      features: [
        'Dual user system with role-based access control for Alumni and Students',
        'Advanced mentorship system with program posting and request management',
        'Event management with full CRUD operations and student registration',
        'Career opportunities board with job posting and application tracking',
        'Alumni directory with advanced search by department and graduation year',
        'Success stories sharing platform with comprehensive profile management'
      ],
      // status: 'Production',
      sketch: {
        mainDoodle: '👥🎓',
        arrows: ['↔', '↗', '↖'],
        notes: ['network', 'mentors', 'events']
      },
      link: 'https://github.com/parassadafule/GradLink'
    },
    {
      id: 3,
      title: 'Heart Attack Predictor',
      description: 'Machine learning model that predicts heart attack risk using patient medical data and lifestyle factors.',
      icon: '💓',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'PostgreSQL'],
      features: [
        '92% accuracy prediction model',
        'Real-time risk assessment',
        'Interactive data visualization',
        'Medical professional dashboard'
      ],
      // status: 'Beta',
      sketch: {
        mainDoodle: '❤️📊',
        arrows: ['↗', '→', '↙'],
        notes: ['ML', '92%', 'health']
      }
    }
  ];
  
  const ProjectCard = ({ project, index, isExpanded, onToggleExpansion }) => {
    const isHovered = hoveredProject === index;
    const isDrawn = drawnProjects.includes(index);
    const displayFeatures = isExpanded ? project.features : project.features.slice(0, 2);

    return (
      <div
        className={`cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${
          isDrawn 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
        style={{ 
          transitionDelay: `${index * 200}ms` 
        }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        
        <div className={`border-2 border-dashed border-gray-400 bg-white p-4 sm:p-5 h-full min-h-[350px] sm:min-h-[400px] relative transform transition-all duration-300 flex flex-col
             ${isHovered ? 'rotate-1 border-gray-600 shadow-lg' : 'rotate-0'}`}>
          
          {/* Notebook rings */}
          <div className="absolute -left-4 top-8 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 border-2 border-gray-300 rounded-full bg-white" />
            ))}
          </div>

          {/* Header with icon and status */}
          <div className="border-b border-gray-300 pb-4 mb-4 relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-2xl bg-gray-50 transform rotate-3">
                  <span className="filter grayscale">{project.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  {/* <span 
                    className="border-dashed border-gray-400 text-gray-600 font-mono text-xs px-2.5 py-0.5 rounded-md border inline-flex items-center font-semibold"
                  >
                    {project.status}
                  </span> */}
                </div>
              </div>
              
              <div className="text-gray-400 font-mono text-sm">
                {project.sketch.mainDoodle}
              </div>
            </div>
            
            <div className={`mt-2 transition-all duration-1000 
            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <svg width="100%" height="10">
                <path 
                  d="M10,5 Q50,8 100,5 T200,7" 
                  stroke="#d1d5db" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="relative mb-2">
            <p className="leading-relaxed text-gray-700 font-mono text-sm sm:text-base pr-8">
              {project.description}
            </p>
            
            {isHovered && (
              <div className="absolute -right-2 top-0 space-y-2">
                {project.sketch.notes.map((note, i) => (
                  <div 
                    key={i} 
                    className="text-xs font-mono text-gray-400 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-4">
            <h4 className="font-mono font-semibold mb-3 text-gray-700 flex items-center">
              <span>Key Features:</span>
              <div className="ml-2 w-8 h-px bg-gray-400" />
            </h4>
            <ul className="space-y-2">
              {displayFeatures.map((feature, idx) => (
                <li 
                  key={idx}
                  className="flex items-start space-x-2 text-sm sm:text-base font-mono text-gray-600"
                >
                  <div className={`mt-1 w-3 h-3 border border-gray-400 flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                    isDrawn ? 'opacity-100' : 'opacity-50'
                  }`} style={{
                    transitionDelay: `${idx * 200}ms`
                  }}>
                    {isDrawn && <span className="text-xs">✓</span>}
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {project.features.length > 2 && (
              <button
                onClick={onToggleExpansion}
                className="mt-3 text-sm font-mono text-gray-500 hover:text-gray-700 transition-colors duration-200 underline"
              >
                {isExpanded ? 'Read Less ↑' : `Read More (${project.features.length - 2} more) ↓`}
              </button>
            )}
          </div>

          <div className="mb-4">
            <h4 className="font-mono font-semibold mb-3 text-gray-700">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="border border-dashed border-gray-400 px-2 py-1 text-xs sm:text-sm font-mono text-gray-600 bg-gray-50 transform hover:rotate-1 transition-transform duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Arrows and action buttons */}
          <div className="flex justify-between items-end mt-auto">
            <div className="flex space-x-2">
              {project.sketch.arrows.map((arrow, i) => (
                <span 
                  key={i} 
                  className={`text-gray-400 text-sm transition-all duration-300 ${
                    isHovered ? 'opacity-100 animate-bounce' : 'opacity-50'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {arrow}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-end">
              <button onClick={() => window.open(project.link, '_blank')} className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-3 py-2 text-sm sm:text-base hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
                View Code
              </button>
              {/* {project.status === 'Production' && (
                <button className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-3 py-2 text-sm sm:text-base hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
                  Live Demo
                </button>
              )} */}
            </div>
          </div>

          {/* Highlight corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gray-300" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gray-300" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gray-300" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gray-300" />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)`,
          backgroundSize: '100% 24px'
        }} />
        {/* Margin line */}
        <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16 relative">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              Projects
            </h2>

            <div className={`flex justify-center transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <svg width="240" height="40" className="sm:w-220">
                <path
                  d="M50,10 Q100,35 150,15 T250,20 T350,10"
                  stroke="#9ca3af"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset={isVisible ? "0" : "400"}
                  style={{ transition: 'stroke-dashoffset 1.5s ease-in-out 0.3s' }}
                />
              </svg>
            </div>

            <p className={`text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-mono transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              Each project tells a story of problem-solving and creative coding...
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-8xl ">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isExpanded={expandedProjects.has(project.id)}
                onToggleExpansion={() => toggleProjectExpansion(project.id)}
              />
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-1000 delay-1500 ${
            isVisible 
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="border-2 border-dashed border-gray-500 p-6 sm:p-8 bg-white inline-block transform -rotate-1 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-gray-800 mb-4 flex items-center justify-center">
                <span>Want to Collaborate?</span>
                <span className="ml-2 text-lg">🤝</span>
              </h3>
              <p className="text-gray-600 mb-6 font-mono text-sm sm:text-base leading-relaxed">
                Have a project in mind? Let's discuss your goals and bring it to life.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-50 transform hover:scale-105 hover:rotate-1 transition-all duration-300 text-sm sm:text-base"
              >
                Let's Start Building →
              </button>
              
              <div className="mt-4 flex justify-center space-x-4 text-gray-400">
                <span>✏️</span>
                <span>📝</span>
                <span>💡</span>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;