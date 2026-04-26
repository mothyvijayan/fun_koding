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
