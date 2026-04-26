import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 px-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 shrink-0 z-10 relative">
      <div className="flex flex-col mb-4 md:mb-0 items-center md:items-start text-center md:text-left gap-1">
        <p>&copy; 2026 funkoding.</p>
        <p>Built for the Flutter Developer Community.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-2 md:mt-0">
        <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
      </div>
    </footer>
  );
}
