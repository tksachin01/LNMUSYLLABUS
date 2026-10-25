import React from 'react';
import { 
  ShieldCheck, 
  CloudUpload, 
  RotateCcw, 
  LogOut, 
  Plus, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';

interface AdminActionBarProps {
  adminUsername: string;
  hasUncommittedChanges: boolean;
  uncommittedCount: number;
  onCommit: () => void;
  onDiscard: () => void;
  onResetToDefault: () => void;
  onAddNewCourse: () => void;
  onLogout: () => void;
  isSaving: boolean;
  lastCommittedAt?: string | null;
  darkMode: boolean;
}

export const AdminActionBar: React.FC<AdminActionBarProps> = ({
  adminUsername,
  hasUncommittedChanges,
  uncommittedCount,
  onCommit,
  onDiscard,
  onResetToDefault,
  onAddNewCourse,
  onLogout,
  isSaving,
  lastCommittedAt,
  darkMode
}) => {
  return (
    <div className={`sticky top-0 z-30 w-full border-b shadow-md transition-all ${
      darkMode 
        ? 'bg-[#0a1527]/95 border-amber-500/30 text-white backdrop-blur-md' 
        : 'bg-gradient-to-r from-amber-50 via-white to-amber-50/90 border-amber-300 text-slate-900 shadow-amber-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Admin ID & Status */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>ADMIN MODE</span>
          </div>

          <span className="text-xs font-semibold text-slate-300 hidden md:inline">
            Logged in: <strong className="text-amber-400">{adminUsername}</strong>
          </span>

          {hasUncommittedChanges ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold animate-pulse">
              <AlertCircle className="w-3 h-3" />
              {uncommittedCount} {uncommittedCount === 1 ? 'change' : 'changes'} pending commit
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <CheckCircle2 className="w-3 h-3" />
              Public syllabus synchronized
            </span>
          )}

          {lastCommittedAt && (
            <span className="text-[11px] text-slate-400 hidden xl:inline">
              Last committed: {new Date(lastCommittedAt).toLocaleTimeString()}
            </span>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <button
            type="button"
            onClick={onAddNewCourse}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            title="Add a new course paper to this semester"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Course</span>
          </button>

          {hasUncommittedChanges && (
            <button
              type="button"
              onClick={onDiscard}
              disabled={isSaving}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
              title="Discard draft edits in current session"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Discard</span>
            </button>
          )}

          <button
            type="button"
            onClick={onCommit}
            disabled={isSaving || !hasUncommittedChanges}
            className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer ${
              hasUncommittedChanges 
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30 ring-2 ring-emerald-400/40' 
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
            }`}
            title="Publish all modifications live to public users"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Committing...</span>
              </>
            ) : (
              <>
                <CloudUpload className="w-4 h-4" />
                <span>Commit to Public</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onResetToDefault}
            className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-xs font-medium transition-all"
            title="Reset current syllabus to official university default curriculum"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={onLogout}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ml-1"
            title="Log out from Admin session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};
