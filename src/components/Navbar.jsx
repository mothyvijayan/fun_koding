import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 h-16 shrink-0 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between px-8 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <span className="font-bold text-white text-xs">FK</span>
        </div>
        <h1 className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">funkoding</h1>
      </Link>
      
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
        <button onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Tools</button>
        <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
      </div>
    </nav>
  );
}
