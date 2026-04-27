import { useState } from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import AdBanner from '../components/AdBanner';

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

      <AdBanner />
      <FeatureCards />
      
      {/* 1. Why Funkoding? Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Modern UI Design Made Simple</h2>
            <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          </div>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Building modern mobile applications requires precision. Visual design tools dramatically reduce the 'Trial and Error' process for mobile developers by allowing you to instantly preview container styling without constantly hot-reloading your application.
            </p>
            <p>
              By bridging the gap between design and development, you can achieve faster deployment times and maintain cleaner codebases. Focus on building features while we handle the boilerplate styling properties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The 3-Step Workflow Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">The 3-Step Workflow</h2>
          <p className="text-slate-400">From concept to production-ready code in seconds.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="text-purple-400 font-mono text-xl mb-4 font-semibold tracking-wider">Step 01</div>
            <h3 className="text-xl font-semibold text-white mb-3">Visual Tweaking</h3>
            <p className="text-slate-400 leading-relaxed">Use intuitive sliders to adjust borders, shadows, and colors instantly. No more guessing numeric values for the perfect look.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="text-emerald-400 font-mono text-xl mb-4 font-semibold tracking-wider">Step 02</div>
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Preview</h3>
            <p className="text-slate-400 leading-relaxed">See exactly how your widget will look on a real mobile device screen before you even copy a single line of code.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="text-blue-400 font-mono text-xl mb-4 font-semibold tracking-wider">Step 03</div>
            <h3 className="text-xl font-semibold text-white mb-3">One-Click Export</h3>
            <p className="text-slate-400 leading-relaxed">Copy production-ready Dart code that fully supports Null Safety, ready to be pasted directly into your IDE.</p>
          </div>
        </div>
      </section>

      {/* 3. Advanced Design Styles Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Design Styles</h2>
          <p className="text-slate-400">Create the most trending UI patterns with zero effort.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Glassmorphism</h3>
            <p className="text-slate-400 leading-relaxed">Use our tool to master frosted glass effects. We handle the complex BoxDecoration logic combining background Opacity and backdrop Blur filters.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="h-12 w-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Neumorphic UI</h3>
            <p className="text-slate-400 leading-relaxed">Easily implement 'Soft UI' designs. Our generator accurately calculates double shadows—highlighting and shading—to create extruded or pressed surface effects.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Material 3</h3>
            <p className="text-slate-400 leading-relaxed">Built with full compatibility for the latest Google Design standards. Generate containers that fit perfectly into your Material App themes.</p>
          </div>
        </div>
      </section>

      {/* 4. Flutter Performance Tips */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full relative z-10 mb-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Optimizing Your Flutter Widgets</h2>
          <p className="text-slate-400 mb-8 text-lg">Follow these best practices to ensure your generated containers don't impact your app's frame rate:</p>
          <ul className="space-y-6">
            <li className="flex items-start gap-5">
              <div className="mt-1 bg-emerald-500/20 p-2 rounded-full border border-emerald-500/30 shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <strong className="text-slate-200 block mb-2 text-lg">Leverage Const Constructors</strong>
                <span className="text-slate-400 leading-relaxed block">Always use the 'const' keyword for your container decorations when properties are static. This tells Flutter to reuse the widget instead of rebuilding it.</span>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="mt-1 bg-emerald-500/20 p-2 rounded-full border border-emerald-500/30 shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <strong className="text-slate-200 block mb-2 text-lg">Avoid Unnecessary Repaints</strong>
                <span className="text-slate-400 leading-relaxed block">Complex shadows and blur effects can cause performance drops if animated. Extract heavy containers into simpler components or use RepaintBoundary when animating a parent widget.</span>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="mt-1 bg-emerald-500/20 p-2 rounded-full border border-emerald-500/30 shrink-0">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <strong className="text-slate-200 block mb-2 text-lg">Optimize Shadow Spread</strong>
                <span className="text-slate-400 leading-relaxed block">Keep your shadow blur and spread radii reasonable. Extravagant shadowing requires more processing power, especially on low-end mobile devices.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <AdBanner />
    </main>
  );
}
