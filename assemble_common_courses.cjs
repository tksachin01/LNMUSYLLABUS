const fs = require('fs');

const sec1 = JSON.parse(fs.readFileSync('src/data/sec1_data.json', 'utf8'));
const sec2 = JSON.parse(fs.readFileSync('src/data/sec2_data.json', 'utf8'));
const sec3 = JSON.parse(fs.readFileSync('src/data/sec3_data.json', 'utf8'));
const vac1 = JSON.parse(fs.readFileSync('src/data/vac1_data.json', 'utf8'));
const vac2 = JSON.parse(fs.readFileSync('src/data/vac2_data.json', 'utf8'));
const aec = JSON.parse(fs.readFileSync('src/data/aec_data.json', 'utf8'));

// Common INT and RP courses
const intCourses = {
  "5th": [
    {
      courseTitle: "Internship / Apprenticeship / Industry Project - Stage I",
      courseCode: "INT-1",
      credits: "2",
      marks: "100",
      evaluationScheme: "Continuous Organization/Industry Mentor Evaluation: 50 Marks | College Faculty Guide Evaluation & Viva-Voce: 50 Marks",
      courseObjectives: [
        "To provide students with experiential learning by working in industries, research labs, corporates, government or non-government organizations.",
        "To bridge the gap between classroom theoretical curriculum and professional job-readiness requirements.",
        "To develop workplace ethics, technical skills, teamwork, and problem-solving ability in real-world environments."
      ],
      courseOutcomes: [
        "CO1: Apply undergraduate academic knowledge to solve practical organizational problems.",
        "CO2: Demonstrate workplace professional ethics, time management, and communication skills.",
        "CO3: Execute assigned technical/managerial tasks in a collaborative team setting.",
        "CO4: Compile structured internship logs, technical reports, and present findings to an evaluation committee."
      ],
      theory: {
        credits: "0",
        units: [
          {
            unitNumber: 1,
            title: "Module 1: Orientation, Workplace Safety and Ethics",
            topics: [
              "Industry structure, organizational hierarchy, reporting lines, and professional workplace conduct",
              "Occupational health and safety norms, data security, non-disclosure agreements (NDAs), and intellectual property guidelines",
              "Goal setting: Identification of internship objectives, milestones, and weekly deliverables in consultation with industry mentor"
            ]
          },
          {
            unitNumber: 2,
            title: "Module 2: Field Experience, Task Execution and Data Collection",
            topics: [
              "Hands-on execution of daily assigned tasks, workflow management, and operational problem solving",
              "Primary and secondary data collection, laboratory experimentation, software coding, or marketing outreach as per sector",
              "Maintenance of a daily work diary/logbook signed periodically by the external supervisor"
            ]
          },
          {
            unitNumber: 3,
            title: "Module 3: Report Preparation, Presentation and Viva-Voce",
            topics: [
              "Structuring of the formal internship report (Title page, Certificate of completion, Company profile, Methodology, Work accomplished, Learnings & Recommendations)",
              "Preparation of PowerPoint presentation highlighting key achievements, case studies, and learnings",
              "Defense before the institutional board of examiners during the end-semester viva-voce"
            ]
          }
        ]
      },
      practical: {
        title: "Field Internship Duration: Minimum 120 Hours (4 Weeks)",
        topics: [
          "Field/laboratory/office-based practical work in approved host organization",
          "Weekly progress review meetings with designated internal faculty supervisor",
          "Submission of final bound Internship Project Report along with employer feedback certificate"
        ],
        evaluation: [
          { component: "Industry Mentor Evaluation (Attendance, Discipline, Task Execution)", marks: 50 },
          { component: "Comprehensive Internship Report Review by Faculty Committee", marks: 30 },
          { component: "Viva-Voce and Oral Presentation Defense", marks: 20 }
        ]
      },
      suggestedBooks: [
        "UGC Guidelines on Apprenticeship/Internship Embedded Degree Programmes (2020).",
        "AICTE Internship Policy: Guidelines & Procedures (2018).",
        "Sweitzer, H. F. & King, M. A. - The Successful Internship: Transformation and Empowerment in Experiential Learning. Cengage Learning."
      ]
    }
  ]
};

const rpCourses = {
  "7th": [
    {
      courseTitle: "Research Project / Dissertation - Stage I (Methodology & Proposal)",
      courseCode: "RP-1",
      credits: "4",
      marks: "100",
      evaluationScheme: "Continuous Progress & Synopsis Assessment: 30 Marks | End-Term Progress Report & Defense: 70 Marks",
      courseObjectives: [
        "To introduce 4-year UG Honours with Research students to advanced scientific and academic research methodologies.",
        "To train students in literature review, gap identification, problem formulation, and research design.",
        "To prepare students to formulate a formal research proposal with ethical considerations and research tools."
      ],
      courseOutcomes: [
        "CO1: Conduct exhaustive review of literature using peer-reviewed indexed research databases (Scopus, Web of Science, PubMed, Shodhganga).",
        "CO2: Formulate well-defined research questions, testable hypotheses, and structured objectives.",
        "CO3: Select appropriate research methodologies, experimental protocols, sampling techniques, and analytical tools.",
        "CO4: Present and defend a sound Research Synopsis / Proposal before the Departmental Research Committee (DRC)."
      ],
      theory: {
        credits: "1",
        units: [
          {
            unitNumber: 1,
            title: "Unit 1: Foundations of Research and Problem Identification",
            topics: [
              "Meaning, objectives, and types of research: Qualitative, Quantitative, Experimental, Descriptive, Exploratory, and Empirical",
              "Identification of research problem, literature review strategies, synthesis matrix, and locating research gaps",
              "Formulation of research questions, objectives, theoretical frameworks, and research hypotheses"
            ]
          },
          {
            unitNumber: 2,
            title: "Unit 2: Research Design, Sampling and Instrumentation",
            topics: [
              "Research designs: Experimental, quasi-experimental, observational, cross-sectional, and longitudinal",
              "Sampling designs: Probability vs Non-probability sampling methods, sample size calculation",
              "Data collection tools: Questionnaire design, interviews, laboratory protocols, standardization of instruments, reliability and validity"
            ]
          },
          {
            unitNumber: 3,
            title: "Unit 3: Research Ethics, Plagiarism and Synopsis Writing",
            topics: [
              "Research ethics: Informed consent, biosafety, animal ethics, data fabrication, falsification, and plagiarism (UGC guidelines)",
              "Reference management tools: Mendeley, Zotero, EndNote; Citation styles (APA, MLA, IEEE, Chicago)",
              "Structure of a formal Research Proposal / Synopsis: Introduction, Literature review, Methodology, Timeline, and Expected outcomes"
            ]
          }
        ]
      },
      practical: {
        title: "Research Laboratory Work & Proposal Defense (3 Credits)",
        topics: [
          "Systematic literature retrieval using academic search engines and reference manager software",
          "Pilot experimentation / Preliminary field surveys and data validation",
          "Preparation and oral defense of the Research Synopsis before the Departmental Research Committee"
        ],
        evaluation: [
          { component: "Continuous Faculty Guide Assessment & Logbook", marks: 30 },
          { component: "Evaluation of Written Research Synopsis", marks: 40 },
          { component: "Synopsis Defense Seminar and Viva-Voce", marks: 30 }
        ]
      },
      suggestedBooks: [
        "Kothari, C. R. & Garg, Gaurav (2019). Research Methodology: Methods and Techniques, 4th ed. New Age International.",
        "Creswell, John W. & Creswell, J. David (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. SAGE.",
        "Kumar, Ranjit (2019). Research Methodology: A Step-by-Step Guide for Beginners. SAGE Publications."
      ]
    }
  ],
  "8th": [
    {
      courseTitle: "Research Project / Dissertation - Final Stage & Thesis",
      courseCode: "RP-2",
      credits: "6",
      marks: "100",
      evaluationScheme: "Continuous Dissertation Work by Guide: 30 Marks | External Thesis Evaluation: 40 Marks | Final Thesis Viva-Voce Defense: 30 Marks",
      courseObjectives: [
        "To enable students to execute an independent research investigation under faculty guidance.",
        "To develop proficiency in data analysis, statistical interpretation, and empirical reasoning.",
        "To write, submit, and defend a comprehensive academic Dissertation / Thesis meeting publication standards."
      ],
      courseOutcomes: [
        "CO1: Independently execute experimental/empirical investigations following approved research design.",
        "CO2: Perform rigorous data analysis using modern software packages (SPSS, R, Python, OriginLab, MATLAB, NVivo).",
        "CO3: Synthesize results, draw scientific conclusions, discuss limitations, and propose future research avenues.",
        "CO4: Compile a high-quality Dissertation adhering to formatting standards, and defend findings in an open viva-voce."
      ],
      theory: {
        credits: "0",
        units: [
          {
            unitNumber: 1,
            title: "Module 1: Experimental Execution and Data Generation",
            topics: [
              "Conducting full-scale laboratory experiments, computational simulations, or extensive field surveys as per approved synopsis",
              "Rigorous recording of experimental observations, calibration of instruments, and replication of results",
              "Data cleaning, coding, missing value treatment, and secure data archiving"
            ]
          },
          {
            unitNumber: 2,
            title: "Module 2: Advanced Statistical Analysis and Interpretation",
            topics: [
              "Parametric and non-parametric hypothesis testing (t-test, ANOVA, Chi-square, Mann-Whitney U, Kruskal-Wallis)",
              "Multivariate analysis: Multiple regression, factor analysis, cluster analysis, PCA, and time-series modeling",
              "Visual data representation: High-resolution graphs, heatmaps, box plots, and error-bar diagrams"
            ]
          },
          {
            unitNumber: 3,
            title: "Module 3: Thesis Writing, Plagiarism Check and Defense",
            topics: [
              "Structure of the Dissertation: Title page, Certificates, Acknowledgements, Abstract, Table of Contents, Introduction, Literature Review, Materials & Methods, Results, Discussion, Conclusion, References, and Appendices",
              "Plagiarism verification via anti-plagiarism software (Turnitin / Urkund / DrillBit) ensuring similarity index within UGC permissible limits (< 10%)",
              "Preparation of research manuscript for submission to peer-reviewed indexed journals and final public viva defense"
            ]
          }
        ]
      },
      practical: {
        title: "Full-Time Research Project Work (6 Credits - 180+ Hours)",
        topics: [
          "Hands-on execution of research experiments, data interpretation, and thesis drafting",
          "Bi-weekly progress monitoring and research manuscript preparation with guide",
          "Submission of final bound hardbound copies of Dissertation along with plagiarism certificate"
        ],
        evaluation: [
          { component: "Continuous Research Work & Faculty Guide Evaluation", marks: 30 },
          { component: "Evaluation of Dissertation Thesis by External Examiner", marks: 40 },
          { component: "Public Viva-Voce Defense before Board of Examiners", marks: 30 }
        ]
      },
      suggestedBooks: [
        "Booth, Wayne C. et al. (2016). The Craft of Research, 4th ed. University of Chicago Press.",
        "Day, Robert A. & Gastel, Barbara (2012). How to Write and Publish a Scientific Paper. Cambridge University Press.",
        "UGC Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions Regulations (2018)."
      ]
    }
  ]
};

const COMMON_UG_COURSES = {
  "AEC": aec,
  "SEC": {
    "1st": sec1,
    "2nd": sec2,
    "3rd": sec3
  },
  "VAC": {
    "1st": vac1,
    "2nd": vac2
  },
  "MDC": {
    "1st": [],
    "2nd": [],
    "3rd": []
  },
  "INT": intCourses,
  "RP": rpCourses
};

const fileContent = `// Auto-generated LNMU Common UG Courses (CBCS NEP 2020 Curriculum)
// Detailed syllabus data for AEC (Sem 1-4), SEC (Sem 1-3: 21 Courses), VAC (Sem 1-2: 20 Courses), INT (Sem 5), and RP (Sem 7-8)

export interface CourseUnit {
  unitNumber: number;
  title: string;
  topics: string[];
}

export interface PracticalEvaluation {
  component: string;
  marks: number;
}

export interface CourseDetail {
  courseTitle: string;
  courseCode: string;
  credits: string;
  marks: string;
  evaluationScheme: string;
  courseObjectives: string[];
  courseOutcomes: string[];
  theory: {
    credits: string;
    units: CourseUnit[];
  };
  practical?: {
    title: string;
    topics: string[];
    evaluation?: PracticalEvaluation[];
  };
  suggestedBooks: string[];
}

export const COMMON_UG_COURSES: Record<string, Record<string, CourseDetail[]>> = ${JSON.stringify(COMMON_UG_COURSES, null, 2)};
`;

fs.writeFileSync('src/data/ugCommonCoursesData.ts', fileContent);
console.log('Successfully generated src/data/ugCommonCoursesData.ts!');
