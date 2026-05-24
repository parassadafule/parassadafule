import React, { useState, useEffect } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [drawnSkills, setDrawnSkills] = useState([]);

  const skills = [
    { name: "Java", note: "OOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", doodles: ["class", "DSA", "OOP"] },
    { name: "JavaScript", note: "Web Logic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", doodles: ["function", "API", "ES6"] },
    { name: "SQL", note: "Queries", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", doodles: ["SELECT", "JOIN", "DBMS"] },
    { name: "React.js", note: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", doodles: ["jsx", "hooks", "UI"] },
    { name: "Node.js", note: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", doodles: ["server", "npm", "async"] },
    { name: "Express", note: "APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", doodles: ["routes", "REST", "auth"] },
    { name: "MySQL", note: "Relational", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", doodles: ["schema", "tables", "joins"] },
    { name: "MongoDB", note: "NoSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", doodles: ["docs", "db", "queries"] },
    { name: "GitHub", note: "Versioning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", doodles: ["commit", "push", "repo"] },
    { name: "DBMS", note: "Core Subject", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", doodles: ["design", "ER", "SQL"] },
    { name: "DSA", note: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", doodles: ["arrays", "trees", "logic"] },
    { name: "OOP", note: "Core Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", doodles: ["objects", "classes", "design"] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((_, index) => {
            setTimeout(() => {
              setDrawnSkills((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ skill, index }) => {
    const isHovered = hoveredSkill === index;
    const isDrawn = drawnSkills.includes(index);

    return (
      <div
        className={`transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${
          isDrawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div
          className={`border-2 border-dashed border-gray-400 bg-white rounded p-4 sm:p-6 h-full transform transition-all duration-300 ${
            isHovered ? "rotate-1 border-gray-600" : "rotate-0"
          }`}
        >
          <div className="text-center relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto border-2 border-gray-400 border-dashed rounded-full flex items-center justify-center text-xl sm:text-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 relative group">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 filter grayscale group-hover:filter-none transition-all duration-200"
              />

              {isHovered &&
                skill.doodles.map((doodle, i) => (
                  <div
                    key={i}
                    className="absolute text-xs font-mono text-gray-500 animate-bounce"
                    style={{
                      top: `${-10 - i * 15}px`,
                      left: `${20 + i * 20}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {doodle}
                  </div>
                ))}
            </div>
          </div>

          <h3 className="text-center font-mono font-semibold mt-4 text-gray-700 text-sm sm:text-base">
            {skill.name}
          </h3>
          <p className="text-center text-xs sm:text-sm font-mono text-gray-500 mt-2">{skill.note}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Technical Skills
            </h2>

            <p
              className={`text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-mono transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A resume-aligned mix of programming, web development, databases, and
              computer science fundamentals.
            </p>

            <div
              className={`mt-6 flex justify-center transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <svg width="300" height="30">
                <path
                  d="M50,25 Q150,5 250,25"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="300"
                  strokeDashoffset={isVisible ? "0" : "300"}
                  style={{ transition: "stroke-dashoffset 2s ease-in-out 0.7s" }}
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
