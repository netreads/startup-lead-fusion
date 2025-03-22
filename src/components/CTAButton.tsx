
import React from "react";

type CTAButtonProps = {
  text: string;
  onClick?: () => void;
  isPrimary?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  isPrimary = true,
  className = "",
  icon
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-lg font-bold transition-all transform duration-300 text-lg flex items-center justify-center gap-2 ${
        isPrimary 
          ? "bg-brand-orange text-white hover:shadow-lg hover:translate-y-[-2px]" 
          : "bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white"
      } ${className}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </button>
  );
};

export default CTAButton;
