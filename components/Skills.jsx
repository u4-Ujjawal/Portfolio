'use client';

import { useEffect, useRef } from 'react';
import {
  Search, Bot, Megaphone, Palette, BarChart2, Presentation,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Search,
    title: 'SEO',
    color: 'from-amber-500 to-yellow-400',
    skills: [
      'On-Page SEO', 'Off-Page SEO', 'Technical SEO Audit', 'Keyword Research',
      'Meta Tags Optimization', 'Content Optimization', 'Schema Markup',
      'Link Building', 'Directory Submission', 'Social Bookmarking',
      'Competitor Analysis', 'Internal Linking',
    ],
  },
  {
    icon: Bot,
    title: 'AI & LLMs',
    color: 'from-orange-500 to-amber-400',
    skills: [
      'ChatGPT', 'Claude', 'Gemini', 'Canva AI',
      'AEO / GEO Optimization', 'Perplexity Search', 'ChatGPT Search',
      'AI-Powered Content Workflows', 'Prompt Engineering',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    color: 'from-yellow-500 to-amber-300',
    skills: [
      'Social Media Marketing', 'LinkedIn Growth Strategy', 'Content Calendar Planning',
      'Content Marketing', 'Email Marketing', 'Brand Visibility',
      'Lead Engagement', 'Campaign Management', 'Audience Engagement',
    ],
  },
  {
    icon: Palette,
    title: 'Creative & Content',
    color: 'from-amber-600 to-yellow-500',
    skills: [
      'Graphic Design', 'Banner Design', 'Social Media Creatives',
      'Instagram Reels Creation', 'Short-Form Video Editing',
      'Video Editing (CapCut)', 'Copywriting', 'Adobe Photoshop',
      'Canva', 'Webinar Production', 'Podcast Coordination', 'Show Notes',
    ],
  },
  {
    icon: BarChart2,
    title: 'Tools & Analytics',
    color: 'from-amber-500 to-orange-400',
    skills: [
      'GA4', 'Google Search Console', 'Semrush', 'Ubersuggest',
      'Meta Business Suite', 'Microsoft Excel', 'Google Sheets',
      'PowerPoint', 'CapCut', 'Adobe Photoshop',
    ],
  },
  {
    icon: Presentation,
    title: 'Sales Enablement',
    color: 'from-yellow-400 to-amber-500',
    skills: [
      'Sales Deck Design (Canva AI)', 'Sales Deck Design (PowerPoint)',
      'Product Brochure Copywriting', 'Webinar Promotion',
      'Content Repurposing', 'B2B Content Strategy',
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div
        className="absolute left-0 top-1/3 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">What I Know</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit built over 2+ years of hands-on digital marketing experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ icon: Icon, title, color, skills }) => (
            <div key={title} className="reveal glass card-hover rounded-2xl p-6 space-y-4">
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon size={18} className="text-black" />
                </div>
                <h3 className="text-white font-bold text-base">{title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-2.5 py-1 rounded-md text-xs font-medium text-amber-400 bg-amber-400/5 border border-amber-400/15 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
