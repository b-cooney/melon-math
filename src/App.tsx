import './index.css';
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

export default App;
