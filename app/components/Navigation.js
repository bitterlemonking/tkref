'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">The Mindful Bridge</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="hover:text-pink-500">Services</a>
          <a href="#about" className="hover:text-pink-500">About</a>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <div className="flex flex-col items-center gap-4">
            <a href="#services" className="hover:text-pink-500">Services</a>
            <a href="#about" className="hover:text-pink-500">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};