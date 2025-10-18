import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
//import { Button } from './ui/button';
import { AnimatedButterfly } from './Butterfly';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with sky and butterflies */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1642011797050-25e74bae1210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHN0YXJzJTIwYmx1ZXxlbnwxfHx8fDE3NjA0NjI4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Animated butterflies - positioned away from center */}
        <AnimatedButterfly
          position={{ top: '4rem', right: '3rem' }}
          size="6rem"
          opacity={0.5}
          animation={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -5, 0],
            duration: 5
          }}
          colors={{
            gradient1: 'var(--neon-purple)',
            gradient2: 'var(--neon-cyan)',
            body: 'var(--neon-purple)'
          }}
          gradientId="hero-butterfly-1"
        />
        
        <AnimatedButterfly
          position={{ bottom: '6rem', left: '4rem' }}
          size="5rem"
          opacity={0.4}
          animation={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -15, 10, 0],
            duration: 6,
            delay: 1
          }}
          colors={{
            gradient1: 'var(--neon-teal)',
            gradient2: 'var(--light-blue)',
            body: 'var(--neon-teal)'
          }}
          gradientId="hero-butterfly-2"
        />

        <AnimatedButterfly
          position={{ top: '33%', left: '2rem' }}
          size="4rem"
          opacity={0.35}
          animation={{
            y: [0, -25, 10, 0],
            x: [0, 15, -10, 0],
            rotate: [0, 8, -12, 0],
            duration: 7,
            delay: 2.5
          }}
          colors={{
            gradient1: 'var(--lavender)',
            gradient2: 'var(--light-blue)',
            body: 'var(--lavender)'
          }}
          gradientId="hero-butterfly-3"
        />

        <AnimatedButterfly
          position={{ top: '66%', right: '5rem' }}
          size="4.5rem"
          opacity={0.3}
          animation={{
            y: [0, -20, 15, 0],
            x: [0, 10, -5, 0],
            rotate: [0, -10, 5, 0],
            duration: 6.5,
            delay: 3
          }}
          colors={{
            gradient1: 'var(--deep-purple)',
            gradient2: 'var(--neon-purple)',
            body: 'var(--deep-purple)'
          }}
          gradientId="hero-butterfly-4"
        />

        {/* Organic flowing shapes background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="organic-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="var(--neon-cyan)" />
                <circle cx="150" cy="100" r="1.5" fill="var(--neon-teal)" />
                <circle cx="100" cy="150" r="1" fill="var(--light-blue)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic-pattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 mb-6">
              <span style={{ color: 'var(--neon-teal)' }}>Software Engineering & Management Student</span>
            </span>
          </motion.div>

          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block mb-2" style={{ fontSize: '3rem' }}>
              Hi, I'm{' '}
              <span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-400 bg-clip-text"
                style={{ 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Nithika Karunamoorthy
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl mx-auto"
            style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            3rd Year Student at McMaster University, passionate about building innovative tech solutions 
            and bridging the gap between engineering and management
          </motion.p>

          {/* <motion.div
            className="flex gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0"
              style={{ color: 'var(--navy-dark)' }}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cyan-400/50 hover:bg-cyan-400/10"
              style={{ color: 'var(--neon-cyan)' }}
            >
              Get In Touch
            </Button>
          </motion.div> */}

          <motion.div
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a 
              href="https://github.com/nkaruna09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6" style={{ color: 'var(--neon-cyan)' }} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nithika-karunamoorthy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6" style={{ color: 'var(--neon-cyan)' }} />
            </a>
            <a 
              href="mailto:nithika.karuna@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-6 h-6" style={{ color: 'var(--neon-cyan)' }} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{ borderColor: 'var(--neon-cyan)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--neon-cyan)' }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
