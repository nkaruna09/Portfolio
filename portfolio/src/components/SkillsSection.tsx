import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Laptop, Server, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { AnimatedButterfly } from './Butterfly';

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript']
  },
  {
    category: 'Backend Development',
    icon: Server,
    items: ['Node.js', 'Python', 'Java', 'REST APIs', 'Express']
  },
  {
    category: 'Database & Tools',
    icon: Database,
    items: ['SQL', 'Git']
  },
  {
    category: 'Management',
    icon: Sparkles,
    items: ['Agile/Scrum', 'Project Management', 'Team Leadership', 'Business Analysis', 'Confluence', 'Jira']
  },
  {
    category: 'Development Tools',
    icon: GitBranch,
    items: ['Git/GitHub', 'VS Code', 'Docker', 'Postman', 'Figma']
  },
  {
    category: 'Other Skills',
    icon: Laptop,
    items: ['AutoCAD', '', 'Technical Writing', 'UI/UX Design']
  }
];

export function SkillsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="skills">
      {/* Background circuit pattern */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc2MDQ0NjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating butterflies */}
      <AnimatedButterfly
        position={{ top: '10rem', right: '25%' }}
        size="3.5rem"
        opacity={0.35}
        animation={{
          y: [0, -35, 0],
          x: [0, 25, 0],
          rotate: [0, 12, -8, 0],
          duration: 6
        }}
        colors={{
          gradient1: 'var(--neon-purple)',
          gradient2: 'var(--neon-teal)',
          body: 'var(--neon-purple)'
        }}
        gradientId="skills-butterfly-1"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>
            <span style={{ color: 'var(--neon-purple)' }}>Technical </span>
            <span style={{ color: 'var(--foreground)' }}>Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="p-6 h-full border transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 group"
                  style={{ 
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all"
                    >
                      <Icon className="w-6 h-6" style={{ color: 'var(--neon-cyan)' }} />
                    </div>
                    <h3 style={{ color: 'var(--foreground)' }}>{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: 'rgba(100, 255, 218, 0.05)',
                          borderColor: 'var(--border)',
                          color: 'var(--muted-foreground)',
                          fontSize: '0.875rem'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
