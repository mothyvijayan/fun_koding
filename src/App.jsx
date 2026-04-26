import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const PrivacyPolicy = () => (
  <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
    <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <p>Welcome to UI Gen Pro's Privacy Policy. Your privacy is critically important to us.</p>
        <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
        <p>We do not collect any personal data when you use the UI Gen Pro generator locally. If you opt-in to cloud saves, we store your email and hashed password.</p>
        <h2 className="text-xl font-semibold text-white mt-8">2. Cookies and Tracking</h2>
        <p>We use standard functional cookies to maintain your session state. We use Google AdSense, which may use cookies to serve ads based on your prior visits.</p>
        <h2 className="text-xl font-semibold text-white mt-8">3. Data Security</h2>
        <p>We implement standard security practices to protect your generated components. However, please remember that no method of transmission over the internet is 100% secure.</p>
        <p className="pt-8 text-sm text-slate-500 border-t border-slate-800 mt-8">Last updated: April 2026</p>
      </div>
    </div>
  </main>
)

const Terms = () => (
  <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
    <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Terms and Conditions</h1>
      <div className="space-y-6">
        <p>By accessing UI Gen Pro, you agree to be bound by these Terms and Conditions.</p>
        <h2 className="text-xl font-semibold text-white mt-8">1. Use License</h2>
        <p>You may use the generated code snippets (Flutter, Compose, SwiftUI) freely in your commercial and non-commercial projects without attribution.</p>
        <h2 className="text-xl font-semibold text-white mt-8">2. Disclaimer</h2>
        <p>The materials on UI Gen Pro are provided on an 'as is' basis. We make no warranties regarding the complete accuracy or reliability of the generated output.</p>
        <h2 className="text-xl font-semibold text-white mt-8">3. Limitations</h2>
        <p>In no event shall UI Gen Pro be liable for any damages arising out of the use or inability to use the generated code snippets.</p>
        <p className="pt-8 text-sm text-slate-500 border-t border-slate-800 mt-8">Last updated: April 2026</p>
      </div>
    </div>
  </main>
)

// UI Components
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
)

const HomePage = () => {
  const [width, setWidth] = useState(250)
  const [height, setHeight] = useState(250)
  const [borderRadius, setBorderRadius] = useState(24)
  const [elevation, setElevation] = useState(8)
  const [color, setColor] = useState('#8b5cf6')
  const [showToast, setShowToast] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dartCode)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  const dartCode = `Container(
  width: ${width}.0,
  height: ${height}.0,
  decoration: BoxDecoration(
    color: Color(0xFF${color.replace('#', '').toUpperCase()}),
    borderRadius: BorderRadius.circular(${borderRadius}.0),${elevation > 0 ? `\n    boxShadow: [\n      BoxShadow(\n        color: Colors.black.withOpacity(0.2),\n        spreadRadius: 0.0,\n        blurRadius: ${elevation * 2}.0,\n        offset: Offset(0.0, ${elevation}.0),\n      ),\n    ],` : ''}
  ),
)`

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 relative overflow-hidden">
        {/* Decorative background blur blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            <span className="text-white">The Smartest UI Generator for </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Flutter & Cross-Platform Devs</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop guessing padding and hex codes. Visually design your containers and export production-ready Dart code instantly.
          </p>
          <div className="flex flex-col items-center">
            <button 
              onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 ring-2 ring-indigo-400/20 flex items-center gap-3 cursor-pointer mb-6"
            >
              Get Started
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </button>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800/60 backdrop-blur-sm">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Used by 500+ developers to speed up UI workflows.
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <div id="generator" className="flex h-[calc(100vh-4rem)] min-h-0 bg-slate-950 border-t border-slate-800">
        {/* Sidebar - Property Editor */}
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

        {/* Main Preview Area - Middle */}
        <main className="flex-1 flex flex-col min-w-0 relative">
          <header className="h-16 flex items-center justify-between px-8 border-b border-slate-800 bg-slate-900/40 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 text-sm font-medium rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                Interactive Preview
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8 flex items-center justify-center relative bg-[#0a0f1c]">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzQxNTUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <div 
                 style={{ 
                   width: `${width}px`, 
                   height: `${height}px`, 
                   borderRadius: `${borderRadius}px`,
                   backgroundColor: color,
                   boxShadow: elevation > 0 ? `0px ${elevation}px ${elevation * 2.5}px rgba(0,0,0,0.25), 0px ${elevation / 2}px ${elevation}px rgba(0,0,0,0.15)` : 'none',
                   transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
                 }}
                 className="flex items-center justify-center relative"
              >
                <span className="text-white/60 font-medium text-sm drop-shadow-md select-none mix-blend-plus-lighter">Container</span>
              </div>
            </div>
          </div>
        </main>

        {/* Code Output Panel - Right */}
        <aside className="w-[400px] bg-slate-900 border-l border-slate-800 flex flex-col shadow-2xl z-20">
          <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800 shrink-0">
            <h2 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Dart Code
            </h2>
            <button 
              onClick={copyToClipboard}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${showToast ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700'}`}
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
    </main>
  )
}

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 h-16 shrink-0 bg-slate-900/60 backdrop-blur-xl border-b border-slate-800 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h1 className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">UI Gen Pro</h1>
          </Link>
          
          <div className="flex items-center gap-6 text-sm font-medium ml-4">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <Link to="/" className="text-indigo-400 relative py-5">
              Tools
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-t-full"></span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/terms" className="text-slate-400 hover:text-slate-200 transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="text-slate-400 hover:text-slate-200 transition-colors">Privacy Policy</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      
    </div>
  )
}

export default App
