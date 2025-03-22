
import React from "react";

type TestimonialCardProps = {
  image: string;
  name: string;
  position: string;
  testimonial: string;
  delay: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  image, 
  name, 
  position, 
  testimonial,
  delay 
}) => {
  return (
    <div className={`flex flex-col bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-in animate-delay-${delay}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-brand-navy">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
