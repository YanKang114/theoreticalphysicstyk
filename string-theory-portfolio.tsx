import React, { useState } from 'react';
import { Menu, X, ChevronRight, Mail, Book, Database, User, Home } from 'lucide-react';

const StringTheoryAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-80">
    {/* SVG content from above */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-150 -150 300 300" className="w-full h-full max-w-2xl">
      {/* All the SVG content from above */}
      <defs>
        <linearGradient id="surfaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00ffff">
            <animate attributeName="stop-color" 
              values="#00ffff;#7b2ff7;#00ffff"
              dur="5s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stopColor="#7b2ff7">
            <animate attributeName="stop-color"
              values="#7b2ff7;#00ffff;#7b2ff7"
              dur="5s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <g>
        <path d="M-100,0 C-80,-80 -40,-100 0,-60 C40,-20 80,-80 100,0 C80,80 40,100 0,60 C-40,20 -80,80 -100,0" fill="none" stroke="url(#surfaceGradient)" strokeWidth="1">
          <animate attributeName="d" 
            values="
              M-100,0 C-80,-80 -40,-100 0,-60 C40,-20 80,-80 100,0 C80,80 40,100 0,60 C-40,20 -80,80 -100,0;
              M-100,20 C-60,-60 -20,-80 0,-40 C20,0 60,-60 80,20 C60,100 20,80 0,40 C-20,0 -60,60 -100,20;
              M-100,0 C-80,-80 -40,-100 0,-60 C40,-20 80,-80 100,0 C80,80 40,100 0,60 C-40,20 -80,80 -100,0"
            dur="10s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
);

const StringTheoryPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Background with subtle gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"/>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"/>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
                STRING THEORY LAB
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['DIMENSIONS', 'RESEARCH', 'PUBLICATIONS', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <StringTheoryAnimation />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500">
            String Theory Research
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-cyan-200">
            Exploring the fundamental vibrations of the universe
          </p>
          <a
            href="#research"
            className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-900/30 border border-cyan-500/50 hover:bg-cyan-900/50 transition-all duration-300"
          >
            Enter Higher Dimensions
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Research Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'M-Theory',
            'Calabi-Yau Manifolds',
            'Supersymmetry',
            'Brane Cosmology',
            'Quantum Gravity',
            'Holographic Universe'
          ].map((topic) => (
            <div key={topic} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg -m-1 animate-pulse group-hover:animate-none transition-all duration-300"/>
              <div className="relative p-6 backdrop-blur-lg rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">{topic}</h3>
                <p className="text-gray-400">
                  Advanced research into the multidimensional nature of spacetime and fundamental strings...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg blur-xl"/>
            <div className="relative backdrop-blur-lg rounded-lg border border-cyan-500/20 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300">Interdimensional Contact Portal</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="DESIGNATION IN MULTIVERSE"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/20 focus:border-cyan-500/40 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="INTERDIMENSIONAL CONTACT FREQUENCY"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/20 focus:border-cyan-500/40 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="TRANSMIT ACROSS DIMENSIONS"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-cyan-500/20 focus:border-cyan-500/40 outline-none transition-all duration-300 h-32"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-900/30 border border-cyan-500/50 rounded-lg hover:bg-cyan-900/50 transition-all duration-300"
                >
                  INITIATE DIMENSIONAL TRANSMISSION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-cyan-400">
          <p>STRING THEORY RESEARCH INITIATIVE © 2025 | ALL DIMENSIONS PRESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default StringTheoryPortfolio;
