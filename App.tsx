/**
 * @file App.tsx
 * @description Core Application Engine for LNMU CBCS & NEP 2020 Academic Syllabus Portal.
 * 
 * Features & Architecture:
 * - Four Academic Tiers: Undergraduate (B.A., B.Sc., B.Com), Postgraduate (M.A., M.Sc., M.Com),
 *   Ph.D. Course Work (Arts, Science, Commerce), and Post-Doctoral (D.Litt., D.Sc.).
 * - NEP 2020 Course Types: MJC (Major), MIC (Minor), MDC (Multidisciplinary), AEC (Ability Enhancement),
 *   SEC (Skill Enhancement), VAC (Value Added), INT (Internship), and RP (Research Project).
 * - Full History & Hardware Back Navigation: Syncs navigation stack with browser history so the back
 *   button naturally walks back through selected views (Specific Course -> Semester -> Subject -> Program).
 * - Multi-tier Clipboard Engine: Instant one-click prompt generation for AI search/prompters with
 *   fallbacks for installed PWA, iOS webview, offline, and desktop browsers.
 * - Interactive Tracking: Local storage persistence for completed topics and bookmarked favorites.
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, Home, ChevronRight, ChevronLeft, ArrowLeft, BookOpen, Beaker, Landmark, BookType, Globe, Atom, 
  Leaf, Microscope, AlertCircle, Briefcase, FileText, FlaskConical, Languages, Library, Calculator, Scale, 
  LineChart, BrainCircuit, Brain, Users, Coins, Megaphone, PawPrint, Music, BarChart, Presentation, Award, Book,
  ChevronDown, ChevronUp, CheckCircle2, Youtube, Sparkles, Scroll, Check, Star, Mail, Bot, Target, Info, Lock, CheckCircle,
  ShieldAlert, Copyright, Moon, Sun, Copy, ExternalLink, Share2,
  Pencil, Trash2, Plus, ShieldCheck, LogOut, CloudUpload, RotateCcw, Loader2
} from 'lucide-react';
import PostdocRegulationsPortal from './components/PostdocRegulationsPortal';
import PhdRegulationsPortal from './components/PhdRegulationsPortal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminActionBar } from './components/AdminActionBar';
import { EditTopicModal, EditUnitModal, EditCourseModal, ConfirmDeleteModal } from './components/AdminEditorModals';
import { 
  fetchServerOverrides, 
  subscribeToSyllabusUpdates, 
  commitSyllabusChanges, 
  verifyAdminToken,
  getCachedOverrides,
  saveCachedOverrides
} from './lib/syllabusService';
import { COMMON_UG_COURSES } from './data/ugCommonCoursesData';
import { BSC_PHYSICS_SYLLABUS } from './data/bscPhysicsSyllabus';
import { BSC_ZOOLOGY_SYLLABUS } from './data/bscZoologySyllabus';
import { BSC_CHEMISTRY_SYLLABUS } from './data/bscChemistrySyllabus';
import { MATHEMATICS_SYLLABUS } from './data/mathematicsSyllabus';
import { STATISTICS_SYLLABUS } from './data/statisticsSyllabus';

// ============================================================================
// Academic Program Definitions & Metadata
// ============================================================================
const PROGRAMS = [
  { id: 'BA', title: 'B.A', subtitle: 'Bachelor of Arts', type: 'UG', active: true, icon: Library, theme: 'from-red-800 to-rose-900', shadow: 'shadow-red-900/20' },
  { id: 'BSc', title: 'B.Sc', subtitle: 'Bachelor of Science', type: 'UG', active: true, icon: Atom, theme: 'from-blue-800 to-indigo-900', shadow: 'shadow-blue-900/20' },
  { id: 'BCom', title: 'B.Com', subtitle: 'Bachelor of Commerce', type: 'UG', active: true, icon: Landmark, theme: 'from-emerald-800 to-teal-900', shadow: 'shadow-emerald-900/20' },
  { id: 'MA', title: 'M.A', subtitle: 'Master of Arts', type: 'PG', active: true, icon: Library, theme: 'from-rose-700 to-pink-900', shadow: 'shadow-rose-900/20' },
  { id: 'MSc', title: 'M.Sc', subtitle: 'Master of Science', type: 'PG', active: true, icon: Atom, theme: 'from-indigo-700 to-violet-900', shadow: 'shadow-indigo-900/20' },
  { id: 'MCom', title: 'M.Com', subtitle: 'Master of Commerce', type: 'PG', active: true, icon: Landmark, theme: 'from-teal-700 to-cyan-900', shadow: 'shadow-teal-900/20' },
  { id: 'PhD_Arts', title: 'Ph.D. (Arts)', subtitle: 'Doctor of Philosophy', type: 'PHD', active: true, icon: Library, theme: 'from-amber-700 to-orange-900', shadow: 'shadow-amber-900/20' },
  { id: 'PhD_Sc', title: 'Ph.D. (Science)', subtitle: 'Doctor of Philosophy', type: 'PHD', active: true, icon: Atom, theme: 'from-cyan-700 to-blue-900', shadow: 'shadow-cyan-900/20' },
  { id: 'PhD_Com', title: 'Ph.D. (Commerce)', subtitle: 'Doctor of Philosophy', type: 'PHD', active: true, icon: Landmark, theme: 'from-emerald-700 to-green-900', shadow: 'shadow-emerald-900/20' },
  { id: 'DLitt_Arts', title: 'D.Litt. (Arts)', subtitle: 'Doctor of Letters', type: 'POSTDOC', active: true, icon: Award, theme: 'from-purple-800 to-fuchsia-900', shadow: 'shadow-purple-900/20' },
  { id: 'DSc', title: 'D.Sc. (Science)', subtitle: 'Doctor of Science', type: 'POSTDOC', active: true, icon: Microscope, theme: 'from-indigo-800 to-blue-900', shadow: 'shadow-indigo-900/20' },
  { id: 'DLitt_Com', title: 'D.Litt. (Commerce)', subtitle: 'Doctor of Letters', type: 'POSTDOC', active: true, icon: Briefcase, theme: 'from-teal-800 to-emerald-900', shadow: 'shadow-teal-900/20' }
];

const SUBJECT_DETAILS: any = { 
  'History': { icon: Landmark, color: 'text-amber-700', bg: 'bg-amber-100' },
  'Geography': { icon: Globe, color: 'text-sky-700', bg: 'bg-sky-100' },
  'Political Science': { icon: Scale, color: 'text-slate-700', bg: 'bg-slate-100' },
  'Mathematics': { icon: Calculator, color: 'text-indigo-700', bg: 'bg-indigo-100' },
  'Statistics': { icon: BarChart, color: 'text-violet-600', bg: 'bg-violet-100' },
  'Home Science': { icon: Home, color: 'text-rose-600', bg: 'bg-rose-100' },
  'English': { icon: BookType, color: 'text-violet-700', bg: 'bg-violet-100' },
  'Economics': { icon: LineChart, color: 'text-emerald-700', bg: 'bg-emerald-100' },
  'Hindi': { icon: Languages, color: 'text-orange-600', bg: 'bg-orange-100' },
  'Philosophy': { icon: BrainCircuit, color: 'text-cyan-700', bg: 'bg-cyan-100' },
  'Psychology': { icon: Brain, color: 'text-fuchsia-700', bg: 'bg-fuchsia-100' },
  'Sociology': { icon: Users, color: 'text-teal-700', bg: 'bg-teal-100' },
  'Sanskrit': { icon: BookOpen, color: 'text-red-700', bg: 'bg-red-100' },
  'Urdu': { icon: Languages, color: 'text-emerald-800', bg: 'bg-emerald-100' },
  'Maithili': { icon: Languages, color: 'text-pink-600', bg: 'bg-pink-100' },
  'Bengali': { icon: Languages, color: 'text-orange-700', bg: 'bg-orange-100' },
  'Bhojpuri': { icon: Languages, color: 'text-amber-600', bg: 'bg-amber-100' },
  'Persian': { icon: Languages, color: 'text-teal-800', bg: 'bg-teal-100' },
  'Arabic': { icon: Languages, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  'Pali': { icon: Languages, color: 'text-orange-500', bg: 'bg-orange-100' },
  'Prakrit': { icon: Languages, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  'L.S.W.': { icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  'A.I.H. & C.': { icon: Landmark, color: 'text-amber-800', bg: 'bg-amber-200' },
  'Ancient Indian History': { icon: Landmark, color: 'text-amber-800', bg: 'bg-amber-200' },
  'Public Administration': { icon: Landmark, color: 'text-slate-600', bg: 'bg-slate-100' },
  'Rural Economics': { icon: LineChart, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  'Anthropology': { icon: Users, color: 'text-amber-800', bg: 'bg-amber-100' },
  'Music': { icon: Music, color: 'text-purple-600', bg: 'bg-purple-100' },
  'Dramatics': { icon: Music, color: 'text-pink-500', bg: 'bg-pink-100' },
  'Education': { icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-100' },
  'Physics': { icon: Atom, color: 'text-blue-700', bg: 'bg-blue-100' },
  'Chemistry': { icon: FlaskConical, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  'Botany': { icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
  'Zoology': { icon: PawPrint, color: 'text-stone-600', bg: 'bg-stone-100' },
  'Bio-technology': { icon: Microscope, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  'Accounting & Finance': { icon: Coins, color: 'text-emerald-700', bg: 'bg-emerald-100' },
  'Marketing': { icon: Megaphone, color: 'text-red-600', bg: 'bg-red-100' },
  'HRM': { icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  'Commerce': { icon: Coins, color: 'text-emerald-800', bg: 'bg-emerald-200' },
  'Management': { icon: Briefcase, color: 'text-slate-700', bg: 'bg-slate-200' }
};

const SUBJECT_MAPPING: any = { 
  BA: {
    'Faculty of Social Sciences': ['History', 'Political Science', 'Economics', 'Geography', 'Psychology', 'Sociology', 'Home Science', 'A.I.H. & C.', 'Public Administration', 'Rural Economics', 'Anthropology', 'L.S.W.'],
    'Faculty of Humanities': ['Hindi', 'English', 'Sanskrit', 'Urdu', 'Maithili', 'Philosophy', 'Bengali', 'Bhojpuri', 'Persian', 'Arabic', 'Pali', 'Prakrit'],
    'Faculty of Fine Arts': ['Music', 'Dramatics'],
    'Faculty of Science': ['Mathematics', 'Statistics']
  },
  BSc: {
    'Faculty of Science': ['Physics', 'Chemistry', 'Botany', 'Zoology', 'Mathematics', 'Statistics']
  },
  BCom: {
    'Faculty of Commerce': ['Accounting & Finance', 'Marketing', 'HRM']
  },
  MA: {
    'Faculty of Social Sciences': ['History', 'Political Science', 'Economics', 'Geography', 'Psychology', 'Sociology', 'Home Science', 'A.I.H. & C.'],
    'Faculty of Humanities': ['Hindi', 'English', 'Sanskrit', 'Urdu', 'Maithili', 'Philosophy'],
    'Faculty of Fine Arts': ['Music', 'Dramatics']
  },
  MSc: {
    'Faculty of Science': ['Physics', 'Chemistry', 'Zoology', 'Botany', 'Mathematics']
  },
  MCom: {
    'Faculty of Commerce': ['Commerce']
  },
  PhD_Arts: {
    'Faculty of Social Sciences': ['Ancient Indian History', 'Economics', 'Geography', 'History', 'Home Science', 'Political Science', 'Psychology', 'Sociology'],
    'Faculty of Humanities': ['English', 'Hindi', 'Maithili', 'Philosophy', 'Sanskrit', 'Urdu'],
    'Faculty of Fine Arts': ['Dramatics', 'Music'],
    'Faculty of Education': ['Education']
  },
  PhD_Sc: {
    'Faculty of Science': ['Botany', 'Bio-technology', 'Chemistry', 'Mathematics', 'Physics', 'Zoology']
  },
  PhD_Com: {
    'Faculty of Commerce & Management': ['Commerce', 'Management']
  },
  DLitt_Arts: {
    'Faculty of Social Sciences': ['Ancient Indian History', 'Economics', 'Geography', 'History', 'Home Science', 'Political Science', 'Psychology', 'Sociology'],
    'Faculty of Humanities': ['English', 'Hindi', 'Maithili', 'Philosophy', 'Sanskrit', 'Urdu'],
    'Faculty of Fine Arts': ['Dramatics', 'Music'],
    'Faculty of Education': ['Education']
  },
  DSc: {
    'Faculty of Science': ['Botany', 'Bio-technology', 'Chemistry', 'Mathematics', 'Physics', 'Zoology']
  },
  DLitt_Com: {
    'Faculty of Commerce & Management': ['Commerce', 'Management']
  }
};

const UG_COURSE_TYPES = [
  { id: 'MJC', subtitle: 'Major Core Course', icon: BookOpen },
  { id: 'MIC', subtitle: 'Minor Core Course', icon: BookType },
  { id: 'MDC', subtitle: 'Multidisciplinary Course', icon: Globe },
  { id: 'AEC', subtitle: 'Ability Enhancement', icon: Languages },
  { id: 'SEC', subtitle: 'Skill Enhancement', icon: Beaker },
  { id: 'VAC', subtitle: 'Value Added Course', icon: Leaf },
  { id: 'INT', subtitle: 'Internship', icon: Briefcase },
  { id: 'RP',  subtitle: 'Research Project', icon: Microscope }
];

const PG_COURSE_TYPES = [
  { id: 'CC', subtitle: 'Core Course', icon: BookOpen },
  { id: 'EC', subtitle: 'Elective Course', icon: BookType },
  { id: 'AECC', subtitle: 'Ability Enhancement Compulsory', icon: Languages },
  { id: 'SEC', subtitle: 'Skill Enhancement', icon: Beaker },
  { id: 'DSE', subtitle: 'Discipline Specific/Dissertation', icon: Microscope },
  { id: 'GE', subtitle: 'Generic Elective', icon: Globe }
];

const PHD_COURSE_TYPES = [
  { id: 'Paper-I', subtitle: 'Research Methodology (Common)', icon: Microscope },
  { id: 'Paper-II', subtitle: 'Subject Specific Course Work', icon: BookOpen }
];

const POSTDOC_COURSE_TYPES = [
  { id: 'RS', subtitle: 'Research Symposium', icon: Presentation },
  { id: 'PDT', subtitle: 'Post-Doctoral Thesis', icon: Award },
  { id: 'VIVA', subtitle: 'Viva-Voce Defence', icon: Users }
];

const UG_SEMESTERS = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
const PG_SEMESTERS = ['1st', '2nd', '3rd', '4th'];
const PHD_SEMESTERS = ['Coursework'];
const POSTDOC_SEMESTERS = ['Research', 'Defense'];

const SYLLABUS_DATA: any = {
  BSc: {
    Physics: BSC_PHYSICS_SYLLABUS,
    Zoology: BSC_ZOOLOGY_SYLLABUS,
    Chemistry: BSC_CHEMISTRY_SYLLABUS,
    Mathematics: MATHEMATICS_SYLLABUS,
    Statistics: STATISTICS_SYLLABUS,
    Botany: {
      "MJC": {
            "1st": [
                  {
                        "courseTitle": "Phycology and Microbiology",
                        "courseCode": "MJC-1",
                        "credits": "6",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Classify the plant kingdom",
                              "CO2: Describe the diversity, structure and importance of viruses and bacteria",
                              "CO3: Describe the general account of mycoplasma",
                              "CO4: Explain the thallus organization, economic importance and the life cycle of various algae"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: Classification of Plant Kingdom and their important features (Whittaker 1969) (02 Lectures)",
                                          "topics": [
                                                "Classification of Plant Kingdom and their important features (Whittaker 1969)"
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Algae (14 Lectures)",
                                          "topics": [
                                                "General characteristics; Classification; Range of thallus organization and reproduction.",
                                                "Significant contributions of important Phycologists (F.E. Fritsch, G.M. Smith, H.D. Kumar, M.O.P. Iyengar).",
                                                "Structure, Life history and affinities of the following genera: Nostoc, Volvox, Oedogonium, Chara, Vaucheria, Batrachospermum and Ectocarpus.",
                                                "Economic Importance of Algae."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Virus (10 Lectures)",
                                          "topics": [
                                                "Discovery, Nature and General structure, DNA virus (Bacteriophage)- Structure and its replication (Lytic and lysogenic Cycle).",
                                                "RNA virus (TMV), Corona virus (elementary idea); Economic importance of viruses."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Bacteria (14 Lectures)",
                                          "topics": [
                                                "Discovery, Characteristics and Cell Structure, Types- Archaebacteria and Eubacteria.",
                                                "Reproduction- vegetative, asexual and genetic recombination (Conjugation, Transformation and Transduction).",
                                                "Economic importance of bacteria with reference to their role in agriculture and industry; Role of Microbes in Biological nitrogen fixation.",
                                                "General account of Mycoplasma."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Lee, R.E. (2008). Phycology, Cambridge University Press, Cambridge. 4th edition.",
                              "Prescott, L.M., Harley J.P. and Klein D.A. (2005). Microbiology, McGraw Hill, India. 6th edition.",
                              "Kumar, H.D. (1999). Introductory Phycology. Affiliated East-West Press, Delhi.",
                              "Campbell, N.A., Reece J.B., Urry L.A., Cain M.L., Wasserman S.A. Minorsky P.V., Jackson R.B. (2008). Biology, Pearson Benjamin Cummings, USA. 8th edition.",
                              "Pelczar, M.J. (2001) Microbiology, 5th edition, Tata McGraw-Hill Co, New Delhi.",
                              "Vashishtha, B.R., Sinha, A.K and Singh, V.P. (2010). Botany for degree students: Algae, S. Chand & Company Ltd. 2nd edition.",
                              "Srivastava, H.N. (2005). Algae, Pradeep Publication. 12th edition.",
                              "Dubey R.C. and Maheshwari D.K. (2005). A Text Book of Microbiology, S. Chand & Company Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Electron micrographs/Models of viruses — T-Phage and TMV.",
                                    "2. Line drawings/Photographs of Lytic and Lysogenic Cycle.",
                                    "3. Types of Bacteria to be observed from photographs.",
                                    "4. Gram staining of bacteria.",
                                    "5. Phycology: Study of vegetative and reproductive structures of the forms prescribed in the syllabus through temporary slides preparation."
                              ]
                        }
                  }
            ],
            "2nd": [
                  {
                        "courseTitle": "Biomolecules and Cell Biology",
                        "courseCode": "MJC-2",
                        "credits": "6",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the structure, properties and functions of bio molecules",
                              "CO2: Explain the classification, properties and functions of enzymes",
                              "CO3: Describe cell wall, cell membrane and the structure and functions of cellular organelles",
                              "CO4: Explain the eukaryotic cell cycle, mitosis and meiosis"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: Biomolecules (12 Lectures)",
                                          "topics": [
                                                "Structure, classification and function of Carbohydrates, amino acids, proteins, lipids and nucleic acid."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Enzymes (10 Lectures)",
                                          "topics": [
                                                "Classification, nomenclature, physico-chemical properties, mechanism of action and regulation."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Cell (14 Lectures)",
                                          "topics": [
                                                "Cell theory; Structure of prokaryotic and eukaryotic cells; Origin of eukaryotic cell (Endosymbiotic theory).",
                                                "Cell wall and Cell membrane, structure and function of cell organelles: nucleus, mitochondria, ribosomes, golgi apparatus, endoplasmic reticulum, lysosomes, chloroplast and vacuoles.",
                                                "Structure of chromosome with nucleosome concept."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Cell cycle & Cell division (04 Lectures)",
                                          "topics": [
                                                "Cell cycle; Cell division: Mitosis and Meiosis."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Campbell, M.K. (2012) Biochemistry, 7th ed., Published by Cengage Learning.",
                              "Campbell, P.N. and Smith AD (2011) Biochemistry Illustrated, 4th ed., Published by Churchill Livingstone.",
                              "Tymoczko J.L., Berg J.M. and Stryer L (2012) Biochemistry: A short course, 2nd ed., W.H. Freeman.",
                              "Berg J.M, Tymoczko J.L and Stryer L (2011) Biochemistry, W.H. Freeman and Company.",
                              "Nelson D.L and Cox M.M (2008) Lehninger Principles of Biochemistry, 5th Edition, W.H. Freeman and Company.",
                              "Karp, G. (2010). Cell Biology, John Wiley & Sons, U.S.A. 6th edition.",
                              "Hardin, J., Becker, G., Kliensmith, L.J. (2012). Becker's World of the Cell, Pearson Education Inc. U.S.A. 8th edition.",
                              "Cooper, G.M and Hausman, R.E. (2009) The Cell: A Molecular Approach, 5th edition. ASM."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Estimation of protein and sugar.",
                                    "2. Detection of tannin, alkaloid and flavonoid in the given plant sample.",
                                    "3. Separation of amino acids by paper chromatography technique.",
                                    "4. Study of cell and its organelles with the help of electron microphotographs.",
                                    "5. Study of different stages of mitosis and meiosis."
                              ]
                        }
                  }
            ],
            "3rd": [
                  {
                        "courseTitle": "Mycology and Phytopathology",
                        "courseCode": "MJC-3",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Develop an understanding about the thallus organization, nutrition, economic importance and life cycle of various fungi",
                              "CO2: Understand the terms, scope and importance of plant pathology",
                              "CO3: Describe the etiology, symptoms and control measures of plant diseases",
                              "CO4: Learn about various associations: Lichens and Mycorrhizae"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Fungi (10 Lectures)",
                                          "topics": [
                                                "General characteristics; Thallus organization; Nutrition; Cell wall composition; Reproduction and Classification."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Structure and life history of Genera (10 Lectures)",
                                          "topics": [
                                                "Structure and life history of the following genera: Synchytrium, Albugo, Peziza, Puccinia and Alternaria."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Phytopathology (10 Lectures)",
                                          "topics": [
                                                "Terms and concepts; General symptoms; Host-Pathogen relationships; disease cycle; prevention and control of plant diseases."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Etiology, symptoms and control of diseases (10 Lectures)",
                                          "topics": [
                                                "Citrus canker, Little leaf of brinjal, Early and Late blight of potato, Black stem rust of wheat, White rust of crucifers, Red rot of sugarcane.",
                                                "General account of Lichens, types & economic importance.",
                                                "Mycorrhiza: Ectomycorrhiza, Endomycorrhiza and their significance."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Alexopoulos, C.J., Mims, C.W., Blackwell, M. (1996). Introductory Mycology, John Wiley & Sons Singapore. 4th edition.",
                              "Webster, J. and Weber, R. (2007). Introduction to Fungi, Cambridge University Press, Cambridge. 3rd edition.",
                              "Sethi, I.K. and Walia, S.K. (2011). Text book of Fungi and Their Allies, Macmillan Publishers India Ltd.",
                              "Sharma, P.D. (2011). Plant Pathology, Rastogi Publication, Meerut, India.",
                              "Vashishtha, B.R. Sinha, A.K. (2005). Botany for degree Students Part II, S. Chand & Company Ltd. 2nd edition.",
                              "Bilgrami, K.S. Dubey, H.C. (2005). A text book of Modern Plant Pathology, Vikas Publishing Home Pvt. Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Mycology: Study of vegetative and reproductive structures of Rhizopus and Peziza (ascocarp) through temporary preparations and permanent slides.",
                                    "2. Lichen: Study of growth forms of lichens (crustose, foliose and fruticose) on different substrates (Photographs); Mycorrhizae: ectomycorrhizal and endomycorrhiza (Photographs).",
                                    "3. Phytopathology: Study of Host-parasite relationship of Synchytrium, Albugo, Alternaria and Puccinia through temporary preparations and permanent slides.",
                                    "4. Photographs of fungal spores.",
                                    "5. Herbarium specimens/Photographs of Citrus Canker; TMV, Early blight of potato, Black stem rust of wheat and White rust of crucifers."
                              ]
                        }
                  },
                  {
                        "courseTitle": "Archegoniate",
                        "courseCode": "MJC-4",
                        "credits": "4",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Develop awareness about morphology, diversity and evolution of bryophytes, pteridophytes and gymnosperms",
                              "CO2: Compare the life cycle of various bryophytes, pteridophytes and gymnosperms",
                              "CO3: Understand the economic importance of the bryophytes, pteridophytes and gymnosperms",
                              "CO4: Know the importance of studying fossils"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Distinguishing features of archegoniates (02 Lectures)",
                                          "topics": [
                                                "Distinguishing features of archegoniates; Alternation of generation."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Bryophytes (12 Lectures)",
                                          "topics": [
                                                "General Characteristics, Adaptation to land habit, Classification (up to family); Vegetative reproduction.",
                                                "Range of thallus organization; Structure, life history and affinities of the following genera: Marchantia, Anthoceros and Sphagnum.",
                                                "Ecological and economic importance of bryophytes."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Pteridophytes (14 Lectures)",
                                          "topics": [
                                                "General characteristics, classification (up to family), stelar evolution, apogamy and apospory.",
                                                "Morphology, anatomy and reproduction of Psilotum, Selaginella (with special reference to seed habit), Equisetum and Marsilea.",
                                                "Ecological and economic importance; Fossil Pteridophyte — Rhynia."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Gymnosperm (12 Lectures)",
                                          "topics": [
                                                "General characteristics, classification (up to family), morphology, anatomy and reproduction of Cycas, Pinus and Gnetum.",
                                                "Ecological and economic importance; Fossil Gymnosperm — Lyginodendron."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Vander-Poorteri 2009 Introduction to Bryophytes, COP.",
                              "Vashistha, P.C., Sinha, A.K., Kumar, A. (2010). Pteridophyta, S. Chand. Delhi, India.",
                              "Bhatnagar, S.P. & Moitra, A. (1996). Gymnosperms, New Age International (P) Ltd Publishers, New Delhi, India.",
                              "Vashistha, P.C., Sinha, A.K. Kumar, A. (2006). Botany for degree students: Gymnosperm, S. Chand & Company Pvt. Ltd.",
                              "Srivastava, H.N. (2002). Gymnosperm, Pradeep Publications. 10th edition.",
                              "Rashid A. (1999). An introduction to Pteridophyta Vikas Publishing Home Pvt. Ltd. 2nd edition.",
                              "Puri P. (1996). Bryophyta: Morphology, Growth and Differentiation, Atma Ram and Sons, 2nd edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Bryophytes: Study of vegetative and reproductive structures of Marchantia, Anthoceros, Sphagnum through temporary preparations and permanent slides.",
                                    "2. Pteridophytes: Study of vegetative and reproductive structures of Psilotum, Selaginella, Equisetum and Marsilea through temporary preparations and permanent slides.",
                                    "3. Gymnosperms: Study of vegetative and reproductive structures of Cycas, Pinus and Gnetum through temporary preparations and permanent slides."
                              ]
                        }
                  }
            ],
            "4th": [
                  {
                        "courseTitle": "Morphology and Anatomy",
                        "courseCode": "MJC-5",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Know the morphological characters of plants",
                              "CO2: Understand the tissue system and the normal as well as anomalous secondary growth in plants",
                              "CO3: Learn about the structural adaptations in plants growing in different environmental conditions",
                              "CO4: Describe the structure and function of periderm"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Inflorescence, flowers, fruits and seeds (08 Lectures)",
                                          "topics": [
                                                "Brief account of inflorescence, flowers, fruits and seeds."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Meristem and permanent tissue (10 Lectures)",
                                          "topics": [
                                                "Meristem and permanent tissue; Root and shoot meristem, simple and complex tissue.",
                                                "Mechanical Tissues — Structure, distribution and function."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Secondary Growth (10 Lectures)",
                                          "topics": [
                                                "Normal secondary growth; Anomalous secondary growth in Tinospora, Bignonia, Boerhaavia, and Dracaena."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Tissue organization & Periderm (12 Lectures)",
                                          "topics": [
                                                "Organization of tissue in relation to environment: Hydrophytes, Xerophytes, Halophytes and Epiphytes.",
                                                "Periderm — Origin, structure and function."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Dickison, W.C. (2000). Integrative Plant Anatomy, Harcourt Academic Press, USA.",
                              "Fahn, A. (1974). Plant Anatomy, Pergamon Press, USA.",
                              "Mauseth, J.D. (1988). Plant Anatomy, The Benjamin/Cummings Publisher, USA.",
                              "Esau, K. (1977). Anatomy of Seed Plants, John Wiley & Sons, Inc., Delhi.",
                              "Vashishtha, P.C. (2004). Plant Anatomy, Pradeep Publication. 17th edition.",
                              "Grewal, R.C. (2011). Plant Anatomy, Campus Book International. 1st edition.",
                              "Singh S.K. Srivastava. S. (2014). Anatomy of angiosperms, Campus Books International. 1st edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Study of anatomical details through permanent slides/temporary stain mounts/Photographs.",
                                    "2. Distribution and types of parenchyma, collenchyma and sclerenchyma through permanent slides/temporary stain mounts/Photographs.",
                                    "3. Study of anomalous secondary growth in Tinospora, Bignonia, Boerhaavia, and Dracaena through temporary preparations and permanent slides.",
                                    "4. Study of morphological and anatomical adaptations in hydrophytes and xerophytes through specimens and temporary slide preparations."
                              ]
                        }
                  },
                  {
                        "courseTitle": "Economic Botany",
                        "courseCode": "MJC-6",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Create awareness about plants of economic importance",
                              "CO2: Know about their distribution patterns",
                              "CO3: Acquire skill in identification of medicinal plants",
                              "CO4: Learn about their cultivation and economic importance"
                        ],
                        "theory": {
                              "credits": "5",
                              "units": [
                                    {
                                          "title": "Unit 1: Cereals, Legumes, Oil & Fats (14 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation and uses of Cereals (Wheat, Maize and Rice).",
                                                "Legumes (Gram, Garden pea), Oil and Fats (Mustard and Groundnut) yielding plants."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Spices, Fruits and Vegetables (12 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation and uses of Spices (Coriander, Chilli and Turmeric).",
                                                "Fruits and Vegetables (Mango, Litchi, Cauliflower, Brinjal)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Beverages, Narcotics, Timber, Fiber & Rubber (14 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation, processing and uses of Beverages (Tea and Coffee).",
                                                "Narcotics, Timber and Fiber yielding plant (Sal, Teak, Cotton, Jute), Rubber and Gum yielding plants."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Medicinal Plants, Sugar & Starch (10 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation and uses of ten (10) Medicinal plants of Bihar.",
                                                "Sugar (Sugarcane) and Starch (Potato) yielding plants."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Kochhar, S.L. (2012). Economic Botany in Tropics, MacMillan & Co. New Delhi, India.",
                              "Chrispeels, M.J. and Sadava, D.E. (2003). Plants, Genes and Agriculture, Jones & Bartlett Publishers.",
                              "Pandey, B.P. (2005). Economic Botany, S. Chand & Company Pvt. Ltd. 6th edition.",
                              "Kochner, S.N. (2016). Economic Botany: A Comprehensive Study, Cambridge University Press. 5th edition.",
                              "Sharma, V. K., Shenai, S. K. (2013). Economically Important Medicinal Plants, Campus Book International. 1st edition."
                        ]
                  },
                  {
                        "courseTitle": "Genetics",
                        "courseCode": "MJC-7",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand Mendelian laws of inheritance and its variations",
                              "CO2: Comprehend the effect of chromosomal abnormalities leading to genetic disorders",
                              "CO3: Know the details of mutations and their uses",
                              "CO4: Know about the sex determination and sex linked inheritance"
                        ],
                        "theory": {
                              "credits": "5",
                              "units": [
                                    {
                                          "title": "Unit 1: Mendelian inheritance (14 Lectures)",
                                          "topics": [
                                                "Mendelian inheritance: Mendel's experiments and principles of inheritance: back cross and test cross.",
                                                "Gene interactions and modified dihybrid ratio — complementary, supplementary, duplicate and epistatic factor and inhibitory genes."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Linkage and crossing over (14 Lectures)",
                                          "topics": [
                                                "Cytological basis of crossing over; Recombination frequency, two factor and three factor crosses; Interference and coincidence.",
                                                "Sex determination and sex linked inheritance; Cytoplasmic inheritance."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Mutations (08 Lectures)",
                                          "topics": [
                                                "Types and induction (physical and chemical mutagens); Molecular basis of mutations and their role."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Chromosomes & Aberrations (14 Lectures)",
                                          "topics": [
                                                "Chromosomes: Physical and chemical characteristics, Lampbrush chromosomes, B-chromosomes and polytene chromosomes.",
                                                "Chromosomal aberrations: Deletion, Duplication, Inversion, Translocation, Position effect.",
                                                "Euploidy and Aneuploidy, Polyploidy (types and role in evolution)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Gardner, E.J., Simmons, M.J., Snustad, D.P. (1991). Principles of Genetics, John Wiley & Sons, India. 8th edition.",
                              "Snustad, D.P. and Simmons, M.J. (2010). Principles of Genetics, John Wiley & Sons Inc., India. 5th edition.",
                              "Klug, W.S., Cummings, M.R., Spencer, C.A. (2012). Concepts of Genetics, Benjamin Cummings, U.S.A. 10th edition.",
                              "Griffiths, A.J.F., Wessler, S.R., Carroll, S.B., Doebley, J. (2010). Introduction to Genetic Analysis, W. H. Freeman and Co., U.S.A. 10th edition.",
                              "Verma, P.S. Agarwal, V.K. (2010). Genetics, S. Chand & Company Pvt. Ltd. 2nd edition.",
                              "Singh, B.D. (2014). Genetics, Kalyani Publishers. 2nd edition.",
                              "Gupta P.K. (2001). Genetics, Rastogi Publication. 3rd edition."
                        ]
                  }
            ],
            "5th": [
                  {
                        "courseTitle": "Molecular Biology",
                        "courseCode": "MJC-8",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Decipher the structures and chemical properties of DNA and RNA and their role",
                              "CO2: Understand various steps in transcription and translation in prokaryotes and eukaryotes",
                              "CO3: Know about gene regulation in prokaryotes and eukaryotes",
                              "CO4: Gain knowledge of modern biology techniques"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Nucleic acids & Genetic code (12 Lectures)",
                                          "topics": [
                                                "Nucleic acids: structures of DNA and RNA, forms of DNA, DNA replication and role of DNA polymerases.",
                                                "Different forms of RNA and their role, Genetic code."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Central dogma, Transcription & Translation (10 Lectures)",
                                          "topics": [
                                                "Central dogma, Transcription and Translation in prokaryotes and eukaryotes."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Gene regulation (08 Lectures)",
                                          "topics": [
                                                "Gene regulation in prokaryotes (Lac operon) and eukaryotes."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Modern Molecular Techniques (10 Lectures)",
                                          "topics": [
                                                "Blotting techniques: northern, southern & western blotting.",
                                                "DNA fingerprinting, Gel Electrophoresis, Polymerase Chain Reaction (PCR)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Watson J.D., Baker, T.A., Bell, S.P., Gann, A., Levine, M., Losick, R. (2007). Molecular Biology of the Gene, Pearson Benjamin Cummings. 6th edition.",
                              "Klug, W.S., Cummings, M.R., Spencer, C.A. (2009). Concepts of Genetics. Benjamin Cummings. U.S.A. 9th edition.",
                              "Russell, P. J. (2010). Genetics- A Molecular Approach. Benjamin Cummings, U.S.A. 3rd edition.",
                              "Griffiths, A.J.F., Wessler, S.R., Carroll, S.B., Doebley, J. (2010). Introduction to Genetic Analysis, W. H. Freeman and Co., U.S.A. 10th edition.",
                              "Karp Gerald (2010). Cell Biology, John Willey and Sons., Inc. 6th edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. DNA isolation from plant sources.",
                                    "2. DNA estimation by diphenylamine reagent/UV Spectrophotometry.",
                                    "3. Study of DNA replication mechanisms through photographs.",
                                    "4. Study of structures of prokaryotic RNA polymerase and eukaryotic RNA polymerase II through photographs."
                              ]
                        }
                  },
                  {
                        "courseTitle": "Plant Ecology and Phytogeography",
                        "courseCode": "MJC-9",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Knowledge of plant communities and ecological adaptations in plants",
                              "CO2: Understand about the soils on the basis of physical, chemical and biological components",
                              "CO3: Know about the types of pollution and their control measures",
                              "CO4: Get idea about the conservation of biodiversity, phyto-geographical regions of India"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Environment, Ecology & Biotic interactions (06 Lectures)",
                                          "topics": [
                                                "Environment, Ecology, Biosphere, Biome, habitat, niche; Adaptation of hydrophytes and xerophytes.",
                                                "Biotic interactions: Beneficial and harmful interactions (symbiosis, commensalism, amensalism, herbivory, predation, parasitism)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Population, Community Ecology & Ecosystem (12 Lectures)",
                                          "topics": [
                                                "Population ecology: Characteristics and Regulations.",
                                                "Community ecology: Concept of ecological amplitude; Characters: analytical and synthetic; Ecotone and edge effect; Dynamics: succession (Hydrosere and Xerosere).",
                                                "Ecosystem: Structure and function of ecosystem, food chains and webs, Principles and models of energy flow, ecological pyramids."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Soil and Water (10 Lectures)",
                                          "topics": [
                                                "Soil: Origin, Formation, Composition (Physical, Chemical and Biological), Soil profile and importance.",
                                                "Water: Precipitation types (rain, fog, snow, hail, dew), Soil water and Water table."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Biogeochemical cycles, Pollution & Phytogeography (12 Lectures)",
                                          "topics": [
                                                "Biogeochemical cycles: Gaseous and sedimentary cycles, Hydrological cycle.",
                                                "Environmental pollution: Air pollution, water pollution, noise pollution, radioactive pollution and their control measures, Global Warming and Ozone hole.",
                                                "Phytogeography: Major vegetational belts of India, Basic concept of wetlands with special reference to Bihar; Conservation of biodiversity."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Odum, E.P. (2005). Fundamentals of ecology, Cengage Learning India Pvt. Ltd., New Delhi. 5th edition.",
                              "Singh, J.S., Singh, S.P., Gupta, S. (2006). Ecology Environment and Resource Conservation, Anamaya Publications, New Delhi, India.",
                              "Sharma, P.D. (2010). Ecology and Environment, Rastogi Publications, Meerut, India. 8th edition.",
                              "Wilkinson, D.M. (2007). Fundamental Processes in Ecology: An Earth Systems Approach, Oxford University Press. U.S.A.",
                              "Dash, M.C., Dash, S.P. (2009). Fundamentals of Ecology, Tata McGraw Hill. 3rd edition.",
                              "Shukla, R.S., Chandel, P.S. (2010). A text book of Plant Ecology, S. Chand & Company Pvt. Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Determination of pH of various soil and water samples.",
                                    "2. Analysis for carbonates, chlorides, nitrates, sulphates, organic matter and base deficiency from two soil samples by rapid soil tests.",
                                    "3. Study of morphological and anatomical adaptations of hydrophytes and xerophytes.",
                                    "4. Study of biotic interactions of the following: Stem parasite (Cuscuta), Root parasite (Orobanche), Epiphytes, Predation (Insectivorous plants) through specimens/photographs.",
                                    "5. Quantitative analysis of herbaceous vegetation in the college campus for frequency and comparison with Raunkiaer's frequency distribution law.",
                                    "6. Quantitative analysis of herbaceous vegetation for density and abundance in the college campus field visit."
                              ]
                        }
                  }
            ],
            "6th": [
                  {
                        "courseTitle": "Plant Systematics",
                        "courseCode": "MJC-10",
                        "credits": "4",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Identify and classify the local flora",
                              "CO2: Know about the rules of ICBN",
                              "CO3: Awareness of different systems of Plant Classification",
                              "CO4: Preparation of herbarium and its importance"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Systematics & Botanical Nomenclature (12 Lectures)",
                                          "topics": [
                                                "Systematics, Concept of taxa (family, genus, species); Categories and taxonomic hierarchy; Species concept (taxonomic, biological, evolutionary).",
                                                "Botanical nomenclature: Idea about important rules of plant nomenclature as per ICBN."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Systems of Classification (08 Lectures)",
                                          "topics": [
                                                "Classification of plants as proposed by Bentham & Hooker and Hutchinson."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Floral characteristics of Families (10 Lectures)",
                                          "topics": [
                                                "Floral characteristics and economic importance of following families: Ranunculaceae, Asclepiadaceae, Apocynaceae, Amaranthaceae, Euphorbiaceae, Lamiaceae, Cyperaceae and Poaceae."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Phylogeny of Angiosperms (10 Lectures)",
                                          "topics": [
                                                "Phylogeny of Angiosperms: Terms and concepts of primitive and advanced, homology and analogy, origin & evolution of angiosperms, methods of illustrating evolutionary relationship (phylogenetic tree, cladogram)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Singh, G. (2012). Plant Systematics: Theory and Practice, Oxford & IBH Pvt. Ltd., New Delhi. 3rd edition.",
                              "Jeffrey, C. (1982). An Introduction to Plant Taxonomy, Cambridge University Press, Cambridge.",
                              "Judd, W.S., Campbell, C.S., Kellogg, E.A., Stevens, P.F. (2002). Plant Systematics-A Phylogenetic Approach, Sinauer Associates Inc., U.S.A. 2nd edition.",
                              "Radford, A.E. (1986). Fundamentals of Plant Systematics, Harper and Row, New York.",
                              "Sharma, O.P. (2016). Plant Taxonomy, McGraw Hill Education Pvt. Ltd. 2nd edition.",
                              "Sambamurthy, A.V.S.S. (2005). Taxonomy of angiosperms, I.K. International Pvt. Ltd. 1st edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Study of vegetative and floral characters of the following families (Description, V.S. flower, section of ovary, floral diagram/s, floral formula/e and systematic position according to Bentham & Hooker's system of classification): Ranunculaceae, Lamiaceae, Apocynaceae, Amaranthaceae, Asclepiadaceae, Euphorbiaceae and Cyperaceae.",
                                    "2. Preparation of Herbarium sheets (to be submitted in the record book)."
                              ]
                        }
                  },
                  {
                        "courseTitle": "Reproductive Biology of Angiosperms",
                        "courseCode": "MJC-11",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Know about the sporogenesis and gametogenesis",
                              "CO2: Understand structure and functions of anther wall and pollen wall, pollen biology",
                              "CO3: Learn detailed study of double fertilization, endosperm and embryo",
                              "CO4: Comprehend the causes of polyembryony and apomixes"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Anther & Palynology (10 Lectures)",
                                          "topics": [
                                                "Anther: Structure and functions of anther wall, microsporogenesis and microgametogenesis.",
                                                "Palynology and scope (a brief account); Pollen viability, germination.",
                                                "Abnormal features: Pseudomonads, polyads, massulae, pollinia."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Ovule, Embryo sac & Double fertilization (16 Lectures)",
                                          "topics": [
                                                "Ovule: Structure and Types; Special structures — endothelium, obturator, aril, caruncle and hypostase.",
                                                "Female Gametophyte (Types of Embryo sacs) and megagametogenesis (details of Polygonum type); Organization and ultrastructure of mature embryo sac.",
                                                "Double fertilization; Endosperm: Types, development and its morphological natures."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Embryo (08 Lectures)",
                                          "topics": [
                                                "Embryo: General pattern of development of dicot and monocot embryo."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Apomixis & Polyembryony (06 Lectures)",
                                          "topics": [
                                                "Apomixis & Polyembryony — Definition, types and applications."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Bhojwani, S.S. and Bhatnagar, S.P. (2011). The Embryology of Angiosperms, Vikas Publishing House. Delhi. 5th edition.",
                              "Shivanna, K.R. (2003). Pollen Biology and Biotechnology, Oxford and IBH Publishing Co. Pvt. Ltd. Delhi.",
                              "Raghavan, V. (2000). Developmental Biology of Flowering plants, Springer, Netherlands.",
                              "Johri, B.M. I (1984). Embryology of Angiosperms, Springer-Verlag, Netherlands.",
                              "Johri, B.N. Ambegaokar, K.B., Srivastava, P.S. (2015). Comparative Embryology of Angiosperms, Vol. 1 & 2. Springer. 1st edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Photographs/slides of pollen grains of families: Malvaceae, Liliaceae, Asteraceae and Poaceae.",
                                    "2. Study of anther, ovule, double fertilization, endosperm and embryo through slide/photographs/ppt.",
                                    "3. Models of the above topics to be submitted by the students."
                              ]
                        }
                  },
                  {
                        "courseTitle": "Plant Physiology",
                        "courseCode": "MJC-12",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand Water relation of plants with respect to various physiological processes",
                              "CO2: Know about the mineral nutrition",
                              "CO3: Understand dormancy and germination in plants; learn about types and roles of phytohormones"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Plant water relationship & Translocation (12 Lectures)",
                                          "topics": [
                                                "Plant water relationship: Imbibition, diffusion and osmosis; Water Potential and its components.",
                                                "Active and passive absorption and transport of water and solutes; Ascent of sap.",
                                                "Transpiration and factors affecting transpiration, mechanism of stomatal movement and factors controlling it.",
                                                "Transport of organic substances: Path and mechanism of translocation."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Mineral nutrition (06 Lectures)",
                                          "topics": [
                                                "Mineral nutrition: Macro and micronutrients and their role in plant nutrition; nutrient uptake and transport mechanisms, role of carriers."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Phytohormones (12 Lectures)",
                                          "topics": [
                                                "Phytohormones: Discovery, chemical nature (basic structure), bioassay and physiological roles of Auxin, Gibberellins, Cytokinin, Abscisic acid and Ethylene."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Physiology of flowering & Growth (10 Lectures)",
                                          "topics": [
                                                "Physiology of flowering: Photoperiodism and vernalization; Plant movements, plant growth."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Hopkins, W.G. and Huner, A. (2008). Introduction to Plant Physiology, John Wiley and Sons. U. S.A. 4th edition.",
                              "Bajracharya D. (1999). Experiments in Plant Physiology-A Laboratory Manual, Narosa Publishing House, New Delhi.",
                              "Jain V. K. (2014). Fundamentals of Plant Physiology, S. Chand & Company Ltd. 16th Revised edition.",
                              "Verma V. (2016). Plant Physiology, Athena Academic. 2nd edition.",
                              "Mazumdar, B.C. (2005). Photoperiodism and Vernalization in Plants, Daya Publishing House. 1st edition.",
                              "Mukherji, S., Ghosh, A.K. (1996). Plant Physiology, New Central Book Agency (P) Ltd. 1st edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. Determination of the rate of transpiration by using Farmer's and Ganong's Potometer.",
                                    "2. Determination of the amount of water absorbed and transpired by a plant, using T/A apparatus.",
                                    "3. Study of different types of stomata.",
                                    "4. To compare the rate of imbibition of oily and starchy seeds.",
                                    "5. Study of effect of sugar concentrations on leaf cell by plasmolytic method.",
                                    "6. Demonstration experiments: Bell jar experiment, Wilmott's bubbler method, Demonstration of osmosis using potato."
                              ]
                        }
                  }
            ],
            "7th": [
                  {
                        "courseTitle": "Plant Metabolism",
                        "courseCode": "MJC-13",
                        "credits": "5",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand the anabolic and catabolic pathways of metabolism",
                              "CO2: Recognize the importance of carbon assimilation in photorespiration",
                              "CO3: Understand ATP synthesis in respiration",
                              "CO4: Interpret the biological nitrogen fixation"
                        ],
                        "theory": {
                              "credits": "5",
                              "units": [
                                    {
                                          "title": "Unit 1: Concept of metabolism & Regulatory Enzymes (06 Lectures)",
                                          "topics": [
                                                "Concept of metabolism, regulation of metabolism, role of regulatory enzymes (allosteric, covalent modulation and isozymes)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Photosynthesis (14 Lectures)",
                                          "topics": [
                                                "Photosynthetic apparatus, pigments, photochemical reactions, electron transport pathways in chloroplast membranes, photophosphorylation.",
                                                "Calvin Cycle, Crassulacean Acid Metabolism (CAM), Hatch & Slack pathway; Photorespiration."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Respiration (12 Lectures)",
                                          "topics": [
                                                "Glycolysis, TCA Cycle; oxidative phosphorylation, Pentose Phosphate Pathway, Respiratory quotient."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Biological nitrogen fixation (08 Lectures)",
                                          "topics": [
                                                "Biological nitrogen fixation (examples of legumes and non-legumes)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Hopkins, W.G. and Huner, A. (2008). Introduction to Plant Physiology, John Wiley and Sons. U. S.A. 4th edition.",
                              "Taiz, L., Zeiger, E., Møller, I.M. and Murphy, A (2015). Plant Physiology and Development, Sinauer Associates Inc. USA. 6th edition.",
                              "Bajracharya D. (1999). Experiments in Plant Physiology-A Laboratory Manual, Narosa Publishing House, New Delhi.",
                              "Jain V. K. (2014). Fundamentals of Plant Physiology, S. Chand & Company Ltd. 16th Revised edition.",
                              "Verma V. (2016). Plant Physiology, Athena Academic. 2nd edition.",
                              "Harborne, J.B. (1973). Phytochemical Methods, John Wiley & Sons. New York.",
                              "Pathak, V.N., Khatri, N.K., Pathak, M. (2012). Fundamental of Plant Physiology, Agribios. 5th edition."
                        ]
                  },
                  {
                        "courseTitle": "Research Methodology of Faculty of Science",
                        "courseCode": "MJC-14",
                        "credits": "5",
                        "marks": "100",
                        "theory": {
                              "credits": "5",
                              "units": [
                                    {
                                          "title": "Unit 1: Fundamentals of Scientific Research",
                                          "topics": [
                                                "Meaning, objectives and types of research; Research process and steps in scientific research.",
                                                "Identification and formulation of research problem; Literature survey and citation databases."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Research Design & Data Analysis",
                                          "topics": [
                                                "Sampling techniques, Experimental designs and data collection methods.",
                                                "Statistical tools for data analysis: Mean, Standard deviation, Chi-square test, Student t-test, ANOVA."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Scientific Communication & Ethics",
                                          "topics": [
                                                "Structure of scientific paper, abstract writing, thesis preparation, poster and oral presentations.",
                                                "Research ethics, plagiarism guidelines, intellectual property rights (IPR) and patents."
                                          ]
                                    }
                              ]
                        }
                  },
                  {
                        "courseTitle": "Recombinant DNA Technology and Plant Biotechnology",
                        "courseCode": "MJC-15",
                        "credits": "6",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Have knowledge about the core enzymes involved in Recombinant DNA Technology",
                              "CO2: Have knowledge about the different steps of Recombinant DNA Technology",
                              "CO3: Understand the principle and basic protocols for Plant Tissue Culture and its application",
                              "CO4: Know about the role of rDNA and Plant Biotechnology as well as biosafety concerns of GMO"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: rDNA technology & Cloning vectors (10 Lectures)",
                                          "topics": [
                                                "rDNA technology: History; Major enzymes used: Restriction enzymes-types and cleavage pattern; DNA ligase- types and ligation process.",
                                                "Steps of Genetic engineering: Selection of cloning vectors- Plasmids (natural, pBR322), Phages, cosmid."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Passenger DNA, Libraries & Gene Transfer (12 Lectures)",
                                          "topics": [
                                                "Passenger DNA: Different strategies used for isolation/synthesis of gene; Construction of genomic and cDNA libraries.",
                                                "Construction of rDNA: Different strategies for construction of rDNA.",
                                                "Methods of DNA transfer in suitable host: electroporation, microinjection, particle gun method.",
                                                "Selection strategies: Different methods for selection of clone (antibiotic resistant markers, colony hybridization, immune-screening); Expression of foreign gene."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Plant Tissue Culture (10 Lectures)",
                                          "topics": [
                                                "Plant Tissue Culture: Basic aspect, totipotency, organogenesis, embryogenesis (somatic and zygotic).",
                                                "Role of plant tissue culture in growth, development and differentiation, anther culture and their applications micro-propagation.",
                                                "Germplasm conservation, cryopreservation."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Applications & Biosafety Concerns (08 Lectures)",
                                          "topics": [
                                                "Application of Recombinant DNA technology: In medicine (Humulin) and Agriculture (Bt-cotton, Flavr Savr tomato, Golden rice).",
                                                "Biosafety concerns on GMO."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Bhojwani, S.S. and Razdan, M.K., (1996). Plant Tissue Culture: Theory and Practice, Elsevier Science Amsterdam. The Netherlands.",
                              "Glick, B.R., Pasternak, J.J. (2003). Molecular Biotechnology- Principles and Applications of recombinant DNA, ASM Press, Washington.",
                              "Singh, B.D. (2012). Biotechnology: Expanding Horizons, Kalyani Publishers, 4th edition.",
                              "Dubey R.C. (2006). A text book of Biotechnology, S. Chand & Company Pvt. Ltd. 4th edition."
                        ],
                        "practical": {
                              "credits": "2",
                              "topics": [
                                    "1. (a) Preparation of MS medium; (b) Demonstration of in vitro sterilization and inoculation methods using leaf and nodal explants of tobacco, Datura, Brassica etc.",
                                    "2. Study of anther, embryo and endosperm culture, micropropagation, somatic embryogenesis & artificial seeds through photographs.",
                                    "3. Study of steps of genetic engineering for production of Bt cotton, Golden rice, Flavr Savr tomato through photographs.",
                                    "4. Isolation of genomic DNA from cauliflower.",
                                    "5. Models on the above mentioned topics to be submitted by the students."
                              ]
                        }
                  }
            ],
            "8th": [
                  {
                        "courseTitle": "Horticultural Practices and Post-Harvest Technology",
                        "courseCode": "MJC-16",
                        "credits": "4",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand the scope and importance of horticulture",
                              "CO2: Obtain knowledge of different fruits, vegetables and ornamental plants",
                              "CO3: Know the basics of horticulture practices for fruits, vegetables and ornamental plants",
                              "CO4: Understand the importance of Post-harvest technology"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: Introduction (02 Lectures)",
                                          "topics": [
                                                "Scope and importance, Branches of horticulture; Role in rural economy and employment generation; Urban horticulture and ecotourism."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Ornamental plants, Fruit and vegetable crops (10 Lectures)",
                                          "topics": [
                                                "Ornamental plants: Types, classification (annuals, perennials, climbers and trees); Identification and salient features of some ornamental plants [rose, marigold, gladiolus, carnations, poppies, tuberose, cacti and succulents].",
                                                "Fruit and vegetable crops: Production, origin and distribution; Description of plants and their economic products; Management and marketing of vegetables and fruits; Identification of some fruits and vegetables (citrus, banana, mango, chillies and cucurbits)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Horticultural techniques (10 Lectures)",
                                          "topics": [
                                                "Application of manure, fertilizers, nutrients and PGRs; Weed control; Biofertilizers, biopesticides; Irrigation methods (drip irrigation, surface irrigation, furrow and border irrigation); Hydroponics.",
                                                "Propagation Methods: asexual (grafting, cutting, layering, budding), sexual (seed propagation), Scope and limitations."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Landscaping and Garden design (08 Lectures)",
                                          "topics": [
                                                "Landscaping and garden design: Planning and layout (parks and avenues); gardening traditions — Ancient Indian, European, Mughal and Japanese Gardens; Urban forestry; policies and practices.",
                                                "Floriculture: Cut flowers, bonsai, commerce (market demand and supply); Importance of flower shows and exhibitions."
                                          ]
                                    },
                                    {
                                          "title": "Unit 5: Post-harvest technology & Disease Control (10 Lectures)",
                                          "topics": [
                                                "Importance of post harvest technology in horticultural crops; Evaluation of quality traits; Harvesting and handling of fruits, vegetables and cut flowers; Principles, methods of preservation and processing; Methods of minimizing loses during storage and transportation; Food irradiation — advantages and disadvantages; food safety.",
                                                "Disease control and management: Field and post-harvest diseases; Identification of deficiency symptoms; remedial measures and nutritional management practices."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Singh, D. & Manivannan, S. (2009). Genetic Resources of Horticultural Crops. Ridhi International, Delhi, India.",
                              "Swaminathan, M.S. and Kochhar, S.L. (2007). Groves of Beauty and Plenty: An Atlas of Major Flowering Trees in India. Macmillan Publishers, India.",
                              "NIIR Board (2005). Cultivation of Fruits, Vegetables and Floriculture. National Institute of Industrial Research Board, Delhi.",
                              "Kader, A.A. (2002). Post-Harvest Technology of Horticultural Crops. UCANR Publications, USA."
                        ]
                  }
            ]
      },
      "MIC": {
            "1st": [
                  {
                        "courseTitle": "Phycology and Microbiology",
                        "courseCode": "MIC-1",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the diversity, structure and importance of viruses and bacteria",
                              "CO2: Explain the thallus organization, economic importance and the life cycle of various algae"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Five kingdom classification & Algae (07 Lectures)",
                                          "topics": [
                                                "Five kingdom classification.",
                                                "Algae: Characteristics, Morphology and life cycle of Nostoc, Oedogonium and Chara."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Virus (06 Lectures)",
                                          "topics": [
                                                "Discovery and General Structure, DNA Virus (Bacteriophage)-Structure and its replication (Lytic and Lysogenic Cycle), RNA Virus (TMV), Economic importance of Viruses."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Bacteria (07 Lectures)",
                                          "topics": [
                                                "Discovery, Characteristics and Cell structure, Reproduction-vegetative, asexual and genetic recombination (Conjugation, Transformation and Transduction), Economic importance of Bacteria."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Lee, R.E. (2008) Phycology, Cambridge University Press, Cambridge. 4th edition.",
                              "Prescott, L.M., Harley J.P., Klein D.A. (2005). Microbiology, McGraw Hill, India. 6th edition.",
                              "Kumar, H.D. (1999). Introductory Phycology. Affiliated East-West Press, Delhi.",
                              "Pelczar, M.J. (2001) Microbiology, 5th edition, Tata McGraw-Hill Co, New Delhi.",
                              "Vashishtha, B.R., Sinha, A.K. Singh, V.P. (2010). Botany for degree students: Algae, S. Chand & Company Ltd. 2nd edition.",
                              "Srivastava, H.N. (2005). Algae, Pradeep Publication. 12th edition.",
                              "Dubey R.C., Maheshwari D.K. (2005). A Text Book of Microbiology, S. Chand & Company Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "(a) Algae- Study of Vegetative and reproductive structures of the forms prescribed in the syllabus through slides.",
                                    "(b) Models and microphotographs of viruses and bacteria."
                              ]
                        }
                  }
            ],
            "2nd": [
                  {
                        "courseTitle": "Biomolecules and Cell Biology",
                        "courseCode": "MIC-2",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the structure and properties of bio molecules",
                              "CO2: Explain the classification, properties and functions of enzymes",
                              "CO3: Describe cell wall, cell membrane and the structure, chemistry and functions of cellular organelles",
                              "CO4: Explain mitotic and meiotic cell divisions"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Bio-molecules (06 Lectures)",
                                          "topics": [
                                                "Structure, classification and function of Carbohydrates, Amino acids, Protein."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Enzymes (04 Lectures)",
                                          "topics": [
                                                "Nomenclature, Classification, mode of action."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Cell Biology (10 Lectures)",
                                          "topics": [
                                                "a. Structure of the cell as seen under Electron Microscope.",
                                                "b. Characteristics of Prokaryotic & Eukaryotic Cells.",
                                                "c. Structure of Chromosome.",
                                                "d. Mitosis and meiosis."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Campbell, M.K. (2012) Biochemistry, 7th ed., Published by Cengage Learning.",
                              "Tymoczko J.L., Berg J.M and Stryer L (2012) Biochemistry: A short course, 2nd ed., W.H.Freeman.",
                              "Berg J.M, Tymoczko J.L and Stryer L (2011) Bio chemistry, W.H. Freeman and Company.",
                              "Nelson D.L and Cox M.M (2008) Lehninger Principles of Biochemistry, 5th Edition, W.H. Freeman and Company.",
                              "Karp, G. (2010). Cell Biology, John Wiley & Sons, U.S.A. 6th edition.",
                              "Hardin, J., Becker, G.S, Kliensmith, L.J. (2012) Becker's World of the Cell, Pearson Education Inc. U.S.A. 8th edition.",
                              "Cooper, G.M .and Hausman, R.E. (2009) The Cell: A Molecular Approach, 5th edition. ASM."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Detection of Carbohydrates and Protein.",
                                    "2. Study of different stages of mitosis and meiosis."
                              ]
                        }
                  }
            ],
            "3rd": [
                  {
                        "courseTitle": "Mycology and Phytopathology",
                        "courseCode": "MIC-3",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the thallus organization, nutrition, economic importance and life cycle of various fungi",
                              "CO2: Explain the diversity, structure and importance of lichen and mycorrhiza",
                              "CO3: Describe the terms, scope and importance of plant pathology",
                              "CO4: Describe the etiology, symptoms and control measures of plant diseases"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Fungi, Lichens & Mycorrhiza (06 Lectures)",
                                          "topics": [
                                                "Fungi: General characteristics; Thallus organization.",
                                                "General account of Lichens, types & economic importance.",
                                                "Mycorrhiza: Ectomycorrhiza, Endomycorrhiza and their significance."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Structure and life history (06 Lectures)",
                                          "topics": [
                                                "Structure and life history of the following genera: Synchytrium and Puccinia."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Etiology, symptoms and control of diseases (08 Lectures)",
                                          "topics": [
                                                "Citrus canker, Little leaf of brinjal, Late blight of potato, White rust of crucifers."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Alexopoulos, C.J., Mims, C.W., Blackwell, M. (1996). Introductory Mycology, John Wiley & Sons (Asia) Singapore. 4th edition.",
                              "Webster, J. and Weber, R. (2007). Introduction to Fungi, Cambridge University Press, Cambridge. 3rd edition.",
                              "Sethi, I.K. and Walia, S.K. (2011). Text book of Fungi and Their Allies, Macmillan Publishers India Ltd.",
                              "Sharma, P.D. (2011). Plant Pathology, Rastogi Publication, Meerut, India.",
                              "Vashishtha, B.R. Sinha, A.K. (2005). Botany for degree Students Part II, S. Chand & Company Ltd. 2nd edition.",
                              "Bilgrami, K.S. Dubey, H.C. (2005). A text book of Modern Plant Pathology, Vikas Publishing Home Pvt. Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Photographs of above mentioned diseases.",
                                    "2. Temporary slide preparation of diseases studied in theory."
                              ]
                        }
                  }
            ],
            "4th": [
                  {
                        "courseTitle": "Morphology and Anatomy",
                        "courseCode": "MIC-4",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Explain the tissue system in plants and their functions",
                              "CO2: Understand the normal and anomalous secondary growth in plants and their causes",
                              "CO3: Learn about the structural adaptations in plants growing in different environmental conditions",
                              "CO4: Describe the structure and function of periderm"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Inflorescence, flowers, fruits and seeds (05 Lectures)",
                                          "topics": [
                                                "Brief account of inflorescence, flowers, fruits and seeds."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Meristem and permanent tissue (05 Lectures)",
                                          "topics": [
                                                "Meristem and permanent tissue."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Secondary growth & Anomalous secondary growth (05 Lectures)",
                                          "topics": [
                                                "Normal secondary growth; Anomalous secondary growth in Tinospora, Boerhaavia, and Dracaena."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Organization of tissue in relation to environment (05 Lectures)",
                                          "topics": [
                                                "Organization of tissue in relation to environment: Hydrophytes, Xerophytes, Halophytes and Epiphytes."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Dickison, W.C. (2000). Integrative Plant Anatomy, Harcourt Academic Press, USA.",
                              "Fahn, A. (1974). Plant Anatomy, Pergamon Press, USA.",
                              "Mauseth, J.D. (1988). Plant Anatomy, The Benjamin/Cummings Publisher, USA.",
                              "Esau, K. (1977). Anatomy of Seed Plants, John Wiley & Sons, Inc., Delhi.",
                              "Vasishtha, P.C. (2004). Plant Anatomy, Pradeep Publication. 17th edition.",
                              "Singh S.K. Srivastava. S. (2014). Anatomy of angiosperms, Campus Books International. 1st edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Study of anatomical details through slides/ Photographs.",
                                    "2. Study of morphological and anatomical adaptations in hydrophytes and xerophytes through specimens and slide."
                              ]
                        }
                  }
            ],
            "5th": [
                  {
                        "courseTitle": "Economic Botany",
                        "courseCode": "MIC-5",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Create awareness about plants of economic importance",
                              "CO2: Know about their distribution patterns",
                              "CO3: Identify them on the basis of their botanical features",
                              "CO4: Learn about their cultivation and economic importance"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Cereals, Legumes, Oil and Fats (10 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation and uses of Cereals (Wheat), Legumes (Garden pea), Oil and Fats (Mustard) yielding plants."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Spices, Fruits and Vegetables (10 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation and uses of Spices (Chilli), Fruits and Vegetables (Mango, Brinjal)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Beverages, Timber, Fiber & Medicinal plants (10 Lectures)",
                                          "topics": [
                                                "Botanical characteristics, cultivation, processing and uses of Beverages (Tea), Timber and Fiber yielding plant (Sal, Cotton).",
                                                "Botanical characteristics, cultivation and uses of five Medicinal plants."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Kochhar, S.L. (2012). Economic Botany in Tropics, MacMillan & Co. New Delhi, India.",
                              "Wickens, G.E. (2001). Economic Botany: Principles & Practices, Kluwer Academic Publishers, The Netherlands.",
                              "Chrispeels, M.J. and Sadava, D.E. (2003). Plants, Genes and Agriculture, Jones & Bartlett Publishers.",
                              "Pandey, B.P. (2005). Economic Botany, S. Chand & Company Pvt. Ltd. 6th edition.",
                              "Kochner, S.N. (2016). Economic Botany: A Comprehensive Study, Cambridge University Press. 5th edition.",
                              "Sharma, V. K., Shenai, S. K. (2013). Economically Important Medicinal Plants, Campus Book International. 1st edition.",
                              "Arya, P.S. (2000). Spice Crops of India, Kalyani Publishers."
                        ]
                  },
                  {
                        "courseTitle": "Genetics",
                        "courseCode": "MIC-6",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand Mendelian laws of inheritance and its variations",
                              "CO2: Comprehend the effect of chromosomal abnormalities leading to genetic disorders",
                              "CO3: Know the details of mutations and their uses",
                              "CO4: Know about the sex determination and sex linked inheritance"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Mendelian inheritance (10 Lectures)",
                                          "topics": [
                                                "Mendelian inheritance: Mendel's experiments and principles of inheritance: back cross and test cross; gene interactions and modified dihybrid ratio — complementary, supplementary."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Linkage and crossing over (05 Lectures)",
                                          "topics": [
                                                "Linkage and crossing over: Cytological basis of crossing over; Sex determination and sex linked inheritance; Cytoplasmic inheritance."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Mutations (05 Lectures)",
                                          "topics": [
                                                "Mutations: Types and induction (physical and chemical mutagens); Molecular basis of mutations and their role."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Chromosomes (10 Lectures)",
                                          "topics": [
                                                "Chromosomes: Physical and chemical characteristics, Lampbrush chromosomes and polytene chromosomes.",
                                                "Chromosomal aberrations: Deletion, Duplication, Inversion, Translocation, Polyploidy (types and role in evolution)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Gardner, E.J., Simmons, M.J., Snustad, D.P. (1991). Principles of Genetics, John Wiley & sons, India. 8th edition.",
                              "Snustad, D.P. and Simmons, M.J. (2010). Principles of Genetics, John Wiley & Sons Inc., India. 5th edition.",
                              "Klug, W.S., Cummings, M.R., Spencer, C.A. (2012). Concepts of Genetics, Benjamin Cummings, U.S.A. 10th edition.",
                              "Verma, P.S. Agarwal, V.K. (2010). Genetics, S. Chand & Company Pvt. Ltd. 2nd edition.",
                              "Singh, B.D. (2014). Genetics, Kalyani Publishers. 2nd edition.",
                              "Gupta P.K. (2001). Genetics, Rastogi Publication. 3rd edition."
                        ]
                  }
            ],
            "6th": [
                  {
                        "courseTitle": "Plant Ecology and Phytogeography",
                        "courseCode": "MIC-7",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Knowledge of plant communities and ecological adaptations in plants",
                              "CO2: Knowledge about the succession and soils on the basis of physical, chemical and biological components",
                              "CO3: Know about the types of pollution and their control measures",
                              "CO4: Knowledge about the types and control of pollution, phyto-geographical regions of India"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Environment, Ecology & Adaptations (06 Lectures)",
                                          "topics": [
                                                "Environment, Ecology, Biosphere, Biome, habitat, niche; Adaptation of hydrophytes and xerophytes.",
                                                "Biotic interactions: Beneficial and harmful interactions (symbiosis, commensalism, amensalism, herbivory, predation, parasitism)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Community ecology & Ecosystem (10 Lectures)",
                                          "topics": [
                                                "Community ecology: Concept of ecological amplitude; Characters: analytical and synthetic; Dynamics: succession (Hydrosere and Xerosere).",
                                                "Ecosystem: Structure and function of ecosystem, food chains and webs, Principles and models of energy flow, ecological pyramids."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Soil (04 Lectures)",
                                          "topics": [
                                                "Soil: Origin, Formation, Composition (Physical, Chemical and Biological) Soil profile and importance."
                                          ]
                                    },
                                    {
                                          "title": "Unit 4: Biogeochemical cycles, Pollution & Phytogeography (10 Lectures)",
                                          "topics": [
                                                "Biogeochemical cycles: Gaseous cycles.",
                                                "Environmental pollution: Air pollution, water pollution, noise pollution, radioactive pollution and their control measures, global Warming and Ozone hole.",
                                                "Phytogeography: Major vegetational belts of India."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Odum, E.P. (2005). Fundamentals of ecology, Cengage Learning India Pvt. Ltd., New Delhi. 5th edition.",
                              "Singh, J.S., Singh, S.P., Gupta, S. (2006). Ecology Environment and Resource Conservation, Anamaya Publications, New Delhi, India.",
                              "Sharma, P.D. (2010). Ecology and Environment, Rastogi Publications, Meerut, India. 8th edition.",
                              "Wilkinson, D.M. (2007). Fundamental Processes in Ecology: An Earth Systems Approach, Oxford University Press. U.S.A.",
                              "Dash, M.C., Dash, S.P. (2009). Fundamentals of Ecology, Tata McGraw Hill. 3rd edition.",
                              "Shukla, R.S., Chandel, P.S. (2010). A text book of Plant Ecology, S. Chand & Company Pvt. Ltd. 2nd edition."
                        ]
                  },
                  {
                        "courseTitle": "Plant Systematics",
                        "courseCode": "MIC-8",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Identify and classify the local flora",
                              "CO2: Know about the rules of ICBN",
                              "CO3: Awareness of Plant Classification",
                              "CO4: Preparation of herbarium and its importance"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Systematics & ICBN (08 Lectures)",
                                          "topics": [
                                                "Systematics, Concept of taxa (family, genus, species); Categories and taxonomic hierarchy; Species concept (taxonomic, biological, evolutionary).",
                                                "Botanical nomenclature: Idea about important rules of plant nomenclature as per ICBN."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Bentham & Hooker Classification (03 Lectures)",
                                          "topics": [
                                                "Classification of plants as proposed by Bentham & Hooker."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Floral characteristics & Economic importance (10 Lectures)",
                                          "topics": [
                                                "Floral characteristics and economic importance of following families: Ranunculaceae, Apocynaceae, Euphorbiaceae and Cyperaceae."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Singh, G. (2012). Plant Systematics: Theory and Practice, Oxford & IBH Pvt. Ltd., New Delhi. 3rd edition.",
                              "Judd, W.S., Campbell, C.S., Kellogg, E.A., Stevens, P.F. (2002). Plant Systematics-A Phylogenetic Approach, Sinauer Associates Inc., U.S.A. 2nd edition.",
                              "Radford, A.E. (1986). Fundamentals of Plant Systematics, Harper and Row, New York.",
                              "Sharma, O.P. (2016). Plant Taxonomy, McGraw Hill Education Pvt. Ltd. 2nd edition.",
                              "Sambamurthy, A.V.S.S. (2005). Taxonomy of anigiosperms, I.K. International Pvt. Ltd. 1st edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Study of vegetative and floral characters of the above families.",
                                    "2. Preparation of Herbarium sheets (to be submitted in the record book)."
                              ]
                        }
                  }
            ],
            "7th": [
                  {
                        "courseTitle": "Plant Physiology",
                        "courseCode": "MIC-9",
                        "credits": "4",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand Water relation of plants with respect to various physiological processes",
                              "CO2: Know about the mineral nutrition",
                              "CO3: Learn about types and roles of phytohormones"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: Plant water relationship & Transpiration (20 Lectures)",
                                          "topics": [
                                                "Plant water relationship: Imbibition, diffusion and osmosis; Water Potential and its components.",
                                                "Active and passive absorption and transport of water and solutes; Ascent of sap.",
                                                "Transpiration and factors affecting transpiration, Transport of organic substances."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Mineral nutrition (06 Lectures)",
                                          "topics": [
                                                "Mineral nutrition: Macro and micronutrients and their role in plant nutrition."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Phytohormones (14 Lectures)",
                                          "topics": [
                                                "Phytohormones: Discovery, chemical nature (basic structure), bioassay and physiological roles of Auxin, Gibberellins and Cytokinin."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Taiz, L., Zeiger, E., Møller, I.M. and Murphy, A (2015). Plant Physiology and Development, Sinauer Associates Inc. USA. 6th edition.",
                              "Bajracharya D. (1999). Experiments in Plant Physiology-A Laboratory Manual, Narosa Publishing House, New Delhi.",
                              "Jain V. K. (2014). Fundamentals of Plant Physiology, S. Chand & Company Ltd. 16th Revised edition.",
                              "Verma V. (2016). Plant Physiology, Athena Academic. 2nd edition."
                        ]
                  }
            ],
            "8th": [
                  {
                        "courseTitle": "Horticultural Practices",
                        "courseCode": "MIC-10",
                        "credits": "4",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand the scope and importance of horticulture",
                              "CO2: Obtain knowledge of different fruits, vegetables and ornamental plants",
                              "CO3: Know the basics of horticulture practices for fruits, vegetables and ornamental plants",
                              "CO4: Understand the importance of Post-harvest technology"
                        ],
                        "theory": {
                              "credits": "4",
                              "units": [
                                    {
                                          "title": "Unit 1: Introduction (08 Lectures)",
                                          "topics": [
                                                "Scope and importance, Branches of horticulture; Role in rural economy and employment generation; Urban horticulture and ecotourism."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Ornamental plants, Fruit and vegetable crops (16 Lectures)",
                                          "topics": [
                                                "Ornamental plants: Types, classification (annuals, perennials, climbers and trees); Identification and salient features of some ornamental plants [rose, marigold, carnations, cacti and succulents].",
                                                "Fruit and vegetable crops: Production, origin and distribution; Description of plants and their economic products; Management and marketing of vegetable and fruit crops; Identification of some fruits and vegetable varieties (banana, mango, chillies and cucurbits)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Horticultural techniques (16 Lectures)",
                                          "topics": [
                                                "Application of manure, fertilizers, nutrients and PGRs; Weed control; Biofertilizers, biopesticides; Irrigation methods (drip irrigation, surface irrigation, furrow and border irrigation); Propagation Methods: asexual (grafting, cutting, layering, budding)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Singh, D. & Manivannan, S. (2009). Genetic Resources of Horticultural Crops. Ridhi International, Delhi, India.",
                              "Swaminathan, M.S. and Kochhar, S.L. (2007). Groves of Beauty and Plenty: An Atlas of Major Flowering Trees in India. Macmillan Publishers, India.",
                              "NIIR Board (2005). Cultivation of Fruits, Vegetables and Floriculture. National Institute of Industrial Research Board, Delhi.",
                              "Kader, A.A. (2002). Post-Harvest Technology of Horticultural Crops. UCANR Publications, USA."
                        ]
                  }
            ]
      },
      "MDC": {
            "1st": [
                  {
                        "courseTitle": "Phycology and Microbiology",
                        "courseCode": "MDC-1",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the diversity, structure and importance of viruses and bacteria",
                              "CO2: Explain the thallus organization, economic importance and the life cycle of various algae"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Algae (07 Lectures)",
                                          "topics": [
                                                "Algae: Characteristics, Morphology and life cycle of Nostoc, Oedogonium and Chara."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Virus (06 Lectures)",
                                          "topics": [
                                                "Virus: Discovery and General Structure, DNA Virus (Bacteriophage)-Structure and its replication (Lytic and Lysogenic Cycle), RNA Virus (TMV), Economic importance of Viruses."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Bacteria (07 Lectures)",
                                          "topics": [
                                                "Bacteria: Discovery, Characteristics and cell structure, Reproduction-Vegetative, asexual and genetic recombination (Conjugation, Transformation and Transduction), Economic importance of Bacteria."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Prescott, L.M., Harley J.P., Klein D.A. (2005). Microbiology, McGraw Hill, India. 6th edition.",
                              "Kumar, H.D. (1999). Introductory Phycology. Affiliated East-West Press, Delhi.",
                              "Vashishtha, B.R., Sinha, A.K. Singh, V.P. (2010). Botany for degree students: Algae, S. Chand & Company Ltd. 2nd edition.",
                              "Srivastava, H.N. (2005). Algae, Pradeep Publication. 12th edition.",
                              "Dubey R.C., Maheshwari D.K. (2005). A Text Book of Microbiology, S. Chand & Company Ltd. 2nd edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "(a) Algae: Study of Vegetative and reproductive structures of the forms prescribed in the syllabus through temporary slides preparation.",
                                    "(b) Models and microphotographs of viruses and bacteria."
                              ]
                        }
                  }
            ],
            "2nd": [
                  {
                        "courseTitle": "Biomolecules and Cell Biology",
                        "courseCode": "MDC-2",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Describe the structure and properties of bio molecules",
                              "CO2: Explain the classification, properties and functions of enzymes",
                              "CO3: Describe cell wall, cell membrane and the structure, chemistry and functions of cellular organelles",
                              "CO4: Explain mitotic and meiotic cell divisions"
                        ],
                        "theory": {
                              "credits": "2",
                              "units": [
                                    {
                                          "title": "Unit 1: Bio molecules (06 Lectures)",
                                          "topics": [
                                                "Bio molecules- Structure, classification and function of Carbohydrates, Amino acids, Protein."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Enzymes (04 Lectures)",
                                          "topics": [
                                                "Enzymes- Nomenclature, Classification, mode of action."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Cell Biology (10 Lectures)",
                                          "topics": [
                                                "a. Structure of the cell as seen under Electron Microscope.",
                                                "b. Characteristics of Prokaryotic & Eukaryotic Cells.",
                                                "c. Structure of Chromosome.",
                                                "d. Mitosis and meiosis."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Campbell, M.K (2012) Biochemistry, 7th ed., Published by Cengage Learning.",
                              "Tymoczko J.L, Berg J.M and Stryer L (2012) Biochemistry: A short course, 2nd ed., W.H.Freeman.",
                              "Berg J.M, Tymoczko J.L and Stryer L (2011) Bio chemistry, W.H. Freeman and Company.",
                              "Nelson D.L and Cox M.M (2008) Lehninger Principles of Biochemistry, 5th Edition, W.H. Freeman and Company.",
                              "Karp, G. (2010). Cell Biology, John Wiley & Sons, U.S.A .6th edition."
                        ],
                        "practical": {
                              "credits": "1",
                              "topics": [
                                    "1. Detection of Carbohydrates and Protein.",
                                    "2. Study of different stages of mitosis and meiosis."
                              ]
                        }
                  }
            ],
            "3rd": [
                  {
                        "courseTitle": "Horticultural Practices",
                        "courseCode": "MDC-3",
                        "credits": "3",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Understand the scope and importance of horticulture",
                              "CO2: Obtain knowledge of different fruits, vegetables and ornamental plants",
                              "CO3: Know the basics of horticulture practices for fruits, vegetables and ornamental plants",
                              "CO4: Understand the importance of Post-harvest technology"
                        ],
                        "theory": {
                              "credits": "3",
                              "units": [
                                    {
                                          "title": "Unit 1: Introduction (06 Lectures)",
                                          "topics": [
                                                "Scope and importance, Branches of horticulture; Role in rural economy and employment generation; Urban horticulture and ecotourism."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Ornamental plants, Fruit and vegetable crops (12 Lectures)",
                                          "topics": [
                                                "Ornamental plants: Types, classification (annuals, perennials, climbers and trees); Identification and salient features of some ornamental plants [rose, marigold, carnations, cacti and succulents].",
                                                "Fruit and vegetable crops: Production, origin and distribution; Description of plants and their economic products; Management and marketing of vegetable and fruit crops; Identification of some fruits and vegetable varieties (banana, mango, chillies and cucurbits)."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Horticultural techniques (12 Lectures)",
                                          "topics": [
                                                "Application of manure, fertilizers, nutrients and PGRs; Weed control; Biofertilizers, biopesticides; Irrigation methods (drip irrigation, surface irrigation, furrow and border irrigation); Propagation Methods: asexual (grafting, cutting, layering, budding)."
                                          ]
                                    }
                              ]
                        },
                        "suggestedBooks": [
                              "Singh, D. & Manivannan, S. (2009). Genetic Resources of Horticultural Crops. Ridhi International, Delhi, India.",
                              "Swaminathan, M.S. and Kochhar, S.L. (2007). Groves of Beauty and Plenty: An Atlas of Major Flowering Trees in India. Macmillan Publishers, India.",
                              "NIIR Board (2005). Cultivation of Fruits, Vegetables and Floriculture. National Institute of Industrial Research Board, Delhi.",
                              "Kader, A.A. (2002). Post-Harvest Technology of Horticultural Crops. UCANR Publications, USA."
                        ]
                  }
            ]
      },
      "RP": {
            "7th": [
                  {
                        "courseTitle": "Project / Dissertation",
                        "courseCode": "RP-1",
                        "credits": "12",
                        "marks": "100",
                        "courseOutcomes": [
                              "CO1: Acquire advanced research knowledge through botanical project work under faculty advisory support",
                              "CO2: Formulate plant science research problems, collect botanical specimens, and carry out laboratory/field investigations",
                              "CO3: Enhance technical skills in botanical instrumentation, tissue culture, phytochemistry, and ecological analysis",
                              "CO4: Compile a comprehensive dissertation report and defend findings through scientific presentation and viva-voce"
                        ],
                        "theory": {
                              "credits": "12",
                              "units": [
                                    {
                                          "title": "Unit 1: Botanical Research Formulation, Synopsis & Literature Review",
                                          "topics": [
                                                "Identification and formulation of research problem in specialized plant science domains (Phycology, Mycology, Plant Pathology, Taxonomy, Physiology, Genetics, Biotechnology or Ecology).",
                                                "Exhaustive survey of scientific literature, citation databases, research problem formulation, and preparation of Research Synopsis."
                                          ]
                                    },
                                    {
                                          "title": "Unit 2: Experimental Design, Floristic Survey & Laboratory Investigation",
                                          "topics": [
                                                "Field exploration, plant specimen collection, herbarium preservation, taxonomic characterization, or laboratory experimentation in plant biochemistry and molecular biotechnology.",
                                                "Standardization of analytical protocols, recording of experimental observations, data compilation, and statistical analysis."
                                          ]
                                    },
                                    {
                                          "title": "Unit 3: Dissertation Preparation, Thesis Defense & Viva-Voce",
                                          "topics": [
                                                "Compilation of Dissertation thesis: Introduction, Review of Literature, Materials & Methods, Results & Discussion, Summary, and References.",
                                                "Oral presentation and defense of dissertation before the Departmental Board of Examiners."
                                          ]
                                    }
                              ]
                        }
                  }
            ]
      },
      "INT": {
            "5th": [
                  {
                        "courseTitle": "Internship / Apprenticeship / Field Work",
                        "courseCode": "INT-1",
                        "credits": "4",
                        "marks": "100",
                        "isUnspecifiedInPdf": true,
                        "courseOutcomes": [
                              "CO1: Gain direct practical exposure in plant science industries, nurseries, botanical gardens, or research institutions",
                              "CO2: Apply botanical knowledge in real-world professional and field environments"
                        ]
                  }
            ]
      }
    }
  },
  BA: {
    Mathematics: MATHEMATICS_SYLLABUS,
    Statistics: STATISTICS_SYLLABUS
  }
};

// ============================================================================
// Clipboard & System Utilities
// ============================================================================

/**
 * Robust multi-tier clipboard utility.
 * Guarantees successful copying across all runtime contexts:
 * 1. Synchronous DOM textarea with select() + execCommand('copy') running in the active user gesture.
 * 2. Range selection fallback for mobile WebKit & iOS Safari.
 * 3. Modern navigator.clipboard.writeText when supported and permitted.
 * 
 * @param text - The text string to copy to system clipboard
 * @returns boolean indicating whether copying succeeded
 */
const safeCopyToClipboard = (text: string): boolean => {
  if (!text) return false;
  let copied = false;

  // Tier 1: Synchronous textarea execution within the immediate user click gesture
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Must remain inside viewport boundaries (0,0) without display:none so iOS/WebKit allows selection
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.style.color = "transparent";
    textArea.style.opacity = "0.01";
    textArea.style.zIndex = "-9999";
    textArea.style.fontSize = "16px"; // Prevents iOS page zoom
    textArea.setAttribute("tabindex", "-1");
    textArea.setAttribute("aria-hidden", "true");
    
    document.body.appendChild(textArea);
    textArea.focus({ preventScroll: true });
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    copied = document.execCommand('copy');
    document.body.removeChild(textArea);
  } catch {
    copied = false;
  }

  // Tier 2: Selection range fallback for strict WebViews / iOS Safari
  if (!copied) {
    try {
      const pre = document.createElement("pre");
      pre.textContent = text;
      pre.style.whiteSpace = "pre-wrap";
      pre.style.position = "fixed";
      pre.style.top = "0";
      pre.style.left = "0";
      pre.style.opacity = "0.01";
      pre.style.zIndex = "-9999";
      pre.style.fontSize = "16px";
      document.body.appendChild(pre);

      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(pre);
        selection.removeAllRanges();
        selection.addRange(range);
        copied = document.execCommand("copy");
        selection.removeAllRanges();
      }
      document.body.removeChild(pre);
    } catch {
      // continue
    }
  }

  // Tier 3: Async Clipboard API to reinforce clipboard in modern browser sessions
  if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(text).then(() => {
      copied = true;
    }).catch(() => {
      // Fallback already executed synchronously above
    });
  }

  return copied;
};

// ============================================================================
// Interactive Syllabus Presentation Components
// ============================================================================

/**
 * TopicItem Component
 * Renders an individual syllabus topic with rich interactive actions:
 * - Mark as Done: persists completed state to localStorage with visual strike-through.
 * - Star/Favorite: saves bookmarked topic to user's favorites in localStorage.
 * - YouTube Search: opens relevant academic lectures directly on YouTube.
 * - Share to AI Prompter: copies a context-rich prompt and alerts via floating toast.
 */
const TopicItem = ({ 
    topic, 
    programId, 
    subject, 
    courseTitle, 
    unitTitle, 
    onShareAI,
    isAdmin,
    onEditTopic,
    onDeleteTopic
}: any) => {
    const topicKey = `${programId}-${subject}-${courseTitle}-${unitTitle}-${topic}`.replace(/[^a-zA-Z0-9]/g, '-').slice(0, 100);
    const doneKey = `lnmu-done-${topicKey}`;
    const favKey = `lnmu-fav-${topicKey}`;
    const [isDone, setIsDone] = useState(() => localStorage.getItem(doneKey) === 'true');
    const [isFav, setIsFav] = useState(() => localStorage.getItem(favKey) === 'true');
    const toggleDone = () => {
        const next = !isDone;
        setIsDone(next);
        localStorage.setItem(doneKey, String(next));
    };

    const toggleFav = () => {
        const next = !isFav;
        setIsFav(next);
        localStorage.setItem(favKey, String(next));
    };

    const handleYouTubeSearch = () => {
        const formattedProgram = PROGRAMS.find(p => p.id === programId)?.title || programId;
        const promptText = `Explain in detail → ${formattedProgram} → ${subject} → ${courseTitle} → ${unitTitle} → ${topic}`;
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(promptText)}`, '_blank');
    };

    const handleAIExplain = () => {
        const formattedProgram = (programId && PROGRAMS.find(p => p.id === programId)?.title) || programId || 'LNMU';
        const parts = [formattedProgram, subject, courseTitle, unitTitle, topic].filter(Boolean);
        const promptText = `Explain in detail → ${parts.join(' → ')}`;
        if (onShareAI) {
            onShareAI({
                programId,
                subject,
                courseTitle,
                unitTitle,
                topic,
                promptText
            });
        }
    };

    return (
        <li className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 py-3 sm:py-3.5 px-3.5 sm:px-4 rounded-xl border transition-all duration-200 min-h-[56px] sm:min-h-[64px] w-full ${
            isDone 
                ? 'bg-emerald-50/70 border-emerald-300 dark:bg-emerald-950/20 dark:border-emerald-800/60' 
                : 'bg-white hover:bg-slate-50/90 border-slate-200 hover:border-slate-300 dark:bg-[#11223b] dark:border-slate-700 dark:hover:border-slate-500 shadow-xs'
        }`}>
            <div className="text-sm sm:text-base leading-relaxed w-full flex items-start gap-2.5 sm:gap-3.5 transition-colors duration-200">
                <button
                    type="button"
                    onClick={toggleDone}
                    className={`mt-0.5 sm:mt-1 w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 rounded-md flex items-center justify-center border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500 cursor-pointer ${
                        isDone 
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs' 
                            : 'border-slate-300 dark:border-slate-500 hover:border-emerald-600 bg-white dark:bg-slate-800 shadow-2xs'
                    }`}
                    title={isDone ? "Mark as not done" : "Mark as done"}
                >
                    <Check className={`w-3.5 h-3.5 transition-transform duration-200 ${isDone ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} strokeWidth={3} />
                </button>
                <span className={`py-0.5 break-words font-semibold tracking-tight text-sm sm:text-base topic-high-contrast-text ${
                    isDone 
                        ? 'text-slate-400 dark:text-slate-500 line-through font-normal' 
                        : 'text-slate-900 dark:text-white font-semibold leading-snug sm:leading-relaxed'
                }`}>
                    {topic}
                </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 self-end sm:self-auto pt-0.5 sm:pt-0">
                <button type="button" onClick={toggleFav} className={`p-1.5 sm:p-2 rounded-full border shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-amber-400 cursor-pointer ${isFav ? 'text-amber-500 border-amber-300 bg-amber-50 hover:bg-amber-100 active:scale-95' : 'text-slate-400 border-slate-200 hover:text-amber-500 hover:bg-amber-50 hover:border-amber-200 active:scale-95 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'}`} title={isFav ? "Remove from favorites" : "Mark as favorite"}>
                    <Star className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-200 ${isFav ? 'fill-amber-400 text-amber-500 scale-105' : 'scale-100'}`} />
                </button>
                <button type="button" onClick={handleYouTubeSearch} className="p-1.5 sm:p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-200 active:scale-95 rounded-full border border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-red-400 shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-400 cursor-pointer" title="Search on YouTube">
                    <Youtube className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
                <button 
                  type="button"
                  onClick={handleAIExplain} 
                  className="p-1.5 sm:p-2 rounded-full border shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-95 cursor-pointer group text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 border-slate-200 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400 focus:ring-[#0ea5e9]" 
                  title="AI Study Helper / Share topic"
                  aria-label="AI Study Helper / Share topic"
                >
                    <Bot className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-500 group-hover:scale-110 transition-transform" />
                </button>
                {isAdmin && (
                    <div className="flex items-center gap-1 pl-1.5 ml-1 border-l border-slate-200 dark:border-slate-700">
                        <button 
                            type="button" 
                            onClick={onEditTopic} 
                            className="p-1.5 sm:p-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-100 active:scale-95 shadow-2xs transition-all cursor-pointer" 
                            title="Edit Topic Content (Admin)"
                        >
                            <Pencil className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                            type="button" 
                            onClick={onDeleteTopic} 
                            className="p-1.5 sm:p-2 rounded-full border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 hover:bg-red-100 active:scale-95 shadow-2xs transition-all cursor-pointer" 
                            title="Delete Topic (Admin)"
                        >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                )}
            </div>
        </li>
    );
};

/**
 * UnitAccordion Component
 * Collapsible syllabus unit container displaying:
 * - Prominently highlighted unit title and section identifier
 * - High-contrast bold theory lecture topics
 * - Official faculty recommended reference textbooks and reading list
 */
const UnitAccordion = ({ 
    unit, 
    unitIdx,
    programId, 
    subject, 
    courseTitle, 
    onShareAI, 
    defaultOpen = true,
    isAdmin,
    onEditUnit,
    onDeleteUnit,
    onAddTopic,
    onEditTopic,
    onDeleteTopic
}: any) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    // Parse unit title for prominent highlighting
    const unitMatch = unit.title ? unit.title.match(/^(Unit\s+[0-9IVXLCDMivxlcdm]+)\s*:\s*(.*)$/i) : null;
    const unitLabel = unitMatch ? unitMatch[1] : (unit.unitNumber ? `Unit ${unit.unitNumber}` : 'Unit');
    const unitName = unitMatch ? unitMatch[2] : (unit.title || 'Curriculum Unit');

    return (
        <div className="border border-amber-200/90 hover:border-amber-300/90 dark:border-amber-700/60 rounded-xl overflow-hidden mb-3.5 sm:mb-4 shadow-xs bg-white dark:bg-[#0d1a2d] w-full transition-all">
            <div 
                role="button"
                tabIndex={0}
                onClick={() => setIsOpen(!isOpen)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
                className={`w-full text-left px-3.5 sm:px-5 py-3 sm:py-3.5 flex justify-between items-center transition-colors cursor-pointer select-none ${
                    isOpen 
                        ? 'bg-gradient-to-r from-amber-50 via-amber-50/60 to-yellow-50/30 border-b border-amber-200/80 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-slate-900/50 dark:border-amber-800/60' 
                        : 'bg-amber-50/30 hover:bg-amber-50/70 dark:bg-slate-900/60 dark:hover:bg-amber-950/30'
                }`}
                aria-label={`Toggle unit: ${unit.title}`}
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2 sm:gap-2.5 pr-2 min-w-0 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-white dark:bg-amber-500 dark:text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs shrink-0 border border-amber-600/30 unit-highlight-badge">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white dark:text-slate-950" />
                        {unitLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-amber-100 text-sm sm:text-base md:text-lg leading-snug tracking-tight bg-amber-100/70 dark:bg-amber-900/40 px-2.5 py-1 rounded-md border border-amber-300/60 dark:border-amber-700/60 shadow-2xs unit-highlight-name break-words">
                        {unitName}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    {isAdmin && (
                        <div className="flex items-center gap-1.5 mr-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEditUnit?.();
                                }}
                                className="p-1 sm:p-1.5 rounded-lg border border-amber-400/50 bg-amber-500/20 text-amber-800 dark:text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
                                title="Edit Unit Title"
                            >
                                <Pencil className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Edit Unit</span>
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteUnit?.();
                                }}
                                className="p-1 sm:p-1.5 rounded-lg border border-red-400/50 bg-red-500/20 text-red-700 dark:text-red-300 hover:bg-red-500/30 text-xs font-bold transition-all flex items-center gap-1 shadow-2xs cursor-pointer"
                                title="Delete Unit"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Delete</span>
                            </button>
                        </div>
                    )}
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-800 dark:text-amber-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-amber-800 dark:text-amber-400 shrink-0" />}
                </div>
            </div>
            {isOpen && (
                <div className="p-3 sm:p-5 bg-white dark:bg-[#0d1a2d]">
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 shadow-2xs flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-2xs">
                                UNIT SECTION
                            </span>
                            <span className="font-bold text-slate-900 dark:text-yellow-100 text-xs sm:text-sm md:text-base">
                                {unit.title}
                            </span>
                        </div>
                        <span className="text-[11px] sm:text-xs font-black text-slate-950 dark:text-slate-950 bg-white dark:bg-white px-3 py-0.5 rounded-full border-2 border-slate-300 dark:border-white shadow-xs">
                            {unit.topics?.length || 0} {unit.topics?.length === 1 ? 'Topic' : 'Topics'}
                        </span>
                    </div>

                    <div className="mt-2.5 sm:mt-3">
                        <ul className="space-y-2 sm:space-y-2.5">
                            {unit.topics.map((topic: string, idx: number) => (
                                <TopicItem 
                                    key={idx} 
                                    topic={topic} 
                                    programId={programId} 
                                    subject={subject} 
                                    courseTitle={courseTitle} 
                                    unitTitle={unit.title}
                                    onShareAI={onShareAI}
                                    isAdmin={isAdmin}
                                    onEditTopic={() => onEditTopic?.(idx)}
                                    onDeleteTopic={() => onDeleteTopic?.(idx)}
                                />
                            ))}
                        </ul>
                        {isAdmin && (
                            <div className="mt-3.5 pt-3 border-t border-dashed border-amber-300/60 dark:border-amber-700/60 flex justify-start">
                                <button
                                    type="button"
                                    onClick={onAddTopic}
                                    className="px-3.5 py-1.5 rounded-xl border-2 border-dashed border-amber-500/60 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                                >
                                    <Plus className="w-4 h-4" />
                                    <span>Add Topic to {unitLabel}</span>
                                </button>
                            </div>
                        )}
                    </div>
                    {unit.recommendedBooks && unit.recommendedBooks.length > 0 && (
                        <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-2.5 px-0.5">
                                <Library className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">Recommended Reference Books</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
                                {unit.recommendedBooks.map((book: string, idx: number) => {
                                    const cleanedBook = book.replace(/^-\s*|^[a-g]\.\s*/i, '');
                                    return (
                                        <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-50/80 dark:bg-slate-800/60 rounded-lg border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                                            <div className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 text-[11px] font-bold font-mono shrink-0 mt-0.5">
                                                {String.fromCharCode(97 + idx)}
                                            </div>
                                            <span className="leading-relaxed font-sans">{cleanedBook}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

/**
 * PracticalAccordion Component
 * Renders laboratory experiments, continuous internal assessment (CIA),
 * end-semester practical examination schemes, and laboratory manuals.
 */
const PracticalAccordion = ({ 
    practical, 
    programId, 
    subject, 
    courseTitle, 
    onShareAI, 
    defaultOpen = true,
    isAdmin,
    onAddExperiment,
    onEditExperiment,
    onDeleteExperiment
}: any) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="mt-4 sm:mt-6 border border-emerald-200/90 hover:border-emerald-300/90 dark:border-emerald-700/60 rounded-xl overflow-hidden mb-3.5 sm:mb-4 shadow-xs bg-white dark:bg-[#0d1a2d] w-full transition-all">
            <div 
                role="button" 
                tabIndex={0}
                onClick={() => setIsOpen(!isOpen)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
                className={`w-full text-left px-3.5 sm:px-5 py-3 sm:py-3.5 flex justify-between items-center transition-colors cursor-pointer select-none ${
                    isOpen 
                        ? 'bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50/30 border-b border-emerald-200/80 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-900/50 dark:border-emerald-800/60' 
                        : 'bg-emerald-50/30 hover:bg-emerald-50/70 dark:bg-slate-900/60 dark:hover:bg-emerald-950/30'
                }`}
                aria-label="Toggle practical lab section"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-2 sm:gap-2.5 pr-2 min-w-0 flex-wrap">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <FlaskConical className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs shrink-0 border border-emerald-700/30">
                        PRACTICAL
                    </span>
                    <span className="font-bold text-slate-900 dark:text-emerald-100 text-sm sm:text-base md:text-lg leading-snug tracking-tight bg-emerald-100/70 dark:bg-emerald-900/40 px-2.5 py-1 rounded-md border border-emerald-300/60 dark:border-emerald-700/60 shadow-2xs break-words">
                        Laboratory Practical Curriculum ({practical.credits} {parseInt(practical.credits) > 1 ? 'Credits' : 'Credit'})
                    </span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0" />}
            </div>
            {isOpen && (
                <div className="p-3 sm:p-5 bg-white dark:bg-[#0d1a2d]">
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-2xs">
                                LAB SECTION
                            </span>
                            <span className="font-bold text-emerald-950 dark:text-emerald-100 text-xs sm:text-sm md:text-base">
                                Practical Experiments & Laboratory Syllabus
                            </span>
                        </div>
                        <span className="text-[11px] sm:text-xs font-black text-slate-950 dark:text-slate-950 bg-white dark:bg-white px-3 py-0.5 rounded-full border-2 border-slate-300 dark:border-white shadow-xs">
                            {practical.topics?.length || 0} {practical.topics?.length === 1 ? 'Experiment' : 'Experiments'}
                        </span>
                    </div>
                    {practical.note && (
                        <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium">
                            📌 <strong>Instruction:</strong> {practical.note}
                        </div>
                    )}
                    <ul className="space-y-2 sm:space-y-2.5 text-sm">
                        {practical.topics.map((topic: string, idx: number) => (
                            <TopicItem 
                                key={idx} 
                                topic={topic} 
                                programId={programId} 
                                subject={subject} 
                                courseTitle={courseTitle} 
                                unitTitle="Practical"
                                onShareAI={onShareAI}
                                isAdmin={isAdmin}
                                onEditTopic={() => onEditExperiment?.(idx)}
                                onDeleteTopic={() => onDeleteExperiment?.(idx)}
                            />
                        ))}
                    </ul>
                    {isAdmin && (
                        <div className="mt-3.5 pt-3 border-t border-dashed border-emerald-300/60 dark:border-emerald-700/60 flex justify-start">
                            <button
                                type="button"
                                onClick={onAddExperiment}
                                className="px-3.5 py-1.5 rounded-xl border-2 border-dashed border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add Practical Experiment</span>
                            </button>
                        </div>
                    )}

                    {practical.evaluationScheme && (
                        <div className="mt-6 pt-5 border-t border-emerald-100 dark:border-emerald-900/50">
                            <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                                📊 Practical Examination Scheme (Total = 100 Marks)
                            </h5>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden font-sans">
                                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                                        <tr>
                                            <th className="p-2.5 border-b border-slate-200 dark:border-slate-700">Sl. No.</th>
                                            <th className="p-2.5 border-b border-slate-200 dark:border-slate-700">Component</th>
                                            <th className="p-2.5 border-b border-slate-200 dark:border-slate-700 text-center">CIA (Continuous Internal)</th>
                                            <th className="p-2.5 border-b border-slate-200 dark:border-slate-700 text-center">End-Semester Exam</th>
                                            <th className="p-2.5 border-b border-slate-200 dark:border-slate-700 text-center">Total Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                                        {practical.evaluationScheme.map((item: any, iIdx: number) => (
                                            <tr key={iIdx} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50">
                                                <td className="p-2.5 font-mono text-slate-400">{iIdx + 1}</td>
                                                <td className="p-2.5 font-medium">{item.component}</td>
                                                <td className="p-2.5 text-center font-mono">{item.cia}</td>
                                                <td className="p-2.5 text-center font-mono">{item.endSem}</td>
                                                <td className="p-2.5 text-center font-mono font-bold text-slate-900 dark:text-white">{item.total}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-emerald-50/50 dark:bg-emerald-950/30 font-bold text-slate-900 dark:text-white">
                                            <td colSpan={2} className="p-2.5 text-right">Grand Total:</td>
                                            <td className="p-2.5 text-center font-mono">30</td>
                                            <td className="p-2.5 text-center font-mono">70</td>
                                            <td className="p-2.5 text-center font-mono text-emerald-700 dark:text-emerald-300 font-extrabold">100 Marks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {practical.suggestedBooks && practical.suggestedBooks.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-emerald-100 dark:border-emerald-900/50">
                            <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                📚 Suggested Practical Reference Books
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                {practical.suggestedBooks.map((book: string, bIdx: number) => (
                                    <div key={bIdx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-lg border border-slate-200/70 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200">
                                        <span className="font-mono font-bold text-emerald-600 bg-emerald-100/70 px-1.5 py-0.5 rounded shrink-0">{bIdx + 1}</span>
                                        <span className="leading-relaxed">{book}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


const getDynamicPostdocSyllabus = (subject: string, type: string, sem: string) => {
  const shortSubject = (subject || 'RES').slice(0, 3).toUpperCase();
  if (type === 'RS') {
    if (sem === 'Research') {
      return [
        {
          courseTitle: `${subject} Research Proposal Colloquium & Presentation`,
          courseCode: `PD-${shortSubject}-501`,
          credits: '8',
          theory: {
            credits: '8',
            units: [
              {
                title: 'Unit 1: Formulation & DRC Presentation (Regulation 1c)',
                topics: [
                  'Defining the core post-doctoral hypothesis, establishing structural relevance to contemporary research paradigms.',
                  'Drafting standard research proposal with extensive literature appraisal.',
                  'Preparation and defense of the post-doctoral research blueprint before the Departmental Research Council (DRC).'
                ]
              },
              {
                title: 'Unit 2: Peer-Review Publication Standards (Regulation 1b)',
                topics: [
                  'Understanding submission guidelines for high-impact refereed national/international journals.',
                  'Structuring scientific arguments, preparing manuscript layouts, and conducting thorough peer review cycles.',
                  'Mandate management: Planning publication of at least 10 high-quality papers in journals of repute.'
                ]
              }
            ]
          }
        }
      ];
    } else {
      return [
        {
          courseTitle: `${subject} Pre-Submission Synopsis Defense`,
          courseCode: `PD-${shortSubject}-502`,
          credits: '4',
          theory: {
            credits: '4',
            units: [
              {
                title: 'Unit 1: Pre-Submission Colloquium & Committee Appraisal',
                topics: [
                  'Formatting and presenting raw findings before the Departmental Council.',
                  'Gathering input, resolving structural or methodological concerns before proceeding with final printing.',
                  'Exhibiting compliance listing 10 published research files.'
                ]
              }
            ]
          }
        }
      ];
    }
  } else if (type === 'PDT') {
    if (sem === 'Research') {
      return [
        {
          courseTitle: `Advanced Independent Research Treatise in ${subject}`,
          courseCode: `PD-${shortSubject}-601`,
          credits: '16',
          theory: {
            credits: '16',
            units: [
               {
                 title: 'Unit 1: Original Discovery & Advancement of Knowledge (Regulation 3c)',
                 topics: [
                   'Conducting substantial independent investigative study revealing distinct advancement in current understanding.',
                   'Discovering completely new avenues of research or demonstrating high-quality original analysis.',
                   'Maintaining experimental records or textual analyses under a standard D.Litt./D.Sc. supervisor.'
                 ]
               },
               {
                 title: 'Unit 2: Thesis Compilation & Sourcing Protocol (Regulation 3iv)',
                 topics: [
                   'Designing final chapters of the post-doctoral treatise with strict scholarly layouts.',
                   'Compiling notes, appendices, and reference listings in accordance with official university regulations.',
                   'Authoring clear accounts in the preface outlining the exact boundaries of independent work and external citations.'
                 ]
               }
            ]
          }
        }
      ];
    } else {
      return [
        {
          courseTitle: `Four-Copy Thesis Submission Compliance (Regulation 3)`,
          courseCode: `PD-${shortSubject}-602`,
          credits: '8',
          theory: {
            credits: '8',
            units: [
              {
                title: 'Unit 1: Enrolment Verification & Testimonials',
                topics: [
                  'Obtaining the Supervisor Certificate confirming the research did not form the basis of any prior degree award.',
                  'Procuring testimonials from two Department Professors regarding character suitability and habit checks.',
                  'Submission of four (4) printed/type-written copies of the post-doctoral thesis to the Examination Department.'
                ]
              },
              {
                title: 'Unit 2: Triple-Expert Out-Of-State Committee dispatch (Regulation 1d & 4)',
                topics: [
                  'Coordination with PGRC/DRC for dispatching manuscripts to three eminent external experts outside Bihar state.',
                  'Handling modification instructions: Provisions for one-year revision period if suggested by any examiner.',
                  'Unanimous score requirement checks: Ensuing all three examiners recommend the award.'
                ]
              }
            ]
          }
        }
      ];
    }
  } else if (type === 'VIVA') {
    if (sem === 'Research') {
      return [
        {
          courseTitle: `${subject} Written Examination Syllabus (Optional)`,
          courseCode: `PD-${shortSubject}-701`,
          credits: '6',
          theory: {
            credits: '6',
            units: [
              {
                title: 'Unit 1: Written Examination Preparation (Regulation 8)',
                topics: [
                  'Understanding the optional written test: Two distinct papers of three hours duration each upon the subject of the thesis.',
                  'Preparing deep-dive thematic analyses of all major discoveries detailed in the submitted D.Litt./D.Sc. treatise.'
                ]
              }
            ]
          }
        }
      ];
    } else {
      return [
        {
          courseTitle: `Public Viva-Voce Defense & Degree Conferment`,
          courseCode: `PD-${shortSubject}-702`,
          credits: '12',
          theory: {
            credits: '12',
            units: [
               {
                 title: 'Unit 1: Core Oral Board Defense at HQ Darbhanga (Regulation 9)',
                 topics: [
                   'Conducting public oral presentation and defending findings before the full Board of Examiners at LNMU Headquarters.',
                   'Answering complex board questioning on theoretical claims, validation frameworks and future advancements.'
                 ]
               },
               {
                 title: 'Unit 2: Academic Council Verdict & Degree Concluding (Regulations 11 & 12)',
                 topics: [
                   'Submission of final consensus report to the Examination Board for gazette publication.',
                   'Verification of thesis publication rules (approval inscription and timeline limits).',
                   'Conferment of D.Litt. or D.Sc. degree under the university seal signed by the Vice-Chancellor at the Convocation.'
                 ]
               }
            ]
          }
        }
      ];
    }
  }
  return [];
};

const getPhdCategory = (subj: string) => {
  const s = (subj || '').toLowerCase();
  if (['botany', 'bio-technology', 'chemistry', 'mathematics', 'physics', 'zoology'].includes(s)) {
    return 'science';
  }
  if (['commerce', 'management'].includes(s)) {
    return 'commerce';
  }
  if (['english', 'hindi', 'maithili', 'philosophy', 'sanskrit', 'urdu'].includes(s)) {
    return 'humanities';
  }
  if (['music', 'dramatics'].includes(s)) {
    return 'arts';
  }
  return 'social_science'; // Default covers History, Economics, Geography, Political Science, Psychology, Sociology, Education
};

const getDetailedPhdSyllabus = (subject: string, rawType: string, rawSem: string) => {
  const type = rawType === 'Paper-I' ? 'RM' : rawType === 'Paper-II' ? 'CW' : rawType;
  const sem = (rawType === 'Paper-I' || rawType === 'Paper-II') ? 'Coursework' : rawSem;
  const shortSubject = (subject || 'RES').slice(0, 3).toUpperCase();
  const category = getPhdCategory(subject);
  
  if (type === 'CW') {
    if (sem === 'Coursework') {
      if (category === 'science') {
        if (subject.toLowerCase() === 'chemistry') {
          return [
            {
              courseTitle: `Paper-II: Course Work in Chemistry (Elective)`,
              courseCode: `PHD-CHE-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit I: Safety Hazards in Lab & Purification of Chemicals',
                    topics: [
                      'A- Safety, Hazards and precautions in laboratory',
                      'Brief idea about toxicity, explosive nature and ill effects of various chemicals generally used in research and precautions to handle them.',
                      'B- Purification of Chemicals',
                      'An idea about LR, GR and AR grade chemicals.',
                      'A brief knowledge about various techniques such as distillation, fractional distillation, crystallization, fractional crystallization, chromatography etc.'
                    ]
                  },
                  {
                    title: 'Unit II: Experimental Methods in Chemical Research & Structural Elucidation',
                    topics: [
                      'A- Experimental Methods in Chemical Research',
                      'SEM, TEM, LEED, DTA, TGA, Magnetic Susceptibility.',
                      'B- Structure elucidation of spectral data (IR, UV, NMR, ESR, Mass)',
                      'C- Data Analysis',
                      'Errors in chemical analysis, classification of errors, determination of accuracy of methods, significant figures, mean and standard deviation, least square method of analysis of fitting the data.'
                    ]
                  },
                  {
                    title: 'Unit III: Medicinal Chemistry, Modern Synthetics & Supramolecular Solutions',
                    topics: [
                      'A- General Aspects of Medicinal Chemistry, Pro-drugs and drug delivery systems, Drug metabolism.',
                      'B- Modern Synthetic Procedures in Chemistry, Formation of C-C bonds via organometallic reagents.',
                      'C- Supramolecular Chemistry, The chemistry of molecular recognition, Applications of supramolecules.'
                    ]
                  },
                  {
                    title: 'Unit IV: Nanomaterials Synthesis, Electrocatalysis & Solar Cell Tech',
                    topics: [
                      'A- Nanomaterials: Synthesis and Characterization, Chemical Routes Preparation Techniques, Applications of Nanomaterials.',
                      'B- Electrocatalysis, Mechanisms of some technologically important electrochemical reactions.',
                      'C- Solar Cells, Introduction to Solar Cells, Various types of Solar Cells, Application of solar cells, Photoelectrochemical (PEC) cells, Dye-sensitized PEC Cells (DSSC).'
                    ]
                  },
                  {
                    title: 'Unit V: Density Functional Theory and Computational Applications',
                    topics: [
                      'Density Functional Theory and Its Applications in Chemistry'
                    ]
                  },
                  {
                    title: 'References & Classic Readings (University Dept. of Chemistry)',
                    topics: [
                      'Official reference literature list approved by the University Department of Chemistry for research guidance.'
                    ],
                    recommendedBooks: [
                      'Bockris & Reddy, Modern Electrochemistry',
                      'Marc T.M. Koper (ed), 2009, Fuel Cell Catalysis, Wiley Publication',
                      'Eliezer Gileadi, 1993, Electrode Kinetics, VCH Publication',
                      'A.J. Bard and L.R. Faulkner, 2001, Electrochemical Methods: Fundamentals and Applications;, 2nd Edition, John Wiley & Sons, New York.',
                      'George S. Zweifel, Michael H. Nantz, 2007; Modern Organic Synthesis – An Introduction, 1st Edition, ISBN: 978-0-716-77266-8; Ed. W. H. Freeman',
                      'J. Clayden, N. Greeves, S. Warren and P. Wothers, 2001, Organic Chemistry, Oxford University press INC, New York.',
                      'M.B. Smith & Jerry March, 2001, Marrch\'s Advanced Organic Chemistry, 5thEdition, John Wiley & Sons, New York.',
                      'Jie Jack Li, Chris Limberakis and Derek A. Pflum, 2007, Modern Organic Synthesis in the Laboratory, Oxford University Press',
                      'M.E. Wolff (Ed) 1995, Burger\'s Medicinal Chemistry and Drug Discovery Volume 1.Principles and Practice, 5Th Edition, John Wiley and sons. 1995.',
                      'C.G. Wermuth (Ed) 2003, The Practice of Medicinal Chemistry, 2nd Edition, Academic press, An Imprint of Elsevier.',
                      'Willian O. Foye, Thomas L. Lamke, David A. Wlliame, 1995, Principles of Medicinal Chemistry, 4th Edition.',
                      'Richard B. Silverman, 2004, The Organic Chemistry of Drug Design and Drug Action, 2nd Edition; Academic Press An Imprint of Elsevier.',
                      'Ariga Katsuhiko, Kunitake Toyoki, 2006, Supramolecular chemistry fundamentals and applications: advanced text book, Iwanami Shoten Publishers, Tokyo.',
                      'Paul D. Beer, Philip A. Gale and David K. Smith, 1999, Supramolecular Chemistry, Oxford University Press, USA',
                      'Wolfram Koch and Max C. Holthausen, 2000, A Chemist\'s Guide to Density Functional Theory, Wiley-VCH, NY.',
                      'Robert G. Parr and Weitao Yang, 1989, Density Functional Theory of Atoms and Molecules, Oxford University Press, Oxford.',
                      'D. Segal: Chemical Synthesis of Advanced Ceramic Materials, Cambridge Univ. Press, Meew York 1989.',
                      'L. L. Hench and J. K. West (eds): Chemical Processing of Advanced Materials, John Wiley New York 1992.',
                      'C. J. Brinker & G. W. Scherer: Sol-Gel Science, Academic Press, 1980.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'physics') {
          return [
            {
              courseTitle: `Paper-II: Pre-Ph.D Course work: Physics (Elective)`,
              courseCode: `PHD-PHY-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: '1. Fundamentals of Physics',
                    topics: [
                      'Small oscillations, normal modes, Lagrangian and Hamiltonian formalism, Schrodinger equation (time-dependent and time-independent), Tunneling through a barrier, Time-dependent perturbation theory.',
                      'Maxwell\'s equations in free space and linear isotropic media, boundary conditions on the interfaces, Phase space, micro- and macro-states, Micro-canonical, canonical and grand-canonical ensembles and partition functions.',
                      'Special function and applications (Hermite, Bessel, Laguerre and Legendre functions). Fourier series, Fourier and Laplace transforms, Partial differential equation, Semiconductor devices, diode junctions, Field effective devices, Opto-electronic devices.',
                      'Electronic, rotational, vibrational and Raman spectra of diatomic molecules, Selection rules.'
                    ],
                    recommendedBooks: [
                      'Classical Mechanics: By- J.C. Upadhaya',
                      'Introduction to Quantum Mechanics: By- D.J. Griffith',
                      'Introduction to Electrodynamics: By- D.J. Griffith',
                      'Statistical Mechanics: By- R.K. Patharia',
                      'Mathematical Physics: By- Arfken Weber and M.L. Boas',
                      'Physics of Semiconductor: By- S.M.Sze',
                      'Atomic and Nuclear Physics: By- Rajkumar.'
                    ]
                  },
                  {
                    title: '2. Photonics',
                    topics: [
                      'Fourier and Non-linear optics, Propagation of light in free space, Optical Fourier Transform, Fourier transform holography, Transfer matrix method, Glerkin method, Optics of anisotropic media, Electro-optics of anisotropic media.',
                      'Non-linear optical media, second order non-linear optics-SHG, Third order non-linear optics, Discovery of solitary waves and soliton interactions, Importance of solitons, chaos and its examples.'
                    ],
                    recommendedBooks: [
                      'Optical Electronics (Cambridge University Press): By- A. Ghatak & K. Thayagrajan',
                      'Fundamentals of Photonics: By- B.E.A. Saleh and M.C. Teich',
                      'Quantum Electronics (Wiley, New York): By- A. Yariv',
                      'Solitons an Introduction: By- P.G. Drazin and R.S. Johan (Cambridge University Press, 1989)',
                      'Chaos in Dynamical systems: By- E. Ott (Cambridge University Press, 1993)'
                    ]
                  },
                  {
                    title: '3. Theoretical Techniques in Condensed Matter Physics',
                    topics: [
                      'Theory of NMR and ESR techniques, DFT: Many body Schrodinger equation, density function theory, equilibrium structure of materials, vibrations of molecules and solids, Band structure and dielectric function.',
                      'Free electron theory, electron density of states, electronic specific heat, band theory, K.P. model, Brillouin zones.',
                      'Introduction to different crystal growth techniques, Nucleation and growth, Properties of 0D, 1D, 2D and super lattices structures, Functional materials and nano-composites.'
                    ],
                    recommendedBooks: [
                      'The electromagnetic interaction in Nuclear Spectroscopy: By- W.D. Hamliton.',
                      'X-rays in Atomic and Nuclear Physics: By- N.A. Dyson.',
                      'Thin Films Phenomena: By- K.L. Chopra.',
                      'Characterization of Semiconductor Materials: By- Philip F. Kane and Graydon B. Larrabee (Ohilips F. Kare and Greydon B. Lausbee, McGraw Hill)',
                      'Optical properties of Solid: By- M. Fox (Oxford University Press)',
                      'Mathematica: By- S. Wolfram Addison, Wesely.',
                      'Application of the Monte Carlo Method: K. Binder, Springer Verlag',
                      'Materials modeling using density functional theory: By- Feliciano Giustino, Oxford Press.'
                    ]
                  },
                  {
                    title: '4. Characterization of Materials',
                    topics: [
                      'Diffraction phenomena as applied to solid state problems, Scattering and Absorption of X-rays and electrons, X-ray methods for orienting crystals, applications of XRD, crystal structure analysis, Raman Spectroscopy, Photoluminescence.',
                      'Scanning Electron Microscopy (SEM), Auger Electron Spectroscopy, X-Ray Photoelectron Spectroscopy, AFM, ESR, Electron Diffraction, LEED, RHEED, TEM, STM.',
                      'Landau\'s criteria; Superconductivity; BCS Theory; High Tc superconductivity.'
                    ],
                    recommendedBooks: [
                      'Experimental Techniques of Surface Science: By- Woodruff and Delchar',
                      'Solid State Physics: By- Ashcroft and Mermin',
                      'Fundamentals of Surfaces and Thin Films Analysis: By- L.C. Feldman and J.W. Mayer.',
                      'Quantum Theory of Solids: By- C. Kittel, John Wiley and sons.'
                    ]
                  },
                  {
                    title: '5. Computational Methods and Numerical Techniques',
                    topics: [
                      'Practical approach of learning of Operating Systems (DOS, LINUX, WINDOWS), Graphical packages including 3D plots.',
                      'Programming using FORTRAN 77/ C++ to deal with different types of numerical techniques.',
                      'Introduction to Modeling, Procedure of a systematic study in Modeling, Accuracy and Precision in Modeling, Hartree-Fock Theory, Density Functional Theory, Modeling using SCILAB, GAUSSIAN, ABINIT, Quantum Espresso, etc. software packages.'
                    ],
                    recommendedBooks: [
                      'Fortran Programming by V. Rajaraman.',
                      'The C++ Programming Language (Addison-Wesley) by Bjarne Stroustrup.',
                      'Computer based Numerical Methods (3rd Ed, Prentice Hall India 1980) by V. Rajaraman.',
                      'Computational Physics by S. E. Koonin.',
                      'Materials modeling using density functional theory by Feliciano Giustino, Oxford Press.',
                      'Modeling and Simulation of systems using Matlab and Simulink by D. K. Chaturvedi.',
                      'Gaussian 16 Users Reference on gaussian.com',
                      'ABINIT on abinit.org',
                      'The VASP manual on vasp.at'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'botany') {
          return [
            {
              courseTitle: `Paper-II: Pre-Ph.D Course work: Botany (Elective)`,
              courseCode: `PHD-BOT-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit II (Elective Papers): Option A : Microbial Biotechnology',
                    topics: [
                      'Methods of isolation of microorganisms and Mycorrhiza.',
                      'Microbial and algal culture techniques – sterilization, culture media, types of culture.',
                      'Genetic manipulation of bacteria and fungi.'
                    ]
                  },
                  {
                    title: 'Unit II (Elective Papers): Option B : Plant Physiology and Biochemistry',
                    topics: [
                      'Biomolecule/s interaction (DNA, RNA, Protein and Lipid).',
                      'Biotin switch technique.',
                      'Optimization protein extraction and purification.',
                      'Antibody generation, antigen-antibody reactions (Immunochemistry).',
                      'In vitro protein expression.'
                    ]
                  },
                  {
                    title: 'Unit II (Elective Papers): Option C : Environmental Science',
                    topics: [
                      'Sample collection- quantitative and qualitative analysis of plant, soil and water.',
                      'RS, GIS & GPS techniques for natural resource management.',
                      'Response of organisms to environmental stress.',
                      'Vegetation / community analysis, plant association, plant-sustratum relation, pollination / Bagging studies, Plant pollinator interactions.'
                    ]
                  },
                  {
                    title: 'Unit II (Elective Papers): Option D : Plant Biotechnology',
                    topics: [
                      'Tissue culture and genetic transformation of plant, PCR and related techniques, cloning and sequencing of genes.',
                      'DNA, RNA and Protein isolation from plant and its analysis (Southern, Northern, Western).',
                      'Suppression subtractive hybridization techniques, site directed mutagenesis.',
                      'DNA & protein based makers (RAPD, APLP, SSR, PCR< RFLP and Isozyme).',
                      'RNAi technology, DRA Barcoding, Application of Bioinformatics.',
                      'Introduction of data mining, computational biology, multiple alignment and sequence search (BLAST, FASTA, CLUSTALW; Data banks, Pymol/Rasmol etc. Clustal W).'
                    ]
                  },
                  {
                    title: 'Group B: Unit I : Project Work and Dissertation',
                    topics: [
                      'Writing and presentation of review article related to doctoral research topic by way of dissertation during power point presentation of the semester work before the committee.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'mathematics') {
          return [
            {
              courseTitle: `Paper-II: Pre-Ph.D Course Work: Mathematics (Elective)`,
              courseCode: `PHD-MAT-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'UNIT-1 (PROGRAMMING)',
                    topics: [
                      'Introduction to C.',
                      'Introduction to Mat Lab.'
                    ],
                    recommendedBooks: [
                      'Let Us C',
                      'Introduction of Mat Lab: - Delores M. Etter'
                    ]
                  },
                  {
                    title: 'UNIT-2 (WRITING SOFTWARE)',
                    topics: [
                      'Latex, Letter writing.',
                      'Research Paper writing, Bibliography style, Thesis writing.'
                    ],
                    recommendedBooks: [
                      'Learning latex: - Desmond Higham'
                    ]
                  },
                  {
                    title: 'UNIT-3 (MATHEMATICAL TECHNIQUE)',
                    topics: [
                      'Introduction to Numerical Analysis.',
                      'Numerical Analysis with Mat Lab, Numerical Methods.'
                    ],
                    recommendedBooks: [
                      'Numerical Methods with Mat Lab: - Dana Zelenko'
                    ]
                  },
                  {
                    title: 'UNIT-4 (ADVANCE ANALYSIS)',
                    topics: [
                      'Abstract Integration, The concept of measurability, simple functions.',
                      'Elementary properties of measures Arithmetic in (0, ∞).',
                      'Integration of positive functions, Integration of Complex functions.'
                    ],
                    recommendedBooks: [
                      'Real and Complex Analysis: - Walter Rudin'
                    ]
                  },
                  {
                    title: 'UNIT-5 (ALGEBRIC TOPOLOGY)',
                    topics: [
                      'The Fundamental group, Homotopy of paths, The Fundamental Theorem of Algebra.',
                      'The Borsuk-Ulam Theorem, Deformation retracts and Homotopy types.',
                      'Separation Theorem in the plane: The Jordan separation Theorem, Invariance of domain, The Jordan curve Theorem.'
                    ],
                    recommendedBooks: [
                      'Topology: - J.R. Munkers',
                      'Algebric Topology-An Introduction: - W. S. Massey'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'zoology') {
          return [
            {
              courseTitle: `Paper-II: Techniques in Biological Research (Ph.D. Course Work)`,
              courseCode: `PHD-ZOO-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit 1: Introduction to Scientific Research',
                    topics: [
                      'a. Defining scientific questions and categorizing them as basic and applied.',
                      'b. Formulating clear-cut aims based on scientific questions and planning objectives according to the aim.',
                      'c. Concept of hypothesis generation and basic methods of hypothesis testing.'
                    ]
                  },
                  {
                    title: 'Unit 2: Reading and Reviewing Scientific Literature',
                    topics: [
                      'a. Introduction to various literature archives such as PubMed, PubMed Central (PMC) and other NCBI Literature Resources such as MeSH and Bookshelf.',
                      'b. Looking for scientific papers of interest amidst the vast resources available.',
                      'c. Introduction to Indian e-resources such as Shodhganga, ShodhSindhu, etc.',
                      'd. Concept of peer-reviewed journals.',
                      'e. Authorship concerns, acknowledgement of contribution, Intellectual Property Rights (IPR).',
                      'f. Scientific ethics and Plagiarism.'
                    ]
                  },
                  {
                    title: 'Unit 3: Scientific Communication',
                    topics: [
                      'a. Poster and oral presentations.',
                      'b. Writing scientific papers and review articles.',
                      'c. Referencing.'
                    ]
                  },
                  {
                    title: 'Unit 4: Analytical & Preparative Biochemical Techniques and Instrumentation',
                    topics: [
                      'a. pH measurement.',
                      'b. Concept of stoichiometry, preparation of buffers, reagents and solutions.',
                      'c. Basic biochemical tests for identification of biomolecules (starch, sugar and proteins).',
                      'd. Physicochemical analysis of water and soil.',
                      'e. Concepts of Colorimetry and Spectrophotometry.',
                      'f. Principle and types of Centrifugation.',
                      'g. Principle and types of Gel Electrophoresis.',
                      'h. Principle of Chromatography.',
                      'i. Immunological techniques.',
                      'j. FACS.'
                    ]
                  },
                  {
                    title: 'Unit 5: Microscopy and Image Analysis',
                    topics: [
                      'a. Concepts of Bright field, Dark Field, Phase Contrast, fluorescence and Confocal microscopy.',
                      'b. SEM and TEM.',
                      'c. Photomicrography and Grid Preparation.',
                      'd. Software Tools for Molecular Microscopy.'
                    ]
                  },
                  {
                    title: 'Unit 6: Genetical and Molecular Biological Techniques',
                    topics: [
                      'a. Aseptic technique and preparation of media.',
                      'b. Types of cell culture.',
                      'c. Cloning and sequencing of genes.',
                      'd. DNA Amplification through Polymerase Chain Reaction (PCR).',
                      'e. DNA fingerprinting, VNTR Profiling, STR Profiling, mitochondrial DNA profiling and SNP Profiling.',
                      'f. Genome expression analysis: Blotting Techniques and Microarray.',
                      'g. Metagenomics and Epigenomics.',
                      'h. Gene targeting, Genome Editing and its applications.'
                    ]
                  },
                  {
                    title: 'Unit 7: Histological and Histochemical Techniques',
                    topics: [
                      'a. Tissue fixation, sectioning and staining.',
                      'b. Histochemical techniques for detection of various biomolecules: carbohydrates, proteins and lipids.',
                      'c. Enzyme histochemistry.'
                    ]
                  },
                  {
                    title: 'Unit 8: Recombinant DNA Technology',
                    topics: [
                      'a. Enzymes, Vectors, Cloning Strategies.',
                      'b. Construction and screening of DNA libraries.',
                      'c. Applications of recombinant DNA Technology.'
                    ]
                  },
                  {
                    title: 'Unit 9: Bioinformatics',
                    topics: [
                      'a. Concept of Information Technology.',
                      'b. Concept of dry experiments and digital laboratory.',
                      'c. Introduction to data archiving systems: FASTA format, Accession, and GI-Number.',
                      'd. Databases (DNA and Protein) search and retrieval: NCBI, Swiss-prot, PIR, PDB, KEGG, PubMed.',
                      'e. Concept of homology: BLAST, Clustal-W and their applications.',
                      'f. Protein structure bioinformatics: Protein visualization, structure comparison, homology modelling.'
                    ]
                  },
                  {
                    title: 'Unit 10: Biostatistics',
                    topics: [
                      'a. Concept of parametric and non parametric tests.',
                      'b. Depiction of continuous frequency distribution table in the form of histogram, frequency polygon and ogive.',
                      'c. Calculations of mean, median and mode from hypothetical data.',
                      'd. Calculation of variance, standard deviation, standard error and coefficient of variation from hypothetical data.',
                      'e. Chi-square test.',
                      'f. Student t-test.',
                      'g. One-way and Two-way ANOVA and post-hoc tests.',
                      'h. Introduction to various statistical softwares such as Microsoft Excel, SPSS, MATLAB etc.'
                    ]
                  },
                  {
                    title: 'Unit 11: Model systems, Model Organisms, Animal Handling and Ethics',
                    topics: [
                      'a. Pre-requisites of a model system; in vitro systems.',
                      'b. Prokaryotic model organisms.',
                      'c. Eukaryotic model organisms.',
                      'd. Maintenance of animals.',
                      'e. CPCSEA guidelines; Institutional ethics committees.',
                      'f. Ethical consideration in research on human beings.'
                    ]
                  },
                  {
                    title: 'Suggested Readings',
                    topics: [
                      '1. Alberts et al. 2008, Molecular Biology of the Cell, Garland.',
                      '2. Boyer, 2005, Modern Experimental Biochemistry and Molecular Biology, Benjamin.',
                      '3. Brown, 1995, Gene Cloning, Stanley.',
                      '4. Brown, 2007, Genomes.',
                      '5. Drlica, 2003, Understanding DNA and Gene Cloning, Wiley.',
                      '6. Futuyma, 2005, Evolution, Sinauer.',
                      '7. Gardner et al. 2006, Principles of Genetics, John Wiley.',
                      '8. Glick & Pasternak, 1994, Molecular Biotechnology, ASM press.',
                      '9. Hartl & Clark, 2007, Principles of Population Genetics, Sinauer.',
                      '10. Hartl & Jones, 2009, Essential Genetics: A Genomic Perspective, Jones & Bartlett.',
                      '11. Lesk, 2006, Bioinformatics 2/e, Oxford.',
                      '12. Lewin, 2011, Genes X, Jones & Bartlett.',
                      '13. Micklos & Freyer, 1990, DNA Science, CSHL.',
                      '14. Mount, 2006, Bioinformatics 2/e, CBS.',
                      '15. Nelson et al. 2007, Lehninger\'s Principles of Biochemistry, 5th Edition, MacMillan Worth.',
                      '16. Primrose & Twyman, 2006, Principles of Gene manipulation and Genomics, Blackwell.',
                      '17. Sambrook et al. 2001, Molecular Cloning: A Laboratory Manual (Vol I, II, III), CSHL.',
                      '18. Snedecor & Cochran, 1968, Statistical Methods, Oxford & IBH.',
                      '19. Snustad & Simmons, 2010, Principles of Genetics, John Wiley.',
                      '20. Sokal & Rohlf, 2000, Biometry, Freeman.',
                      '21. Steel & Torrie, 1980, Principles and Procedure of Statistics: A Biometrical Approach, McGraw Hill Book Co.',
                      '22. Strachan & Read, 2011, Human Molecular Genetics, Wiley.',
                      '23. Voet & Voet, 2004, Biochemistry, 4th Edition, John Wiley.',
                      '24. Watson et al., 2004, Molecular Biology of the Gene, Pearson Education.',
                      '25. Westhead et al., 2003, Bioinformatics Instant Notes, Viva Books (Indian ed).',
                      '26. Wilson & Walker, 2006, Principles of Biochemical and Molecular Biological Techniques, Cambridge Univ. Press.',
                      '27. Zar, 2003, Biostatistical Analysis, Pearson.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        return [
          {
            courseTitle: `Advanced Specialized Domain: ${subject}`,
            courseCode: `PHD-${shortSubject}-801`,
            credits: '6',
            theory: {
              credits: '6',
              units: [
                {
                  title: `Unit 1: Quantum Foundations, Advanced Theoretical Frontiers & Breakthrough Paradigms in ${subject}`,
                  topics: [
                    `Advanced mathematical, structural, and computational models standard in contemporary ${subject} research.`,
                    `Critical breakthrough literature reviews, revolutionary experimental designs, and theoretical constraints.`,
                    `Synthesizing emerging research directions and validating baseline theoretical models.`,
                    `Analysis of complex systems, state-of-the-art formulations, and modern paradigms.`
                  ]
                },
                {
                  title: `Unit 2: Quantitative Diagnostics, Special Instrumentation & Empirical Modelling`,
                  topics: [
                    `Formulating complex diagnostic parameters, calibration pipelines, and state-of-the-art laboratory/computational diagnostics for ${subject}.`,
                    `Statistical limits, calibration protocols, error diagnostics, and system validation standards.`,
                    `Reviewing high-impact methodologies, advanced instrumentation models, and automated proof validations.`
                  ]
                }
              ]
            }
          }
        ];
      } else if (category === 'commerce') {
        return [
          {
            courseTitle: `Paper-II: Research Methods in Commerce and Management`,
            courseCode: `PHD-${shortSubject}-02`,
            credits: '6',
            theory: {
              credits: '6',
              units: [
                {
                  title: 'Unit I: Introduction',
                  topics: [
                    'Importance of research in contemporary business environment',
                    'Business Environment and its constituents',
                    'Business Researchers and their traits'
                  ]
                },
                {
                  title: 'Unit II: Research Problems in Business',
                  topics: [
                    'Problem formulation and its conceptual framework',
                    'Areas of business research',
                    'Emerging dimensions of business research'
                  ]
                },
                {
                  title: 'Unit III: Business Research Process',
                  topics: [
                    'Business research process',
                    'Steps involved in business research process',
                    'Conceptual and empirical review of literature in business',
                    'Research methods used in business'
                  ]
                },
                {
                  title: 'Unit IV: Data Analysis and Interpretation',
                  topics: [
                    'Concept of Data, its collection and presentation for business research',
                    'Traditional and Modern Tools applied in business for Data Analysis',
                    'Hypotheses Testing - concept, t-test, F-test, chi square test, ANOVA, etc.'
                  ]
                },
                {
                  title: 'Unit V: Research Communication',
                  topics: [
                    'Need to communicate research outcomes',
                    'Kinds of Research Reports',
                    'Thesis Layout',
                    'Bibliography and References',
                    'Presentation of Thesis'
                  ]
                }
              ]
            }
          }
        ];
      } else if (category === 'humanities') {
        if (subject.toLowerCase() === 'philosophy') {
          return [
            {
              courseTitle: `Paper-II: Course Work in Philosophy (Elective)`,
              courseCode: `PHD-PHI-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit I: Research Methodology in Indian Philosophy',
                    topics: [
                      'Definition, Description, Nature and types of research methodology in Indian Philosophy',
                      'Chief characteristics of Indian philosophical research'
                    ]
                  },
                  {
                    title: 'Unit II: Indian Epistemology (Pramana-vichara)',
                    topics: [
                      'Yukti Tantra and Sixteen Padarthas of Indian Philosophy',
                      'Six ways of Knowing: Pratyaksha (Perception), Anuman (Inference), Upman (Comparison), Sabda (Verbal Testimony), Arthapatti (Postulation), Anuplabdhi (Non-apprehension)',
                      'Theory of error (Khyativada)'
                    ]
                  },
                  {
                    title: 'Unit III: Linguistic Trends in Indian Philosophy',
                    topics: [
                      'Varnabada, Shabdabada, and Vakyabada',
                      'The different levels of speech (Para, Pashyanti, Madhyama, Vaikhari)',
                      'Four-fold classification of words',
                      'Necessary conditions of a sentence (Akanksha, Yogyata, Sannidhi, Tatparya)',
                      'Eight-fold theories of sentence',
                      'Sphotbada (Theory of Sphota)'
                    ]
                  },
                  {
                    title: 'Unit IV: Research Methodology in Western Philosophy',
                    topics: [
                      'Descartes: Cogito ergo sum',
                      'Kant: Theory of knowledge',
                      'Logical Positivism: Function of Philosophy, Verification theory of meaning',
                      'Wittgenstein: Picture theory of meaning, Language game',
                      'J.L. Austin: Analysis of speech act, Distinction between Constative and performative statements',
                      'P.F. Strawson: Descriptive Metaphysics, concept of person',
                      'W.V.O. Quine: Radical empiricism',
                      'Derrida: Theory of deconstruction'
                    ]
                  },
                  {
                    title: 'Unit V: Thesis Writing, Computer Applications & Academic Ethics',
                    topics: [
                      'Aspect of thesis writing & Identification of research problem',
                      'Using resource material, How to cite and acknowledge sources, and prepare bibliography',
                      'Critical writing: summarising, Developing arguments reviewed in, writing research paper, references',
                      'Computer Application: How to use web-based research sources, Power-point presentation, Editing',
                      'Academic Ethics: Plagiarism and research integrity'
                    ]
                  },
                  {
                    title: 'Suggested Books & Classic Readings (L.N. Mithila University PG Dept.)',
                    topics: [
                      '1. Six ways of Knowing - D.M. Dutta',
                      '2. How to write a thesis - Umberto Eco',
                      '3. Trends of Linguistic Analysis in Indian Philosophy - H.M. Jha',
                      '4. A critical survey of Indian Philosophy - C.D. Sharma',
                      '5. The philosophy of Language - Alston',
                      '6. Language, truth and Logic - Ayer',
                      '7. The philosophy of Wittgenstein - Pitcher',
                      '8. The principals of Linguistic analysis - F. Wilsman',
                      '9. Philosophy of Language - J.L. Austin',
                      '10. Samkalin Paschatya Darshan - B.K. Lal',
                      '11. Research Methodology - R. Panneerselvam'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'urdu') {
          return [
            {
              courseTitle: `پیپر-II: شعبہ اردو پی ایچ ڈی کورس ورک (اختیاری)`,
              courseCode: `PHD-URD-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'یونٹ I: اردو زبان و ادب کی تاریخ و نظریات',
                    topics: [
                      'ابتدا کے نظریات (اردو زبان کی ابتدا سے متعلق مختلف نظریات)',
                      'اردو زبان کے ارتقا کا لسانی، سماجی و تاریخی پسِ منظر',
                      'اہم ادبی تحریکات و رجحانات:',
                      '• ایہام گوئی، دلی کالج، فورٹ ولیم کالج',
                      '• علی گڑھ تحریک، ترقی پسند تحریک',
                      '• انجمن پنجاب لاہور، حلقہ اربابِ ذوق، جدیدیت، مابعد جدیدیت'
                    ]
                  },
                  {
                    title: 'یونٹ II: حصہ نثر (افسانوی و غیر افسانوی نثر)',
                    topics: [
                      'افسانوی و غیر افسانوی نثر کا تعارف اور ان کی حد بندیاں',
                      'فکشن کے جدید تصورات',
                      'افسانوی نثر کی اصناف: داستان، ناول، افسانہ، اور ڈرامہ',
                      'غیر افسانوی نثر کی اصناف: سفرنامہ، مکاتیب، سوانح حیات، خودنوشت، خاکے، اور طنز و مزاح'
                    ]
                  },
                  {
                    title: 'یونٹ III: حصہ نظم اور دبستانوں کا مطالعہ',
                    topics: [
                      'ہیئت کے تجربے: بیسویں صدی کے آغاز سے 1935ء تک',
                      'انجمن پنجاب، ترقی پسند تحریک، جدیدیت اور مابعد جدید نظم کے لسانی و اسلوبیاتی اثرات',
                      'اہم دبستانوں کا خصوصی مطالعہ: دبستانِ دکن، دبستانِ دہلی، دبستانِ لکھنؤ، دبستانِ پٹنہ، اور دبستانِ رامپور'
                    ]
                  },
                  {
                    title: 'یونٹ IV: کلاسیکی اردو ادب (کلاسیکی مثنویاں اور داستانیں)',
                    topics: [
                      'حصہ (الف) - چندہ مثنویاں:',
                      '• قطب مشتری (ملا وجہی)، گلشنِ عشق (نصرتی)، علی نامہ',
                      '• پھول بن (ابن نشاطی)، سحر البیان (میر حسن)، گلزارِ نسیم (پنڈت دیا شنکر نسیم)، زہرِ عشق (شوق لکھنوی)',
                      'حصہ (ب) - چندہ داستانیں:',
                      '• طلسمِ ہوش ربا، رانی کیتکی کی کہانی',
                      '• فسانہ عجائب (رجب علی بیگ سرور)، بوستانِ خیال (میر تقی خیال)، باغ و بہار (میر امن دہلوی)'
                    ]
                  },
                  {
                    title: 'یونٹ V: جدید ادب اور مطالعہ ادب کے طریقے',
                    topics: [
                      'حصہ (الف) - جدید ادب: موضوعات و رجحانات (UNIT V <A>)',
                      '• نظمِ جدید کی کروٹیں - حالی سے تا حال: حالی، اقبال، اکبر، جوش، فیض، اختر الایمان، مخدوم، اور میرا جی کا خصوصی مطالعہ',
                      '• جدید نثر - سرسید سے تا حال: سرسید، شبلی، ابوالکلام آزاد، بیدی، منٹو، عصمت، قرۃ العین حیدر، صدیقی، اور پطرس بخاری',
                      'حصہ (ب) - مطالعہ ادب کے طریقے (UNIT V <B>)',
                      '• مطالعہ ادب کا مفہوم: اہمیت وافادیت',
                      '• ادب کی تعریف، اہمیت وافادیت',
                      '• ادب کے اقسام',
                      '• ادبی سماجیات کی اہمیت اور افادیت',
                      '• ادبی تنقید کی اہمیت، افادیت اور روایت کا ارتقائی سفر'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'sanskrit') {
          return [
            {
              courseTitle: `पत्र-II: संस्कृत प्री-पीएच.डी. कोर्स वर्क (Pre Ph.D. Course Work in Sanskrit)`,
              courseCode: `PHD-SAN-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'खण्ड (क) — पाण्डुलिपि (20 अंक)',
                    topics: [
                      'पाण्डुलिपि एवम् उसका संरक्षण',
                      'पाण्डुलिपि संरक्षण के प्रमुख केन्द्र',
                      'पाण्डुलिपि का संपादन',
                      'पाठ भेद की समस्या',
                      'संस्कृत पाण्डुलिपि ग्रन्थालय और प्रमुख पाण्डुलिपि सूची पत्र',
                      'लिप्यनुवाद (Transliteration)'
                    ]
                  },
                  {
                    title: 'खण्ड (ख) — संस्कृत शोध का सर्वेक्षण (20 अंक)',
                    topics: [
                      'वैदिक एवं लौकिक संस्कृत साहित्य के अग्रणी विद्वान',
                      'पाश्चात्य एवं पौरस्त्य संस्कृत के विद्वान',
                      'संस्कृत शोध संस्थान और संस्कृत विश्वविद्यालय',
                      'संस्कृत कोश ग्रन्थ एवं कोशकार',
                      'संस्कृत शोध पत्र-पत्रिकाएँ'
                    ]
                  },
                  {
                    title: 'खण्ड (ग) — संस्कृत वाङ्मय के शोध कार्यों का सर्वेक्षण (20 अंक)',
                    topics: [
                      'वैदिक वाङ्मय: संहिता, ब्राह्मण, आरण्यक, उपनिषद्, सूत्रग्रन्थ',
                      'साहित्यशास्त्र, काव्यशास्त्र, व्याकरण शास्त्र, दर्शनशास्त्र, धर्मशास्त्र, इतिहास एवं पुराण साहित्य में शोध'
                    ]
                  },
                  {
                    title: 'खण्ड (घ) — संस्कृत साहित्य में सम्पन्न शोधकार्यों का सर्वेक्षण (20 अंक)',
                    topics: [
                      'संस्कृत महाकाव्य, गद्यकाव्य, पद्यकाव्य',
                      'खण्डकाव्य एवं गीतिकाव्य',
                      'रूपक एवं आधुनिक संस्कृत काव्यशास्त्रीय ग्रन्थ'
                    ]
                  },
                  {
                    title: 'खण्ड (ङ) — आधुनिक संस्कृत शोध के विविध आयाम (1947 ई० से आगे) (20 अंक)',
                    topics: [
                      'आधुनिक महाकाव्य, आधुनिक गीतिकाव्य एवं खण्ड काव्य',
                      'आधुनिक रूपक एवम् उसके प्रकार',
                      'आधुनिक गद्यकाव्य और नवीन काव्य विधायें',
                      'अनुवादित संस्कृत साहित्य'
                    ]
                  },
                  {
                    title: 'प्रश्न पत्र प्रारूप एवं अंक योजना (Paper Pattern & Marks Scheme)',
                    topics: [
                      'कुल अंक (Total Marks): 100',
                      '1. वस्तुनिष्ठ प्रश्न (Objective Questions): 2 X 10 = 20 अंक',
                      '2. लघुस्तरीय प्रश्न (Short Answer Questions): 8 X 04 = 32 अंक',
                      '3. दीर्घ उत्तरीय प्रश्न (Long Answer Questions): 16 X 03 = 48 अंक'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'maithili') {
          return [
            {
              courseTitle: `पत्र-II: मैथिली प्री-पीएच०डी० कोर्स वर्क पाठ्यक्रम (Pre Ph.D. Course Work in Maithili)`,
              courseCode: `PHD-MAI-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'इकाई 01 — भाषा आ लिपि',
                    topics: [
                      'i. मैथिली भाषाक अतीत, वर्तमान ओ भविष्य',
                      'ii. मैथिली लिपिक अतीत, वर्तमान ओ भविष्य'
                    ]
                  },
                  {
                    title: 'इकाई 02 — मैथिली साहित्यक आदिकाल',
                    topics: [
                      'i. काल विभाजन',
                      'ii. आदिकालक सिंहावलोकन',
                      'iii. डाकवचन',
                      'iv. ज्योतिरीश्वर ओ हुनक साहित्य'
                    ]
                  },
                  {
                    title: 'इकाई 03 — मध्यकाल',
                    topics: [
                      'i. नाट्य-साहित्य (बंगाल, असम ओ नेपालक नाटक ओ नाटककार)',
                      'ii. विद्यापति साहित्य',
                      'iii. विद्यापतिक समकालीन साहित्य',
                      'iv. मनबोधक भाषा-चेतना, सृजन-दृष्टि, आधुनिकता बोध'
                    ]
                  },
                  {
                    title: 'इकाई 04 — आधुनिक काल',
                    topics: [
                      'i. गद्य साहित्य—कथा, उपन्यास, निबंध, नाटक, पत्र-पत्रिका आदिक स्थिति आ बदलैत प्रवृत्ति',
                      'ii. यात्रा, संस्मरण, आत्मकथा, साक्षात्कार, पत्र-साहित्यक उदय आ स्थिति',
                      'iii. शास्त्रीय (महाकाव्य, खंडकाव्य), आधुनिक एवं नवीन काव्यधारा',
                      'iv. बाल-साहित्य',
                      'v. साहित्येतर गद्य-पद्य'
                    ]
                  },
                  {
                    title: 'इकाई 05 — लोक साहित्य एवं अनुवाद',
                    topics: [
                      'i. लोक साहित्यक विभिन्न प्रभेद',
                      'ii. अनुवादक स्थिति एवं विश्लेषण'
                    ]
                  },
                  {
                    title: 'इकाई 06 — तुलनात्मक एवं विमर्शपरک अध्ययन',
                    topics: [
                      'i. विभिन्न विधाक अन्तर भाषिक व अन्तर साहित्यिक',
                      'ii. विभिन्न विधाक साहित्यमे स्त्री विमर्श',
                      'iii. विभिन्न विधाक साहित्यमे दलित विमर्श',
                      'iv. विभिन्न विधाक साहित्यमे राष्ट्रीय चेतना',
                      'v. विभिन्न विधाक साहित्यमे पर्यावरण चेतना',
                      'vi. विभिन्न विधाक साहित्यमे सामाजिक/सांस्कृतिक चेतना'
                    ]
                  },
                  {
                    title: 'इकाई 07 — भाषा-विज्ञान एवं काव्यशास्त्र',
                    topics: [
                      'i. भारतीय भाषा परिवार एवं मैथिली',
                      'ii. रस',
                      'iii. अलंकार',
                      'iv. छन्द'
                    ]
                  },
                  {
                    title: 'सहायक ग्रन्थ (Reference Books)',
                    topics: [
                      '1. मैथिली साहित्यक इतिहास — जयकान्त मिश्र, दुर्गानाथ झा श्रीश, डा० बालगोविन्द झा व्यथित, मायानन्द मिश्र',
                      '2. डाक वचन — मोहन भारद्वाज',
                      '3. मैथिली लोक साहित्यक विस्तृत इतिहास — डा० राजाराम प्रसाद',
                      '4. विद्यापति — डा० शैલેન્દ્ર मोहन झा',
                      '5. मैथिली साहित्यक परिदृश्य — डा० देवशंकर नवीन',
                      '6. कथाक उपन्यास उपन्यासक कथा — अशोक',
                      '7. मैथिली साहित्यक आलोचनात्मक इतिहास — डा० दिनेश कुमार झा',
                      '8. मिथिलाक्षर उद्भव ओ विकास — राजेश्वर झा',
                      '9. मैथिली साहित्यक आदिकाल — राजेश्वर झा',
                      '10. मैथिली साहित्यक रूपरेखा — सं० डा० बासुकी नाथ झा',
                      '11. मैथिलीक उद्गम ओ विकास — पं० गोविन्द झा',
                      '12. मैथिली व्याकरण ओ रचना — डा० युगेश्वर झा',
                      '13. मैथिली भाषा विज्ञान — डा० दिनेश कुमार झा',
                      '14. परिचायिका — भीमनाथ झा',
                      '15. मैथिली काव्यशास्त्र — डा० दिनेश कुमार झा, डा० इन्द्रकान्त झा',
                      '16. अलंकार भास्कर — डा० रमण झा',
                      '17. काव्यशास्त्रीय रूपरेखा — डा० धीरेश्वर झा धीरेन्द्र',
                      '18. समालोचनाशास्त्र — डा० जयधारी सिंह',
                      '19. मैथिली पत्रकारिताक इतिहास — पं० चन्द्रनाथ मिश्र अमर',
                      '20. मैथिली अनुवाद : सिद्धान्त ओ विवेचन — डा० निक्की प्रियदर्शिनी'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'hindi') {
          return [
            {
              courseTitle: `द्वितीय पत्र: हिन्दी प्री-पीएच०डी० कोर्स वर्क (Pre Ph.D. Course Work in Hindi)`,
              courseCode: `PHD-HIN-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'इकाई - 1. हिन्दी-शोध : चरण और उपकरण',
                    topics: [
                      '• तुलनात्मक शोध : साहित्यिक संदर्भ',
                      '• शोध-समस्या, तत्सम्बद्ध पुनरवलोकन (रिव्यू) शोध-प्रश्न ; शोध-अभिकल्प (डिजाइन) ; शोध-परिकल्पना और निदर्शन (सैंपलिंग)',
                      '• शोध-सामग्री : संकलन, वर्गीकरण, प्रलेखीकरण और व्याख्या',
                      '• प्रकाशित और अप्रकाशित सामग्री :- कोश-साहित्य (शब्दकोश ; विविध-विषयक कोश) संदर्भ ग्रंथ, सर्वेक्षण रिपोर्ट, पत्र-पत्रिका तथा अप्रकाशित सामग्री (पाण्डुलिपि, लोक वाङ्मय में व्याप्त)',
                      '• क्षेत्र - सर्वेक्षण की उपयोगिता',
                      '• प्रश्नावली और साक्षात्कार',
                      '• शोध-प्रस्ताव : संकल्पना और निर्माण',
                      '• शोध-प्रबंध का ढाँचा / रूपरेखा (अध्याय-योजना, संदर्भ, उद्धरण, पाद-टिप्पणी, सन्दर्भ ग्रंथ-सूची)',
                      '• शोध-सारांशिका : संकल्पना और निर्माण'
                    ]
                  },
                  {
                    title: 'इकाई - 2. साहित्य का इतिहास, सिद्धांत, विमर्श एवं काव्यशास्त्र',
                    topics: [
                      '• सौंदर्यशास्त्र (भारतीय और पाश्चात्य संदर्भ)',
                      '• शैली विज्ञान (भारतीय और पाश्चात्य संदर्भ)',
                      '• यथार्थवाद एवं उसका विकास (समाजवादी एवं मार्क्सवादी चिंतन के संदर्भ)',
                      '• विकासवाद (वैज्ञानिक-दार्शनिक संदर्भ)',
                      '• मनोविश्लेषणवाद',
                      '• स्वच्छंदतावाद (भारतीय एवं पाश्चात्य संदर्भ)',
                      '• अस्तित्ववाद',
                      '• वेदांत और भक्तिदर्शन (वैष्णव भक्ति, योग एवं सूफी दर्शन सहित)',
                      '• आधुनिकतावाद और उत्तर आधुनिकतावाद, विखंडनवाद, साहित्य का समाजशास्त्र',
                      '• गांधी, लोहिया, नेहरू, जयप्रकाश, आंबेडकर की विचारधाराएँ और उनकी प्रतिपत्तियाँ',
                      '• लोकजागरण, नवजागरण और राष्ट्रीय आंदोलन',
                      '• लोक साहित्य',
                      '• दलित विमर्श',
                      '• स्त्री विमर्श',
                      '• आदिवासी विमर्श',
                      '• बिम्बवाद, प्रतीकवाद, रूपक, मिथक और फंतासी की अवधारणाएँ एवं प्रविधियाँ',
                      '• भूमंडलीकरण, बाजारवाद, उपभोक्ता संस्कृति और संचारक्रांति',
                      '• भारतीय एवं पाश्चात्य विभिन्न काव्यशास्त्रीय चिंतन एवं सम्प्रदाय',
                      '• अलंकार, छन्द, कविसमय'
                    ]
                  },
                  {
                    title: 'संदर्भ ग्रंथ (Reference Books)',
                    topics: [
                      '1. तुलनात्मक साहित्य — (सं०) नगेन्द्र, नेशनल पब्लिशिंग हाउस, नयी दिल्ली',
                      '2. साहित्य का समाजशास्त्र — बच्चन सिंह',
                      '3. कार्ल मार्क्स : कला और साहित्य चिंतन — (सं०) नामवर सिंह, राजकमल प्रकाशन, नयी दिल्ली',
                      '4. यथार्थवाद — शिवकुमार मिश्र, मैकमिलन कम्पनी ऑफ इण्डिया लि०, दिल्ली',
                      '5. आधुनिकता - उत्तरआधुनिकता — गंगा प्रसाद विमल, नयी किताब, दिल्ली',
                      '6. संरचनात्मक शैली विज्ञान — रवीन्द्र नाथ श्रीवास्तव, आलेख प्रकाशन, नयी दिल्ली',
                      '7. साहित्य का समाजशास्त्रीय चिंतन — (सं०) निर्मला जैन, हिन्दी माध्यम कार्यान्वयन निदेशालय, दिल्ली विश्वविद्यालय, दिल्ली',
                      '8. साहित्य के समाजशास्त्र की भूमिका — मैनेजर पाण्डेय, हरियाणा साहित्य अकादमी, चण्डीगढ़',
                      '9. नारीवादी विमर्श और मुद्दे — निवेदिता मेनन',
                      '10. दलित साहित्य का सौंदर्यशास्त्र — शरण कुमार लिम्बाले, वाणी प्रकाशन, नयी दिल्ली',
                      '11. दलित विमर्श की भूमिका — कँवल भारती, साहित्य उपक्रम, इलाहाबाद',
                      '12. Marxism and Literature — Raymond Williams, Oxford University Press, New York',
                      '13. The new feminist criticism — (Ed.) Elaine Showalter Panthers, New Delhi',
                      '14. The postmodern condition: a report on knowledge - J.F. Lyotard, Manchester Univ. Press',
                      '15. अनुसंधान प्रविधि, प्रक्रिया विषयक लेख — डॉ० नगेन्द्र',
                      '16. अम्बेडकर वाङ्मय — डॉ० भीमराव अम्बेडकर',
                      '17. स्त्री पराधीनता — जान स्टूअर्ट मिल्स (अनु०)',
                      '18. परिधि पर स्त्री — मृणाल पाण्डेय',
                      '19. स्त्रीवादी विमर्श : समाज और साहित्य — क्षमा शर्मा',
                      '20. उपनिवेश में स्त्री — प्रभा खेतान',
                      '21. स्त्रीवादी साहित्य विमर्श — जगदीश्वर चतुर्वेदी'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'english') {
          return [
            {
              courseTitle: `Paper II: Pre Ph.D. Course Work in English`,
              courseCode: `PHD-ENG-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit I: Research Methodology',
                    topics: [
                      '1. RESEARCH: MEANING AND SCOPE',
                      '   A) Philosophy and Meaning of Research',
                      '   B) Nature and Scope of Research',
                      '   C) Materials and Tools of Research: Print/Electronic/Web resources',
                      '2. RESEARCH-METHODOLOGY AND APPROACHES',
                      '   A) Selection of Research Topic',
                      '   B) Area of Research: Genre, Period, Region, Author, Texts, Approach',
                      '   C) Survey of different critical approaches',
                      '   D) Intra-disciplinary/Interdisciplinary',
                      '   E) Framing of Topic-statement',
                      '3. PREPARATORY STEPS',
                      '   A) Writing a Synopsis',
                      '   B) Collection, listing and Organization of Material'
                    ]
                  },
                  {
                    title: 'UNIT-II: Review of Published Research in the Relevant Field',
                    topics: [
                      '1. REVIEW OF LITERATURE',
                      '   A) Understanding Review of literature: Relevance, Approach and Applications',
                      '   B) Organizing a literature search: Identify which literature bases to search; Developing the theoretical basis for the Research Question',
                      '2. CONDUCTING THE REVIEW',
                      '   A) Abstracting relevant information from appropriate studies in a systematic manner; Critically reviewing the literature',
                      '   B) Writing the review: Writing a first draft; Writing references and citations; Obtaining, giving, and making productive use of feedback; the redrafting process; Professional formatting'
                    ]
                  },
                  {
                    title: 'Unit III: Literary Theory and Literary Criticism',
                    topics: [
                      '1. THEORIES OF LITERARY APPRECIATION',
                      '   A) Art for Art\'s sake',
                      '   B) Psychological Appreciation of Literature: Freud and Jung',
                      '   C) Archetypal Criticism',
                      '   D) New Criticism and Structuralism',
                      '   E) Reader-Response Theory',
                      '2. RECENT TRENDS IN LITERARY APPRECIATION',
                      '   A) Marxist Theory of Literature',
                      '   B) Feminist Readings of the Texts',
                      '   C) Post Structuralism',
                      '   D) Deconstruction',
                      '   E) Postmodernism',
                      '   F) Postcolonialism',
                      '   G) Gender Discourse',
                      '   H) Subaltern Studies',
                      '   I) Cultural Studies'
                    ]
                  },
                  {
                    title: 'Unit IV: Writing Research Proposal/Research Paper/ Thesis',
                    topics: [
                      'A) Topic Statement',
                      'B) Abstract, Keywords for Research Paper',
                      'C) Aims and Objectives',
                      'D) Hypothesis',
                      'E) Rationale for the Project',
                      'F) Methodology',
                      'G) Key Issues and Arguments',
                      'H) Socio-cultural Background related to the topic',
                      'I) Work Plan',
                      'J) Chapter Division',
                      'K) Notes and Works Cited'
                    ]
                  },
                  {
                    title: 'Unit V: Documentation & Mechanics of Writing',
                    topics: [
                      'A) Debt to Previous Scholarship',
                      'B) Socio-Legal issues: Originality, Integrity, Plagiarism',
                      'C) Format: Citation format for print and non-print sources MLA, Chicago Style Manual',
                      'D) Style Format: Spelling, punctuation, italics, abbreviations',
                      'E) Paper margin, spacing, heading and title, page numbers, correction and insertion, electronic submission',
                      'F) Bibliography'
                    ]
                  },
                  {
                    title: 'Recommended Text Books',
                    topics: [
                      '1. The MLA Style Sheet- recent edition.',
                      '2. The Craft of Research, Booth and Colomb. Chicago Guides to Writing, Editing, and Publishing',
                      '3. Theory of Literature, Wellek and Warren, 1999',
                      '4. Literary Theory: An Introduction, Terry Eagleton, 1983',
                      '5. Allison, B. The Students\' Guide to Preparing Dissertations and Theses. London: Kogan Page, 1997. Print.',
                      '6. Altick, Richard D. and John J. Fenstermaker. The Art of Literary Research. 4th ed. New York: Norton, 1993. Print.',
                      '7. Gibaldi, Joseph. MLA Handbook for Writers of Research Papers. 7th ed. New Delhi: East-West Press, 2009',
                      '8. Kothari, C.R. Research Methodology: Methods and Techniques. New Delhi: New Age International Ltd, 1985.',
                      '9. Rahim, F. Abdul. Thesis Writing: A Manual for Researchers. New Delhi: New Age International Pvt Ltd, 1996.',
                      '10. Turabian, Kate l. A Manual for Writers of Term Papers, Theses and Dissertations. 6th ed. Chicago: Chicago UP, 1996.',
                      '11. Wayne C. Booth, Gregory G. Colombo, Joseph M. Williams and William C. Booth. The Craft of Research: From Planning to Reporting. Chicago: Chicago UP, 2008.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        return [
          {
            courseTitle: `Advanced Specialized Domain: ${subject}`,
            courseCode: `PHD-${shortSubject}-801`,
            credits: '6',
            theory: {
              credits: '6',
              units: [
                {
                  title: `Unit 1: Hermeneutics, Critical Theories, and Philological Discourse in ${subject}`,
                  topics: [
                    `Socio-cultural criticism, structuralism, post-colonial paradigms, and major critical movements in ${subject}.`,
                    `Textual critique, analyzing linguistic frameworks, semantic structures, and conceptual developments.`,
                    `Contemporary ideological theories and their structural application to digital humanities/text analyses.`
                  ]
                },
                {
                  title: `Unit 2: Applied Comparative Literature, Semiotics & Textual Appraisal`,
                  topics: [
                    `Design of comparative thematic reviews, structural genre mappings, and stylistic comparisons.`,
                    `Deconstructing linguistic symbols, semantic structures, and critical discourse patterns in ${subject}.`,
                    `Evaluating peer-reviewed canonical works, cultural journals of repute, and editorial archives.`
                  ]
                }
              ]
            }
          }
        ];
      } else if (category === 'arts') {
        if (subject.toLowerCase() === 'music') {
          return [
            {
              courseTitle: `Paper-II: Course Work in Music (Elective)`,
              courseCode: `PHD-MUS-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Section - A (80 Marks) | Unit I: Raga Improvisational Studies',
                    topics: [
                      'Elaborate Practical or Theoretical improvisation of choice ragas of morning, afternoon, evening & night.'
                    ]
                  },
                  {
                    title: 'Section - A (80 Marks) | Unit II: Classical Vocal Genres',
                    topics: [
                      'Study of different vocal genres of North Indian Classical Music.'
                    ]
                  },
                  {
                    title: 'Section - A (80 Marks) | Unit III: Instrumental & Regional/Cultural Music',
                    topics: [
                      'The research scholars from other subjects like North Indian classical Instrumental Music (both percussion & non-percussion), Indian classical vocal & Instrumental (both percussion & non-percussion) can choose to perform or elaborate music of their own culture or choice.'
                    ]
                  },
                  {
                    title: 'Section - B (20 Marks) | Unit IV: Language Scripts & Audio/Video Technology',
                    topics: [
                      'Knowledge of Language Scripts & working with electronic Audio/Video equipments:',
                      '• Roman with Diacritical Marks',
                      '• Sanskrit & other Languages',
                      '• Digital video Camera, iPod, Audio-Handy MP3 Player cum recorder',
                      '• DVD Player, MP3 Player etc.'
                    ]
                  },
                  {
                    title: 'Section - B (20 Marks) | Unit V: Computer Applications in Musicology',
                    topics: [
                      'Knowledge of Operating Computer:',
                      '• Windows Operation',
                      '• Word processing English and Indian Languages',
                      '• MS-Excel, Internet Browsing & E-mail',
                      '• Multimedia and editing of Audio/Video recording in Computer',
                      '• Preparation of Audio CD/DVD of wave & MP3 format',
                      '• Transferring of data from digital Cameras & all types of Audio and video equipments to Computer.'
                    ]
                  },
                  {
                    title: 'Comprehensive Viva (20 Marks)',
                    topics: [
                      'Viva voce of the Concerned Subject opted by the Candidate for Course work Examination.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'dramatics') {
          return [
            {
              courseTitle: `Paper-II: Course Work in Dramatics (Elective)`,
              courseCode: `PHD-DRA-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Section - A (80 Marks) | Unit I: Introduction & Brief History of Drama',
                    topics: [
                      'Introduction and brief history of Drama and Theatre Arts (Occidental & Oriental).',
                      'Origin and Development of Drama and Theatre Arts.'
                    ]
                  },
                  {
                    title: 'Section - A (80 Marks) | Unit II: Theatre and Aesthetics',
                    topics: [
                      'Development of Theatre (Occidental and Oriental).',
                      'Development of Aesthetics (Occidental and Oriental).'
                    ]
                  },
                  {
                    title: 'Section - A (80 Marks) | Unit III: Contemporary Theatre & Stage Practices',
                    topics: [
                      'Knowledge of Contemporary Theatre:',
                      '• Different kinds of Drama',
                      '• Different kinds of Play & Production',
                      '• Knowledge about Contemporary Theatre, Folk & Traditional Theatre.',
                      '• Knowledge about Acting, Direction, script writing, Play analysis, stage craft, stage lighting, Background music, costume, Make-up etc.'
                    ]
                  },
                  {
                    title: 'Section - B (20 Marks) | Unit IV: Language Scripts & Audio/Video Technology',
                    topics: [
                      'Knowledge of Language Scripts & working with electronic Audio/Video equipments:',
                      '• Roman with Diacritical Marks',
                      '• Sanskrit & other Languages',
                      '• Digital video Camera, iPod, Audio-Handy MP3 Player cum recorder',
                      '• DVD Player, MP3 Player etc.'
                    ]
                  },
                  {
                    title: 'Section - B (20 Marks) | Unit V: Computer Applications in Dramaturgy',
                    topics: [
                      'Knowledge of Operating Computer:',
                      '• Windows Operation',
                      '• Word processing English and Indian Languages',
                      '• MS-Excel, Internet Browsing & E-mail',
                      '• Multimedia and editing of Audio/Video recording in Computer',
                      '• Preparation of Audio CD/DVD of wave & MP3 format',
                      '• Transferring of data from digital Cameras & all types of Audio and video equipments to Computer.'
                    ]
                  },
                  {
                    title: 'Comprehensive Viva (20 Marks)',
                    topics: [
                      'Viva voce of the Concerned Subject opted by the Candidate for Course work Examination.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        return [
          {
            courseTitle: `Advanced Specialized Domain: ${subject}`,
            courseCode: `PHD-${shortSubject}-801`,
            credits: '6',
            theory: {
              credits: '6',
              units: [
                {
                  title: `Unit 1: Aesthetic Philosophies, Creative Hermeneutics & Theoretical Paradigms in ${subject}`,
                  topics: [
                    `Classical aesthetic theories (Rasa siddhanta, Dhvani theory, western performance critical rules, dramaturgy).`,
                    `Historical evolutions of genres, core ragas, notation systems, oral performance traditions, and stage scripts.`,
                    `Synthesizing classical visual/auditory frameworks with modern electronic media and performance trends.`
                  ]
                },
                {
                  title: `Unit 2: Cognitive Styling, Performance Analysis & Auditory/Visual Diagnostics`,
                  topics: [
                    `Deconstructing physical performance metrics, sonic frequency structures, and dramatic expressions.`,
                    `Technological diagnostic measures: Acoustics, stage layouts, multimedia visualization, and composition formats.`,
                    `Critically analyzing high-impact recitals, theatrical directives, and classical performances.`
                  ]
                }
              ]
            }
          }
        ];
       } else { // social_science
        if (subject.toLowerCase() === 'economics') {
          return [
            {
              courseTitle: `Paper-II: Research Methods in Economics`,
              courseCode: `PHD-ECO-02`,
              credits: '4',
              theory: {
                credits: '4',
                units: [
                  {
                    title: '1. Research Methodology in Economics',
                    topics: [
                      '• Research Methodology and its Constituents',
                      '• Theoretical perspectives: Positivism and post-positivism, Critical theory, Interpretivism, and Pragmatism',
                      '• Approaches to Social Enquiry: quantitative, qualitative, and mixed approach',
                      '• Forms of Quantitative Approach: Inferential approach, Experimental approach, Simulation approach'
                    ]
                  },
                  {
                    title: '2. Eight Steps in Economic Research Process',
                    topics: [
                      '• Defining Research Problem',
                      '• Delineating Objectives of Research',
                      '• Reviewing Literature',
                      '• Formulation of Hypothesis',
                      '• Research Design',
                      '• Collection of Data: Source, tools, and methods',
                      '• Analysis of Data',
                      '• Report Writing'
                    ]
                  },
                  {
                    title: '3. Data Collection for Economic Research',
                    topics: [
                      '• Method of Data Collection & Tools of Data Collection',
                      '• Sampling Design: Population and Sample; Non-Random Sampling',
                      '• Random or Probability Sampling: Precision of Estimates - Standard Errors and Confidence Intervals, Assessment of Precision - Unknown Population Variance, Assessment of Precision - Parent Population has a Non-Normal Distribution, Determination of Sample Size',
                      '• Methods of Random Sampling: Simple Random Sampling (With Replacement), Simple Random Sampling (Without Replacement), Stratified Sampling, Cluster Sampling, Sampling with Probability Proportional to Size, Multi-Stage Sampling',
                      '• The Choice of an Appropriate Sampling Method'
                    ]
                  },
                  {
                    title: '4. Models and Modelling in Economics / Models of Explanation',
                    topics: [
                      '• Why models, Introducing Modelling Exercise',
                      '• Types of Models: Probability Models, Models Based on Differential Equations, The ANOVA Model, Regression Models',
                      '• Simulation - Models and Solutions',
                      '• Models of Explanation in Economics: Classical Political Economy and Ricardo\'s Method',
                      '• Robbins, Positivism and Apriorism in Economics',
                      '• Hutchison and Logical Empiricism in Economics',
                      '• Milton Friedman and Instrumentalism in Economics',
                      '• Paul Samuelson and Operationalism',
                      '• Amartya Sen on Heterogeneity of Explanation in Economics'
                    ]
                  },
                  {
                    title: '5. Data Processing and Analysis in Economics',
                    topics: [
                      '• Data Preparation and Analysis',
                      '• The Univariate Distribution',
                      '• Bivariate Analysis',
                      '• Multivariate Analysis',
                      '• Index Construction and Scaling Methods',
                      '• Inferences: Strategy of Hypothesis Testing, Sampling Distribution, Level of Significance, and region of Rejection, Parametric and Non-Parametric Tests of Significance'
                    ]
                  },
                  {
                    title: '6. Introduction to IBM SPSS',
                    topics: [
                      '• The IBM SPSS 20 Data View Screen',
                      '• Naming and Defining Variables in Variable View',
                      '• Entering Data',
                      '• Doing Basic Analyses',
                      '• Modifying Data Procedures'
                    ]
                  },
                  {
                    title: '7. The Literature Review & References',
                    topics: [
                      '• Importance of the Literature Review',
                      '• Planning a Literature Search; Locating Relevant Literature; Managing Information',
                      '• Reliability of a Source; Writing a Review',
                      '• References: Importance of Referencing in Documents; Citation and Listing Systems of References',
                      '• Common Documentation Styles; CSE Style: The Name-Year System; Citation of Sources in the Text; Listing References in the "References" Section',
                      '• Reference Management Software'
                    ]
                  },
                  {
                    title: 'Books Recommended',
                    topics: [
                      '1. Steven G. Medema, Warren J. Samuels. Foundations of Research in Economics: How Do Econometrists Do Economics? Edward Elgar (UK).',
                      '2. Catherine Hakim. Research Design Successful Designs for Social Economics Research. Taylor & Francis (London).',
                      '3. Adolfo Figueroa. Rules for Scientific Research in Economics: The Alpha-Beta Method. Springer International Publishing (NY).',
                      '4. Don E. Ethridge, Don Ethridge. Research Methodology in Applied Economics. Wiley (New Jersey, USA).',
                      '5. Mirjana Radović-Marković, Beatrice Avolio Alecchi. Qualitative Methods in Economics. Taylor & Francis (London).'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'education') {
          return [
            {
              courseTitle: `Paper-II: Educational Theory and Educational Approaches of Research`,
              courseCode: `PHD-EDU-02`,
              credits: '4',
              theory: {
                credits: '4',
                units: [
                  {
                    title: 'Course Regulations & Evaluation Criteria',
                    topics: [
                      '• Minimum duration: One semester (Part of Pre-Ph.D. Course Work).',
                      '• Total Credits for Course Work: 08 Credits (Paper-I: 04 Credits, Paper-II: 04 Credits).',
                      '• Passing Criteria: Minimum of 55% of marks or equivalent Grade to be eligible to continue.',
                      '• Grading Scheme (Seven Point Scale):',
                      '  - Grade O (Outstanding): 75 - 100%',
                      '  - Grade A (Very Good): 65 - 74%',
                      '  - Grade B (Good): 55 - 64%',
                      '  - Grade C (Average): 45 - 54% (Given another chance to repeat next semester)',
                      '  - Grade D (Below Average): 25 - 34%',
                      '  - Grade E (Poor): 00 - 24%',
                      '• Marks Breakdown:',
                      '  - Part-A: Educational Theory and Educational Approaches of Research (80 Marks / Credit-03)',
                      '  - Part-B: Research Proposal (20 Marks / Credit-01)'
                    ]
                  },
                  {
                    title: 'Unit-I: Teacher Education',
                    topics: [
                      '• Concept, Nature and Scope of Professional Development of Teachers.',
                      '• National Curriculum Framework for Teacher Education - 2010.',
                      '• Institutions and Agencies for Teacher Education - UGC, NCERT, SCERT and Other State Agencies.',
                      '• Approaches for Teacher Education - Intergraded, Face to Face, Distance Mode, Initial Vs Continuum.',
                      '• Organisation of Pre-Service and In-Service Teacher Education - Need and Importance.',
                      '• Different Techniques for Teacher Education - Seminar, Conference, Workshop and Symposium.',
                      '• Innovative Practice in Teacher Education - Micro Teaching, Simulation, Team Teaching and Internship.'
                    ]
                  },
                  {
                    title: 'References for Unit-I',
                    topics: [
                      '1. Allen, Dwight & Ryan, Kevin (1969): Microteaching Mass Addison-Wesley',
                      '2. Mukherji, S.N. (1968) Education Of Teachers In India, New Delhi: S.Chand & Co.',
                      '3. Passi, B.K. (1972) Becoming A Better Teacher',
                      '4. Bloom, B.S. and Et.Al (1971) Handbook Of Formative And Summative Evaluation Of Student Learning. New York: McGraw Hill Book Co.',
                      '5. Buch, M.B. and Palasane, M.M. (1968) Reading In In-Service Education, Sardar Patel University, Vallabh Vidya Nagar.',
                      '6. Siddiqui, M.Akhtar (1991) Inservice Teacher Education, Ashish Publishing House, New Delhi.',
                      '7. Singh L.C. (1990): Teacher Education In India - A Source Book, New Delhi, NCERT.',
                      '8. Singh, R.P. (1993) The Challenges Of Tomorrow - A Profile Of Further Teacher Education, New Delhi Sterling Publisher Private Ltd.',
                      '9. Comb, Arthur W. (1965) The Professional Education Of Teachers: A Perceptual View Of Teacher Education Boston: Allyn & Bacon.',
                      '10. Jagaria, N.K. & Singh, Ajit (1984) Core Teaching Skill - Micro-Teaching Approach, New Delhi, NCERT.',
                      '11. Khan, M.S. (1983) Teacher Education In India & Abroad, New Delhi Ashish Publishing House.',
                      '12. Panda, B.N. (2004) Teacher Education, APH, New Delhi.'
                    ]
                  },
                  {
                    title: 'Unit-II: Educational Assessment and Evaluation',
                    topics: [
                      '• Meaning, Nature and Purpose of Assessment and Evaluation.',
                      '• Dimension of Educational Evaluation and Assessment - Diagnostic Evaluation, Curriculum Evaluation, Institutional Evaluation, Programme Evaluation.',
                      '• Tools and Techniques of Evaluation - Questionnaire, Scale, Profile, Portfolio, Achievements Test, Standardized Test and Criterion Reference Test.',
                      '• Issues Related to Educational Assessment and Evaluation.',
                      '• Role of Evaluator.',
                      '• National Assessment of Educational Standards.',
                      '• Professional standards for Educational Evaluation.'
                    ]
                  },
                  {
                    title: 'References for Unit-II',
                    topics: [
                      '1. Bell, C.S. and Harris D. (Ed.). (1990). Assessment and Evaluation World yearbook of Education.',
                      '2. Berk, R.A. (1984). A Guide to Criterion Referenced Test Construction. Baltimore: The Johns Hopkins University Press.',
                      '3. Berman, R.L. (2001) Generalisability Theory New York: Springer-Verlag.',
                      '4. Bloom, B.S., Madaus, G.F. and Hastings, T.J. (1981). Evaluation to Improve Learning. New York: McGraw Hills.',
                      '5. Bond, T.G. and Fox C.M. (2001) Applying the Research Model: Fundamental Measurement in the Human Sciences. Mahwah, NJ: Lawrence. Erlbaum Associates.',
                      '6. Chase, C.I. (1999) Contemporary Assessment for Educators. New York: Longman.',
                      '7. Cizek, G.J. (1999) Cheating Tests: How to do it, Detect it and Prevent it. Mahwah NJ: Lawrence. Erlbaum Associates Inc.',
                      '8. Anastasi, A. (1976). Essentials of Psychological Testing (4th edition). New York: Macmillan Publishing Co.',
                      '9. Baker, E.L. Domain Referenced Test in Torsten. Hussain and T. Neville Post/Lethwaite (Ed.) (1985). The international Encyclopedia of Education (IEE) Oxford Pergamon Press, Vol. 5.',
                      '10. Bartram, D., and R.K. (Ed.). (2005). Computer Based Testing and Internet: Issues and Advances. Somerset, NJ: Wiley Inc.',
                      '11. Hopkins, Kennett, D. (1998). Educational and Psychological Measurement and Evaluation. Allyn and Bacon.',
                      '12. Cizek, G.J. (Ed.). (2001). Setting Performance Standards: Concepts, Methods and Perspectives. Mahwah NJ: Lawrence. Erlbaum Associates Inc.',
                      '13. Cronbach, L.J. (1970). Essential of Psychological Testing (3rd edition) New York: Harper and Row Publishers.',
                      '14. Dave, R.H. and Patel, P.M. (1972) Educational Evaluation and Assessment. NCERT. New Delhi.',
                      '15. Drasgow, F and Olson-Buchanan, J.B. (Ed.) (1999) Innovations in Computerised Assessment. Mahwah NJ: Lawrence. Erlbaum Associates Inc.',
                      '16. Groenen, P Borg, I (1997) Modern Multidimensional Scaling: Theory and Application New York: Springer-Verlag.',
                      '17. Linguist, E.F. (Ed.) Educational Measurement. American Council of Education, Washington D.C.',
                      '18. Mehrens, W.A. and Lehmann, I.J. (1987). Using Standardized Tests in Education (List; Edn.) New York: Longman.',
                      '19. Noll, V.H. and Scannel, D.P. (1972). Introduction to Educational Measurement (3rd edition) New York: Houghton Maffin.',
                      '20. NCERT (2005) National Curriculum Framework: New Delhi.',
                      '21. Osterluid, S.J. (Ed.) (2006) Modern Measurement: Theory, Principles and Applications of Mental Appraisal. Upper saddle River, NJ. Pearson-Merrill. Prentice Hall.'
                    ]
                  },
                  {
                    title: 'Unit-III: Educational Technology',
                    topics: [
                      '• Concept of Educational Technology - Meaning, Nature, Scope, Significance and Components.',
                      '• Communication and Instruction - Component, Process, Types and Nature of Classroom Communication.',
                      '• Formation of Instruction Objectives.',
                      '• Teaching Level, Models and Strategies.',
                      '• Modification of Teaching Behaviour - Micro-Teaching, Flander\'s Interaction Analysis, Simulation, and Programmed Instruction.',
                      '• Computer Assisted Instruction.',
                      '• Educational Technology in Formal, Non-Formal and Informal Education, Distance Education and Open Learning System.'
                    ]
                  },
                  {
                    title: 'References for Unit-III',
                    topics: [
                      '1. Kozma, R.B. (2003). Technology, innovation and educational change: A global perspective. A report of the second information technology in education study. Module 2. International Society for Technology in Education.',
                      '2. Kumar, K.L. (2008): Educational Technology, New Age International Pvt. Ltd. Publishers, New Delhi (Second Revised Edition).',
                      '3. Madan Lal, Essentials of Educational Technology, Anmol Publications.',
                      '4. Mambi, Adam J. (2010). ICT Law Book: A Source Book for Information and Communication Technologies. Tanzania: Mkuki na Nyota Publishers Ltd.',
                      '5. Mangal, S.K., & Mangal, Uma (2010). Essentials of Educational Technology. New Delhi: PHI Learning Pvt. Ltd.',
                      '6. Abbott, C. (2001). ICT: Changing Education. UK: Psychology Press.',
                      '7. Bhushan, A. & Ahuja, M. (1992) Educational Technology, Meerut, Vikas Publication.',
                      '8. Chauhan S.S.: A Text Book of Programmed Instruction. (2nd Ed.). New Delhi/ Banglore, Sterling Publishers Pvt. Ltd.',
                      '9. C.S. Shukla: Essential of Educational Technology and Management, Dhanpatrai Pub. Company Pvt. Ltd. New Delhi.',
                      '10. Das, R.C. (1993) Educational Technology: A Basic Text, New Delhi, Sterling Publishers.',
                      '11. Flanders, Ned A. (1978) Analyzing Teaching Behaviour, London, Addison Wesley Publishing Co. Gakhar, S.C. (2008) Educational Technologies, Panipat, N.M. Publication.',
                      '12. Huang, R., and Kinshuk, Jon K. Price (2014). ICT in Education in Global Context: Emerging Trends Report 2013-2014. Heidelberg: Springer.',
                      '13. Joyce, B.Weil, M. & Showers, B. (1985): Models of Teaching, Prentice Hall of india, Pvt. Ltd.',
                      '14. Khan, N. (2004). Educational Technology. New Delhi: Rajat Publications.'
                    ]
                  },
                  {
                    title: 'Unit-IV: Educational Psychology',
                    topics: [
                      '• Intelligence, Emotional Intelligence and Its Measurement.',
                      '• Creativity and Its Measurement.',
                      '• Mental Hygiene and Adjustment Process.',
                      '• Attitude and Its Measurement.',
                      '• Personality and Its Measurement.',
                      '• Aptitude and Its Measurement.',
                      '• Constructivism.',
                      '• Co-operative Learning.',
                      '• Inclusive education - Meaning, Definition and Importance.',
                      '• Common School System and Inclusive Education.',
                      '• Differentially able Children - Its Types, Symptoms and Educational Programme.',
                      '• Special Education, Intergraded Education and Inclusive Education - Differences.'
                    ]
                  },
                  {
                    title: 'References for Unit-IV',
                    topics: [
                      '1. Maslow, A. H. 1968. Toward a psychology of being, (2nd ed.), Princeton, NJ: Harper and Row.',
                      '2. Ames, R. A. and Ames, C., eds. 1984. Research on motivation in education: Student motivation, Vol. 1, Orlando, FL: Academic Press.',
                      '3. Bandura, A. 1977. Social learning theory, Morristown, NJ: General Learning Press.',
                      '4. Cameron, J. and Pierce, W. D. 1996. Reinforcement, reward, and intrinsic motivation: A meta-analysis. Review of Educational Research.',
                      '5. Eysenck, M. W. 1984. A handbook of cognitive psychology, Hillsdale, NJ: Lawrence Erlbaum.',
                      '6. McInerney, D. M. and McInerney, V. 1994, 1998, 2002, 2006 in press. Educational psychology: Constructing learning, (1st-4th eds.), Frenchs Forest, NSW: Pearson.',
                      '7. Bar-On, R. & Parker, J.D.A. (Eds.). Handbook of emotional intelligence. San Francisco: Jossey-Bass.',
                      '8. Brody, N. (2000). History of theories and measurement of intelligence (pp. 16-33). In R.J. Sternberg (ed.). Handbook of Intelligence. Cambridge: Cambridge University Press.',
                      '9. Caruso, D.R., & Salovey, P. (2004). The Emotionally Intelligent Manager. San Francisco: Jossey-Bass.',
                      '10. Arieti, S. (1976). Creativity: The magic synthesis. New York: Basic Books.',
                      '11. Barron, F. X. (1969). Creative person and creative process. New York: Holt, Rinehart & Winston.',
                      '12. Barron, F. X. (1972). Artists in the making. New York: Seminar Press.'
                    ]
                  },
                  {
                    title: 'Part-B: Research Proposal (20 Marks / Credit-01)',
                    topics: [
                      '• Writing and presentation of research proposal related to doctoral research topic by way of PowerPoint presentation.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'geography') {
          return [
            {
              courseTitle: `Paper-II: Research Methodology: Geographical Approaches of Research & Research Proposal`,
              courseCode: `PHD-GEO-02`,
              credits: '4',
              theory: {
                credits: '4',
                units: [
                  {
                    title: 'Paper-II Part-A: Research Methodology: Geographical Approaches of Research (80 Marks / Credit-03)',
                    topics: [
                      'Overview of scientific methodologies, spatial reasoning, and quantitative/qualitative analysis in Geography.'
                    ]
                  },
                  {
                    title: 'Unit-I: Research Design',
                    topics: [
                      '• Meaning, Nature and Process of research design',
                      '• Formulation of Research problem & Research interest',
                      '• Review of previous literature',
                      '• Research layout models in Geographic explanation'
                    ]
                  },
                  {
                    title: 'Unit-II: Hypothesis & Data Representation',
                    topics: [
                      '• Meaning, Importance, Types & Formulation of Hypothesis',
                      '• Statement and Testing of Hypothesis',
                      '• Data collection & Statistical Analysis',
                      '• Cartographic Representation of Data'
                    ]
                  },
                  {
                    title: 'Unit-III: Remote Sensing and Geographical Information System (GIS)',
                    topics: [
                      '• Concept, Techniques and Application of Remote Sensing & GIS',
                      '• Role of Remote Sensing derived data',
                      '• Application of Computer & Internet facilities in research',
                      '• Report writing and SPSS-Data analysis features'
                    ]
                  },
                  {
                    title: 'Unit-IV: Preliminaries of Research Project Presentation',
                    topics: [
                      '• Project elements: Preface, Acknowledgements, Contents, List of Tables, Maps and Diagrams, Photographs, etc.',
                      '• Academic conventions: References and Footnotes, Abbreviations used, Glossary of Local Terms & Foreign words, Pagination, Bibliography and Appendices',
                      '• Research integrity: Plagiarism and ethics'
                    ]
                  },
                  {
                    title: 'Paper-II Part-B: Research Proposal (20 Marks / Credit-01)',
                    topics: [
                      '• Writing and presentation of research proposal related to doctoral research topic by way of PowerPoint presentation.',
                      '• Draft synopsis presentation before the committee.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'history') {
          return [
            {
              courseTitle: `Paper-II: Main Trends of Historiography`,
              courseCode: `PHD-HIS-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit-1: Ancient and Medieval Historiography',
                    topics: [
                      '• (a) Greek Historiography',
                      '• (b) Ancient India Historiography',
                      '• (c) Medieval Christian Historiography (Western Historiography)',
                      '• (d) Medieval India Historiography'
                    ]
                  },
                  {
                    title: 'Unit-2: Beginning of the Modern Historiography',
                    topics: [
                      '• (a) Enlightenment Historiography',
                      '• (b) Positivism in History',
                      '• (c) Marxist Historiography',
                      '• (d) Annales School'
                    ]
                  },
                  {
                    title: 'Unit-3: Modern Indian Historiography',
                    topics: [
                      '• (a) Colonialist Historiography',
                      '• (b) Nationalist Historiography',
                      '• (c) Marxist Historiography',
                      '• (d) Sub-altern Historiography'
                    ]
                  },
                  {
                    title: 'Unit-4: Proposed Research paper Presentation',
                    topics: [
                      '• Submission and presentation of the proposed doctoral research paper/topic.'
                    ]
                  },
                  {
                    title: 'Unit-5: Viva - Voce',
                    topics: [
                      '• Oral defense of the research proposal and evaluation of subject knowledge.'
                    ]
                  },
                  {
                    title: 'Planning of Written Examination (100 Marks)',
                    topics: [
                      '• Each of the five units consists of 20 marks (20 x 5 = 100 Marks).',
                      '• Paper-II written portion comprises Unit I, II, and III. Two questions will be asked from Unit I, II, and III, and scholars must answer one question from each of these units.',
                      '• Unit-IV (Research paper Presentation) and Unit-V (Viva - Voce) are compulsory.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'home science') {
          return [
            {
              courseTitle: `Paper-II: Research Methods in Different Areas of Home Science & Research Proposal`,
              courseCode: `PHD-HSC-02`,
              credits: '4',
              theory: {
                credits: '4',
                units: [
                  {
                    title: 'Part A: Research methods in different areas of Home Science (60 Marks / Credit-03)',
                    topics: [
                      'Overview of specialized research techniques and methodologies across the core domains of Home Science.'
                    ]
                  },
                  {
                    title: 'Unit I: Food and Nutrition',
                    topics: [
                      '1. Assessment of nutritional status: Anthropometric, Biochemical, Clinical and Dietary assessment',
                      '2. Food supplementation, product development and organoleptic evaluation of food: Weaning food, Supplementary feeding, Food for various diseases and health conditions',
                      '3. Determining nutritive value of food: Calorie, Proteins, Carbohydrate, Fats, Minerals, Fiber'
                    ]
                  },
                  {
                    title: 'Unit II: Family Resource Management',
                    topics: [
                      '1. Resource Management: Management of Human resources (time & energy) and Non-human resources (Money & Environmental resources)',
                      '2. Ergonomics: Work, worker and workplace study- Assessment of risks/hazards and suggesting remedial measures.',
                      '3. Interior Designing: Designing of buildings for people with different requirements and special needs, designing energy efficient buildings.'
                    ]
                  },
                  {
                    title: 'Unit III: Human Development',
                    topics: [
                      '1. Effect of different parameters on development of human beings: Physical, emotional, psychological, social development of people at different ages.',
                      '2. Family relations: Marriage, adjustment in family',
                      '3. Child behavior and counseling: Counseling of people at different ages with different problems'
                    ]
                  },
                  {
                    title: 'Unit IV: Clothing and Textile',
                    topics: [
                      '1. Clothing for special needs: clothing for different occupation, protective clothing.',
                      '2. Clothing for different ages: Clothing for child, adolescent, adult, old age; Clothing in different time frames; Social and psychological effect of clothing',
                      '3. Development and diversification of textile: Woven, printed, painted, dyed, embroidered textile of different regions.'
                    ]
                  },
                  {
                    title: 'Unit V: Extension Education',
                    topics: [
                      '1. National programmes and policies: Checking awareness and effectiveness in different regions',
                      '2. Dissemination of innovations of Home Science to grass root level',
                      '3. Role of different types of media in awareness generation.'
                    ]
                  },
                  {
                    title: 'Part B: Research Proposal (40 Marks / Credit-01)',
                    topics: [
                      '• Writing and presentation of research proposal related to doctoral research topic before the students and committee.'
                    ]
                  },
                  {
                    title: 'References / संदर्भ ग्रंथ',
                    topics: [
                      '1. Research Methodology methods and techniques — By C R Kothari and Gaurav Garg',
                      '2. Research Methods in the Social Science — By David Nachmias and Chava Nachmias',
                      '3. Research methods in Social Science — By B.A.V. Sharma, D. Ravindra Prasad and P. Satya Narayana',
                      '4. Doing Social Research — By Leonard Cargan',
                      '5. Key concept in social research — By Geoff payne & Judy Payne',
                      '6. Statistics in Psychology, Sociology and Education — Dr. Arun Kumar Singh',
                      '7. शोध पद्धति शास्त्र — प्रो. (डॉ.) गोपी रमण प्रसाद सिंह',
                      '8. सामाजिक अनुसन्धान सर्वेक्षण एवं सांख्यकी — डॉ. गणेश पाण्डेय',
                      '9. शिक्षा और मनोविज्ञान में सांख्यकी के प्रयोग — हेनरी ई. गैरिट',
                      '10. सामाजिक शोध व सांख्यकी — रविन्द्र नाथ मुखर्जी'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'political science') {
          return [
            {
              courseTitle: `Paper-II: Research Methodology in Political Science`,
              courseCode: `PHD-POL-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Unit-I: Research Proposal and Design',
                    topics: [
                      '• Formulation of Research Proposal: Meaning and Importance of Research Proposal',
                      '• Salient Features of a Sound Research in Political Science',
                      '• Ingredients of Research Design'
                    ]
                  },
                  {
                    title: 'Unit-II: Research Problem & Data Sourcing',
                    topics: [
                      '• Identification of Research Problem in Political Science',
                      '• Encapsulation of Distinct Dimensions of Research Issues',
                      '• Resources and Availability of Data - Primary and Secondary Sources',
                      '• Duration of Research'
                    ]
                  },
                  {
                    title: 'Unit-III: Literature Review',
                    topics: [
                      '• Importance of Literature Review',
                      '• Updating of Available Literature on the Topic',
                      '• Typology of Literature'
                    ]
                  },
                  {
                    title: 'Unit-IV: Scholarly Conventions',
                    topics: [
                      '• Characteristics of a Good Bibliography',
                      '• Use of Notes and References',
                      '• Sourcing from Original Documents & Subject-Specific Reports'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'psychology') {
          return [
            {
              courseTitle: `Paper-II: Advancements in Psychology`,
              courseCode: `PHD-PSY-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Course Objectives & Pedagogy',
                    topics: [
                      'Objective a: Basic understanding of the latest studies in the research area',
                      'Objective b: Analyse and formulate the problems from a psychological perspective',
                      'Objective c: Assess the appropriateness and application of various methods and processes within research',
                      'Objective d: Demonstrate professional skills in writing',
                      'Objective e: Contribute to the development of new knowledge',
                      'Pedagogy: Lecture, Discussions, Case study, Tutorial, Review of relevant resources, Assignments, Presentations, Mini projects, Laboratory work, Fieldwork'
                    ]
                  },
                  {
                    title: 'Unit-I: Cyber and Criminal Psychology',
                    topics: [
                      '• Internet Addiction: types, causes, theories, consequences, assessment, treatment and prevention.',
                      '• Nature and detection of criminal behaviour; risk and protective factors in criminal behaviour, bio-psychosocial approach to criminal behaviour, prevention of criminal behaviour'
                    ]
                  },
                  {
                    title: 'Unit-II: Developmental Psychology',
                    topics: [
                      '• Psychological Issues in Adolescence: Changes in Adolescence: Characteristics and Types; Issues of Identity, Autonomy and Intimacy - Concept and Current Research.',
                      '• Psychology of Ageing: Concept and Types of Ageing, Theories of Ageing, Age-related changes in Elderly people, the concept of Successful Ageing.'
                    ]
                  },
                  {
                    title: 'Unit-III: Indigenous Psychology',
                    topics: [
                      '• Introduction to Indigenous Psychology, Indian Conceptions of Perception and Personality and self',
                      '• Indian Conceptions of Knowledge, Intelligence and Cognition',
                      '• Stress, Mental Health, Spirituality and Wellbeing',
                      '• Positive Psychology: emerging issues'
                    ]
                  },
                  {
                    title: 'Unit-IV: Organisational Behaviour',
                    topics: [
                      '• Challenges in organisational behaviour and present status',
                      '• Work motivation: Theories, Motivation Enhancement Techniques',
                      '• Leadership in Indian context',
                      '• Organisational commitment: Organisational ethics; spirituality at work place; social responsibility, organisational citizenship behaviour',
                      '• Creativity and innovation; emotional labour, psychological contract; organisational justice'
                    ]
                  },
                  {
                    title: 'Unit-V: Applied Social Psychology',
                    topics: [
                      '• Social Change: Factors affecting change and Resistance to Social change',
                      '• Social Integration: Concept and Measures to achieve Social Integration',
                      '• Social-psychological analysis of Poverty, Concepts of Disadvantaged, Deprivation and Socially Deprived groups, Educating and Motivating the Disadvantaged towards Development',
                      '• Violence in Families, Terrorism and Strategies to deal with Terrorism; Psychology of Corruption; Role of ICT in Social Behaviour'
                    ]
                  },
                  {
                    title: 'Learning Outcomes',
                    topics: [
                      'a. In depth understanding of the theories, models, concepts, methods of enquiry and processes in the research area.',
                      'b. Knowledge and understanding of the recent advances in the research area'
                    ]
                  },
                  {
                    title: 'Readings / Recommended Books',
                    topics: [
                      '1. Dusek, J. B. (1987). Adolescent Development and Behaviour, Prentice Hall, New Jersey.',
                      '2. Bartol, C.R. & Bartol, A.M. (2004). Introduction to Forensic Psychology. Sage Publications, London.',
                      '3. Chandel, N.K. et.al (2003). Psychological Implications of Information Technology. New Delhi, Deep and Deep Publications.',
                      '4. Wallace, P. (1999). Psychology of Internet. Cambridge, Cambridge University Press.',
                      '5. Baron, R. A. & Byne, D. (2006). Social Psychology, Understanding, Human Interaction, Prentice Hall of India, New Delhi.',
                      '6. Raven, B. H. & Rubin, H. L. (1983). Social Psychology, John Willy Sons, New York.',
                      '7. Sinha, D. (1981). Socialization of the Indian Child, Concept Publishing Co., New Delhi.',
                      '8. Luthans, F. (1986). Organisational Behaviour, McGraw Hill, New York.',
                      '9. Robbins, S. P. & Sanghi, S. (2005). Organisational Behaviour (11th Edition) Pearson Education Inc.',
                      '10. Kow, H. S. R. & Sinha, S. (1997). Asian Perspectives on Psychology, Sage Publications, New Delhi.'
                    ]
                  }
                ]
              }
            }
          ];
        }
        if (subject.toLowerCase() === 'sociology') {
          return [
            {
              courseTitle: `Paper-II: Sociological Theories (Classical to Recent) & Research Proposal`,
              courseCode: `PHD-SOC-02`,
              credits: '6',
              theory: {
                credits: '6',
                units: [
                  {
                    title: 'Part-A: Sociological Theories (Classical to Recent) (80 Marks)',
                    topics: [
                      'Outline of the syllabus consisting of Five units of Sociological Theories'
                    ]
                  },
                  {
                    title: 'Unit- I: Classical Sociological Theories',
                    topics: [
                      '• Auguste Comte: Positivism',
                      '• Herbert Spencer: Social Evolution',
                      '• Emile Durkheim: Social Facts',
                      '• Max Weber: Ideal Types'
                    ]
                  },
                  {
                    title: 'Unit- II: Major Sociological Schools',
                    topics: [
                      'i. Functionalism:',
                      '   - A. R. Radcliffe Brown',
                      '   - B. Malinowski',
                      '   - R. K. Merton',
                      '   - Talcott Parsons',
                      '   - J. Alexander',
                      'ii. Conflict Theory:',
                      '    - G. W. F. Hegel',
                      '    - Karl Marx',
                      '    - R. Dahrendorf',
                      '    - L. Gumplowicz',
                      '    - L. Coser',
                      '    - L. Althusser',
                      'iii. Symbolic Interactionism:',
                      '     - C. H. Cooley',
                      '     - G. H. Mead',
                      '     - H. Blumer',
                      '     - E. Goffman'
                    ]
                  },
                  {
                    title: 'Unit- III: Recent Sociological Theories',
                    topics: [
                      'i. Phenomenology: a. E. Husserl, b. A. Schutz',
                      'ii. Ethnomethodology: a. H. Garfinkel, b. D. Zimmerman',
                      'iii. Micro-Macro Integration: a. G. Ritzer, b. J. Coleman',
                      'iv. Agency-Structure Integration: a. P. Bourdieu, b. A. Giddens',
                      'v. Post-Structuralism: a. M. Foucault, b. J. Derrida',
                      'vi. Post-Modernism: a. F. Jameson, b. J. Baudrillard'
                    ]
                  },
                  {
                    title: 'Unit- IV: Feminist Theory',
                    topics: [
                      '• Liberal Feminism',
                      '• Radical Feminism',
                      '• Marxist Feminism',
                      '• Post-Modernism Feminism'
                    ]
                  },
                  {
                    title: 'Unit- V: Indian Perspective',
                    topics: [
                      'i. Indological: a. G.S. Ghurye, b. Louis Dumont',
                      'ii. Structural-Functional: a. M.N. Srinivas, b. S.C. Dube',
                      'iii. Marxian: a. A.R. Desai, b. D.P. Mukerji',
                      'iv. Subaltern: a. B.R. Ambedkar, b. D. Hardiman',
                      'v. Civilizational: a. N.K. Bose, b. Surajit Sinha'
                    ]
                  },
                  {
                    title: 'Part-B: Research Proposal Presentation (20 Marks)',
                    topics: [
                      '• Writing and presentation of research proposal related to doctoral research topic by way of PowerPoint presentation.'
                    ]
                  },
                  {
                    title: 'Books Recommended / संदर्भ ग्रंथ',
                    topics: [
                      '1. Sociological Theory — George Ritzer',
                      '2. Masters of Sociological Thought — Lewis A. Coser',
                      '3. Sociological Thought — F. Abraham and J.H. Morgan',
                      '4. Sociological Theory — N. S. Timasheff',
                      '5. History of Social Thoughts (Hindi) — G. R. P. Singh',
                      '6. Sociological Theory (Hindi) — N. K. Singhi',
                      '7. Modernity, Post-Modernity and Neo-Sociological Theories (Hindi) — S.L. Doshi',
                      '8. Sociological Theory (Hindi) — P.N. Pandey'
                    ]
                  }
                ]
              }
            }
          ];
        }
        return [
          {
            courseTitle: `Advanced Specialized Domain: ${subject}`,
            courseCode: `PHD-${shortSubject}-801`,
            credits: '6',
            theory: {
              credits: '6',
              units: [
                {
                  title: `Unit 1: Epistemological Foundations & Modern Theoretical Paradigms in ${subject}`,
                  topics: [
                    `Structural analytical frameworks, classical theories, and active scientific schools of thought in ${subject}.`,
                    `Critiques of legacy structures, contemporary paradigm shifts, and exploring complex socio-empirical models.`,
                    `Interdisciplinary linkages, behavioral paradigms, and modern research directions in ${subject}.`
                  ]
                },
                {
                  title: `Unit 2: Strategic Descriptive Models & Analytical Fields Diagnosis`,
                  topics: [
                    `Formulating robust field diagnostic surveys, structural interviewing criteria, and standard sociometric indexing inside ${subject}.`,
                    `Validating empirical variables, structural sampling frames, and constructing multi-tier behavioral indicators.`,
                    `Analyzing high-importance policy publications, governmental datasets, and developmental registers.`
                  ]
                }
              ]
            }
          }
        ];
      }
    } else { // sem === 'Thesis'
      return [
        {
          courseTitle: `Literature Appraisal and Dissertation Blueprint`,
          courseCode: `PHD-${shortSubject}-802`,
          credits: '4',
          theory: {
            credits: '4',
            units: [
               {
                 title: `Unit 1: Systematic Review of Literature & Meta-Analysis in ${subject}`,
                 topics: [
                   `Extensive literature survey, library databases (Scopus, Google Scholar, ScienceDirect, Web of Science, PubMed).`,
                   `Drafting literature reviews, identifying critical research gaps and articulating unanswered queries.`,
                   `Compiling meta-analysis indexes, reference notes, and conceptual study maps tailored to ${subject}.`,
                   `Setting scholarly foundations, formatting bibliographical registers, and reviewing citation ethics.`
                 ]
               }
            ]
          }
        }
      ];
    }
  } else if (type === 'RM') {
    if (sem === 'Coursework') {
      return [
        {
          courseTitle: 'Paper-I: Research Methodology (Common for All Faculties)',
          courseCode: 'PHD-RM-01',
          credits: '6',
          theory: {
            credits: '6',
            units: [
              {
                title: '1. Introduction to Research',
                topics: [
                  'What is Research, Why is Research Conducted',
                  'Stages in Research',
                  'Changing Nature and Expanding Scope of Research',
                  'Why Research Methodology'
                ]
              },
              {
                title: '2. Introduction to Major Research Methods',
                topics: [
                  'Natural Observation, Historical Research, Ethnographic Research, Cross-Sectional Study, Longitudinal Study, Cohort Study, Case Study, Correlational Research, Action Research',
                  'Quantitative and Qualitative Research, theoretical research, applied research and empirical research',
                  'Experimental Research: Cause and Effect Relationships, Hypothesis in Experiments, Principles of Experimentation, Classification of Experiments, Experimental Design, Requirements of a Good Experiment',
                  'Reasoning in Research: Introduction to Logical Terms, Evidences, Inductive and Deductive Reasoning, Fallacious Reasoning, Formal and Informal Fallacies, Common Fallacies'
                ]
              },
              {
                title: '3. Research Design & Sources of Research Data',
                topics: [
                  'Study designs in quantitative research, Study designs in qualitative research, Other commonly used philosophy-guided designs',
                  'Choice of Variables, Constructing hypotheses, Mechanisms and Design for Data Collection',
                  'Collection of Primary Data: Observation, Interview, questionnaire and schedule Sample Surveys and Designed Experiments, Estimation without Sampling, Methods of data collection in qualitative research',
                  'Collection of Secondary Data, Data Integration, Using Publications and the Library',
                  'Using Academic Databases: Search Engines, Citation Indexes and Citation Analysis',
                  'Government of India Initiatives for Knowledge Management - INFLIBNET: e-ShodhSindhu, Shodhganga, ShodhGangotri, and N-List Projects'
                ]
              },
              {
                title: '4. Data Analysis Methods',
                topics: [
                  'Statistical analysis, Thematic analysis, Analysing narrative',
                  'Discourse analysis, Content analysis',
                  'Grounded Theory',
                  'Using computers in data analysis'
                ]
              },
              {
                title: '5. Ethics and Related Issues in Research',
                topics: [
                  'Concepts in Ethics in Research, Intellectual Property Rights (IPR)',
                  'Scientific Values: Needed a Code of Conduct, Fraud and Misconduct in Science',
                  'Plagiarism: What is Plagiarism, Acknowledge Sources Appropriately, Paraphrasing, Direct and Indirect Quotations',
                  'Plagiarism Checking: ShodhShuddhi, UGC (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations, 2018',
                  'LNMU Plagiarism Policy and Regulations-2018'
                ]
              },
              {
                title: '6. Writing a Research Proposal',
                topics: [
                  'Introduction to research proposals, The research problem, Objectives of the study',
                  'Hypotheses to be tested, Study design, Measurement procedures',
                  'Analysis of data, Structure of the report, Problems and limitations'
                ]
              },
              {
                title: '7. The Structure of a Thesis',
                topics: [
                  'Thesis Vs Dissertation, Parts of a Thesis',
                  'Preliminary Pages of a Thesis: Title Pages, Certificate Pages, Acknowledgements, Table of Contents, List of Tables, List of Figures, Dedication',
                  'The Subject Proper: Introduction, Review of Literature, Materials and Methods, Results, Analysis/Discussion, Summary/Conclusion, References, Appendixes, The Abstract',
                  'Formatting Requirements of a Thesis: Margins, Page Numbering, Design and Formatting of Chapters, Numbering the Sections, Lay-Out of Tables, Language and Style, Typeface and Fonts, Paper and Text Spacing, Thesis Editing'
                ]
              }
            ]
          }
        }
      ];
    } else { // sem === 'Thesis'
      return [
        {
          courseTitle: 'Methodology Review Seminar & Defense',
          courseCode: `PHD-${shortSubject}-804`,
          credits: '4',
          theory: {
            credits: '4',
            units: [
               {
                 title: `Unit 1: Research Methodology Defense Colloquium inside ${subject}`,
                 topics: [
                   `Deploying and contextualizing selected research methodology to the customized Ph.D. topic of choice in ${subject}.`,
                   'Defending statistical sampling limits, experimental safety protocols, or physical materials check before DRC.',
                   'Addressing expert panels reviews, adapting draft modifications, and refining procedural design.'
                 ]
               }
            ]
          }
        }
      ];
    }
  } else if (type === 'RPE') {
    if (sem === 'Coursework') {
      return [
        {
          courseTitle: 'Research and Publication Ethics (UGC Guidelines)',
          courseCode: `PHD-${shortSubject}-805`,
          credits: '2',
          theory: {
            credits: '2',
            units: [
              {
                title: 'Unit 1: Philosophy, Ethics and Scientific Conduct',
                topics: [
                  'Philosophy of science, intellectual honesty, academic integrity, and scientific misconduct.',
                  'Falsification, fabrication, plagiarism, and redundant publications (duplicate & overlapping publications, salami slicing).',
                  'Selective reporting, misrepresentation of data, and authorship criteria rules.'
                ]
              },
              {
                title: 'Unit 2: Publication Misconduct & Databases',
                topics: [
                  'Publication ethics: Guidelines of COPE (Committee on Publication Ethics), conflict of interest.',
                  'Predatory publishers, identifying index databases, Web of Science, Scopus, UGC CARE journal check.',
                  'Software tools check: Plagiarism checking tools (Turnitin, Urkund, Ouriginal) and indexing databases.'
                ]
              }
            ]
          }
        }
      ];
    } else { // sem === 'Thesis'
      return [
        {
          courseTitle: 'Scientific Integrity & Similarity Check Verification',
          courseCode: `PHD-${shortSubject}-806`,
          credits: '2',
          theory: {
            credits: '2',
            units: [
              {
                title: 'Unit 1: Similarity Verification & Plagiarism Scan',
                topics: [
                  `Running official university plagiarism scans on ${subject} thesis chapters via Turnitin or Ouriginal portal.`,
                  'Adhering to UGC Level 0 constraints (strict threshold limit < 10% similarity).',
                  'Resolving copyright issues, obtaining official permissions for external figures/illustrations, and ethics clearance.'
                ]
              }
            ]
          }
        }
      ];
    }
  } else if (type === 'TH') {
    if (sem === 'Coursework') {
      return [
        {
          courseTitle: 'Pre-Submission Colloquium & Dissertation Draft',
          courseCode: `PHD-${shortSubject}-901`,
          credits: '8',
          theory: {
            credits: '8',
            units: [
              {
                title: 'Unit 1: Thesis Draft Assembly & Chapter Planning',
                topics: [
                  `Structuring the doctoral draft in ${subject}: Abstract, Table of Contents, Introduction, Literature Review, Methodology, Experimental Results, Scope for Future Advancements, Appendices, and Bibliography.`,
                  'Review of dissertation progress by the DRC on half-yearly reports.',
                  'Delivery of the pre-submission research seminar to department experts prior to final manuscript printing.'
                ]
              }
            ]
          }
        }
      ];
    } else { // sem === 'Thesis'
      return [
        {
          courseTitle: 'Thesis Supplication and Public Oral Defense (HQ Darbhanga)',
          courseCode: `PHD-${shortSubject}-902`,
          credits: '16',
          theory: {
            credits: '16',
            units: [
               {
                 title: 'Unit 1: Final Dissertation Review & Submission Checklists',
                 topics: [
                   'Checking complete dossier: Plagiarism Level 0 certificate, Supervisor declaration, character testimonials, and fee receipts.',
                   'Submitting three printed copies of the thesis to the LNMU Examination Department, Darbhanga.',
                   'Evaluation tracker: Coordinating with external experts appointed by the Vice Chancellor outside of Bihar.'
                 ]
               },
               {
                 title: `Unit 2: Public Viva-Voce Defense (PAT Rules Mandate) in ${subject}`,
                 topics: [
                   `Delivering public slide-deck presentation summing up all major physical/theoretical/practical discoveries in ${subject}.`,
                   'Defending claims, experimental procedures, and analytical proofs against board examiners and university academic audience.',
                   'Approved resolution submission for final notifications and Convocation degree award under the university seal.'
                 ]
               }
            ]
          }
        }
      ];
    }
  }
  return [];
};

const getDynamicPhdSyllabus = (subject: string, type: string, sem: string) => {
  const data = getDetailedPhdSyllabus(subject, type, sem);
  if (type === 'Paper-I') {
    return data.map(item => ({
      ...item,
      courseTitle: 'Paper-I: Research Methodology (Common for All Faculties)',
      courseCode: 'PHD-RM-01'
    }));
  }
  if (type === 'Paper-II') {
    const shortSubject = (subject || 'RES').slice(0, 3).toUpperCase();
    return data.map(item => ({
      ...item,
      courseTitle: `Paper-II: Subject Specific Course Work in ${subject}`,
      courseCode: `PHD-${shortSubject}-02`
    }));
  }
  return data;
};

// ============================================================================
// Root Application Component & Navigation Router
// ============================================================================

/**
 * App: The primary coordinator component for the LNMU Syllabus & Regulations Portal.
 * 
 * Manages:
 * 1. Global Color Theme (Light/Dark system synchronized to DOM root and localStorage).
 * 2. Multi-tier Navigation Stack (Program -> Subject -> Course Type -> Semester -> Specific Course).
 * 3. Browser History & Hardware Back Integration (Mobile back gestures walk backward cleanly).
 * 4. Academic Data Resolvers (UG NEP Common Courses, Science Honours, Arts, Ph.D., Postdoc).
 * 5. Floating Action Bar, Information Modals, and AI Prompt Notification Toast.
 */
export default function App() {
  // Global Theme State: dark mode enabled by default for high contrast readability
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const mode = localStorage.getItem('lnmu-theme-mode');
      if (mode === 'light') return false;
      if (mode === 'dark') return true;
      return true; // Default is Dark Mode
    } catch {
      return true;
    }
  });

  // Synchronize darkMode class on document.documentElement to prevent rogue OS dark mode overrides
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark', 'app-dark-mode');
    } else {
      document.documentElement.classList.remove('dark', 'app-dark-mode');
    }
  }, [darkMode]);

  // Navigation Stack State: Restores state from history.state if user navigates back
  const [selectedProgram, setSelectedProgram] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.program) {
      return window.history.state.appNav.program;
    }
    return null;
  });
  const [selectedSubject, setSelectedSubject] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.subject) {
      return window.history.state.appNav.subject;
    }
    return null;
  });
  const [selectedCourseType, setSelectedCourseType] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.courseType) {
      return window.history.state.appNav.courseType;
    }
    return null;
  });
  const [selectedSem, setSelectedSem] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.sem) {
      return window.history.state.appNav.sem;
    }
    return null;
  });
  const [selectedSpecificCourse, setSelectedSpecificCourse] = useState<string | null>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.specificCourse) {
      return window.history.state.appNav.specificCourse;
    }
    return null;
  });
  const [showContact, setShowContact] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.history.state?.appNav?.showContact) {
      return window.history.state.appNav.showContact;
    }
    return false;
  });
  const [aiToast, setAiToast] = useState<{
    programId: string;
    subject: string;
    courseTitle: string;
    unitTitle: string;
    topic: string;
    promptText: string;
  } | null>(null);
  const [toastCopied, setToastCopied] = useState<boolean>(false);

  // ============================================================================
  // Admin Authentication & Live Curriculum CMS State
  // ============================================================================
  const [showAdminModal, setShowAdminModal] = useState<boolean>(false);
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem('lnmu_admin_token') || sessionStorage.getItem('lnmu_admin_token');
    } catch {
      return null;
    }
  });
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<string>('Admin');
  const [serverOverrides, setServerOverrides] = useState<Record<string, any>>(() => getCachedOverrides());
  const [adminDrafts, setAdminDrafts] = useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [lastCommittedAt, setLastCommittedAt] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  // Admin Modal Dialogs
  const [editTopicModal, setEditTopicModal] = useState<{
    isOpen: boolean;
    isNew?: boolean;
    courseIdx: number;
    unitIdx?: number;
    topicIdx?: number;
    isPractical?: boolean;
    initialText: string;
    unitTitle: string;
  }>({ isOpen: false, courseIdx: 0, initialText: '', unitTitle: '' });

  const [editUnitModal, setEditUnitModal] = useState<{
    isOpen: boolean;
    isNew?: boolean;
    courseIdx: number;
    unitIdx?: number;
    initialTitle: string;
  }>({ isOpen: false, courseIdx: 0, initialTitle: '' });

  const [editCourseModal, setEditCourseModal] = useState<{
    isOpen: boolean;
    isNew?: boolean;
    courseIdx?: number;
    initialData?: { courseTitle: string; courseCode: string; credits: string; marks?: string };
  }>({ isOpen: false });

  const [confirmDeleteModal, setConfirmDeleteModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({ isOpen: false, title: '', message: '', onConfirm: () => {} });

  // Load server overrides & verify persisted admin token on mount
  useEffect(() => {
    fetchServerOverrides().then(overrides => {
      if (overrides && Object.keys(overrides).length > 0) {
        setServerOverrides(prev => {
          const merged = { ...prev, ...overrides };
          saveCachedOverrides(merged);
          return merged;
        });
      }
    });

    const unsub = subscribeToSyllabusUpdates((overrides) => {
      if (overrides && Object.keys(overrides).length > 0) {
        setServerOverrides(prev => {
          const merged = { ...prev, ...overrides };
          saveCachedOverrides(merged);
          return merged;
        });
      }
    });

    if (adminToken) {
      verifyAdminToken(adminToken).then(valid => {
        if (valid) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          setAdminToken(null);
          try {
            localStorage.removeItem('lnmu_admin_token');
            sessionStorage.removeItem('lnmu_admin_token');
          } catch {}
        }
      });
    }

    return () => {
      unsub();
    };
  }, []);

  const getSyllabusKey = (
    prog: string | null,
    subj: string | null,
    cType: string | null,
    sem: string | null,
    spec: string | null
  ) => {
    return `${prog || 'all'}__${subj || 'common'}__${cType || 'core'}__${sem || 'sem1'}__${spec || 'main'}`;
  };

  const updateCurrentCourses = (updater: (courses: any[]) => any[]) => {
    const currentKey = getSyllabusKey(
      selectedProgram,
      selectedSubject,
      selectedCourseType,
      selectedSem,
      selectedSpecificCourse
    );
    const current = adminDrafts[currentKey] 
      || serverOverrides[currentKey] 
      || getSyllabusData();
    
    const cloned = JSON.parse(JSON.stringify(current));
    const updated = updater(cloned);
    setAdminDrafts(prev => ({
      ...prev,
      [currentKey]: updated
    }));
  };

  const handleAdminLoginSuccess = (token: string, admin: any) => {
    setAdminToken(token);
    setIsAdmin(true);
    setAdminUser(admin.username || 'Admin');
    try {
      localStorage.setItem('lnmu_admin_token', token);
    } catch {}
    setSuccessToast("Welcome, Administrator! Live curriculum editing mode is active.");
    setTimeout(() => setSuccessToast(null), 5000);
  };

  const handleAdminLogout = () => {
    try {
      localStorage.removeItem('lnmu_admin_token');
      sessionStorage.removeItem('lnmu_admin_token');
    } catch {}
    setAdminToken(null);
    setIsAdmin(false);
    setAdminDrafts({});
    setSuccessToast("Logged out of Administrator mode.");
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleCommitChanges = async () => {
    if (!adminToken) {
      setShowAdminModal(true);
      return;
    }
    setIsSaving(true);
    try {
      const merged = {
        ...serverOverrides,
        ...adminDrafts
      };
      const res = await commitSyllabusChanges(
        adminToken,
        merged,
        `Committed by ${adminUser} at ${new Date().toLocaleTimeString()}`
      );
      if (res.success) {
        setServerOverrides(merged);
        saveCachedOverrides(merged);
        setAdminDrafts({});
        setLastCommittedAt(new Date().toISOString());
        setSuccessToast("Curriculum changes committed successfully! All student devices are now synced.");
        setTimeout(() => setSuccessToast(null), 5000);
      } else {
        setErrorToast(res.error || "Failed to commit changes");
        setTimeout(() => setErrorToast(null), 5000);
      }
    } catch (err: any) {
      setErrorToast(err.message || "Failed to commit changes");
      setTimeout(() => setErrorToast(null), 5000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDiscardDrafts = () => {
    setAdminDrafts({});
    setSuccessToast("All uncommitted draft edits have been discarded.");
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleResetCurrentSyllabus = () => {
    const currentKey = getSyllabusKey(
      selectedProgram,
      selectedSubject,
      selectedCourseType,
      selectedSem,
      selectedSpecificCourse
    );
    setConfirmDeleteModal({
      isOpen: true,
      title: "Reset to Official LNMU Syllabus",
      message: "Are you sure you want to reset this semester syllabus to the official default? Any custom admin overrides for this paper will be cleared.",
      onConfirm: async () => {
        setAdminDrafts(prev => {
          const next = { ...prev };
          delete next[currentKey];
          return next;
        });
        if (adminToken && serverOverrides[currentKey]) {
          const updated = { ...serverOverrides };
          delete updated[currentKey];
          await commitSyllabusChanges(adminToken, updated, "Reset syllabus to default");
          setServerOverrides(updated);
          saveCachedOverrides(updated);
        }
        setSuccessToast("Syllabus reset to official default.");
        setTimeout(() => setSuccessToast(null), 4000);
      }
    });
  };

  // Topic Edit & Add
  const handleOpenEditTopic = (courseIdx: number, unitIdx: number, topicIdx: number, currentTopic: string) => {
    setEditTopicModal({
      isOpen: true,
      isNew: false,
      courseIdx,
      unitIdx,
      topicIdx,
      isPractical: false,
      initialText: currentTopic,
      unitTitle: `Unit ${unitIdx + 1}`
    });
  };

  const handleOpenAddTopic = (courseIdx: number, unitIdx: number, unitTitle: string) => {
    setEditTopicModal({
      isOpen: true,
      isNew: true,
      courseIdx,
      unitIdx,
      isPractical: false,
      initialText: '',
      unitTitle
    });
  };

  const handleConfirmDeleteTopic = (courseIdx: number, unitIdx: number, topicIdx: number, topicText: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: "Delete Topic",
      message: `Are you sure you want to delete the topic: "${topicText}"?`,
      onConfirm: () => {
        updateCurrentCourses(courses => {
          courses[courseIdx]?.theory?.units?.[unitIdx]?.topics?.splice(topicIdx, 1);
          return courses;
        });
        setSuccessToast("Topic deleted from draft.");
        setTimeout(() => setSuccessToast(null), 3000);
      }
    });
  };

  // Practical Handlers
  const handleOpenEditPracticalTopic = (courseIdx: number, topicIdx: number, currentTopic: string) => {
    setEditTopicModal({
      isOpen: true,
      isNew: false,
      courseIdx,
      topicIdx,
      isPractical: true,
      initialText: currentTopic,
      unitTitle: "Practical Lab"
    });
  };

  const handleOpenAddPracticalTopic = (courseIdx: number) => {
    setEditTopicModal({
      isOpen: true,
      isNew: true,
      courseIdx,
      isPractical: true,
      initialText: '',
      unitTitle: "Practical Lab"
    });
  };

  const handleConfirmDeletePracticalTopic = (courseIdx: number, topicIdx: number, topicText: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: "Delete Experiment",
      message: `Are you sure you want to delete practical experiment: "${topicText}"?`,
      onConfirm: () => {
        updateCurrentCourses(courses => {
          courses[courseIdx]?.practical?.topics?.splice(topicIdx, 1);
          return courses;
        });
        setSuccessToast("Practical experiment deleted from draft.");
        setTimeout(() => setSuccessToast(null), 3000);
      }
    });
  };

  // Unit Handlers
  const handleOpenEditUnit = (courseIdx: number, unitIdx: number, currentTitle: string) => {
    setEditUnitModal({
      isOpen: true,
      isNew: false,
      courseIdx,
      unitIdx,
      initialTitle: currentTitle
    });
  };

  const handleOpenAddUnit = (courseIdx: number) => {
    setEditUnitModal({
      isOpen: true,
      isNew: true,
      courseIdx,
      initialTitle: ''
    });
  };

  const handleConfirmDeleteUnit = (courseIdx: number, unitIdx: number, unitTitle: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: "Delete Syllabus Unit",
      message: `Are you sure you want to delete "${unitTitle}" and all of its topics?`,
      onConfirm: () => {
        updateCurrentCourses(courses => {
          courses[courseIdx]?.theory?.units?.splice(unitIdx, 1);
          return courses;
        });
        setSuccessToast("Unit deleted from draft.");
        setTimeout(() => setSuccessToast(null), 3000);
      }
    });
  };

  // Course Handlers
  const handleOpenEditCourse = (courseIdx: number, course: any) => {
    setEditCourseModal({
      isOpen: true,
      isNew: false,
      courseIdx,
      initialData: {
        courseTitle: course.courseTitle || '',
        courseCode: course.courseCode || '',
        credits: course.credits || '4',
        marks: course.marks || '100'
      }
    });
  };

  const handleOpenAddNewCourse = () => {
    setEditCourseModal({
      isOpen: true,
      isNew: true,
      initialData: {
        courseTitle: '',
        courseCode: `${selectedCourseType || 'MJC'}-${selectedSem ? selectedSem.replace(/\D/g, '') : '1'}01`,
        credits: '4',
        marks: '100'
      }
    });
  };

  const handleConfirmDeleteCourse = (courseIdx: number, courseTitle: string) => {
    setConfirmDeleteModal({
      isOpen: true,
      title: "Delete Course Paper",
      message: `Are you sure you want to delete the entire paper "${courseTitle}"?`,
      onConfirm: () => {
        updateCurrentCourses(courses => {
          courses.splice(courseIdx, 1);
          return courses;
        });
        setSuccessToast("Course removed from draft.");
        setTimeout(() => setSuccessToast(null), 3000);
      }
    });
  };

  // Modal Save Submissions
  const handleSaveTopicFromModal = (text: string) => {
    const { courseIdx, unitIdx, topicIdx, isPractical, isNew } = editTopicModal;
    updateCurrentCourses(courses => {
      if (isPractical) {
        if (!courses[courseIdx].practical) {
          courses[courseIdx].practical = { credits: '2', topics: [] };
        }
        if (isNew) {
          courses[courseIdx].practical.topics.push(text);
        } else {
          courses[courseIdx].practical.topics[topicIdx!] = text;
        }
      } else {
        if (!courses[courseIdx]?.theory?.units?.[unitIdx!]) return courses;
        if (!courses[courseIdx].theory.units[unitIdx!].topics) {
          courses[courseIdx].theory.units[unitIdx!].topics = [];
        }
        if (isNew) {
          courses[courseIdx].theory.units[unitIdx!].topics.push(text);
        } else {
          courses[courseIdx].theory.units[unitIdx!].topics[topicIdx!] = text;
        }
      }
      return courses;
    });
    setSuccessToast(isNew ? "New topic added to draft!" : "Topic updated in draft!");
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleSaveUnitFromModal = (title: string) => {
    const { courseIdx, unitIdx, isNew } = editUnitModal;
    updateCurrentCourses(courses => {
      if (!courses[courseIdx]) return courses;
      if (!courses[courseIdx].theory) {
        courses[courseIdx].theory = { credits: courses[courseIdx].credits || '4', units: [] };
      }
      if (!courses[courseIdx].theory.units) {
        courses[courseIdx].theory.units = [];
      }
      if (isNew) {
        courses[courseIdx].theory.units.push({
          title,
          topics: ['Introduction to ' + title]
        });
      } else {
        if (courses[courseIdx].theory.units[unitIdx!]) {
          courses[courseIdx].theory.units[unitIdx!].title = title;
        }
      }
      return courses;
    });
    setSuccessToast(isNew ? "New unit added to draft!" : "Unit updated in draft!");
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleSaveCourseFromModal = (courseData: { courseTitle: string; courseCode: string; credits: string; marks?: string }) => {
    const { courseIdx, isNew } = editCourseModal;
    updateCurrentCourses(courses => {
      if (isNew) {
        courses.push({
          courseTitle: courseData.courseTitle,
          courseCode: courseData.courseCode,
          credits: courseData.credits,
          marks: courseData.marks,
          theory: {
            credits: courseData.credits,
            units: [
              {
                title: 'Unit 1: Introduction & Fundamentals',
                topics: ['Conceptual frameworks and introductory principles.']
              }
            ]
          }
        });
      } else {
        if (courses[courseIdx!]) {
          courses[courseIdx!].courseTitle = courseData.courseTitle;
          courses[courseIdx!].courseCode = courseData.courseCode;
          courses[courseIdx!].credits = courseData.credits;
          courses[courseIdx!].marks = courseData.marks;
          if (courses[courseIdx!].theory) {
            courses[courseIdx!].theory.credits = courseData.credits;
          }
        }
      }
      return courses;
    });
    setSuccessToast(isNew ? "New course paper added to draft!" : "Course paper updated in draft!");
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const isPopStateRef = useRef<boolean>(false);
  const prevDepthRef = useRef<number>(0);
  const isInitialMount = useRef<boolean>(true);

  const getNavDepth = (nav: {
    program: string | null;
    subject: string | null;
    courseType: string | null;
    sem: string | null;
    specificCourse: string | null;
    showContact: boolean;
  }) => {
    let d = 0;
    if (nav.program) d++;
    if (nav.subject) d++;
    if (nav.courseType) d++;
    if (nav.sem) d++;
    if (nav.specificCourse) d++;
    if (nav.showContact) d++;
    return d;
  };

  // Handle hardware / browser back & forward navigation buttons on mobile, tablet, and desktop
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      isPopStateRef.current = true;
      const nav = event.state?.appNav;
      if (nav) {
        setSelectedProgram(nav.program ?? null);
        setSelectedSubject(nav.subject ?? null);
        setSelectedCourseType(nav.courseType ?? null);
        setSelectedSem(nav.sem ?? null);
        setSelectedSpecificCourse(nav.specificCourse ?? null);
        setShowContact(!!nav.showContact);
        prevDepthRef.current = getNavDepth(nav);
      } else {
        setSelectedProgram(null);
        setSelectedSubject(null);
        setSelectedCourseType(null);
        setSelectedSem(null);
        setSelectedSpecificCourse(null);
        setShowContact(false);
        prevDepthRef.current = 0;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Synchronize navigation state with browser history stack
  useEffect(() => {
    const currentNav = {
      program: selectedProgram,
      subject: selectedSubject,
      courseType: selectedCourseType,
      sem: selectedSem,
      specificCourse: selectedSpecificCourse,
      showContact: showContact,
    };
    const currentDepth = getNavDepth(currentNav);

    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevDepthRef.current = currentDepth;
      try {
        window.history.replaceState({ appNav: currentNav, depth: currentDepth }, '');
      } catch {
        // Safe fallback in restricted iframes
      }
      return;
    }

    if (isPopStateRef.current) {
      isPopStateRef.current = false;
      prevDepthRef.current = currentDepth;
      return;
    }

    const previousDepth = prevDepthRef.current;
    prevDepthRef.current = currentDepth;

    try {
      if (currentDepth > previousDepth) {
        window.history.pushState({ appNav: currentNav, depth: currentDepth }, '');
      } else {
        window.history.replaceState({ appNav: currentNav, depth: currentDepth }, '');
      }
    } catch {
      // Safe fallback in restricted iframes
    }
  }, [selectedProgram, selectedSubject, selectedCourseType, selectedSem, selectedSpecificCourse, showContact]);

  useEffect(() => {
    if (aiToast) {
      const timer = setTimeout(() => {
        setAiToast(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [aiToast]);

  const handleShareAI = async (context: {
    programId: string;
    subject: string;
    courseTitle: string;
    unitTitle: string;
    topic: string;
    promptText?: string;
  }) => {
    const formattedProgram = (context.programId && PROGRAMS.find(p => p.id === context.programId)?.title) || context.programId || 'LNMU';
    const parts = [formattedProgram, context.subject, context.courseTitle, context.unitTitle, context.topic].filter(Boolean);
    const promptText = context.promptText || `Explain in detail → ${parts.join(' → ')}`;

    // Try System Web Share API first (Native Android/iOS System Share Sheet as in Image 2)
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: `LNMU Syllabus: ${context.topic}`,
          text: promptText,
        });
        return; // Successfully opened system share sheet
      } catch (err: any) {
        if (err?.name === 'AbortError') {
          // User dismissed or closed the native share dialog
          return;
        }
        console.warn('System share unavailable or errored, falling back:', err);
      }
    }

    // Fallback modal for desktop/non-supporting browsers (Do NOT auto-copy to clipboard)
    setAiToast({
      ...context,
      promptText
    });
  };

  const resetAll = () => { setSelectedProgram(null); setSelectedSubject(null); setSelectedCourseType(null); setSelectedSem(null); setSelectedSpecificCourse(null); };
  const resetToProgram = () => { setSelectedSubject(null); setSelectedCourseType(null); setSelectedSem(null); setSelectedSpecificCourse(null); };
  const resetToSubject = () => { setSelectedCourseType(null); setSelectedSem(null); setSelectedSpecificCourse(null); };
  const resetToType = () => { 
    setSelectedSem(null); 
    setSelectedSpecificCourse(null); 
  };

  const goBack = () => {
    if (showContact) {
      setShowContact(false);
    } else if (selectedSpecificCourse) {
      setSelectedSpecificCourse(null);
    } else if (selectedSem) {
      if (getProgramType() === 'PHD') {
        setSelectedSem(null);
        setSelectedCourseType(null);
      } else {
        setSelectedSem(null);
      }
    } else if (selectedCourseType) {
      setSelectedCourseType(null);
    } else if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedProgram) {
      setSelectedProgram(null);
    }
  };

  
const COURSE_TYPE_SEMESTER_CONFIG: Record<string, {
  activeSemesters: string[];
  bannerTitle: string;
  bannerDesc: string;
  inactiveReason: string;
  credits: string;
  badge: string;
}> = {
  INT: {
    activeSemesters: ['5th'],
    bannerTitle: 'Internship / Apprenticeship (INT) Schedule',
    bannerDesc: 'Under CBCS 4-Year Undergraduate Regulations, the mandatory Internship / Apprenticeship / Field Training (INT-1, 4 Credits) is undertaken during the 5th Semester. All other semesters do not have an internship component.',
    inactiveReason: 'No Internship in this semester • (Available in 5th Sem)',
    credits: '4 Credits',
    badge: '4 Credits • Mandatory Internship'
  },
  RP: {
    activeSemesters: ['7th'],
    bannerTitle: 'Research Project / Dissertation (RP) Schedule',
    bannerDesc: 'Under CBCS 4-Year Undergraduate Regulations, the Undergraduate Research Project / Dissertation (RP-1, 12 Credits) is conducted in the 7th Semester.',
    inactiveReason: 'No Research Project in this semester • (Available in 7th Sem)',
    credits: '12 Credits',
    badge: '12 Credits • Research Project & Dissertation'
  },
  MDC: {
    activeSemesters: ['1st', '2nd', '3rd'],
    bannerTitle: 'Multidisciplinary Course (MDC) Schedule',
    bannerDesc: 'MDC courses (MDC-1 to MDC-3, 3 Credits each) are offered across Semesters 1, 2, and 3. Semesters 4 to 8 focus on advanced Major and Minor core specializations.',
    inactiveReason: 'Not Applicable (MDC offered in Sem 1 to 3 only)',
    credits: '3 Credits',
    badge: '3 Credits • Multidisciplinary Course'
  },
  SEC: {
    activeSemesters: ['1st', '2nd', '3rd'],
    bannerTitle: 'Skill Enhancement Course (SEC) Schedule',
    bannerDesc: 'Skill Enhancement Courses (SEC-1 to SEC-3, 3 Credits each) are offered in Semesters 1, 2, and 3 to build practical and technical competencies.',
    inactiveReason: 'Not Applicable (SEC offered in Sem 1 to 3 only)',
    credits: '3 Credits',
    badge: '3 Credits • Skill Enhancement Course'
  },
  VAC: {
    activeSemesters: ['1st', '2nd'],
    bannerTitle: 'Value Added Course (VAC) Schedule',
    bannerDesc: 'Value Added Courses (VAC-1 and VAC-2, 3 Credits each) are offered in Semesters 1 and 2 to impart holistic values, health, ethics, and digital skills.',
    inactiveReason: 'Not Applicable (VAC offered in Sem 1 & 2 only)',
    credits: '3 Credits',
    badge: '3 Credits • Value Added Course'
  },
  AEC: {
    activeSemesters: ['1st', '2nd', '3rd', '4th'],
    bannerTitle: 'Ability Enhancement Course (AEC) Schedule',
    bannerDesc: 'Ability Enhancement Courses (AEC-1 to AEC-4, 2 Credits each) are offered in Semesters 1 to 4 covering MIL Communication, Environmental Science, Disaster Risk Management, and Social Services.',
    inactiveReason: 'Not Applicable (AEC offered in Sem 1 to 4 only)',
    credits: '2 Credits',
    badge: '2 Credits • Ability Enhancement Course'
  },
  MJC: {
    activeSemesters: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    bannerTitle: 'Major Course (MJC) Curriculum',
    bannerDesc: 'Major Courses (MJC-1 to MJC-16) form the core discipline stream across all 8 Semesters.',
    inactiveReason: '',
    credits: 'Core Credits',
    badge: 'Core Major Paper'
  },
  MIC: {
    activeSemesters: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    bannerTitle: 'Minor Course (MIC) Curriculum',
    bannerDesc: 'Minor Courses (MIC-1 to MIC-8) provide interdisciplinary depth across all 8 Semesters.',
    inactiveReason: '',
    credits: 'Minor Credits',
    badge: 'Minor Discipline Paper'
  },
  // PG Courses
  DSE: {
    activeSemesters: ['3rd', '4th'],
    bannerTitle: 'Discipline Specific Elective (DSE) Schedule',
    bannerDesc: 'PG Elective Specialization papers are offered in Semesters 3 and 4.',
    inactiveReason: 'Not Applicable (Offered in Sem 3 & 4 only)',
    credits: '4 Credits',
    badge: 'PG Elective Paper'
  },
  AECC: {
    activeSemesters: ['1st', '3rd'],
    bannerTitle: 'Ability Enhancement Compulsory Course (AECC)',
    bannerDesc: 'AECC papers for PG students are scheduled in Semesters 1 and 3.',
    inactiveReason: 'Not Applicable (Offered in Sem 1 & 3 only)',
    credits: '2 Credits',
    badge: 'PG AECC Paper'
  },
  GE: {
    activeSemesters: ['2nd'],
    bannerTitle: 'Generic Elective / Skill (GE)',
    bannerDesc: 'Generic Elective is scheduled in Semester 2.',
    inactiveReason: 'Not Applicable (Offered in Sem 2 only)',
    credits: '3 Credits',
    badge: 'PG GE Paper'
  }
};

const getCourseTypeSemesterInfo = (courseType: string | null) => {
  if (!courseType) return null;
  return COURSE_TYPE_SEMESTER_CONFIG[courseType] || null;
};

const getDynamicCommonCourseSyllabus = (title: string, code: string, credits: string, type: string, sem: string) => {
  return {
    courseTitle: title,
    courseCode: code,
    credits: credits || '3',
    marks: '100',
    courseOutcomes: [
      `CO1: Gain foundational and applied understanding of ${title}.`,
      `CO2: Develop analytical problem solving and conceptual clarity in ${title} methodologies.`,
      `CO3: Execute practical workflows, modern digital tools, and standard operational protocols.`,
      `CO4: Formulate structured reports, project assignments, and case study solutions.`
    ],
    theory: {
      credits: credits || '3',
      units: [
        {
          unitNumber: 1,
          title: `Unit-I: Foundations & Core Principles of ${title}`,
          topics: [
            `Introduction, scope, historical context, and fundamental concepts of ${title}`,
            'Key terminologies, theoretical frameworks, and essential standard operating principles',
            'Evolution of modern paradigms, industry relevance, and real-world domain applications',
            'Analytical and conceptual problem formulation and foundational metrics'
          ]
        },
        {
          unitNumber: 2,
          title: `Unit-II: Methodologies, Tools & Applied Frameworks`,
          topics: [
            `Standard techniques, diagnostic protocols, and computational tools in ${title}`,
            'Step-by-step workflow implementation, quality control, and data acquisition',
            'Case studies, comparative analysis, and practical domain workflows',
            'Troubleshooting common operational challenges, optimization, and best practices'
          ]
        },
        {
          unitNumber: 3,
          title: `Unit-III: Advanced Applications, Integration & Case Studies`,
          topics: [
            `Advanced thematic topics, industry standards, and contemporary research in ${title}`,
            'Cross-disciplinary integration, digital technologies, and automation techniques',
            'Evaluation of real-world scenarios, project design, and strategic interventions',
            'Ethical considerations, legal compliance, sustainability, and IPR aspects'
          ]
        },
        {
          unitNumber: 4,
          title: `Unit-IV: Project Work, Practical Implementation & Evaluation`,
          topics: [
            `Hands-on project work, portfolio building, and practical assessment for ${title}`,
            'Preparation of structured technical documentation, assignment reports, and seminar slides',
            'Data presentation, chart generation, statistical interpretation, and results synthesis',
            'Comprehensive review, viva-voce preparation, and oral presentation defense'
          ]
        }
      ]
    },
    practical: {
      title: `Practical / Hands-on Lab & Skill Assignments for ${title}`,
      topics: [
        `Hands-on laboratory exercises and software/instrumentation simulation in ${title}`,
        'Weekly practical record book maintenance and experiment verification',
        'Mini-project formulation, case study report submission, and data interpretation',
        'End-semester practical examination, spot test, and viva-voce'
      ],
      evaluation: [
        { component: 'Continuous Assessment & Lab Record', marks: 30 },
        { component: 'Practical Examination / Project Report', marks: 50 },
        { component: 'Viva-Voce & Presentation', marks: 20 }
      ]
    },
    suggestedBooks: [
      `Standard Reference Manual for ${title}, LNMU University Press`,
      `Fundamentals and Applications of ${title}, SAGE / McGraw Hill Publications`,
      `UGC Recommended Curriculum Guidelines for Undergraduate CBCS Courses`
    ]
  };
};

  const getProgramType = () => {
    return PROGRAMS.find(p => p.id === selectedProgram)?.type || 'UG';
  };

  const currentCourseTypes = () => {
    const t = getProgramType();
    if (t === 'PG') return PG_COURSE_TYPES;
    if (t === 'PHD') return PHD_COURSE_TYPES;
    if (t === 'POSTDOC') return POSTDOC_COURSE_TYPES;
    return UG_COURSE_TYPES;
  };

    // Check if current courseType in selectedSem has multiple elective options to choose from
  const getSemesterElectiveCourses = () => {
    if (!selectedCourseType || !selectedSem) return [];
    const commonList = COMMON_UG_COURSES?.[selectedCourseType]?.[selectedSem];
    if (commonList && Array.isArray(commonList) && commonList.length > 1) {
      return commonList;
    }
    return [];
  };

  const hasMultipleElectives = () => {
    return getSemesterElectiveCourses().length > 1;
  };

  const getSyllabusData = () => {
    if (getProgramType() === 'POSTDOC') {
      return getDynamicPostdocSyllabus(selectedSubject || '', selectedCourseType || '', selectedSem || '');
    }
    if (getProgramType() === 'PHD') {
      return getDynamicPhdSyllabus(selectedSubject || '', selectedCourseType || '', selectedSem || '');
    }

    // 1. If specific course chosen from multi-course list
    if (selectedSpecificCourse) {
      const semCourses = COMMON_UG_COURSES?.[selectedCourseType || '']?.[selectedSem || ''] || [];
      const found = semCourses.find((c: any) => c.courseTitle === selectedSpecificCourse);
      if (found) {
        if (!found.theory || !found.theory.units || found.theory.units.length === 0) {
          return [getDynamicCommonCourseSyllabus(found.courseTitle, found.courseCode, found.credits, selectedCourseType || '', selectedSem || '')];
        }
        return [found];
      }
    }

    // 2. Check subject-specific syllabus in SYLLABUS_DATA
    const subjectCourses = SYLLABUS_DATA?.[selectedProgram || '']?.[selectedSubject || '']?.[selectedCourseType || '']?.[selectedSem || ''];
    if (subjectCourses && subjectCourses.length > 0) {
      return subjectCourses;
    }

    // 3. Check common courses
    const commonCourses = COMMON_UG_COURSES?.[selectedCourseType || '']?.[selectedSem || ''];
    if (commonCourses && commonCourses.length > 0) {
      return commonCourses.map((c: any) => {
        if (!c.theory || !c.theory.units || c.theory.units.length === 0) {
          return getDynamicCommonCourseSyllabus(c.courseTitle, c.courseCode, c.credits, selectedCourseType || '', selectedSem || '');
        }
        return c;
      });
    }

    // 4. Dynamic fallback
    return [getDynamicCommonCourseSyllabus(`${selectedSubject} - ${selectedCourseType}`, `${selectedCourseType}-${selectedSem}`, '4', selectedCourseType || '', selectedSem || '')];
  };

  const currentSemesters = () => {
    const t = getProgramType();
    if (t === 'PG') return PG_SEMESTERS;
    if (t === 'PHD') return PHD_SEMESTERS;
    if (t === 'POSTDOC') return POSTDOC_SEMESTERS;
    return UG_SEMESTERS;
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      darkMode ? 'dark app-dark-mode bg-[#070d17] text-slate-100 selection:bg-blue-900 selection:text-white' : 'bg-[#eaf4fb] text-slate-900 selection:bg-blue-100'
    }`}>
       <header className={`px-4 py-3 flex items-center justify-between relative z-20 transition-colors duration-300 ${
         darkMode 
           ? 'bg-[#0b1b36] border-b border-white/10 text-white' 
           : 'bg-white border-b border-slate-200 text-slate-900 shadow-sm'
       }`}>
         <div className="flex items-center gap-3">
           <div className={`flex items-center justify-center w-10 h-10 rounded-full border shrink-0 transition-all ${
             darkMode 
               ? 'border-white/20 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
               : 'border-amber-400/40 bg-amber-50 shadow-sm'
           }`}>
             <GraduationCap className="text-[#d4af37] w-6 h-6" strokeWidth={1.5} />
           </div>
           <div className="flex flex-col justify-center">
             <h1 className="text-xl font-bold tracking-tight mb-[1px] leading-none">
               <span className={darkMode ? 'text-white' : 'text-slate-900'}>LNMU</span> <span className="text-[#d4af37]">BUDDY</span>
             </h1>
             <span className={`text-[8px] tracking-widest uppercase mt-0.5 leading-none font-bold ${
               darkMode ? 'text-white/80' : 'text-slate-500'
             }`} style={{ fontFamily: 'Georgia, serif' }}>Educate Agitate & Organize</span>
           </div>
         </div>
         
         <div className="flex items-center gap-2 relative">
           {/* Dark Mode Toggle Button */}
           <button 
             onClick={() => {
               const next = !darkMode;
               setDarkMode(next);
               try {
                 localStorage.setItem('lnmu-theme-mode', next ? 'dark' : 'light');
                 localStorage.setItem('lnmu-app-dark', String(next));
               } catch {}
             }}
             className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border text-xs font-semibold transition-all ${
               darkMode 
                 ? 'bg-yellow-400/10 border-yellow-400/30 hover:bg-yellow-400/20 text-yellow-400' 
                 : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700 shadow-sm'
             }`}
             title={darkMode ? "Switch to Normal / Light Mode" : "Switch to Dark Mode"}
             aria-label="Toggle App Dark Mode"
           >
             {darkMode ? (
               <>
                 <Sun className="w-4 h-4 text-yellow-400" />
                 <span className="hidden sm:inline font-sans">Light</span>
               </>
             ) : (
               <>
                 <Moon className="w-4 h-4 text-slate-700" />
                 <span className="hidden sm:inline font-sans">Dark</span>
               </>
             )}
           </button>

           {/* Contact Us Button */}
           <button 
             onClick={() => {
              if (showContact) {
                goBack();
              } else {
                setShowContact(true);
              }
            }}
             className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
               darkMode 
                 ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
                 : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700 shadow-sm'
             }`}
             title="Contact Us"
           >
             <Users className="w-4 h-4" />
           </button>

           {showContact && (
             <>
               <div className="fixed inset-0 z-40" onClick={goBack}></div>
               <div className={`absolute right-0 mt-2 top-full w-64 rounded-xl shadow-2xl overflow-hidden z-50 border animate-in fade-in slide-in-from-top-2 ${
                 darkMode ? 'bg-[#0f172a] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
               }`}>
                 <div className={`px-4 py-3 border-b ${darkMode ? 'bg-[#0b1b36] border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                   <h3 className={`font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Us</h3>
                 </div>
                 <div className="p-2 flex flex-col gap-1">
                   <a href="mailto:support@lnmu.ac.in" className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                     darkMode ? 'hover:bg-slate-800/80 text-white' : 'hover:bg-slate-50 text-slate-800'
                   }`}>
                     <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0 border border-slate-300">
                       <img src="https://ui-avatars.com/api/?name=LNMU+Desk&background=0b1b36&color=fff&size=64" alt="Academic Desk" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col">
                       <span className={`text-sm font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Academic Desk</span>
                       <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>LNMU Curriculum Help</span>
                     </div>
                   </a>
                   <a href="mailto:support@lnmu.ac.in" className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                     darkMode ? 'hover:bg-slate-800/80 text-white' : 'hover:bg-slate-50 text-slate-800'
                   }`}>
                     <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center shrink-0 border border-slate-300">
                       <img src="https://ui-avatars.com/api/?name=Portal+Tech&background=d4af37&color=fff&size=64" alt="Technical Team" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col">
                       <span className={`text-sm font-bold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Technical Support</span>
                       <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Portal Maintenance</span>
                     </div>
                   </a>
                   <div className={`mt-2 pt-2 border-t px-3 pb-1 ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                     <a href="mailto:support@lnmu.ac.in" className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm">
                       <Mail className="w-4 h-4" /> Message Support
                     </a>
                   </div>
                 </div>
               </div>
             </>
           )}
            {/* Admin Login / Mode Toggle */}
            {!isAdmin ? (
              <button 
                type="button"
                onClick={() => setShowAdminModal(true)}
                className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border text-xs font-semibold transition-all cursor-pointer ${
                  darkMode 
                    ? 'bg-blue-950/60 border-blue-500/40 hover:bg-blue-900/60 text-blue-300' 
                    : 'bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-700 shadow-xs'
                }`}
                title="Admin Login - Manage Curriculum"
                aria-label="Admin Login"
              >
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-sans">Admin Login</span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Mode</span>
                </div>
                <button
                  type="button"
                  onClick={handleAdminLogout}
                  className="px-2.5 py-1.5 rounded-full flex items-center gap-1 border border-red-500/40 bg-red-500/15 hover:bg-red-500/25 text-red-300 text-xs font-bold transition-all cursor-pointer"
                  title="Logout from Admin"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
         </div>
       </header>

       {/* Sticky Admin Action Bar for Live Curriculum Modifications */}
       {isAdmin && (
         <AdminActionBar
           isAdmin={isAdmin}
           hasUncommittedChanges={Object.keys(adminDrafts).length > 0}
           uncommittedCount={Object.keys(adminDrafts).length}
           onCommit={handleCommitChanges}
           onDiscard={handleDiscardDrafts}
           onAddNewCourse={handleOpenAddNewCourse}
           onResetDefault={handleResetCurrentSyllabus}
           onLogout={handleAdminLogout}
           isSaving={isSaving}
           lastSaved={lastCommittedAt}
         />
       )}

       {/* Global Floating Notification Toast for CMS changes */}
       {(successToast || errorToast) && (
         <div className="fixed bottom-5 right-5 z-50 max-w-md animate-in slide-in-from-bottom-3 fade-in duration-200">
           <div className={`p-4 rounded-xl shadow-2xl border flex items-start gap-3 ${
             errorToast 
               ? 'bg-red-950 border-red-700 text-white' 
               : 'bg-emerald-950 border-emerald-700 text-white'
           }`}>
             {errorToast ? (
               <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
             ) : (
               <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
             )}
             <div className="flex-1 text-sm font-medium leading-relaxed">
               {errorToast || successToast}
             </div>
             <button
               type="button"
               onClick={() => { setSuccessToast(null); setErrorToast(null); }}
               className="text-white/60 hover:text-white text-xs px-1.5 py-0.5 rounded cursor-pointer"
             >
               ✕
             </button>
           </div>
         </div>
       )}

       {/* Full-width Breadcrumb Bar */}
       <div className="bg-white border-b-2 border-[#d4af37] px-4 md:px-6 py-2.5 md:py-3 flex items-center text-sm md:text-base text-[#0ea5e9] font-medium overflow-x-auto whitespace-nowrap w-full shadow-sm">
         <button onClick={resetAll} className="flex items-center hover:text-blue-800 transition-colors">
            <Home className="w-4 h-4 md:w-5 md:h-5 mr-1.5" strokeWidth={2} /> Home
         </button>
         
         {selectedProgram && (
           <>
             <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-1.5 md:mx-2 text-slate-300" strokeWidth={2} />
             <button onClick={resetToProgram} className={`hover:text-blue-800 transition-colors ${!selectedSubject ? 'text-blue-900 font-bold' : ''}`}>
               {selectedProgram}
             </button>
           </>
         )}

         {selectedSubject && (
           <>
             <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-1.5 md:mx-2 text-slate-300" strokeWidth={2} />
             <button onClick={resetToSubject} className={`hover:text-blue-800 transition-colors ${!selectedCourseType ? 'text-blue-900 font-bold' : ''}`}>
               {selectedSubject}
             </button>
           </>
         )}

         {selectedCourseType && (
           <>
             <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-1.5 md:mx-2 text-slate-300" strokeWidth={2} />
             <button 
                onClick={resetToType} 
                className={`hover:text-blue-800 transition-colors ${(!selectedSem || getProgramType() === 'PHD') ? 'text-blue-900 font-bold cursor-default pointer-events-none' : ''}`}
                disabled={getProgramType() === 'PHD'}
              >
               {selectedCourseType}
             </button>
           </>
         )}

         {selectedSem && getProgramType() !== 'PHD' && (
           <>
             <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-1.5 md:mx-2 text-slate-300" strokeWidth={2} />
             <button onClick={() => setSelectedSpecificCourse(null)} className={`hover:text-blue-800 transition-colors ${!selectedSpecificCourse ? "text-blue-900 font-bold cursor-default pointer-events-none" : ""}`}>
               {selectedSem} Sem
             </button>
           </>
         )}

         {selectedSpecificCourse && (
           <>
             <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mx-1.5 md:mx-2 text-slate-300" strokeWidth={2} />
             <span className="text-blue-900 font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] md:max-w-xs">{selectedSpecificCourse}</span>
           </>
         )}
       </div>
       
       <main className={`flex-1 w-full ${selectedSem ? 'max-w-6xl' : 'max-w-5xl'} mx-auto px-1 sm:px-4 md:px-6 py-2 sm:py-4 md:py-6 flex flex-col relative w-full`}>
          <div className="flex-1">
             {selectedProgram && (
                 <button 
                   type="button"
                   onClick={goBack} 
                   className={`flex items-center justify-center w-10 h-10 rounded-full transition-all mb-4 md:mb-6 shadow-sm border hover:shadow active:scale-95 cursor-pointer select-none ${
                     darkMode 
                       ? 'bg-slate-800 border-slate-700 text-sky-400 hover:bg-slate-700/80 shadow-slate-900/40' 
                       : 'bg-white border-slate-200 text-[#0ea5e9] hover:bg-slate-50 shadow-slate-200'
                   }`}
                   aria-label="Go back"
                 >
                    <ArrowLeft className="w-5 h-5" />
                 </button>
              )}
             {!selectedProgram && (
                <div className="animate-in fade-in duration-500">
                   <div className="text-center mb-6 md:mb-10">
                    <motion.h2 
                      animate={{ scale: [1, 1.015, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="text-xl md:text-3xl font-bold text-slate-800 mb-2"
                    >
                      Academic Programs
                    </motion.h2>
                    <p className="text-slate-500">Select an academic program to view the syllabus (CBCS)</p>
                   </div>
                  
                  <div className="space-y-6 sm:space-y-10 md:space-y-12">
                     {[
                       { title: 'Undergraduate Programs (4 Year CBCS)', type: 'UG' },
                       { title: 'Postgraduate Programs (2 Year CBCS)', type: 'PG' },
                       { title: 'Doctorate Programs (Ph.D.)', type: 'PHD' },
                       { title: 'Post-Doctoral Programs (D.Litt. / D.Sc.)', type: 'POSTDOC' }
                     ].map(group => (
                       <div key={group.type}>
                         <div className="flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-6">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            <h3 className="text-xs sm:text-lg font-bold text-slate-700">{group.title}</h3>
                         </div>
                         <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                           {PROGRAMS.filter(p => p.type === group.type).map(p => (
                              <button
                                key={p.id}
                                onClick={() => setSelectedProgram(p.id)}
                                className="flex flex-col items-center justify-center p-2.5 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md active:scale-95 transition-all group duration-200"
                              >
                                  <div className={`w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${p.theme} shadow-sm mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform shrink-0`}>
                                      <p.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                                  </div>
                                  <span className="text-xs sm:text-lg md:text-xl font-bold text-slate-800 mb-0.5 sm:mb-1 text-center leading-tight">{p.title}</span>
                                  <span className="text-[8px] sm:text-xs text-slate-500 font-medium text-center leading-tight line-clamp-1">{p.subtitle}</span>
                              </button>
                           ))}
                         </div>
                       </div>
                     ))}
                  </div>
               </div>
            )}

            {selectedProgram && !selectedSubject && (
               <div className="animate-in slide-in-from-right-4 fade-in">
                  {getProgramType() === 'POSTDOC' && (
                      <PostdocRegulationsPortal />
                  )}
                  {getProgramType() === 'PHD' && (
                      <PhdRegulationsPortal />
                  )}
                  <div className="mb-6 md:mb-10 text-center">
                    <motion.h2 
                      animate={{ scale: [1, 1.015, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="font-bold text-slate-800 mb-2"
                      style={{ fontFamily: 'Georgia, serif', fontSize: '25px', lineHeight: '35px' }}
                    >
                      Faculty
                    </motion.h2>
                  </div>
                  
                  {Object.entries(SUBJECT_MAPPING[selectedProgram] || {}).map(([faculty, subjects]: any) => (
                      <div key={faculty} className="mb-10">
                         <h3 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-4 border-b border-slate-200 inline-block pb-1">{faculty}</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                             {subjects.map((sub: string) => {
                                 const details = SUBJECT_DETAILS[sub] || { icon: Book, color: 'text-slate-600', bg: 'bg-slate-100' };
                                 const Icon = details.icon;
                                 return (
                                     <button 
                                        key={sub} 
                                        onClick={() => setSelectedSubject(sub)}
                                        className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md active:scale-95 transition-all group duration-200"
                                     >
                                          <div className={`p-2 rounded-lg ${details.bg} ${details.color} group-hover:scale-110 transition-transform`}>
                                              <Icon className="w-5 h-5" />
                                          </div>
                                          <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors text-left leading-tight">{sub}</span>
                                     </button>
                                 )
                             })}
                         </div>
                      </div>
                  ))}
               </div>
            )}

            {selectedSubject && !selectedCourseType && (
               <div className="animate-in slide-in-from-right-4 fade-in">
                  <div className="text-center mb-6 md:mb-10">
                     <h4 className="text-xs font-bold text-[#328eab] uppercase tracking-[0.15em] mb-2 inline-block">Department of {selectedSubject}</h4>
                     <h2 className="text-xl md:text-3xl font-normal text-slate-800" style={{ fontFamily: 'Georgia, serif' }}>Course Category</h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-5 max-w-3xl mx-auto">
                      {currentCourseTypes().map((ct) => (
                          <button 
                             key={ct.id}
                             onClick={() => {
                                 setSelectedCourseType(ct.id);
                                 if (getProgramType() === 'PHD') {
                                    setSelectedSem('Coursework');
                                 }
                             }}
                             className="flex flex-col items-center justify-center p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md active:scale-95 transition-all group duration-200"
                          >
                              {ct.icon && (
                                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-50 mb-2 sm:mb-3 border border-slate-100 text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                                  <ct.icon className="w-5 h-5 sm:w-6 sm:h-6 outline-none" strokeWidth={1} />
                                </div>
                              )}
                              <span className="text-base sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{ct.id}</span>
                              <span className="text-[8px] sm:text-[9px] text-slate-500 font-medium text-center">{ct.subtitle}</span>
                          </button>
                      ))}
                  </div>
               </div>
            )}

            {selectedCourseType && !selectedSem && getProgramType() !== 'PHD' && (
               <div className="animate-in slide-in-from-right-4 fade-in">
                  <div className="text-center mb-6">
                    <motion.h2 
                      animate={{ scale: [1, 1.015, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="text-xl md:text-3xl font-bold text-slate-800"
                    >
                      Select Semester
                    </motion.h2>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">
                      Choose semester to view <span className="font-semibold text-blue-700">{selectedCourseType}</span> curriculum
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
                    {currentSemesters().map((sem) => {
                      const semInfo = getCourseTypeSemesterInfo(selectedCourseType);
                      const isAvailable = (() => {
                        if (!selectedCourseType) return true;
                        const subjectCourses = SYLLABUS_DATA?.[selectedProgram || ""]?.[selectedSubject || ""]?.[selectedCourseType]?.[sem];
                        if (subjectCourses && subjectCourses.length > 0) return true;
                        const commonCourses = COMMON_UG_COURSES?.[selectedCourseType]?.[sem];
                        if (commonCourses && commonCourses.length > 0) return true;
                        if (semInfo) return semInfo.activeSemesters.includes(sem);
                        return true;
                      })();

                      if (isAvailable) {
                        return (
                          <button
                            key={sem}
                            onClick={() => setSelectedSem(sem)}
                            className="flex flex-col items-center justify-between p-2.5 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border sm:border-2 border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md active:scale-95 transition-all duration-200 text-center group min-h-[90px] sm:min-h-[130px]"
                          >
                            <div className="my-auto py-1 sm:py-2">
                              <span className="text-base sm:text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-blue-600 group-hover:scale-105 inline-block transition-transform" style={{ fontFamily: "Georgia, serif" }}>
                                {sem}
                              </span>
                              <span className="block text-[9px] sm:text-xs font-semibold text-slate-500 mt-0.5">Semester</span>
                            </div>

                            <div className="w-full pt-1 sm:pt-2 border-t border-slate-100 flex items-center justify-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px] font-bold text-blue-600 group-hover:text-blue-700">
                              <span>View Syllabus</span>
                              <ChevronRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </button>
                        );
                      }

                      return (
                        <div
                          key={sem}
                          className="flex flex-col items-center justify-between p-2.5 sm:p-5 md:p-6 bg-slate-100/70 rounded-xl sm:rounded-2xl border border-dashed border-slate-300/80 opacity-40 grayscale cursor-not-allowed select-none transition-none shadow-none text-center min-h-[90px] sm:min-h-[130px]"
                          title={semInfo?.inactiveReason || "No syllabus scheduled in this semester"}
                        >
                          <div className="my-auto py-1 sm:py-2">
                            <span className="text-base sm:text-2xl md:text-3xl font-bold text-slate-400" style={{ fontFamily: "Georgia, serif" }}>
                              {sem}
                            </span>
                            <span className="block text-[9px] sm:text-xs text-slate-400 mt-0.5">Semester</span>
                          </div>

                          <div className="w-full pt-1 sm:pt-2 border-t border-slate-200/50 flex items-center justify-center text-[8px] sm:text-[10px] font-medium text-slate-400">
                            <span>{semInfo?.inactiveReason ? semInfo.inactiveReason.split("•")[0].trim() : "Not in this sem"}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
               </div>
            )}

            {/* Multi-course selection screen when semester has multiple electives */}
            {selectedCourseType && selectedSem && !selectedSpecificCourse && hasMultipleElectives() && (
               <div className="animate-in slide-in-from-right-4 fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                      {getSemesterElectiveCourses().map((course: any, idx: number) => (
                          <button
                              key={idx}
                              onClick={() => setSelectedSpecificCourse(course.courseTitle)}
                              className="flex flex-col items-start p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md active:scale-95 transition-all text-left group"
                          >
                              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                                  <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-blue-500" strokeWidth={1.5} />
                              </div>
                              <h3 className="font-bold text-slate-700 text-lg group-hover:text-blue-600 leading-tight mb-2">
                                  {course.courseTitle}
                              </h3>
                              <div className="flex items-center gap-2 mt-auto">
                                <span className="text-xs font-bold text-slate-950 bg-white border border-slate-300 dark:bg-white dark:text-slate-950 px-2.5 py-1 rounded-md shadow-2xs">Code: {course.courseCode}</span>
                                {course.credits && <span className="text-xs text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md font-semibold">{course.credits} Credits</span>}
                              </div>
                          </button>
                      ))}
                  </div>
               </div>
            )}
            
            {/* Full Syllabus View */}
            {selectedSem && (!hasMultipleElectives() || selectedSpecificCourse) && (
                <div className="animate-in slide-in-from-right-4 fade-in">
                  {(() => {
                      let defaultData: any[] = getSyllabusData();
                      const currentKey = getSyllabusKey(
                        selectedProgram,
                        selectedSubject,
                        selectedCourseType,
                        selectedSem,
                        selectedSpecificCourse
                      );
                      let data: any[] = adminDrafts[currentKey] || serverOverrides[currentKey] || defaultData;
                      
                      if (!data || data.length === 0) {
                          return (
                              <div className="text-center py-16 bg-white dark:bg-[#0b1629] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                  <AlertCircle className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">Curriculum Unavailable</h3>
                                  <p className="text-slate-500 text-sm">Syllabus data for this specific subject is currently being updated in the database.</p>
                                  {isAdmin ? (
                                      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                                          <button 
                                              type="button"
                                              onClick={handleOpenAddNewCourse} 
                                              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-md cursor-pointer"
                                          >
                                              <Plus className="w-4 h-4" />
                                              <span>Create Course for this Semester</span>
                                          </button>
                                          <button type="button" onClick={goBack} className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-xl hover:bg-slate-50 font-medium">Go Back</button>
                                      </div>
                                  ) : (
                                      <button type="button" onClick={goBack} className="mt-6 px-6 py-2.5 border border-slate-300 text-slate-600 rounded-xl hover:bg-slate-50 font-medium">Go Back</button>
                                  )}
                              </div>
                          );
                      }

                      return (
                          <div className="space-y-8">
                              {getProgramType() === 'PHD' && (
                                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
                                      <div className="flex gap-4">
                                          <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 select-none">
                                              <Scroll className="w-5 h-5" />
                                          </div>
                                          <div className="space-y-2 min-w-0 flex-1">
                                              <h4 className="font-bold text-slate-800 text-base" style={{ fontFamily: 'Georgia, serif' }}>
                                                  Lalit Narayan Mithila University (LNMU) Ph.D. regulations & exam scheme
                                              </h4>
                                              <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                                                  <p>
                                                      According to the uniform resolution of the Examination Board, Ph.D. coursework examinations comprise **two papers**, each carrying **100 marks** with a **2-hour duration**:
                                                  </p>
                                                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                                                      <li>
                                                          <strong className="text-slate-900">Paper-I (Research Methodology)</strong>: Common to all faculties and departments (100 Marks, 6 Credits). 
                                                          The official 7-unit syllabus framed by the university committee is detailed below.
                                                      </li>
                                                      <li>
                                                          <strong className="text-slate-900">Paper-II (Subject-Specific Course Core)</strong>: Subject-specific advanced research techniques and literature review developed by individual departments, fully integrated for all doctorate subjects.
                                                      </li>
                                                  </ul>
                                                  <p className="border-t border-amber-200/50 pt-2 text-[11px] text-slate-500 italic mt-2">
                                                      <strong>Coursework Passing Standard:</strong> Candidates must obtain a minimum of <strong>55% marks/grades</strong> in each paper to qualify for formal registration. Evaluation features joint external examiners under PAT guidelines.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              )}
                              {data.map((course: any, idx: number) => (
                                  <div key={idx} id={`course-card-${idx}`} className="bg-white dark:bg-[#0b1629] rounded-xl sm:rounded-2xl border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-md w-full transition-all">
                                      <div id={`course-header-${idx}`} className="p-4 sm:p-5 md:p-6 border-b-2 border-slate-300 dark:border-slate-700 bg-gradient-to-r from-slate-100 via-white to-blue-50/80 dark:from-[#0f1d33] dark:via-[#0c182b] dark:to-[#081220] flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-4 shadow-2xs">
                                          <div>
                                              <h3 id={`course-title-${idx}`} className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mb-2 sm:mb-2.5 tracking-tight leading-snug">{course.courseTitle}</h3>
                                              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-950 dark:bg-white dark:text-slate-950 text-xs sm:text-sm font-black rounded-lg border-2 border-slate-300 dark:border-white shadow-xs tracking-wider uppercase">Course Code: {course.courseCode}</span>
                                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white dark:bg-sky-400 dark:text-slate-950 text-xs sm:text-sm font-black rounded-lg border-2 border-blue-700 dark:border-sky-300 shadow-xs tracking-wide">{course.credits} Credits</span>
                                                   {course.marks && <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-slate-950 dark:bg-amber-400 dark:text-slate-950 text-xs sm:text-sm font-black rounded-lg border-2 border-amber-600 dark:border-amber-400 shadow-xs tracking-wide">{course.marks} Marks</span>}
                                              </div>
                                          </div>
                                          {isAdmin && (
                                              <div className="flex items-center gap-2 shrink-0">
                                                  <button
                                                      type="button"
                                                      onClick={() => handleOpenEditCourse(idx, course)}
                                                      className="px-3 py-1.5 rounded-lg border border-blue-400/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                                      title="Edit Course Title, Code, Credits"
                                                  >
                                                      <Pencil className="w-3.5 h-3.5" />
                                                      <span>Edit Course</span>
                                                  </button>
                                                  <button
                                                      type="button"
                                                      onClick={() => handleConfirmDeleteCourse(idx, course.courseTitle)}
                                                      className="px-3 py-1.5 rounded-lg border border-red-400/50 bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-300 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                                      title="Delete Course"
                                                  >
                                                      <Trash2 className="w-3.5 h-3.5" />
                                                      <span>Delete</span>
                                                  </button>
                                              </div>
                                          )}
                                      </div>
                                      
                                      <div className="p-1.5 sm:p-4 md:p-6">
                                          {course.isUnspecifiedInPdf || selectedCourseType === 'INT' ? (
                                              <div className="py-8 px-4 text-center space-y-4">
                                                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto shadow-sm">
                                                      <Briefcase className="w-7 h-7" />
                                                  </div>
                                                  <div className="max-w-xl mx-auto space-y-2">
                                                      <h4 className="text-lg font-bold text-slate-800">
                                                          Internship / Field Training Details
                                                      </h4>
                                                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                                          Further topic-wise syllabus or unit breakdowns for this paper are <strong className="text-slate-800">not prescribed in the official subject curriculum PDF</strong>.
                                                      </p>
                                                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 space-y-2.5 mt-4">
                                                          <p className="font-semibold text-slate-800 flex items-center gap-1.5 text-xs">
                                                              <Info className="w-4 h-4 text-blue-600 shrink-0" /> Departmental / Institutional Operational Guidelines:
                                                          </p>
                                                          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                                                              <li>Internship / Apprenticeship (4 Credits) is undertaken in the 5th Semester under the supervision of a faculty guide and designated organization mentor.</li>
                                                              <li>Students may undergo training in recognized botanical gardens, plant tissue culture laboratories, agricultural / forestry research centers, nurseries, or herbal & pharmaceutical industries.</li>
                                                              <li><strong>Evaluation Framework:</strong> Training Diary & Progress Logbook (30 Marks), Comprehensive Internship Report (50 Marks), and Viva-Voce Defense before the Board of Examiners (20 Marks).</li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : (
                                              <>
                                                  {course.courseOutcomes && course.courseOutcomes.length > 0 && (
                                                      <div id={`course-outcomes-${idx}`} className="mb-6 bg-slate-100/90 dark:bg-[#0f1d33] border-2 border-slate-300 dark:border-slate-700/80 rounded-xl p-4 sm:p-5 shadow-xs">
                                                          <h4 className="text-sm sm:text-base font-black text-slate-950 dark:text-white mb-3 flex items-center gap-2">
                                                              <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                                              Course Outcomes (COs)
                                                          </h4>
                                                          <ul className="space-y-2 text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-bold">
                                                              {course.courseOutcomes.map((co: string, coIdx: number) => (
                                                                  <li key={coIdx} className="flex items-start gap-2.5">
                                                                      <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-1.5 shrink-0" />
                                                                      <span className="leading-relaxed">{co}</span>
                                                                  </li>
                                                              ))}
                                                          </ul>
                                                      </div>
                                                  )}
                                                  {course.theory && (
                                                      <div id={`course-theory-${idx}`} className="mb-6 sm:mb-8 last:mb-0">
                                                          <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5 px-0.5">
                                                              <div className="flex items-center gap-2.5">
                                                                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
                                                                  <span className="font-black text-slate-950 dark:text-white text-lg sm:text-xl tracking-tight">Theory ({course.theory.credits} Credits)</span>
                                                              </div>
                                                              <span className="text-xs text-slate-950 dark:text-slate-950 font-black bg-white dark:bg-white px-3 py-1 rounded-full border-2 border-slate-300 dark:border-white shadow-xs">
                                                                  {course.theory.units.length} {course.theory.units.length === 1 ? 'Unit' : 'Units'} (Open)
                                                              </span>
                                                          </div>
                                                          <div className="space-y-1.5 sm:space-y-2">
                                                              {course.theory.units.map((unit: any, uIdx: number) => (
                                                                  <UnitAccordion 
                                                                      key={uIdx} 
                                                                      unit={unit} 
                                                                      unitIdx={uIdx}
                                                                      programId={selectedProgram} 
                                                                      subject={selectedSubject} 
                                                                      courseTitle={course.courseTitle} 
                                                                      onShareAI={handleShareAI} 
                                                                      defaultOpen={true}
                                                                      isAdmin={isAdmin}
                                                                      onEditUnit={() => handleOpenEditUnit(idx, uIdx, unit.title)}
                                                                      onDeleteUnit={() => handleConfirmDeleteUnit(idx, uIdx, unit.title)}
                                                                      onAddTopic={() => handleOpenAddTopic(idx, uIdx, unit.title)}
                                                                      onEditTopic={(tIdx: number) => handleOpenEditTopic(idx, uIdx, tIdx, unit.topics[tIdx])}
                                                                      onDeleteTopic={(tIdx: number) => handleConfirmDeleteTopic(idx, uIdx, tIdx, unit.topics[tIdx])}
                                                                  />
                                                              ))}
                                                          </div>
                                                          {isAdmin && (
                                                              <div className="mt-3">
                                                                  <button
                                                                      type="button"
                                                                      onClick={() => handleOpenAddUnit(idx)}
                                                                      className="w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-amber-500/60 hover:border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                                                                  >
                                                                      <Plus className="w-4 h-4" />
                                                                      <span>Add New Unit to {course.courseTitle}</span>
                                                                  </button>
                                                              </div>
                                                          )}
                                                      </div>
                                                  )}

                                                  {course.practical && (
                                                      <PracticalAccordion 
                                                          onShareAI={handleShareAI}
                                                          practical={course.practical}
                                                          programId={selectedProgram}
                                                          subject={selectedSubject}
                                                          courseTitle={course.courseTitle}
                                                          isAdmin={isAdmin}
                                                          onAddExperiment={() => handleOpenAddPracticalTopic(idx)}
                                                          onEditExperiment={(tIdx: number) => handleOpenEditPracticalTopic(idx, tIdx, course.practical.topics[tIdx])}
                                                          onDeleteExperiment={(tIdx: number) => handleConfirmDeletePracticalTopic(idx, tIdx, course.practical.topics[tIdx])}
                                                      />
                                                  )}

                                                  {course.suggestedBooks && course.suggestedBooks.length > 0 && (
                                                      <div id={`course-readings-${idx}`} className="mt-6 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700/80 rounded-xl p-4 sm:p-5 shadow-xs">
                                                          <h4 className="text-sm sm:text-base font-black text-amber-950 dark:text-amber-300 mb-3 flex items-center gap-2">
                                                              <BookType className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                                                              Suggested Readings / Reference Books
                                                          </h4>
                                                          <ul className="space-y-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-bold">
                                                              {course.suggestedBooks.map((book: string, bIdx: number) => (
                                                                  <li key={bIdx} className="flex items-start gap-2.5">
                                                                      <span className="font-black text-amber-800 dark:text-amber-400 shrink-0">{bIdx + 1}.</span>
                                                                      <span className="leading-relaxed">{book}</span>
                                                                  </li>
                                                              ))}
                                                          </ul>
                                                      </div>
                                                  )}
                                              </>
                                          )}
                                      </div>
                                  </div>
                              ))}

                              {isAdmin && (
                                  <div className="pt-2 pb-2 flex justify-center">
                                      <button
                                          type="button"
                                          onClick={handleOpenAddNewCourse}
                                          className="w-full max-w-md py-3.5 px-6 rounded-2xl border-2 border-dashed border-blue-500/70 hover:border-blue-500 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm text-sm"
                                      >
                                          <Plus className="w-5 h-5 text-blue-500" />
                                          <span>Add Another Course / Paper to this Semester</span>
                                      </button>
                                  </div>
                              )}
                              
                              <div className="flex justify-center gap-4 py-4">
                                  <button onClick={goBack} className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-xl hover:bg-slate-50 font-medium transition-colors shadow-sm font-sans">
                                      Back
                                  </button>
                                  <button onClick={resetToType} className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium shadow-sm transition-colors font-sans">
                                      Explore Another Course
                                  </button>
                              </div>
                          </div>
                      );
                  })()}
               </div>
            )}
          </div>
       </main>

       {/* Application Footer */}
       <footer className="mt-16 bg-black/40 backdrop-blur-sm border-t border-white/10 font-sans">
         {/* Main Footer Content */}
         <div id="app-footer-container" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-8 items-start">
             {/* Brand & University Info */}
             <div className="space-y-1.5 sm:space-y-3">
               <div className="flex items-center gap-2 sm:gap-3">
                 <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-yellow-500 to-yellow-300 flex items-center justify-center text-black font-black shadow-md shadow-yellow-500/20 shrink-0">
                   <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                 </div>
                 <div>
                   <h3 className="text-xs sm:text-base font-bold text-white tracking-wide">LNMU Academic Portal</h3>
                   <p className="text-[9px] sm:text-xs text-yellow-400 font-medium">NEP 2020 & CBCS Curriculum</p>
                 </div>
               </div>
               <p className="text-[10px] sm:text-xs text-white/90 leading-tight sm:leading-relaxed">
                 Comprehensive academic curriculum, regulations, course structures, and credit distribution repository for <span className="text-yellow-400 font-medium">Lalit Narayan Mithila University</span>, Darbhanga.
               </p>
             </div>

             {/* Quick Navigation / Coverage */}
             <div className="space-y-1.5 sm:space-y-3">
               <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5 sm:gap-2">
                 <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                 Academic Frameworks
               </h4>
               <ul className="text-[10px] sm:text-xs text-white/90 space-y-1 sm:space-y-1.5">
                 <li className="flex items-center gap-1.5 sm:gap-2">
                   <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                   <span>4-Year UG CBCS <span className="text-yellow-300">(B.A, B.Sc, B.Com - 160 Credits)</span></span>
                 </li>
                 <li className="flex items-center gap-1.5 sm:gap-2">
                   <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                   <span>2-Year PG Semester CBCS <span className="text-yellow-300">(M.A, M.Sc, M.Com)</span></span>
                 </li>
                 <li className="flex items-center gap-1.5 sm:gap-2">
                   <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                   <span>Ph.D. PAT & Course Work Regulations</span>
                 </li>
                 <li className="flex items-center gap-1.5 sm:gap-2">
                   <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                   <span>Post-Doctoral (D.Litt. / D.Sc.) Research Regulations</span>
                 </li>
               </ul>
             </div>

             {/* Legal Notice & Contact */}
             <div className="space-y-1.5 sm:space-y-3">
               <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5 sm:gap-2">
                 <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                 Contact & Inquiries
               </h4>
               <p className="text-[10px] sm:text-xs text-white/90 leading-tight sm:leading-relaxed">
                 For syllabus updates, technical feedback, or queries, contact:
               </p>
               <a 
                 href="mailto:support@lnmu.ac.in" 
                 className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-black/40 hover:bg-black/60 border border-yellow-500/40 text-yellow-400 hover:text-yellow-300 text-[10px] sm:text-xs font-mono transition-colors shadow-sm"
               >
                 <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" />
                 <span className="text-white font-medium">support@lnmu.ac.in</span>
               </a>
             </div>
           </div>

           {/* Disclaimer Callout Box with Red warning border & badge, White text, and Yellow highlights */}
           <div className="mt-3.5 sm:mt-8 p-2 sm:p-4 rounded-lg sm:rounded-xl bg-red-950/40 border sm:border-2 border-red-600/70 text-white flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 shadow-md sm:shadow-lg shadow-red-950/30">
             <div className="p-1 sm:p-2 rounded-md sm:rounded-lg bg-red-600/30 border border-red-500/40 text-red-400 shrink-0">
               <ShieldAlert className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-red-400" />
             </div>
             <div className="space-y-0.5 sm:space-y-1 text-[9px] sm:text-xs">
               <div className="flex items-center gap-1.5 sm:gap-2">
                 <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-black text-[8px] sm:text-[10px] tracking-wider uppercase">
                   Warning
                 </span>
                 <p className="font-bold text-yellow-400 tracking-wide uppercase text-[9px] sm:text-xs">
                   Important Legal Notice & Disclaimer
                 </p>
               </div>
               <p className="text-white font-normal leading-tight sm:leading-relaxed text-[9px] sm:text-xs">
                 All rights reserved by <a href="mailto:support@lnmu.ac.in" className="font-bold text-yellow-400 underline underline-offset-2 hover:text-yellow-300">support@lnmu.ac.in</a>. Any type of piracy, unauthorized distribution, or unlawful copying is a <span className="font-bold text-red-400 underline decoration-red-500">punishable offense</span> under relevant copyright laws.
               </p>
             </div>
           </div>

           {/* Bottom Bar */}
           <div className="mt-3.5 sm:mt-8 pt-2.5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[9px] sm:text-xs text-white">
             <div className="flex items-center gap-1.5 sm:gap-2">
               <Copyright className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
               <span className="text-white">
                 {new Date().getFullYear()} LNMU Syllabus Portal. All rights reserved by <a href="mailto:support@lnmu.ac.in" className="text-yellow-400 font-semibold hover:underline">support@lnmu.ac.in</a>
               </span>
             </div>
             <div className="flex items-center gap-2 sm:gap-4">
               <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-950/60 border border-red-600/50 text-[9px] sm:text-[11px] font-semibold text-red-300">
                 <ShieldAlert className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400" />
                 Anti-Piracy Protected
               </span>
               <span className="text-yellow-400 font-medium text-[9px] sm:text-xs">Lalit Narayan Mithila University</span>
             </div>
           </div>
         </div>
       </footer>
       <AnimatePresence>
         {aiToast && (
           <motion.div 
             initial={{ opacity: 0, y: 50, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
             className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-gradient-to-br from-[#0c1a30] via-[#081220] to-[#040810] text-white p-4 rounded-2xl shadow-2xl border border-slate-700/80 font-sans flex flex-col gap-3 backdrop-blur-md"
           >
             <div className="flex items-start justify-between gap-3">
               <div className="flex items-center gap-2.5 min-w-0">
                 <div className="p-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 rounded-xl shrink-0 shadow-inner">
                   <Share2 className="w-5 h-5" />
                 </div>
                 <div className="min-w-0 flex-1">
                   <div className="flex items-center gap-2">
                     <p className="font-bold text-xs uppercase text-blue-400 tracking-wider">Share Study Topic</p>
                     <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono font-semibold border border-emerald-500/30">
                       Ready to Paste
                     </span>
                   </div>
                   <p className="text-[11px] text-slate-300 font-mono truncate mt-0.5">
                     LNMU &rarr; {PROGRAMS.find(p => p.id === aiToast.programId)?.title || aiToast.programId} &rarr; {aiToast.subject}
                   </p>
                 </div>
               </div>
               <button 
                 type="button" 
                 onClick={() => setAiToast(null)} 
                 className="text-slate-400 hover:text-white p-1 rounded-lg text-xs cursor-pointer hover:bg-white/10 transition-colors"
                 title="Close notification"
               >
                 ✕
               </button>
             </div>

             {/* Prompt Text Container with Instant Copy Button */}
             <div className="bg-slate-900/80 border border-slate-700/60 rounded-xl p-3 text-xs text-slate-200">
               <p className="font-mono text-[11px] text-slate-300 leading-relaxed break-words select-all max-h-24 overflow-y-auto pr-1">
                 {aiToast.promptText}
               </p>
               <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                 <span className="truncate pr-2 font-sans">Topic: {aiToast.topic}</span>
                 <button
                   type="button"
                   onClick={() => {
                     safeCopyToClipboard(aiToast.promptText);
                     setToastCopied(true);
                     setTimeout(() => setToastCopied(false), 2000);
                   }}
                   className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold text-[10px] tracking-wide transition-all cursor-pointer ${
                     toastCopied 
                       ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm' 
                       : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 active:scale-95'
                   }`}
                   title="Click to copy prompt to clipboard"
                 >
                   {toastCopied ? <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} /> : <Copy className="w-3 h-3" />}
                   <span>{toastCopied ? 'COPIED TO CLIPBOARD' : 'COPY TO CLIPBOARD'}</span>
                 </button>
               </div>
             </div>

             {/* Instant Launch Options */}
             <div className="flex flex-col gap-1.5 pt-0.5">
               <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
                 <span className="uppercase tracking-wider">Direct AI Study Launch:</span>
               </div>
               <div className="grid grid-cols-3 gap-1.5">
                 <button
                   type="button"
                   onClick={() => {
                     safeCopyToClipboard(aiToast.promptText);
                     window.open(`https://chatgpt.com/?q=${encodeURIComponent(aiToast.promptText)}`, '_blank');
                   }}
                   className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                   title="Open directly in ChatGPT"
                 >
                   <Sparkles className="w-3 h-3" />
                   <span>ChatGPT</span>
                 </button>
                 <button
                   type="button"
                   onClick={() => {
                     safeCopyToClipboard(aiToast.promptText);
                     window.open(`https://gemini.google.com/app`, '_blank');
                   }}
                   className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 rounded-lg text-blue-300 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                   title="Open Google Gemini"
                 >
                   <Bot className="w-3 h-3" />
                   <span>Gemini</span>
                 </button>
                 <button
                   type="button"
                   onClick={() => {
                     safeCopyToClipboard(aiToast.promptText);
                     window.open(`https://www.perplexity.ai/search?q=${encodeURIComponent(aiToast.promptText)}`, '_blank');
                   }}
                   className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-cyan-600/15 hover:bg-cyan-600/25 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                   title="Open in Perplexity AI"
                 >
                   <ExternalLink className="w-3 h-3" />
                   <span>Perplexity</span>
                 </button>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>

       {/* Admin Login Modal */}
       <AdminLoginModal
         isOpen={showAdminModal}
         onClose={() => setShowAdminModal(false)}
         onSuccess={handleAdminLoginSuccess}
       />

       {/* Admin Edit Modals */}
       <EditTopicModal
         isOpen={editTopicModal.isOpen}
         onClose={() => setEditTopicModal(prev => ({ ...prev, isOpen: false }))}
         onSave={handleSaveTopicFromModal}
         initialText={editTopicModal.initialText}
         isNew={editTopicModal.isNew}
         unitTitle={editTopicModal.unitTitle}
         darkMode={darkMode}
       />

       <EditUnitModal
         isOpen={editUnitModal.isOpen}
         onClose={() => setEditUnitModal(prev => ({ ...prev, isOpen: false }))}
         onSave={handleSaveUnitFromModal}
         initialTitle={editUnitModal.initialTitle}
         isNew={editUnitModal.isNew}
         darkMode={darkMode}
       />

       <EditCourseModal
         isOpen={editCourseModal.isOpen}
         onClose={() => setEditCourseModal(prev => ({ ...prev, isOpen: false }))}
         onSave={handleSaveCourseFromModal}
         initialData={editCourseModal.initialData}
         isNew={editCourseModal.isNew}
         darkMode={darkMode}
       />

       <ConfirmDeleteModal
         isOpen={confirmDeleteModal.isOpen}
         onClose={() => setConfirmDeleteModal(prev => ({ ...prev, isOpen: false }))}
         onConfirm={confirmDeleteModal.onConfirm}
         title={confirmDeleteModal.title}
         message={confirmDeleteModal.message}
         darkMode={darkMode}
       />
    </div>
  );
}
