const fs = require('fs');

const sec3 = [
  {
    courseTitle: "Prospecting E-waste for sustainability",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To provide in-depth knowledge on the effective mechanisms to regulate the generation, collection, and storage of e-waste.",
      "To gain insights into internationally/nationally acceptable methods of transport, import, and export of e-waste.",
      "To develop a holistic view on recycling, treatment, and disposal of e-waste and related legislative rules."
    ],
    courseOutcomes: [
      "CO1: Holistically analyze environmental impacts of e-waste.",
      "CO2: Apply skills and concepts for sustainable management and segregation of e-waste.",
      "CO3: Decipher national and international regulations (EPR, Basel Convention, RoHS).",
      "CO4: Formulate recommendations for improved handling at collection, storage, transport, and recycling."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: E-Waste Identification & Environmental Impacts",
          topics: [
            "Identification of e-waste and its types, Composition of e-waste",
            "Segregation from material provided, Dismantling and safe handling processes",
            "Environmental impacts and toxic contaminants: Lead, Mercury, Cadmium, BFRs"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Regulatory Framework & Producer Responsibility",
          topics: [
            "Environmental protection laws and Extended Producer Responsibility (EPR) for e-waste management",
            "Regulatory mechanisms in educational institutions and corporate sectors",
            "E-waste reduction at source, evaluation of status in institutions, solutions under E-Waste (Management) Rules 2016 and beyond"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Circular Economy & Global Conventions",
          topics: [
            "E-waste recycling in metro cities in sync with the circular economy",
            "Procuring e-waste import permissions, Inventory of e-waste disposal mechanisms",
            "Evolution of management rules: Hazardous Waste Rules 2008, E-Waste Rules 2011, E-Waste Rules 2016",
            "International Conventions: Basel Convention, Bamako Convention, Rotterdam Convention",
            "European Union Directives: WEEE Directive, Restrictions of Hazardous Substances (RoHS) Directive"
          ]
        }
      ]
    },
    practical: {
      title: "Practical / Hands-on Field Exercises",
      topics: [
        "Visit to a nearby authorized e-waste handling and recycling facility",
        "Conducting an institutional e-waste audit and preparing a reduction roadmap",
        "Dismantling non-functional computer hardware safely and recording component inventories"
      ],
      evaluation: [
        { component: "Continuous Assessment & Field Audit Report", marks: 30 },
        { component: "End-Term Practical Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Hester, R. E. & Harrison, R. M. (2009). Electronic Waste Management. Royal Society of Chemistry.",
      "Fowler, B. A. (2017). Electronic Waste: Toxicology and Public Health Issues. Academic Press.",
      "Gaidajis, G. et al. (2010). E-waste: environmental problems and current management. J. Eng. Sci. Tech.",
      "Janyasuthiwong, S. (2020). Metal Removal and Recovery from Mining Wastewater and E-waste. CRC Press."
    ]
  },
  {
    courseTitle: "Visual Communication & Photography",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To synthesize a comprehensive view of principles involved in Visual Communication.",
      "To appreciate and express the cultural significance of photography as visual art.",
      "To develop awareness of compositional and organizational strategies for effective visual art.",
      "To read visual texts with a deep knowledge of visual history and theory."
    ],
    courseOutcomes: [
      "CO1: Acquire knowledge of cultural and historical importance of visual media.",
      "CO2: Explore fundamentals and underlying theories of Visual Communication.",
      "CO3: Develop concepts and skills in creating photographs, semiotic analysis, and visual aesthetics.",
      "CO4: Master camera mechanisms, composition, lighting techniques, and visual storytelling."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Historical Background and Basics of Visual Communication",
          topics: [
            "History of the visual arts from caveman to modern man, Skills of artistic schools of thought",
            "Concept and History of Visual Communication, Human Eye and Visual Process",
            "Visual Culture and Information Education Communication",
            "Theories: Gestalt Theory of visual communication, Perceptual theory, Semiotics and cognitive approach"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Theories of Visual Communication & Design",
          topics: [
            "Fundamentals of Design: Definition, Approaches to Design, Centrality of Design",
            "Elements and Principles of Visual and Sensory Perceptions",
            "Colour psychology and theory, Optical / Visual Illusions",
            "Design process, Learning skills to read signs and signifier in visuals for social messaging"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Photography as Visual Communication",
          topics: [
            "Introduction to photography, Camera: structure and function of camera",
            "Characteristics of light, Sources of Light - Nature, Artificial and Available",
            "Lighting techniques: Three-point lighting; Exposure: focusing, aperture, shutter speed, depth of field",
            "Kinds of light indoor and outdoor - Electronic flash and artificial lights, Light meters"
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: Camera Compositions and Accessories",
          topics: [
            "Camera lenses and accessories, Basic shots, angle, and view",
            "Composition, Rule of thirds, Leading lines, Framing",
            "Role of photographic image in visual communication, Basics of photojournalism",
            "Photo-features, photo-essays, writing captions, visual storytelling"
          ]
        }
      ]
    },
    practical: {
      title: "Photography Studio & Photo-Essay Project",
      topics: [
        "Hands-on camera settings: Aperture, Shutter Speed, ISO, White Balance, and Exposure compensation",
        "Studio portrait lighting using 3-point lighting setup",
        "Creating a thematic photo-essay with captions and structured narrative"
      ],
      evaluation: [
        { component: "Continuous Photographic Portfolio", marks: 30 },
        { component: "End-Term Practical Studio Exam", marks: 50 },
        { component: "Portfolio Defense Viva", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Barnes, Susan B. (2011). An Introduction to Visual Communication. Peter Lang Pub.",
      "Berger, Arthur Asa (2012). Seeing is Believing: An Introduction to Visual Communication. McGraw-Hill.",
      "Lester, Paul Martin (2013). Visual Communication: Images with Messages, 6th ed. Cengage.",
      "Wells, Liz (ed.) (2015). Photography: A Critical Introduction. Routledge.",
      "Farrell, I. (2014). Complete Guide to Digital Photography. Quercus Publishing."
    ]
  },
  {
    courseTitle: "Graphic Design & Animation",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To introduce students to the skill of animation.",
      "To learn about the application of 2D and 3D animation in advertising and multimedia."
    ],
    courseOutcomes: [
      "CO1: Understand the importance of animation and graphics design.",
      "CO2: Master graphics design and workflow in 2D and 3D animation.",
      "CO3: Create commercial advertising layouts, logos, and promotional animations.",
      "CO4: Execute 3D modeling, texturing, rigging, lighting, and rendering in Blender."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: 2D Animation & Design",
          topics: [
            "Introduction to 2D Animation: Drawing concepts, Colour theory & basics, Incorporating sound into 2D animation",
            "Layout & Designing: Basic of sketching, still life, drawing, collage, painting; Elements and principles of design",
            "Vector and Bitmap Graphics; Photoshop professional image editing; CorelDraw advertising and illustration",
            "Broadcast Design: Working with visual images, Storyboarding, Titles and Credit Making, Stop motion animation",
            "Production / Post-Production: Paint & animate (scanning, tracing, ink & paint), Background composition, 2D animation techniques with Flash/Animate, Portfolio Making"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: 3D Animation",
          topics: [
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
    practical: {
      title: "Animation Studio Practicals & Project Showcase",
      topics: [
        "2D Character design and frame-by-frame walk cycle animation",
        "Vector logo creation and branding layout in Photoshop/Illustrator",
        "3D prop modeling, texturing, lighting, and rendering in Blender",
        "Producing a 30-second portfolio animation clip with background score"
      ],
      evaluation: [
        { component: "Continuous Digital Portfolio", marks: 30 },
        { component: "End-Term Animation Lab Exam", marks: 50 },
        { component: "Showreel Defense Viva", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Johnston, O. & Thomas, F. - The Illusion of Life: Disney Animation.",
      "Hess, Roland - Blender Production Creating Short Animations from Start to Finish. Focal Press.",
      "Watkins, Adam - Getting Started in 3D with Maya. Routledge.",
      "Bancroft, Tom - Creating Characters with Personality. Watson-Guptill."
    ]
  },
  {
    courseTitle: "Statistical Software Package",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To familiarize students with data analysis using a statistical software package like SPSS.",
      "To provide skills for research analysis and increase employability.",
      "To lay a foundation for advance data analysis work and higher education."
    ],
    courseOutcomes: [
      "CO1: Manage variables and generate descriptive statistics, graphs and charts.",
      "CO2: Test differences in sample means using t-tests and ANOVA.",
      "CO3: Identify relationships between variables and predict dependent variables via regression.",
      "CO4: Understand data structures, cluster analysis, and principal components."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Getting Started with the Software",
          topics: [
            "Data Entry, Storing and Retrieving Files, Generating New Variables",
            "Managing Data: Listing cases, replacing missing values, computing new variables, recoding variables, selecting cases, sorting cases, merging files",
            "Graphs: Creating and editing graphs and charts",
            "Descriptive Statistics Procedures: Frequencies, Descriptive, Explore, Cross Tabulation"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Hypothesis Testing for Means",
          topics: [
            "T-tests: One sample t-test, Independent samples t-test, Paired samples t-test",
            "ANOVA: One-way analysis of variance with post-hoc analysis, Two-way analysis of variance"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Testing for Association between Variables",
          topics: [
            "Chi-square Test of Independence",
            "Bivariate Correlation Analysis: Simple Scatter Plot, Correlation Coefficients (Pearson, Spearman Rho, Kendall Tau)",
            "Factor analysis fundamentals"
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: Regression Analysis",
          topics: [
            "Linear Regression: Simple Linear Regression, Multiple regression analysis with matrix scatterplot",
            "Multiple Regression: Standard (Enter) and Stepwise Method",
            "Binary Logistic Regression concepts"
          ]
        }
      ]
    },
    practical: {
      title: "Statistical Software Lab & Empirical Analysis",
      topics: [
        "Data cleaning, variable recoding, and generating cross-tabulation reports in SPSS",
        "Running hypothesis tests (t-tests, ANOVA) and interpreting p-values and effect sizes",
        "Executing linear and multiple regression models with residual diagnostics"
      ],
      evaluation: [
        { component: "Continuous Lab Assessment & Outputs", marks: 30 },
        { component: "End-Term Practical Computing Exam", marks: 50 },
        { component: "Statistical Results Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Meyers, L. S., Gamst, G., & Guarino, A. J. - Performing Data Analysis using IBM SPSS. Wiley.",
      "George, D. & Mallery, P. - SPSS for Windows Step by Step: A Simple Guide. Pearson.",
      "Pandya, K., Bulsari, S., & Sinha, S. - SPSS in Simple Steps. Dreamtech Press.",
      "Mohan, Radha - Using SPSS in Research. Neelkamal."
    ]
  },
  {
    courseTitle: "Communication in Professional Life",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To prepare students for upcoming professional fields.",
      "To inculcate fundamentals of professional and business communication.",
      "To learn aspects of global communication and enhance employability skills."
    ],
    courseOutcomes: [
      "CO1: Improve verbal and non-verbal presentation skills for professional fields.",
      "CO2: Acquire practical employability skills through focused sessions.",
      "CO3: Enhance professional communication, negotiation, and cross-cultural adaptability.",
      "CO4: Craft winning CVs, cover letters, and digital profiles on LinkedIn."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Theory of Business Communication",
          topics: [
            "Introduction: What is Business Communication?, Language of Business Communication",
            "Cultural Components: Cross-Cultural Communication, Cultural Shock, Stereotyping, Ethnocentrism",
            "Miscommunication & Effective Communication"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Listening Skills",
          topics: [
            "Netiquettes in professional contexts",
            "Audio-book Listening & Professional Discussions",
            "Executive Note-taking and briefing"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Speaking Skills",
          topics: [
            "Presentation Skills: Oral Presentation, PPT Preparation, PPT Presentation",
            "Group Discussion; Talks: Domain-specific, Ted-Talks, Business Meets, Motivational Talks",
            "Telephonic Skills, Persuasion Skills, Meeting & Negotiation",
            "Interview: Promotion Interview, Job Interview, Business Interview; Functions and activities of PR"
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: Writing Skills & Digital Profiles",
          topics: [
            "Summarising & Paraphrasing; Job-Oriented Skills: CV, Resume & Bio-Data, Job Application Letter, Documentation",
            "Advertisements & Invitations, Letter Writing: Applications, Business Letters",
            "Report: Analytical Report, Project Report",
            "Digital Communication in Social Space: Social Media Posts (Twitter/X, Facebook, LinkedIn), Blog Writing, Review Writing",
            "Canva/MS Word/Corel poster designing; Memo, Office Order, Minutes; Making Online Academic/Work Profile on LinkedIn"
          ]
        }
      ]
    },
    practical: {
      title: "Professional Skills & Career Lab",
      topics: [
        "Drafting customized ATS-friendly resumes and tailored job application letters",
        "Optimizing LinkedIn profiles and publishing professional articles",
        "Mock HR interviews, corporate meetings, and business negotiations"
      ],
      evaluation: [
        { component: "Continuous Portfolio & Profile Assessment", marks: 30 },
        { component: "End-Term Examination", marks: 50 },
        { component: "Interview Defense & Presentation Viva", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Kaushik, J. C. & Sinha, K. K. (eds.) - English for Students of Commerce. Oxford University Press.",
      "Sethi, A. & Adhikari, B. - Business Communication. Tata McGraw Hill.",
      "Dev, Anjana Neira et al. (eds.) (2011). Business English. Pearson Publications."
    ]
  },
  {
    courseTitle: "Personal Financial Planning",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To familiarize students with different aspects of personal financial planning like savings, investment, taxation, insurance, and retirement.",
      "To develop the necessary knowledge and skills for effective financial planning."
    ],
    courseOutcomes: [
      "CO1: Understand the meaning and appreciate the relevance of financial planning.",
      "CO2: Master investment planning concepts across diverse asset classes.",
      "CO3: Examine personal tax planning under Indian tax regimes (Section 115BAC).",
      "CO4: Analyze insurance and retirement benefits planning for lifelong security."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction to Financial Planning",
          topics: [
            "Financial goals, Steps in financial planning, Budgeting incomes and payments",
            "Time value of money, Introduction to savings, Benefits of savings",
            "Management of spending & financial discipline, Setting alerts and maintaining sufficient funds for fixed commitments"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Investment Planning",
          topics: [
            "Process and objectives of investment, Concept and measurement of return & risk for various asset classes",
            "Measurement of portfolio risk and return, Diversification & portfolio formation",
            "Gold bond; Real estate; Investment in greenfield and brownfield Projects",
            "Investment in fixed income instruments, Financial derivatives & commodity market in India, Mutual fund schemes, International investment avenues, Currency derivatives and digital currency"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Personal Tax Planning",
          topics: [
            "Tax structure in India for personal taxation, Scope of personal tax planning, Exemptions and deductions available to individuals under different heads of income and gross total income",
            "Comparison of benefits: Special provision u/s 115 BAC vis-a-vis General provisions of the Income-tax Act, 1961",
            "Tax avoidance versus tax evasion, e-filing procedures"
          ]
        },
        {
          unitNumber: 4,
          title: "Unit 4: Insurance Planning",
          topics: [
            "Need for insurance, Life insurance, Health insurance, Property insurance, Credit life insurance and professional liability insurance"
          ]
        },
        {
          unitNumber: 5,
          title: "Unit 5: Retirement Benefits Planning",
          topics: [
            "Retirement planning goals, Process of retirement planning",
            "Pension plans available in India, National Pension System (NPS), Reverse mortgage, Estate planning"
          ]
        }
      ]
    },
    practical: {
      title: "Personal Finance Practicals",
      topics: [
        "Perform electronic fund transfers through net banking and UPI safely",
        "Identify and analyze recent financial frauds and Ponzi schemes",
        "Prepare comprehensive tax planning and budget for a hypothetical individual"
      ],
      evaluation: [
        { component: "Continuous Assessment & Financial Plan Report", marks: 30 },
        { component: "End-Term Examination", marks: 50 },
        { component: "Financial Plan Defense Viva", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Halan, M. - Let's Talk Money: You've Worked Hard for It, Now Make It Work for You. Harper Collins.",
      "Indian Institute of Banking & Finance - Introduction to Financial Planning. Taxmann.",
      "Keown, A. J. - Personal Finance. Pearson.",
      "Madura, J. - Personal Finance. Pearson.",
      "Sinha, M. - Financial Planning: A Ready Reckoner. McGraw Hill.",
      "Tripathi, V. - Fundamentals of Investment. Taxmann."
    ]
  },
  {
    courseTitle: "Sustainable Ecotourism & Entrepreneurship",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To train students in concepts and principles of sustainable ecotourism leading to a new generation of entrepreneurs.",
      "To inculcate field-based practical skills in translating ecological systems into wealth generation while conserving natural resources.",
      "To transform local biological wealth into a hub of global attraction based on Indian traditional knowledge."
    ],
    courseOutcomes: [
      "CO1: Develop next-generation ecological entrepreneurial models.",
      "CO2: Evolve eco-literate society by integrating market-based instruments with eco-cultural knowledge.",
      "CO3: Practice ecological knowledge for conservation and popularization of Indian heritage.",
      "CO4: Design ecotourism itineraries, flora/fauna checklists, and public-private partnerships."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Ecotourism Scoping & Flora/Fauna Inventory",
          topics: [
            "Assess current state of ecotourism in unexplored areas and examine ecotourism potential",
            "Field surveys to identify existing locations having ecological, wildlife, scenic, and ethnic potential",
            "Identify ten plant species having ecological, economic, and cultural significance as ecotourist attractions",
            "Identify suitable tracks and prepare a checklist of birds and animals with their ecological stories"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Target Audience, Communication & Market Analysis",
          topics: [
            "Examine natural resources and develop suitable messages and educational media",
            "Survey and identify target groups for ecotourism based on age, education, and psychological factors",
            "Conduct inventory of facility and analyze competitive advantages over regional attractions",
            "Analyze tourist spending patterns and track preferences for ecotourism attractions"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Sustainable Business Models & Entrepreneurship",
          topics: [
            "Survey attitude of residents regarding ecotourism plans and analyze costs & benefits",
            "Develop stories, messages, and pictures to attract tourists using demand-driven marketing",
            "Analyze basic elements of ecotourism, special needs of ecotourists, and develop tour packages",
            "Develop ecotourist activities and craft social media campaigns for ecotourism business",
            "Develop plans for strategic alliances and Public-Private Partnerships (PPP)"
          ]
        }
      ]
    },
    practical: {
      title: "Field Ecotourism Practicals & Venture Blueprint",
      topics: [
        "Field visit to local eco-parks, wetlands, or sanctuaries with tourist survey execution",
        "Preparation of biodiversity storytelling cards and nature trail maps",
        "Drafting a complete business plan for an eco-resort, homestay, or guided nature trail venture"
      ],
      evaluation: [
        { component: "Continuous Field Work & Business Blueprint", marks: 30 },
        { component: "End-Term Practical Exam", marks: 50 },
        { component: "Venture Pitch & Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Ballantyne, R. & Packer, J. (2013). International Handbook on Ecotourism. Edward Elgar.",
      "Blumstein, D. T. et al. (2017). Ecotourism's promise and Peril. Springer.",
      "Fennell, D. A. (2014). Ecotourism: An Introduction. Routledge.",
      "Fletcher, R. (2014). Romancing the Wild. Duke University Press.",
      "Wearing, S. & Schweinsberg, S. (2019). Ecotourism: Transitioning to the 22nd century. Routledge."
    ]
  },
  {
    courseTitle: "रचनात्मक लेखन",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "विद्यार्थियों के मौखिक और लिखित अभिव्यक्ति कौशल को विकसित करना।",
      "उनमें कल्पनाशीलता और रचनात्मकता का विकास करना।",
      "साहित्य की विविध विधाओं और उनकी रचनात्मक शैली का परिचय कराते हुए लेखन की ओर प्रेरित करना।",
      "प्रिंट एवं इलेक्ट्रॉनिक माध्यमों के लिए लेखन की प्रवृत्ति को विकसित करना।"
    ],
    courseOutcomes: [
      "CO1: मौखिक और लिखित अभिव्यक्ति कौशल को विकसित करने में मदद मिलेगी।",
      "CO2: कल्पनाशीलता और रचनात्मकता का विकास होगा।",
      "CO3: साहित्य की विविध विधाओं (कविता, कहानी, नाटक, संस्मरण) के लेखन में अग्रसर होंगे।",
      "CO4: प्रिंट एवं इलेक्ट्रॉनिक मीडिया के लिए व्यावसायिक लेखन कर सकेंगे।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: रचनात्मक लेखक: अवधारणा एवं विश्लेषण",
          topics: [
            "रचनात्मक लेखक: अवधारणा, स्वरूप, आधार एवं विश्लेषण",
            "भाव एवं विचार की रचना में अभिव्यक्ति की प्रक्रिया",
            "अभिव्यक्ति के विविध क्षेत्र: साहित्य, पत्रकारिता, विज्ञापन, भाषण",
            "लेखन के विविध रूप: मौखिक-लिखित, गद्य-पद्य, कथात्मक-कथेतर",
            "अर्थ निर्मित के आधार: शब्द और अर्थ की मीमांसा, शब्द के पुराने-नए प्रयोग, व्याकरणिक कोटि"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: भाषा भंगिमा और साहित्य लेखन",
          topics: [
            "भाषा भंगिमाएँ: औपचारिक-अनौपचारिक, मौखिक-लिखित, मानक भाषिक संदर्भ: क्षेत्रीय, वर्ग-सापेक्ष, समूह-सापेक्ष",
            "रचना-सौष्ठव: शब्दशक्ति, प्रतीक, बिम्ब, अलंकार",
            "कविता: संवेदना भाषिक सौष्ठव, छंदबद्ध-छंदमुक्त, लय, गति, तुक",
            "कथा-साहित्य: वस्तु, पात्र, परिवेश, कथ्य और भाषा"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: विविध विधाओं एवं सूचना माध्यमों के लिए लेखन",
          topics: [
            "नाट्य-साहित्य: वस्तु, पात्र, परिवेश, कथ्य, रंगमंच और नाट्य-भाषा",
            "विविध गद्य विधाएँ: निबंध, संस्मरण, आत्मकथा, व्यंग्य, रिपोर्ताज, यात्रा-वृत्तांत",
            "प्रिंट माध्यम के लिए लेखन: फीचर, यात्रा-वृत्तांत, साक्षात्कार, विज्ञापन",
            "इलेक्ट्रॉनिक माध्यम के लिए लेखन: विज्ञापन, पटकथा, संवाद"
          ]
        }
      ]
    },
    practical: {
      title: "प्रायोगिक अभ्यास एवं कार्यशाला",
      topics: [
        "कक्षा में प्रत्येक विद्यार्थी द्वारा 'मेरी पहली रचना' शीर्षक से किसी विधा में मौलिक लेखन",
        "साहित्यिक रचना का भाषायी दृष्टि से विश्लेषण एवं सामूहिक समीक्षा",
        "समसामयिक विषयों (पर्यावरण संरक्षण, लोकतंत्र, ऑनलाइन संस्कृति) पर फीचर व आलेख लेखन"
      ],
      evaluation: [
        { component: "सतत रचना संचयन एवं अभ्यास", marks: 30 },
        { component: "सत्रांत लिखित परीक्षा", marks: 50 },
        { component: "मौखिकी (वाइवा)", marks: 20 }
      ]
    },
    suggestedBooks: [
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
    courseTitle: "रंगमंच",
    courseCode: "SEC-3",
    credits: "3",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "हिन्दी रंगमंच का परिचय कराना।",
      "नाट्य-प्रस्तुति की प्रक्रिया की जानकारी देना।",
      "अभिनय के विभिन्न पक्षों से अवगत कराना।",
      "रंगमंच के खेलों और गतिविधियों से अवगत कराना।"
    ],
    courseOutcomes: [
      "CO1: नाट्य-प्रस्तुति की प्रक्रिया से विद्यार्थी अवगत हो सकेगा।",
      "CO2: रंगमंच की जानकारी से रोजगार की सम्भावनाएँ बनेंगी।",
      "CO3: रंगमंचीय गतिविधियों से व्यक्तित्व का विकास हो सकेगा।",
      "CO4: अभिव्यक्ति कौशल और मंच प्रबंधन में प्रवीणता हासिल होगी।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: नाट्यशास्त्र एवं पारंपरिक रंगमंच",
          topics: [
            "भरत मुनि कृत नाट्यशास्त्र (संक्षिप्त परिचय)",
            "हिन्दी का पारंपरिक रंगमंच (संक्षिप्त परिचय)"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: प्रस्तुति-प्रक्रिया",
          topics: [
            "आलेख का चयन, अभिनेताओं का चयन",
            "दृश्य-परिकल्पना (ध्वनि, संगीत, नृत्य, प्रकाश)",
            "पूर्वाभ्यास (Rehearsal)"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: अभिनय की तैयारी",
          topics: [
            "अभिनय के चार भेद: वाचिक, आंगिक, आहार्य, सात्विक",
            "संवाद अदायगी और शारीरिक लचीलापन"
          ]
        },
        {
          unitNumber: 4,
          title: "यूनिट 4: आशु अभिनय एवं थिएटर गेम्स",
          topics: [
            "आशु अभिनय (Improvisation), थिएटर गेम्स",
            "संवाद-वाचन, शारीरिक अभ्यास, सीन वर्क"
          ]
        },
        {
          unitNumber: 5,
          title: "यूनिट 5: मंच प्रबंधन",
          topics: [
            "सेट निर्माण, रंग-सामग्री",
            "प्रचार-प्रसार, ब्रोशर-निर्माण, टिकट व दर्शक प्रबंधन"
          ]
        }
      ]
    },
    practical: {
      title: "रंगमंच प्रायोगिक कार्यशाला एवं मंचन",
      topics: [
        "एकल अभिनय (Monologue) एवं समूह दृश्य मंचन अभ्यास",
        "थिएटर गेम्स, ध्वनि-संगीत व प्रकाश व्यवस्था का व्यावहारिक संयोजन",
        "लघु नाटक का मंचन तथा ब्रोशर व सेट निर्माण परियोजना"
      ],
      evaluation: [
        { component: "सतत मंचन अभ्यास व पूर्वाभ्यास मूल्यांकन", marks: 30 },
        { component: "सत्रांत नाट्य प्रस्तुति / परीक्षा", marks: 50 },
        { component: "मौखिकी (वाइवा)", marks: 20 }
      ]
    },
    suggestedBooks: [
      "त्रिपाठी, राधावल्लभ (2009) - संक्षिप्त नाट्यशास्त्रम्, वाणी प्रकाशन, दिल्ली",
      "शर्मा, एच० वी० (2004) - रंग स्थापत्य: कुछ टिप्पणियाँ, राष्ट्रीय नाट्य विद्यालय",
      "वात्स्यायन, कपिला (1995) - पारंपरिक भारतीय रंगमंच: अनंतधाराएँ, नेशनल बुक ट्रस्ट",
      "गौतम, रमेश (2020) - हिंदी रंगमंच का लोकपक्ष, स्वराज प्रकाशन",
      "अंकुर, देवेंद्र राज (2008) - रंगमंच के सिद्धांत, राजकमल प्रकाशन"
    ]
  }
];

fs.writeFileSync('src/data/sec3_data.json', JSON.stringify(sec3, null, 2));
console.log('SEC 3 written successfully!');
