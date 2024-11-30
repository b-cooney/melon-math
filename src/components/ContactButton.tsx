import { ArrowRight } from 'lucide-react';

export const ContactButton = () => {
  return (
    <button
      onClick={() => window.location.href = 'mailto:contact@moonrise.com'}
      className="group flex items-center gap-2 px-6 py-3 text-lg text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200"
    >
      Get in touch
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  );
};