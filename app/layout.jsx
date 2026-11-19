import './globals.css';

export const metadata = {
  title: 'Ujjwal Choudhary | Digital Marketing Associate',
  description:
    'Portfolio of Ujjwal Choudhary — Digital Marketing Associate specializing in SEO, Content Strategy, LinkedIn Growth, and AI-Powered Marketing.',
  keywords: 'Digital Marketing, SEO, Content Strategy, LinkedIn, AI Marketing, Ujjwal Choudhary',
  authors: [{ name: 'Ujjwal Choudhary' }],
  openGraph: {
    title: 'Ujjwal Choudhary | Digital Marketing Associate',
    description: 'SEO | Content & Social Media | AI-Powered Marketer',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
