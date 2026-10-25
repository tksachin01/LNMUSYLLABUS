/**
 * @file PostdocRegulationsPortal.tsx
 * @description Interactive Post-Doctoral (D.Litt. & D.Sc.) Regulations Portal for LNMU.
 * Implements:
 * 1. 6-Stage Roadmap (Enrolment Gateway, Council Presentation & PGRC, Research Period, Submission, Examination, Viva)
 * 2. Post-Doctoral Eligibility Calculator (3-year post-PhD experience, 10 refereed papers, external board rules)
 * 3. Clause-by-Clause Official LNMU Post-Doctoral Regulations Browser (including Clause 13 fallback provision)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, GraduationCap, Microscope, BookOpen, Clock, FileText, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Sparkles, Scale, AlertCircle, RefreshCw
} from 'lucide-react';

/**
 * Interface representing a post-doctoral milestone stage.
 */
interface Stage {
  title: string;
  shortDesc: string;
  details: string[];
  duration?: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

export default function PostdocRegulationsPortal() {
  // Collapsible view state (teaser vs. expanded portal)
  const [isExpanded, setIsExpanded] = useState(false);
  // Active sub-tab
  const [activeTab, setActiveTab] = useState<'flowchart' | 'calculator' | 'regulations'>('flowchart');
  // Currently highlighted stage
  const [selectedStage, setSelectedStage] = useState<number | null>(0);

  // ==========================================================================
  // Post-Doctoral Eligibility Assessment State
  // ==========================================================================
  const [hasPhd, setHasPhd] = useState<boolean | null>(null);
  const [phdYears, setPhdYears] = useState<number>(3);
  const [papersCount, setPapersCount] = useState<number>(10);
  const [hasPresentation, setHasPresentation] = useState<boolean | null>(null);
  const [hasSupervisor, setHasSupervisor] = useState<boolean | null>(null);

  const stages: Stage[] = [
    {
      title: '1. Enrolment Gateway',
      shortDesc: 'Prerequisites for starting the D.Litt. or D.Sc. journey.',
      icon: GraduationCap,
      badge: 'Eligibility',
      details: [
        'Must possess a valid Ph.D. degree from LNMU or another recognized university of repute.',
        'At least 3 years must have elapsed since the date of obtaining the Ph.D. degree.',
        'Essential minimum of 10 research papers published in refereed national or international journals of repute.'
      ]
    },
    {
      title: '2. Project Presentation & PGRC Board Approval',
      shortDesc: 'Initial presentation and external expert reviews.',
      icon: FileText,
      badge: 'Evaluation',
      details: [
        'Candidate must deliver an official academic presentation regarding the post-doctoral project before the Departmental Council.',
        'Applications for enrolment are scrutinized by the Departmental Research Council only.',
        'Board of Research Studies (PGRC) will officially consider enrolment after obtaining the positive opinion of three eminent subject experts strictly from outside Bihar state.'
      ]
    },
    {
      title: '3. Supervised Research Period',
      shortDesc: 'Conducting substantial independent research.',
      icon: Microscope,
      badge: 'Max 7 Years',
      details: [
        'The candidate must work under an active supervisor who is either a D.Litt./D.Sc. holder or has made standard post-doctoral contributions.',
        'Enrolment automatically cancels if the candidate fails to submit (supplicate) the complete thesis within 7 years from enrolment date.',
        'The theme of research must exhibit original, substantial discovery of new avenues or marked advance on previous investigations.'
      ]
    },
    {
      title: '4. Thesis Submission Standards',
      shortDesc: 'Submission of formal printed thesis copies and credentials.',
      icon: BookOpen,
      badge: '4 Printed Copies',
      details: [
        'Submit exactly four printed or type-written copies of the thesis to the Examination Department.',
        'Supervisor Certificate verifying the work did not previously form a basis for any award to any individual.',
        'Two Character of fitness testimonials given by Department professors holding doctoral titles.',
        'Detailed preface outlining the exact extent of independent research and lists of sources/notes in appendices.'
      ]
    },
    {
      title: '5. Triple-Expert Board Assessment',
      shortDesc: 'Evaluation by external peer reviewers out-of-state.',
      icon: ShieldAlertIcon, // Use Custom fallback if needed or let's use standard Scale
      badge: 'Unanimous Consensus',
      details: [
        'Thesis is evaluated by 3 Examiners from outside Bihar state (one is normally the supervisor).',
        'Award of D.Litt. or D.Sc. is granted ONLY when examiners are unanimous in their recommendations.',
        'If even one examiner suggests revision, candidate must submit a modified draft within 1 year. Only one revision is permitted.'
      ]
    },
    {
      title: '6. Written Test & Public Viva-Voce',
      shortDesc: 'Syllabus mastery, oral defense, and final result.',
      icon: Award,
      badge: 'Final Defense',
      details: [
        'If recommended by any examiner, candidate must pass a written test (2 papers, 3 hours each) based on the thesis theme.',
        'Appoint to appear before the examiners for a public viva-voce conducted at LNMU Headquarters in Darbhanga.',
        'Special Provision Clause 13: If examiners find the work does not satisfy D.Litt./D.Sc. standards but meets PhD standards, candidate may be awarded a Ph.D. instead so their rigorous research effort is recognized.'
      ]
    }
  ];

  function ShieldAlertIcon(props: any) {
    return <Scale {...props} />;
  }

  // Calculate Eligibility Verdict
  const getEligibilityVerdict = () => {
    if (hasPhd === null || hasPresentation === null || hasSupervisor === null) {
      return {
        status: 'pending',
        title: 'Form Incomplete',
        message: 'Please answer all eligibility assessment questions above to see your customized enrolment feedback.',
        color: 'border-slate-300 bg-slate-50 text-slate-700'
      };
    }
    if (hasPhd === false) {
      return {
        status: 'ineligible',
        title: 'Ph.D. Prerequisite Missing',
        message: 'Under Regulation 1(a), you must possess a Doctorate degree (Ph.D.) to qualify for Post-Doctoral enrolment (D.Litt. or D.Sc.).',
        color: 'border-red-400 bg-red-50 text-red-900'
      };
    }
    if (phdYears < 3) {
      return {
        status: 'ineligible',
        title: 'Experience Period Incomplete',
        message: 'Under LNMU Regulations, a candidate is allowed to pursue D.Litt. or D.Sc. at least three (3) years after obtaining the Ph.D. degree.',
        color: 'border-amber-400 bg-amber-50 text-amber-900'
      };
    }
    if (papersCount < 10) {
      return {
        status: 'ineligible',
        title: 'Publications Threshold Unreached',
        message: 'Regulation 1(b) mandates at least 10 high-quality research papers published in refereed national or international journals of repute.',
        color: 'border-amber-400 bg-amber-50 text-amber-900'
      };
    }
    if (hasPresentation === false) {
      return {
        status: 'pending-presentation',
        title: 'Department Presentation Required',
        message: 'Under Regulation 1(c), you must finalize and deliver your postdoctoral project presentation to the Departmental Council.',
        color: 'border-blue-400 bg-blue-50 text-blue-900'
      };
    }
    if (hasSupervisor === false) {
      return {
        status: 'pending-supervisor',
        title: 'Qualified Supervisor Required',
        message: 'Under Regulation 2, you are required to conduct research under a supervisor who is either a D.Litt. or has established postdoctoral contributions.',
        color: 'border-indigo-400 bg-indigo-50 text-indigo-900'
      };
    }

    return {
      status: 'eligible',
      title: 'Sufficiently Eligible to Apply!',
      message: 'Excellent! You meet the LNMU D.Litt. / D.Sc. admission parameters. You can proceed with enrolment by submitting a formal application and enrolment fees after your departmental board review.',
      color: 'border-emerald-500 bg-emerald-50 text-emerald-900'
    };
  };

  const verdict = getEligibilityVerdict();

  if (!isExpanded) {
    return (
      <div className="bg-gradient-to-r from-[#0b1b36] to-[#152e55] rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8 mt-2 p-6 text-white relative animate-in fade-in-50 duration-300 w-full">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="text-[#d4af37] w-6 h-6 shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] bg-red-500/25 text-[#ffd54f] border border-red-500/20 px-2 rounded-full tracking-wider font-extrabold uppercase">
                Postdoc Regulations Portal
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              D.Litt. & D.Sc. Roadmap & Guidelines
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Unlock the comprehensive workflow planner, eligibility scoring engine, and executive guidelines based on official LNMU regulations.
            </p>
          </div>
          <button 
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ffd54f] hover:bg-amber-400 text-[#0b1b36] rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 shrink-0 animate-pulse hover:animate-none cursor-pointer"
          >
            Expand Postdoc Guidelines
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8 mt-2 animate-in fade-in-50 duration-300">
      {/* Header and Branding */}
      <div className="bg-gradient-to-r from-[#0b1b36] to-[#152e55] px-6 py-8 text-white relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Award className="text-[#d4af37] w-8 h-8 shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] bg-red-500/20 text-[#ffd54f] border border-red-500/30 px-2.5 py-0.5 rounded-full tracking-wider font-extrabold uppercase">
                Official LNMU Regulations
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Doctor of Literature (D.Litt.) & Doctor of Science (D.Sc.)
            </h2>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-[#ffd54f] hover:text-white border border-white/20 hover:border-white/40 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer mt-2 md:mt-0"
          >
            Shrink Section
          </button>
        </div>
        <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
          Comprehensive milestone flowchart, eligibility scoring engine, and executive guidelines based on official Lalit Narayan Mithila University examination department regulations.
        </p>

        {/* Tab Controls */}
        <div className="flex border-b border-white/10 mt-6 gap-2">
          <button
            onClick={() => setActiveTab('flowchart')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'flowchart' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Academic Flowchart
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'calculator' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Eligibility Calculator
          </button>
          <button
            onClick={() => setActiveTab('regulations')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'regulations' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Core Provisions & Rules
          </button>
        </div>
      </div>

      <div className="p-6 bg-slate-50/50">
        <AnimatePresence mode="wait">
          {/* TAB 1: ACADEMIC FLOWCHART */}
          {activeTab === 'flowchart' && (
            <motion.div
              key="flowchart"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Horizontal / Vertical Stepper representation */}
                <div className="md:w-1/3 flex flex-col gap-2 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm h-fit">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2 block">
                    Award Milestones
                  </span>
                  {stages.map((stage, sIdx) => {
                    const StageIcon = stage.icon;
                    const isActive = selectedStage === sIdx;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedStage(sIdx)}
                        className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all outline-none ${
                          isActive 
                            ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-sm' 
                            : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-1.5 rounded-lg shrink-0 ${
                            isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <StageIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold truncate">{stage.title}</span>
                        </div>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                          isActive ? 'bg-blue-200/50 text-blue-800' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {stage.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Stage Detail Card */}
                <div className="flex-1 bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {selectedStage !== null && (
                      <motion.div
                        key={selectedStage}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        className="space-y-6"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2.5 py-1 bg-[#f4ebd4] text-amber-800 text-[10px] font-extrabold tracking-widest uppercase rounded">
                              Stage {selectedStage + 1}
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium">LNMU Postdoc Pathway</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Georgia, serif' }}>
                            {stages[selectedStage].title.replace(/^\d+\.\s*/, '')}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">{stages[selectedStage].shortDesc}</p>
                        </div>

                        <div className="border-t border-slate-100 pt-6">
                          <h4 className="text-xs font-extrabold text-blue-800 uppercase tracking-widest mb-4">
                            Detailed Examination Provisions
                          </h4>
                          <ul className="space-y-3.5">
                            {stages[selectedStage].details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex gap-3 text-sm text-slate-600 leading-relaxed items-start">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-6">
                    <button
                      disabled={selectedStage === 0}
                      onClick={() => setSelectedStage(prev => (prev !== null && prev > 0) ? prev - 1 : 0)}
                      className="px-4 py-1.5 border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 rounded-lg text-xs font-bold transition-all"
                    >
                      Previous Stage
                    </button>
                    <span className="text-xs text-slate-400 font-semibold">
                      Milestone {selectedStage !== null ? selectedStage + 1 : 1} of 6
                    </span>
                    <button
                      disabled={selectedStage === stages.length - 1}
                      onClick={() => setSelectedStage(prev => (prev !== null && prev < stages.length - 1) ? prev + 1 : stages.length - 1)}
                      className="px-4 py-1.5 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 rounded-lg text-xs font-bold transition-all shadow-sm"
                    >
                      Next Stage
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ELIGIBILITY CALCULATOR */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Questionnaire Form */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  LNMU Postdoc Self-Verification
                </h3>

                {/* Question 1 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    1. Do you hold a Ph.D. degree?
                  </label>
                  <p className="text-[11px] text-slate-400">Must be from LNMU or a University recognized by law.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setHasPhd(true)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPhd === true 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Yes, Ph.D. Awarded
                    </button>
                    <button
                      onClick={() => setHasPhd(false)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPhd === false 
                          ? 'border-red-400 bg-red-50 text-red-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      No Ph.D. Degree
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      2. Years since Ph.D. Award?
                    </label>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {phdYears} Years
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Regulation 1(a) mandates at least 3 years before enrolment.</p>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={phdYears}
                    onChange={(e) => setPhdYears(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Question 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      3. Number of Published Research Papers?
                    </label>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      papersCount >= 10 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {papersCount} Papers
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">Must be published in refereed journals of National/International repute (Min: 10).</p>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    value={papersCount}
                    onChange={(e) => setPapersCount(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Question 4 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    4. Departmental Presentation Completed?
                  </label>
                  <p className="text-[11px] text-slate-400">Delivered post-doctoral project presentation before the Departmental Council.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setHasPresentation(true)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPresentation === true 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => setHasPresentation(false)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPresentation === false 
                          ? 'border-amber-400 bg-amber-50 text-amber-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Pending Presentation
                    </button>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    5. Designated Qualified Supervisor?
                  </label>
                  <p className="text-[11px] text-slate-400">Supervisor must hold a D.Litt./D.Sc. or have standard post-doctoral contributions.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setHasSupervisor(true)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasSupervisor === true 
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Yes, Identified
                    </button>
                    <button
                      onClick={() => setHasSupervisor(false)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasSupervisor === false 
                          ? 'border-amber-400 bg-amber-50 text-amber-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Not Identified
                    </button>
                  </div>
                </div>
              </div>

              {/* Eligibility Verdict Card */}
              <div className="flex flex-col justify-between">
                <div className={`p-6 md:p-8 rounded-3xl border-2 shadow-sm transition-all h-full flex flex-col justify-between ${verdict.color}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {verdict.status === 'eligible' ? (
                        <div className="p-2 bg-emerald-500 text-white rounded-full">
                          <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
                        </div>
                      ) : verdict.status === 'ineligible' ? (
                        <div className="p-2 bg-red-500 text-white rounded-full">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="p-2 bg-amber-500 text-white rounded-full">
                          <HelpCircle className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#5c5c5c] block">
                          Your Verdict Result
                        </span>
                        <h4 className="font-bold text-lg leading-tight mt-0.5">
                          {verdict.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed font-sans mt-2">
                      {verdict.message}
                    </p>
                  </div>

                  <div className="border-t border-slate-200/50 pt-5 mt-6 space-y-3">
                    <span className="text-xs font-bold block uppercase tracking-wide">
                      Summary Admission Checklist
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>Academic Qualification (Ph.D.)</span>
                        <span className={`font-bold ${hasPhd ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {hasPhd ? 'PASSED' : 'FAILED'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Post-Ph.D. Time Period (&gt;= 3 Yrs)</span>
                        <span className={`font-bold ${phdYears >= 3 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {phdYears >= 3 ? `PASSED (${phdYears} Yrs)` : `FAILED (${phdYears} Yrs)`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Refereed Publications (&gt;= 10 Papers)</span>
                        <span className={`font-bold ${papersCount >= 10 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {papersCount >= 10 ? `PASSED (${papersCount}/10)` : `INSUFFICIENT (${papersCount}/10)`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Seminar Presentation</span>
                        <span className={`font-bold ${hasPresentation ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {hasPresentation ? 'COMPLETE' : 'PENDING'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>D.Litt/D.Sc Supervisor</span>
                        <span className={`font-bold ${hasSupervisor ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {hasSupervisor ? 'PASSED' : 'PENDING'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CORE PROVISIONS & RULES */}
          {activeTab === 'regulations' && (
            <motion.div
              key="regulations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Board of Examiners Selection Rules */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-[#0b1b36]">
                    <Scale className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Examiners & Evaluation (Regulation 4)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed space-y-3">
                    The thesis must be thoroughly scrutinized by a Board of{' '}
                    <strong className="text-slate-800">three Examiners</strong>. All
                    examiners must be from <strong className="text-slate-800">outside Bihar state</strong>
                    , with one of the examiners being the designated thesis supervisor. Examiners are selected
                    by the Examination Board from a panel of seven names recommended by the Board of Research
                    Studies. Unanimous approval from all three reviewers is strictly required for the award of
                    the D.Litt. or D.Sc. degree.
                  </p>
                </div>

                {/* Ph.D. Downgrade/Award Safety Provision */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-4 text-[#0b1b36]">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Alternative Ph.D. Recommendation (Regulation 13)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the very generous safety provisions of{' '}
                    <strong className="text-slate-800 font-bold">Regulation 13(a)</strong>, if the Board of Examiners
                    finds that a candidate’s postdoctoral thesis does not satisfy the extreme academic standards
                    required for a D.Litt. or D.Sc. degree, but is definitely of the high standards required for a
                    standard Ph.D., they may recommend the candidate to be awarded a Doctorate of Philosophy (Ph.D.)
                    degree instead. This ensures the doctoral research effort of the candidate is honored and published
                    with University seals.
                  </p>
                </div>

                {/* Supervisor Qualifications */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-[#0b1b36]">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Supervisor Credentials (Regulation 2)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To maintain strict Bihar post-doctoral standards, any candidate enrolled under the program
                    must perform active research under a supervisor who satisfies precise academic parameters.
                    The supervisor must either possess an earned <strong className="text-slate-800 font-bold">D.Litt. / D.Sc. degree</strong>{' '}
                    themselves, or have completed and published recognized, standard post-doctoral research contributions
                    to their relevant educational discipline.
                  </p>
                </div>

                {/* Timeline, Re-registration, and Cancellation */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-[#0b1b36]">
                    <Clock className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Submission Timelines & Cancellation (Regulation 1(e))
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The thesis can only be submitted minimum <strong className="text-slate-800 font-bold">four (4) years</strong>{' '}
                    after formal enrolment as a candidate. Enrolment is automatically treated as cancelled if they
                    fail to submit their final thesis report within <strong className="text-slate-800 font-bold">seven (7) years</strong>{' '}
                    from their initial enrolment date. If a thesis is sent for revision, the candidate must submit
                    their modified manuscript in exactly <strong className="text-slate-800 font-bold">one (1) year</strong>.
                    No candidate is given permission to submit a third time.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
