import React from 'react';
import { motion } from 'framer-motion';

export interface Certification {
  image: string;
  title: string;
  organization: string;
  year: string;
  credentialUrl?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => (
  <section id="certifications" className="py-20 relative">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
            <img
              src={cert.image}
              alt={cert.title + ' Logo'}
              className="w-40 h-40 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow mb-4"
            />
            <h4 className="text-xl font-semibold text-white text-center">{cert.title}</h4>
            <p className="text-gray-300 text-center">{cert.organization}</p>
            <p className="text-gray-400 text-center">Issued: {cert.year}</p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors duration-200"
              >
                View Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection; 