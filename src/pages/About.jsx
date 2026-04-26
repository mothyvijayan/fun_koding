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
