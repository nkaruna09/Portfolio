import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t" style={{ borderColor: 'var(--border)' }}>
      {/* Organic dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1.5" fill="var(--neon-cyan)" />
              <circle cx="75" cy="50" r="1" fill="var(--neon-teal)" />
              <circle cx="50" cy="75" r="1.2" fill="var(--light-blue)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4" style={{ color: 'var(--neon-teal)' }}>
              Nithika Karunamoorthy
            </h3>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              Software Engineering & Management student passionate about creating 
              innovative solutions and bridging technology with business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--foreground)' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="transition-colors hover:underline"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="transition-colors hover:underline"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="transition-colors hover:underline"
                  style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--foreground)' }}>Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/nkaruna09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border transition-all hover:bg-cyan-400/10 hover:scale-110"
                style={{ borderColor: 'var(--border)' }}
              >
                <Github className="w-5 h-5" style={{ color: 'var(--neon-cyan)' }} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nithika-karunamoorthy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border transition-all hover:bg-cyan-400/10 hover:scale-110"
                style={{ borderColor: 'var(--border)' }}
              >
                <Linkedin className="w-5 h-5" style={{ color: 'var(--neon-cyan)' }} />
              </a>
              <a 
                href="mailto:nithika.karuna@gmail.com"
                className="p-2 rounded-lg border transition-all hover:bg-cyan-400/10 hover:scale-110"
                style={{ borderColor: 'var(--border)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--neon-cyan)' }} />
              </a>
            </div>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
            © {currentYear} Nithika Karunamoorthy. All rights reserved.
          </p>
          <p 
            className="flex items-center gap-2"
            style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}
          >
            Made with 
            <Heart className="w-4 h-4" style={{ color: 'var(--neon-teal)' }} fill="var(--neon-teal)" /> 
            and lots of butterflies!
          </p>
        </div>
      </div>
    </footer>
  );
}
