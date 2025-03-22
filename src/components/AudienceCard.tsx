
import React from "react";
import { LucideIcon } from "lucide-react";

type AudienceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  roi: string;
  delay: number;
};

const AudienceCard: React.FC<AudienceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  roi,
  delay 
}) => {
  return (
    <div 
      className={`flex flex-col h-full p-6 rounded-xl bg-white border border-brand-gray shadow-sm hover:shadow-md transition-all duration-300 animate-in animate-delay-${delay}`}
    >
      <div className="rounded-full bg-brand-blue/10 p-3 mb-4 self-start">
        <Icon className="h-6 w-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-navy">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="bg-brand-gray/50 p-3 rounded-lg">
        <span className="font-semibold text-brand-navy">Potential ROI:</span> {roi}
      </div>
    </div>
  );
};

export default AudienceCard;
