import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
import { Card } from './ui/card';

export function AboutSection() {
  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
            <span style={{ color: 'var(--foreground)' }}>About </span>
            <span style={{ color: 'var(--neon-teal)' }}>Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 aspect-square"
              style={{ borderColor: 'var(--neon-cyan)' }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20"
              />
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1637904743105-3118bbe3ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMzczMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            
            {/* Floating butterfly decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-full h-full rounded-full blur-xl"
                style={{
                  background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
                  opacity: 0.6
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
              I'm a passionate software engineering and management student at McMaster University, 
              currently in my third year. I love combining technical expertise with strategic thinking 
              to create innovative solutions that make a real impact.
            </p>
            
            <p className="mb-8" style={{ color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
              My journey in tech has been driven by curiosity and a desire to bridge the gap between 
              engineering and business. I believe in building not just functional software, but solutions 
              that truly serve users and drive meaningful change.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card 
                className="p-4 border"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  >
                    <GraduationCap className="w-5 h-5" style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Education</p>
                    <p style={{ color: 'var(--foreground)' }}>McMaster University</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-4 border"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)' }}
                  >
                    <Briefcase className="w-5 h-5" style={{ color: 'var(--neon-teal)' }} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Program</p>
                    <p style={{ color: 'var(--foreground)' }}>SE & Management</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-4 border"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(77, 208, 225, 0.1)' }}
                  >
                    <Award className="w-5 h-5" style={{ color: 'var(--light-blue)' }} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Year</p>
                    <p style={{ color: 'var(--foreground)' }}>3rd Year Student</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-4 border"
                style={{ 
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  >
                    <Heart className="w-5 h-5" style={{ color: 'var(--neon-cyan)' }} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Passion</p>
                    <p style={{ color: 'var(--foreground)' }}>Innovation & Tech</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
