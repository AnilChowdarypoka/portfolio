import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';

export interface Award {
  image: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  onClick?: () => void;
}

interface AwardsSectionProps {
  awards: Award[];
  onImageClick: (image: string) => void;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards, onImageClick }) => (
  <section id="awards" className="py-20 bg-gray-800/30">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Awards & Recognition</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
      >
        {awards.map((award, idx) => (
          <div key={idx} className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
            <div className="relative group w-full flex justify-center mb-6">
              <img
                src={award.image}
                alt={award.title + ' Award'}
                className="w-64 h-80 object-contain rounded-xl shadow-xl border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 cursor-pointer"
                onClick={() => onImageClick(award.image)}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                <Maximize2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white text-center">{award.title}</h4>
            <p className="text-gray-300 text-center">{award.organization}</p>
            <p className="text-gray-400 text-center">{award.year}</p>
            <p className="text-gray-400 text-sm mt-2 text-center">{award.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AwardsSection; 