import React, { useState, useEffect } from "react";

const InternshipsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [drawnElements, setDrawnElements] = useState([]);

  const experiences = [
    {
      company: "NextSquare Technologies",
      website: "https://nextsquaretech.com/",
      roles: [
        {
          title: "Software Developer Intern",
          employmentType: "Internship",
          period: "Sep 2024 - Feb 2025",
          responsibilities: [
            "Designed, improved, and maintained the company website using React.js and Node.js, ensuring a smooth, responsive, and engaging user experience.",
            "Optimized performance and improved responsiveness across the company website.",
            "Collaborated with team members to implement features and fix bugs efficiently.",
            "Managed deployment activities and supported the smooth functioning of web applications.",
          ],
          technologies: [
            "React.js",
            "Node.js",
            "JavaScript",
            "Responsive UI",
            "Deployment",
            "Performance Optimization",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          ["header", "internship"].forEach((element, index) => {
            setTimeout(() => {
              setDrawnElements((prev) => [...prev, element]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("internships");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="internships" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)",
            backgroundSize: "100% 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Internship Experience
            </h2>
            <div className="flex justify-center">
              <svg
                width="200"
                height="20"
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <path
                  d="M20,15 Q50,10 80,12 T140,10 T180,15"
                  stroke="#6b7280"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset={isVisible ? "0" : "400"}
                  style={{ transition: "stroke-dashoffset 2s ease-in-out 0.5s" }}
                />
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, expIndex) => (
              <div
                key={expIndex}
                className={`transition-all duration-1000 ${
                  drawnElements.includes("internship")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="border-2 border-dashed border-gray-400 bg-white p-6 sm:p-8 transform rotate-1 max-w-4xl mx-auto">
                  <div className="border border-gray-300 p-4 sm:p-6 bg-white transform -rotate-1">
                    <div className="border-b border-gray-300 pb-4 mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl sm:text-2xl font-mono font-bold text-gray-800">
                          {experience.company}
                        </h3>
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-md font-mono text-blue-600 hover:text-blue-800 mt-2 sm:mt-0"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {experience.roles.map((role, roleIndex) => (
                        <div key={roleIndex}>
                          <div className="mb-4">
                            <h4 className="text-lg sm:text-xl font-mono font-bold text-gray-700 flex items-center">
                              <span className="mr-1">&lt;/&gt;</span>
                              {role.title}
                            </h4>
                          </div>

                          <div className="mb-6 border-l-2 border-gray-200 ml-4 pl-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-md font-mono text-gray-600 mb-4">
                              <span className="flex items-center">
                                <span className="font-semibold">Type:</span>
                                <span className="ml-2">{role.employmentType}</span>
                              </span>
                              <span className="flex items-center">
                                <span className="font-semibold">Period:</span>
                                <span className="ml-2">{role.period}</span>
                              </span>
                            </div>
                            <div className="space-y-3 ml-1">
                              {role.responsibilities.map((responsibility, respIndex) => (
                                <div
                                  key={respIndex}
                                  className={`flex items-start space-x-3 transition-all duration-1000 ${
                                    drawnElements.includes("internship") ? "opacity-100" : "opacity-0"
                                  }`}
                                  style={{
                                    transitionDelay: `${(expIndex * 2 + roleIndex + respIndex) * 200}ms`,
                                  }}
                                >
                                  <div className="mt-2 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0" />
                                  <p className="text-gray-600 font-mono text-sm sm:text-base leading-relaxed">
                                    {responsibility}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 ml-3">
                            {role.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="border border-dashed border-gray-400 px-2 py-1 text-xs sm:text-sm font-mono text-gray-600 bg-gray-50 transform hover:rotate-1 transition-transform duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-gray-300" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-gray-300" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-gray-300" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
