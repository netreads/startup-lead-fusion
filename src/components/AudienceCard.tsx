
import React from "react";
import { LucideIcon } from "lucide-react";

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  roi: string;
  valueProposition: string;
  delay: number;
};

const AudienceCard: React.FC<AudienceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  roi,
  valueProposition,
  delay 
}) => {
  return (
    <div 
      className="flex flex-col h-full p-6 rounded-xl bg-white border border-brand-gray shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-brand-blue/10 p-3 mb-4 self-start">
        <Icon className="h-6 w-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <div className="bg-brand-gray/30 p-4 rounded-lg mb-4">
        <span className="font-semibold text-brand-navy">Potential ROI:</span> {roi}
      </div>
      
      <div className="bg-brand-blue/5 p-4 rounded-lg border-l-4 border-brand-blue">
        <p className="text-brand-navy font-medium">{valueProposition}</p>
      </div>
    </div>
  );
};

export default AudienceCard;
