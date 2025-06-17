import React from 'react';
import { motion } from 'framer-motion';
import {
  // Programming Languages
  FileCode2,
  Database,
  Terminal,
  FileJson,
  // Cloud & Infrastructure
  Cloud,
  CloudCog,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  Server,
  Gitlab,
  Github,
  Settings,
  BarChart4,
  BarChartHorizontal,
  BarChart,
  Layers,
  Search,
  Code2,
  Sparkles,
  Workflow,
  Network,
  Container,
  ServerCog,
  LineChart,
  PieChart,
  Activity,
  Beaker,
  Webhook,
  Bot,
  Microscope,
  Shield
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  // Programming & Languages
  Python: <FileCode2 className="text-[#3776AB]" />,
  SQL: <Database className="text-[#F29111]" />,
  Scala: <FileCode2 className="text-[#DC322F]" />,
  Java: <FileCode2 className="text-[#007396]" />,
  Linux: <Terminal className="text-[#FCC624]" />,
  JSON: <FileJson className="text-[#000000]" />,

  // Cloud & Infrastructure
  'AWS (EMR, Glue, Lambda, S3)': <Cloud className="text-[#FF9900]" />,
  'AWS (Redshift, EC2, API Gateway, RDS, Cloud Watch)': <CloudCog className="text-[#FF9900]" />,
  'Azure Data Lake': <CloudDrizzle className="text-[#0078D4]" />,
  'Cloud Storage': <CloudLightning className="text-[#4285F4]" />,
  'Cloud Composer (Airflow)': <Workflow className="text-[#FF5A00]" />,
  Functions: <CloudSnow className="text-[#4285F4]" />,
  Kubernetes: <Container className="text-[#326CE5]" />,
  GKE: <ServerCog className="text-[#4285F4]" />,
  Terraform: <Settings className="text-[#7B42BC]" />,
  Docker: <Container className="text-[#2496ED]" />,
  Jenkins: <ServerCog className="text-[#D24939]" />,
  GitLab: <Gitlab className="text-[#FC6D26]" />,
  'GitHub Actions': <Github className="text-[#181717]" />,

  // Data Engineering & Big Data
  BigQuery: <Database className="text-[#4285F4]" />,
  Snowflake: <CloudSnow className="text-[#29B5E8]" />,
  'Dataproc (Apache Spark, Hadoop)': <Sparkles className="text-[#E25A1C]" />,
  'Dataflow (Apache Beam)': <Workflow className="text-[#4285F4]" />,
  'Pub/Sub': <Network className="text-[#4285F4]" />,
  'Databricks (Delta Lake)': <Database className="text-[#FF3621]" />,
  Kafka: <Server className="text-[#231F20]" />,
  'Apache Flink': <Workflow className="text-[#E6526F]" />,
  'Apache Spark': <Sparkles className="text-[#E25A1C]" />,
  PySpark: <Sparkles className="text-[#E25A1C]" />,
  'Spark SQL': <Database className="text-[#E25A1C]" />,
  Hive: <Database className="text-[#FDEE21]" />,
  'Hadoop HDFS': <Layers className="text-[#FFCC00]" />,
  HBase: <Database className="text-[#D8E8EC]" />,
  'Delta Lake': <Database className="text-[#FF3621]" />,
  Oozie: <Workflow className="text-[#FFCC00]" />,
  'ETL Pipelines': <BarChartHorizontal className="text-[#4285F4]" />,
  'Data Pipelines': <Workflow className="text-[#4285F4]" />,
  'Data Lakes': <Layers className="text-[#4285F4]" />,
  'Data Warehouses': <Database className="text-[#4285F4]" />,
  'Data Migration': <BarChart4 className="text-[#4285F4]" />,
  'Elastic Search': <Search className="text-[#005571]" />,

  // Databases
  NoSQL: <Database className="text-[#4285F4]" />,
  MongoDB: <Database className="text-[#47A248]" />,
  'RDBMS (Postgres, SQL Server)': <Database className="text-[#336791]" />,
  PostgreSQL: <Database className="text-[#336791]" />,
  Oracle: <Database className="text-[#F80000]" />,

  // Analytics & Tools
  Tableau: <PieChart className="text-[#E97627]" />,
  'Power BI': <BarChart className="text-[#F2C811]" />,
  Kibana: <Activity className="text-[#005571]" />,
  Grafana: <LineChart className="text-[#F46800]" />,
  Splunk: <Activity className="text-[#000000]" />,
  'Scikit-learn': <Beaker className="text-[#F7931E]" />,
  IAM: <Shield className="text-[#FF9900]" />,
  Boto3: <Webhook className="text-[#FF9900]" />,
  'REST APIs': <Webhook className="text-[#4285F4]" />,
  AI: <Bot className="text-[#4285F4]" />,
  ML: <Microscope className="text-[#4285F4]" />
};

const TechStack = () => {
  const skillCategories = [
    {
      title: "Programming & Languages",
      skills: ["Python", "SQL", "Scala", "Java", "Linux", "JSON"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS (EMR, Glue, Lambda, S3)",
        "AWS (Redshift, EC2, API Gateway, RDS, Cloud Watch)",
        "Azure Data Lake",
        "Cloud Storage",
        "Cloud Composer (Airflow)",
        "Functions",
        "Kubernetes",
        "GKE",
        "Terraform",
        "Docker",
        "Jenkins",
        "GitLab",
        "GitHub Actions"
      ]
    },
    {
      title: "Data Engineering & Big Data",
      skills: [
        "BigQuery",
        "Snowflake",
        "Dataproc (Apache Spark, Hadoop)",
        "Dataflow (Apache Beam)",
        "Pub/Sub",
        "Databricks (Delta Lake)",
        "Kafka",
        "Apache Flink",
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Hive",
        "Hadoop HDFS",
        "HBase",
        "Delta Lake",
        "Oozie",
        "ETL Pipelines",
        "Data Pipelines",
        "Data Lakes",
        "Data Warehouses",
        "Data Migration",
        "Elastic Search"
      ]
    },
    {
      title: "Databases",
      skills: [
        "NoSQL",
        "MongoDB",
        "RDBMS (Postgres, SQL Server)",
        "PostgreSQL",
        "Oracle"
      ]
    },
    {
      title: "Analytics & Tools",
      skills: [
        "Tableau",
        "Power BI",
        "Kibana",
        "Grafana",
        "Splunk",
        "Scikit-learn",
        "IAM",
        "Boto3",
        "REST APIs",
        "AI",
        "ML"
      ]
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
        <motion.div
              key={category.title}
          initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="group relative flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-700/50 rounded-full text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300 text-2xl">
                      {iconMap[skill] || <Code2 />}
                    </div>
                    <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
    </div>
  );
};

export default TechStack;