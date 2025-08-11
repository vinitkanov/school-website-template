import React from 'react';
import { Star, Quote } from 'lucide-react';

// Reusable Star Rating Component
const StarRating = ({ rating = 5, maxStars = 5 }) => {
  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating 
              ? 'text-orange-400 fill-orange-400' 
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// Main Testimonial Card Component
const TestimonialCard = ({ 
  name = "Herman Hendrycs",
  role = "Orang Tua", 
  avatar = "/api/placeholder/48/48",
  rating = 5,
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend."
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#C8C8C8] relative max-w-sm">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm truncate">{name}</h3>
          <p className="text-xs text-gray-500 truncate">{role}</p>
        </div>
        <StarRating rating={rating} />
      </div>
      
      {/* Testimonial Content */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{content}</p>
      
      {/* Quote Icon */}
      <div className="absolute bottom-4 right-4">
        <Quote 
          size={24}
          className="text-gray-200" 
        />
      </div>
    </div>
  );
};

export default function TestimonialDemo() {
  const testimonials = [
    {
      name: "Herman Hendrycs",
      role: "Orang Tua",
      avatar: "/review-profile-01.png",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend."
    },
    {
      name: "Herman Hendrycs", 
      role: "Orang Tua",
      avatar: "/review-profile-01.png",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend."
    },
    {
      name: "Herman Hendrycs", 
      role: "Orang Tua",
      avatar: "/review-profile-01.png",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend."
    }
  ];

  return (
    <div className="h-fit p-4 border-b-1 border-[#C8C8C8] pb-30">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Apa kata mereka?
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}