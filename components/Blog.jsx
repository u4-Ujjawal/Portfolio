'use client';

import { useEffect, useRef } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    category: 'AI & SEO',
    title: 'The Future of AEO: Optimizing for AI Search Engines',
    excerpt:
      'As search shifts from Google blue links to AI-generated answers on Perplexity, ChatGPT, and Gemini, brands need a new playbook. Here\'s how I approach Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to stay discoverable in the AI era.',
    readTime: '6 min read',
    date: 'Nov 2025',
    color: 'from-amber-500 to-yellow-400',
    emoji: '🤖',
  },
  {
    category: 'Productivity',
    title: 'How I Use ChatGPT to Speed Up SEO Research by 60%',
    excerpt:
      'From keyword clustering to competitor analysis, generative AI has completely transformed my SEO workflow. I walk through my exact prompting system and the specific use cases where AI saves hours every single week.',
    readTime: '5 min read',
    date: 'Oct 2025',
    color: 'from-orange-500 to-amber-400',
    emoji: '⚡',
  },
  {
    category: 'LinkedIn',
    title: 'LinkedIn Content Strategy That Actually Works in 2025',
    excerpt:
      'Most LinkedIn advice is outdated or generic. After managing B2B LinkedIn pages and growing organic impressions 3x, here\'s the content framework, posting cadence, and engagement strategy that consistently delivers results.',
    readTime: '7 min read',
    date: 'Sep 2025',
    color: 'from-yellow-500 to-amber-300',
    emoji: '📈',
  },
];

export default function Blog() {
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
    <section id="blog" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Thoughts & Insights</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Sharing what I learn about SEO, AI-powered marketing, and digital growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ category, title, excerpt, readTime, date, color, emoji }) => (
            <article
              key={title}
              className="reveal glass card-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            >
              {/* Top banner */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${color}`}
              />

              <div className="p-6 flex flex-col flex-1 space-y-4">
                {/* Emoji + category + date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <span className="glass-amber text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {category}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs">{date}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base leading-snug group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <Clock size={12} />
                    {readTime}
                  </span>
                  <button className="flex items-center gap-1 text-amber-400 text-xs font-semibold hover:text-amber-300 transition-colors group/btn">
                    Read More
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
