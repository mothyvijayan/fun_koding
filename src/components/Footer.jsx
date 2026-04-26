import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 px-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 shrink-0 z-10 relative">
      <p>&copy; 2026 FunKoding. All rights reserved.</p>
      <div className="flex items-center gap-6 mt-4 md:mt-0">
        <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
