import { ArrowRight } from 'lucide-react';
import { ContactButton } from './ContactButton';

export const Links = () => {
  return (
    <div className="flex flex-col gap-4">
      <a
        href="https://melonmath.notion.site/Melon-Math-International-Mathematics-Competition-1493cd7f9d58809781cfddfde66ee06d?pvs=74"
        className="group flex items-center gap-2 px-6 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Learn more about Melon Math
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
      </a>
      <a
        href="https://forms.gle/NNWd9ZZ8y9UGm8HF9"
        className="group flex items-center gap-2 px-6 py-3 text-lg text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200"
      >
        Register your interest
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
      </a>
      <ContactButton />
    </div>
  );
};
