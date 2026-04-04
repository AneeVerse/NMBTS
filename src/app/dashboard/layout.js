export const metadata = {
  title: 'NMBTS Admin Dashboard',
  robots: 'noindex, nofollow',
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gold">NMBTS Dashboard</h1>
            <p className="text-sm text-gray-400">Manage your website content</p>
          </div>
          <a href="/" className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            View Site
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
