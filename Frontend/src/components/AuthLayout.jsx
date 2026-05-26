export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-slate-400 text-lg">{subtitle}</p>
        </div>

        {/* Card */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl shadow-black/50 border border-slate-700 p-8">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Smart Hostel Meal Management System
        </p>
      </div>
    </div>
  );
}
