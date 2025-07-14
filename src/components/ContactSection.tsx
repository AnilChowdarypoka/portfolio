import React from 'react';
import { motion } from 'framer-motion';

export interface ContactMethod {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  href: string;
}

interface ContactSectionProps {
  heading: string;
  description: string;
  contactMethods: ContactMethod[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ heading, description, contactMethods }) => (
  <section id="contact" className="py-20 bg-gray-800/30">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>
      <motion.p
        className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      <motion.div
        className="grid md:grid-cols-4 gap-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {contactMethods.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              {contact.icon}
            </div>
            <h3 className="font-bold mb-2 text-white">{contact.title}</h3>
            <p className="text-gray-300 text-sm">{contact.subtitle}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection; 