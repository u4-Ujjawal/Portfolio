'use client';

import { useEffect, useRef } from 'react';
import { Sparkles, Briefcase, Globe, Bot } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: '2+ Years', sub: 'Experience', color: 'from-amber-500 to-yellow-400' },
  { icon: Globe, label: '1 Company', sub: '& Freelance', color: 'from-orange-500 to-amber-400' },
  { icon: Sparkles, label: 'Multi-Niche', sub: 'Content Expertise', color: 'from-yellow-500 to-amber-300' },
  { icon: Bot, label: 'AI-Powered', sub: 'Workflows', color: 'from-amber-600 to-yellow-500' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Get To Know Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            {/* Avatar */}
            <div className="reveal flex items-center gap-5 mb-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-400/50 amber-glow flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Ujjwal Choudhary"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">Ujjwal Choudhary</h3>
                <p className="text-amber-400 text-sm font-medium">Digital Marketing Associate</p>
                <p className="text-gray-500 text-sm">Indore, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="reveal space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-semibold">Digital Marketing Associate</span> with over{' '}
                <span className="text-amber-400 font-semibold">2 years</span> of full-time and freelance experience
                helping brands grow their online presence, rank higher on search engines, and connect meaningfully with
                their audiences.
              </p>
              <p>
                My expertise spans <span className="text-white font-semibold">SEO</span> (on-page, off-page &amp;
                technical), <span className="text-white font-semibold">LinkedIn growth strategy</span>,{' '}
                <span className="text-white font-semibold">email marketing</span>, and creating high-impact content
                across formats — from sales decks and brochures to webinars, podcasts, and short-form video.
              </p>
              <p>
                What sets me apart is my use of{' '}
                <span className="text-amber-400 font-semibold">generative AI tools</span> (ChatGPT, Claude, Gemini,
                Canva AI) to streamline research and content workflows. I&apos;m also optimizing content for the new
                frontier of{' '}
                <span className="text-white font-semibold">AI-driven search engines</span> — AEO/GEO across
                Perplexity, ChatGPT Search, and Gemini.
              </p>
              <p>
                Academically, I hold a{' '}
                <span className="text-white font-semibold">B.Tech in Computer Science</span> (Information &amp; Cyber
                Security), which gives me a unique technical lens when approaching digital marketing challenges.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:ujjwalchoudhary12345.uc82@gmail.com"
                className="btn-amber px-5 py-2.5 rounded-lg text-black font-semibold text-sm"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline px-5 py-2.5 rounded-lg text-amber-400 font-semibold text-sm"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="reveal grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, sub, color }) => (
              <div
                key={label}
                className="glass card-hover rounded-2xl p-6 text-center space-y-3"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto amber-glow`}
                >
                  <Icon size={22} className="text-black" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{label}</div>
                  <div className="text-gray-500 text-sm">{sub}</div>
                </div>
              </div>
            ))}

            {/* Education card */}
            <div className="glass card-hover rounded-2xl p-5 col-span-2 mt-0">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-400 text-sm font-bold">🎓</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">B.Tech — Computer Science</div>
                  <div className="text-amber-400 text-xs font-medium">Information &amp; Cyber Security</div>
                  <div className="text-gray-500 text-xs mt-1">
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore · 2021–2025 · CGPA: 7.2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
