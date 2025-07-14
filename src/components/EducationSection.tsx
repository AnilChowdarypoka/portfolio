import React from 'react';
import { motion } from 'framer-motion';

export interface Education {
  image: string;
  degree: string;
  field: string;
  school: string;
  years: string;
}

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educations }) => (
  <section id="education" className="py-20 relative">
    <div className="max-w-4xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
      </motion.h2>
      <div className="space-y-10">
        {educations.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-6 bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg">
            <img
              src={edu.image}
              alt={edu.school + ' Logo'}
              className="w-20 h-20 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow"
            />
            <div>
              <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
              <p className="text-gray-300">{edu.field}</p>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-gray-400">{edu.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection; 