'use client';

import React from 'react';
import Image from 'next/image';


// School level data - DRY principle applied
const schoolLevels = [
  {
    id: 'sd',
    title: 'SD',
    description: 'Lorem impsump dio thor sii amett consectetur si thor do secto tod',
    buttonText: 'Lebih lengkap...',
    image: '/kurikulum-1.png' // Replace with your actual image path
  },
  {
    id: 'smp',
    title: 'SMP',
    description: 'Lorem impsump dio thor sii amett consectetur si thor do secto tod',
    buttonText: 'Lebih lengkap...',
    image: '/kurikulum-1.png' // Replace with your actual image path
  },
  {
    id: 'sma',
    title: 'SMA',
    description: 'Lorem impsump dio thor sii amett consectetur si thor do secto tod',
    buttonText: 'Lebih lengkap...',
    image: '/kurikulum-1.png' // Replace with your actual image path
  }
];

// Reusable Card Component - DRY principle
const SchoolLevelCard = ({ level, onLearnMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto">
      {/* Image Container */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={level.image}
          alt={`${level.title} - School Level`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Purple Smile Icon Overlay - positioned in bottom left */}
        <div className="absolute bottom-3 left-3">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="1.5"/>
              <circle cx="15" cy="9" r="1.5"/>
              <path d="M8.5 13.5a3.5 3.5 0 0 0 7 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
          {level.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center px-2">
          {level.description}
        </p>
        
        {/* Learn More Button */}
        <div className="text-center">
          <button
            onClick={() => onLearnMore(level)}
            className="text-gray-500 text-xs hover:text-purple-500 transition-colors duration-200 font-medium underline"
          >
            {level.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const JenjangSekolah = () => {
  const handleLearnMore = (level) => {
    console.log(`Learn more about ${level.title}`);
    // Add your navigation logic here
    // e.g., router.push(`/school-levels/${level.id}`);
  };

  return (
    <div className="w-full py-12 px-4 bg-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Jenjang Sekolah
          </h1>
          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {schoolLevels.map((level) => (
            <SchoolLevelCard
              key={level.id}
              level={level}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JenjangSekolah;