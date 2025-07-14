import React from 'react';
import { motion } from 'framer-motion';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
  expandedExperience: string | null;
  onToggleExperience: (company: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  expandedExperience,
  onToggleExperience,
}) => (
  <section id="experience" className="py-20 bg-gray-900/50 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">{experience.company}</h3>
                <p className="text-xl text-gray-300">{experience.role}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-400">{experience.period}</p>
                <p className="text-gray-500">{experience.location}</p>
              </div>
            </div>
            <div className="space-y-3">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.05) }}
                  className={`flex items-start space-x-2 ${!expandedExperience && i >= 3 ? 'hidden' : ''}`}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
            <button
              className="mt-4 text-blue-400 hover:underline"
              onClick={() => onToggleExperience(experience.company)}
            >
              {expandedExperience === experience.company ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection; 