import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, XIcon } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}
const projects: Project[] = [{
  id: 1,
  title: 'E-Commerce Dashboard',
  description: 'A comprehensive dashboard for e-commerce store owners with analytics, inventory management, and order processing. Features include real-time sales tracking, customer insights, and product performance metrics.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['Web', 'Dashboard'],
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
  liveUrl: '#',
  githubUrl: '#',
  featured: true
}, {
  id: 2,
  title: 'Fitness Tracker App',
  description: 'A mobile-first application for tracking workouts, nutrition, and progress. Users can create custom workout plans, log meals, and visualize their fitness journey through interactive charts.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['App', 'Health'],
  technologies: ['React Native', 'Firebase', 'Redux'],
  liveUrl: '#',
  githubUrl: '#',
  featured: true
}, {
  id: 3,
  title: 'Interactive Data Visualization',
  description: 'An interactive platform for exploring and visualizing complex datasets. Features include customizable charts, filters, and export options for data analysis.',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['Web', 'Data'],
  technologies: ['React', 'D3.js', 'Node.js', 'Express'],
  liveUrl: '#',
  githubUrl: '#',
  featured: false
}, {
  id: 4,
  title: 'AI Content Generator',
  description: 'A tool that leverages AI to generate blog posts, social media content, and marketing copy. Users can specify tone, length, and keywords to create tailored content.',
  image: 'https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['Web', 'AI', 'Creative'],
  technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
  liveUrl: '#',
  githubUrl: '#',
  featured: true
}, {
  id: 5,
  title: 'Virtual Reality Gallery',
  description: 'An immersive VR experience showcasing digital art in a virtual gallery. Users can navigate the space, interact with artworks, and learn about artists.',
  image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['Creative', '3D'],
  technologies: ['Three.js', 'WebGL', 'React', 'GSAP'],
  liveUrl: '#',
  githubUrl: '#',
  featured: false
}, {
  id: 6,
  title: 'Smart Home Control System',
  description: 'A centralized system for controlling smart home devices. Features include device scheduling, energy usage monitoring, and voice commands.',
  image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: ['App', 'IoT'],
  technologies: ['React', 'Node.js', 'MQTT', 'MongoDB'],
  liveUrl: '#',
  githubUrl: '#',
  featured: false
}];
const categories = ['All', 'Web', 'App', 'Creative', '3D', 'Data', 'AI', 'IoT'];
const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects.filter(project => activeCategory === 'All' || project.category.includes(activeCategory));
  return <section id="projects" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating my skills in design,
            development, and problem-solving. Each project represents unique
            challenges and solutions.
          </p>
        </motion.div>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4">
          {categories.map(category => <motion.button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
              {category}
            </motion.button>)}
        </div>
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => <motion.div key={project.id} layout initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }} transition={{
            duration: 0.5
          }} className="flex flex-col h-full">
                <motion.div whileHover={{
              scale: 1.02,
              transition: {
                duration: 0.3
              }
            }} className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col cursor-pointer group border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300" onClick={() => setSelectedProject(project)}>
                  <div className="relative overflow-hidden h-48">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {project.category.map(cat => <span key={cat} className="px-2 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                          {cat}
                        </span>)}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => <span key={tech} className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                          {tech}
                        </span>)}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <motion.button className="text-purple-600 dark:text-purple-400 font-medium text-sm hover:underline" whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        View Details
                      </motion.button>
                      <div className="flex items-center gap-2">
                        <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
                      scale: 1.1,
                      rotate: 5
                    }} whileTap={{
                      scale: 0.9
                    }}>
                          <GithubIcon size={18} />
                        </motion.a>
                        <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
                      scale: 1.1,
                      rotate: -5
                    }} whileTap={{
                      scale: 0.9
                    }}>
                          <ExternalLinkIcon size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>)}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }} animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }} exit={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }} transition={{
          type: 'spring',
          damping: 25
        }} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="relative h-72 md:h-96">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" onClick={() => setSelectedProject(null)}>
                  <XIcon size={20} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        {tech}
                      </span>)}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium shadow-lg flex items-center gap-2" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium border border-gray-300 dark:border-gray-600 flex items-center gap-2" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                    <GithubIcon size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </section>;
};
export default Projects;