import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp,
  Twitter,
  Phone,
  ChevronRight,
  ChevronUp,
  X,
  Maximize2} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import TechStack from './components/TechStack';
import Navbar from './components/Navbar';
import experienceData from './experience.json';
import heroData from './hero.json';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'experience', 'education'];
      const scrollPosition = window.scrollY + 100;
      
      setShowScrollTop(window.scrollY > 500);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      {/* Custom cursor effect */}
      <div 
        ref={(el) => {
          if (el) {
            el.style.left = `${mousePosition.x - 12}px`;
            el.style.top = `${mousePosition.y - 12}px`;
            el.style.transform = `scale(${showScrollTop ? 1.5 : 1})`;
          }
        }}
        className="fixed w-6 h-6 bg-blue-500/30 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
      />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        socialLinks={[]}
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedBackground />
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
              {heroData.name}<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {heroData.title}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroData.description}
            </motion.p>
            
            {/* Social Media & Contact Icons */}
            <motion.div 
              className="flex justify-center items-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroData.contacts.map((contact) => {
                const IconComponent =
                  contact.icon === 'Mail' ? Mail :
                  contact.icon === 'Github' ? Github :
                  contact.icon === 'Twitter' ? Twitter :
                  contact.icon === 'Linkedin' ? Linkedin :
                  contact.icon === 'Phone' ? Phone : null;
                return (
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
                      {IconComponent && <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />}
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                      {contact.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {heroData.stats.map((stat, index) => (
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
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-blue-400/40 bg-gray-800"
            />
          </div>
          <div className="flex-1">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  I'm a passionate data engineer with 5+ years of experience building scalable 
                  data infrastructure that processes billions of events daily. My expertise spans 
                  real-time streaming, distributed systems, and machine learning operations.
                </p>
                <p>
                  I specialize in designing and implementing modern data architectures using 
                  technologies like Apache Kafka, Spark, and cloud-native solutions. My work 
                  enables organizations to make data-driven decisions at scale.
                </p>
                <p>
                  When I'm not architecting data pipelines, I contribute to open-source projects, 
                  write technical articles, and mentor aspiring data engineers. I believe in 
                  building systems that are not just functional, but elegant and maintainable.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Experience Section */}
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
            {experienceData.map((experience, index) => (
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
                {experience.achievements.length > 3 && (
                  <motion.button
                    onClick={() => toggleExperience(experience.company)}
                    className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    {expandedExperience === experience.company ? (
                      <>
                        Show Less
                        <ChevronUp className="w-5 h-5 ml-1 group-hover:translate-y-[-2px] transition-transform" />
                      </>
                    ) : (
                      <>
                        View More
                        <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
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
            {/* Pace University - Use pace.png */}
            <div className="flex items-center gap-6 bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg">
              <img
                src="/images/education/pace.png"
                alt="Pace University Logo"
                className="w-20 h-20 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">Master of Science (MS)</h4>
                <p className="text-gray-300">Data Science</p>
                <p className="text-gray-400">Pace University, NY</p>
                <p className="text-gray-400">2023 - 2024</p>
              </div>
            </div>

            {/* Lovely Professional University - Use lpu.png */}
            <div className="flex items-center gap-6 bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-lg">
              <img
                src="/images/education/lpu.png"
                alt="Lovely Professional University Logo"
                className="w-20 h-20 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">Bachelor of Technology (B.Tech)</h4>
                <p className="text-gray-300">Computer Science and Engineering</p>
                <p className="text-gray-400">Lovely Professional University, India</p>
                <p className="text-gray-400">2016 - 2020</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
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
            {/* Wall of Awesomeness Card */}
            <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
              <div className="relative group w-full flex justify-center mb-6">
                <img
                  src="/images/awards/awsome.png"
                  alt="Wall of Awesomeness Award"
                  className="w-64 h-80 object-contain rounded-xl shadow-xl border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage('/images/awards/awsome.png')}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <Maximize2 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-white text-center">Wall of Awesomeness</h4>
              <p className="text-gray-300 text-center">Pace University</p>
              <p className="text-gray-400 text-center">2024</p>
              <p className="text-gray-400 text-sm mt-2 text-center">Recognized for exceptional contributions and outstanding performance in the Data Science program</p>
            </div>

            {/* Tech Titan Card */}
            <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
              <div className="relative group w-full flex justify-center mb-6">
                <img
                  src="/images/awards/techtitan.png"
                  alt="Tech Titan Award"
                  className="w-64 h-80 object-contain rounded-xl shadow-xl border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage('/images/awards/techtitan.png')}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <Maximize2 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-white text-center">Tech Titan</h4>
              <p className="text-gray-300 text-center">Pace University</p>
              <p className="text-gray-400 text-center">2024</p>
              <p className="text-gray-400 text-sm mt-2 text-center">Awarded for demonstrating exceptional technical expertise and innovation in technology projects</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
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
            {/* Certification 1: Google Cloud Data Engineer */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
              <img
                src="/images/certifications/gcp.png"
                alt="Google Cloud Data Engineer Logo"
                className="w-40 h-40 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow mb-4"
              />
              <h4 className="text-xl font-semibold text-white text-center">Google Cloud Certified Data Engineer</h4>
              <p className="text-gray-300 text-center">Google Cloud</p>
              <p className="text-gray-400 text-center">Issued: 2024</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors duration-200"
              >
                View Credential
              </a>
            </div>

            {/* Certification 2: IBM Data Science */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-lg hover:border-blue-500/50 transition-all duration-300">
              <img
                src="/images/certifications/ibm.png"
                alt="IBM Data Science Logo"
                className="w-40 h-40 object-contain rounded-lg bg-white p-2 border border-gray-300 shadow mb-4"
              />
              <h4 className="text-xl font-semibold text-white text-center">IBM Data Science Professional Certificate</h4>
              <p className="text-gray-300 text-center">IBM / Coursera</p>
              <p className="text-gray-400 text-center">Issued: 2024</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors duration-200"
              >
                View Credential
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <TechStack />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always interested in discussing new opportunities, challenging data problems, 
            and innovative solutions. Whether you need to scale your data infrastructure or 
            build real-time analytics, let's connect.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email',
                subtitle: 'venkataanilkumar.p17@gmail.com',
                href: 'mailto:venkataanilkumar.p17@gmail.com'
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: 'LinkedIn',
                subtitle: 'Connect professionally',
                href: '#'
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: 'GitHub',
                subtitle: 'View my projects',
                href: '#'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Phone',
                subtitle: '(517)-715-0428',
                href: 'tel:5177150428'
              }
            ].map((contact, index) => (
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

      {/* Footer */}
      <footer className="py-4 border-t border-gray-800/50 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs">
            &copy; 2025 JAD Tech Company. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 z-40 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image view"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}

export default App;