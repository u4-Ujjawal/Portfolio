'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Linkedin, ArrowRight } from 'lucide-react';

const roles = [
  'Digital Marketer',
  'SEO Specialist',
  'Content Strategist',
  'AI-Powered Marketer',
  'LinkedIn Growth Expert',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="blob-2 absolute w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #d97706 0%, transparent 70%)',
            bottom: '15%',
            right: '10%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="blob-3 absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)',
            top: '50%',
            left: '55%',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-2 mb-6 text-amber-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Available for Opportunities
        </div>

        {/* Profile Image */}
        <div className="mx-auto mb-6 relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 amber-glow">
          <div className="w-full h-full rounded-full overflow-hidden bg-surface">
            <img
              src="/profile.jpg"
              alt="Ujjwal Choudhary"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Ujjwal Choudhary</span>
        </h1>

        {/* Typing role */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10 flex items-center justify-center gap-2">
          <span>I&apos;m a </span>
          <span className="text-amber-400 typing-cursor min-w-[180px] text-left">
            {displayedRole}
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
          Digital Marketing Associate with <span className="text-amber-400 font-semibold">2+ years</span> of experience
          driving brand visibility, organic growth, and sales enablement through SEO,
          AI-powered workflows, and multi-format content creation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-amber flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-black text-base w-full sm:w-auto"
          >
            View My Work <ArrowRight size={18} />
          </button>
          <a
            href="/Ujjwal_Choudhary_Resume.pdf"
            download="Ujjwal_Choudhary_Resume.pdf"
            className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-amber-400 text-base w-full sm:w-auto"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://in.linkedin.com/in/ujjawal-choudhary-bbba10257"
            target="_blank"
            rel="noopener noreferrer"
            className="glass w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="mailto:ujjwalchoudhary12345.uc82@gmail.com"
            className="glass w-11 h-11 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors mx-auto group"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce group-hover:text-amber-400" />
        </button>
      </div>
    </section>
  );
}
