export default function FeatureCards() {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto w-full z-10 relative border-t border-slate-800" id="about">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Why use FunKoding?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-purple-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Real-time Preview</h3>
          <p className="text-slate-400 text-sm leading-relaxed">See changes as you slide. Pixel-perfect visual feedback instantly.</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-purple-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Clean Export</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Automatically generate highly optimized, production-ready Dart code.</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-purple-500/30 transition-colors shadow-xl">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Cross-Platform</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Paste your containers anywhere across iOS and Android flawlessly.</p>
        </div>
      </div>
    </section>
  );
}
