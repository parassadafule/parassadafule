import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(transparent, transparent 23px, #d1d5db 23px, #d1d5db 24px)`,
          backgroundSize: '100% 24px'
        }} />
      </div>

      <div className="text-center z-10 px-4 sm:px-6">

        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-dashed border-gray-600 bg-white transition-all duration-2000 ${
            isVisible ? 'animate-pulse' : ''
          }`}>
            <div className="w-full h-full rounded-full flex items-center justify-center relative">
              
              <div className={`absolute inset-2 border-2 border-gray-400 rounded-full transition-all duration-3000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} />
              <div className={`absolute inset-4 border border-gray-500 rounded-full transition-all duration-2000 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} />
              <div className="text-gray-600 text-xs font-mono">✏️</div>
            </div>
          </div>
        </div>

        <h1 className={`text-3xl sm:text-4xl md:text-6xl font-mono font-bold mb-4 text-gray-700 transition-all duration-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Paras Sadafule
        </h1>

        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`h-1 bg-gray-600 transition-all duration-1500 delay-1000 ${
            isVisible ? 'w-48 sm:w-60' : 'w-0'
          }`} style={{
            background: 'repeating-linear-gradient(90deg, #6b7280, #6b7280 10px, transparent 10px, transparent 15px)'
          }} />
        </div>

        <h2 className={`text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-600 font-mono transition-all duration-2000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Full Stack Developer
        </h2>

        <div className={`max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border-2 border-dashed border-gray-500 p-4 sm:p-6 bg-white/70 transform -rotate-1">
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-mono leading-relaxed">
              "Passionate developer exploring the intersection of software engineering and innovation — always learning, building, and growing"
            </p>
          </div>
        </div>

        <div className={`transition-all duration-2000 delay-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="relative border-2 border-gray-600 text-gray-600 font-mono px-8 py-3 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
            style={{
              borderRadius: '0',
              borderStyle: 'dashed'
            }}
          >
            <span className="relative z-10">Explore My Journey</span>
            <div className="absolute inset-1 border border-gray-400 pointer-events-none opacity-30" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-4000 ${
              isVisible ? 'opacity-30' : 'opacity-0'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.5}s`,
              animation: `sketchFloat ${4 + i * 0.3}s ease-in-out infinite`
            }}
          >

            {i % 3 === 0 && (
              <div className="w-6 h-6 border-2 border-gray-400" style={{borderStyle: 'dashed'}} />
            )}
            {i % 3 === 1 && (
              <div className="w-4 h-8 border-l-2 border-gray-400 transform rotate-45" />
            )}
            {i % 3 === 2 && (
              <div className="w-3 h-3 border-2 border-gray-400 rounded-full" style={{borderStyle: 'dotted'}} />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes sketchFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(${Math.random() * 360}deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-8px) rotate(${Math.random() * 360}deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) rotate(${Math.random() * 360}deg); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-5px) rotate(${Math.random() * 360}deg); 
            opacity: 0.5;
          }
        }
        
        @keyframes drawLine {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default LandingPage;