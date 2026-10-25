const fs = require('fs');

const vac1 = [
  {
    courseTitle: "Ayurveda and Nutrition",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To introduce the basic principles of nutrition in Ayurveda.",
      "To link the Ayurvedic nutrition with modern dietary practices for health.",
      "To analyse basic tenets of fasts, festivals & seasonal regimen (Ritucharya)."
    ],
    courseOutcomes: [
      "CO1: Understand the basic principles of diet and nutrition in Ayurveda (Ahar & Poshan).",
      "CO2: Explain the Ayurvedic nutritional framework based on Tridosha, Agni, and Prakriti.",
      "CO3: Apply traditional seasonal culinary wisdom and dietary guidelines for balanced living.",
      "CO4: Evaluate food incompatibilities (Viruddha Ahara) and health benefits of common kitchen spices."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction to Ayurvedic Nutrition",
          topics: [
            "Ayurveda and Indian Food culture, Definition of nutrition according to Ayurveda",
            "Concepts of Poshan (Nutrition), Concept of Ahar (Diet), Shad-rasa (Six tastes) and their physiological actions",
            "Tridosha (Vata, Pitta, Kapha) and constitutional diet according to individual Prakriti"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Principles of Ayurvedic Dietetics",
          topics: [
            "Concept of Agni (Digestive fire) and Ama (Metabolic toxins)",
            "Ahar Parinamakar Bhava (Factors governing food transformation)",
            "Ashtavidh Ahar Vidhi Visheshayatan (Eight fundamental rules of dietetics)",
            "Pathya & Apathya Ahara (Wholesome and unwholesome food diets)"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Seasonal Regimen, Fasting and Spices",
          topics: [
            "Ritucharya: Seasonal changes and required dietary modifications",
            "Ayurvedic perspective on Fasting (Upavasa), fasting rules in Indian festivals",
            "Viruddha Ahara (Incompatible food combinations) and disease manifestation",
            "Medicinal values of common Indian spices (Turmeric, Ginger, Black Pepper, Cumin, Fenugreek)"
          ]
        }
      ]
    },
    practical: {
      title: "Hands-on Practical & Case Exercises",
      topics: [
        "Assessment of individual Prakriti (Body-Mind Constitution) through standard questionnaires",
        "Preparation of traditional restorative recipes (Kashayam, Kadha, Golden Milk, Herbal Infusions)",
        "Documentation of local seasonal culinary practices and indigenous dietary wisdom"
      ],
      evaluation: [
        { component: "Continuous Assessment & Practical Journal", marks: 30 },
        { component: "End-Term Practical Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Charaka Samhita (Sutra Sthana Chapter 27 & 28), Chaukhamba Orientalia.",
      "Sharma, A. K. (2014). Ayurvedic Dietetics. Chaukhamba Sanskrit Pratishthan.",
      "Frawley, David. Ayurvedic Healing: A Comprehensive Guide. Lotus Press.",
      "Dash, Bhagwan. Fundamentals of Ayurvedic Medicine. Konark Publishers."
    ]
  },
  {
    courseTitle: "Financial Literacy",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To introduce financial concepts and basic banking procedures.",
      "To impart knowledge on personal budgeting, insurance, and retirement planning.",
      "To build awareness regarding digital financial services and cybersecurity in transactions."
    ],
    courseOutcomes: [
      "CO1: Describe financial institutions, banking services, and financial planning mechanisms.",
      "CO2: Manage personal budgets, savings accounts, and investment options.",
      "CO3: Understand life, health, and property insurance policies.",
      "CO4: Execute safe digital transactions (UPI, Net Banking) and prevent cyber frauds."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Financial Planning and Budgeting",
          topics: [
            "Meaning and importance of financial literacy, Steps in financial planning",
            "Budgeting income and expenses, Time value of money",
            "Emergency funds, Savings vs Investment, Power of compounding"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Banking Services and Investment Avenues",
          topics: [
            "Types of bank accounts: Savings, Current, Fixed Deposit, Recurring Deposit",
            "Payment mechanisms: Cheques, NEFT, RTGS, IMPS, UPI, Digital Wallets",
            "Investment avenues: Mutual Funds (SIPs), Public Provident Fund (PPF), National Pension System (NPS), Sukanya Samriddhi Yojana, Sovereign Gold Bonds"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Insurance, Taxation and Cyber Hygiene",
          topics: [
            "Fundamentals of insurance: Life (Term vs Endowment), Health (Mediclaim), Motor and Property insurance",
            "Basic concepts of Income Tax, PAN card, Filing ITR basics",
            "Digital banking security: Safe PIN/password practices, OTP protection, recognizing phishing, identity theft, and Ponzi schemes"
          ]
        }
      ]
    },
    practical: {
      title: "Financial Simulations & Practice",
      topics: [
        "Opening a bank account, filling deposit/withdrawal slips, and KYC verification forms",
        "Formulating a balanced personal monthly budget spreadsheet",
        "Setting up UPI Autopay / SIP simulations and analyzing mutual fund NAV statements"
      ],
      evaluation: [
        { component: "Continuous Assessment & Budget Log", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "National Centre for Financial Education (NCFE) - Financial Education Handbook.",
      "RBI Publications - Financial Literacy Guides & Cyber Security Awareness.",
      "Madura, Jeff. Personal Finance. Pearson Education."
    ]
  },
  {
    courseTitle: "Constitutional Values and Fundamental Duties",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To enrich students with basic knowledge of the Indian Constitution.",
      "To inculcate constitutional values: Justice, Liberty, Equality, and Fraternity.",
      "To make students aware of their Fundamental Rights and Fundamental Duties."
    ],
    courseOutcomes: [
      "CO1: Comprehend the philosophical foundation and salient features of the Constitution of India.",
      "CO2: Internalize core constitutional values: Sovereign, Socialist, Secular, Democratic, Republic.",
      "CO3: Recognize and exercise fundamental rights while upholding rule of law.",
      "CO4: Fulfill Fundamental Duties under Article 51A and contribute to nation-building."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: The Constitution of India: An Introduction",
          topics: [
            "Historical background and making of the Indian Constitution",
            "Constituent Assembly debates and role of Dr. B. R. Ambedkar",
            "Preamble to the Constitution: Core values (Justice, Liberty, Equality, Fraternity, Secularism, Socialism)"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Fundamental Rights and Directive Principles",
          topics: [
            "Fundamental Rights (Articles 12-35): Right to Equality, Freedom, Against Exploitation, Religion, Culture & Education, Constitutional Remedies",
            "Directive Principles of State Policy (DPSP) and their relevance in social welfare",
            "Balancing Fundamental Rights and State Policy"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Fundamental Duties (Article 51A)",
          topics: [
            "Origin and incorporation of Fundamental Duties (42nd & 86th Amendments)",
            "11 Fundamental Duties: Abiding by Constitution, Respecting National Flag & Anthem, Cherishing noble ideals of freedom struggle, Protecting sovereignty & integrity, Defending country, Promoting harmony, Preserving composite culture, Protecting environment & wildlife, Developing scientific temper, Striving for excellence, Providing education to children (6-14 yrs)",
            "Legal status and civic duties of citizens"
          ]
        }
      ]
    },
    practical: {
      title: "Civic Action & Constitutional Case Studies",
      topics: [
        "Organizing classroom debates and mock youth parliament on constitutional rights",
        "Field study on local civic awareness regarding fundamental duties and environmental protection",
        "Preparation of awareness posters and skits on national integration and fundamental duties"
      ],
      evaluation: [
        { component: "Continuous Assessment & Civic Journal", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Basu, D. D. (2018). Introduction to the Constitution of India. LexisNexis.",
      "Austin, Granville (1999). The Indian Constitution: Cornerstone of a Nation. Oxford University Press.",
      "Kashyap, Subhash C. (2011). Our Constitution. National Book Trust, India.",
      "Fadia, B. L. (2017). Indian Government and Politics. Sahitya Bhawan."
    ]
  },
  {
    courseTitle: "Culture and Communication",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To explore the relationship between culture and human communication.",
      "To understand intercultural competence and cultural diversity in India.",
      "To develop sensitivity to non-verbal cues and cultural values in messaging."
    ],
    courseOutcomes: [
      "CO1: Recognize cultural dimensions of communication.",
      "CO2: Appreciate Indian composite culture and regional diversity (Ganga-Jamuni tehzeeb, Mithila heritage).",
      "CO3: Apply intercultural communication skills in diverse environments.",
      "CO4: Communicate effectively across diverse socio-cultural groups without bias."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Culture: Concepts and Dimensions",
          topics: [
            "Definition and characteristics of Culture, Relationship between culture and language",
            "Indian cultural traditions: Plurality, Unity in Diversity, and Composite Heritage",
            "Cultural identity, Ethnocentrism, and Cultural Relativism"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Intercultural Communication Dynamics",
          topics: [
            "Process of Intercultural Communication: High-context vs Low-context cultures",
            "Non-verbal communication across cultures: Kinesics, Proxemics, Haptics, Chronemics",
            "Barriers in intercultural communication: Stereotyping, prejudice, cultural shock, ethnocentrism"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Media, Culture and Modern Discourse",
          topics: [
            "Folk media and traditional performing arts in cultural transmission (Maithili Lok Geet, Nautanki, Jat-Jatin)",
            "Impact of mass media and social media on contemporary culture and youth identity",
            "Cultivating cultural empathy and inclusive communication in a globalized world"
          ]
        }
      ]
    },
    practical: {
      title: "Cultural Documentation & Intercultural Workshops",
      topics: [
        "Documenting local folk traditions, rituals, and folklore in Mithila/Bihar region",
        "Role-playing intercultural negotiation and conflict resolution scenarios",
        "Presenting multi-cultural comparative case studies"
      ],
      evaluation: [
        { component: "Continuous Assessment & Field Project", marks: 30 },
        { component: "End-Term Examination", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Jandt, Fred E. (2017). An Introduction to Intercultural Communication: Identities in a Global Community. SAGE.",
      "Hall, Edward T. (1976). Beyond Culture. Anchor Books.",
      "Radhakrishnan, S. (1992). The Hindu View of Life. HarperCollins India."
    ]
  },
  {
    courseTitle: "Digital Empowerment",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To empower students with digital skills for academic and professional advancement.",
      "To introduce citizen digital initiatives by Government of India (Digital India).",
      "To educate students on cybersecurity, digital footprint, and ethical digital conduct."
    ],
    courseOutcomes: [
      "CO1: Access and navigate key Digital India public services and e-governance platforms.",
      "CO2: Utilize digital productivity and collaboration tools for online learning.",
      "CO3: Protect personal data and practice cyber safety against online threats.",
      "CO4: Promote digital inclusion and literacy in local communities."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Digital India and E-Governance Services",
          topics: [
            "Vision and Pillars of Digital India Programme",
            "Key digital public platforms: DigiLocker, UMANG, DigiYatra, Aadhaar ecosystem, e-Sign",
            "Digital payment systems: BHIM, UPI, AePS, Fastag, RBI retail direct",
            "National Academic Depository (NAD) and Academic Bank of Credits (ABC)"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Digital Tools for Education and Collaboration",
          topics: [
            "SWAYAM, SWAYAM PRABHA, NPTEL, e-PG Pathshala, Shodhganga, National Digital Library of India (NDLI)",
            "Cloud collaboration: Google Workspace / MS Office 365, Cloud Drives, Online Docs & Sheets",
            "Virtual classrooms: Video conferencing tools, etiquette in webinars and remote learning"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Cybersecurity and Digital Ethics",
          topics: [
            "Information security basics: Malware, Viruses, Phishing, Ransomware, Man-in-the-Middle attacks",
            "Cyber laws in India: Information Technology (IT) Act 2000 & 2008 amendments, National Cyber Crime Reporting Portal (cybercrime.gov.in)",
            "Social media safety, managing digital footprint, privacy settings, netiquette, and preventing cyberbullying"
          ]
        }
      ]
    },
    practical: {
      title: "Digital Services & Cyber Safety Lab",
      topics: [
        "Creating and populating DigiLocker with academic certificates and identity documents",
        "Generating Academic Bank of Credits (ABC) ID on the national portal",
        "Configuring multi-factor authentication (MFA) and running security privacy audits on devices"
      ],
      evaluation: [
        { component: "Continuous Practical Logbook", marks: 30 },
        { component: "End-Term Practical Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Ministry of Electronics and Information Technology (MeitY) - Digital India Resources.",
      "CERT-In Cyber Security Guidelines & Advisory Handbooks.",
      "Singhal, M. & Kumar, A. (2021). Cyber Security and Cyber Laws. Bharat Law House."
    ]
  },
  {
    courseTitle: "Art of Being Happy",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To guide students towards finding happiness in life through psychological and philosophical perspectives.",
      "To foster positive emotions, mindfulness, and resilience.",
      "To examine Indian philosophical wisdom on Anand (Bliss) and contentment (Santosha)."
    ],
    courseOutcomes: [
      "CO1: Differentiate between momentary pleasure and lasting happiness (Eudaimonia vs Hedonia).",
      "CO2: Apply positive psychology techniques (gratitude, mindfulness, forgiveness).",
      "CO3: Manage stress, negative self-talk, and build resilience.",
      "CO4: Foster joyful, meaningful interpersonal relationships and self-actualization."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Understanding Happiness",
          topics: [
            "Concept of happiness across cultures: Eastern and Western perspectives",
            "Indian concept of Anand, Sukha-Dukha, and Santosha (Contentment in Patanjali Yoga Sutra)",
            "Science of happiness: Neurotransmitters (Dopamine, Serotonin, Oxytocin, Endorphin), PERMA model of Martin Seligman"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Pathways to Happiness",
          topics: [
            "Gratitude journaling and expression, Cultivating kindness and altruism",
            "Mindfulness, meditation, and flow states in daily routines",
            "Developing optimism, overcoming cognitive distortions, handling failure and adversity"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Relationships and Wholesome Living",
          topics: [
            "Building empathetic connections, deep friendships, and family harmony",
            "Work-life balance, digital detox, connecting with nature",
            "Finding purpose and meaning in life (Ikigai framework)"
          ]
        }
      ]
    },
    practical: {
      title: "Happiness Journaling & Mindfulness Practicum",
      topics: [
        "Maintaining a 21-day Gratitude and Positive Reflection Journal",
        "Practicing guided breathing, mindfulness, and loving-kindness meditation (Metta Bhavana)",
        "Performing acts of random kindness and preparing a reflective case report"
      ],
      evaluation: [
        { component: "Continuous Happiness Journal & Reflections", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce & Reflection Presentation", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Seligman, Martin E. P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being. Free Press.",
      "Dalai Lama & Cutler, Howard C. (1998). The Art of Happiness: A Handbook for Living. Riverhead Books.",
      "García, Héctor & Miralles, Francesc (2016). Ikigai: The Japanese Secret to a Long and Happy Life. Penguin."
    ]
  },
  {
    courseTitle: "Sports for Life - I",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To promote physical fitness, wellness, and healthy lifestyle habits through sports.",
      "To teach fundamentals of selected individual and team sports.",
      "To instill sportsmanship, discipline, leadership, and emotional regulation."
    ],
    courseOutcomes: [
      "CO1: Assess personal physical fitness parameters (cardiorespiratory, muscular endurance, flexibility).",
      "CO2: Master fundamental skills and rules in chosen sports disciplines (Athletics, Badminton, Football, Cricket, Yoga).",
      "CO3: Practice injury prevention, warm-up, cool-down, and first aid techniques.",
      "CO4: Demonstrate sportsmanship, teamwork, and fair play in athletic events."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Foundations of Physical Fitness and Wellness",
          topics: [
            "Meaning and dimensions of physical fitness, health, and wellness",
            "Components of physical fitness: Health-related vs Skill-related fitness",
            "Physiological benefits of regular physical exercise on heart, lungs, and musculoskeletal system"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Sports Fundamentals and Skill Training",
          topics: [
            "Rules, dimensions, and basic skills in selected sports (Track and Field, Badminton, Volleyball, Kabaddi, Football)",
            "Principles of training: Overload, progression, specificity, recovery",
            "Sports nutrition: Macronutrients, hydration, pre-game and post-game meals"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Sports Safety, First Aid and Ethics",
          topics: [
            "Warm-up and cool-down routines, Flexibility stretching techniques",
            "Common sports injuries (Sprains, Strains, Cramps, Fractures) and R.I.C.E. management",
            "Sports ethics: Fair play, anti-doping awareness, teamwork, and leadership"
          ]
        }
      ]
    },
    practical: {
      title: "Physical Fitness Testing & Sports Field Training",
      topics: [
        "Fitness assessments: BMI, Cooper 12-minute run/walk, Sit & Reach flexibility test, Push-up/Plank tests",
        "Skill drills and friendly match participation in selected sports disciplines",
        "Demonstration of basic life support, CPR, and sports injury strapping"
      ],
      evaluation: [
        { component: "Continuous Field Performance & Fitness Log", marks: 30 },
        { component: "End-Term Practical Skills & Physical Test", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Kamlesh, M. L. (2007). Physical Education: Facts and Foundations. Khel Sahitya Kendra.",
      "ACSM's Guidelines for Exercise Testing and Prescription (10th ed.). Wolters Kluwer.",
      "Singh, Ajmer et al. (2016). Essentials of Physical Education. Kalyani Publishers."
    ]
  },
  {
    courseTitle: "Swachh Bharat",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To foster awareness about sanitation, hygiene, and waste management under Swachh Bharat Abhiyan.",
      "To understand scientific techniques of waste segregation, recycling, and composting.",
      "To encourage active community participation in cleanliness and health promotion."
    ],
    courseOutcomes: [
      "CO1: Trace history and goals of Swachh Bharat Mission (Gramin & Urban).",
      "CO2: Apply solid and liquid waste management practices (segregation at source, 3Rs).",
      "CO3: Demonstrate community hygiene, sanitation standards, and water conservation.",
      "CO4: Execute community cleanliness campaigns and environmental audit drives."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction to Swachh Bharat Abhiyan",
          topics: [
            "Gandhian vision of sanitation and cleanliness ('Sanitation is more important than independence')",
            "Evolution of Swachh Bharat Mission: Objectives, components, and Open Defecation Free (ODF, ODF+, ODF++) benchmarks",
            "Public health consequences of poor sanitation and contaminated water"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Solid and Liquid Waste Management",
          topics: [
            "Types of waste: Biodegradable, Non-biodegradable, Plastic, Biomedical, E-waste",
            "Waste segregation at source: Wet waste (Green bin) vs Dry waste (Blue bin)",
            "Scientific disposal methods: Composting, Vermicomposting, Biogas generation, Sanitary Landfills",
            "Plastic Waste Management Rules and Single-Use Plastic alternatives"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Community Hygiene and Social Mobilization",
          topics: [
            "Water hygiene and conservation: Rainwater harvesting, protection of water bodies (rivers, ponds)",
            "Role of youth, educational institutions, and Panchayati Raj institutions in sanitation drives",
            "Behavior change communication (BCC) and Swachhata Pakhwada awareness activities"
          ]
        }
      ]
    },
    practical: {
      title: "Community Cleanliness Drives & Waste Audits",
      topics: [
        "Participating in campus cleaning drives (Shramdaan) and waste segregation audits",
        "Setting up a campus vermicomposting pit or organic compost demonstration",
        "Conducting public hygiene awareness surveys in nearby adopted villages or neighborhoods"
      ],
      evaluation: [
        { component: "Continuous Field Shramdaan & Journal", marks: 30 },
        { component: "End-Term Practical Exam / Action Project", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Ministry of Jal Shakti, Department of Drinking Water and Sanitation - Swachh Bharat Guidelines.",
      "Centre for Science and Environment (CSE) - Waste Management Manuals.",
      "Bhide, A. D. & Sundaresan, B. B. - Solid Waste Management in Developing Countries. INSDOC."
    ]
  },
  {
    courseTitle: "Ethics and Culture",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To introduce core ethical theories and cultural values in personal and social life.",
      "To foster universal human values: Truth, Righteous Conduct, Peace, Love, and Non-violence.",
      "To examine moral dilemmas in modern science, business, and society."
    ],
    courseOutcomes: [
      "CO1: Explain classical Indian and Western ethical frameworks (Dharma, Nishkama Karma, Deontology, Utilitarianism).",
      "CO2: Apply ethical reasoning to contemporary moral dilemmas.",
      "CO3: Appreciate the rich cultural heritage and moral foundations of Indian civilization.",
      "CO4: Practice ethical conduct, professional integrity, and social responsibility."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Foundations of Ethics and Human Values",
          topics: [
            "Definition, nature, and scope of Ethics, Morality vs Ethics",
            "Universal Human Values: Satya (Truth), Dharma (Righteous Conduct), Shanti (Peace), Prema (Love), Ahimsa (Non-violence)",
            "Indian Ethical Tradition: Purusharthas (Dharma, Artha, Kama, Moksha), Concept of Rna (Debts to society, ancestors, and nature)"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Ethical Theories and Moral Reasoning",
          topics: [
            "Nishkama Karma (Selfless Action) in Bhagavad Gita",
            "Western ethical perspectives: Kantian Deontology (Categorical Imperative), Utilitarianism (Bentham & Mill), Virtue Ethics (Aristotle)",
            "Ethical decision-making and resolving moral conflicts"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Applied Ethics in Modern Society",
          topics: [
            "Bioethics and Environmental Ethics (Respect for all sentient beings, Vasudhaiva Kutumbakam)",
            "Professional ethics and code of conduct, Academic integrity (plagiarism, scientific honesty)",
            "Ethics in the digital age: AI ethics, privacy rights, and algorithmic fairness"
          ]
        }
      ]
    },
    practical: {
      title: "Moral Case Studies & Ethical Debates",
      topics: [
        "Analyzing landmark moral dilemmas in healthcare, environment, and business through case studies",
        "Role play and debate on academic integrity and anti-corruption ethics",
        "Community outreach project on ethical living and cultural heritage preservation"
      ],
      evaluation: [
        { component: "Continuous Assessment & Case Journal", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Radhakrishnan, S. (1948). The Bhagavadgita. HarperCollins.",
      "Singer, Peter (2011). Practical Ethics. Cambridge University Press.",
      "Chakraborty, S. K. (1998). Values and Ethics for Organizations: Theory and Practice. Oxford University Press."
    ]
  },
  {
    courseTitle: "गांधी और शिक्षा",
    courseCode: "VAC-1",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "महात्मा गांधी के शैक्षिक विचारों और दर्शन से विद्यार्थियों को परिचित कराना।",
      "गांधीजी की 'नई तालीम' (बुनियादी शिक्षा) की प्रासंगिकता को समझना।",
      "शिक्षा में स्वावलंबन, श्रम की प्रतिष्ठा, और नैतिक मूल्यों के महत्व को रेखांकित करना।"
    ],
    courseOutcomes: [
      "CO1: महात्मा गांधी के समग्र जीवन-दर्शन एवं शैक्षिक चिंतन को समझना।",
      "CO2: 'नई तालीम' (बुनियादी शिक्षा / Basic Education) के प्रमुख सिद्धांतों (3H: Head, Heart, Hand) का विश्लेषण करना।",
      "CO3: हस्तशिल्प, स्वावलंबन, मातृभाषा माध्यम और चरित्र निर्माण आधारित शिक्षा की महत्ता जानना।",
      "CO4: 21वीं सदी में गांधीवादी शिक्षा के व्यावहारिक अनुप्रयोगों को प्रस्तुत करना।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: गांधी का जीवन-दर्शन एवं शिक्षा की अवधारणा",
          topics: [
            "गांधीजी का जीवन-दर्शन: सत्य, अहिंसा, सर्वोदय और स्वराज",
            "गांधी के अनुसार शिक्षा की परिभाषा: 'शिक्षा से मेरा तात्पर्य बालक और मनुष्य के शरीर, मन और आत्मा के सर्वोत्कृष्ट गुणों के सर्वांगीण प्रकटीकरण से है'",
            "औपनिवेशिक शिक्षा प्रणाली की गांधीवादी आलोचना (The Beautiful Tree)"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: नई तालीम (वर्धा शिक्षा योजना - 1937)",
          topics: [
            "वर्धा शिक्षा सम्मेलन और नई तालीम (बुनियादी शिक्षा) का उद्भव",
            "नई तालीम के प्रमुख सिद्धांत: 7 से 14 वर्ष के बच्चों के लिए अनिवार्य व निःशुल्क शिक्षा, मातृभाषा में शिक्षा, स्वावलंबन (Self-reliance)",
            "शिल्प-केंद्रित शिक्षा (Craft-centered education): सूत कातना, बुनाई, कृषि, बागवानी, चर्मकार्यता आदि",
            "श्रम की प्रतिष्ठा (Dignity of Labour) और उत्पादक कार्य का शिक्षा से संयोजन"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: समकालीन संदर्भ में गांधीवादी शिक्षा की प्रासंगिकता",
          topics: [
            "चरित्र-निर्माण, शांति शिक्षा और नैतिक मूल्यों का विकास",
            "पर्यावरण संरक्षण, संवहनीय विकास और सादगीपूर्ण जीवनशैली",
            "राष्ट्रीय शिक्षा नीति (NEP 2020) में गांधीवादी विचारों (व्यावसायिक शिक्षा, मातृभाषा, अनुभवात्मक शिक्षण) का समावेश"
          ]
        }
      ]
    },
    practical: {
      title: "प्रायोगिक एवं क्षेत्र कार्य",
      topics: [
        "किसी स्थानीय बुनियादी विद्यालय / गांधी आश्रम / खादी ग्रामोद्योग केंद्र का अध्ययन भ्रमण एवं रिपोर्ट",
        "हस्तशिल्प / बागवानी / कताई-बुनाई का व्यावहारिक अनुभवात्मक सत्र",
        "गांधीजी की पुस्तक 'सत्य के साथ मेरे प्रयोग' या 'हिंद स्वराज' के चयनित अध्यायों पर संगोष्ठी एवं प्रस्तुति"
      ],
      evaluation: [
        { component: "सतत मूल्यांकन एवं अध्ययन रिपोर्ट", marks: 30 },
        { component: "सत्रांत लिखित परीक्षा", marks: 50 },
        { component: "मौखिकी (वाइवा)", marks: 20 }
      ]
    },
    suggestedBooks: [
      "गांधी, एम० के० - बुनियादी शिक्षा, नवजीवन प्रकाशन मंदिर, अहमदाबाद",
      "गांधी, एम० के० - हिंद स्वराज, नवजीवन प्रकाशन मंदिर, अहमदाबाद",
      "पटेल, एम० एस० - महात्मा गांधी का शिक्षा दर्शन",
      "धरमपाल - द ब्यूटीफुल ट्री: इंडिजिनस इंडियन एजुकेशन इन द एटीनथ सेंचुरी",
      "अग्रवाल, जे० सी० - गांधीवादी शिक्षा विचार एवं दर्शन"
    ]
  }
];

fs.writeFileSync('src/data/vac1_data.json', JSON.stringify(vac1, null, 2));
console.log('VAC 1 written successfully!');
