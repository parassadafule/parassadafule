import React, { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [drawnProjects, setDrawnProjects] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  const projects = [
    {
      id: 1,
      title: "QMail - Quantum Secure Email Client",
      description:
        "QMail is an email client I built to explore secure communication using Quantum Key Distribution. It includes secure key generation, email encryption, and a custom email server setup.",
      icon: "https://cdn-icons-png.flaticon.com/128/8777/8777742.png",
      screenshots: [],
      technologies: [
        "React",
        "Node.js",
        "AWS EC2",
        "SMTP",
        "Quantum Key Distribution",
        "QRNG",
      ],
      features: [
        "Built the email client with React and Node.js for sending and receiving messages.",
        "Used Quantum Key Distribution concepts to generate and exchange encryption keys securely.",
        "Added a Quantum Random Number Generator workflow for creating random security keys.",
        "Set up a custom email server on AWS EC2 and configured it for SMTP communication.",
      ],
      sketch: {
        mainDoodle: "QMail",
        arrows: ["->", "/>", "\\>"],
        notes: ["QKD", "secure", "server"],
      },
      link: "https://github.com/parassadafule/QMail",
    },

    {
      id: 2,
      title: "QuizMaker - Online Quiz Application",
      description:
        "QuizMaker is a full-stack quiz application where admins can create and manage quizzes, while students can attempt them and view their scores.",
      icon: "https://cdn-icons-png.flaticon.com/128/5677/5677910.png",
      screenshots: [
        "/projects/QuizMaker/AdminDashboard.png",
        "/projects/QuizMaker/AdminLogin.png",
        "/projects/QuizMaker/AdminProfile.png",
        "/projects/QuizMaker/AdminQuizHistory.png",
        "/projects/QuizMaker/AdminRegister.png",
        "/projects/QuizMaker/CreateQuiz.png",
        "/projects/QuizMaker/MainDashboard.png",
        "/projects/QuizMaker/QuizArea.png",
        "/projects/QuizMaker/QuizEdit.png",
        "/projects/QuizMaker/QuizResults.png",
        "/projects/QuizMaker/QuizShare.png",
        "/projects/QuizMaker/StudentDashboard.png",
        "/projects/QuizMaker/StudentLogin.png",
        "/projects/QuizMaker/StudentProfile.png",
        "/projects/QuizMaker/StudentQuizHistory.png",
        "/projects/QuizMaker/StudentRegister.png",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Django REST Framework",
        "Python",
        "PostgreSQL",
        "JWT",
        "Tailwind CSS",
      ],
      features: [
        "Built separate flows for Admins to manage quizzes and Students to attempt them.",
        "Added JWT login with different permissions for Admin and Student accounts.",
        "Created APIs for creating, editing, deleting, and retrieving quizzes and questions.",
        "Added quiz attempts, answer validation, automatic scoring, and result viewing.",
      ],
      sketch: {
        mainDoodle: "Quiz",
        arrows: ["<->", "/>", "<\\"],
        notes: ["JWT", "quiz", "scores"],
      },
      link: "https://github.com/parassadafule/QuizMaker",
    },

    {
      id: 3,
      title: "TechBit - AI Developer Community Platform",
      description:
        "TechBit is a platform I built for sharing and finding technical content. I also added an AI-based search and question-answering feature using RAG and a local LLM.",
      icon: "https://cdn-icons-png.flaticon.com/128/4413/4413842.png",
      screenshots: [
        "/projects/TechBit/Login.png",
        "/projects/TechBit/Feed%20Page.png",
        "/projects/TechBit/Post%20Card.png",
        "/projects/TechBit/Trend%20Page.png",
        "/projects/TechBit/Search%20Page.png",
        "/projects/TechBit/AI%20Chat.png",
        "/projects/TechBit/Profile%20Page.png",
        "/projects/TechBit/Notification.png",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "Passport",
        "Ollama"
      ],
      features: [
        "Built the platform for developers to share, read, and discover technical content.",
        "Added an AI question-answering feature that uses project content as context.",
        "Used RAG to retrieve relevant content before sending it to the local LLM.",
        "Set up Ollama to run the LLM and embedding models locally instead of relying on a cloud AI service.",
        "Connected the React frontend with a Node.js and Express.js backend backed by MongoDB.",
      ],
      sketch: {
        mainDoodle: "TechBit",
        arrows: ["<->", "/>", "\\>"],
        notes: ["RAG", "AI", "Dev"],
      },
      link: "https://github.com/parassadafule/TechBit",
    },

    {
      id: 4,
      title: "GradLink - Alumni Management System",
      description:
        "GradLink is a Java web application I developed to help colleges manage alumni information. It provides login, session management, and database operations for maintaining alumni records.",
      icon: "https://cdn-icons-png.flaticon.com/128/535/535623.png",
      screenshots: [
        "/projects/GradLink/Dashboard.png",
        "/projects/GradLink/Stories.png",
        "/projects/GradLink/Mentorship.png",
        "/projects/GradLink/About.png",
        "/projects/GradLink/Profile.png",
      ],
      technologies: [
        "Java",
        "Jakarta Servlet API",
        "JSP",
        "JDBC",
        "MySQL",
      ],
      features: [
        "Built the application using Java Servlets and JSP with MySQL as the database.",
        "Used MVC architecture to keep the frontend, business logic, and database code organized.",
        "Added login and session handling so only authenticated users can access the system.",
        "Created database operations for adding, updating, searching, and managing alumni records.",
      ],
      sketch: {
        mainDoodle: "Grad",
        arrows: ["<->", "/>", "<\\"],
        notes: ["MVC", "alumni", "data"],
      },
      link: "https://github.com/parassadafule/GradLink",
    },

    {
      id: 5,
      title: "Store Rating Platform - Product Feedback System",
      description:
        "This project is a simple platform where users can rate stores and leave reviews. I built it to work with PostgreSQL and handle the rating and review data through the backend.",
      icon: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
      screenshots: [
        "/projects/StoreRating/login.png",
        "/projects/StoreRating/signup.png",
        "/projects/StoreRating/user-dashboard.png",
        "/projects/StoreRating/my-ratings.png",
        "/projects/StoreRating/user-profile.png",
        "/projects/StoreRating/admin-dashboard.png",
        "/projects/StoreRating/all-stores.png",
        "/projects/StoreRating/admin-profile.png",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT",
        "Tailwind CSS"
      ],
      features: [
        "Built a platform where users can give ratings and write reviews for stores.",
        "Used PostgreSQL to store users, stores, ratings, and review information.",
        "Added database functions using PLpgSQL to handle rating-related operations.",
        "Created the frontend interactions for submitting and viewing store ratings and reviews.",
      ],
      sketch: {
        mainDoodle: "Store",
        arrows: ["<->", "/>", "<\\"],
        notes: ["ratings", "reviews", "DB"],
      },
      link: "https://github.com/parassadafule/store-rating-platform",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          projects.forEach((_, index) => {
            setTimeout(() => {
              setDrawnProjects((prev) => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.classList.add("screenshot-gallery-open");
    document.body.style.overflow = "hidden";

    return () => {
      document.body.classList.remove("screenshot-gallery-open");
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const ProjectCard = ({ project, index, isExpanded, onToggleExpansion }) => {
    const isHovered = hoveredProject === index;
    const isDrawn = drawnProjects.includes(index);
    const displayFeatures = isExpanded ? project.features : project.features.slice(0, 2);

    return (
      <div
        className={`cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${isDrawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        style={{ transitionDelay: `${index * 200}ms` }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div
          className={`border-2 border-dashed border-gray-400 bg-white p-4 sm:p-5 h-full min-h-[380px] sm:min-h-[420px] relative transform transition-all duration-300 flex flex-col ${isHovered ? "rotate-1 border-gray-600 shadow-lg" : "rotate-0"
            }`}
        >
          <div className="absolute -left-4 top-8 space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 border-2 border-gray-300 rounded-full bg-white" />
            ))}
          </div>

          <div className="border-b border-gray-300 pb-4 mb-4 relative">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-10 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-2xl bg-gray-50 transform rotate-">
                  <img src={project.icon} alt={project.title} className="filter grayscale p-1" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-mono font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="text-gray-400 font-mono text-sm">{project.sketch.mainDoodle}</div>
            </div>

            <div className={`mt-2 transition-all duration-1000 ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <svg width="100%" height="10">
                <path d="M10,5 Q50,8 100,5 T200,7" stroke="#d1d5db" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          <div className="relative mb-2">
            <p className="leading-relaxed text-gray-700 font-mono text-sm sm:text-base">
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
              <span>Key Highlights:</span>
              <div className="ml-2 w-8 h-px bg-gray-400" />
            </h4>
            <ul className="space-y-2">
              {displayFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm sm:text-base font-mono text-gray-600">
                  <div
                    className={`mt-1 w-3 h-3 border border-gray-400 flex-shrink-0 flex items-center justify-center transition-all duration-500 ${isDrawn ? "opacity-100" : "opacity-50"
                      }`}
                    style={{ transitionDelay: `${idx * 200}ms` }}
                  >
                    {isDrawn && <span className="text-xs">+</span>}
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
                {isExpanded ? "Read Less <-" : `Read More (${project.features.length - 2} more) ->`}
              </button>
            )}
          </div>

          <div className="mb-4">
            <h4 className="font-mono font-semibold mb-3 text-gray-700">Tech Stack:</h4>
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

          <div className="flex justify-between items-end mt-auto">
            <div className="flex items-center space-x-2">
              {project.sketch.arrows.map((arrow, i) => (
                <span
                  key={i}
                  className={`text-gray-400 text-sm transition-all duration-300 ${isHovered ? "opacity-100 animate-bounce" : "opacity-50"
                    }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {arrow}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {project.screenshots?.length > 0 && (
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedProject(project);
                    setSelectedScreenshot(0);
                  }}
                  className="border-2 border-dashed border-gray-500 text-gray-600 font-mono px-3 py-2 text-sm sm:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200"
                >
                  Preview
                </button>
              )}

              <button
                onClick={(event) => {
                  event.stopPropagation();
                  window.open(project.link, "_blank");
                }}
                className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-3 py-2 text-sm sm:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-200"
              >
                View Code
              </button>
            </div>
          </div>

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
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)",
            backgroundSize: "100% 24px",
          }}
        />
        <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Projects
            </h2>

            <div
              className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              <svg width="240" height="40" className="sm:w-220">
                <path
                  d="M50,10 Q100,35 150,15 T250,20 T350,10"
                  stroke="#9ca3af"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset={isVisible ? "0" : "400"}
                  style={{ transition: "stroke-dashoffset 1.5s ease-in-out 0.3s" }}
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-8xl">
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

          {selectedProject && (
            <div
              className="fixed inset-0 z-[9999] h-screen w-screen bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <div
                className="relative w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between px-5 py-4 border-b">
                  <div>
                    <h3 className="font-mono font-bold text-lg text-gray-800">
                      {selectedProject.title}
                    </h3>
                    <p className="font-mono text-sm text-gray-500">
                      {selectedScreenshot + 1} / {selectedProject.screenshots.length}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close screenshot gallery"
                    className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 text-xl"
                  >
                    ×
                  </button>
                </div>

                <div className="relative bg-gray-100 flex items-center justify-center p-4 sm:p-8">
                  <img
                    src={selectedProject.screenshots[selectedScreenshot]}
                    alt={`${selectedProject.title} screenshot ${selectedScreenshot + 1}`}
                    className="max-h-[65vh] max-w-full object-contain shadow-lg"
                  />

                  {selectedScreenshot > 0 && (
                    <button
                      onClick={() => setSelectedScreenshot((prev) => prev - 1)}
                      aria-label="Previous screenshot"
                      className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:bg-white hover:scale-110 transition-all"
                    >
                      ‹
                    </button>
                  )}

                  {selectedScreenshot < selectedProject.screenshots.length - 1 && (
                    <button
                      onClick={() => setSelectedScreenshot((prev) => prev + 1)}
                      aria-label="Next screenshot"
                      className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-2xl text-gray-700 hover:bg-white hover:scale-110 transition-all"
                    >
                      ›
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="border-2 border-dashed border-gray-500 p-6 sm:p-8 bg-white inline-block transform -rotate-1 max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-gray-800 mb-4">
                Open to meaningful software opportunities
              </h3>
              <p className="text-gray-600 mb-6 font-mono text-sm sm:text-base leading-relaxed">
                I am looking for roles where I can contribute with strong fundamentals,
                disciplined learning, and hands-on development experience.
              </p>
              <button
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-4 sm:px-6 py-2 sm:py-3 hover:bg-gray-50 transform hover:scale-105 hover:rotate-1 transition-all duration-300 text-sm sm:text-base"
              >
                Let's Connect →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
