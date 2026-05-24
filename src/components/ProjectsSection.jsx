import React, { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [drawnProjects, setDrawnProjects] = useState([]);
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: "QMail - Quantum Secure Email Client",
      description:
        "A secure communication project focused on quantum-inspired email protection, custom server deployment, and fast key exchange workflows.",
      icon: "https://cdn-icons-png.flaticon.com/128/8777/8777742.png",
      technologies: ["React", "Node.js", "Quantum Key Distribution", "QRNG", "AWS EC2", "SMTP"],
      features: [
        "Developed QMail, a quantum-secured email system using Quantum Key Distribution for secure communication.",
        "Implemented a Quantum Random Number Generator workflow for generating secure keys.",
        "Deployed a custom email server on AWS EC2 using security groups, key pairs, and SSH.",
        "Focused on secure communication design and faster key exchange mechanisms.",
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
        "A full-stack quiz platform with secure authentication, role-based access, quiz management workflows, and interactive scoring.",
      icon: "https://cdn-icons-png.flaticon.com/128/5677/5677910.png",
      technologies: ["React", "Django REST", "PostgreSQL", "JWT", "Tailwind CSS"],
      features: [
        "Built the application using React, Django REST, and PostgreSQL.",
        "Applied JWT-based authentication with role-based access control for Admin and Student users.",
        "Created RESTful APIs for quiz CRUD operations, attempts, and result evaluation.",
        "Built an interactive quiz-taking interface with real-time scoring, validation, and responsive UI.",
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
      title: "GradLink - Alumni Management System",
      description:
        "A Java-based web application for structured alumni data management, authentication, and institution-focused record handling.",
      icon: "https://cdn-icons-png.flaticon.com/128/535/535623.png",
      technologies: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC"],
      features: [
        "Built the system using Java Servlets, JSP, JDBC, and MySQL.",
        "Implemented MVC architecture for structured and maintainable development.",
        "Developed authentication with session management for secure access.",
        "Created a database schema to support efficient alumni data management.",
      ],
      sketch: {
        mainDoodle: "Grad",
        arrows: ["<->", "/>", "<\\"],
        notes: ["MVC", "alumni", "data"],
      },
      link: "https://github.com/parassadafule/GradLink",
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
        className={`cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${
          isDrawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
        onMouseEnter={() => setHoveredProject(index)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div
          className={`border-2 border-dashed border-gray-400 bg-white p-4 sm:p-5 h-full min-h-[380px] sm:min-h-[420px] relative transform transition-all duration-300 flex flex-col ${
            isHovered ? "rotate-1 border-gray-600 shadow-lg" : "rotate-0"
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
                    className={`mt-1 w-3 h-3 border border-gray-400 flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                      isDrawn ? "opacity-100" : "opacity-50"
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
            <div className="flex space-x-2">
              {project.sketch.arrows.map((arrow, i) => (
                <span
                  key={i}
                  className={`text-gray-400 text-sm transition-all duration-300 ${
                    isHovered ? "opacity-100 animate-bounce" : "opacity-50"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {arrow}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open(project.link, "_blank")}
              className="border-2 border-dashed border-gray-600 text-gray-600 font-mono px-3 py-2 text-sm sm:text-base hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
            >
              View Code
            </button>
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
              className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Projects
            </h2>

            <div
              className={`flex justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
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

          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
