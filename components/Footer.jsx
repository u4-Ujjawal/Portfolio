'use client';

import { Mail, Linkedin, Heart } from 'lucide-react';

const year = new Date().getFullYear();

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  // { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg btn-amber flex items-center justify-center font-bold text-black text-sm">
                UC
              </div>
              <span className="text-white font-bold">Ujjwal Choudhary</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Digital Marketing Associate specializing in SEO, AI-powered marketing, and content strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-500 text-sm hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:ujjwalchoudhary12345.uc82@gmail.com"
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-amber-400 transition-colors"
              >
                <Mail size={14} />
                ujjwalchoudhary12345.uc82@gmail.com
              </a>
              <a
                href="https://in.linkedin.com/in/ujjawal-choudhary-bbba10257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-amber-400 transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {year} Ujjwal Choudhary. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-amber-400 fill-amber-400" /> in Indore, India
          </span>
        </div>
      </div>
    </footer>
  );
}
