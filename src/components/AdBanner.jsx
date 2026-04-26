export default function AdBanner() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4">
      <div className="h-24 w-full bg-slate-900/40 backdrop-blur-sm border border-dashed border-slate-700/50 rounded-xl flex flex-col items-center justify-center text-slate-500 overflow-hidden relative group">
        <span className="text-xs font-semibold tracking-widest uppercase mb-1 drop-shadow-md">Advertisement Space</span>
        <span className="text-[10px] text-slate-600">Google AdSense Placeholder</span>
        
        {/* Decorative shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-800/20 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
      </div>
    </div>
  );
}
