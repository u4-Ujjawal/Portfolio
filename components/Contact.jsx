'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ujjwalchoudhary12345.uc82@gmail.com',
    href: 'mailto:ujjwalchoudhary12345.uc82@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7354076475',
    href: 'tel:+917354076475',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ujjawal-choudhary',
    href: 'https://in.linkedin.com/in/ujjawal-choudhary-bbba10257',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indore, Madhya Pradesh, India',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Portfolio Enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:ujjwalchoudhary12345.uc82@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(90px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to discuss a collaboration? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info Cards — left col */}
          <div className="reveal lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass card-hover rounded-2xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center flex-shrink-0 amber-glow">
                  <Icon size={18} className="text-black" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-amber-400 transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <div className="text-white text-sm font-medium">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="glass-amber rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently open to full-time roles, freelance projects, and exciting collaborations in digital marketing.
              </p>
            </div>
          </div>

          {/* Contact Form — right col */}
          <div className="reveal lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 size={56} className="text-amber-400" />
                  <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 btn-outline px-5 py-2.5 rounded-lg text-amber-400 font-semibold text-sm"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-glass w-full rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input-glass w-full rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Collaboration"
                      className="input-glass w-full rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or how I can help..."
                      className="input-glass w-full rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-amber w-full py-3.5 rounded-xl text-black font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
