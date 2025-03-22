
import React from "react";
import { Gift } from "lucide-react";

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
      className="border border-brand-gray rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] bg-white"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-brand-blue text-white p-3 font-bold text-center flex items-center justify-center">
        <Gift className="w-5 h-5 mr-2" />
        <span>BONUS #{number}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2 text-brand-navy">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="text-brand-orange font-semibold flex items-center justify-between">
          <span>Value:</span>
          <span className="text-lg">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;
