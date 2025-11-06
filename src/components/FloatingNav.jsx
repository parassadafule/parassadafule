import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);

    const sections = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'internships', label: 'Internships', icon: '💼' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Show navbar when user starts scrolling
      if (scrollPosition > 50 && !isVisible) {
        setIsVisible(true);
      }

      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      if (scrollPosition < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);    const scrollToSection = (sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={`fixed md:top-1/2 md:right-5 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 top-5 md:bottom-auto md:top-1/2 transform md:-translate-y-1/2 z-50 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-4 md:-translate-x-4'}`}>
            {/* Floating navbar */}
            <div className="rounded-2xl transform transition-transform duration-300">
                <div className="flex md:flex-col items-center backdrop-blur-sm md:backdrop-blur-none md:bg-transparent shadow-lg md:shadow-none rounded-full md:rounded-2xl p-2 md:p-0 mx-auto space-x-1 md:space-x-0 md:space-y-1 max-w-full overflow-x-auto md:overflow-x-visible">
                    {sections.map((section, index) => (
                        <React.Fragment key={section.id}>
                            <button
                                onClick={() => scrollToSection(section.id)}
                                className={`relative flex-shrink-0 w-12 h-12 md:w-full md:h-auto p-2 md:p-2 rounded-full md:rounded-lg font-mono text-sm transition-all duration-100 transform hover:scale-110 active:scale-95 ${activeSection === section.id
                                        ? 'bg-gray-100 text-gray-800 border-2 border-dashed border-gray-500 shadow-md'
                                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                    }`}>
                                <span className="flex flex-col items-center">
                                    <span className={`text-lg md:text-xl transition-all duration-300`}>
                                        {section.icon}
                                    </span>
                                </span>
                            </button>

                            {index < sections.length - 1 && (
                                <div className="w-px h-4 md:w-6 md:h-px bg-gray-300 transform md:-rotate-12 rotate-12 hidden sm:block" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FloatingNav;