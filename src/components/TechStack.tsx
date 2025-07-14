import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiAmazon, SiDocker, SiPostgresql, SiMongodb, SiApachekafka, SiApacheairflow, SiTableau, SiPowers, SiGithub, SiGitlab, SiTerraform, SiApachehadoop, SiApacheflink, SiScikitlearn, SiGrafana, SiKibana, SiOracle, SiSnowflake, SiGooglecloud, SiDatabricks, SiJenkins, SiLinux, SiOpenjdk, SiScala, SiJson, SiMysql, SiApachespark, SiApachehive, SiApachehbase, SiKubernetes, SiGoogledrive, SiGooglebigquery, SiElasticsearch, SiSplunk
} from 'react-icons/si';
import { FaProjectDiagram, FaWater, FaWarehouse, FaRobot, FaChartLine, FaNetworkWired, FaBullhorn } from 'react-icons/fa';
import { MdTimeline, MdDeviceHub, MdSwapHoriz, MdOutlineCampaign, MdApi } from 'react-icons/md';

const emojiIcon = (emoji: string, bg: string = 'bg-white', border: string = 'border-gray-300') => (
  <span className={`flex items-center justify-center w-10 h-10 text-2xl rounded-full ${bg} ${border} shadow-md`}>
    {emoji}
  </span>
);

const EtlPipelineIcon = () => (
  <svg className="w-10 h-10 rounded-full bg-green-100 border-2 border-green-400 shadow-md p-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="8" rx="10" ry="4" fill="#10B981" fillOpacity="0.7" />
    <rect x="6" y="8" width="20" height="10" rx="5" fill="#10B981" fillOpacity="0.5" />
    <rect x="10" y="18" width="12" height="6" rx="3" fill="#10B981" fillOpacity="0.4" />
    <path d="M16 24v4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="30" r="2" fill="#10B981" />
  </svg>
);

const DataPipelineIcon = () => (
  <svg className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-400 shadow-md p-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="4" rx="2" fill="#4285F4" fillOpacity="0.7" />
    <circle cx="8" cy="16" r="3" fill="#4285F4" />
    <circle cx="24" cy="16" r="3" fill="#4285F4" />
    <rect x="14" y="8" width="4" height="16" rx="2" fill="#4285F4" fillOpacity="0.5" />
  </svg>
);

const DataLakeIcon = () => (
  <svg className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-400 shadow-md p-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="20" rx="10" ry="6" fill="#29B5E8" fillOpacity="0.7" />
    <ellipse cx="16" cy="20" rx="7" ry="3" fill="#29B5E8" fillOpacity="0.5" />
    <ellipse cx="16" cy="20" rx="4" ry="1.5" fill="#29B5E8" fillOpacity="0.4" />
  </svg>
);

const DeltaLakeIcon = () => (
  <svg className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-400 shadow-md p-1" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,6 28,26 4,26" fill="#29B5E8" fillOpacity="0.7" />
    <ellipse cx="16" cy="24" rx="8" ry="2" fill="#29B5E8" fillOpacity="0.5" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  Python: <SiPython className="text-[#3776AB] bg-white rounded-full p-2 w-10 h-10" />,
  SQL: <SiPostgresql className="text-[#336791] bg-white rounded-full p-2 w-10 h-10" />,
  Scala: <SiScala className="text-[#DC322F] bg-white rounded-full p-2 w-10 h-10" />,
  Java: <SiOpenjdk className="text-[#007396] bg-white rounded-full p-2 w-10 h-10" />,
  Linux: <SiLinux className="text-[#FCC624] bg-black rounded-full p-2 w-10 h-10" />,
  JSON: <SiJson className="text-[#000000] bg-yellow-100 rounded-full p-2 w-10 h-10" />,
  AWS: <SiAmazon className="text-[#FF9900] bg-white rounded-full p-2 w-14 h-14 border-4 border-[#FF9900] shadow-lg" />,
  "Azure Data Lake": <FaWater className="text-[#0078D4] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "Cloud Storage": <SiGoogledrive className="text-[#4285F4] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "Cloud Composer (Airflow)": <SiApacheairflow className="text-[#017CEE] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  Functions: <MdOutlineCampaign className="text-[#FBC02D] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  GKE: <SiKubernetes className="text-[#326CE5] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  Terraform: <SiTerraform className="text-[#7B42BC] bg-purple-100 rounded-full p-2 w-10 h-10 border-2 border-purple-400" />,
  Docker: <SiDocker className="text-[#2496ED] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  Jenkins: <SiJenkins className="text-[#D24939] bg-red-100 rounded-full p-2 w-10 h-10 border-2 border-red-400" />,
  GitLab: <SiGitlab className="text-[#FC6D26] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  "GitHub Actions": <SiGithub className="text-[#181717] bg-gray-100 rounded-full p-2 w-10 h-10 border-2 border-gray-400" />,
  BigQuery: <SiGooglebigquery className="text-[#4285F4] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  Snowflake: <SiSnowflake className="text-[#29B5E8] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "Dataproc (Apache Spark, Hadoop)": <SiApachespark className="text-[#E25A1C] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  "Dataflow (Apache Beam)": <MdTimeline className="text-[#4285F4] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "Pub/Sub": <FaBullhorn className="text-[#FBC02D] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  "Databricks (Delta Lake)": <SiDatabricks className="text-[#FF3621] bg-red-100 rounded-full p-2 w-10 h-10 border-2 border-red-400" />,
  Kafka: <SiApachekafka className="text-[#231F20] bg-gray-100 rounded-full p-2 w-10 h-10 border-2 border-gray-400" />,
  "Apache Flink": <SiApacheflink className="text-[#E6526F] bg-pink-100 rounded-full p-2 w-10 h-10 border-2 border-pink-400" />,
  "Apache Spark": <SiApachespark className="text-[#E25A1C] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  PySpark: <SiApachespark className="text-[#E25A1C] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  "Spark SQL": <SiApachespark className="text-[#E25A1C] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  Hive: <SiApachehive className="text-[#FDEE21] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  "Hadoop HDFS": <SiApachehadoop className="text-[#66CCFF] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  HBase: <SiApachehbase className="text-[#D8E8EC] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  "Delta Lake": <DeltaLakeIcon />,
  Oozie: <MdDeviceHub className="text-[#FFCC00] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  "ETL Pipelines": <EtlPipelineIcon />,
  "Data Pipelines": <DataPipelineIcon />,
  "Data Lakes": <DataLakeIcon />,
  "Data Warehouses": <FaWarehouse className="text-[#6366F1] bg-indigo-100 rounded-full p-2 w-10 h-10 border-2 border-indigo-400" />,
  "Data Migration": <MdSwapHoriz className="text-[#EC4899] bg-pink-100 rounded-full p-2 w-10 h-10 border-2 border-pink-400" />,
  "Elastic Search": <SiElasticsearch className="text-[#005571] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  NoSQL: <SiMongodb className="text-[#47A248] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  MongoDB: <SiMongodb className="text-[#47A248] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  PostgreSQL: <SiPostgresql className="text-[#336791] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "SQL Server": <SiMysql className="text-[#CC2927] bg-red-100 rounded-full p-2 w-10 h-10 border-2 border-red-400" />,
  Oracle: <SiOracle className="text-[#F80000] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  Tableau: <SiTableau className="text-[#E97627] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  "Power BI": <SiPowers className="text-[#F2C811] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  Kibana: <SiKibana className="text-[#005571] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  Grafana: <SiGrafana className="text-[#F46800] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  Splunk: <SiSplunk className="text-[#000000] bg-gray-100 rounded-full p-2 w-10 h-10 border-2 border-gray-400" />,
  "Scikit-learn": <SiScikitlearn className="text-[#F7931E] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />,
  IAM: <SiAmazon className="text-[#FF9900] bg-orange-100 rounded-full p-2 w-10 h-10 border-2 border-orange-400" />,
  Boto3: <SiAmazon className="text-[#FF9900] bg-blue-100 rounded-full p-2 w-10 h-10 border-2 border-blue-400" />,
  "REST APIs": <FaNetworkWired className="text-[#10B981] bg-green-100 rounded-full p-2 w-10 h-10 border-2 border-green-400" />,
  AI: <FaRobot className="text-[#8B5CF6] bg-purple-100 rounded-full p-2 w-10 h-10 border-2 border-purple-400" />,
  ML: <FaChartLine className="text-[#F59E42] bg-yellow-100 rounded-full p-2 w-10 h-10 border-2 border-yellow-400" />
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
        "AWS",
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
        "PostgreSQL",
        "SQL Server",
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
                      {iconMap[skill] || <SiPython />}
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