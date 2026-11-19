'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Digital Marketer',
    company: 'Alphanext Technology Solutions',
    location: 'Indore, MP',
    period: 'July 2025 – Present',
    type: 'Full-Time',
    bullets: [
      'Optimize website pages with on-page SEO: keyword research, meta titles/descriptions, headings, image alt text, schema markup, internal linking',
      'Build website authority through off-page SEO: link building, directory submissions, social bookmarking, competitor backlink analysis, content distribution',
      'Grow LinkedIn presence through strategic content posting, engagement, and multi-channel distribution',
      'Plan and manage monthly content calendars aligned with campaign goals',
      'Design social media creatives and marketing visuals in Canva and Photoshop; edit video content in CapCut',
      'Run technical SEO audits using GA4, Google Search Console, Semrush, Ubersuggest; report in Excel and Google Sheets',
      'Manage and schedule social media content using Meta Business Suite',
      'Design sales decks using Canva AI and PowerPoint; write product brochure copy',
      'Plan and execute email marketing campaigns for lead engagement and brand communication',
      'Produce and promote webinars, coordinate podcast episodes, create show notes and repurposed content',
      'Optimize content for AI-driven search engines (AEO/GEO): Perplexity, ChatGPT Search, Gemini',
    ],
    tags: ['SEO', 'LinkedIn', 'Email Marketing', 'Content Strategy', 'AEO/GEO', 'GA4', 'Semrush'],
  },
  {
    role: 'Freelance Digital Content Creator & Social Media Executive',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'August 2024 – January 2025',
    type: 'Freelance',
    bullets: [
      'Designed banners and social media creatives in Canva and Photoshop for multiple clients',
      'Managed social media handles: content posting, scheduling, and audience engagement',
      'Created and edited Instagram Reels and short-form videos using CapCut',
      'Edited promotional and branded video content for client campaigns',
      'Delivered creative assets on deadline while coordinating closely with clients',
    ],
    tags: ['Canva', 'Photoshop', 'CapCut', 'Instagram Reels', 'Social Media', 'Video Editing'],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(90px)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Work History</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, #f59e0b 20%, #f59e0b 80%, transparent)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`reveal relative flex flex-col md:flex-row items-start gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-2 border-amber-400 bg-background items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>

                {/* Mobile dot */}
                <div className="md:hidden flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full border-2 border-amber-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">{exp.type}</span>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="md:w-1/2 glass card-hover rounded-2xl p-6 space-y-4">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                      <div className="text-amber-400 font-semibold text-sm mt-0.5">{exp.company}</div>
                    </div>
                    <span className="glass-amber text-amber-400 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-amber-400/60" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-amber-400/60" /> {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium text-amber-400/80 bg-amber-400/5 border border-amber-400/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
