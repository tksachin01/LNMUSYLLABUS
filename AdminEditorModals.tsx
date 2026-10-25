import React, { useState, useEffect } from 'react';
import { X, Check, Trash2, BookOpen, FileText, Layers } from 'lucide-react';

interface EditTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (topicText: string) => void;
  initialText?: string;
  isNew?: boolean;
  unitTitle?: string;
  darkMode: boolean;
}

export const EditTopicModal: React.FC<EditTopicModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialText = '',
  isNew = false,
  unitTitle = '',
  darkMode
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    setText(initialText);
  }, [initialText, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSave(text.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-lg rounded-2xl border shadow-2xl p-5 sm:p-6 z-10 ${
        darkMode ? 'bg-[#0b1629] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base sm:text-lg">
              {isNew ? 'Add New Topic' : 'Edit Topic Content'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {unitTitle && (
          <p className="text-xs text-slate-400 mb-3">
            Target Unit: <strong className="text-amber-400">{unitTitle}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Topic Description / Syllabus Point
            </label>
            <textarea
              autoFocus
              required
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter comprehensive syllabus topic..."
              className={`w-full p-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed ${
                darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isNew ? 'Add Topic' : 'Save Changes'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface EditUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (unitTitle: string) => void;
  initialTitle?: string;
  isNew?: boolean;
  darkMode: boolean;
}

export const EditUnitModal: React.FC<EditUnitModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialTitle = '',
  isNew = false,
  darkMode
}) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSave(title.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-md rounded-2xl border shadow-2xl p-5 sm:p-6 z-10 ${
        darkMode ? 'bg-[#0b1629] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base sm:text-lg">
              {isNew ? 'Add New Unit' : 'Edit Unit Title'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Unit Title & Number
            </label>
            <input
              autoFocus
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Unit 4: Advanced Statistical Thermodynamics"
              className={`w-full p-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Tip: Standard format is "Unit 1: [Topic Title]" or "Module I: [Topic Title]"
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isNew ? 'Create Unit' : 'Save Unit Title'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface EditCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (courseData: { courseTitle: string; courseCode: string; credits: string; marks?: string }) => void;
  initialData?: { courseTitle: string; courseCode: string; credits: string; marks?: string };
  isNew?: boolean;
  darkMode: boolean;
}

export const EditCourseModal: React.FC<EditCourseModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData = { courseTitle: '', courseCode: '', credits: '4', marks: '100' },
  isNew = false,
  darkMode
}) => {
  const [courseTitle, setCourseTitle] = useState(initialData.courseTitle || '');
  const [courseCode, setCourseCode] = useState(initialData.courseCode || '');
  const [credits, setCredits] = useState(String(initialData.credits || '4'));
  const [marks, setMarks] = useState(initialData.marks || '100');

  useEffect(() => {
    if (initialData) {
      setCourseTitle(initialData.courseTitle || '');
      setCourseCode(initialData.courseCode || '');
      setCredits(String(initialData.credits || '4'));
      setMarks(initialData.marks || '100');
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (courseTitle.trim() && courseCode.trim()) {
      onSave({
        courseTitle: courseTitle.trim(),
        courseCode: courseCode.trim().toUpperCase(),
        credits: credits.trim() || '4',
        marks: marks.trim() || undefined
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-lg rounded-2xl border shadow-2xl p-5 sm:p-6 z-10 ${
        darkMode ? 'bg-[#0b1629] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base sm:text-lg">
              {isNew ? 'Add New Course Paper' : 'Edit Course Information'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Course Title
            </label>
            <input
              autoFocus
              required
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="e.g. Classical Mechanics & Wave Motion"
              className={`w-full p-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Course Code
              </label>
              <input
                required
                type="text"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                placeholder="e.g. MJC-1"
                className={`w-full p-2.5 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 uppercase ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Credits
              </label>
              <input
                required
                type="number"
                min="1"
                max="30"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                className={`w-full p-2.5 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Total Marks
              </label>
              <input
                type="text"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="100"
                className={`w-full p-2.5 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-amber-500 ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 text-xs font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{isNew ? 'Create Course' : 'Save Course Info'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  darkMode: boolean;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  darkMode
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className={`relative w-full max-w-md rounded-2xl border shadow-2xl p-6 z-10 ${
        darkMode ? 'bg-[#0b1629] border-red-500/30 text-white' : 'bg-white border-red-200 text-slate-900'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
            <Trash2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
          {message}
        </p>
        <div className="flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 text-xs font-bold cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete Permanently</span>
          </button>
        </div>
      </div>
    </div>
  );
};
