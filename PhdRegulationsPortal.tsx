/**
 * @file PhdRegulationsPortal.tsx
 * @description Interactive Ph.D. Regulations & Assessment Portal for LNMU.
 * Implements:
 * 1. Visual 6-Stage Roadmap (Entrance, Coursework, Synopsis, Progress, Pre-Submission, Viva)
 * 2. Eligibility & PAT Exemption Evaluator (JRF/NET verification, PG percentage criteria, DRC supervisor rules)
 * 3. Formal UGC & LNMU Ordinances & Regulations Reference Browser
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, GraduationCap, Microscope, BookOpen, Clock, FileText, CheckCircle2, 
  HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Sparkles, Scale, AlertCircle, RefreshCw, Scroll
} from 'lucide-react';

/**
 * Interface representing a distinct stage in the academic Ph.D. lifecycle.
 */
interface Stage {
  title: string;
  stageNum: string;
  shortDesc: string;
  details: string[];
  duration?: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

export default function PhdRegulationsPortal() {
  // Collapsible view state (summary teaser vs. full portal)
  const [isExpanded, setIsExpanded] = useState(false);
  // Active navigation tab within the portal
  const [activeTab, setActiveTab] = useState<'flowchart' | 'calculator' | 'regulations'>('flowchart');
  // Selected stage index for detailed modal/expansion
  const [selectedStage, setSelectedStage] = useState<number | null>(0);

  // ==========================================================================
  // PhD Eligibility Calculator State
  // ==========================================================================
  const [hasPg, setHasPg] = useState<boolean | null>(null);
  const [pgPercentage, setPgPercentage] = useState<number>(55);
  const [isCategoryScSt, setIsCategoryScSt] = useState<boolean>(false);
  const [netStatus, setNetStatus] = useState<'jrf' | 'net' | 'pat' | 'none'>('pat');
  const [hasSupervisor, setHasSupervisor] = useState<boolean | null>(null);
  const [hasSynopsis, setHasSynopsis] = useState<boolean | null>(null);

  const stages: Stage[] = [
    {
      stageNum: 'Stage 1',
      title: 'Entrance & Net Exemption',
      shortDesc: 'Admission via Ph.D. Admission Test (PAT) or UGC-NET/JRF exemption.',
      icon: GraduationCap,
      badge: 'Admission',
      details: [
        'Master Degree with a minimum of 55% marks (50% for SC/ST/OBC/Differently-abled categories) in respective/allied subjects.',
        'Candidates qualifying in JRF/UGC-NET/CSIR-NET/GATE/M.Phil are fully exempt from the written PAT exam, but must register and appear for the official interview board.',
        'Official 100-mark PAT written examination comprises Paper I (General & Research Aptitude) and Paper II (Subject-Specific advanced syllabus).'
      ]
    },
    {
      stageNum: 'Stage 2',
      title: 'Mandatory Coursework (6 Months)',
      shortDesc: 'Rigorous post-admission curriculum and UGC ethics training.',
      icon: BookOpen,
      badge: '1 Semester',
      details: [
        'Mandatory regular attendance for a continuous six-month (one semester) PhD Coursework at the designated department.',
        'Coursework curriculum consists of three major components: Course Work Core (CW), Research Methodology (RM), and UGC-mandated Research & Publication Ethics (RPE).',
        'Must pass the end-semester Ph.D. Coursework examination with a minimum of 55% marks/grades to qualify for formal registration.'
      ]
    },
    {
      stageNum: 'Stage 3',
      title: 'Synopsis Presentation & Registration',
      shortDesc: 'Departmental Council defense and formal research approval.',
      icon: FileText,
      badge: 'DRC Review',
      details: [
        'Submit a detailed research proposal (Synopsis) outlining the methodology, objectives, literature gap, and structural layout of the proposed work.',
        'Face the Departmental Research Committee (DRC) / Departmental Council for defense and evaluation of the research blueprint.',
        'Upon successful recommendation by the DRC and Board of Research Studies (PGRC), the University issues registration with a unique Ph.D. enrolment number.'
      ]
    },
    {
      stageNum: 'Stage 4',
      title: 'Progress Appraisal (Min 3, Max 6 Years)',
      shortDesc: 'Substantial independent research and regular academic updates.',
      icon: Microscope,
      badge: 'Progress Tracker',
      details: [
        'Conduct persistent scholarly research under the direct mentorship of a designated LNMU Supervisor.',
        'Submit continuous half-yearly (6-month) progress reports signed by the supervisor to the DRC for academic evaluation.',
        'Minimum period from registration to thesis submission is three (3) years; maximum duration permitted is six (6) years (relaxable by 2 years for female/disabled candidates).'
      ]
    },
    {
      stageNum: 'Stage 5',
      title: 'Pre-Submission Seminar & Publication',
      shortDesc: 'Colloquium review and mandatory research literature publishing.',
      icon: Award,
      badge: 'Publications',
      details: [
        'Must deliver an official pre-submission academic presentation (colloquium) before the DRC for review of findings before draft compilation.',
        'Publish at least one (1) or two (2) high-quality research papers in UGC Care / peer-reviewed journals of repute.',
        'Present at least two (2) research papers in national or international conferences and produce official participation certificates.'
      ]
    },
    {
      stageNum: 'Stage 6',
      title: 'Evaluation & Viva-Voce HQ Defense',
      shortDesc: 'External evaluation, plagiarism verification, and oral defense at Darbhanga.',
      icon: Scale,
      badge: 'Final Award',
      details: [
        'Mandatory plagiarism screen of the completed dissertation. Similarity index must be strictly below 10% (UGC Plagiarism Level 0 criteria).',
        'Thesis is evaluated by two eminent external examiners (at least one is strictly from outside Bihar state).',
        'Upon receipt of positive un-ambiguous reviews, appear for the final open public Viva-Voce defense at LNMU Headquarters, Darbhanga to receive the Ph.D. degree.'
      ]
    }
  ];

  // ==========================================================================
  // Eligibility Assessment Engine
  // Evaluates candidate's academic credentials against LNMU Ordinances & UGC Regulations:
  // 1. Post-Graduate (Master's) Degree possession
  // 2. Aggregate cutoff: 55% General/EWS/OBC-Creamy, 50% for SC/ST/OBC-NonCreamy/PwD
  // 3. Supervisor allocation status at LNMU Post-Graduate Department / Constituent College
  // 4. Research Synopsis formulation
  // 5. Exemption categorization: JRF (Direct), NET/GATE (Direct Interview), or PAT (Written Test)
  // ==========================================================================
  const getEligibilityVerdict = () => {
    if (hasPg === null || hasSupervisor === null || hasSynopsis === null) {
      return {
        status: 'pending',
        title: 'Information Incomplete',
        message: 'Please answer all assessment fields above to see your customized Ph.D. admission and PAT exemption status.',
        color: 'border-slate-300 bg-slate-50 text-slate-700'
      };
    }
    if (hasPg === false) {
      return {
        status: 'ineligible',
        title: 'PG Prerequisite Missing',
        message: 'Under LNMU Ph.D. Regulations, you must possess a postgraduate degree (M.A., M.Sc., M.Com) to qualify for Ph.D. enrolment.',
        color: 'border-red-400 bg-red-50 text-red-900'
      };
    }

    const minRequiredPercentage = isCategoryScSt ? 50 : 55;
    if (pgPercentage < minRequiredPercentage) {
      return {
        status: 'ineligible',
        title: 'Aggregate Percentage Deficit',
        message: `Under LNMU and UGC rules, postgraduate aggregate marks must be at least ${minRequiredPercentage}% for your selected category (Current: ${pgPercentage}%).`,
        color: 'border-red-400 bg-red-50 text-red-900'
      };
    }

    if (hasSupervisor === false) {
      return {
        status: 'pending-supervisor',
        title: 'Assigned Supervisor Needed',
        message: 'You meet the educational threshold, but you are required to secure reference from a recognized research supervisor (Professor/Associate/Assistant Professor at LNMU) to proceed.',
        color: 'border-amber-400 bg-amber-50 text-amber-950'
      };
    }

    if (hasSynopsis === false) {
      return {
        status: 'pending-proposal',
        title: 'Research Proposal Pending',
        message: 'You satisfy admission parameters. Please compile your detailed primary scientific draft (Synopsis) for presentation before the departmental selection council.',
        color: 'border-blue-400 bg-blue-50 text-blue-900'
      };
    }

    // Determine exam exemption status
    if (netStatus === 'jrf') {
      return {
        status: 'exempt-jrf',
        title: 'ELigible: Direct Admission (JRF Exempt)',
        message: 'Excellent! As a UGC/CSIR JRF holder and holding proper PG grades, you are fully exempt from the PAT written exam. You have direct entry to the academic interview round with high weightage.',
        color: 'border-emerald-500 bg-emerald-50 text-emerald-900'
      };
    } else if (netStatus === 'net') {
      return {
        status: 'exempt-net',
        title: 'Eligible: Direct Admission (NET Exempt)',
        message: 'Excellent! Your NET / GATE credentials entitle you to completely bypass the PAT entrance test. You are directly eligible to register for the Ph.D. council interview session.',
        color: 'border-emerald-500 bg-emerald-50 text-emerald-900'
      };
    } else {
      return {
        status: 'eligible-pat',
        title: 'Eligible to Apply (Written PAT Route)',
        message: 'Sufficiently Eligible! You possess the required PG marks. You can obtain your Ph.D. seat by registering and qualifying the 100-mark LNMU Ph.D. Admission Test (PAT) and subsequent panel interview.',
        color: 'border-blue-500 bg-blue-50 text-blue-900'
      };
    }
  };

  const verdict = getEligibilityVerdict();

  if (!isExpanded) {
    return (
      <div className="bg-gradient-to-r from-[#112446] to-[#1c3a6b] rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8 mt-2 p-6 text-white relative animate-in fade-in-50 duration-300 w-full">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-[#d4af37] w-6 h-6 shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] bg-amber-500/15 text-[#ffd54f] border border-amber-500/20 px-2 rounded-full tracking-wider font-extrabold uppercase">
                PhD Regulations Portal
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>
              Doctor of Philosophy (Ph.D.) Roadmap & Guidelines
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Unlock the comprehensive milestone flowchart, admission validator, and coursework guidelines tailored to LNMU and UGC mandates.
            </p>
          </div>
          <button 
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ffd54f] hover:bg-amber-400 text-[#112446] rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 shrink-0 animate-pulse hover:animate-none cursor-pointer"
          >
            Expand Ph.D. Guidelines
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8 mt-2 animate-in fade-in-50 duration-300 w-full">
      {/* Executive Header */}
      <div className="bg-gradient-to-r from-[#112446] to-[#1c3a6b] px-6 py-8 text-white relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#d4af37] w-8 h-8 shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] bg-amber-500/10 text-[#ffd54f] border border-amber-500/20 px-2.5 py-0.5 rounded-full tracking-wider font-extrabold uppercase">
                PhD Academic & Regulations Hub
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Doctor of Philosophy (Ph.D.) Roadmap & Guidelines
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
          Comprehensive milestone flowchart, admission and PAT exemption evaluator, and coursework guidelines tailored to Lalit Narayan Mithila University (LNMU) and UGC 2026 mandates.
        </p>

        {/* Tab Selection Row */}
        <div className="flex border-b border-white/10 mt-6 gap-2">
          <button
            onClick={() => setActiveTab('flowchart')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'flowchart' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            PhD Milestone Flowchart
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'calculator' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Admission Eligibility
          </button>
          <button
            onClick={() => setActiveTab('regulations')}
            className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide border-b-2 transition-all outline-none pb-2.5 ${
              activeTab === 'regulations' ? 'border-[#d4af37] text-white' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Core UGC Criteria
          </button>
        </div>
      </div>

      <div className="p-6 bg-slate-50/50">
        <AnimatePresence mode="wait">
          {/* TAB 1: PHD FLOWCHART */}
          {activeTab === 'flowchart' && (
            <motion.div
              key="flowchart"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Lateral Navigation Stepper */}
                <div className="md:w-1/3 flex flex-col gap-2 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm h-fit">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2 block">
                    PhD Academic Pathway
                  </span>
                  {stages.map((stage, idx) => {
                    const StageIcon = stage.icon;
                    const isActive = selectedStage === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedStage(idx)}
                        className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all outline-none ${
                          isActive 
                            ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-sm' 
                            : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-1.5 rounded-lg shrink-0 ${
                            isActive ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <StageIcon className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-mono text-slate-400 uppercase leading-none mb-0.5">{stage.stageNum}</span>
                            <span className="text-xs font-bold truncate leading-tight">{stage.title}</span>
                          </div>
                        </div>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                          isActive ? 'bg-indigo-150 text-indigo-800' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {stage.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Detail Information Box */}
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
                            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-extrabold tracking-widest uppercase rounded">
                              {stages[selectedStage].stageNum}
                            </span>
                            <span className="text-[11px] text-slate-400 font-medium">Lalit Narayan Mithila University</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Georgia, serif' }}>
                            {stages[selectedStage].title}
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">{stages[selectedStage].shortDesc}</p>
                        </div>

                        <div className="border-t border-slate-100 pt-6">
                          <h4 className="text-xs font-extrabold text-indigo-800 uppercase tracking-widest mb-4">
                            Academic Requirements & Statutes
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
                      Previous Step
                    </button>
                    <span className="text-xs text-slate-400 font-semibold">
                      Step {selectedStage !== null ? selectedStage + 1 : 1} of 6
                    </span>
                    <button
                      disabled={selectedStage === stages.length - 1}
                      onClick={() => setSelectedStage(prev => (prev !== null && prev < stages.length - 1) ? prev + 1 : stages.length - 1)}
                      className="px-4 py-1.5 bg-indigo-700 text-white hover:bg-indigo-800 disabled:opacity-40 rounded-lg text-xs font-bold transition-all shadow-sm"
                    >
                      Next Step
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
              {/* Question Form */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  PhD Candidate Profile Evaluation
                </h3>

                {/* PG check */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    1. Do you hold a Postgraduate (Masters) Degree?
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setHasPg(true)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPg === true 
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      Yes, PG Completed
                    </button>
                    <button
                      onClick={() => setHasPg(false)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        hasPg === false 
                          ? 'border-red-400 bg-red-50 text-red-800 shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      No Masters Degree
                    </button>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2 col-span-full">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    2. Social Category Selection
                  </label>
                  <p className="text-[11px] text-slate-400">Reserved categories (SC, ST, OBC, Differently-Abled) qualify for 5% relaxation.</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsCategoryScSt(false)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        !isCategoryScSt 
                          ? 'border-slate-800 bg-slate-900 text-white shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      General / Unreserved
                    </button>
                    <button
                      onClick={() => setIsCategoryScSt(true)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                        isCategoryScSt 
                          ? 'border-slate-800 bg-slate-900 text-white shadow-sm' 
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      SC / ST / OBC / PwD
                    </button>
                  </div>
                </div>

                {/* PG mark percentage */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      3. PG Aggregated Marks (%)
                    </label>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded">
                      {pgPercentage}% Marks
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={pgPercentage}
                    onChange={(e) => setPgPercentage(Number(e.target.value))}
                    className="w-full accent-indigo-700 cursor-pointer"
                  />
                </div>

                {/* National Tests status */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    4. National Eligibility / PAT status
                  </label>
                  <select
                    value={netStatus}
                    onChange={(e: any) => setNetStatus(e.target.value)}
                    className="w-full text-sm font-medium border border-slate-200 rounded-xl p-3 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <option value="jrf">UGC-CSIR JRF (Written Exam Exempted)</option>
                    <option value="net">UGC-NET / GATE Qualified (Written Exam Exempted)</option>
                    <option value="pat">Plan to write LNMU PAT Examination</option>
                    <option value="none">None of the above</option>
                  </select>
                </div>

                {/* Qualified supervisor draft status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      5. LNMU Supervisor Assented?
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setHasSupervisor(true)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          hasSupervisor === true ? 'bg-indigo-50 border-indigo-400 text-indigo-850' : 'bg-white text-slate-500'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setHasSupervisor(false)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          hasSupervisor === false ? 'bg-red-50 border-red-300 text-red-800' : 'bg-white text-slate-500'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      6. Research Synopsis Ready?
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setHasSynopsis(true)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          hasSynopsis === true ? 'bg-indigo-50 border-indigo-400 text-indigo-850' : 'bg-white text-slate-500'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setHasSynopsis(false)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                          hasSynopsis === false ? 'bg-red-50 border-red-300 text-red-800' : 'bg-white text-slate-500'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PhD Admission Verdict box */}
              <div className="flex flex-col justify-between">
                <div className={`p-6 md:p-8 rounded-3xl border-2 shadow-sm transition-all h-full flex flex-col justify-between ${verdict.color}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {['exempt-jrf', 'exempt-net'].includes(verdict.status) ? (
                        <div className="p-2 bg-emerald-500 text-white rounded-full shrink-0">
                          <CheckCircle2 className="w-6 h-6" strokeWidth={3} />
                        </div>
                      ) : verdict.status === 'eligible-pat' ? (
                        <div className="p-2 bg-blue-600 text-white rounded-full shrink-0">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      ) : verdict.status === 'ineligible' ? (
                        <div className="p-2 bg-red-500 text-white rounded-full shrink-0">
                          <AlertTriangle className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="p-2 bg-amber-500 text-white rounded-full shrink-0">
                          <HelpCircle className="w-6 h-6" />
                        </div>
                      )}
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#5c5c5c] block">
                          Evaluation & Admission status
                        </span>
                        <h4 className="font-bold text-md leading-tight mt-0.5">
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
                      PhD Admission Criteria Report
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span>Postgraduate Degree Compliance</span>
                        <span className={`font-bold ${hasPg ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {hasPg ? 'VERIFIED' : 'FAILED'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>PG Aggregate Aggregate (Min {isCategoryScSt ? '50%' : '55%'})</span>
                        <span className={`font-bold ${pgPercentage >= (isCategoryScSt ? 50 : 55) ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {pgPercentage}% ({pgPercentage >= (isCategoryScSt ? 50 : 55) ? 'QUALIFIED' : 'DEFICIT'})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Entrance Test Route / Exemption Status</span>
                        <span className="font-bold text-indigo-700">
                          {netStatus === 'jrf' ? 'EXEMPT (JRF DIRECT)' : netStatus === 'net' ? 'EXEMPT (NET DIRECT)' : 'PAT ENTRANCE EXAM'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Assenting Academic Advisor</span>
                        <span className={`font-bold ${hasSupervisor ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {hasSupervisor ? 'PASSED' : 'PENDING'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Draft Thesis Synopsis Status</span>
                        <span className={`font-bold ${hasSynopsis ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {hasSynopsis ? 'READY' : 'PENDING'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CORE UGC REGULATIONS */}
          {activeTab === 'regulations' && (
            <motion.div
              key="regulations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* UGC Coursework Marks Mandate */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-[#112446]">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Ph.D. Coursework Passing Standards
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prior to formal registration of their research topic, all admitted candidates must undergo and clear a continuous 6-month PhD Coursework program. It consists of <strong className="text-slate-800">Research Methodology</strong>, an advanced <strong className="text-slate-800">subject specific paper</strong>, and <strong className="text-slate-850 font-bold">Research & Publication Ethics (RPE)</strong>. Candidates must obtain a minimum of <strong className="text-slate-900 font-bold">55% marks/grades</strong> in coursework examinations to be permitted to proceed with synopsis submission before the DRC.
                  </p>
                </div>

                {/* UGC Plagiarism Limits */}
                <div className="bg-white rounded-3xl border border-slate-205 p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                  <div className="flex items-center gap-2 mb-4 text-[#112446]">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Strict Plagiarism Tolerances (Level 0)
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    In compliance with UGC Promotion of Academic Integrity Regulations, LNMU enforces rigorous plagiarism control via university software (Urkund/Ouriginal). Similarity threshold <strong className="text-red-700 font-bold">must be strictly below 10% (Level 0)</strong>. Plagiarism between 10% and 40% (Level 1) requires revision within 6 months. Level 2 (40%-60% similarity) triggers complete 1-year suspension, and Level 3 (&gt;60%) results in immediate cancellation of registration.
                  </p>
                </div>

                {/* Supervisor Eligibility and Quota */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 text-[#112446]">
                    <Scale className="w-5 h-5 text-amber-500" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Supervisor Eligibility & Quota Limits
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Any active Professor/Associate/Assistant Professor of LNMU possessing a Ph.D. and a standard record of published papers in refereed journals can act as a Research Guide. Under UGC regulations, a <strong className="text-slate-800">Professor</strong> can mentor a maximum of <strong className="text-slate-850 font-bold">8 Ph.D. scholars</strong>, an <strong className="text-slate-800">Associate Professor</strong> is restricted to <strong className="text-slate-850 font-bold">6 scholars</strong>, and an <strong className="text-slate-800">Assistant Professor</strong> can mentor up to <strong className="text-slate-850 font-bold">4 scholars</strong> concurrently.
                  </p>
                </div>

                {/* Timeline and Fellowship Details */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm font-sans">
                  <div className="flex items-center gap-2 mb-4 text-[#112446]">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-bold text-md pl-1" style={{ fontFamily: 'Georgia, serif' }}>
                      Ph.D. Academic Timelines & JRF
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The minimum duration of joint doctoral research is strictly <strong className="text-slate-800">three (3) years</strong> from registration to thesis submission, with a ceiling limit of <strong className="text-slate-805 font-bold">six (6) years</strong>. Extension is governed by special PGRC permissions. JRF holders are eligible to receive continuous financial stipends throughout this tenure, subject to continuous production of verified supervisor progress reviews under DRC terms.
                  </p>
                </div>
              </div>

              {/* Official LNMU Ph.D. Coursework Exam Pattern & Regulations Section */}
              <div className="bg-gradient-to-tr from-[#1e293b] to-[#0f172a] rounded-3xl p-6 md:p-8 text-white shadow-md border border-slate-800 space-y-6 mt-6">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                    <Scroll className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                      Official LNMU Ph.D. Coursework Exam Guidelines
                    </h3>
                    <p className="text-xs text-slate-400">
                      Formulated in accordance with Bihar Governor Secretariat Ph.D. regulations and unified LNMU Board resolutions.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column: General Scheme */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-amber-400 text-sm tracking-wider uppercase">
                      General Academic Structure (PAT Regulations)
                    </h4>
                    <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                      <p>
                        The uniform model for PhD Coursework examinations is effective from <strong className="text-white">PAT-2021 onwards</strong> and applies equally across all faculties:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 text-slate-300">
                        <li>
                          <strong className="text-white">Number of Papers:</strong> The Coursework comprises exactly two papers, each carrying 100 marks.
                        </li>
                        <li>
                          <strong className="text-white">Duration:</strong> Each paper is allotted a maximum duration of 2 clock hours.
                        </li>
                        <li>
                          <strong className="text-white">Joint Evaluation:</strong> Each answer book is evaluated by 3 independent examiners (one for each section / part in the exam paper). An additional 4th coordinator compiles and totals the official scoreboards.
                        </li>
                      </ol>

                      <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800 mt-2">
                        <div className="flex items-center gap-2 mb-2 text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="font-semibold text-xs">Standard 3-Part Exam Layout:</span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                          <li><strong className="text-slate-300">PART-A:</strong> Objective/MCQ (5 questions carrying 2 marks each = 10 Marks total)</li>
                          <li><strong className="text-slate-300">PART-B:</strong> Short Questions (5 set, 3 to be answered carrying 10 marks each = 30 Marks total)</li>
                          <li><strong className="text-slate-300">PART-C:</strong> Long Questions (3 set, 2 to be answered carrying 30 marks each = 60 Marks total)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Paper I & Paper II specifics */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-amber-400 text-sm tracking-wider uppercase">
                      Specific Exam Papers Implementation
                    </h4>
                    
                    <div className="space-y-4">
                      {/* Paper I box */}
                      <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                          <span className="font-bold text-xs text-white">Paper-I: Research Methodology</span>
                          <span className="bg-[#112446] border border-blue-500/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Common Paper</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Common to all candidate registrations regardless of specific department. 
                          The implemented revised model pattern for Paper-I contains a streamlined 2-part structure:
                        </p>
                        <ul className="text-[11px] text-slate-300 space-y-1 pl-4 list-disc">
                          <li>
                            <strong className="text-white">Part-A (Short-Answer):</strong> 6 questions set, 4 to be answered (10 Marks each = 40 Marks total).
                          </li>
                          <li>
                            <strong className="text-white">Part-B (Long-Answer):</strong> 4 questions set, 2 to be answered (30 Marks each = 60 Marks total).
                          </li>
                        </ul>
                        <div className="text-[10px] text-amber-500/95 italic">
                          * Framework includes Research methodology, Quantitative methods, Computer Applications and research values.
                        </div>
                      </div>

                      {/* Paper II box */}
                      <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-xs text-white">Paper-II: Subject Specific Methods</span>
                          <span className="bg-amber-950 border border-amber-500/20 text-amber-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Department Based</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Authorized to be individually developed by university academic councils. Includes advanced subject-specific techniques, literature appraisal, reviewing, writing bibliographies, and formatting references.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
