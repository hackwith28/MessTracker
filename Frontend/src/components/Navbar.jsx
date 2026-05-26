import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              MessTracker
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {user && (
              <>
                <div className="flex flex-col items-end">
                  <p className="text-sm text-slate-400">Welcome back</p>
                  <p className="font-semibold text-white">{user.name}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut size={18} />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-700 space-y-4">
            {user && (
              <>
                <div className="flex items-center gap-3 pb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Welcome back</p>
                    <p className="font-semibold text-white">{user.name}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  onClick={handleLogout}
                  className="justify-start"
                >
                  <LogOut size={18} />
                  Logout
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
