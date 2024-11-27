import { ArrowRight } from 'lucide-react';
import { ContactButton } from './ContactButton';

export const Links = () => {
  return (
    <div className="flex flex-col gap-4">
      <a
        href="#"
        className="group flex items-center gap-2 px-6 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Learn more about Melon Math
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
      </a>
      <a
        href="#"
        className="group flex items-center gap-2 px-6 py-3 text-lg text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200"
      >
        Register your interest
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
      </a>
      <ContactButton />
    </div>
  );
};
