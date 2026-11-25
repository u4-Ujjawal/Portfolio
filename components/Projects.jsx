'use client';

import { useEffect, useRef } from 'react';
import { TrendingUp, Linkedin, Bot } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    title: 'SEO & AEO Growth Campaign',
    category: 'Search Engine Optimization',
    description:
      'Nearly tripled organic traffic for a B2B SaaS website within three months and took its AI search citations from zero to thousands per month. The strategy combined in-depth keyword research, on-page optimization, schema markup, quality link building, and content structured for AI search engines. Monthly technical audits in Semrush and Google Search Console kept the site healthy as it scaled.',
    results: [
      '~3x organic traffic growth in just 3 months',
      'From zero to thousands of monthly AI citations across AI search platforms',
      'Top 5 rankings for 20+ keywords',
      '30% lower bounce rate',
    ],
    tags: [
      'On-Page SEO',
      'Off-Page SEO',
      'AEO/GEO',
      'Semrush',
      'Google Search Console',
      'GA4',
      'Schema Markup',
      'Link Building',
    ],
    color: 'from-amber-500 to-yellow-400',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Growth & Newsletter Strategy',
    category: 'Social Media & Content',
    description:
      'Grew a LinkedIn following by about 70% in one year, entirely organically, and launched three LinkedIn newsletters with 5,000 subscribers each. The strategy combined a consistent content calendar, thought-leadership posts, a fully optimized profile, and a weekly newsletter cadence that built a loyal, returning audience. I also ran a 2-month content trial, publishing one post every day for 60 days, to test how consistency affects reach and growth.',
    results: [
      '~70% organic follower growth in 12 months',
      '3 newsletters launched, 5,000 subscribers each (15,000 combined)',
      '700-800 average readers per weekly edition on each newsletter (2,000+ combined weekly readers)',
      '60 posts in 60 days: a daily publishing trial run over 2 months',
    ],
    tags: [
      'LinkedIn Growth',
      'Newsletter Strategy',
      'Content Calendar',
      'Copywriting',
      'Brand Strategy',
      'Social Media Marketing',
    ],
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Bot,
    title: 'AI-Powered Content System',
    category: 'AI & Automation',
    description:
      'Built a streamlined content production workflow using generative AI tools (ChatGPT, Claude, Gemini, Canva AI) to speed up research, drafting, and design. I extended the system into AI video generation, turning written content into short-form videos without a traditional production setup. I also optimized content for AEO/GEO so brands show up in AI-driven search engines like Perplexity and ChatGPT Search.',
    results: [
      '60%+ faster content production',
      'AI video generation added to the workflow, turning one idea into blog, social, and video formats',
      'AEO/GEO visibility across AI search platforms',
      'Multi-format content output at scale',
    ],
    tags: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'Canva AI',
      'AI Video Generation',
      'AEO/GEO',
      'Content Strategy',
      'Workflow Automation',
    ],
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
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">What I Achieved</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Real outcomes from campaigns and systems that delivered measurable results.
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
                  <div key={r} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                    {r}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="skill-badge px-2 py-0.5 rounded-md text-xs font-medium text-amber-400 bg-amber-400/5 border border-amber-400/15"
                  >
                    {tag}
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
