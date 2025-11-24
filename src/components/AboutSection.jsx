import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate lines being drawn
          const timer = setTimeout(() => {
            for (let i = 0; i < 5; i++) {
              setTimeout(() => {
                setLinesDrawn(prev => [...prev, i]);
              }, i * 300);
            }
          }, 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const textContent = {
    objective: "Hello, World! I’m Paras Sadafule — a passionate Full Stack Developer who loves turning ideas into functional, scalable, and user-friendly digital solutions.\n\nAs a Computer Science and Engineering student, I’ve built a strong foundation in React.js, Node.js, Java, and Python, blending creativity with clean engineering principles to bring projects to life. I thrive at the intersection of design and logic, crafting experiences that are both intuitive and technically sound.\n\nAs I explored different layers of development — from frontend design to backend architecture — I learned to approach problems with both creativity and structure. I enjoy crafting solutions that are not only functional but also intuitive and engaging.\n\nToday, I see full-stack development as the perfect balance between logic and creativity — where every line of code contributes to bringing ideas to life.",
    education: "Bachelor of Technology\n • Computer Science And Engineering\n • Nagesh Karajagi Orchid College Of Engineering And Technology\n• 2022-2026\n• GPA: 8.0",
    location: "Solapur, Maharashtra, India",
    email: "parassadafule21@gmail.com",
    phone: "+91 9404337618"
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Notebook paper texture */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #e5e7eb 23px, #e5e7eb 24px)`,
          backgroundSize: '100% 24px'
        }} />
        {/* Margin line */}
        <div className="absolute left-20 top-0 bottom-0 w-px bg-red-300" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-1 sm:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-4 text-gray-700 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              About Me
            </h2>
            <div className="flex justify-center">
              <svg width="200" height="20" className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <path
                  d="M20,15 Q50,10 80,12 T140,10 T180,15"
                  stroke="#6b7280"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="400"
                  strokeDashoffset={isVisible ? "0" : "400"}
                  style={{ transition: 'stroke-dashoffset 2s ease-in-out 0.5s' }}
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[repeat(2,1)] gap-8 sm:gap-12">
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="border-2 border-dashed border-gray-400 bg-gray-50/50 p-6 sm:p-8 transform rotate-1">
                <div className="border border-gray-300 p-4 sm:p-6 bg-white transform -rotate-1">
                  {/* <h3 className="text-lg sm:text-xl font-mono font-semibold mb-4 text-gray-700">
                    My Journey
                  </h3> */}
                  
                  {/* <div className="mb-4 space-y-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className={`h-px bg-gray-300 transition-all duration-1000 ${
                          linesDrawn.includes(i) ? 'w-full' : 'w-0'
                        }`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div> */}
                  
                  <div className="leading-relaxed text-gray-600 font-mono text-md space-y-4">
                    {textContent.objective.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
  
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
              <div className={`transition-all duration-1000 delay-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <div className="border-2 border-dashed border-gray-400 bg-white p-6 transform">
                  <div className="border-b border-gray-300 pb-2 m">
                    <h4 className="text-lg font-mono font-semibold text-gray-700 flex items-center">
                      📚 Education
                      <div className="ml-2 w-8 h-px bg-gray-400" />
                    </h4>
                  </div>
                  <div className="text-md mt-2 font-mono text-gray-600 whitespace-pre-line">
                    {textContent.education}
                  </div>
                  
                  <div className="mt-3 border-l-4 border-orange-500 pl-2">
                    <span className="text-sm font-mono text-gray-500">*GATE 2025 Qualified</span>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-900 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <div className="border-2 border-dashed border-gray-400 bg-white p-4 sm:p-6 ">
                  <div className="border-b border-gray-300 pb-4 mb-4">
                    <h4 className="font-mono font-semibold text-gray-700 flex items-center text-lg">
                      📋 Resume
                      <div className="ml-2 w-8 h-px bg-gray-400" />
                    </h4>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <p className="text-gray-600 font-mono text-md mb-4">
                      Download my resume to learn more about my experience, skills, and projects.
                    </p>
                    
                    <a
                      href="https://drive.google.com/uc?export=download&id=1ZKw8czJsh_nTjnOUbZEkQEZZ9GLBdQba"
                      download="Paras_Sadafule_Resume.pdf"
                      className="inline-flex items-center space-x-2 border-2 border-dashed border-gray-600 bg-white text-gray-600 font-mono hover:bg-gray-50 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 px-6 py-3 text-sm"
                    >
                      <span>📥</span>
                      <span>Download Resume</span>
                    </a>
                    
                    <p className="text-sm text-gray-500 font-mono mt-4">
                      PDF • Updated November 2025
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;