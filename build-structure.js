const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

// Create directories
['src/components', 'src/pages'].forEach(dir => {
  const fullPath = path.join(rootDir, dir);
  if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath, { recursive: true });
});

// File contents
const files = {
  'src/components/Navbar.jsx': `
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 h-16 shrink-0 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between px-8 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="font-bold text-white text-xs">FK</span>
        </div>
        <h1 className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">FunKoding</h1>
      </Link>
      
      <div className="flex items-center gap-6 text-sm font-medium">
        <button onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Interactive Tool</button>
        <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
        <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
        <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
      </div>
    </nav>
  );
}
`,
  'src/components/Hero.jsx': `
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 relative overflow-hidden shrink-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          <span className="text-white">The Fun Way to Code Beautiful </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Flutter UI.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop writing boring code. Visually design your cross-platform containers and instantly export clean, production-ready Dart code.
        </p>
        <button 
          onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 ring-2 ring-indigo-400/20 flex items-center gap-3 cursor-pointer mb-6"
        >
          Start Designing Now
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </button>
      </div>
    </section>
  );
}
`,
  'src/components/FeatureCards.jsx': `
export default function FeatureCards() {
  return (
    <section className="py-12 px-8 max-w-6xl mx-auto w-full z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Design</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Adjust visual properties in real-time.</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Copy</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Automatically generate production-ready Dart/Flutter code.</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-purple-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Build</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Paste directly into your app and see the results.</p>
        </div>
      </div>
    </section>
  );
}
`,
  'src/components/Footer.jsx': `
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
`,
  'src/pages/About.jsx': `
export default function About() {
  return (
    <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
      <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-8">About FunKoding</h1>
        <div className="space-y-6">
          <p>Welcome to FunKoding, the easiest way to generate UI for your Mobile Apps.</p>
          <p>Our mission is to help developers stop writing boring code and start building apps faster and visually.</p>
        </div>
      </div>
    </main>
  );
}
`,
  'src/pages/Privacy.jsx': `
export default function PrivacyPolicy() {
  return (
    <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
      <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          <p>Welcome to FunKoding's Privacy Policy. Your privacy is critically important to us.</p>
          <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>We do not collect any personal data when you use the generator locally.</p>
          <h2 className="text-xl font-semibold text-white mt-8">2. Cookies and Tracking</h2>
          <p>We use standard functional cookies to maintain your session state. We use Google AdSense, which may use cookies to serve ads based on your prior visits.</p>
          <p className="pt-8 text-sm text-slate-500 border-t border-slate-800 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </main>
  );
}
`,
  'src/pages/Terms.jsx': `
export default function Terms() {
  return (
    <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
      <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-8">Terms and Conditions</h1>
        <div className="space-y-6">
          <p>By accessing FunKoding, you agree to be bound by these Terms and Conditions.</p>
          <h2 className="text-xl font-semibold text-white mt-8">1. Use License</h2>
          <p>You may use the generated code snippets freely in your commercial and non-commercial projects without attribution.</p>
          <h2 className="text-xl font-semibold text-white mt-8">2. Disclaimer</h2>
          <p>The materials on FunKoding are provided on an 'as is' basis.</p>
          <p className="pt-8 text-sm text-slate-500 border-t border-slate-800 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </main>
  );
}
`,
  'src/pages/Home.jsx': `
import { useState } from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';

const SliderControl = ({ label, value, min, max, onChange, unit = "px" }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">{value}{unit}</span>
    </div>
    <input 
      type="range" min={min} max={max} value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1.5 bg-slate-700/50 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
    />
  </div>
);

export default function Home() {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);
  const [borderRadius, setBorderRadius] = useState(24);
  const [elevation, setElevation] = useState(8);
  const [color, setColor] = useState('#8b5cf6');
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dartCode);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const dartCode = \`Container(
  width: \${width}.0,
  height: \${height}.0,
  decoration: BoxDecoration(
    color: Color(0xFF\${color.replace('#', '').toUpperCase()}),
    borderRadius: BorderRadius.circular(\${borderRadius}.0),\${elevation > 0 ? \`\\n    boxShadow: [\\n      BoxShadow(\\n        color: Colors.black.withOpacity(0.2),\\n        spreadRadius: 0.0,\\n        blurRadius: \${elevation * 2}.0,\\n        offset: Offset(0.0, \${elevation}.0),\\n      ),\\n    ],\` : ''}
  ),
)\`;

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <Hero />
      <FeatureCards />

      {/* Main Workspace */}
      <div id="generator" className="flex h-[calc(100vh-4rem)] min-h-0 bg-slate-950 border-t border-slate-800">
        <aside className="w-80 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 flex flex-col transition-all duration-300 shadow-xl z-20">
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                Flutter Container
              </h2>
              
              <div className="space-y-6">
                <SliderControl label="Width" value={width} min={50} max={400} onChange={setWidth} />
                <SliderControl label="Height" value={height} min={50} max={400} onChange={setHeight} />
                <SliderControl label="Border Radius" value={borderRadius} min={0} max={200} onChange={setBorderRadius} />
                <SliderControl label="Elevation" value={elevation} min={0} max={32} onChange={setElevation} unit="" />
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-slate-300">Background Color</label>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md uppercase">{color}</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-lg shadow-inner border border-slate-700 overflow-hidden relative">
                      <div className="absolute inset-0" style={{ backgroundColor: color }}></div>
                    </div>
                    <input 
                      type="color" value={color} onChange={(e) => setColor(e.target.value)}
                      className="w-full h-10 bg-slate-800 rounded-lg cursor-pointer border-0 p-1 hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col min-w-0 relative">
          <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800 bg-slate-900/40 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 text-sm font-medium rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                Interactive Preview
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8 flex items-center justify-center relative bg-[#0a0f1c]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-60 pointer-events-none"></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <div 
                 style={{ 
                   width: \`\${width}px\`, 
                   height: \`\${height}px\`, 
                   borderRadius: \`\${borderRadius}px\`,
                   backgroundColor: color,
                   boxShadow: elevation > 0 ? \`0px \${elevation}px \${elevation * 2.5}px rgba(0,0,0,0.25), 0px \${elevation / 2}px \${elevation}px rgba(0,0,0,0.15)\` : 'none',
                   transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}
                 className="flex items-center justify-center relative"
              >
                <span className="text-white/60 font-medium text-sm drop-shadow-md select-none mix-blend-plus-lighter">Container</span>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-[400px] bg-slate-900 border-l border-slate-800 flex flex-col shadow-2xl z-20">
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800 shrink-0">
            <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Dart Code
            </h2>
            <button 
              onClick={copyToClipboard}
              className={\`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 \${showToast ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'}\`}
            >
              {showToast ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2 2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-[#0d1117] p-5 text-sm font-mono text-blue-300 leading-relaxed relative group">
            <pre className="whitespace-pre-wrap select-all">{dartCode}</pre>
          </div>
        </aside>
      </div>

      {/* Documentation / Guide Snippet */}
      <section className="py-24 px-8 max-w-4xl mx-auto w-full text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">What is a Flutter Container widget?</h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          The <strong className="text-indigo-400 font-semibold">Flutter Container</strong> is a powerful convenience widget that combines common painting, positioning, and sizing natively into one unified bounding box. Often comparable to a standard HTML <code className="bg-slate-800 px-2 py-1 rounded text-sm font-mono">&lt;div&gt;</code>, the container handles intricate padding gradients, box shadows, and background radius decorations, making it the absolute most critical foundational UI building block in cross-platform mobile development!
        </p>
      </section>
    </main>
  );
}
`,
  'src/App.jsx': `
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}
`
};

Object.entries(files).forEach(([file, content]) => {
  fs.writeFileSync(path.join(rootDir, file), content.trim());
});

console.log('Successfully structured files');
