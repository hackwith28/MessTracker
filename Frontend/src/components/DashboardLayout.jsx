import Navbar from "./Navbar";

export default function DashboardLayout({ children, user }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar user={user} />
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6">
        {children}
      </main>
    </div>
  );
}
