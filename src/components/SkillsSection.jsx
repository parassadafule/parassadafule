import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [drawnSkills, setDrawnSkills] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((_, index) => {
            setTimeout(() => {
              setDrawnSkills(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    // PROGRAMMING LANGUAGES
    {
      name: 'Java',
      level: 90,

      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      doodles: ['{ }', 'class', 'public'],
      link: 'https://www.oracle.com/java/'
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      doodles: ['function', '=>', 'const'],
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    // FRAMEWORKS/TOOLS
    {
      name: 'React.js',
      level: 88,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      doodles: ['<>', 'jsx', 'hooks'],
      link: 'https://react.dev/'
    },
    {
      name: 'Node.js',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      doodles: ['npm', 'async', 'server'],
      link: 'https://nodejs.org/'
    },
    {
      name: 'TailwindCSS',
      level: 90,
      icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
      doodles: ['className', 'flex', 'bg-blue'],
      link: 'https://tailwindcss.com/'
    },
    {
      name: 'Java EE',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      doodles: ['Servlet', 'JSP', 'J2EE'],
      link: 'https://www.oracle.com/java/technologies/java-ee-glance.html'
    },
    {
      name: 'SQL',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      doodles: ['SELECT', 'FROM', 'WHERE'],
      link: 'https://www.w3schools.com/sql/'
    },
    {
      name: 'JDBC',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      doodles: ['Connection', 'Statement', 'ResultSet'],
      link: 'https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html'
    },
    {
      name: 'MySQL',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      doodles: ['CREATE', 'INSERT', 'JOIN'],
      link: 'https://www.mysql.com/'
      
    },
    {
      name: 'MongoDB',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      doodles: ['db', 'find()', 'NoSQL'],
      link: 'https://www.mongodb.com/'
    },
    {
      name: 'Git',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      doodles: ['commit', 'push', 'branch'],
      link: 'https://git-scm.com/'
    },
    {
      name: 'GitHub',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      doodles: ['pull', 'merge', 'fork'],
      link: 'https://github.com/'
    }
  ];

  const SkillCard = ({ skill, index }) => {
    const isHovered = hoveredSkill === index;
    const isDrawn = drawnSkills.includes(index);

    return (
      <div
        className={`transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${
          isDrawn 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms` 
        }}
        onMouseEnter={() => setHoveredSkill(index)}
        onMouseLeave={() => setHoveredSkill(null)}
        onClick={() => window.open(skill.link, '_blank')}
      >
        <div className={`border-2 border-dashed border-gray-400 bg-white rounded p-4 sm:p-6 h-full transform transition-all duration-300 ${
          isHovered ? 'rotate-1 border-gray-600' : 'rotate-0'
        }`}>
          {/* Icon with doodles */}
          <div className="text-center mb- relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto border-2 border-gray-400 border-dashed rounded-full flex items-center justify-center text-xl sm:text-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 relative group">
              <img src={skill.icon} alt={skill.name} 
                className="w-8 h-8 sm:w-10 sm:h-10 filter grayscale group-hover:filter-none transition-all duration-200" 
              />
              
              {/* Floating doodles on hover */}
              {isHovered && skill.doodles.map((doodle, i) => (
                <div
                  key={i}
                  className="absolute text-xs font-mono text-gray-500 animate-bounce"
                  style={{
                    top: `${-10 - i * 15}px`,
                    left: `${20 + i * 25}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  {doodle}
                </div>
              ))}
            </div>
            
            {/* Arrows pointing to icon */}
            <div className="absolute -top-2 -right-2">
              <svg width="20" height="20" className="text-gray-400">
                <path d="M2,18 L18,2 M13,2 L18,2 L18,7" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          {/* Skill Name with underline */}
          <h3 className="text-center font-mono font-semibold m2 sm:mb text-gray-700 text-sm sm:text-base relative">
            {skill.name}
            {/* <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-px bg-gray-400 transition-all duration-500 ${
              isHovered ? 'w-full' : 'w-0'
            }`} /> */}
          </h3>

          {/* Hand-drawn progress bar */}
          {/* <div className="mb-2">
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span className="text-gray-500 font-mono">Skill Level</span>
              <span className="text-gray-600 font-mono font-bold">{skill.level}%</span>
            </div>
            
            {/* Sketch-style progress bar 
            <div className="relative">
              <div className="w-full h-3 border-2 border-dashed border-gray-400 bg-white relative">
                <div 
                  className={`h-full bg-gray-300 transition-all duration-1500 ${
                    isDrawn ? '' : 'w-0'
                  }`}
                  style={{ 
                    width: isDrawn ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`,
                    background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 5px, #9ca3af 5px, #9ca3af 10px)'
                  }}
                />
              </div>
              
              {/* Hand-drawn tick marks 
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
            </div>
          </div> */}

          {/* Sketch notes */}
          {/* {isHovered && (
            <div className="mt-4 text-xs font-mono text-gray-500 border-l-2 border-gray-300 pl-2">
              <div className="opacity-70">
                ~ {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'} level
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      
      <div className="absolute inset-0 ">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)`,
          backgroundSize: '100% 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header with elements */}
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              Technical Skills
            </h2>
            
            {/* Sketch decorations
            <div className={`flex justify-center items-center space-x-4 mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-16 h-px bg-gray-400" style={{background: 'repeating-linear-gradient(90deg, #9ca3af, #9ca3af 5px, transparent 5px, transparent 10px)'}} />
              <span className="text-2xl">⚡</span>
              <div className="w-16 h-px bg-gray-400" style={{background: 'repeating-linear-gradient(90deg, #9ca3af, #9ca3af 5px, transparent 5px, transparent 10px)'}} />
            </div> */}
            
            {/* <p className={`text-lg text-gray-600 max-w-2xl mx-auto font-mono transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              "Hover over each skill to see the magic happen..."
            </p> */}
            
            {/* Bracket */}
            <div className={`mt-6 flex justify-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <svg width="300" height="30">
                <path 
                  d="M50,25 Q150,5 250,25" 
                  stroke="#9ca3af" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="300"
                  strokeDashoffset={isVisible ? "0" : "300"}
                  style={{ transition: 'stroke-dashoffset 2s ease-in-out 0.7s' }}
                />
              </svg>
            </div>
          </div>

          {/* Skills Grid */}
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