'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, TrendingUp, Linkedin, Bot } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    title: 'SEO Growth Campaign',
    category: 'Search Engine Optimization',
    description:
      'Drove significant organic traffic growth for a B2B SaaS client through a comprehensive on-page and off-page SEO strategy. Conducted in-depth keyword research, optimized meta tags and schema markup, built quality backlinks, and ran monthly technical audits using Semrush and Google Search Console.',
    results: ['150%+ organic traffic increase', 'Top 5 rankings for 20+ keywords', 'Reduced bounce rate by 30%'],
    tags: ['On-Page SEO', 'Off-Page SEO', 'Semrush', 'GA4', 'Schema Markup', 'Link Building'],
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Brand Strategy',
    category: 'Social Media & Content',
    description:
      'Developed and executed a full LinkedIn growth strategy for a B2B technology brand. Built a consistent content calendar, crafted thought-leadership posts, optimized the company page, and grew follower engagement through strategic distribution across channels.',
    results: ['3x increase in page impressions', 'Consistent monthly follower growth', '40%+ avg. engagement rate boost'],
    tags: ['LinkedIn Growth', 'Content Calendar', 'Copywriting', 'Brand Strategy', 'Social Media Marketing'],
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Bot,
    title: 'AI-Powered Content System',
    category: 'AI & Automation',
    description:
      'Built a streamlined content production workflow using generative AI tools (ChatGPT, Claude, Gemini, Canva AI) to accelerate research, drafting, and design. Also optimized content for AEO/GEO — ensuring brand discoverability across AI-driven search engines like Perplexity and ChatGPT Search.',
    results: ['60%+ faster content production', 'AI search (AEO/GEO) visibility', 'Scaled multi-format content output'],
    tags: ['ChatGPT', 'Claude', 'Gemini', 'Canva AI', 'AEO / GEO', 'Content Strategy'],
    color: 'from-yellow-500 to-amber-300',
  },
];

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">What I've Built</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            A selection of campaigns and systems that delivered measurable results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, category, description, results, tags, color }) => (
            <div
              key={title}
              className="reveal glass card-hover rounded-2xl p-6 flex flex-col space-y-5"
            >
              {/* Icon + category */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center amber-glow`}
                >
                  <Icon size={22} className="text-black" />
                </div>
                <span className="glass-amber text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Results */}
              <div className="bg-amber-400/5 border border-amber-400/10 rounded-xl p-4 space-y-1.5">
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">Key Results</div>
                {results.map((r) => (
                  <div key={r} className="flex items-center gap-2 text-gray-300 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-badge px-2 py-0.5 rounded-md text-xs font-medium text-amber-400 bg-amber-400/5 border border-amber-400/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-1 mt-auto">
                <button className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors group">
                  View Case Study
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
