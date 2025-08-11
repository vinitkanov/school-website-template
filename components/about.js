import React from 'react';
import Image from 'next/image';

// Reusable Card Component following DRY principle
const VisionMissionCard = ({ icon, title, description, iconColor = "text-[#E70CFF]" }) => (
  <div className="bg-white rounded-lg border border-[#C8C8C8] p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6 ${iconColor}`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// Vision Icon Component
const VisionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4.5C7.5 4.5 3.5 7.5 1.5 12C3.5 16.5 7.5 19.5 12 19.5C16.5 19.5 20.5 16.5 22.5 12C20.5 7.5 16.5 4.5 12 4.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Mission Icon Component
const MissionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 9h6v6H9z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const TentangKami = () => {
  return (
    <section className=" py-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h1>
        </div>

        {/* About Us Section */}
        <div className="bg-white rounded-lg shadow-sm mb-16 overflow-hidden border-1 border-[#C8C8C8]">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IpsumSCH
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla eleifend, risus in vehicula consequat, augue augue 
                commodo elit, at vulputate lectus orci sagittis mi.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative h-80 lg:h-auto">
              <Image
                src="/about-us.png"
                alt="Team collaboration workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900">
            Visi dan Misi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <VisionMissionCard
            icon={<VisionIcon />}
            title="Visi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, risus in vehicula consequat, augue augue commodo elit, at vulputate lectus orci sagittis mi."
          />
          
          <VisionMissionCard
            icon={<MissionIcon />}
            title="Misi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, risus in vehicula consequat, augue augue commodo elit, at vulputate lectus orci sagittis mi."
          />
        </div>
      </div>
    </section>
  );
};

export default TentangKami;