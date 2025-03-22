
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg text-brand-navy"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-brand-blue" />
        ) : (
          <ChevronDown className="h-5 w-5 text-brand-blue" />
        )}
      </button>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
