import React, { useState } from 'react';
import { Lock, ShieldCheck, AlertCircle, X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { loginAdmin, AdminUser } from '../lib/syllabusService';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (token: string, admin: AdminUser) => void;
  darkMode: boolean;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  darkMode
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await loginAdmin(username.trim(), password);
    setLoading(false);

    if (result.success && result.token && result.admin) {
      onSuccess(result.token, result.admin);
      setUsername('');
      setPassword('');
      onClose();
    } else {
      setError(result.error || 'Access Denied: Invalid administrator credentials.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={() => !loading && onClose()} 
      />
      
      <div className={`relative w-full max-w-md rounded-2xl border shadow-2xl overflow-hidden z-10 transition-all ${
        darkMode 
          ? 'bg-[#0b1629] border-slate-700 text-white shadow-black/60' 
          : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
      }`}>
        {/* Modal Header */}
        <div className={`px-6 py-5 border-b flex items-center justify-between ${
          darkMode 
            ? 'bg-[#0f1f38] border-slate-800' 
            : 'bg-slate-50 border-slate-100'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">Admin Authentication</h3>
              <p className="text-xs text-slate-400 font-medium">Curriculum Management Portal</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors disabled:opacity-50 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
            darkMode 
              ? 'bg-blue-950/30 border-blue-800/40 text-blue-200' 
              : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Restricted Access:</strong> Only verified university curriculum administrators can log in. Public accounts are prohibited.
              </span>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs flex items-start gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-400">
              Admin Username
            </label>
            <input
              type="text"
              required
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter admin email/username"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-400">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={`w-full px-4 py-2.5 pr-11 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode 
                    ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sign In as Admin</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
