import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-5 py-4 text-left font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <FaChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="region"
      >
        <div className="px-5 pb-4 text-slate-600 dark:text-slate-400 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items = [], className = "" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={`space-y-2 ${className}`} role="list">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export { AccordionItem };
export default Accordion;
