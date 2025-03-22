
import React from "react";

type BonusCardProps = {
  number: number;
  title: string;
  description: string;
  value: string;
  delay: number;
};

const BonusCard: React.FC<BonusCardProps> = ({ 
  number, 
  title, 
  description, 
  value,
  delay 
}) => {
  return (
    <div 
      className="border border-brand-gray rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-brand-blue text-white p-3 font-bold text-center">
        BONUS #{number}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-brand-navy">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="text-brand-orange font-semibold">Value: {value}</div>
      </div>
    </div>
  );
};

export default BonusCard;
