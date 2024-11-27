import { useState, useEffect } from 'react';
import { Edit2, Check } from 'lucide-react';

export const EditableText = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Coming soon...');

  useEffect(() => {
    consta savedText = localStorage.getItem('comingSoonText');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('comingSoonText', text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-4 py-2 text-lg text-gray-600 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          autoFocus
        />
        <button
          onClick={handleSave}
          className="p-2 text-gray-600 hover:text-gray-800"
        >
          <Check size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <p className="text-lg text-gray-600">{text}</p>
      <button
        onClick={() => setIsEditing(true)}
        className="p-2 text-gray-400 hover:text-gray-600"
      >
        <Edit2 size={16} />
      </button>
    </div>
  );
};
