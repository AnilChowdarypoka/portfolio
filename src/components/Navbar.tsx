import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  socialLinks: SocialLink[];
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollToSection,
  mobileNavOpen,
  setMobileNavOpen,
  socialLinks,
}) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        activeSection === 'hero'
          ? 'bg-transparent'
          : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className={`hidden md:block text-2xl font-bold transition-colors duration-300 ${
              activeSection === 'hero'
                ? 'text-white'
                : 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Anil
          </motion.div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-7" />
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <div className="space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certifications' },
              ].map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative transition-colors hover:text-blue-400 ${
                    activeSection === section.id
                      ? activeSection === 'hero'
                        ? 'text-white'
                        : 'text-blue-400'
                      : 'text-gray-300'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {section.label}
                  {activeSection === section.id && activeSection !== 'hero' && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-gray-700 pl-6">
              <div className="flex items-center gap-4 mt-6 justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="rounded-full bg-gray-800/60 p-3 hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile nav dropdown */}
      {mobileNavOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800/50 px-6 pb-4 pt-2">
          <div className="flex flex-col space-y-4">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'certifications', label: 'Certifications' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setMobileNavOpen(false);
                }}
                className={`w-full text-left py-2 px-2 rounded hover:bg-blue-600/20 transition-colors ${
                  activeSection === section.id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="rounded-full bg-gray-800/60 p-3 hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar; 