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
