import { useState } from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';

const SliderControl = ({ label, value, min, max, onChange, unit = "px" }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">{value}{unit}</span>
    </div>
    <input 
      type="range" min={min} max={max} value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1.5 bg-slate-700/50 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 transition-all"
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

  const dartCode = String.raw`Container(
  width: ${width}.0,
  height: ${height}.0,
  decoration: BoxDecoration(
    color: Color(0xFF${color.replace('#', '').toUpperCase()}),
    borderRadius: BorderRadius.circular(${borderRadius}.0),${elevation > 0 ? `\n    boxShadow: [\n      BoxShadow(\n        color: Colors.black.withOpacity(0.2),\n        spreadRadius: 0.0,\n        blurRadius: ${elevation * 2}.0,\n        offset: Offset(0.0, ${elevation}.0),\n      ),\n    ],` : ''}
  ),
)`;

  return (
    <main className="flex-1 flex flex-col min-h-0 bg-slate-950">
      <Hero />
      
      {/* Main Workspace */}
      <div id="generator" className="flex flex-col lg:flex-row lg:h-[calc(100vh-4rem)] bg-slate-950 border-t border-slate-800 lg:overflow-hidden relative">
        <aside className="w-full lg:w-80 bg-slate-900/80 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col transition-all duration-300 shadow-xl z-20 shrink-0 h-[400px] lg:h-auto overflow-hidden">
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
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md uppercase">{color}</span>
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

        <main className="flex-1 flex flex-col min-w-0 relative min-h-[400px] lg:min-h-0">
          <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-slate-800 bg-slate-900/40 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 text-sm font-medium rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                Interactive Preview
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8 flex items-center justify-center relative bg-[#0a0f1c]">
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

        <aside className="w-full lg:w-[400px] bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col shadow-2xl z-20 h-[500px] lg:h-auto shrink-0">
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

      <FeatureCards />
    </main>
  );
}
