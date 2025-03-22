
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
      className={`flex flex-col items-start p-6 rounded-xl bg-white border border-brand-gray shadow-sm hover:shadow-md transition-all duration-300 animate-in animate-delay-${delay}`}
    >
      <div className="rounded-full bg-brand-blue/10 p-3 mb-4">
        <Icon className="h-6 w-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BenefitCard;
