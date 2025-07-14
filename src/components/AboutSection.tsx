import React from 'react';

interface AboutSectionProps {
  profileImage: string;
  aboutTitle: string;
  aboutParagraphs: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  profileImage,
  aboutTitle,
  aboutParagraphs,
}) => (
  <section id="about" className="py-20 relative">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-blue-400/40 bg-gray-800"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {aboutTitle}
        </h2>
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 