import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import { AnimatedButterfly } from './Butterfly';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and secure payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1637904743105-3118bbe3ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMzczMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: true
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, team communication, and progress tracking.',
    technologies: ['TypeScript', 'Next.js', 'PostgreSQL', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc2MDQ0NjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: true
  },
  {
    title: 'AI Study Companion',
    description: 'An intelligent study assistant that helps students organize notes, create flashcards, and track learning progress.',
    technologies: ['Python', 'React', 'TensorFlow', 'Flask'],
    image: 'https://images.unsplash.com/photo-1642011797050-25e74bae1210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHN0YXJzJTIwYmx1ZXxlbnwxfHx8fDE3NjA0NjI4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'ai',
    featured: true
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'Track workouts, calories, and fitness goals with real-time analytics.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1580983561252-463dca6ad904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MDQ1NjI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'mobile',
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting with interactive maps and alerts.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1643686978040-beac9782e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDQ2NTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance management with budgeting and reporting features.',
    technologies: ['React', 'Express', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1705948734805-9dff79aaae03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwbW9uZXklMjBidWRnZXR8ZW58MXx8fHwxNzYwNDY1OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you have at home.',
    technologies: ['Next.js', 'Tailwind', 'Spoonacular API'],
    image: 'https://images.unsplash.com/photo-1572171579626-e79450374587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVjaXBlJTIwY29va2luZ3xlbnwxfHx8fDE3NjA0NjU5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting.',
    technologies: ['TypeScript', 'MongoDB', 'Prism.js'],
    image: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYwNDU1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'Analyze text sentiment using machine learning models.',
    technologies: ['Python', 'scikit-learn', 'NLTK', 'Flask'],
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MDQwNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'ai',
    featured: false
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging with WebSocket support.',
    technologies: ['React', 'Socket.io', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1637904743105-3118bbe3ed8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwMzczMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Custom portfolio generator with CMS integration.',
    technologies: ['Gatsby', 'Contentful', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc2MDQ0NjgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Image Recognition App',
    description: 'Object detection and classification using computer vision.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MDQwNTcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'ai',
    featured: false
  },
  {
    title: 'Habit Tracker',
    description: 'Build better habits with daily tracking and streaks.',
    technologies: ['React Native', 'SQLite', 'Expo'],
    image: 'https://images.unsplash.com/photo-1580983561252-463dca6ad904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmaXRuZXNzJTIwYXBwfGVufDF8fHx8MTc2MDQ1NjI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'mobile',
    featured: false
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const getFilteredProjects = (category: string) => {
    if (category === 'all') return projects.filter(p => !p.featured);
    return projects.filter(p => p.category === category && !p.featured);
  };

  return (
    <section className="py-24 px-6 relative" id="projects">
      {/* Butterfly decorations */}
      <AnimatedButterfly
        position={{ top: '8rem', right: '5rem' }}
        size="5rem"
        opacity={0.4}
        animation={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, 10, -5, 0],
          duration: 5
        }}
        colors={{
          gradient1: 'var(--neon-purple)',
          gradient2: 'var(--neon-cyan)',
          body: 'var(--neon-purple)'
        }}
        gradientId="projects-butterfly-1"
      />

      <AnimatedButterfly
        position={{ bottom: '5rem', left: '4rem' }}
        size="4rem"
        opacity={0.3}
        animation={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [0, -12, 8, 0],
          duration: 6.5,
          delay: 1.5
        }}
        colors={{
          gradient1: 'var(--light-blue)',
          gradient2: 'var(--neon-cyan)',
          body: 'var(--light-blue)'
        }}
        gradientId="projects-butterfly-2"
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
            <span style={{ color: 'var(--foreground)' }}>Featured </span>
            <span style={{ color: 'var(--neon-teal)' }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-teal-500 rounded-full" />
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Here are some of my recent projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-5 h-5" style={{ color: 'var(--neon-purple)' }} fill="var(--neon-purple)" />
            <h3 style={{ color: 'var(--neon-purple)', fontSize: '1.5rem' }}>Featured Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden border h-full flex flex-col group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 rounded-2xl"
                  style={{ 
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.image})`
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <div 
                        className="p-2 rounded-full backdrop-blur-sm"
                        style={{ backgroundColor: 'rgba(183, 148, 246, 0.3)' }}
                      >
                        <Star className="w-4 h-4" style={{ color: 'var(--neon-purple)' }} fill="var(--neon-purple)" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="mb-3" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                    
                    <p className="mb-4 flex-grow" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline"
                          className="border"
                          style={{
                            borderColor: 'var(--border)',
                            backgroundColor: 'rgba(183, 148, 246, 0.1)',
                            color: 'var(--neon-purple)'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    {project.github && project.live && (
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border hover:bg-purple-400/10 rounded-lg"
                          style={{ 
                            borderColor: 'var(--border)',
                            color: 'var(--neon-cyan)'
                          }}
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0 rounded-lg"
                          style={{ color: 'var(--navy-dark)' }}
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="rounded-full p-1" style={{ backgroundColor: 'var(--card)' }}>
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-full px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-cyan-500"
                  style={{
                    color: activeTab === cat.id ? 'var(--navy-dark)' : 'var(--muted-foreground)'
                  }}
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getFilteredProjects(cat.id).map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card 
                      className="overflow-hidden border h-full flex flex-col group hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 rounded-xl"
                      style={{ 
                        backgroundColor: 'var(--card)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      {/* Mini Project Image */}
                      <div className="relative h-32 overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundImage: `url(${project.image})`
                          }}
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                        />
                      </div>

                      <div className="p-4 flex flex-col flex-grow">
                        <h4 className="mb-2" style={{ color: 'var(--foreground)', fontSize: '1.0625rem' }}>
                          {project.title}
                        </h4>
                        
                        <p className="mb-3 flex-grow" style={{ color: 'var(--muted-foreground)', fontSize: '0.8125rem', lineHeight: '1.4' }}>
                          {project.description}
                        </p>

                        {/* Technologies - compact */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded-md"
                              style={{
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                color: 'var(--neon-teal)',
                                fontSize: '0.6875rem'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span
                              className="px-2 py-0.5 rounded-md"
                              style={{
                                backgroundColor: 'rgba(100, 255, 218, 0.05)',
                                color: 'var(--muted-foreground)',
                                fontSize: '0.6875rem'
                              }}
                            >
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Links - compact */}
                        <div className="flex gap-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg border transition-colors hover:bg-cyan-400/10"
                            style={{ borderColor: 'var(--border)', color: 'var(--neon-cyan)', fontSize: '0.8125rem' }}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                          {project.live && (
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg transition-opacity hover:opacity-80"
                              style={{ 
                                background: 'linear-gradient(to right, var(--neon-cyan), var(--neon-teal))',
                                color: 'var(--navy-dark)',
                                fontSize: '0.8125rem'
                              }}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
