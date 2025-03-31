
import React from "react";
import { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col items-start p-6 rounded-xl bg-white border border-brand-gray shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 p-3 mb-4 flex items-center justify-center">
        <Icon className="h-6 w-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
