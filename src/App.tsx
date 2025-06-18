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

  const socialLinks = [
    {
      href: 'mailto:venkata.kumar517@gmail.com',
      label: 'Email',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      href: 'https://github.com/AnilChowdarypoka',
      label: 'GitHub',
      icon: <Github className="w-6 h-6" />,
    },
    {
      href: 'https://x.com/anil_poka?lang=en',
      label: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      href: 'https://www.linkedin.com/in/pvakc/',
      label: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      href: 'tel:6467838157',
      label: 'Phone',
      icon: <Phone className="w-6 h-6" />,
    },
  ];

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
        socialLinks={socialLinks}
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
              Venkata Kumar<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Data Engineer
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experienced Data Engineer specializing in building scalable data infrastructure, 
              real-time analytics systems, and cloud-native solutions.
            </motion.p>
            
            {/* Social Media & Contact Icons */}
            <motion.div 
              className="flex justify-center items-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="mailto:venkata.kumar517@gmail.com"
                className="group relative"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  Email Me
                </span>
              </motion.a>

              <motion.a
                href="https://github.com/AnilChowdarypoka"
                className="group relative"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="https://x.com/anil_poka?lang=en"
                className="group relative"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <Twitter className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  Twitter
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/pvakc/"
                className="group relative"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  LinkedIn
                </span>
              </motion.a>

                <motion.a
                href="tel:6467838157"
                className="group relative"
                whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <Phone className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                  Call Me
                </span>
                </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '10+', label: 'Satisfied Clients' },
                { number: '5', label: 'Years of Experience' }
              ].map((stat, index) => (
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
            {[
              {
                company: "Verizon",
                role: "Data Engineer",
                period: "Aug 2024 - Present",
                location: "Basking Ridge, New Jersey",
                achievements: [
                  "Designed, developed, and optimized end-to-end data pipelines using Google Cloud Storage, BigQuery, Dataflow, and PySpark, enabling high-throughput processing of structured and unstructured telecom, billing, and customer data, processing over 3TB daily and improving data ingestion speed by 50%.",
                  "Built and managed scalable big data environments leveraging Google Cloud Dataproc (Spark & Hadoop), which enhanced both batch and real-time data processing and accelerated analytics for underwriting and fraud detection teams by 40%.",
                  "Engineered modular ETL components in Python and SQL integrated with Data Fusion and Beam, automating complex data workflows with robust error handling to achieve 99.9% data pipeline uptime.",
                  "Architected fault-tolerant, low-latency real-time streaming data ingestion pipelines using Apache Kafka, Pub/Sub, and Apache Flink, reducing fraud alert detection time from hours to under 2 minutes and enhancing risk mitigation capabilities.",
                  "Developed data transformation and cleansing scripts in Python, automating ingestion workflows for telecom usage, billing, and customer data while applying quality assurance best practices.",
                  "Constructed a layered data lake architecture on Google Cloud Storage to organize raw, transformed, and curated telecom data, securing efficient access for analytics and reporting.",
                  "Built high-performance, secure data warehouses using Google BigQuery and Snowflake by integrating internal and external data sources to support predictive modeling and regulatory reporting.",
                  "Leveraged advanced SQL techniques in Google BigQuery to optimize partitioning and clustering strategies, which enhanced query performance by 40% and reduced costs by 25%.",
                  "Implemented centralized data governance using Google DataPlex to manage and catalog metadata across telecom data in Cloud Storage and BigQuery.",
                  "Developed custom monitoring and alerting solutions with Google Cloud Operations Suite and Cloud Logging, ensuring proactive detection and resolution of pipeline failures to maintain SLAs.",
                  "Mentored junior engineers on cloud-native data engineering, Apache Beam pipelines, and security policies, fostering knowledge sharing and enhancing team productivity.",
                  "Collaborated with DevOps to implement fully automated CI/CD pipelines using GitLab CI/CD and Google Cloud Build, reducing deployment times by 60% while enabling continuous integration and smooth rollback procedures.",
                  "Partnered with compliance, data science, and product teams to translate business needs into scalable data solutions, facilitating data democratization and reducing time-to-insight by 35%."
                ]
              },
              {
                company: "Verisk Underwriting",
                role: "Data Engineer",
                period: "Jul 2023 - Aug 2024",
                location: "Jersey City, New Jersey",
                achievements: [
                  "Engineered robust big data pipelines on AWS EMR using PySpark and HDFS to process over 5TB of underwriting and policy data daily, reducing ingestion time by 60% and enhancing accessibility for risk analytics.",
                  "Designed and implemented real-time streaming ingestion pipelines with Apache Kafka and AWS Lambda, reducing event detection latency from hours to under 5 minutes and enabling dynamic risk scoring with 20% improved accuracy.",
                  "Built and managed scalable data lakes on AWS S3 integrated with MongoDB for flexible schema management of semi-structured and unstructured insurance and geospatial data, which accelerated advanced modeling analytics.",
                  "Developed star schema data models in Hive and Redshift that supported complex analytics on underwriting and exposure data, boosting dashboard query performance by 3x and aiding actuarial pricing decisions.",
                  "Created PySpark and SQL-based ETL workflows incorporating automated validation and monitoring via AWS CloudWatch and Lambda to achieve 99.9% pipeline reliability and data accuracy.",
                  "Implemented automated data profiling and quality assurance using Python and Hive, thereby reducing anomalies, and increasing the precision of predictive risk models used by actuarial teams.",
                  "Collaborated with actuarial, compliance, and product teams to convert business requirements into scalable data solutions while establishing data lineage and governance frameworks across Kafka streams, Hive tables, and HDFS storage.",
                  "Optimized Hive metastore configurations, Spark job parameters, and HDFS resource allocation on AWS EMR clusters, enhancing query performance and reducing cloud costs by 25% without impacting SLAs.",
                  "Implemented robust error handling and incremental load strategies within ETL workflows to improve data freshness and reliability for real-time reporting and actuarial modeling.",
                  "Built scalable ingestion pipelines for streaming and batch data using Logstash and Kafka, enabling near real-time indexing and improved search capabilities for fraud detection workflows.",
                  "Automated routine Linux administration tasks using shell scripting and Cron jobs to ensure system reliability and minimize downtime.",
                  "Integrated APIs and legacy on-premises data sources with cloud pipelines using Python and AWS Glue, consolidating over a decade of insurance and property data into a centralized analytics platform.",
                  "Orchestrated complex data workflows with Apache Airflow and AWS Step Functions, enhancing pipeline reliability and operational efficiency while reducing failure rates by 30%.",
                  "Implemented CI/CD pipelines using Jenkins, AWS CodePipeline, and CodeBuild to automate testing, deployment, and rollback of data pipelines, reducing deployment time by 50%."
                ]
              },
              {
                company: "Go Digit General Insurance Private Limited",
                role: "Data Engineer",
                period: "Jul 2021 - Dec 2022",
                location: "Bengalore, India",
                achievements: [
                  "Engineered and scaled data solutions using AWS services and big data technologies to enhance processing capabilities and support evolving business objectives, reducing operational bottlenecks by 20 hours monthly.",
                  "Collaborated across functions to design robust data models and deploy SOAP/REST APIs, increasing data accessibility by 40% and achieving a 25% improvement in system interoperability for real-time updates.",
                  "Centralized unstructured API logs for over 500 clients by designing a scalable data pipeline with AWS DMS, Kafka, and AWS Lambda, enabling real-time failure detection, and reducing system downtime by 40%.",
                  "Developed a scalable real-time telematics data processing pipeline using AWS, Kafka, and PySpark to analyze driving behavior and travel patterns for personalized insurance premiums, thereby improving pricing accuracy and enhancing customer satisfaction.",
                  "Designed and implemented an 8-batch processing architecture using Airflow with reconciliation logic to manage flight delay insurance data from multiple vendors, increasing claims processing accuracy to 95% and reducing resolution time by 30%.",
                  "Pioneered the development of a KYC module for life insurance using Python, Azure, and MongoDB with microservices, integrating with multiple clients to build a secure data lake, and reducing data verification time by 50%.",
                  "Developed a data lake to classify and store IP address data, which identified and blocked 40% of suspicious traffic, thus preventing potential data theft.",
                  "Automated real-time analytics and notifications for insurance claims pre-inspection using Apache Kafka, Apache Flink, Apache Airflow, PostgreSQL, and AWS Lambda, cutting downtime by 40% and improving system reliability.",
                  "Architected a centralized data lake on Amazon S3 and Azure Data Lake Storage, enabling efficient management of structured, semi-structured, and unstructured data while designing scalable ETL pipelines.",
                  "Analyzed large, critical datasets in the insurance and financial sectors using Python, SQL, and Hadoop technologies (HDFS, Hive, PySpark, Kafka) to drive actionable business insights and operational improvements.",
                  "Migrated legacy databases to Postgres using DMS, ensuring 100% data integrity and reducing operational disruptions by 10%.",
                  "Automated reporting processes using Python, SQL, and tools such as Tableau, Qlik & PowerBI, cutting reporting time by 20%.",
                  "Managed Agile project milestones using Scrum, conducted RCA, and improved system reliability and resilience by 30%."
                ]
              },
              {
                company: "Prospecta Software Solutions Private Limited",
                role: "Software Engineer, Data",
                period: "Aug 2020 - Jul 2021",
                location: "Gurgaon, India",
                achievements: [
                  "Developed and optimized RESTful APIs using Python and AWS API Gateway, enhancing data accessibility, and reducing latency by 30%, which enabled seamless integration with cloud-based data warehouses for real-time insights.",
                  "Engineered Python-based applications by leveraging advanced libraries to build scalable solutions, thereby improving system performance by 25% and automating complex workflows.",
                  "Designed and automated ETL workflows for data extraction from MySQL, PostgreSQL, and other RDBMS, transforming and loading results into HDFS, Snowflake, and Delta Lake to reduce manual processing time by 40%.",
                  "Built API-driven data ingestion pipelines using Python (Pandas, NumPy, Requests), Apache Airflow, and AWS Lambda that automated the movement of structured and semi-structured data to cloud storage, cutting manual effort by 60%.",
                  "Optimized SQL query performance to reduce execution time by 40% and enhance overall data retrieval efficiency.",
                  "Revamped documentation using Confluence and introduced automated lineage tracking, which reduced support queries by 50%.",
                  "Collaborated with data analysts, project managers, and the DevOps team to set clear objectives and ensure 100% on-time project delivery."
                ]
              }
            ].map((experience, index) => (
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
                      className={`flex items-start space-x-2 ${
                        !expandedExperience && i >= 3 ? 'hidden' : ''
                      }`}
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
                subtitle: 'venkata.kumar517@gmail.com',
                href: 'mailto:venkata.kumar517@gmail.com'
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: 'LinkedIn',
                subtitle: 'Connect professionally',
                href: 'https://www.linkedin.com/in/pvakc/'
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: 'GitHub',
                subtitle: 'View my projects',
                href: '#'
              },
              {
                icon: <Twitter className="w-8 h-8" />,
                title: 'Twitter',
                subtitle: '@anil_poka',
                href: 'https://x.com/anil_poka?lang=en'
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