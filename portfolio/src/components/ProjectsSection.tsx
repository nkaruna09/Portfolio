import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useState } from 'react';
import { AnimatedButterfly } from './Butterfly';
import Save_a_Watt from '../assets/wattLogoT.png';
import NutriSafe from '../assets/NutriSafe.png';
import UpRight from '../assets/UpRight.png';
import Conversify from '../assets/Conversify.png';
import Recycling from '../assets/Recycling.webp';
import Budgeting from '../assets/budgeting_system.png'; 
import CNN from '../assets/CNN_Google_Speech_Commands.png'; 
import Qarm from '../assets/QArm-07-700x766.jpg'; 
import butterfly from '../../public/butterfly_icon.png'; 

const projects = [
  {
    title: 'Save-A-Watt',
    description: 'Hack The Valley 2025 Project: An platform that analyzes users\'s energy bills and provides personalized recommendations to reduce consumption and subsidy recommendations to help reduce overall consumption and costs.',
    technologies: ['React', 'TailwindCSS', 'Python', 'Flask', 'Gemini API', 'Catboost'],
    image: Save_a_Watt,
    github: 'https://github.com/nkaruna09/Save-A-Watt',
    live: 'https://devpost.com/software/save-a-watt-52xf9p',
    category: 'web',
    featured: true
  },
  {
    title: 'NutriSafe',
    description: 'DeltaHacks 2025 Project: A nutrition analysis app that uses AI to evaluate food products for allergens, dietary restrictions, and healthiness based on user profiles.',
    technologies: ['Streamlit', 'Python', 'Cohere API', 'Open Food Facts API', 'Spoonacular API'],
    image: NutriSafe,
    github: 'https://github.com/nkaruna09/NutriSafe',
    live: 'https://devpost.com/software/nutrisafe',
    category: 'web',
    featured: true
  },
  {
    title: 'UpRight',
    description: 'MacChangers Project: Chrome extension that sends posture reminders every 20 minutes and offers real-time posture analysis for a healthier, pain-free lifestyle.',
    technologies: ['JavaScript', 'Flask', 'Mediapipe', 'HTML/CSS', 'Python'],
    image: UpRight,
    github: 'https://github.com/nkaruna09/UpRight',
    live: 'https://devpost.com/software/upright-qd0pbg',
    category: 'web',
    featured: false
  },
  {
    title: 'Conversify',
    description: 'Ignition Hack 2024 Project: Multi-language conversation simulator offering dynamic, AI-driven dialogue with varying difficulty levels for an interactive experience.',
    technologies: ['React', 'Flask', 'Cohere LLM', 'Javascript', 'Python'], 
    image: Conversify,
    github: 'https://github.com/nkaruna09/Conversify',
    live: 'https://devpost.com/software/conversify-37xcsf',
    category: 'web',
    featured: true
  },
  {
    title: 'Student Budgeting Program',
    description: 'Text based student budgeting program to help student effectively manage their finances.',
    technologies: ['Linux', 'C', 'Bash'],
    image: Budgeting,
    github: 'https://github.com/nkaruna09/student-budgeting-app',
    category: 'extra',
    featured: false
  },
  {
    title: 'Convolutional Neural Network',
    description: 'Convolutional Neural Network to recognize Google Speech Commands',
    technologies: ['Keras', 'TensorFlow', 'Numpy', 'Python', 'Matplotlib', 'Pandas'],
    image: CNN,
    github: 'https://github.com/nkaruna09/CNN-google-speech-commands',
    category: 'ml',
    featured: false
  },
  {
    title: 'Get-a-Grip',
    description: 'Computer program designed for controlling movement of a robotic arm to pick up and transfer a container into an autoclave for sterilization.',
    technologies: ['Python', 'Quanser Labs'],
    image: Qarm,
    github: '',
    live: 'https://best-verdict-aa5.notion.site/Design-Project-2-c4a89210af48429a924743b47c5b248b',
    category: 'extra',
    featured: false
  },
  {
    title: 'Recycling System',
    description: 'Protyped a mechanism that sorts and disposes of contrainers into their respective bins using a hopper.',
    technologies: ['AutoCAD', 'PursaSlicer'],
    image: Recycling,
    github: '',
    live: 'https://best-verdict-aa5.notion.site/Design-Project-3-ba9576dbf64948f2aa6652617c19c4d7',
    category: 'extra',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'This website you are looking at right now!',
    technologies: ['React', 'TailwindCSS'],
    image: butterfly,
    github: 'https://github.com/nkaruna09/Portfolio',
    live: 'https://nithika.netlify.app/',
    category: 'web',
    featured: false
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'extra', label: 'Extra' }
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
