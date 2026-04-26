export default function PrivacyPolicy() {
  return (
    <main className="flex-1 overflow-y-auto p-8 lg:p-16 flex justify-center">
      <div className="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-10 text-slate-300">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          <p>Welcome to FunKoding's Privacy Policy. Your privacy is critically important to us.</p>
          
          <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>We do not collect any personal data when you use the generator locally. Our utility tools process operations directly within your browser session without persisting sensitive user telemetry.</p>
          
          <h2 className="text-xl font-semibold text-white mt-8">2. Cookies and Third-Party Advertising</h2>
          <p>We use standard functional cookies to maintain your session state. However, to support this site, we use Google AdSense as a third-party vendor to serve ads.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-400">
            <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noreferrer">Google Ads Settings</a>.</li>
          </ul>

          <p className="pt-8 text-sm text-slate-500 border-t border-slate-800 mt-8">Last updated: April 2026</p>
        </div>
      </div>
    </main>
  );
}
