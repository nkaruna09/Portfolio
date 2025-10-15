import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { Card } from './ui/card';
import { AnimatedButterfly } from './Butterfly';

const experiences = [
  {
    type: 'education',
    title: 'Bachelor of Engineering - Software Engineering & Management',
    organization: 'McMaster University',
    location: 'Hamilton, ON',
    period: '2022 - Present',
    description: 'Currently in 3rd year, focusing on full-stack development, project management, and bridging technical and business perspectives.',
    icon: GraduationCap,
    color: 'var(--neon-cyan)',
    featured: true
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    organization: 'Tech Company',
    location: 'Remote',
    period: 'Summer 2024',
    description: 'Developed full-stack features, collaborated with cross-functional teams, and improved application performance by 30%.',
    icon: Code,
    color: 'var(--neon-purple)',
    featured: true
  },
  {
    type: 'work',
    title: 'Project Lead',
    organization: 'University Project Team',
    location: 'McMaster University',
    period: '2023 - 2024',
    description: 'Led a team of 5 students in developing an innovative mobile application. Managed project timeline and coordinated sprints.',
    icon: Briefcase,
    color: 'var(--neon-teal)',
    featured: true
  },
  {
    type: 'work',
    title: 'Teaching Assistant',
    organization: 'McMaster University',
    location: 'Hamilton, ON',
    period: '2023 - Present',
    description: 'Assisted in teaching introductory programming courses, held office hours, and mentored first-year students.',
    icon: GraduationCap,
    color: 'var(--light-blue)',
    featured: false
  },
  {
    type: 'work',
    title: 'Volunteer Developer',
    organization: 'Local Non-Profit',
    location: 'Hamilton, ON',
    period: '2023',
    description: '',
    icon: Code,
    color: 'var(--lavender)',
    featured: false
  },
  {
    type: 'work',
    title: 'Hackathon Participant',
    organization: 'Various Events',
    location: 'Multiple',
    period: '2022 - Present',
    description: '',
    icon: Briefcase,
    color: 'var(--neon-purple)',
    featured: false
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="experience">
      {/* Floating butterflies */}
      <AnimatedButterfly
        position={{ top: '5rem', left: '25%' }}
        size="4rem"
        opacity={0.4}
        animation={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, -5, 0],
          duration: 6
        }}
        colors={{
          gradient1: 'var(--neon-cyan)',
          gradient2: 'var(--neon-teal)',
          body: 'var(--neon-cyan)'
        }}
        gradientId="experience-butterfly-1"
      />

      <AnimatedButterfly
        position={{ bottom: '8rem', right: '33%' }}
        size="5rem"
        opacity={0.35}
        animation={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -12, 8, 0],
          duration: 7,
          delay: 2
        }}
        colors={{
          gradient1: 'var(--lavender)',
          gradient2: 'var(--neon-purple)',
          body: 'var(--lavender)'
        }}
        gradientId="experience-butterfly-2"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
            <span style={{ color: 'var(--foreground)' }}>My </span>
            <span style={{ color: 'var(--neon-teal)' }}>Journey</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-500" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 rounded-full"
            style={{ backgroundColor: 'var(--border)' }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-8 md:left-1/2 -ml-3 md:-ml-4 ${
                      exp.featured ? 'w-6 h-6 md:w-8 md:h-8' : 'w-4 h-4 md:w-5 md:h-5'
                    } rounded-full border-4 flex items-center justify-center z-10`}
                    style={{ 
                      backgroundColor: 'var(--background)',
                      borderColor: exp.color,
                      borderWidth: exp.featured ? '4px' : '2px'
                    }}
                  >
                    <div 
                      className={`${exp.featured ? 'w-2 h-2 md:w-3 md:h-3' : 'w-1.5 h-1.5 md:w-2 md:h-2'} rounded-full`}
                      style={{ backgroundColor: exp.color }}
                    />
                  </div>

                  {/* Content card - featured experiences get full card */}
                  {exp.featured ? (
                    <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
                      isEven ? 'md:pr-16' : 'md:pl-16'
                    }`}>
                      <Card 
                        className="p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 rounded-2xl"
                        style={{ 
                          backgroundColor: 'var(--card)',
                          borderColor: 'var(--border)'
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-3 rounded-xl flex-shrink-0"
                            style={{ backgroundColor: `${exp.color}20` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: exp.color }} />
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <h3 style={{ color: 'var(--foreground)' }}>{exp.title}</h3>
                              <span 
                                className="px-3 py-1 rounded-full border inline-block w-fit"
                                style={{
                                  backgroundColor: 'rgba(100, 255, 218, 0.05)',
                                  borderColor: 'var(--border)',
                                  color: 'var(--muted-foreground)',
                                  fontSize: '0.75rem'
                                }}
                              >
                                {exp.period}
                              </span>
                            </div>
                            
                            <p 
                              className="mb-1"
                              style={{ 
                                color: exp.color,
                                fontSize: '0.9375rem'
                              }}
                            >
                              {exp.organization}
                            </p>
                            
                            <p 
                              className="mb-3"
                              style={{ 
                                color: 'var(--muted-foreground)',
                                fontSize: '0.875rem'
                              }}
                            >
                              {exp.location}
                            </p>
                            
                            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ) : (
                    /* Minor roles get compact inline display */
                    <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${
                      isEven ? 'md:pr-16' : 'md:pl-16'
                    }`}>
                      <div className="flex items-center gap-3 py-2">
                        <div 
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: exp.color }} />
                        </div>
                        <div className="flex-grow">
                          <h4 style={{ color: 'var(--foreground)', fontSize: '0.9375rem' }}>
                            {exp.title}
                          </h4>
                          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.8125rem' }}>
                            {exp.organization} • {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
