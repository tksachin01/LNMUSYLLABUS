/**
 * @file ugCommonCoursesData.ts
 * @description LNMU Common Undergraduate Courses Database (CBCS NEP 2020 Curriculum).
 * 
 * Contains detailed course outlines, theory units, practical evaluation criteria,
 * and reference texts for:
 * - AEC: Ability Enhancement Compulsory Courses (Semesters 1-4)
 * - SEC: Skill Enhancement Courses (Semesters 1-3, comprising 21 specialized vocational modules)
 * - VAC: Value Added Courses (Semesters 1-2, comprising 20 ethical & civic education modules)
 * - INT: Internship & Apprenticeship Guidelines (Semester 5)
 * - RP: Research Project & Dissertation Regulations (Semesters 7-8)
 */

/**
 * Individual Unit within an academic course outline.
 */
export interface CourseUnit {
  unitNumber: number;
  title: string;
  topics: string[];
}

/**
 * Component evaluation scheme for continuous assessment or laboratory work.
 */
export interface PracticalEvaluation {
  component: string;
  marks: number;
}

/**
 * Complete course curriculum specification adhering to LNMU & UGC standards.
 */
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

export const COMMON_UG_COURSES: Record<string, Record<string, CourseDetail[]>> = {
  "AEC": {
    "1st": [
      {
        "courseTitle": "English Communication",
        "courseCode": "AEC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To build foundational competence in English language communication for academic and professional spheres.",
          "To enhance listening, speaking, reading, and writing (LSRW) skills.",
          "To train students in basic grammar, vocabulary, comprehension, and formal correspondence."
        ],
        "courseOutcomes": [
          "CO1: Apply foundational grammar, correct sentence syntax, and active vocabulary in speech and writing.",
          "CO2: Comprehend complex academic and non-academic prose texts accurately.",
          "CO3: Draft formal letters, official emails, notices, and structured summaries.",
          "CO4: Deliver clear, effective oral presentations with correct pronunciation and intonation."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Theory of Communication and Language Skills",
              "topics": [
                "Nature, process, channels, and barriers of effective communication",
                "Verbal vs Non-verbal communication: Body language, paralanguage, eye contact, and listening skills",
                "Essentials of English grammar: Subject-verb agreement, tenses, active/passive voice, direct/indirect speech, prepositions and common errors"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Reading Comprehension and Vocabulary Enrichment",
              "topics": [
                "Reading strategies: Skimming, scanning, intensive and extensive reading",
                "Comprehension passages from prose, science, and humanities with analytical questions",
                "Vocabulary development: Synonyms, antonyms, prefixes, suffixes, collocations, and idioms"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Functional and Applied Writing",
              "topics": [
                "Paragraph writing with topic sentence and supporting details",
                "Note-making and summarizing techniques (Linear and Diagrammatic)",
                "Official correspondence: Formal letters (enquiry, complaint, leave), curriculum vitae (CV) and cover letters",
                "Digital writing: Professional email writing etiquettes and drafting notices/memos"
              ]
            }
          ]
        },
        "practical": {
          "title": "Language Lab & Oral Communication Practice",
          "topics": [
            "Pronunciation practice: Phonetic symbols, word stress, rhythm, and intonation drills in language lab",
            "Classroom group discussions, extempore speaking, and mock telephonic conversations",
            "Audio listening comprehension tests and real-time lecture note-taking exercises"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Lab Assignments",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Oral Communication & Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Quirk, R. & Greenbaum, S. - A University Grammar of English. Longman.",
          "Raman, Meenakshi & Sharma, Sangeeta - Technical Communication: Principles and Practice. Oxford University Press.",
          "Hewings, Martin - Advanced English Grammar. Cambridge University Press.",
          "Kaul, Asha - Effective Business Communication. PHI Learning."
        ]
      },
      {
        "courseTitle": "हिन्दी संप्रेषण (Hindi Communication)",
        "courseCode": "AEC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "हिन्दी भाषा के व्यावहारिक एवं संप्रेषणात्मक रूप से विद्यार्थियों को अवगत कराना।",
          "मौखिक एवं लिखित अभिव्यक्ति के विविध आयामों में दक्षता प्रदान करना।",
          "कार्यालयी हिन्दी, अनुवाद एवं पारिभाषिक शब्दावली का ज्ञान देना।"
        ],
        "courseOutcomes": [
          "CO1: संप्रेषण के विविध तत्वों, प्रकारों और बाधाओं को समझ सकेंगे।",
          "CO2: हिन्दी वर्तनी, व्याकरण और मानक भाषा के नियमों का शुद्ध प्रयोग कर सकेंगे।",
          "CO3: कार्यालयी पत्र-व्यवहार, टिप्पण, प्रारूपण और संक्षेपण की कला में प्रवीण होंगे।",
          "CO4: व्यावहारिक अनुवाद और जनसंचार माध्यमों के लिए प्रभावी लेखन कर सकेंगे।"
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: संप्रेषण की अवधारणा एवं मौखिक अभिव्यक्ति",
              "topics": [
                "संप्रेषण: परिभाषा, स्वरूप, प्रक्रिया, प्रकार (मौखिक एवं अमौखिक) एवं 7C नियम",
                "मौखिक संप्रेषण के रूप: वार्तालाप, भाषण कला, वाद-विवाद, समूह चर्चा (GD), साक्षात्कार",
                "उच्चारण और स्वर-तंत्र: मानक हिन्दी का उच्चारण, बलाघात, अनुतान एवं विराम"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: भाषा-ज्ञान, वर्तनी एवं संपादन",
              "topics": [
                "मानक हिन्दी वर्तनी के नियम (केंद्रीय हिन्दी निदेशालय के अनुसार)",
                "शब्द-संपदा: पर्यायवाची, विलोम, तत्सम-तद्भव, मुहावरे और लोकोक्तियाँ",
                "वाक्य रचना और सामान्य अशुद्धियाँ (कारक, लिंग, वचन, अन्विति संबंधी)",
                "संक्षेपण (Precis writing) एवं पल्लवन (Expansion of idea)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: कार्यालयी एवं व्यावहारिक लेखन",
              "topics": [
                "कार्यालयी पत्र-व्यवहार: सरकारी पत्र, अर्ध-सरकारी पत्र, ज्ञापन, परिपत्र, अधिसूचना",
                "टिप्पणी लेखन (Noting) एवं प्रारूपण (Drafting)",
                "प्रशासनिक पारिभाषिक शब्दावली",
                "व्यावहारिक अनुवाद (अंग्रेजी से हिन्दी और हिन्दी से अंग्रेजी)"
              ]
            }
          ]
        },
        "practical": {
          "title": "मौखिक एवं लिखित अभ्यास सत्र",
          "topics": [
            "समसामयिक विषय पर समूह चर्चा एवं 3 मिनट का आशु-भाषण (Extempore)",
            "सरकारी एवं अर्ध-सरकारी पत्रों का मानक प्रारूप में लेखन अभ्यास",
            "गद्यांशों का संक्षेपण एवं अंग्रेजी प्रशासनिक अनुच्छेदों का हिन्दी अनुवाद"
          ],
          "evaluation": [
            {
              "component": "सतत मूल्यांकन एवं पत्र-लेखन पोर्टफोलियो",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "तिवारी, भोलानाथ - हिन्दी भाषा और संप्रेषण, वाणी प्रकाशन",
          "पांडेय, ओमप्रकाश - प्रयोजनमूलक हिन्दी, विश्वविद्यालय प्रकाशन, वाराणसी",
          "गौड़, विनोद - व्यावहारिक हिन्दी और रचना, साहित्य भवन",
          "झा, हरिश्चंद्र - राजभाषा हिन्दी और अनुवाद, राजकमल प्रकाशन"
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Environmental Science",
        "courseCode": "AEC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To develop comprehensive awareness about ecological balance and environmental protection.",
          "To understand natural resource management, biodiversity conservation, and pollution control.",
          "To sensitize students towards climate change, environmental legislation, and sustainable living."
        ],
        "courseOutcomes": [
          "CO1: Explain the structure and function of ecosystems and energy flow dynamics.",
          "CO2: Evaluate causes, consequences, and mitigation of air, water, soil, noise, and plastic pollution.",
          "CO3: Appreciate biodiversity value, threats, and conservation strategies (In-situ & Ex-situ).",
          "CO4: Apply environmental laws, EIA, disaster mitigation, and sustainable practices in daily life."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Ecosystems and Natural Resources",
              "topics": [
                "Multidisciplinary nature of environmental studies, Scope and importance, Concept of sustainable development",
                "Ecosystems: Structure, functions, producers, consumers, decomposers, Food chains, Food webs, Ecological pyramids, Energy flow",
                "Forest, Grassland, Desert, and Aquatic ecosystems (Ponds, Rivers, Wetlands)",
                "Renewable and Non-renewable resources: Forest, Water, Mineral, Food, and Energy resources (Solar, Wind, Bio-energy)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Biodiversity and Conservation",
              "topics": [
                "Levels of biodiversity: Genetic, Species, and Ecosystem diversity; Biogeographical zones of India",
                "Biodiversity hot spots (Western Ghats, Indo-Burma, Himalayas, Sundaland), India as a mega-diversity nation",
                "Threats to biodiversity: Habitat loss, poaching of wildlife, human-wildlife conflicts, invasive alien species",
                "Conservation strategies: In-situ (National Parks, Wildlife Sanctuaries, Biosphere Reserves) & Ex-situ (Botanical Gardens, Zoos, Cryopreservation, Gene Banks)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Environmental Pollution, Policies and Climate Change",
              "topics": [
                "Causes, effects, and control measures of Air, Water, Soil, Noise, Thermal, and Nuclear pollution; Solid waste management",
                "Global environmental issues: Climate change, Global warming, Ozone layer depletion, Acid rain, Carbon footprint",
                "Environmental legislation in India: Environment Protection Act 1986, Air Act 1981, Water Act 1974, Wildlife Protection Act 1972, Forest Conservation Act 1980",
                "Environmental movements in India: Chipko, Appiko, Silent Valley, Narmada Bachao; Environmental Ethics and Human Population growth"
              ]
            }
          ]
        },
        "practical": {
          "title": "Field Work & Environmental Project",
          "topics": [
            "Field visit to a local polluted site (River/Pond/Industrial area/Urban municipal dumpsite) and water/air quality analysis",
            "Study of common local plants, insects, and birds in campus ecosystem",
            "Preparation of an Environmental Action Plan for campus sustainability (Rainwater harvesting / Solar audit / Zero-waste drive)"
          ],
          "evaluation": [
            {
              "component": "Field Report & Continuous Assessment",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Project Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Bharucha, Erach - Textbook of Environmental Studies for Undergraduate Courses. Universities Press.",
          "Kaushik, Anubha & Kaushik, C. P. - Perspectives in Environmental Studies. New Age International.",
          "Odum, E. P. - Fundamentals of Ecology. Cengage Learning.",
          "Sharma, P. D. - Ecology and Environment. Rastogi Publications."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Disaster Risk Management",
        "courseCode": "AEC-3",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To provide basic conceptual understanding of natural and human-induced disasters.",
          "To teach disaster risk reduction (DRR), vulnerability assessment, and emergency preparedness.",
          "To familiarize students with institutional mechanisms in India (NDMA, SDMA, NDRF) and community-based disaster management."
        ],
        "courseOutcomes": [
          "CO1: Distinguish between Hazard, Vulnerability, Capacity, Risk, and Disaster.",
          "CO2: Analyze the causes, vulnerability profiles, and impacts of floods, earthquakes, cyclones, droughts, and industrial accidents.",
          "CO3: Execute disaster response phases: Early Warning, Evacuation, Search & Rescue, First Aid, and Rehabilitation.",
          "CO4: Contribute to Community-Based Disaster Risk Reduction (CBDRR) plans and institutional standard operating procedures."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Fundamentals of Disasters and Hazard Profiles",
              "topics": [
                "Concepts and definitions: Hazard, Risk, Vulnerability, Capacity, Disaster, Resilience",
                "Classification of Disasters: Natural (Earthquakes, Tsunamis, Floods, Droughts, Cyclones, Landslides, Heatwaves) & Anthropogenic (Industrial leaks, Chemical explosions, Nuclear accidents, Forest fires, Stampedes, Epidemics)",
                "Disaster vulnerability profile of India and Bihar (North Bihar Flood vulnerabilities, Seismic Zones IV & V, Drought prone belts)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Disaster Management Cycle and Planning",
              "topics": [
                "Disaster Management Cycle: Pre-disaster (Mitigation, Preparedness, Prevention), During disaster (Search, Rescue, Evacuation, Emergency relief), Post-disaster (Rehabilitation, Reconstruction, Psycho-social support)",
                "Early Warning Systems (EWS), Space technology and GIS in disaster forecasting",
                "Disaster Risk Reduction (DRR) frameworks: Sendai Framework (2015-2030), Prime Minister's 10-Point Agenda on DRR"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Institutional Framework and Community Preparedness",
              "topics": [
                "Disaster Management Act 2005: Structure and role of NDMA, SDMA, DDMA, NDRF, SDRF, and Civil Defence",
                "Community-Based Disaster Risk Management (CBDRM): Village Disaster Management Committees, School Safety Plans",
                "Emergency First Aid, CPR, Fire safety protocols, and Survival kit preparation"
              ]
            }
          ]
        },
        "practical": {
          "title": "Mock Drill & Disaster Risk Assessment Practicum",
          "topics": [
            "Participation in campus Earthquake / Fire evacuation mock drills",
            "Hazard, Vulnerability and Capacity Assessment (HVCA) mapping for a chosen local neighborhood or village",
            "Demonstration of basic First Aid, bandaging, stretcher improvisation, and basic life support"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Drill Logbook",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & First Aid Demonstration",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "National Disaster Management Authority (NDMA) - Guidelines and SOPs. Government of India.",
          "Singh, S. R. (2016). Disaster Management. Oxford University Press.",
          "Coppola, D. P. (2015). Introduction to International Disaster Management. Elsevier.",
          "Modh, Satish. Managing Natural Disasters. MacMillan Publishers."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "NCC / NSS / Social Services & Community Development",
        "courseCode": "AEC-4",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To develop civic consciousness, leadership, discipline, and community development skills.",
          "To engage undergraduate youth in constructive nation-building activities and community service.",
          "To promote national unity, secularism, gender sensitivity, and health awareness."
        ],
        "courseOutcomes": [
          "CO1: Demonstrate leadership, ethical values, and social responsibility in community action.",
          "CO2: Mobilize community awareness for health, literacy, child protection, and sanitation.",
          "CO3: Collaborate with local administration and NGOs during emergencies and civic campaigns.",
          "CO4: Execute community development projects and maintain structured field activity logs."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Leadership and Nation Building",
              "topics": [
                "Youth in nation-building: Role of NCC, NSS, and voluntary youth organizations",
                "Leadership dynamics: Communication skills, decision making, conflict resolution, integrity, team building",
                "National integration: Harmony, unity in diversity, social cohesion, and eradication of social evils"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Social Services and Community Engagement",
              "topics": [
                "Literacy drives, adult education, digital literacy in rural communities",
                "Public health campaigns: Immunization, maternal health, prevention of communicable diseases, blood donation",
                "Gender sensitization, prevention of female foeticide (Beti Bachao Beti Padhao), child rights, and anti-dowry awareness",
                "Environmental stewardship: Tree plantation drives (Van Mahotsav), water body conservation, zero plastic advocacy"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Rural Development and Project Management",
              "topics": [
                "Panchayati Raj Institutions and rural grassroots governance",
                "Planning community service projects: Baseline surveys, stakeholder consultations, resource mobilization, and impact assessment",
                "Documentation, reporting, and media advocacy for community causes"
              ]
            }
          ]
        },
        "practical": {
          "title": "Community Outreach Field Project",
          "topics": [
            "Minimum 40 hours of active community field work / village camp / literacy drive / blood donation camp organization",
            "Survey and documentation of a government welfare scheme implementation in a local area",
            "Preparation and defense of a bound Community Service Project Report"
          ],
          "evaluation": [
            {
              "component": "Continuous Field Supervisor Evaluation & Logbook",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Community Project Defense & Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Ministry of Youth Affairs & Sports - Guidelines for Community Development and Youth Programmes.",
          "Directorate General NCC - Cadet Handbook for Social Service and Community Development.",
          "Rawat, H. K. (2013). Sociology: Basic Concepts. Rawat Publications."
        ]
      }
    ]
  },
  "SEC": {
    "1st": [
      {
        "courseTitle": "Advance Spreadsheet Tools",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To enable the students to use Excel for advanced data analysis",
          "To equip the students with automation skills on excel",
          "To enable the students to use excel for informed decision making."
        ],
        "courseOutcomes": [
          "CO1: Make meaningful representations of data in the form of charts and pivot tables.",
          "CO2: Draw analysis on data using spreadsheets and use interpretation to make decisions.",
          "CO3: Generate word documents with appropriate formatting, layout, proofing.",
          "CO4: Manage data for generating queries, forms and reports in a database."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Excel Advanced Techniques",
              "topics": [
                "Templates, Efficiency, and Risk (Standard Deviation, Variance, and Coefficient of Variation), Data Validation",
                "*Functions and Power functions, Array Formulae (Frequency Distribution, mode.mult, mode.sngl), Tables, Advanced Range Names",
                "What-if-analysis: Goal-seek, Data tables, and Scenario Manager",
                "Data analysis ToolPak: Descriptive Statistics, Moving averages, Histogram, Covariance, correlation, and Regression analysis (only for projection); solver add in",
                "Problem Solving using Solver (optimal product mix, workforce scheduling, transportation, capital budgeting, financial planning)",
                "Integrating excel with other tools: MS word, outlook, PowerPoint, Access, Power BI"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Excel Interactivity and Automation",
              "topics": [
                "Index and Match, Offset, Dynamic Charting, Database functions, Text functions, and Error functions: IfError, IsError, Aggregate, Circular Reference, Formula Auditing, Floating-Point Errors",
                "Form Controls (Button, Combo, Check box, Spinner, List, Option), Visual Basic (only basic)",
                "Recording Macros, Absolute and relative macros, editing macros, Use of spinner buttons and command buttons",
                "Sub Procedure, Function Procedure (creating New Functions)",
                "Working with Loops: Do_while loop, For_Next loop; Creating User Forms: Message Box, Input Box; If_Then_Else"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Introduction to VBA",
              "topics": [
                "Conditional Formatting, Charts that Inspire (Waterfall, Column, Line, Combo, Thermometer, Scatter, Histogram)",
                "Sheets, Sparklines, Graphics Tricks and Techniques",
                "Worksheet Automation using Macros: Absolute and relative macros, editing macros",
                "Creating new functions using macros, Use of spinner buttons and command buttons"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Data Analysis and Decision-Making",
              "topics": [
                "Working with External Data, Advanced Uses of PivotTables, PowerPivot, Reporting with PowerPivot, Power query, Dashboard",
                "Creating a spreadsheet in the area of: Loan and Lease statement; Ratio Analysis; Payroll Accounting; Capital Budgeting (NPV & IRR), Portfolio Management, Breakeven analysis, and Sensitivity analysis",
                "Operations Management: Constraint, Forecasting & Trend Analysis optimization, Assignment Problems; Depreciation Accounting (Single Method)",
                "Graphical representation of data; Frequency distribution and its statistical parameters; Correlation and Regression Analysis"
              ]
            }
          ]
        },
        "practical": {
          "title": "Practical Exercises & Lab Application (3 Hours/Week)",
          "topics": [
            "Creation of dynamic financial models, loan amortization schedules, and multi-variable scenario dashboards",
            "Automating data extraction and worksheet formatting using VBA macros and user forms",
            "Statistical regression and trend projections using Excel Data Analysis ToolPak",
            "PowerPivot relational modeling and interactive KPI reporting"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Practical Logbook",
              "marks": 30
            },
            {
              "component": "End-Term Practical Lab Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Presentation",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Alexander, M. & Kusleika, D. - Excel 2016 Power Programming with VBA, Wiley.",
          "Sengupta, C. - Financial Analysis and Modelling Using Excel and VBA, 2nd ed., Wiley Student Edition.",
          "Winston, W. - MS Excel 2016, Data Analysis & Business Modelling, PHI.",
          "Winston, W. L. (2017) - Microsoft Excel 2016 Data Analysis and Business Modelling, Microsoft Press.",
          "Griffiths, D. - Microsoft Excel Practical Formulae: From Basic Data Analysis to Advanced Formulae Manipulation."
        ]
      },
      {
        "courseTitle": "Basic IT Tools",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To enable students develop IT skills that are a pre-requisite in today's work environment.",
          "To equip them with basic computing skills that will enhance their employability in general.",
          "To enable the student to analyse and present information in a meaningful manner."
        ],
        "courseOutcomes": [
          "CO1: Use word-processor to generate documents with appropriate formatting, layout, review and referencing.",
          "CO2: Manage data in worksheets and workbooks and analyze it using spreadsheet functions and inbuilt formulas.",
          "CO3: Draw analysis on data using spreadsheets to make decisions and generate charts & pivot tables.",
          "CO4: Manage data in database tables and use the same for generating queries, forms and reports."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Spreadsheets",
              "topics": [
                "Concept of worksheets and workbooks, creating, opening, closing and saving workbooks, moving, copying, inserting, deleting and renaming worksheets",
                "Working with multiple worksheets and workbooks, controlling worksheet views, cell naming via name box, define name",
                "Exchanging data using clipboard, object linking and embedding; Page setup, margins, headers/footers, printing formula",
                "Absolute, relative and mixed cell referencing, formula error handling",
                "Inbuilt functions: mathematical, statistical, text, lookup, information, logical, database, date & time, basic financial"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Data Analysis in Spreadsheets",
              "topics": [
                "Consolidating worksheets and workbooks using formulae and data consolidate command",
                "Choosing chart types, data points and series, formatting chart elements, sparklines",
                "Analyzing data using pivot tables: formatting, sorting, filtering, calculated fields, pivot charts and reporting",
                "Introduction to recording and execution of macros"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Word Processing",
              "topics": [
                "Creating and saving documents, views, paragraph styles, indents, tabs, alignment, borders and shading",
                "Page setup: margins, orientation, headers/footers, endnotes/footnotes, section breaks",
                "Working with tables: layout, sorting, graphic insertion, table math, text-to-table conversion",
                "Columns, indexes, table of contents, spell check, custom dictionaries, thesaurus, find/replace",
                "Bookmarks, cross-referencing, hyperlinking, bibliography compilation; Mail Merge: data source, filters, conditional merge"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Databases",
              "topics": [
                "Database terminology, objects, creating tables, field properties, data types, primary keys, validation rules, indexing",
                "Relationships & referential integrity, joins, sorting and filtering",
                "Queries: Query by design & wizard (Select, Make Table, Append, Delete, Cross Tab, Parameterized, Duplicate, Unmatched)",
                "Forms: bound/unbound controls, subforms, combo/list boxes; Reports: grouping, headers/footers, subreports"
              ]
            }
          ]
        },
        "practical": {
          "title": "Hands-on Practical & Lab Exercises",
          "topics": [
            "Word processing: Mail merge, complex table formatting, and research report structure generation",
            "Spreadsheets: Multi-sheet consolidation, nested lookup formulas, and Pivot Table reports",
            "Database management: Creating relational tables, multi-table queries, and printable report generation"
          ],
          "evaluation": [
            {
              "component": "Continuous Lab Assessment & Assignments",
              "marks": 30
            },
            {
              "component": "End-Term Practical Lab Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Swinford, E., Dodge, M., Couch, A., Melton, B. A. (2013). Microsoft Office Professional 2013. O'Reilly Media.",
          "Wang, W. (2018). Office 2019 For Dummies. Wiley.",
          "Lambert, J. (2019). Microsoft Word 2019 Step by Step. Pearson Education.",
          "Jelen, B. (2013). Excel 2013 Charts and Graphs. Que.",
          "Alexander, M., Kusleika, R. (2018). Access 2019 Bible. Wiley."
        ]
      },
      {
        "courseTitle": "Creative Writing",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To build creative writing skills of students in the main modes of creative writing viz poetry, fiction, non-fiction and drama.",
          "To inculcate practical skills in students by mapping their creative talent for employability.",
          "To perform hands-on activities to develop creative skills through practical sessions."
        ],
        "courseOutcomes": [
          "CO1: Be sensitive to the texture of literary language and develop craft in creative writing.",
          "CO2: Express ideas through poetry, short story, and biography.",
          "CO3: Induce an understanding of the relationship between individual and society.",
          "CO4: Gain skills in drama writing, performance, proofreading, editing, and publishing."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Creative Writing",
              "topics": [
                "Introduction to Creative Writing: Meaning, Importance",
                "Imagination & Writing: Peer-interaction, Activities on Imagination",
                "Tropes, Motifs and Figures: Learning through media and literature, Discussion on findings",
                "Craft of Writing: Figures of Speech, Word Play, Character Creation",
                "Character Creation: Dialogue Enaction, Character Analysis across gender, social background, ethnicity"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Close Reading & Editing",
              "topics": [
                "Close Reading: Analysis and Interpretation of literary works in small groups",
                "Practice Writing Sessions on theme exploration",
                "Proofreading & Editing: Practical sessions on manuscript correction and editing"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Genres of Creative Writing & Publishing",
              "topics": [
                "Steps of Creative Writing: Pre-Writing, Writing, Post-Writing / Final Draft",
                "Poetry: Tone, rhyme, metre, free verse and stanzas",
                "Fiction: Elements of short story, novella, novel; character arc, plot structure",
                "Non-Fiction: Biographies, autobiographies, memoirs, travel narratives",
                "Drama: Elements of drama (plot, character, climax, verbal and non-verbal cues)",
                "Submission & Publication: Traditional and digital publishing platforms, submission guidelines"
              ]
            }
          ]
        },
        "practical": {
          "title": "Creative Writing Workshop & Portfolio",
          "topics": [
            "Poetry and short story drafting workshop with peer feedback",
            "Writing book reviews, film reviews, and media columns",
            "Dramatic script writing and rehearsed dialogue reading",
            "Compilation and submission of an original creative writing portfolio"
          ],
          "evaluation": [
            {
              "component": "Continuous Creative Portfolio & Workshop Work",
              "marks": 30
            },
            {
              "component": "End-Term Creative Submission Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Reading Presentation",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Dev, Anjana Neira et al. (2008). Creative Writing: A Beginners' Manual. Pearson, New Delhi.",
          "Morley, David (2007). The Cambridge Introduction to Creative Writing. Cambridge University Press."
        ]
      },
      {
        "courseTitle": "Communication in Everyday Life",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To lay down a basic foundation for communication that is a part of a student's everyday life.",
          "To inculcate fundamentals with the aim to enhance listening, speaking and writing skills.",
          "To hone practical skills that can be used in day-to-day affairs."
        ],
        "courseOutcomes": [
          "CO1: Improve mediation skills and foster social understanding.",
          "CO2: Enhance active listening and audio-book comprehension.",
          "CO3: Deliver structured oral presentations, participate in group discussions, and handle interviews.",
          "CO4: Master reading comprehension and written communication (essays, letters, reports)."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Theory of Communication",
              "topics": [
                "Meaning, Features, Uses, Cycle, Feedback, Advantages",
                "Barriers to Communication and overcoming strategies",
                "7 C's of Effective Communication"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Listening Skills",
              "topics": [
                "Netiquettes of spoken and audio communication",
                "Audio-book Listening & Group Discussions",
                "Note-taking techniques during lectures and conversations"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Speaking Skills",
              "topics": [
                "Oral Presentation: Audio-Visual aids, Audience & Feedback, Delivery, Handling Questions",
                "Group Discussion: Culture, History, Current Affairs, Society",
                "Public Speaking: Public Speech, Extempore delivery",
                "Interview: Personal, Conversational, Public"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Reading Skills",
              "topics": [
                "Close Reading techniques for critical understanding",
                "Skimming for core arguments and themes",
                "Scanning for factual data and references"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Unit 5: Writing Skills & Interpersonal Communication",
              "topics": [
                "Summarising and Paraphrasing, Note-making",
                "Essays: Expository Essay, Descriptive Essay, Narrative Essay",
                "Letter Writing: Formal Letter, Informal Letter",
                "Reports: Incident Report, Newspaper Report, Organisational Report",
                "Textual Analysis & Interpretation; Monologues and Dialogues"
              ]
            }
          ]
        },
        "practical": {
          "title": "Interactive Communication Practice Sessions",
          "topics": [
            "Classroom group discussions and mock personal interviews",
            "Extempore speaking and audio-visual presentations",
            "Drafting official letters, incident reports, and summaries"
          ],
          "evaluation": [
            {
              "component": "Continuous Practice & Classroom Participation",
              "marks": 30
            },
            {
              "component": "End-Term Written & Practical Exam",
              "marks": 50
            },
            {
              "component": "Oral Presentation Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Chaudhary, Shoma (2006). Understanding Interviews. Tehelka.",
          "Kumar, Dinesh (2006). Understanding Values, Our Muddled Generation. The Hindu.",
          "Fluency in English II (2015), ed. Varma & Sanyal. Oxford University Press, New Delhi.",
          "Fluency in English I (2015), ed. Varma, Sanyal & Dev. Oxford University Press."
        ]
      },
      {
        "courseTitle": "Public Speaking in English Language & Leadership",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To impart leadership skills along with adequate communication skills to curate strong leaders.",
          "To create leaders with ethics and resilience in industry and social fields.",
          "To curate employable leadership skills through a hands-on practical approach."
        ],
        "courseOutcomes": [
          "CO1: Master public speaking as a catalyst for leadership development.",
          "CO2: Lead in academic, social, and corporate spheres.",
          "CO3: Cultivate an assertive, ethical, and critical mindset.",
          "CO4: Excel in speech writing, delivery, TED talks, and Mock Parliament / MUNs."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Effective Communication",
              "topics": [
                "Features, Advantages & Disadvantages of Communication",
                "Importance of Active Listening in Leadership",
                "Oral communication: Meaning, Features & Importance",
                "Reading Public Speech: Analyzing historic speeches, word play, vocabulary"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Public Speaking Dynamics",
              "topics": [
                "What is Speech?, Overcoming Fear of Public Speaking, Language of Public Speech",
                "Drafting a Public Speech (Reading, research, writing, Fact check, Re-writing, Delivery)",
                "3P's of Public Speaking (Preparation, Practice, Performance)",
                "Rhetoric Skills, Informative & Persuasive Speaking, Concluding with Power",
                "Types: Physical & Online; Political, Organisational, Educational & Motivational; TED Talks, Media Speaking",
                "Listening in groups, Analysis of famous speeches, Classroom speech writing"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Leadership Skills and Innovations",
              "topics": [
                "Leadership Meaning, Features & Importance; Historical Overview",
                "Leadership in Academic Life, Corporate Space, Public Life, Social and Political Leadership",
                "Audience analysis, Audience Engagement & Influencing through Leadership",
                "Execution & Delivery: Body Language & Paralanguage via ICT",
                "Competence development: Intra-class Speech Competitions, Extempore, Group Discussion"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Leadership Ethics & Mock Assemblies",
              "topics": [
                "Ethics in Public Speaking & Leadership",
                "Mock Parliament / Model United Nations (MUNs)",
                "Interactive Speaking Workshops"
              ]
            }
          ]
        },
        "practical": {
          "title": "Speech Delivery Lab & Mock Parliament Simulations",
          "topics": [
            "Delivering timed persuasive, motivational, and extempore speeches",
            "Participating in Mock Parliament proceedings and MUN committees",
            "Video-recorded speech review for body language and vocal modulation"
          ],
          "evaluation": [
            {
              "component": "Continuous Speech Performance & Participation",
              "marks": 30
            },
            {
              "component": "End-Term Speech Drafting & Delivery Examination",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Parliamentary Debate Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Beebe, S. A., & Beebe, S. J. (2012). Public Speaking: An Audience-Centred Approach, 8th ed. Pearson.",
          "Cardon, P. (2014). Business Communication: Developing Leaders for a Networked World. McGraw-Hill.",
          "Jaffe, C. I. (2013). Public Speaking: Concepts & Skills for a Diverse Society, 7th ed. Cengage Learning."
        ]
      },
      {
        "courseTitle": "Digital Marketing",
        "courseCode": "SEC-1",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To acquaint students with integration between traditional and digital marketing concepts.",
          "To familiarize students with tools and techniques used for digital marketing decisions."
        ],
        "courseOutcomes": [
          "CO1: Understand digital marketing concepts and consumer value journeys.",
          "CO2: Formulate content, email, and social media marketing campaigns.",
          "CO3: Execute SEO audits, on-page optimization, and paid search advertising (SEM).",
          "CO4: Analyze web performance metrics to optimize ROI."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Marketing in the Digital World",
              "topics": [
                "Digital marketing: Concept, Features, Difference between traditional and digital marketing",
                "Channels: Intent Based (SEO, Search Ads), Brand Based (Display Ads), Community Based (Social Media), Affiliate, Email, Content, Mobile",
                "Customer Value Journey: 5As Framework, Ozone 03 Concept Key, Online consumer traits"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Content and Email Marketing",
              "topics": [
                "Content Marketing: Strategy development, storytelling, distribution channels",
                "Email Marketing: Types of emails, list segmentation, automated workflows, best practices"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Social Media Marketing and Display Marketing",
              "topics": [
                "Social Media Marketing: Building strategy across Facebook, LinkedIn, YouTube, Instagram",
                "Display Advertising: Working process, targeting, format, budget, ad copy and creative design"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Search Engine Marketing & SEO",
              "topics": [
                "Working of Search Engines, SERP positioning, DMI's 5P Customer Search Insights Model",
                "SEO: On-page (keyword research, site structure, meta tags, sitemaps, structured data) & Off-page (backlink building, white-hat techniques)",
                "SEM / Google Ads: PPC process, campaign setup, bidding strategies, ad extensions, quality score"
              ]
            }
          ]
        },
        "practical": {
          "title": "Digital Marketing Campaign Lab",
          "topics": [
            "Setting up simulated Google Ads campaigns and keyword research",
            "Conducting website SEO audits and content optimization",
            "Creating social media ad copies, display banners, and email newsletters"
          ],
          "evaluation": [
            {
              "component": "Continuous Campaign Portfolio & Assignments",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Campaign Defense Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Dodson, I. (2016). The Art of Digital Marketing. Wiley.",
          "Kotler, P., Kartajaya, H., & Setiawan, I. (2016). Marketing 4.0. Wiley.",
          "Ryan, D. (2016). Understanding Digital Marketing. Kogan Page.",
          "Maity, M. Internet Marketing: A Practical Approach. Oxford University Press.",
          "Gupta, S. Digital Marketing. McGraw Hill."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Big Data Analysis",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To Understand the Big Data Platform and its Uses",
          "Provide an overview of Apache Hadoop",
          "Provide HDFS Concepts and Interfacing with HDFS",
          "Provide hands on Hadoop Eco System and understand Spark framework"
        ],
        "courseOutcomes": [
          "CO1: Identify Big Data and its Business Implications.",
          "CO2: List and operate components of Hadoop and Hadoop Eco-System.",
          "CO3: Access and process data on distributed file systems (HDFS).",
          "CO4: Manage job execution in Hadoop environment and develop Big Data Solutions using Spark."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Fundamentals of Big Data Analysis",
              "topics": [
                "Data Storage and Analysis, Characteristics of Big Data (5 V's), Big Data Analytics",
                "Typical Analytical Architecture, Requirement for new analytical architecture",
                "Challenges in Big Data Analytics - Need of big data frameworks"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Hadoop Framework",
              "topics": [
                "Hadoop: Requirement of Hadoop Framework, Design principle of Hadoop - Comparison with other system",
                "Hadoop Components: Hadoop 1 vs Hadoop 2, Hadoop Daemon's - HDFSCommands",
                "Map Reduce Programming: I/O formats, Map side join, Reduce Side Join, Secondary sorting, Pipelining Map Reduce jobs"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: HDFS (Hadoop Distributed File System)",
              "topics": [
                "The Design of HDFS, HDFS Concepts, Command Line Interface, Hadoop file system interfaces",
                "Data flow, Data Ingest with Flume and Scoop and Hadoop archives",
                "Hadoop I/O: Compression, Serialization, Avro and File-Based Data structures"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Spark Framework and Data Analysis with Spark Shell",
              "topics": [
                "Introduction to GPU Computing, CUDA Programming Model, CUDA API, Simple Matrix Multiplication in CUDA",
                "CUDA Memory Model, Shared Memory Matrix Multiplication, Additional CUDA API Features",
                "Writing Spark Application - Spark Programming in Scala, Python, R, Java - Application Execution"
              ]
            }
          ]
        },
        "practical": {
          "title": "Big Data Practical Exercises (3 Hours/Week)",
          "topics": [
            "Downloading and installing Hadoop; Understanding different Hadoop modes, Startup scripts, Configuration files",
            "Hadoop Implementation of file management tasks: Adding files/directories, retrieving files and Deleting files",
            "Run a basic word count MapReduce program and analyze time-temperature statistics",
            "Implement Matrix Multiplication and K-means clustering using Map Reduce",
            "Basic R programming: Word cloud text mining and K-means clustering"
          ],
          "evaluation": [
            {
              "component": "Continuous Lab Performance & Record",
              "marks": 30
            },
            {
              "component": "End-Term Practical Lab Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Acharya, S. & Chellappan, S. (2015). Big Data Analytics. Wiley.",
          "Frampton, M. (2015). Mastering Apache Spark. Packt Publishing.",
          "White, T. (2015). Hadoop: The Definitive Guide, 4th ed. O'Reilly.",
          "Pentreath, N. (2015). Machine Learning with Spark. Packt Publishing.",
          "Guller, M. (2015). Big Data Analytics with Spark. Apress.",
          "Miner, D. & Shook, A. (2012). Map Reduce Design Patterns. O'Reilly."
        ]
      },
      {
        "courseTitle": "Beginners Course to Calligraphy",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To teach students the art of Calligraphy.",
          "To make students better at handwriting and embellish the scripts.",
          "To help the students communicate with creativity."
        ],
        "courseOutcomes": [
          "CO1: Be skilled in calligraphy scripts (Classical and Modern).",
          "CO2: Use flourishing to develop artistic writing and aesthetic composition.",
          "CO3: Complete creative calligraphy project and manuscript designs.",
          "CO4: Acquire practical design skills for commercial and entrepreneurial ventures."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Calligraphy",
              "topics": [
                "Definition, History of calligraphy, Calligraphy at the Global level",
                "Types of Calligraphy: Classical Calligraphy & Modern Calligraphy",
                "Practice Sessions: Introducing students to Calligraphy and its types through images, videos and animations"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Introduction to the Writing Tools",
              "topics": [
                "Tool Kit, Different Types of Pens, Different Types of Nibs, Different Types of Brushes, Different Types of Inks",
                "Practice Sessions: Display of Writing items, Discussion on the usage of different types of pens, nibs and brushes through hands-on activities"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Foundation to Calligraphy",
              "topics": [
                "How to write letters?, Majuscules, Miniscules, Numbers, Learning Strokes",
                "Sans Serif B-point, Celtic, Italian Script, Roman Script, Gothic Script",
                "Practice Sessions: Learning and practicing strokes - Upstroke, Downstroke, Overturn, Underturn, Compound curve, Oval, Ascending loop",
                "Hands-on activities and Assessment on Sans Serif B-point, Celtic, Italian Script, Roman Script, Gothic Script, Flourishing"
              ]
            }
          ]
        },
        "practical": {
          "title": "Calligraphy Practice & Studio Project",
          "topics": [
            "Fundamental stroke exercises (upstrokes, downstrokes, ovals, loops)",
            "Script lettering in Gothic, Celtic, and Roman letterforms",
            "Flourishing and manuscript layout design project"
          ],
          "evaluation": [
            {
              "component": "Continuous Lettering Portfolio",
              "marks": 30
            },
            {
              "component": "End-Term Practical Studio Exam",
              "marks": 50
            },
            {
              "component": "Portfolio Display Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Suepsuan, P. A. (2021). Start Calligraphy The Right way to write. Independently published.",
          "C., & Co., T. P. (2020). Modern Calligraphy Set for Beginners. Paige Tate & Co."
        ]
      },
      {
        "courseTitle": "Introduction to Cloud Computing (AWS)",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To learn about cloud computing through Amazon Web Services (AWS) platform.",
          "To learn about AWS cloud concepts, services, security and architecture to build an application."
        ],
        "courseOutcomes": [
          "CO1: Understand cloud computing platforms and architecture.",
          "CO2: Differentiate between on-premises, hybrid-cloud, and all-in cloud models.",
          "CO3: Describe the basic global infrastructure of the AWS Cloud.",
          "CO4: Understand and deploy core AWS services including compute, network, databases, and storage."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Cloud Concepts & Global Infrastructure",
              "topics": [
                "Introduction to cloud computing, Creating AWS account, AWS Management Console",
                "AWS Documentation overview, Availability Zones, Regions, Edge Locations",
                "AWS Global Infrastructure and Shared Responsibility Security Model"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Compute in the Cloud",
              "topics": [
                "Amazon EC2 (Elastic Compute Cloud): Instance types, AMIs, Key pairs, Security Groups",
                "Launching, configuring, and connecting to EC2 Linux/Windows instances",
                "Elastic Load Balancing and Auto Scaling concepts"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Storage and Databases",
              "topics": [
                "Amazon Simple Storage Service (Amazon S3): Buckets, objects, storage classes, permissions",
                "Amazon Elastic Block Store (EBS) and Elastic File System (EFS)",
                "Amazon Relational Database Service (Amazon RDS): MySQL/PostgreSQL deployment",
                "Amazon DynamoDB: NoSQL key-value database concepts and querying"
              ]
            }
          ]
        },
        "practical": {
          "title": "AWS Cloud Lab Project",
          "topics": [
            "Create an AWS account and configure IAM users, groups, and policies",
            "Launch and deploy a live web application on an EC2 instance",
            "Host a static website using Amazon S3 with public read permissions",
            "Connect an application to an AWS RDS MySQL database instance"
          ],
          "evaluation": [
            {
              "component": "Continuous Cloud Lab Assessment",
              "marks": 30
            },
            {
              "component": "End-Term Practical Deployment Exam",
              "marks": 50
            },
            {
              "component": "Cloud Architecture Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "AWS Certified Solutions Architect Official Study Guide. Sybex/Wiley.",
          "AWS Free Tier & Official Documentation: Amazon Web Services (aws.amazon.com/documentation)"
        ]
      },
      {
        "courseTitle": "Personality Development & Communication",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To develop interpersonal and effective communication skills.",
          "To develop problem solving skills and understand its influence on behaviour and attitudes of individuals."
        ],
        "courseOutcomes": [
          "CO1: Understand the importance of oral and written communication in day-to-day working of an organization.",
          "CO2: Develop interpersonal skills through focused sessions on practical employable knowledge.",
          "CO3: Enhance professional communication and teamwork dynamics.",
          "CO4: Master negotiation skills and body language essential for professional success."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Foundations of Communication",
              "topics": [
                "Introduction, Need for Communication, Process of Communication",
                "Written and Verbal Communication, Visual communication, Signs, Signals and Symbols",
                "Silence as a Mode of Communication, Inter-cultural, Intra-cultural, Cross-cultural and International communication",
                "Communication through Questionnaires, Business Letter Writing, Electronic Communication"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Business Cases & Organizational Writing",
              "topics": [
                "Business Cases and Presentations, Letters within the Organizations, Letters from Top Management",
                "Circulars and Memos, Business Presentations to Customers and other stakeholders",
                "Presenting a Positive Image through Verbal and Non-verbal Cues",
                "Preparing and Delivering Presentations, Use of Audio-visual Aids, Report Writing"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Interpersonal Skills & Team Dynamics",
              "topics": [
                "Barriers to Communication, Improving Communication Skills, Preparation of Promotional Material",
                "Non-verbal communication, Body language, Postures and gestures, Value of time, Organizational body language",
                "Importance of Listening, Emotional Intelligence, Working individually and in a team, Leadership skills & lessons",
                "Team work and Team building, Feedback, Feed forward, Interpersonal skills: Delegation, Humour, Trust, Expectations, Values, Status, Compatibility",
                "Conflict Management: Types of conflicts, How to cope with conflict"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Negotiation & Sales Communication",
              "topics": [
                "Negotiation Skills, Types of Negotiation, Negotiation Strategies",
                "Selling skills: Selling to customers, Selling to Superiors, Selling to peer groups, team mates and subordinates",
                "Conceptual selling, Strategic selling, Selling skills - Body language"
              ]
            }
          ]
        },
        "practical": {
          "title": "Interpersonal Simulation & Negotiation Lab",
          "topics": [
            "Mock business presentations and executive pitch delivery",
            "Team conflict resolution role-play and negotiation exercises",
            "Body language and non-verbal cue analysis workshops"
          ],
          "evaluation": [
            {
              "component": "Continuous Practical Exercises & Role Play",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Presentation Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Jin, Kushal - Business Communication, VK India.",
          "Krishnamacharyulu, C. S. G. & Lalitha, R. - Personality Development, Interpersonal Skills and Career Management. Himalaya.",
          "Corvette Budjac - Conflict Management: A Practical Guide. Pearson.",
          "Mitra, B. K. - Personality Development and Soft Skills. Oxford University Press.",
          "Kumar, Sanjay & Pushp Lata - Communication Skills. Oxford University Press."
        ]
      },
      {
        "courseTitle": "Business Communication",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To train students to enhance written as well as oral communication in the corporate world.",
          "To help students in understanding the principles and techniques of business communication.",
          "To understand the use of electronic media for communication."
        ],
        "courseOutcomes": [
          "CO1: Explain the need for effective communication in management.",
          "CO2: Demonstrate the skill of effective report writing and summarizing annual reports.",
          "CO3: Analyse business correspondence and e-correspondence professionally.",
          "CO4: Deliver structured corporate oral presentations and conduct interviews."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Essentials of Business Communication",
              "topics": [
                "Meaning, process and functions, Need and importance",
                "Medium: verbal & non-verbal communication; Channels: formal & informal; Levels of communication",
                "Direction: downward, upward, lateral, & diagonal",
                "Difficulties/barriers and solutions; Interactive and non-interactive techniques; Listening as a tool of communication, Guidelines for effective listening"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Effective Writing",
              "topics": [
                "Guidelines for clear writing, References, bibliographical research tools",
                "Citing methods, footnotes, discussion footnotes",
                "Use of library and internet for collection, classification and interpretation of data and information"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Report Writing",
              "topics": [
                "Types of reports, Formal report: components and purpose",
                "Organising information: outlining & numbering sections, section headings, sub-headings, & presentation",
                "Writing reports on field work/visits to industries, business concerns",
                "Summarising annual reports of companies: purpose, structure and principles; Drafting minutes of meetings"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Business Correspondence and E-Correspondence",
              "topics": [
                "Need and importance of business letters, Office memorandum, office circulars, notices and orders",
                "Technology for communication, Effective IT communication tools",
                "Electronic mail: advantages, safety and smartness in email, E-mail etiquettes"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Unit 5: Spoken English and Oral Presentation",
              "topics": [
                "Effective negotiation: elements, process and general guidelines; Telephonic conversation",
                "Conducting & facing interviews; Conducting & participating in group decisions",
                "Making presentations: content and organising, Features of a good presentation, Delivering a presentation"
              ]
            }
          ]
        },
        "practical": {
          "title": "Practical Business Exercises",
          "topics": [
            "Summarising annual reports of listed corporate companies",
            "Preparing and delivering formal PowerPoint corporate presentations",
            "Participating in Group Discussions and mock recruitment interviews",
            "Smartly drafting business emails, circulars, and memos"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Practical Assignments",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Presentation Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Gupta, C. B. (2019). Essentials of Business Communication. Sultan Chand & Sons.",
          "Kaul, A. Effective Business Communication, 2nd ed. PHI Learning.",
          "Lesikar, R. V. & Flatley, M. E. (2001). Basic Business Communication Skills. Tata McGraw Hill.",
          "Bhatia, R. C. (2008). Business Communication. Ane Books Pvt Ltd.",
          "Raman & Singh (2012). Business Communication. Oxford University Press."
        ]
      },
      {
        "courseTitle": "पटकथा लेखन",
        "courseCode": "SEC-2",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "पटकथा लेखन का परिचय कराना।",
          "विद्यार्थी की लेखन-क्षमता और भाषा-कौशल को बढ़ावा देना।",
          "विद्यार्थी की लेखन में रोजगार सम्बन्धी क्षेत्रों के लिए तैयार करना।"
        ],
        "courseOutcomes": [
          "CO1: पटकथा लेखन तथा उसके तकनीकी शब्दों से विद्यार्थी अवगत हो सकेगा।",
          "CO2: पटकथा लेखन की जानकारी मिलने के उपरान्त विद्यार्थी के लिए रोजगार की सम्भावनाएँ बनेंगी।",
          "CO3: विद्यार्थी भाषायी सम्प्रेषण को समझते हुए लेखन से सम्बन्धित विभिन्न पक्षों से अवगत हो सकेगा।",
          "CO4: विद्यार्थी में अभिव्यक्ति कौशल का विकास हो सकेगा।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: पटकथा लेखन: परिचय एवं तत्व",
              "topics": [
                "पटकथा लेखन: परिचय एवं महत्व",
                "पटकथा के तत्व",
                "पटकथा के प्रकार",
                "पटकथा की पारिभाषिक शब्दावली"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: शोध, चरित्र एवं दृश्य निर्माण",
              "topics": [
                "पटकथा लेखन में शोध का महत्व",
                "चरित्र की निर्मिति और विकास",
                "एक दृश्य का लिखा जाना (Scene Construction)",
                "तीन अंक (थ्री एक्ट) और पाँच अंक (फाइव एक्ट) को समझना"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: माध्यम-आधारित पटकथा लेखन",
              "topics": [
                "वेबसीरीज के लिए पटकथा लेखन",
                "लघु फिल्म के लिए पटकथा लेखन",
                "वृत्तचित्र (डॉक्यूमेंट्री) के लिए पटकथा लेखन",
                "विज्ञापन फिल्म के लिए पटकथा लेखन"
              ]
            },
            {
              "unitNumber": 4,
              "title": "यूनिट 4: पटकथा विश्लेषण एवं स्क्रीनप्ले",
              "topics": [
                "पटकथा का पाठ और विश्लेषण",
                "किसी आईडिया को स्क्रीन प्ले के तौर पर विकसित करना"
              ]
            }
          ]
        },
        "practical": {
          "title": "प्रायोगिक एवं कार्यशाला अभ्यास",
          "topics": [
            "लघु फिल्म या वृत्तचित्र के लिए मूल पटकथा एवं दृश्य-संवाद लेखन",
            "प्रसिद्ध फिल्मों की पटकथा का दृश्य-दर-दृश्य तुलनात्मक विश्लेषण",
            "विज्ञापन जिंगल एवं कमर्शियल वीडियो स्क्रिप्ट तैयार करना"
          ],
          "evaluation": [
            {
              "component": "सतत कार्यशाला मूल्यांकन एवं पटकथा ड्राफ्ट",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा / पटकथा प्रस्तुति",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा-वोस)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "पांडेय, राजेन्द्र - पटकथा कैसे लिखें, वाणी प्रकाशन, दिल्ली, 2015",
          "जोशी, मनोहर श्याम - पटकथा लेखन: एक परिचय, राजकमल प्रकाशन, दिल्ली, 2000",
          "भंडारी, मन्नू - कथा-पटकथा, वाणी प्रकाशन, दिल्ली, 2014",
          "वजाहत, असगर - व्यावहारिक निर्देशिका: पटकथा लेखन, राजकमल प्रकाशन, दिल्ली, 2011",
          "सिंह, रामकुमार - आईडिया से परदे तक, राजकमल प्रकाशन, दिल्ली, 2021"
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Prospecting E-waste for sustainability",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To provide in-depth knowledge on the effective mechanisms to regulate the generation, collection, and storage of e-waste.",
          "To gain insights into internationally/nationally acceptable methods of transport, import, and export of e-waste.",
          "To develop a holistic view on recycling, treatment, and disposal of e-waste and related legislative rules."
        ],
        "courseOutcomes": [
          "CO1: Holistically analyze environmental impacts of e-waste.",
          "CO2: Apply skills and concepts for sustainable management and segregation of e-waste.",
          "CO3: Decipher national and international regulations (EPR, Basel Convention, RoHS).",
          "CO4: Formulate recommendations for improved handling at collection, storage, transport, and recycling."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: E-Waste Identification & Environmental Impacts",
              "topics": [
                "Identification of e-waste and its types, Composition of e-waste",
                "Segregation from material provided, Dismantling and safe handling processes",
                "Environmental impacts and toxic contaminants: Lead, Mercury, Cadmium, BFRs"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Regulatory Framework & Producer Responsibility",
              "topics": [
                "Environmental protection laws and Extended Producer Responsibility (EPR) for e-waste management",
                "Regulatory mechanisms in educational institutions and corporate sectors",
                "E-waste reduction at source, evaluation of status in institutions, solutions under E-Waste (Management) Rules 2016 and beyond"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Circular Economy & Global Conventions",
              "topics": [
                "E-waste recycling in metro cities in sync with the circular economy",
                "Procuring e-waste import permissions, Inventory of e-waste disposal mechanisms",
                "Evolution of management rules: Hazardous Waste Rules 2008, E-Waste Rules 2011, E-Waste Rules 2016",
                "International Conventions: Basel Convention, Bamako Convention, Rotterdam Convention",
                "European Union Directives: WEEE Directive, Restrictions of Hazardous Substances (RoHS) Directive"
              ]
            }
          ]
        },
        "practical": {
          "title": "Practical / Hands-on Field Exercises",
          "topics": [
            "Visit to a nearby authorized e-waste handling and recycling facility",
            "Conducting an institutional e-waste audit and preparing a reduction roadmap",
            "Dismantling non-functional computer hardware safely and recording component inventories"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Field Audit Report",
              "marks": 30
            },
            {
              "component": "End-Term Practical Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Hester, R. E. & Harrison, R. M. (2009). Electronic Waste Management. Royal Society of Chemistry.",
          "Fowler, B. A. (2017). Electronic Waste: Toxicology and Public Health Issues. Academic Press.",
          "Gaidajis, G. et al. (2010). E-waste: environmental problems and current management. J. Eng. Sci. Tech.",
          "Janyasuthiwong, S. (2020). Metal Removal and Recovery from Mining Wastewater and E-waste. CRC Press."
        ]
      },
      {
        "courseTitle": "Visual Communication & Photography",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To synthesize a comprehensive view of principles involved in Visual Communication.",
          "To appreciate and express the cultural significance of photography as visual art.",
          "To develop awareness of compositional and organizational strategies for effective visual art.",
          "To read visual texts with a deep knowledge of visual history and theory."
        ],
        "courseOutcomes": [
          "CO1: Acquire knowledge of cultural and historical importance of visual media.",
          "CO2: Explore fundamentals and underlying theories of Visual Communication.",
          "CO3: Develop concepts and skills in creating photographs, semiotic analysis, and visual aesthetics.",
          "CO4: Master camera mechanisms, composition, lighting techniques, and visual storytelling."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Historical Background and Basics of Visual Communication",
              "topics": [
                "History of the visual arts from caveman to modern man, Skills of artistic schools of thought",
                "Concept and History of Visual Communication, Human Eye and Visual Process",
                "Visual Culture and Information Education Communication",
                "Theories: Gestalt Theory of visual communication, Perceptual theory, Semiotics and cognitive approach"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Theories of Visual Communication & Design",
              "topics": [
                "Fundamentals of Design: Definition, Approaches to Design, Centrality of Design",
                "Elements and Principles of Visual and Sensory Perceptions",
                "Colour psychology and theory, Optical / Visual Illusions",
                "Design process, Learning skills to read signs and signifier in visuals for social messaging"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Photography as Visual Communication",
              "topics": [
                "Introduction to photography, Camera: structure and function of camera",
                "Characteristics of light, Sources of Light - Nature, Artificial and Available",
                "Lighting techniques: Three-point lighting; Exposure: focusing, aperture, shutter speed, depth of field",
                "Kinds of light indoor and outdoor - Electronic flash and artificial lights, Light meters"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Camera Compositions and Accessories",
              "topics": [
                "Camera lenses and accessories, Basic shots, angle, and view",
                "Composition, Rule of thirds, Leading lines, Framing",
                "Role of photographic image in visual communication, Basics of photojournalism",
                "Photo-features, photo-essays, writing captions, visual storytelling"
              ]
            }
          ]
        },
        "practical": {
          "title": "Photography Studio & Photo-Essay Project",
          "topics": [
            "Hands-on camera settings: Aperture, Shutter Speed, ISO, White Balance, and Exposure compensation",
            "Studio portrait lighting using 3-point lighting setup",
            "Creating a thematic photo-essay with captions and structured narrative"
          ],
          "evaluation": [
            {
              "component": "Continuous Photographic Portfolio",
              "marks": 30
            },
            {
              "component": "End-Term Practical Studio Exam",
              "marks": 50
            },
            {
              "component": "Portfolio Defense Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Barnes, Susan B. (2011). An Introduction to Visual Communication. Peter Lang Pub.",
          "Berger, Arthur Asa (2012). Seeing is Believing: An Introduction to Visual Communication. McGraw-Hill.",
          "Lester, Paul Martin (2013). Visual Communication: Images with Messages, 6th ed. Cengage.",
          "Wells, Liz (ed.) (2015). Photography: A Critical Introduction. Routledge.",
          "Farrell, I. (2014). Complete Guide to Digital Photography. Quercus Publishing."
        ]
      },
      {
        "courseTitle": "Graphic Design & Animation",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To introduce students to the skill of animation.",
          "To learn about the application of 2D and 3D animation in advertising and multimedia."
        ],
        "courseOutcomes": [
          "CO1: Understand the importance of animation and graphics design.",
          "CO2: Master graphics design and workflow in 2D and 3D animation.",
          "CO3: Create commercial advertising layouts, logos, and promotional animations.",
          "CO4: Execute 3D modeling, texturing, rigging, lighting, and rendering in Blender."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: 2D Animation & Design",
              "topics": [
                "Introduction to 2D Animation: Drawing concepts, Colour theory & basics, Incorporating sound into 2D animation",
                "Layout & Designing: Basic of sketching, still life, drawing, collage, painting; Elements and principles of design",
                "Vector and Bitmap Graphics; Photoshop professional image editing; CorelDraw advertising and illustration",
                "Broadcast Design: Working with visual images, Storyboarding, Titles and Credit Making, Stop motion animation",
                "Production / Post-Production: Paint & animate (scanning, tracing, ink & paint), Background composition, 2D animation techniques with Flash/Animate, Portfolio Making"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: 3D Animation",
              "topics": [
                "3D Modeling: Introduction to 3D space in Blender, Modeling Techniques, Inorganic Modeling, Organic Modeling",
                "3D Shading: Use of Materials & Shader, Texture Editing, Shading Organic & Inorganic Models",
                "3D Animation and Rigging: Animation Graph, Rigging in Blender, Controllers for joints, Simple Skeleton structure",
                "3D Lighting and Rendering: Cycles lighting, Direct & Indirect Lighting, Light Linking, Final Composition",
                "3D Dynamics: Active and Passive Bodies, Rigid body simulation, Cloth & Fluid simulation effects",
                "Digital Imaging & Animation Projects: Print ads, 2D logo animation, 30-second animated short film, Walk cycle animation"
              ]
            }
          ]
        },
        "practical": {
          "title": "Animation Studio Practicals & Project Showcase",
          "topics": [
            "2D Character design and frame-by-frame walk cycle animation",
            "Vector logo creation and branding layout in Photoshop/Illustrator",
            "3D prop modeling, texturing, lighting, and rendering in Blender",
            "Producing a 30-second portfolio animation clip with background score"
          ],
          "evaluation": [
            {
              "component": "Continuous Digital Portfolio",
              "marks": 30
            },
            {
              "component": "End-Term Animation Lab Exam",
              "marks": 50
            },
            {
              "component": "Showreel Defense Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Johnston, O. & Thomas, F. - The Illusion of Life: Disney Animation.",
          "Hess, Roland - Blender Production Creating Short Animations from Start to Finish. Focal Press.",
          "Watkins, Adam - Getting Started in 3D with Maya. Routledge.",
          "Bancroft, Tom - Creating Characters with Personality. Watson-Guptill."
        ]
      },
      {
        "courseTitle": "Statistical Software Package",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To familiarize students with data analysis using a statistical software package like SPSS.",
          "To provide skills for research analysis and increase employability.",
          "To lay a foundation for advance data analysis work and higher education."
        ],
        "courseOutcomes": [
          "CO1: Manage variables and generate descriptive statistics, graphs and charts.",
          "CO2: Test differences in sample means using t-tests and ANOVA.",
          "CO3: Identify relationships between variables and predict dependent variables via regression.",
          "CO4: Understand data structures, cluster analysis, and principal components."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Getting Started with the Software",
              "topics": [
                "Data Entry, Storing and Retrieving Files, Generating New Variables",
                "Managing Data: Listing cases, replacing missing values, computing new variables, recoding variables, selecting cases, sorting cases, merging files",
                "Graphs: Creating and editing graphs and charts",
                "Descriptive Statistics Procedures: Frequencies, Descriptive, Explore, Cross Tabulation"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Hypothesis Testing for Means",
              "topics": [
                "T-tests: One sample t-test, Independent samples t-test, Paired samples t-test",
                "ANOVA: One-way analysis of variance with post-hoc analysis, Two-way analysis of variance"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Testing for Association between Variables",
              "topics": [
                "Chi-square Test of Independence",
                "Bivariate Correlation Analysis: Simple Scatter Plot, Correlation Coefficients (Pearson, Spearman Rho, Kendall Tau)",
                "Factor analysis fundamentals"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Regression Analysis",
              "topics": [
                "Linear Regression: Simple Linear Regression, Multiple regression analysis with matrix scatterplot",
                "Multiple Regression: Standard (Enter) and Stepwise Method",
                "Binary Logistic Regression concepts"
              ]
            }
          ]
        },
        "practical": {
          "title": "Statistical Software Lab & Empirical Analysis",
          "topics": [
            "Data cleaning, variable recoding, and generating cross-tabulation reports in SPSS",
            "Running hypothesis tests (t-tests, ANOVA) and interpreting p-values and effect sizes",
            "Executing linear and multiple regression models with residual diagnostics"
          ],
          "evaluation": [
            {
              "component": "Continuous Lab Assessment & Outputs",
              "marks": 30
            },
            {
              "component": "End-Term Practical Computing Exam",
              "marks": 50
            },
            {
              "component": "Statistical Results Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Meyers, L. S., Gamst, G., & Guarino, A. J. - Performing Data Analysis using IBM SPSS. Wiley.",
          "George, D. & Mallery, P. - SPSS for Windows Step by Step: A Simple Guide. Pearson.",
          "Pandya, K., Bulsari, S., & Sinha, S. - SPSS in Simple Steps. Dreamtech Press.",
          "Mohan, Radha - Using SPSS in Research. Neelkamal."
        ]
      },
      {
        "courseTitle": "Communication in Professional Life",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To prepare students for upcoming professional fields.",
          "To inculcate fundamentals of professional and business communication.",
          "To learn aspects of global communication and enhance employability skills."
        ],
        "courseOutcomes": [
          "CO1: Improve verbal and non-verbal presentation skills for professional fields.",
          "CO2: Acquire practical employability skills through focused sessions.",
          "CO3: Enhance professional communication, negotiation, and cross-cultural adaptability.",
          "CO4: Craft winning CVs, cover letters, and digital profiles on LinkedIn."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Theory of Business Communication",
              "topics": [
                "Introduction: What is Business Communication?, Language of Business Communication",
                "Cultural Components: Cross-Cultural Communication, Cultural Shock, Stereotyping, Ethnocentrism",
                "Miscommunication & Effective Communication"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Listening Skills",
              "topics": [
                "Netiquettes in professional contexts",
                "Audio-book Listening & Professional Discussions",
                "Executive Note-taking and briefing"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Speaking Skills",
              "topics": [
                "Presentation Skills: Oral Presentation, PPT Preparation, PPT Presentation",
                "Group Discussion; Talks: Domain-specific, Ted-Talks, Business Meets, Motivational Talks",
                "Telephonic Skills, Persuasion Skills, Meeting & Negotiation",
                "Interview: Promotion Interview, Job Interview, Business Interview; Functions and activities of PR"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Writing Skills & Digital Profiles",
              "topics": [
                "Summarising & Paraphrasing; Job-Oriented Skills: CV, Resume & Bio-Data, Job Application Letter, Documentation",
                "Advertisements & Invitations, Letter Writing: Applications, Business Letters",
                "Report: Analytical Report, Project Report",
                "Digital Communication in Social Space: Social Media Posts (Twitter/X, Facebook, LinkedIn), Blog Writing, Review Writing",
                "Canva/MS Word/Corel poster designing; Memo, Office Order, Minutes; Making Online Academic/Work Profile on LinkedIn"
              ]
            }
          ]
        },
        "practical": {
          "title": "Professional Skills & Career Lab",
          "topics": [
            "Drafting customized ATS-friendly resumes and tailored job application letters",
            "Optimizing LinkedIn profiles and publishing professional articles",
            "Mock HR interviews, corporate meetings, and business negotiations"
          ],
          "evaluation": [
            {
              "component": "Continuous Portfolio & Profile Assessment",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Interview Defense & Presentation Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Kaushik, J. C. & Sinha, K. K. (eds.) - English for Students of Commerce. Oxford University Press.",
          "Sethi, A. & Adhikari, B. - Business Communication. Tata McGraw Hill.",
          "Dev, Anjana Neira et al. (eds.) (2011). Business English. Pearson Publications."
        ]
      },
      {
        "courseTitle": "Personal Financial Planning",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To familiarize students with different aspects of personal financial planning like savings, investment, taxation, insurance, and retirement.",
          "To develop the necessary knowledge and skills for effective financial planning."
        ],
        "courseOutcomes": [
          "CO1: Understand the meaning and appreciate the relevance of financial planning.",
          "CO2: Master investment planning concepts across diverse asset classes.",
          "CO3: Examine personal tax planning under Indian tax regimes (Section 115BAC).",
          "CO4: Analyze insurance and retirement benefits planning for lifelong security."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Financial Planning",
              "topics": [
                "Financial goals, Steps in financial planning, Budgeting incomes and payments",
                "Time value of money, Introduction to savings, Benefits of savings",
                "Management of spending & financial discipline, Setting alerts and maintaining sufficient funds for fixed commitments"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Investment Planning",
              "topics": [
                "Process and objectives of investment, Concept and measurement of return & risk for various asset classes",
                "Measurement of portfolio risk and return, Diversification & portfolio formation",
                "Gold bond; Real estate; Investment in greenfield and brownfield Projects",
                "Investment in fixed income instruments, Financial derivatives & commodity market in India, Mutual fund schemes, International investment avenues, Currency derivatives and digital currency"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Personal Tax Planning",
              "topics": [
                "Tax structure in India for personal taxation, Scope of personal tax planning, Exemptions and deductions available to individuals under different heads of income and gross total income",
                "Comparison of benefits: Special provision u/s 115 BAC vis-a-vis General provisions of the Income-tax Act, 1961",
                "Tax avoidance versus tax evasion, e-filing procedures"
              ]
            },
            {
              "unitNumber": 4,
              "title": "Unit 4: Insurance Planning",
              "topics": [
                "Need for insurance, Life insurance, Health insurance, Property insurance, Credit life insurance and professional liability insurance"
              ]
            },
            {
              "unitNumber": 5,
              "title": "Unit 5: Retirement Benefits Planning",
              "topics": [
                "Retirement planning goals, Process of retirement planning",
                "Pension plans available in India, National Pension System (NPS), Reverse mortgage, Estate planning"
              ]
            }
          ]
        },
        "practical": {
          "title": "Personal Finance Practicals",
          "topics": [
            "Perform electronic fund transfers through net banking and UPI safely",
            "Identify and analyze recent financial frauds and Ponzi schemes",
            "Prepare comprehensive tax planning and budget for a hypothetical individual"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Financial Plan Report",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Financial Plan Defense Viva",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Halan, M. - Let's Talk Money: You've Worked Hard for It, Now Make It Work for You. Harper Collins.",
          "Indian Institute of Banking & Finance - Introduction to Financial Planning. Taxmann.",
          "Keown, A. J. - Personal Finance. Pearson.",
          "Madura, J. - Personal Finance. Pearson.",
          "Sinha, M. - Financial Planning: A Ready Reckoner. McGraw Hill.",
          "Tripathi, V. - Fundamentals of Investment. Taxmann."
        ]
      },
      {
        "courseTitle": "Sustainable Ecotourism & Entrepreneurship",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To train students in concepts and principles of sustainable ecotourism leading to a new generation of entrepreneurs.",
          "To inculcate field-based practical skills in translating ecological systems into wealth generation while conserving natural resources.",
          "To transform local biological wealth into a hub of global attraction based on Indian traditional knowledge."
        ],
        "courseOutcomes": [
          "CO1: Develop next-generation ecological entrepreneurial models.",
          "CO2: Evolve eco-literate society by integrating market-based instruments with eco-cultural knowledge.",
          "CO3: Practice ecological knowledge for conservation and popularization of Indian heritage.",
          "CO4: Design ecotourism itineraries, flora/fauna checklists, and public-private partnerships."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Ecotourism Scoping & Flora/Fauna Inventory",
              "topics": [
                "Assess current state of ecotourism in unexplored areas and examine ecotourism potential",
                "Field surveys to identify existing locations having ecological, wildlife, scenic, and ethnic potential",
                "Identify ten plant species having ecological, economic, and cultural significance as ecotourist attractions",
                "Identify suitable tracks and prepare a checklist of birds and animals with their ecological stories"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Target Audience, Communication & Market Analysis",
              "topics": [
                "Examine natural resources and develop suitable messages and educational media",
                "Survey and identify target groups for ecotourism based on age, education, and psychological factors",
                "Conduct inventory of facility and analyze competitive advantages over regional attractions",
                "Analyze tourist spending patterns and track preferences for ecotourism attractions"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Sustainable Business Models & Entrepreneurship",
              "topics": [
                "Survey attitude of residents regarding ecotourism plans and analyze costs & benefits",
                "Develop stories, messages, and pictures to attract tourists using demand-driven marketing",
                "Analyze basic elements of ecotourism, special needs of ecotourists, and develop tour packages",
                "Develop ecotourist activities and craft social media campaigns for ecotourism business",
                "Develop plans for strategic alliances and Public-Private Partnerships (PPP)"
              ]
            }
          ]
        },
        "practical": {
          "title": "Field Ecotourism Practicals & Venture Blueprint",
          "topics": [
            "Field visit to local eco-parks, wetlands, or sanctuaries with tourist survey execution",
            "Preparation of biodiversity storytelling cards and nature trail maps",
            "Drafting a complete business plan for an eco-resort, homestay, or guided nature trail venture"
          ],
          "evaluation": [
            {
              "component": "Continuous Field Work & Business Blueprint",
              "marks": 30
            },
            {
              "component": "End-Term Practical Exam",
              "marks": 50
            },
            {
              "component": "Venture Pitch & Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Ballantyne, R. & Packer, J. (2013). International Handbook on Ecotourism. Edward Elgar.",
          "Blumstein, D. T. et al. (2017). Ecotourism's promise and Peril. Springer.",
          "Fennell, D. A. (2014). Ecotourism: An Introduction. Routledge.",
          "Fletcher, R. (2014). Romancing the Wild. Duke University Press.",
          "Wearing, S. & Schweinsberg, S. (2019). Ecotourism: Transitioning to the 22nd century. Routledge."
        ]
      },
      {
        "courseTitle": "रचनात्मक लेखन",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "विद्यार्थियों के मौखिक और लिखित अभिव्यक्ति कौशल को विकसित करना।",
          "उनमें कल्पनाशीलता और रचनात्मकता का विकास करना।",
          "साहित्य की विविध विधाओं और उनकी रचनात्मक शैली का परिचय कराते हुए लेखन की ओर प्रेरित करना।",
          "प्रिंट एवं इलेक्ट्रॉनिक माध्यमों के लिए लेखन की प्रवृत्ति को विकसित करना।"
        ],
        "courseOutcomes": [
          "CO1: मौखिक और लिखित अभिव्यक्ति कौशल को विकसित करने में मदद मिलेगी।",
          "CO2: कल्पनाशीलता और रचनात्मकता का विकास होगा।",
          "CO3: साहित्य की विविध विधाओं (कविता, कहानी, नाटक, संस्मरण) के लेखन में अग्रसर होंगे।",
          "CO4: प्रिंट एवं इलेक्ट्रॉनिक मीडिया के लिए व्यावसायिक लेखन कर सकेंगे।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: रचनात्मक लेखक: अवधारणा एवं विश्लेषण",
              "topics": [
                "रचनात्मक लेखक: अवधारणा, स्वरूप, आधार एवं विश्लेषण",
                "भाव एवं विचार की रचना में अभिव्यक्ति की प्रक्रिया",
                "अभिव्यक्ति के विविध क्षेत्र: साहित्य, पत्रकारिता, विज्ञापन, भाषण",
                "लेखन के विविध रूप: मौखिक-लिखित, गद्य-पद्य, कथात्मक-कथेतर",
                "अर्थ निर्मित के आधार: शब्द और अर्थ की मीमांसा, शब्द के पुराने-नए प्रयोग, व्याकरणिक कोटि"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: भाषा भंगिमा और साहित्य लेखन",
              "topics": [
                "भाषा भंगिमाएँ: औपचारिक-अनौपचारिक, मौखिक-लिखित, मानक भाषिक संदर्भ: क्षेत्रीय, वर्ग-सापेक्ष, समूह-सापेक्ष",
                "रचना-सौष्ठव: शब्दशक्ति, प्रतीक, बिम्ब, अलंकार",
                "कविता: संवेदना भाषिक सौष्ठव, छंदबद्ध-छंदमुक्त, लय, गति, तुक",
                "कथा-साहित्य: वस्तु, पात्र, परिवेश, कथ्य और भाषा"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: विविध विधाओं एवं सूचना माध्यमों के लिए लेखन",
              "topics": [
                "नाट्य-साहित्य: वस्तु, पात्र, परिवेश, कथ्य, रंगमंच और नाट्य-भाषा",
                "विविध गद्य विधाएँ: निबंध, संस्मरण, आत्मकथा, व्यंग्य, रिपोर्ताज, यात्रा-वृत्तांत",
                "प्रिंट माध्यम के लिए लेखन: फीचर, यात्रा-वृत्तांत, साक्षात्कार, विज्ञापन",
                "इलेक्ट्रॉनिक माध्यम के लिए लेखन: विज्ञापन, पटकथा, संवाद"
              ]
            }
          ]
        },
        "practical": {
          "title": "प्रायोगिक अभ्यास एवं कार्यशाला",
          "topics": [
            "कक्षा में प्रत्येक विद्यार्थी द्वारा 'मेरी पहली रचना' शीर्षक से किसी विधा में मौलिक लेखन",
            "साहित्यिक रचना का भाषायी दृष्टि से विश्लेषण एवं सामूहिक समीक्षा",
            "समसामयिक विषयों (पर्यावरण संरक्षण, लोकतंत्र, ऑनलाइन संस्कृति) पर फीचर व आलेख लेखन"
          ],
          "evaluation": [
            {
              "component": "सतत रचना संचयन एवं अभ्यास",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "रघुवंश - साहित्यिक चिंतन: रचनात्मक आयाम",
          "मिश्र, रामचंद्र - शैली",
          "गौतम, रमेश - रचनात्मक लेखक",
          "तिवारी, विश्वनाथ प्रसाद - कविता क्या है",
          "भंडारी, मन्नू - कथा-पटकथा",
          "जोशी, मनोहर श्याम - पटकथा लेखन",
          "श्रीवास्तव, रवींद्रनाथ - साहित्य का सौंदर्यशास्त्र"
        ]
      },
      {
        "courseTitle": "रंगमंच",
        "courseCode": "SEC-3",
        "credits": "3",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "हिन्दी रंगमंच का परिचय कराना।",
          "नाट्य-प्रस्तुति की प्रक्रिया की जानकारी देना।",
          "अभिनय के विभिन्न पक्षों से अवगत कराना।",
          "रंगमंच के खेलों और गतिविधियों से अवगत कराना।"
        ],
        "courseOutcomes": [
          "CO1: नाट्य-प्रस्तुति की प्रक्रिया से विद्यार्थी अवगत हो सकेगा।",
          "CO2: रंगमंच की जानकारी से रोजगार की सम्भावनाएँ बनेंगी।",
          "CO3: रंगमंचीय गतिविधियों से व्यक्तित्व का विकास हो सकेगा।",
          "CO4: अभिव्यक्ति कौशल और मंच प्रबंधन में प्रवीणता हासिल होगी।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: नाट्यशास्त्र एवं पारंपरिक रंगमंच",
              "topics": [
                "भरत मुनि कृत नाट्यशास्त्र (संक्षिप्त परिचय)",
                "हिन्दी का पारंपरिक रंगमंच (संक्षिप्त परिचय)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: प्रस्तुति-प्रक्रिया",
              "topics": [
                "आलेख का चयन, अभिनेताओं का चयन",
                "दृश्य-परिकल्पना (ध्वनि, संगीत, नृत्य, प्रकाश)",
                "पूर्वाभ्यास (Rehearsal)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: अभिनय की तैयारी",
              "topics": [
                "अभिनय के चार भेद: वाचिक, आंगिक, आहार्य, सात्विक",
                "संवाद अदायगी और शारीरिक लचीलापन"
              ]
            },
            {
              "unitNumber": 4,
              "title": "यूनिट 4: आशु अभिनय एवं थिएटर गेम्स",
              "topics": [
                "आशु अभिनय (Improvisation), थिएटर गेम्स",
                "संवाद-वाचन, शारीरिक अभ्यास, सीन वर्क"
              ]
            },
            {
              "unitNumber": 5,
              "title": "यूनिट 5: मंच प्रबंधन",
              "topics": [
                "सेट निर्माण, रंग-सामग्री",
                "प्रचार-प्रसार, ब्रोशर-निर्माण, टिकट व दर्शक प्रबंधन"
              ]
            }
          ]
        },
        "practical": {
          "title": "रंगमंच प्रायोगिक कार्यशाला एवं मंचन",
          "topics": [
            "एकल अभिनय (Monologue) एवं समूह दृश्य मंचन अभ्यास",
            "थिएटर गेम्स, ध्वनि-संगीत व प्रकाश व्यवस्था का व्यावहारिक संयोजन",
            "लघु नाटक का मंचन तथा ब्रोशर व सेट निर्माण परियोजना"
          ],
          "evaluation": [
            {
              "component": "सतत मंचन अभ्यास व पूर्वाभ्यास मूल्यांकन",
              "marks": 30
            },
            {
              "component": "सत्रांत नाट्य प्रस्तुति / परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "त्रिपाठी, राधावल्लभ (2009) - संक्षिप्त नाट्यशास्त्रम्, वाणी प्रकाशन, दिल्ली",
          "शर्मा, एच० वी० (2004) - रंग स्थापत्य: कुछ टिप्पणियाँ, राष्ट्रीय नाट्य विद्यालय",
          "वात्स्यायन, कपिला (1995) - पारंपरिक भारतीय रंगमंच: अनंतधाराएँ, नेशनल बुक ट्रस्ट",
          "गौतम, रमेश (2020) - हिंदी रंगमंच का लोकपक्ष, स्वराज प्रकाशन",
          "अंकुर, देवेंद्र राज (2008) - रंगमंच के सिद्धांत, राजकमल प्रकाशन"
        ]
      }
    ]
  },
  "VAC": {
    "1st": [
      {
        "courseTitle": "Ayurveda and Nutrition",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To introduce the basic principles of nutrition in Ayurveda.",
          "To link the Ayurvedic nutrition with modern dietary practices for health.",
          "To analyse basic tenets of fasts, festivals & seasonal regimen (Ritucharya)."
        ],
        "courseOutcomes": [
          "CO1: Understand the basic principles of diet and nutrition in Ayurveda (Ahar & Poshan).",
          "CO2: Explain the Ayurvedic nutritional framework based on Tridosha, Agni, and Prakriti.",
          "CO3: Apply traditional seasonal culinary wisdom and dietary guidelines for balanced living.",
          "CO4: Evaluate food incompatibilities (Viruddha Ahara) and health benefits of common kitchen spices."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Ayurvedic Nutrition",
              "topics": [
                "Ayurveda and Indian Food culture, Definition of nutrition according to Ayurveda",
                "Concepts of Poshan (Nutrition), Concept of Ahar (Diet), Shad-rasa (Six tastes) and their physiological actions",
                "Tridosha (Vata, Pitta, Kapha) and constitutional diet according to individual Prakriti"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Principles of Ayurvedic Dietetics",
              "topics": [
                "Concept of Agni (Digestive fire) and Ama (Metabolic toxins)",
                "Ahar Parinamakar Bhava (Factors governing food transformation)",
                "Ashtavidh Ahar Vidhi Visheshayatan (Eight fundamental rules of dietetics)",
                "Pathya & Apathya Ahara (Wholesome and unwholesome food diets)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Seasonal Regimen, Fasting and Spices",
              "topics": [
                "Ritucharya: Seasonal changes and required dietary modifications",
                "Ayurvedic perspective on Fasting (Upavasa), fasting rules in Indian festivals",
                "Viruddha Ahara (Incompatible food combinations) and disease manifestation",
                "Medicinal values of common Indian spices (Turmeric, Ginger, Black Pepper, Cumin, Fenugreek)"
              ]
            }
          ]
        },
        "practical": {
          "title": "Hands-on Practical & Case Exercises",
          "topics": [
            "Assessment of individual Prakriti (Body-Mind Constitution) through standard questionnaires",
            "Preparation of traditional restorative recipes (Kashayam, Kadha, Golden Milk, Herbal Infusions)",
            "Documentation of local seasonal culinary practices and indigenous dietary wisdom"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Practical Journal",
              "marks": 30
            },
            {
              "component": "End-Term Practical Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Charaka Samhita (Sutra Sthana Chapter 27 & 28), Chaukhamba Orientalia.",
          "Sharma, A. K. (2014). Ayurvedic Dietetics. Chaukhamba Sanskrit Pratishthan.",
          "Frawley, David. Ayurvedic Healing: A Comprehensive Guide. Lotus Press.",
          "Dash, Bhagwan. Fundamentals of Ayurvedic Medicine. Konark Publishers."
        ]
      },
      {
        "courseTitle": "Financial Literacy",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To introduce financial concepts and basic banking procedures.",
          "To impart knowledge on personal budgeting, insurance, and retirement planning.",
          "To build awareness regarding digital financial services and cybersecurity in transactions."
        ],
        "courseOutcomes": [
          "CO1: Describe financial institutions, banking services, and financial planning mechanisms.",
          "CO2: Manage personal budgets, savings accounts, and investment options.",
          "CO3: Understand life, health, and property insurance policies.",
          "CO4: Execute safe digital transactions (UPI, Net Banking) and prevent cyber frauds."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Financial Planning and Budgeting",
              "topics": [
                "Meaning and importance of financial literacy, Steps in financial planning",
                "Budgeting income and expenses, Time value of money",
                "Emergency funds, Savings vs Investment, Power of compounding"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Banking Services and Investment Avenues",
              "topics": [
                "Types of bank accounts: Savings, Current, Fixed Deposit, Recurring Deposit",
                "Payment mechanisms: Cheques, NEFT, RTGS, IMPS, UPI, Digital Wallets",
                "Investment avenues: Mutual Funds (SIPs), Public Provident Fund (PPF), National Pension System (NPS), Sukanya Samriddhi Yojana, Sovereign Gold Bonds"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Insurance, Taxation and Cyber Hygiene",
              "topics": [
                "Fundamentals of insurance: Life (Term vs Endowment), Health (Mediclaim), Motor and Property insurance",
                "Basic concepts of Income Tax, PAN card, Filing ITR basics",
                "Digital banking security: Safe PIN/password practices, OTP protection, recognizing phishing, identity theft, and Ponzi schemes"
              ]
            }
          ]
        },
        "practical": {
          "title": "Financial Simulations & Practice",
          "topics": [
            "Opening a bank account, filling deposit/withdrawal slips, and KYC verification forms",
            "Formulating a balanced personal monthly budget spreadsheet",
            "Setting up UPI Autopay / SIP simulations and analyzing mutual fund NAV statements"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Budget Log",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "National Centre for Financial Education (NCFE) - Financial Education Handbook.",
          "RBI Publications - Financial Literacy Guides & Cyber Security Awareness.",
          "Madura, Jeff. Personal Finance. Pearson Education."
        ]
      },
      {
        "courseTitle": "Constitutional Values and Fundamental Duties",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To enrich students with basic knowledge of the Indian Constitution.",
          "To inculcate constitutional values: Justice, Liberty, Equality, and Fraternity.",
          "To make students aware of their Fundamental Rights and Fundamental Duties."
        ],
        "courseOutcomes": [
          "CO1: Comprehend the philosophical foundation and salient features of the Constitution of India.",
          "CO2: Internalize core constitutional values: Sovereign, Socialist, Secular, Democratic, Republic.",
          "CO3: Recognize and exercise fundamental rights while upholding rule of law.",
          "CO4: Fulfill Fundamental Duties under Article 51A and contribute to nation-building."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: The Constitution of India: An Introduction",
              "topics": [
                "Historical background and making of the Indian Constitution",
                "Constituent Assembly debates and role of Dr. B. R. Ambedkar",
                "Preamble to the Constitution: Core values (Justice, Liberty, Equality, Fraternity, Secularism, Socialism)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Fundamental Rights and Directive Principles",
              "topics": [
                "Fundamental Rights (Articles 12-35): Right to Equality, Freedom, Against Exploitation, Religion, Culture & Education, Constitutional Remedies",
                "Directive Principles of State Policy (DPSP) and their relevance in social welfare",
                "Balancing Fundamental Rights and State Policy"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Fundamental Duties (Article 51A)",
              "topics": [
                "Origin and incorporation of Fundamental Duties (42nd & 86th Amendments)",
                "11 Fundamental Duties: Abiding by Constitution, Respecting National Flag & Anthem, Cherishing noble ideals of freedom struggle, Protecting sovereignty & integrity, Defending country, Promoting harmony, Preserving composite culture, Protecting environment & wildlife, Developing scientific temper, Striving for excellence, Providing education to children (6-14 yrs)",
                "Legal status and civic duties of citizens"
              ]
            }
          ]
        },
        "practical": {
          "title": "Civic Action & Constitutional Case Studies",
          "topics": [
            "Organizing classroom debates and mock youth parliament on constitutional rights",
            "Field study on local civic awareness regarding fundamental duties and environmental protection",
            "Preparation of awareness posters and skits on national integration and fundamental duties"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Civic Journal",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Basu, D. D. (2018). Introduction to the Constitution of India. LexisNexis.",
          "Austin, Granville (1999). The Indian Constitution: Cornerstone of a Nation. Oxford University Press.",
          "Kashyap, Subhash C. (2011). Our Constitution. National Book Trust, India.",
          "Fadia, B. L. (2017). Indian Government and Politics. Sahitya Bhawan."
        ]
      },
      {
        "courseTitle": "Culture and Communication",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To explore the relationship between culture and human communication.",
          "To understand intercultural competence and cultural diversity in India.",
          "To develop sensitivity to non-verbal cues and cultural values in messaging."
        ],
        "courseOutcomes": [
          "CO1: Recognize cultural dimensions of communication.",
          "CO2: Appreciate Indian composite culture and regional diversity (Ganga-Jamuni tehzeeb, Mithila heritage).",
          "CO3: Apply intercultural communication skills in diverse environments.",
          "CO4: Communicate effectively across diverse socio-cultural groups without bias."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Culture: Concepts and Dimensions",
              "topics": [
                "Definition and characteristics of Culture, Relationship between culture and language",
                "Indian cultural traditions: Plurality, Unity in Diversity, and Composite Heritage",
                "Cultural identity, Ethnocentrism, and Cultural Relativism"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Intercultural Communication Dynamics",
              "topics": [
                "Process of Intercultural Communication: High-context vs Low-context cultures",
                "Non-verbal communication across cultures: Kinesics, Proxemics, Haptics, Chronemics",
                "Barriers in intercultural communication: Stereotyping, prejudice, cultural shock, ethnocentrism"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Media, Culture and Modern Discourse",
              "topics": [
                "Folk media and traditional performing arts in cultural transmission (Maithili Lok Geet, Nautanki, Jat-Jatin)",
                "Impact of mass media and social media on contemporary culture and youth identity",
                "Cultivating cultural empathy and inclusive communication in a globalized world"
              ]
            }
          ]
        },
        "practical": {
          "title": "Cultural Documentation & Intercultural Workshops",
          "topics": [
            "Documenting local folk traditions, rituals, and folklore in Mithila/Bihar region",
            "Role-playing intercultural negotiation and conflict resolution scenarios",
            "Presenting multi-cultural comparative case studies"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Field Project",
              "marks": 30
            },
            {
              "component": "End-Term Examination",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Jandt, Fred E. (2017). An Introduction to Intercultural Communication: Identities in a Global Community. SAGE.",
          "Hall, Edward T. (1976). Beyond Culture. Anchor Books.",
          "Radhakrishnan, S. (1992). The Hindu View of Life. HarperCollins India."
        ]
      },
      {
        "courseTitle": "Digital Empowerment",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To empower students with digital skills for academic and professional advancement.",
          "To introduce citizen digital initiatives by Government of India (Digital India).",
          "To educate students on cybersecurity, digital footprint, and ethical digital conduct."
        ],
        "courseOutcomes": [
          "CO1: Access and navigate key Digital India public services and e-governance platforms.",
          "CO2: Utilize digital productivity and collaboration tools for online learning.",
          "CO3: Protect personal data and practice cyber safety against online threats.",
          "CO4: Promote digital inclusion and literacy in local communities."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Digital India and E-Governance Services",
              "topics": [
                "Vision and Pillars of Digital India Programme",
                "Key digital public platforms: DigiLocker, UMANG, DigiYatra, Aadhaar ecosystem, e-Sign",
                "Digital payment systems: BHIM, UPI, AePS, Fastag, RBI retail direct",
                "National Academic Depository (NAD) and Academic Bank of Credits (ABC)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Digital Tools for Education and Collaboration",
              "topics": [
                "SWAYAM, SWAYAM PRABHA, NPTEL, e-PG Pathshala, Shodhganga, National Digital Library of India (NDLI)",
                "Cloud collaboration: Google Workspace / MS Office 365, Cloud Drives, Online Docs & Sheets",
                "Virtual classrooms: Video conferencing tools, etiquette in webinars and remote learning"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Cybersecurity and Digital Ethics",
              "topics": [
                "Information security basics: Malware, Viruses, Phishing, Ransomware, Man-in-the-Middle attacks",
                "Cyber laws in India: Information Technology (IT) Act 2000 & 2008 amendments, National Cyber Crime Reporting Portal (cybercrime.gov.in)",
                "Social media safety, managing digital footprint, privacy settings, netiquette, and preventing cyberbullying"
              ]
            }
          ]
        },
        "practical": {
          "title": "Digital Services & Cyber Safety Lab",
          "topics": [
            "Creating and populating DigiLocker with academic certificates and identity documents",
            "Generating Academic Bank of Credits (ABC) ID on the national portal",
            "Configuring multi-factor authentication (MFA) and running security privacy audits on devices"
          ],
          "evaluation": [
            {
              "component": "Continuous Practical Logbook",
              "marks": 30
            },
            {
              "component": "End-Term Practical Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Ministry of Electronics and Information Technology (MeitY) - Digital India Resources.",
          "CERT-In Cyber Security Guidelines & Advisory Handbooks.",
          "Singhal, M. & Kumar, A. (2021). Cyber Security and Cyber Laws. Bharat Law House."
        ]
      },
      {
        "courseTitle": "Art of Being Happy",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To guide students towards finding happiness in life through psychological and philosophical perspectives.",
          "To foster positive emotions, mindfulness, and resilience.",
          "To examine Indian philosophical wisdom on Anand (Bliss) and contentment (Santosha)."
        ],
        "courseOutcomes": [
          "CO1: Differentiate between momentary pleasure and lasting happiness (Eudaimonia vs Hedonia).",
          "CO2: Apply positive psychology techniques (gratitude, mindfulness, forgiveness).",
          "CO3: Manage stress, negative self-talk, and build resilience.",
          "CO4: Foster joyful, meaningful interpersonal relationships and self-actualization."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Understanding Happiness",
              "topics": [
                "Concept of happiness across cultures: Eastern and Western perspectives",
                "Indian concept of Anand, Sukha-Dukha, and Santosha (Contentment in Patanjali Yoga Sutra)",
                "Science of happiness: Neurotransmitters (Dopamine, Serotonin, Oxytocin, Endorphin), PERMA model of Martin Seligman"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Pathways to Happiness",
              "topics": [
                "Gratitude journaling and expression, Cultivating kindness and altruism",
                "Mindfulness, meditation, and flow states in daily routines",
                "Developing optimism, overcoming cognitive distortions, handling failure and adversity"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Relationships and Wholesome Living",
              "topics": [
                "Building empathetic connections, deep friendships, and family harmony",
                "Work-life balance, digital detox, connecting with nature",
                "Finding purpose and meaning in life (Ikigai framework)"
              ]
            }
          ]
        },
        "practical": {
          "title": "Happiness Journaling & Mindfulness Practicum",
          "topics": [
            "Maintaining a 21-day Gratitude and Positive Reflection Journal",
            "Practicing guided breathing, mindfulness, and loving-kindness meditation (Metta Bhavana)",
            "Performing acts of random kindness and preparing a reflective case report"
          ],
          "evaluation": [
            {
              "component": "Continuous Happiness Journal & Reflections",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Reflection Presentation",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Seligman, Martin E. P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being. Free Press.",
          "Dalai Lama & Cutler, Howard C. (1998). The Art of Happiness: A Handbook for Living. Riverhead Books.",
          "García, Héctor & Miralles, Francesc (2016). Ikigai: The Japanese Secret to a Long and Happy Life. Penguin."
        ]
      },
      {
        "courseTitle": "Sports for Life - I",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To promote physical fitness, wellness, and healthy lifestyle habits through sports.",
          "To teach fundamentals of selected individual and team sports.",
          "To instill sportsmanship, discipline, leadership, and emotional regulation."
        ],
        "courseOutcomes": [
          "CO1: Assess personal physical fitness parameters (cardiorespiratory, muscular endurance, flexibility).",
          "CO2: Master fundamental skills and rules in chosen sports disciplines (Athletics, Badminton, Football, Cricket, Yoga).",
          "CO3: Practice injury prevention, warm-up, cool-down, and first aid techniques.",
          "CO4: Demonstrate sportsmanship, teamwork, and fair play in athletic events."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Foundations of Physical Fitness and Wellness",
              "topics": [
                "Meaning and dimensions of physical fitness, health, and wellness",
                "Components of physical fitness: Health-related vs Skill-related fitness",
                "Physiological benefits of regular physical exercise on heart, lungs, and musculoskeletal system"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Sports Fundamentals and Skill Training",
              "topics": [
                "Rules, dimensions, and basic skills in selected sports (Track and Field, Badminton, Volleyball, Kabaddi, Football)",
                "Principles of training: Overload, progression, specificity, recovery",
                "Sports nutrition: Macronutrients, hydration, pre-game and post-game meals"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Sports Safety, First Aid and Ethics",
              "topics": [
                "Warm-up and cool-down routines, Flexibility stretching techniques",
                "Common sports injuries (Sprains, Strains, Cramps, Fractures) and R.I.C.E. management",
                "Sports ethics: Fair play, anti-doping awareness, teamwork, and leadership"
              ]
            }
          ]
        },
        "practical": {
          "title": "Physical Fitness Testing & Sports Field Training",
          "topics": [
            "Fitness assessments: BMI, Cooper 12-minute run/walk, Sit & Reach flexibility test, Push-up/Plank tests",
            "Skill drills and friendly match participation in selected sports disciplines",
            "Demonstration of basic life support, CPR, and sports injury strapping"
          ],
          "evaluation": [
            {
              "component": "Continuous Field Performance & Fitness Log",
              "marks": 30
            },
            {
              "component": "End-Term Practical Skills & Physical Test",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Kamlesh, M. L. (2007). Physical Education: Facts and Foundations. Khel Sahitya Kendra.",
          "ACSM's Guidelines for Exercise Testing and Prescription (10th ed.). Wolters Kluwer.",
          "Singh, Ajmer et al. (2016). Essentials of Physical Education. Kalyani Publishers."
        ]
      },
      {
        "courseTitle": "Swachh Bharat",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To foster awareness about sanitation, hygiene, and waste management under Swachh Bharat Abhiyan.",
          "To understand scientific techniques of waste segregation, recycling, and composting.",
          "To encourage active community participation in cleanliness and health promotion."
        ],
        "courseOutcomes": [
          "CO1: Trace history and goals of Swachh Bharat Mission (Gramin & Urban).",
          "CO2: Apply solid and liquid waste management practices (segregation at source, 3Rs).",
          "CO3: Demonstrate community hygiene, sanitation standards, and water conservation.",
          "CO4: Execute community cleanliness campaigns and environmental audit drives."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Swachh Bharat Abhiyan",
              "topics": [
                "Gandhian vision of sanitation and cleanliness ('Sanitation is more important than independence')",
                "Evolution of Swachh Bharat Mission: Objectives, components, and Open Defecation Free (ODF, ODF+, ODF++) benchmarks",
                "Public health consequences of poor sanitation and contaminated water"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Solid and Liquid Waste Management",
              "topics": [
                "Types of waste: Biodegradable, Non-biodegradable, Plastic, Biomedical, E-waste",
                "Waste segregation at source: Wet waste (Green bin) vs Dry waste (Blue bin)",
                "Scientific disposal methods: Composting, Vermicomposting, Biogas generation, Sanitary Landfills",
                "Plastic Waste Management Rules and Single-Use Plastic alternatives"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Community Hygiene and Social Mobilization",
              "topics": [
                "Water hygiene and conservation: Rainwater harvesting, protection of water bodies (rivers, ponds)",
                "Role of youth, educational institutions, and Panchayati Raj institutions in sanitation drives",
                "Behavior change communication (BCC) and Swachhata Pakhwada awareness activities"
              ]
            }
          ]
        },
        "practical": {
          "title": "Community Cleanliness Drives & Waste Audits",
          "topics": [
            "Participating in campus cleaning drives (Shramdaan) and waste segregation audits",
            "Setting up a campus vermicomposting pit or organic compost demonstration",
            "Conducting public hygiene awareness surveys in nearby adopted villages or neighborhoods"
          ],
          "evaluation": [
            {
              "component": "Continuous Field Shramdaan & Journal",
              "marks": 30
            },
            {
              "component": "End-Term Practical Exam / Action Project",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Ministry of Jal Shakti, Department of Drinking Water and Sanitation - Swachh Bharat Guidelines.",
          "Centre for Science and Environment (CSE) - Waste Management Manuals.",
          "Bhide, A. D. & Sundaresan, B. B. - Solid Waste Management in Developing Countries. INSDOC."
        ]
      },
      {
        "courseTitle": "Ethics and Culture",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To introduce core ethical theories and cultural values in personal and social life.",
          "To foster universal human values: Truth, Righteous Conduct, Peace, Love, and Non-violence.",
          "To examine moral dilemmas in modern science, business, and society."
        ],
        "courseOutcomes": [
          "CO1: Explain classical Indian and Western ethical frameworks (Dharma, Nishkama Karma, Deontology, Utilitarianism).",
          "CO2: Apply ethical reasoning to contemporary moral dilemmas.",
          "CO3: Appreciate the rich cultural heritage and moral foundations of Indian civilization.",
          "CO4: Practice ethical conduct, professional integrity, and social responsibility."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Foundations of Ethics and Human Values",
              "topics": [
                "Definition, nature, and scope of Ethics, Morality vs Ethics",
                "Universal Human Values: Satya (Truth), Dharma (Righteous Conduct), Shanti (Peace), Prema (Love), Ahimsa (Non-violence)",
                "Indian Ethical Tradition: Purusharthas (Dharma, Artha, Kama, Moksha), Concept of Rna (Debts to society, ancestors, and nature)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Ethical Theories and Moral Reasoning",
              "topics": [
                "Nishkama Karma (Selfless Action) in Bhagavad Gita",
                "Western ethical perspectives: Kantian Deontology (Categorical Imperative), Utilitarianism (Bentham & Mill), Virtue Ethics (Aristotle)",
                "Ethical decision-making and resolving moral conflicts"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Applied Ethics in Modern Society",
              "topics": [
                "Bioethics and Environmental Ethics (Respect for all sentient beings, Vasudhaiva Kutumbakam)",
                "Professional ethics and code of conduct, Academic integrity (plagiarism, scientific honesty)",
                "Ethics in the digital age: AI ethics, privacy rights, and algorithmic fairness"
              ]
            }
          ]
        },
        "practical": {
          "title": "Moral Case Studies & Ethical Debates",
          "topics": [
            "Analyzing landmark moral dilemmas in healthcare, environment, and business through case studies",
            "Role play and debate on academic integrity and anti-corruption ethics",
            "Community outreach project on ethical living and cultural heritage preservation"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Case Journal",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Radhakrishnan, S. (1948). The Bhagavadgita. HarperCollins.",
          "Singer, Peter (2011). Practical Ethics. Cambridge University Press.",
          "Chakraborty, S. K. (1998). Values and Ethics for Organizations: Theory and Practice. Oxford University Press."
        ]
      },
      {
        "courseTitle": "गांधी और शिक्षा",
        "courseCode": "VAC-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "महात्मा गांधी के शैक्षिक विचारों और दर्शन से विद्यार्थियों को परिचित कराना।",
          "गांधीजी की 'नई तालीम' (बुनियादी शिक्षा) की प्रासंगिकता को समझना।",
          "शिक्षा में स्वावलंबन, श्रम की प्रतिष्ठा, और नैतिक मूल्यों के महत्व को रेखांकित करना।"
        ],
        "courseOutcomes": [
          "CO1: महात्मा गांधी के समग्र जीवन-दर्शन एवं शैक्षिक चिंतन को समझना।",
          "CO2: 'नई तालीम' (बुनियादी शिक्षा / Basic Education) के प्रमुख सिद्धांतों (3H: Head, Heart, Hand) का विश्लेषण करना।",
          "CO3: हस्तशिल्प, स्वावलंबन, मातृभाषा माध्यम और चरित्र निर्माण आधारित शिक्षा की महत्ता जानना।",
          "CO4: 21वीं सदी में गांधीवादी शिक्षा के व्यावहारिक अनुप्रयोगों को प्रस्तुत करना।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: गांधी का जीवन-दर्शन एवं शिक्षा की अवधारणा",
              "topics": [
                "गांधीजी का जीवन-दर्शन: सत्य, अहिंसा, सर्वोदय और स्वराज",
                "गांधी के अनुसार शिक्षा की परिभाषा: 'शिक्षा से मेरा तात्पर्य बालक और मनुष्य के शरीर, मन और आत्मा के सर्वोत्कृष्ट गुणों के सर्वांगीण प्रकटीकरण से है'",
                "औपनिवेशिक शिक्षा प्रणाली की गांधीवादी आलोचना (The Beautiful Tree)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: नई तालीम (वर्धा शिक्षा योजना - 1937)",
              "topics": [
                "वर्धा शिक्षा सम्मेलन और नई तालीम (बुनियादी शिक्षा) का उद्भव",
                "नई तालीम के प्रमुख सिद्धांत: 7 से 14 वर्ष के बच्चों के लिए अनिवार्य व निःशुल्क शिक्षा, मातृभाषा में शिक्षा, स्वावलंबन (Self-reliance)",
                "शिल्प-केंद्रित शिक्षा (Craft-centered education): सूत कातना, बुनाई, कृषि, बागवानी, चर्मकार्यता आदि",
                "श्रम की प्रतिष्ठा (Dignity of Labour) और उत्पादक कार्य का शिक्षा से संयोजन"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: समकालीन संदर्भ में गांधीवादी शिक्षा की प्रासंगिकता",
              "topics": [
                "चरित्र-निर्माण, शांति शिक्षा और नैतिक मूल्यों का विकास",
                "पर्यावरण संरक्षण, संवहनीय विकास और सादगीपूर्ण जीवनशैली",
                "राष्ट्रीय शिक्षा नीति (NEP 2020) में गांधीवादी विचारों (व्यावसायिक शिक्षा, मातृभाषा, अनुभवात्मक शिक्षण) का समावेश"
              ]
            }
          ]
        },
        "practical": {
          "title": "प्रायोगिक एवं क्षेत्र कार्य",
          "topics": [
            "किसी स्थानीय बुनियादी विद्यालय / गांधी आश्रम / खादी ग्रामोद्योग केंद्र का अध्ययन भ्रमण एवं रिपोर्ट",
            "हस्तशिल्प / बागवानी / कताई-बुनाई का व्यावहारिक अनुभवात्मक सत्र",
            "गांधीजी की पुस्तक 'सत्य के साथ मेरे प्रयोग' या 'हिंद स्वराज' के चयनित अध्यायों पर संगोष्ठी एवं प्रस्तुति"
          ],
          "evaluation": [
            {
              "component": "सतत मूल्यांकन एवं अध्ययन रिपोर्ट",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "गांधी, एम० के० - बुनियादी शिक्षा, नवजीवन प्रकाशन मंदिर, अहमदाबाद",
          "गांधी, एम० के० - हिंद स्वराज, नवजीवन प्रकाशन मंदिर, अहमदाबाद",
          "पटेल, एम० एस० - महात्मा गांधी का शिक्षा दर्शन",
          "धरमपाल - द ब्यूटीफुल ट्री: इंडिजिनस इंडियन एजुकेशन इन द एटीनथ सेंचुरी",
          "अग्रवाल, जे० सी० - गांधीवादी शिक्षा विचार एवं दर्शन"
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Vedic Mathematics",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To foster love for maths and remove math phobia among students.",
          "To enhance mental calculation speed and analytical abilities.",
          "To develop holistic understanding of ancient Indian mathematical heritage."
        ],
        "courseOutcomes": [
          "CO1: Apply Vedic sutras and sub-sutras for fast mental arithmetic.",
          "CO2: Perform complex multi-digit multiplication, division, squaring, and cubing rapidly.",
          "CO3: Solve algebraic equations and factorization using Vedic methods.",
          "CO4: Appreciate the scientific contributions of ancient Indian mathematicians (Aryabhata, Brahmagupta, Bhaskara II, Swami Bharati Krishna Tirtha)."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Vedic Sutras and Speedy Arithmetic",
              "topics": [
                "Historical background: Swami Bharati Krishna Tirtha and 16 Sutras & 13 Upa-sutras",
                "Ekadhikena Purvena (By one more than previous) & Ekanyunena Purvena",
                "Nikhilam Navatashcaramam Dashatah (All from 9 and last from 10) for rapid addition and subtraction",
                "Urdhva Tiryagbhyam (Vertically and crosswise) for multiplication of 2-digit, 3-digit and multi-digit numbers"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Squares, Square Roots, Cubes and Division",
              "topics": [
                "Yavadunam (By the deficiency) for squaring numbers near base 10, 100, 1000",
                "Dwandwa Yoga (Duplex method) for finding squares and square roots of large numbers",
                "Paravartya Yojayet (Transpose and Apply) for rapid division and polynomial division",
                "Dhvajanka (Flag method) for multi-digit long division without decimal hurdles"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Vedic Algebra and Indian Mathematical Heritage",
              "topics": [
                "Shunyam Samyasamuccaye (When the collection is the same, it is zero) for solving linear equations",
                "Gunita Samuccayah (Product of sum is sum of product) for factorization of quadratic expressions",
                "Historical contributions: Baudhayana Sulba Sutras (Pythagorean theorem), Zero and Decimal system, Madhava series (calculus)"
              ]
            }
          ]
        },
        "practical": {
          "title": "Mental Calculation Drills & Problem-Solving Lab",
          "topics": [
            "Speed calculation drills using Vertically-and-Crosswise and Nikhilam multiplication",
            "Benchmarking speed and accuracy: Vedic methods vs conventional school arithmetic",
            "Applying Vedic sutras in competitive exam aptitude problems"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Speed Math Journal",
              "marks": 30
            },
            {
              "component": "End-Term Practical Speed Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Tirtha, Swami Bharati Krishna (1965). Vedic Mathematics. Motilal Banarsidass.",
          "Glover, James. The Cosmic Calculator: A Vedic Mathematics Course for Schools. Motilal Banarsidass.",
          "Singhal, Vandana (2014). Vedic Mathematics for All Ages. Motilal Banarsidass."
        ]
      },
      {
        "courseTitle": "Yoga: Philosophy and Practice",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To introduce the philosophical roots and practical methodology of classical Yoga.",
          "To cultivate physical flexibility, mental serenity, and self-awareness.",
          "To practice Asanas, Pranayama, and Dhyana for psychosomatic health."
        ],
        "courseOutcomes": [
          "CO1: Explain the philosophical foundations of Yoga (Patanjali Yoga Sutra, Hatha Yoga).",
          "CO2: Understand the Eight Limbs of Yoga (Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi).",
          "CO3: Perform classical Asanas, Surya Namaskar, and cleansing Shatkarmas correctly.",
          "CO4: Apply Pranayama and meditation for stress alleviation and mental clarity."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Foundations and Philosophy of Yoga",
              "topics": [
                "Origin, history, and definitions of Yoga: 'Yogas Chitta Vritti Nirodhah' (Yoga is the cessation of fluctuations of mind)",
                "Four streams of Yoga: Jnana Yoga, Bhakti Yoga, Karma Yoga, Raja Yoga",
                "Patanjali's Ashtanga Yoga: Ethical foundations (Yama - Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha; Niyama - Shaucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana)"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Asanas, Bio-mechanics and Subtle Anatomy",
              "topics": [
                "Concept of Asana: 'Sthira Sukham Asanam' (Steady and comfortable posture)",
                "Classification of Asanas: Standing, Sitting, Prone, Supine, and Balancing postures",
                "Pancha Koshas (Five Sheaths of Existence), Chakras and Nadis (Ida, Pingala, Sushumna)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Pranayama, Meditation and Yogic Lifestyle",
              "topics": [
                "Science of Pranayama: Puraka, Kumbhaka, Rechaka; Types: Nadi Shodhana, Anuloma Viloma, Bhramari, Kapalabhati, Ujjayi, Sheetali",
                "Pratyahara and Dharana to Dhyana (Meditation) and Yoga Nidra",
                "Yogic diet (Mitahara: Sattvic, Rajasic, Tamasic) and stress management"
              ]
            }
          ]
        },
        "practical": {
          "title": "Asana, Pranayama & Meditation Practicum",
          "topics": [
            "Surya Namaskar (12 steps with breathing coordination and mantras)",
            "Core Asanas: Tadasana, Vrikshasana, Trikonasana, Paschimottanasana, Bhujangasana, Dhanurasana, Sarvangasana, Shavasana",
            "Pranayama (Nadi Shodhana, Bhramari, Sheetali) and guided Yoga Nidra deep relaxation"
          ],
          "evaluation": [
            {
              "component": "Continuous Practice Log & Attendance",
              "marks": 30
            },
            {
              "component": "End-Term Practical Asana/Pranayama Demonstration",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Iyengar, B. K. S. (2002). Light on Yoga. HarperCollins.",
          "Saraswati, Swami Satyananda. Asana Pranayama Mudra Bandha. Bihar School of Yoga, Munger.",
          "Patanjali Yoga Sutras (Trans. Swami Vivekananda). Advaita Ashrama."
        ]
      },
      {
        "courseTitle": "National Cadet Corps (NCC)",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To develop character, comradeship, discipline, leadership, and ideals of selfless service.",
          "To provide basic military knowledge, drill training, and weapon awareness.",
          "To motivate youth to choose a career in the Armed Forces."
        ],
        "courseOutcomes": [
          "CO1: Demonstrate military foot drill, bearing, and parade discipline.",
          "CO2: Understand weapon handling, safety rules, and firing positions.",
          "CO3: Read topographic maps, use compass, and navigate terrain in field craft.",
          "CO4: Participate actively in disaster relief, community development, and adventure sports."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: NCC Organization & National Integration",
              "topics": [
                "Aims and Motto of NCC ('Unity and Discipline'), Organization of NCC, NCC Song",
                "Armed Forces: Organization of Army, Navy, Air Force; Badges of rank and honours",
                "National Integration: Factors affecting national integration, Role of NCC in nation-building"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Drill, Weapon Training and Personality Development",
              "topics": [
                "Foot Drill: Attention, Stand at Ease, Turning, Marching, Saluting, Sizing",
                "Weapon Training: Characteristics of .22 Rifle, stripping, assembling, cleaning, holding, aiming, and firing positions",
                "Leadership traits, Communication skills, Time management, Teamwork"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Map Reading, Field Craft and Disaster Management",
              "topics": [
                "Map Reading: Types of maps, conventional signs, scales, compass bearing, finding own position",
                "Field Craft and Battle Craft: Judging distance, description of targets, field signals",
                "Disaster Management: Role of NCC cadets during natural and man-made disasters, Fire fighting and First Aid"
              ]
            }
          ]
        },
        "practical": {
          "title": "Drill, Weapon Handling & Outdoor Camp Training",
          "topics": [
            "Squad drill movements, turns, and march-past coordination on parade ground",
            "Weapon stripping, assembling, and sight alignment practice with .22 Rifle",
            "Prismatic compass handling, grid coordinates reading, and route navigation on topo-sheets"
          ],
          "evaluation": [
            {
              "component": "Continuous Drill & Camp Performance",
              "marks": 30
            },
            {
              "component": "End-Term Practical Parade & Drill Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Field Craft Test",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Directorate General NCC - Cadet's Hand Book (Common Subjects & Specialised Subjects).",
          "Mishra, R. K. (2018). NCC: A Guide for Cadets. Ramesh Publishing House."
        ]
      },
      {
        "courseTitle": "National Service Scheme (NSS)",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To understand the community in which students work and identify its needs and problems.",
          "To develop among students a sense of civic and social responsibility.",
          "To acquire leadership qualities and democratic attitudes through community service."
        ],
        "courseOutcomes": [
          "CO1: Comprehend the philosophy, motto ('NOT ME BUT YOU'), and organization of NSS.",
          "CO2: Conduct community socio-economic surveys and identify grassroots challenges.",
          "CO3: Plan and execute health, literacy, afforestation, and cleanliness drives.",
          "CO4: Mobilize community resources and facilitate disaster relief and voluntary blood donation."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction and Basic Concepts of NSS",
              "topics": [
                "History and philosophy of NSS, Motto ('Not Me But You'), NSS Symbol, Badge, and Song",
                "Administrative structure at National, State, University, and College levels",
                "Regular activities vs Special Camping programmes"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Community Engagement and Social Issues",
              "topics": [
                "Methods of community mobilization, Conducting socio-economic surveys in adopted villages",
                "Major social issues: Illiteracy, gender disparity, child labour, substance abuse, public health",
                "Government flagship programs: Poshan Abhiyan, Beti Bachao Beti Padhao, Ayushman Bharat, Jal Jeevan Mission"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Volunteerism, Disaster Management and Life Skills",
              "topics": [
                "Role of youth in national development, Voluntary blood donation, Organ donation awareness",
                "Disaster preparedness: Rescue, relief, rehabilitation, First aid and psychological support",
                "Life skills development: Empathy, conflict resolution, advocacy, and grassroots leadership"
              ]
            }
          ]
        },
        "practical": {
          "title": "Community Outreach & Village Camp Practicum",
          "topics": [
            "Organization of health / hygiene / blood donation / tree plantation camp in an adopted locality",
            "Socio-economic baseline survey and PRA (Participatory Rural Appraisal) in village",
            "Street play (Nukkad Natak) and poster exhibition on critical social themes"
          ],
          "evaluation": [
            {
              "component": "Continuous Field Logbook & Participation",
              "marks": 30
            },
            {
              "component": "End-Term Community Action Report Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Field Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Ministry of Youth Affairs and Sports - NSS Manual (Revised). Government of India.",
          "Chopra, J. K. (2015). Youth and Community Development. Rawat Publications."
        ]
      },
      {
        "courseTitle": "Science and Society",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To explore the dialectical relationship between scientific discoveries and societal progress.",
          "To nurture scientific temper, rational thinking, and evidence-based inquiry.",
          "To examine ethical, ecological, and socio-economic implications of emerging technologies."
        ],
        "courseOutcomes": [
          "CO1: Trace historical milestones in science and understand scientific methodology.",
          "CO2: Foster scientific temper and dispel superstitions and pseudo-scientific claims.",
          "CO3: Appreciate the contributions of ancient and modern Indian scientists.",
          "CO4: Critically evaluate the societal and ethical impact of AI, biotechnology, and nuclear energy."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: The Nature of Science and Scientific Temper",
              "topics": [
                "What is Science?: Scientific method, observation, hypothesis, experimentation, peer review",
                "Article 51A(h) of Indian Constitution: Duty to develop scientific temper, humanism, and spirit of inquiry",
                "Differentiating between science, technology, and pseudo-science/superstitions"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Science in Indian History and Modern Pioneers",
              "topics": [
                "Indian scientific heritage: Metallurgy (Iron pillar), Ayurveda (Sushruta - surgery), Astronomy & Math (Aryabhata, Varahamihira)",
                "Pioneers of modern Indian science: J. C. Bose, C. V. Raman, S. N. Bose, Meghnad Saha, Homi Bhabha, Vikram Sarabhai, A. P. J. Abdul Kalam",
                "India's space (ISRO) and atomic energy (DAE) journey: Green Revolution, White Revolution, Chandrayaan, Mangalyaan"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Emerging Technologies, Ethics and Sustainable Future",
              "topics": [
                "Biotechnology: Genetic engineering, GM crops, CRISPR-Cas9, bioethics",
                "Information Revolution: Artificial Intelligence, automation, cybersecurity, digital divide",
                "Environmental sustainability, renewable energy (Solar/Hydrogen), climate change, and citizen science"
              ]
            }
          ]
        },
        "practical": {
          "title": "Science Communication & Rationality Projects",
          "topics": [
            "Demonstrating simple science experiments to demystify superstitious 'miracles'",
            "Case study presentation on a landmark scientific controversy or bioethical issue",
            "Writing a popular science article on recent breakthroughs (Space, AI, Green energy)"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Science Project",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Presentation",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Bernal, J. D. (1969). Science in History (4 vols). Penguin.",
          "Sagan, Carl (1996). The Demon-Haunted World: Science as a Candle in the Dark. Ballantine Books.",
          "Narlikar, Jayant V. (2003). The Scientific Edge: The Indian Scientist from Vedic to Modern Times. Penguin."
        ]
      },
      {
        "courseTitle": "Social and Emotional Learning",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To foster self-awareness, emotional regulation, and interpersonal competence.",
          "To understand CASEL framework of Social and Emotional Learning (SEL).",
          "To equip students with empathy, responsible decision-making, and stress coping tools."
        ],
        "courseOutcomes": [
          "CO1: Demonstrate self-awareness and emotional literacy (identifying and naming emotions).",
          "CO2: Apply self-management strategies for anxiety, impulse control, and motivation.",
          "CO3: Cultivate social awareness, active listening, and empathy towards diverse viewpoints.",
          "CO4: Make ethical, responsible personal and academic choices."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Self-Awareness and Self-Management",
              "topics": [
                "Understanding emotions: Emotional vocabulary, Wheel of Emotions, triggers",
                "Self-awareness: Recognizing strengths, values, prejudices, and growth mindset",
                "Self-management: Emotional regulation, impulse control, stress management techniques (Box breathing, progressive muscle relaxation), goal setting"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Social Awareness and Interpersonal Relationship Skills",
              "topics": [
                "Social awareness: Perspective-taking, empathy vs sympathy, appreciating diversity and inclusion",
                "Relationship skills: Clear communication, active listening, conflict resolution, resisting negative peer pressure, seeking help"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Responsible Decision-Making and Resilience",
              "topics": [
                "Responsible decision-making: Ethical considerations, evaluating consequences, problem-solving model (POOCH)",
                "Developing psychological resilience: Bouncing back from academic setbacks and life failures",
                "Cultivating compassion, prosocial behavior, and healthy digital boundaries"
              ]
            }
          ]
        },
        "practical": {
          "title": "SEL Experiential Workshops & Role-Play",
          "topics": [
            "Emotion tracking journal and trigger-response reflection logs",
            "Role-playing interpersonal conflict scenarios and non-violent communication practice",
            "Group empathy circle sessions and peer support mentoring drills"
          ],
          "evaluation": [
            {
              "component": "Continuous Reflection Journal & Exercises",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce & Experiential Presentation",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Goleman, Daniel (1995). Emotional Intelligence: Why It Can Matter More Than IQ. Bantam Books.",
          "CASEL (Collaborative for Academic, Social, and Emotional Learning) - SEL Competencies Framework.",
          "Rosenberg, Marshall B. (2003). Nonviolent Communication: A Language of Life. PuddleDancer Press."
        ]
      },
      {
        "courseTitle": "Ecology and Literature",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "To explore the intersection between environmental consciousness and literary texts (Ecocriticism).",
          "To appreciate nature representations in classical, modern, and indigenous literature.",
          "To examine ecological crises through literary narratives, poetry, and climate fiction (Cli-Fi)."
        ],
        "courseOutcomes": [
          "CO1: Define Ecocriticism and understand anthropocentrism vs biocentrism in literature.",
          "CO2: Analyze nature depiction in classical Indian poetry (Kalidasa, Sangam, Bhakti poetry) and Romanticism.",
          "CO3: Interpret modern ecological narratives, environmental protest poetry, and tribal folklore.",
          "CO4: Articulate eco-literary responses to climate change, deforestation, and biodiversity loss."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Introduction to Ecocriticism and Nature in Literature",
              "topics": [
                "Definition and waves of Ecocriticism: From nature writing to environmental justice and climate fiction",
                "Key concepts: Anthropocentrism, Biocentrism, Deep Ecology, Ecofeminism, Place and Wilderness",
                "Indian eco-philosophical foundations: Prakriti-Purusha, Aranyani (Goddess of forest in Rigveda), Sacred groves"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Classical and Romantic Representations of Nature",
              "topics": [
                "Kalidasa's 'Meghadutam' and 'Abhijnanasakuntalam' (Ecology of hermitage and seasonal landscapes)",
                "English Romantic poetry: Wordsworth (Tintern Abbey / Daffodils), Keats, and nature as a living presence",
                "Tagore's ecological vision: 'The Religion of the Forest' and Santiniketan's open-air education"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Modern Eco-Literature, Indigenous Voices and Climate Fiction",
              "topics": [
                "Environmental struggles in Indian literature: Chipko movement songs (Ghanshyam Raturi), Narmada Bachao narratives",
                "Indigenous and tribal eco-literature: Tales of sacred hills, rivers, and non-human kinship",
                "Contemporary Climate Fiction (Cli-Fi): Amitav Ghosh's 'The Great Derangement' and 'The Hungry Tide' (Sundarbans ecology)"
              ]
            }
          ]
        },
        "practical": {
          "title": "Eco-Literary Essays & Nature Writing Practicum",
          "topics": [
            "Writing an original nature observation diary / eco-poem based on local surroundings",
            "Critical analysis of an environmental novel, play, or eco-documentary",
            "Field documentation of local sacred groves, river stories, or folklore in Mithila"
          ],
          "evaluation": [
            {
              "component": "Continuous Assessment & Nature Portfolio",
              "marks": 30
            },
            {
              "component": "End-Term Written Exam",
              "marks": 50
            },
            {
              "component": "Viva-Voce",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "Glotfelty, Cheryll & Fromm, Harold (1996). The Ecocriticism Reader. University of Georgia Press.",
          "Ghosh, Amitav (2016). The Great Derangement: Climate Change and the Unthinkable. Penguin.",
          "Guha, Ramachandra (2000). Environmentalism: A Global History. Oxford University Press."
        ]
      },
      {
        "courseTitle": "भारतीय भक्ति परंपरा और मानव मूल्य",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "भारतीय भक्ति आंदोलन की सामाजिक-सांस्कृतिक चेतना और अखिल भारतीय विस्तार से परिचित कराना।",
          "भक्त कवियों के पदों के माध्यम से सार्वभौमिक मानवीय मूल्यों (समानता, करुणा, भ्रातृत्व) का बोध कराना।",
          "जाति, संप्रदाय और लैंगिक विषमता के विरुद्ध भक्ति साहित्य के प्रगतिशील योगदान को समझना।"
        ],
        "courseOutcomes": [
          "CO1: भक्ति आंदोलन के ऐतिहासिक उद्भव (दक्षिण से उत्तर भारत) और अखिल भारतीय स्वरूप को समझना।",
          "CO2: निर्गुण एवं सगुण भक्ति काव्यधाराओं के दार्शनिक पक्षों का विश्लेषण करना।",
          "CO3: कबीर, जायसी, सूरदास, तुलसीदास, मीराबाई, विद्यापति, रैदास, गुरु नानक के काव्य में निहित सामाजिक न्याय व मानव मूल्यों को आत्मसात करना।",
          "CO4: समकालीन समाज में साम्प्रदायिक सद्भाव एवं मानवीय एकता के लिए भक्ति साहित्य की उपादेयता रेखांकित करना।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: भक्ति आंदोलन: अवधारणा एवं अखिल भारतीय परिप्रेक्ष्य",
              "topics": [
                "भक्ति की अवधारणा, भक्ति आंदोलन की ऐतिहासिक पृष्ठभूमि एवं सामाजिक कारण",
                "भक्ति का अखिल भारतीय विस्तार: आलवार व नयनार (दक्षिण भारत), असम (शंकरदेव), महाराष्ट्र (ज्ञानेश्वर, तुकाराम), गुजरात (नरसी मेहता), पंजाब (गुरु नानक), बंगाल (चैतन्य महाप्रभु)",
                "भक्ति आंदोलन की प्रमुख प्रवृत्तियाँ: लोकभाषाओं की प्रतिष्ठा, जाति-वर्ण भेद का निषेध, बाह्याडंबरों का विरोध"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: प्रमुख भक्त कवि एवं मानव मूल्य",
              "topics": [
                "निर्गुण संत काव्य: कबीर (समानता, ढोंग-खंडन, अंतर-साधना), गुरु नानक, संत रैदास (बेगमपुरा की सामाजिक समतावादी संकल्पना)",
                "सूफी प्रेमाख्यानक काव्य: मलिक मोहम्मद जायसी (प्रेम-तत्व और उदात्त मानवीय दृष्टि)",
                "सगुण कृष्ण-भक्ति काव्य: विद्यापति (मिथिला के लोक-संस्कार व भक्ति), सूरदास (वात्सल्य व सख्य भाव), मीराबाई (स्त्री-मुक्ति व अनन्य समर्पण)",
                "सगुण राम-भक्ति काव्य: तुलसीदास (समन्वय चेतना, लोकमंगल की भावना, पारिवारिक व सामाजिक कर्तव्य)"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: समकालीन समाज और भक्ति साहित्य की प्रासंगिकता",
              "topics": [
                "साम्प्रदायिक सौहार्द, सर्वधर्म समभाव और विश्व बंधुत्व",
                "मानवीय मूल्य: सत्य, करुणा, सेवा, विनम्रता, अहिंसा, परोपकार",
                "सांस्कृतिक राष्ट्रीयता और जनपदीय लोक-संस्कृतियों का एकात्म भाव"
              ]
            }
          ]
        },
        "practical": {
          "title": "प्रायोगिक अभ्यास एवं सांस्कृतिक सत्र",
          "topics": [
            "भक्त कवियों (विद्यापति, कबीर, मीरा, तुलसी) के पदों का सस्वर गायन एवं भाव-विश्लेषण",
            "स्थानीय भक्ति परंपराओं, लोकगीतों, संकीर्तन मंडलियों का अध्ययन एवं प्रलेखीकरण",
            "'भक्ति साहित्य में सामाजिक समरसता' विषय पर संगोष्ठी एवं शोध-आलेख प्रस्तुति"
          ],
          "evaluation": [
            {
              "component": "सतत मूल्यांकन एवं गायन/प्रस्तुति जर्नल",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "शुक्ल, आचार्य रामचंद्र - हिंदी साहित्य का इतिहास, नागरी प्रचारिणी सभा, वाराणसी",
          "द्विवेदी, हजारीप्रसाद - कबीर, राजकमल प्रकाशन, नई दिल्ली",
          "सिंह, नामवर - दूसरी परंपरा की खोज, राजकमल प्रकाशन",
          "झा, शिवप्रसाद - मिथिला की भक्ति परंपरा और विद्यापति",
          "शर्मा, रामविलास - भारतीय साहित्य के इतिहास की समस्याएँ, वाणी प्रकाशन"
        ]
      },
      {
        "courseTitle": "साहित्य, संस्कृति और सिनेमा",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "साहित्य, संस्कृति और सिनेमा के अंतर्संबंधों को समझाना।",
          "सिनेमा को दृश्य-श्रव्य माध्यम और सांस्कृतिक अभिव्यक्ति के रूप में विश्लेषित करना।",
          "साहित्यिक कृतियों के सिनेमाई रूपांतरण की प्रक्रिया और चुनौतियों से अवगत कराना।"
        ],
        "courseOutcomes": [
          "CO1: साहित्य, संस्कृति और सिनेमा के अंतःसंबंध को समझ सकेंगे।",
          "CO2: भारतीय सिनेमा के ऐतिहासिक विकास एवं सामाजिक सरोकारों का मूल्यांकन कर सकेंगे।",
          "CO3: साहित्यिक कृतियों पर आधारित फिल्मों (उदा. 'तीसरी कसम', 'गोदान', 'शतरंज के खिलाड़ी') का पाठ्य व दृश्य विश्लेषण कर सकेंगे।",
          "CO4: सिनेमा की भाषा, दृश्य-विधान, पार्श्वगायन एवं सांस्कृतिक प्रभावों पर समीक्षात्मक दृष्टि विकसित कर सकेंगे।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: साहित्य, संस्कृति और सिनेमा: अंतःसंबंध",
              "topics": [
                "साहित्य और सिनेमा: समानता एवं भिन्नता (शब्द बनाम दृश्य)",
                "सिनेमा की भाषा: फ्रेम, शॉट, कैमरा मूवमेंट, प्रकाश, ध्वनि, संपादन (Editing)",
                "सिनेमा और भारतीय संस्कृति: जन-संस्कृति, उत्सव, लोक-कलाओं और सामाजिक यथार्थ का प्रतिबिंब"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: भारतीय सिनेमा का विकास एवं धाराएँ",
              "topics": [
                "भारतीय सिनेमा का प्रारंभिक दौर: मूक फिल्में (राजा हरिश्चंद्र), सवाक फिल्में (आलम आरा)",
                "स्वर्ण युग (1950-60 के दशक): सामाजिक यथार्थवाद (सत्यजीत रे, बिमल रॉय, गुरु दत्त, राज कपूर)",
                "समानांतर (कला) सिनेमा आंदोलन (श्याम बेनेगल, गोविंद निहलानी, मृणाल सेन)",
                "समकालीन सिनेमा और ओटीटी (OTT) प्लेटफॉर्म: विषयगत विविधता और चुनौतियाँ"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: साहित्यिक कृतियों का सिनेमाई रूपांतरण",
              "topics": [
                "रूपांतरण की प्रविधि और चुनौतियाँ: उपन्यास/कहानी से पटकथा की यात्रा",
                "प्रमुख रूपांतरित फिल्में: फणीश्वरनाथ रेणु की 'मारे गए गुलफाम' पर आधारित फिल्म 'तीसरी कसम', प्रेमचंद के 'शतरंज के खिलाड़ी' (सत्यजीत रे) एवं 'गोदान', शरतचंद्र की 'देवदास'",
                "सिनेमाई संगीत, गीत-परंपरा (साहिर लुधियानवी, शैलेंद्र, मजरूह सुल्तानपुरी, गुलजार) और भारतीय जनमानस"
              ]
            }
          ]
        },
        "practical": {
          "title": "फिल्म स्क्रीनिंग, समीक्षा एवं कार्यशाला",
          "topics": [
            "किसी साहित्यिक कृति पर आधारित शास्त्रीय फिल्म की स्क्रीनिंग एवं तुलनात्मक दृश्य समीक्षा लेखन",
            "फिल्म समीक्षा (Film Review) और पोस्टर निर्माण अभ्यास",
            "स्थानीय सिनेमा / मैथिली-भोजपुरी सिनेमा के सांस्कृतिक विमर्श पर परियोजना रिपोर्ट"
          ],
          "evaluation": [
            {
              "component": "सतत फिल्म समीक्षा जर्नल व अभ्यास",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी (वाइवा)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "तिवारी, विनोद - साहित्य, संस्कृति और सिनेमा, वाणी प्रकाशन",
          "गौतम, रमेश - सिनेमा और साहित्य, स्वराज प्रकाशन",
          "रेणु, फणीश्वरनाथ - मारे गए गुलफाम (तीसरी कसम), राजकमल प्रकाशन",
          "रे, सत्यजीत - विषय सिनेमा, अनुवाद: अमित कुमार, राजकमल",
          "मिश्र, यतींद्र - विभास: भारतीय सिनेमा के सौ वर्ष, वाणी प्रकाशन"
        ]
      },
      {
        "courseTitle": "सृजनात्मक लेखन के विविध आयाम",
        "courseCode": "VAC-2",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
        "courseObjectives": [
          "सृजनात्मक लेखन की विविध विधाओं (कविता, कहानी, लघुकथा, संस्मरण, निबंध) का सैद्धांतिक एवं व्यावहारिक ज्ञान देना।",
          "विद्यार्थियों में कल्पनाशीलता, भाव-प्रवणता और भाषायी सौष्ठव को संवर्धित करना।",
          "प्रिंट, इलेक्ट्रॉनिक एवं डिजिटल मीडिया के लिए सृजनात्मक लेखन कौशल विकसित करना।"
        ],
        "courseOutcomes": [
          "CO1: सृजनात्मक लेखन की अवधारणा, प्रेरणा-स्रोत और रचना-प्रक्रिया को समझना।",
          "CO2: गद्य एवं पद्य की विभिन्न विधाओं के शिल्पगत घटकों का विश्लेषण करना।",
          "CO3: मौलिक कविता, कहानी, फीचर, ब्लॉग एवं साक्षात्कार लिखने की क्षमता अर्जित करना।",
          "CO4: संपादन, प्रूफ-शोधन एवं पांडुलिपि तैयार करने के व्यावहारिक कौशलों में दक्ष होना।"
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "यूनिट 1: सृजनात्मक लेखन: स्वरूप एवं रचना-प्रक्रिया",
              "topics": [
                "सृजनात्मक लेखन: अर्थ, परिभाषा, महत्व एवं प्रेरणा",
                "रचना-प्रक्रिया के चरण: अनुभव, संवेदन, कल्पना, विचार, भाषा और संरचना",
                "सृजनात्मक भाषा के लक्षण: बिम्ब-विधान, प्रतीक, मुहावरेदार प्रयोग, वक्रोक्ति एवं लय"
              ]
            },
            {
              "unitNumber": 2,
              "title": "यूनिट 2: पद्य एवं गद्य विधाओं का सृजन",
              "topics": [
                "कविता लेखन: तुक, लय, छंद, मुक्तछंद, गीत एवं हाइकु विधा",
                "कथा लेखन: कहानी एवं लघुकथा के तत्व (कथानक, चरित्र-चित्रण, संवाद, देशकाल, उद्देश्य, शीर्षक)",
                "कथेतर गद्य विधाएँ: संस्मरण, रेखाचित्र, यात्रा-वृत्तांत, ललित निबंध, डायरी लेखन"
              ]
            },
            {
              "unitNumber": 3,
              "title": "यूनिट 3: आधुनिक मीडिया एवं व्यावहारिक लेखन",
              "topics": [
                "समाचार पत्रों के लिए लेखन: फीचर लेखन, संपादकीय, पुस्तक समीक्षा, साक्षात्कार",
                "डिजिटल मीडिया के लिए सृजन: ब्लॉगिंग (Blogging), सोशल मीडिया पोस्ट लेखन, व्लॉग स्क्रिप्ट",
                "संपादन एवं पांडुलिपि तैयारी: प्रूफ-रीडिंग के संकेत, वर्तनी-शुद्धि, शीर्षक चयन"
              ]
            }
          ]
        },
        "practical": {
          "title": "सृजन कार्यशाला एवं मौलिक पोर्टफोलियो",
          "topics": [
            "मौलिक कविता / लघुकथा / ललित निबंध का लेखन एवं कक्षा में सहपाठी समीक्षा (Peer Review)",
            "समसामयिक सामाजिक मुद्दे पर एक पूर्ण फीचर एवं साक्षात्कार आलेख तैयार करना",
            "छात्र पत्रिका / ई-पत्रिका के लिए संपादन, प्रूफ-रीडिंग एवं लेआउट डिजाइन परियोजना"
          ],
          "evaluation": [
            {
              "component": "सतत मौलिक रचना संचिका (Portfolio)",
              "marks": 30
            },
            {
              "component": "सत्रांत लिखित परीक्षा",
              "marks": 50
            },
            {
              "component": "मौखिकी एवं रचना पाठ (Viva)",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "पांडेय, मैनेजर - शब्द और कर्म, वाणी प्रकाशन",
          "गौतम, रमेश - रचनात्मक लेखन, वाणी प्रकाशन",
          "वजाहत, असगर - कहानी की तलाश में, राजकमल प्रकाशन",
          "गुप्ता, मन्मथनाथ - कथा शिल्प, सामयिक प्रकाशन",
          "शर्मा, कृष्णदत्त - व्यावहारिक हिंदी और रचना, साहित्य भवन"
        ]
      }
    ]
  },
  "MDC": {
    "1st": [],
    "2nd": [],
    "3rd": []
  },
  "INT": {
    "5th": [
      {
        "courseTitle": "Internship / Apprenticeship / Industry Project - Stage I",
        "courseCode": "INT-1",
        "credits": "2",
        "marks": "100",
        "evaluationScheme": "Continuous Organization/Industry Mentor Evaluation: 50 Marks | College Faculty Guide Evaluation & Viva-Voce: 50 Marks",
        "courseObjectives": [
          "To provide students with experiential learning by working in industries, research labs, corporates, government or non-government organizations.",
          "To bridge the gap between classroom theoretical curriculum and professional job-readiness requirements.",
          "To develop workplace ethics, technical skills, teamwork, and problem-solving ability in real-world environments."
        ],
        "courseOutcomes": [
          "CO1: Apply undergraduate academic knowledge to solve practical organizational problems.",
          "CO2: Demonstrate workplace professional ethics, time management, and communication skills.",
          "CO3: Execute assigned technical/managerial tasks in a collaborative team setting.",
          "CO4: Compile structured internship logs, technical reports, and present findings to an evaluation committee."
        ],
        "theory": {
          "credits": "0",
          "units": [
            {
              "unitNumber": 1,
              "title": "Module 1: Orientation, Workplace Safety and Ethics",
              "topics": [
                "Industry structure, organizational hierarchy, reporting lines, and professional workplace conduct",
                "Occupational health and safety norms, data security, non-disclosure agreements (NDAs), and intellectual property guidelines",
                "Goal setting: Identification of internship objectives, milestones, and weekly deliverables in consultation with industry mentor"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Module 2: Field Experience, Task Execution and Data Collection",
              "topics": [
                "Hands-on execution of daily assigned tasks, workflow management, and operational problem solving",
                "Primary and secondary data collection, laboratory experimentation, software coding, or marketing outreach as per sector",
                "Maintenance of a daily work diary/logbook signed periodically by the external supervisor"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Module 3: Report Preparation, Presentation and Viva-Voce",
              "topics": [
                "Structuring of the formal internship report (Title page, Certificate of completion, Company profile, Methodology, Work accomplished, Learnings & Recommendations)",
                "Preparation of PowerPoint presentation highlighting key achievements, case studies, and learnings",
                "Defense before the institutional board of examiners during the end-semester viva-voce"
              ]
            }
          ]
        },
        "practical": {
          "title": "Field Internship Duration: Minimum 120 Hours (4 Weeks)",
          "topics": [
            "Field/laboratory/office-based practical work in approved host organization",
            "Weekly progress review meetings with designated internal faculty supervisor",
            "Submission of final bound Internship Project Report along with employer feedback certificate"
          ],
          "evaluation": [
            {
              "component": "Industry Mentor Evaluation (Attendance, Discipline, Task Execution)",
              "marks": 50
            },
            {
              "component": "Comprehensive Internship Report Review by Faculty Committee",
              "marks": 30
            },
            {
              "component": "Viva-Voce and Oral Presentation Defense",
              "marks": 20
            }
          ]
        },
        "suggestedBooks": [
          "UGC Guidelines on Apprenticeship/Internship Embedded Degree Programmes (2020).",
          "AICTE Internship Policy: Guidelines & Procedures (2018).",
          "Sweitzer, H. F. & King, M. A. - The Successful Internship: Transformation and Empowerment in Experiential Learning. Cengage Learning."
        ]
      }
    ]
  },
  "RP": {
    "7th": [
      {
        "courseTitle": "Research Project / Dissertation - Stage I (Methodology & Proposal)",
        "courseCode": "RP-1",
        "credits": "4",
        "marks": "100",
        "evaluationScheme": "Continuous Progress & Synopsis Assessment: 30 Marks | End-Term Progress Report & Defense: 70 Marks",
        "courseObjectives": [
          "To introduce 4-year UG Honours with Research students to advanced scientific and academic research methodologies.",
          "To train students in literature review, gap identification, problem formulation, and research design.",
          "To prepare students to formulate a formal research proposal with ethical considerations and research tools."
        ],
        "courseOutcomes": [
          "CO1: Conduct exhaustive review of literature using peer-reviewed indexed research databases (Scopus, Web of Science, PubMed, Shodhganga).",
          "CO2: Formulate well-defined research questions, testable hypotheses, and structured objectives.",
          "CO3: Select appropriate research methodologies, experimental protocols, sampling techniques, and analytical tools.",
          "CO4: Present and defend a sound Research Synopsis / Proposal before the Departmental Research Committee (DRC)."
        ],
        "theory": {
          "credits": "1",
          "units": [
            {
              "unitNumber": 1,
              "title": "Unit 1: Foundations of Research and Problem Identification",
              "topics": [
                "Meaning, objectives, and types of research: Qualitative, Quantitative, Experimental, Descriptive, Exploratory, and Empirical",
                "Identification of research problem, literature review strategies, synthesis matrix, and locating research gaps",
                "Formulation of research questions, objectives, theoretical frameworks, and research hypotheses"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Unit 2: Research Design, Sampling and Instrumentation",
              "topics": [
                "Research designs: Experimental, quasi-experimental, observational, cross-sectional, and longitudinal",
                "Sampling designs: Probability vs Non-probability sampling methods, sample size calculation",
                "Data collection tools: Questionnaire design, interviews, laboratory protocols, standardization of instruments, reliability and validity"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Unit 3: Research Ethics, Plagiarism and Synopsis Writing",
              "topics": [
                "Research ethics: Informed consent, biosafety, animal ethics, data fabrication, falsification, and plagiarism (UGC guidelines)",
                "Reference management tools: Mendeley, Zotero, EndNote; Citation styles (APA, MLA, IEEE, Chicago)",
                "Structure of a formal Research Proposal / Synopsis: Introduction, Literature review, Methodology, Timeline, and Expected outcomes"
              ]
            }
          ]
        },
        "practical": {
          "title": "Research Laboratory Work & Proposal Defense (3 Credits)",
          "topics": [
            "Systematic literature retrieval using academic search engines and reference manager software",
            "Pilot experimentation / Preliminary field surveys and data validation",
            "Preparation and oral defense of the Research Synopsis before the Departmental Research Committee"
          ],
          "evaluation": [
            {
              "component": "Continuous Faculty Guide Assessment & Logbook",
              "marks": 30
            },
            {
              "component": "Evaluation of Written Research Synopsis",
              "marks": 40
            },
            {
              "component": "Synopsis Defense Seminar and Viva-Voce",
              "marks": 30
            }
          ]
        },
        "suggestedBooks": [
          "Kothari, C. R. & Garg, Gaurav (2019). Research Methodology: Methods and Techniques, 4th ed. New Age International.",
          "Creswell, John W. & Creswell, J. David (2018). Research Design: Qualitative, Quantitative, and Mixed Methods Approaches. SAGE.",
          "Kumar, Ranjit (2019). Research Methodology: A Step-by-Step Guide for Beginners. SAGE Publications."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Research Project / Dissertation - Final Stage & Thesis",
        "courseCode": "RP-2",
        "credits": "6",
        "marks": "100",
        "evaluationScheme": "Continuous Dissertation Work by Guide: 30 Marks | External Thesis Evaluation: 40 Marks | Final Thesis Viva-Voce Defense: 30 Marks",
        "courseObjectives": [
          "To enable students to execute an independent research investigation under faculty guidance.",
          "To develop proficiency in data analysis, statistical interpretation, and empirical reasoning.",
          "To write, submit, and defend a comprehensive academic Dissertation / Thesis meeting publication standards."
        ],
        "courseOutcomes": [
          "CO1: Independently execute experimental/empirical investigations following approved research design.",
          "CO2: Perform rigorous data analysis using modern software packages (SPSS, R, Python, OriginLab, MATLAB, NVivo).",
          "CO3: Synthesize results, draw scientific conclusions, discuss limitations, and propose future research avenues.",
          "CO4: Compile a high-quality Dissertation adhering to formatting standards, and defend findings in an open viva-voce."
        ],
        "theory": {
          "credits": "0",
          "units": [
            {
              "unitNumber": 1,
              "title": "Module 1: Experimental Execution and Data Generation",
              "topics": [
                "Conducting full-scale laboratory experiments, computational simulations, or extensive field surveys as per approved synopsis",
                "Rigorous recording of experimental observations, calibration of instruments, and replication of results",
                "Data cleaning, coding, missing value treatment, and secure data archiving"
              ]
            },
            {
              "unitNumber": 2,
              "title": "Module 2: Advanced Statistical Analysis and Interpretation",
              "topics": [
                "Parametric and non-parametric hypothesis testing (t-test, ANOVA, Chi-square, Mann-Whitney U, Kruskal-Wallis)",
                "Multivariate analysis: Multiple regression, factor analysis, cluster analysis, PCA, and time-series modeling",
                "Visual data representation: High-resolution graphs, heatmaps, box plots, and error-bar diagrams"
              ]
            },
            {
              "unitNumber": 3,
              "title": "Module 3: Thesis Writing, Plagiarism Check and Defense",
              "topics": [
                "Structure of the Dissertation: Title page, Certificates, Acknowledgements, Abstract, Table of Contents, Introduction, Literature Review, Materials & Methods, Results, Discussion, Conclusion, References, and Appendices",
                "Plagiarism verification via anti-plagiarism software (Turnitin / Urkund / DrillBit) ensuring similarity index within UGC permissible limits (< 10%)",
                "Preparation of research manuscript for submission to peer-reviewed indexed journals and final public viva defense"
              ]
            }
          ]
        },
        "practical": {
          "title": "Full-Time Research Project Work (6 Credits - 180+ Hours)",
          "topics": [
            "Hands-on execution of research experiments, data interpretation, and thesis drafting",
            "Bi-weekly progress monitoring and research manuscript preparation with guide",
            "Submission of final bound hardbound copies of Dissertation along with plagiarism certificate"
          ],
          "evaluation": [
            {
              "component": "Continuous Research Work & Faculty Guide Evaluation",
              "marks": 30
            },
            {
              "component": "Evaluation of Dissertation Thesis by External Examiner",
              "marks": 40
            },
            {
              "component": "Public Viva-Voce Defense before Board of Examiners",
              "marks": 30
            }
          ]
        },
        "suggestedBooks": [
          "Booth, Wayne C. et al. (2016). The Craft of Research, 4th ed. University of Chicago Press.",
          "Day, Robert A. & Gastel, Barbara (2012). How to Write and Publish a Scientific Paper. Cambridge University Press.",
          "UGC Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions Regulations (2018)."
        ]
      }
    ]
  }
};
