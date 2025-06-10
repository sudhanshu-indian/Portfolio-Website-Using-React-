import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  level: number;
}
const skills: Skill[] = [{
  name: 'React',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  category: 'Frontend',
  level: 90
}, {
  name: 'TypeScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  category: 'Frontend',
  level: 85
}, {
  name: 'JavaScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  category: 'Frontend',
  level: 95
}, {
  name: 'HTML5',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  category: 'Frontend',
  level: 95
}, {
  name: 'CSS3',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  category: 'Frontend',
  level: 90
}, {
  name: 'Tailwind',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  category: 'Frontend',
  level: 85
}, {
  name: 'Node.js',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  category: 'Backend',
  level: 80
}, {
  name: 'MongoDB',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  category: 'Backend',
  level: 75
}, {
  name: 'Figma',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  category: 'Design',
  level: 85
}, {
  name: 'Git',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  category: 'Tools',
  level: 85
}, {
  name: 'Docker',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  category: 'Tools',
  level: 70
}, {
  name: 'AWS',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  category: 'Tools',
  level: 65
}];
const categories = ['Frontend', 'Backend', 'Design', 'Tools'];
const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const filteredSkills = skills.filter(skill => activeCategory === 'All' || skill.category === activeCategory);
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-20 w-full" fill={activeCategory === 'Frontend' ? '#8B5CF6' : activeCategory === 'Backend' ? '#3B82F6' : activeCategory === 'Design' ? '#EC4899' : '#10B981'} style={{
        opacity: 0.1
      }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
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
            My Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered throughout my
            journey. I continuously learn and adapt to stay updated with the
            latest trends.
          </p>
        </motion.div>
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', ...categories].map(category => <motion.button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
              {category}
            </motion.button>)}
        </div>
        {/* Skills Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }}>
          {filteredSkills.map((skill, index) => <motion.div key={skill.name} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="flex flex-col">
              <motion.div whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.3
            }
          }} className="h-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                      {skill.name}
                    </h3>
                    {/* Skill progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                      <motion.div className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" style={{
                    width: `${skill.level}%`
                  }} initial={{
                    width: 0
                  }} animate={{
                    width: `${skill.level}%`
                  }} transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1
                  }}></motion.div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>)}
        </motion.div>
      </div>
      {/* Bottom SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-20 w-full" fill={activeCategory === 'Frontend' ? '#8B5CF6' : activeCategory === 'Backend' ? '#3B82F6' : activeCategory === 'Design' ? '#EC4899' : '#10B981'} style={{
        opacity: 0.1
      }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>;
};
export default Skills;