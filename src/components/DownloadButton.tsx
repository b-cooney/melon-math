import { Download } from 'lucide-react';
import JSZip from 'jszip';

const sourceFiles = {
  'package.json': `{
  "name": "My new app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}`,
  'src/App.tsx': `import './index.css';
import { Logo } from './components/Logo';
import { Tagline } from './components/Tagline';
import { Links } from './components/Links';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-50">
      <Logo />
      <Tagline />
      <Links />
    </div>
  );
}

export default App;`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}`,
  'README.md': `# MoonRise App

This is a React + Vite + TypeScript application.

## Getting Started

1. Clone this repository
2. Run \`npm install\`
3. Run \`npm run dev\` to start the development server
`
};

export const DownloadButton = () => {
  const handleDownload = async () => {
    const zip = new JSZip();

    // Add files to the zip
    Object.entries(sourceFiles).forEach(([path, content]) => {
      zip.file(path, content);
    });

    // Generate the zip file
    const blob = await zip.generateAsync({ type: 'blob' });

    // Create download link and trigger download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'moonrise-source.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="group flex items-center gap-2 px-6 py-3 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200"
    >
      Download Source
      <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};
