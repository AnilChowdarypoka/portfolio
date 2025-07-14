import { motion } from 'framer-motion';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  stats: { number: string; label: string }[];
  contacts: { href: string; label: string; icon: JSX.Element }[];
  onScrollToAbout: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  stats,
  contacts,
  onScrollToAbout,
}) => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0">
      {/* Animated background can be included here if needed */}
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/50"></div>
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-12"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {name}<br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>
        {/* Social Media & Contact Icons */}
        <motion.div
          className="flex justify-center items-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              className="group relative"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              target={contact.href.startsWith('http') || contact.href.startsWith('mailto') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') || contact.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                {contact.icon}
              </div>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.button
        onClick={onScrollToAbout}
        className="animate-bounce text-gray-400 hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        {/* You can import and use ChevronDown here if needed */}
        <span>↓</span>
      </motion.button>
    </div>
  </section>
);

export default HeroSection; 