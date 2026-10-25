const fs = require('fs');

const vac2 = [
  {
    courseTitle: "Vedic Mathematics",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To foster love for maths and remove math phobia among students.",
      "To enhance mental calculation speed and analytical abilities.",
      "To develop holistic understanding of ancient Indian mathematical heritage."
    ],
    courseOutcomes: [
      "CO1: Apply Vedic sutras and sub-sutras for fast mental arithmetic.",
      "CO2: Perform complex multi-digit multiplication, division, squaring, and cubing rapidly.",
      "CO3: Solve algebraic equations and factorization using Vedic methods.",
      "CO4: Appreciate the scientific contributions of ancient Indian mathematicians (Aryabhata, Brahmagupta, Bhaskara II, Swami Bharati Krishna Tirtha)."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction to Vedic Sutras and Speedy Arithmetic",
          topics: [
            "Historical background: Swami Bharati Krishna Tirtha and 16 Sutras & 13 Upa-sutras",
            "Ekadhikena Purvena (By one more than previous) & Ekanyunena Purvena",
            "Nikhilam Navatashcaramam Dashatah (All from 9 and last from 10) for rapid addition and subtraction",
            "Urdhva Tiryagbhyam (Vertically and crosswise) for multiplication of 2-digit, 3-digit and multi-digit numbers"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Squares, Square Roots, Cubes and Division",
          topics: [
            "Yavadunam (By the deficiency) for squaring numbers near base 10, 100, 1000",
            "Dwandwa Yoga (Duplex method) for finding squares and square roots of large numbers",
            "Paravartya Yojayet (Transpose and Apply) for rapid division and polynomial division",
            "Dhvajanka (Flag method) for multi-digit long division without decimal hurdles"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Vedic Algebra and Indian Mathematical Heritage",
          topics: [
            "Shunyam Samyasamuccaye (When the collection is the same, it is zero) for solving linear equations",
            "Gunita Samuccayah (Product of sum is sum of product) for factorization of quadratic expressions",
            "Historical contributions: Baudhayana Sulba Sutras (Pythagorean theorem), Zero and Decimal system, Madhava series (calculus)"
          ]
        }
      ]
    },
    practical: {
      title: "Mental Calculation Drills & Problem-Solving Lab",
      topics: [
        "Speed calculation drills using Vertically-and-Crosswise and Nikhilam multiplication",
        "Benchmarking speed and accuracy: Vedic methods vs conventional school arithmetic",
        "Applying Vedic sutras in competitive exam aptitude problems"
      ],
      evaluation: [
        { component: "Continuous Assessment & Speed Math Journal", marks: 30 },
        { component: "End-Term Practical Speed Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Tirtha, Swami Bharati Krishna (1965). Vedic Mathematics. Motilal Banarsidass.",
      "Glover, James. The Cosmic Calculator: A Vedic Mathematics Course for Schools. Motilal Banarsidass.",
      "Singhal, Vandana (2014). Vedic Mathematics for All Ages. Motilal Banarsidass."
    ]
  },
  {
    courseTitle: "Yoga: Philosophy and Practice",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To introduce the philosophical roots and practical methodology of classical Yoga.",
      "To cultivate physical flexibility, mental serenity, and self-awareness.",
      "To practice Asanas, Pranayama, and Dhyana for psychosomatic health."
    ],
    courseOutcomes: [
      "CO1: Explain the philosophical foundations of Yoga (Patanjali Yoga Sutra, Hatha Yoga).",
      "CO2: Understand the Eight Limbs of Yoga (Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi).",
      "CO3: Perform classical Asanas, Surya Namaskar, and cleansing Shatkarmas correctly.",
      "CO4: Apply Pranayama and meditation for stress alleviation and mental clarity."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Foundations and Philosophy of Yoga",
          topics: [
            "Origin, history, and definitions of Yoga: 'Yogas Chitta Vritti Nirodhah' (Yoga is the cessation of fluctuations of mind)",
            "Four streams of Yoga: Jnana Yoga, Bhakti Yoga, Karma Yoga, Raja Yoga",
            "Patanjali's Ashtanga Yoga: Ethical foundations (Yama - Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha; Niyama - Shaucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana)"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Asanas, Bio-mechanics and Subtle Anatomy",
          topics: [
            "Concept of Asana: 'Sthira Sukham Asanam' (Steady and comfortable posture)",
            "Classification of Asanas: Standing, Sitting, Prone, Supine, and Balancing postures",
            "Pancha Koshas (Five Sheaths of Existence), Chakras and Nadis (Ida, Pingala, Sushumna)"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Pranayama, Meditation and Yogic Lifestyle",
          topics: [
            "Science of Pranayama: Puraka, Kumbhaka, Rechaka; Types: Nadi Shodhana, Anuloma Viloma, Bhramari, Kapalabhati, Ujjayi, Sheetali",
            "Pratyahara and Dharana to Dhyana (Meditation) and Yoga Nidra",
            "Yogic diet (Mitahara: Sattvic, Rajasic, Tamasic) and stress management"
          ]
        }
      ]
    },
    practical: {
      title: "Asana, Pranayama & Meditation Practicum",
      topics: [
        "Surya Namaskar (12 steps with breathing coordination and mantras)",
        "Core Asanas: Tadasana, Vrikshasana, Trikonasana, Paschimottanasana, Bhujangasana, Dhanurasana, Sarvangasana, Shavasana",
        "Pranayama (Nadi Shodhana, Bhramari, Sheetali) and guided Yoga Nidra deep relaxation"
      ],
      evaluation: [
        { component: "Continuous Practice Log & Attendance", marks: 30 },
        { component: "End-Term Practical Asana/Pranayama Demonstration", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Iyengar, B. K. S. (2002). Light on Yoga. HarperCollins.",
      "Saraswati, Swami Satyananda. Asana Pranayama Mudra Bandha. Bihar School of Yoga, Munger.",
      "Patanjali Yoga Sutras (Trans. Swami Vivekananda). Advaita Ashrama."
    ]
  },
  {
    courseTitle: "National Cadet Corps (NCC)",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To develop character, comradeship, discipline, leadership, and ideals of selfless service.",
      "To provide basic military knowledge, drill training, and weapon awareness.",
      "To motivate youth to choose a career in the Armed Forces."
    ],
    courseOutcomes: [
      "CO1: Demonstrate military foot drill, bearing, and parade discipline.",
      "CO2: Understand weapon handling, safety rules, and firing positions.",
      "CO3: Read topographic maps, use compass, and navigate terrain in field craft.",
      "CO4: Participate actively in disaster relief, community development, and adventure sports."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: NCC Organization & National Integration",
          topics: [
            "Aims and Motto of NCC ('Unity and Discipline'), Organization of NCC, NCC Song",
            "Armed Forces: Organization of Army, Navy, Air Force; Badges of rank and honours",
            "National Integration: Factors affecting national integration, Role of NCC in nation-building"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Drill, Weapon Training and Personality Development",
          topics: [
            "Foot Drill: Attention, Stand at Ease, Turning, Marching, Saluting, Sizing",
            "Weapon Training: Characteristics of .22 Rifle, stripping, assembling, cleaning, holding, aiming, and firing positions",
            "Leadership traits, Communication skills, Time management, Teamwork"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Map Reading, Field Craft and Disaster Management",
          topics: [
            "Map Reading: Types of maps, conventional signs, scales, compass bearing, finding own position",
            "Field Craft and Battle Craft: Judging distance, description of targets, field signals",
            "Disaster Management: Role of NCC cadets during natural and man-made disasters, Fire fighting and First Aid"
          ]
        }
      ]
    },
    practical: {
      title: "Drill, Weapon Handling & Outdoor Camp Training",
      topics: [
        "Squad drill movements, turns, and march-past coordination on parade ground",
        "Weapon stripping, assembling, and sight alignment practice with .22 Rifle",
        "Prismatic compass handling, grid coordinates reading, and route navigation on topo-sheets"
      ],
      evaluation: [
        { component: "Continuous Drill & Camp Performance", marks: 30 },
        { component: "End-Term Practical Parade & Drill Exam", marks: 50 },
        { component: "Viva-Voce & Field Craft Test", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Directorate General NCC - Cadet's Hand Book (Common Subjects & Specialised Subjects).",
      "Mishra, R. K. (2018). NCC: A Guide for Cadets. Ramesh Publishing House."
    ]
  },
  {
    courseTitle: "National Service Scheme (NSS)",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To understand the community in which students work and identify its needs and problems.",
      "To develop among students a sense of civic and social responsibility.",
      "To acquire leadership qualities and democratic attitudes through community service."
    ],
    courseOutcomes: [
      "CO1: Comprehend the philosophy, motto ('NOT ME BUT YOU'), and organization of NSS.",
      "CO2: Conduct community socio-economic surveys and identify grassroots challenges.",
      "CO3: Plan and execute health, literacy, afforestation, and cleanliness drives.",
      "CO4: Mobilize community resources and facilitate disaster relief and voluntary blood donation."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction and Basic Concepts of NSS",
          topics: [
            "History and philosophy of NSS, Motto ('Not Me But You'), NSS Symbol, Badge, and Song",
            "Administrative structure at National, State, University, and College levels",
            "Regular activities vs Special Camping programmes"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Community Engagement and Social Issues",
          topics: [
            "Methods of community mobilization, Conducting socio-economic surveys in adopted villages",
            "Major social issues: Illiteracy, gender disparity, child labour, substance abuse, public health",
            "Government flagship programs: Poshan Abhiyan, Beti Bachao Beti Padhao, Ayushman Bharat, Jal Jeevan Mission"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Volunteerism, Disaster Management and Life Skills",
          topics: [
            "Role of youth in national development, Voluntary blood donation, Organ donation awareness",
            "Disaster preparedness: Rescue, relief, rehabilitation, First aid and psychological support",
            "Life skills development: Empathy, conflict resolution, advocacy, and grassroots leadership"
          ]
        }
      ]
    },
    practical: {
      title: "Community Outreach & Village Camp Practicum",
      topics: [
        "Organization of health / hygiene / blood donation / tree plantation camp in an adopted locality",
        "Socio-economic baseline survey and PRA (Participatory Rural Appraisal) in village",
        "Street play (Nukkad Natak) and poster exhibition on critical social themes"
      ],
      evaluation: [
        { component: "Continuous Field Logbook & Participation", marks: 30 },
        { component: "End-Term Community Action Report Exam", marks: 50 },
        { component: "Viva-Voce & Field Defense", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Ministry of Youth Affairs and Sports - NSS Manual (Revised). Government of India.",
      "Chopra, J. K. (2015). Youth and Community Development. Rawat Publications."
    ]
  },
  {
    courseTitle: "Science and Society",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To explore the dialectical relationship between scientific discoveries and societal progress.",
      "To nurture scientific temper, rational thinking, and evidence-based inquiry.",
      "To examine ethical, ecological, and socio-economic implications of emerging technologies."
    ],
    courseOutcomes: [
      "CO1: Trace historical milestones in science and understand scientific methodology.",
      "CO2: Foster scientific temper and dispel superstitions and pseudo-scientific claims.",
      "CO3: Appreciate the contributions of ancient and modern Indian scientists.",
      "CO4: Critically evaluate the societal and ethical impact of AI, biotechnology, and nuclear energy."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: The Nature of Science and Scientific Temper",
          topics: [
            "What is Science?: Scientific method, observation, hypothesis, experimentation, peer review",
            "Article 51A(h) of Indian Constitution: Duty to develop scientific temper, humanism, and spirit of inquiry",
            "Differentiating between science, technology, and pseudo-science/superstitions"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Science in Indian History and Modern Pioneers",
          topics: [
            "Indian scientific heritage: Metallurgy (Iron pillar), Ayurveda (Sushruta - surgery), Astronomy & Math (Aryabhata, Varahamihira)",
            "Pioneers of modern Indian science: J. C. Bose, C. V. Raman, S. N. Bose, Meghnad Saha, Homi Bhabha, Vikram Sarabhai, A. P. J. Abdul Kalam",
            "India's space (ISRO) and atomic energy (DAE) journey: Green Revolution, White Revolution, Chandrayaan, Mangalyaan"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Emerging Technologies, Ethics and Sustainable Future",
          topics: [
            "Biotechnology: Genetic engineering, GM crops, CRISPR-Cas9, bioethics",
            "Information Revolution: Artificial Intelligence, automation, cybersecurity, digital divide",
            "Environmental sustainability, renewable energy (Solar/Hydrogen), climate change, and citizen science"
          ]
        }
      ]
    },
    practical: {
      title: "Science Communication & Rationality Projects",
      topics: [
        "Demonstrating simple science experiments to demystify superstitious 'miracles'",
        "Case study presentation on a landmark scientific controversy or bioethical issue",
        "Writing a popular science article on recent breakthroughs (Space, AI, Green energy)"
      ],
      evaluation: [
        { component: "Continuous Assessment & Science Project", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce & Presentation", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Bernal, J. D. (1969). Science in History (4 vols). Penguin.",
      "Sagan, Carl (1996). The Demon-Haunted World: Science as a Candle in the Dark. Ballantine Books.",
      "Narlikar, Jayant V. (2003). The Scientific Edge: The Indian Scientist from Vedic to Modern Times. Penguin."
    ]
  },
  {
    courseTitle: "Social and Emotional Learning",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To foster self-awareness, emotional regulation, and interpersonal competence.",
      "To understand CASEL framework of Social and Emotional Learning (SEL).",
      "To equip students with empathy, responsible decision-making, and stress coping tools."
    ],
    courseOutcomes: [
      "CO1: Demonstrate self-awareness and emotional literacy (identifying and naming emotions).",
      "CO2: Apply self-management strategies for anxiety, impulse control, and motivation.",
      "CO3: Cultivate social awareness, active listening, and empathy towards diverse viewpoints.",
      "CO4: Make ethical, responsible personal and academic choices."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Self-Awareness and Self-Management",
          topics: [
            "Understanding emotions: Emotional vocabulary, Wheel of Emotions, triggers",
            "Self-awareness: Recognizing strengths, values, prejudices, and growth mindset",
            "Self-management: Emotional regulation, impulse control, stress management techniques (Box breathing, progressive muscle relaxation), goal setting"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Social Awareness and Interpersonal Relationship Skills",
          topics: [
            "Social awareness: Perspective-taking, empathy vs sympathy, appreciating diversity and inclusion",
            "Relationship skills: Clear communication, active listening, conflict resolution, resisting negative peer pressure, seeking help"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Responsible Decision-Making and Resilience",
          topics: [
            "Responsible decision-making: Ethical considerations, evaluating consequences, problem-solving model (POOCH)",
            "Developing psychological resilience: Bouncing back from academic setbacks and life failures",
            "Cultivating compassion, prosocial behavior, and healthy digital boundaries"
          ]
        }
      ]
    },
    practical: {
      title: "SEL Experiential Workshops & Role-Play",
      topics: [
        "Emotion tracking journal and trigger-response reflection logs",
        "Role-playing interpersonal conflict scenarios and non-violent communication practice",
        "Group empathy circle sessions and peer support mentoring drills"
      ],
      evaluation: [
        { component: "Continuous Reflection Journal & Exercises", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce & Experiential Presentation", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Goleman, Daniel (1995). Emotional Intelligence: Why It Can Matter More Than IQ. Bantam Books.",
      "CASEL (Collaborative for Academic, Social, and Emotional Learning) - SEL Competencies Framework.",
      "Rosenberg, Marshall B. (2003). Nonviolent Communication: A Language of Life. PuddleDancer Press."
    ]
  },
  {
    courseTitle: "Ecology and Literature",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "To explore the intersection between environmental consciousness and literary texts (Ecocriticism).",
      "To appreciate nature representations in classical, modern, and indigenous literature.",
      "To examine ecological crises through literary narratives, poetry, and climate fiction (Cli-Fi)."
    ],
    courseOutcomes: [
      "CO1: Define Ecocriticism and understand anthropocentrism vs biocentrism in literature.",
      "CO2: Analyze nature depiction in classical Indian poetry (Kalidasa, Sangam, Bhakti poetry) and Romanticism.",
      "CO3: Interpret modern ecological narratives, environmental protest poetry, and tribal folklore.",
      "CO4: Articulate eco-literary responses to climate change, deforestation, and biodiversity loss."
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "Unit 1: Introduction to Ecocriticism and Nature in Literature",
          topics: [
            "Definition and waves of Ecocriticism: From nature writing to environmental justice and climate fiction",
            "Key concepts: Anthropocentrism, Biocentrism, Deep Ecology, Ecofeminism, Place and Wilderness",
            "Indian eco-philosophical foundations: Prakriti-Purusha, Aranyani (Goddess of forest in Rigveda), Sacred groves"
          ]
        },
        {
          unitNumber: 2,
          title: "Unit 2: Classical and Romantic Representations of Nature",
          topics: [
            "Kalidasa's 'Meghadutam' and 'Abhijnanasakuntalam' (Ecology of hermitage and seasonal landscapes)",
            "English Romantic poetry: Wordsworth (Tintern Abbey / Daffodils), Keats, and nature as a living presence",
            "Tagore's ecological vision: 'The Religion of the Forest' and Santiniketan's open-air education"
          ]
        },
        {
          unitNumber: 3,
          title: "Unit 3: Modern Eco-Literature, Indigenous Voices and Climate Fiction",
          topics: [
            "Environmental struggles in Indian literature: Chipko movement songs (Ghanshyam Raturi), Narmada Bachao narratives",
            "Indigenous and tribal eco-literature: Tales of sacred hills, rivers, and non-human kinship",
            "Contemporary Climate Fiction (Cli-Fi): Amitav Ghosh's 'The Great Derangement' and 'The Hungry Tide' (Sundarbans ecology)"
          ]
        }
      ]
    },
    practical: {
      title: "Eco-Literary Essays & Nature Writing Practicum",
      topics: [
        "Writing an original nature observation diary / eco-poem based on local surroundings",
        "Critical analysis of an environmental novel, play, or eco-documentary",
        "Field documentation of local sacred groves, river stories, or folklore in Mithila"
      ],
      evaluation: [
        { component: "Continuous Assessment & Nature Portfolio", marks: 30 },
        { component: "End-Term Written Exam", marks: 50 },
        { component: "Viva-Voce", marks: 20 }
      ]
    },
    suggestedBooks: [
      "Glotfelty, Cheryll & Fromm, Harold (1996). The Ecocriticism Reader. University of Georgia Press.",
      "Ghosh, Amitav (2016). The Great Derangement: Climate Change and the Unthinkable. Penguin.",
      "Guha, Ramachandra (2000). Environmentalism: A Global History. Oxford University Press."
    ]
  },
  {
    courseTitle: "भारतीय भक्ति परंपरा और मानव मूल्य",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "भारतीय भक्ति आंदोलन की सामाजिक-सांस्कृतिक चेतना और अखिल भारतीय विस्तार से परिचित कराना।",
      "भक्त कवियों के पदों के माध्यम से सार्वभौमिक मानवीय मूल्यों (समानता, करुणा, भ्रातृत्व) का बोध कराना।",
      "जाति, संप्रदाय और लैंगिक विषमता के विरुद्ध भक्ति साहित्य के प्रगतिशील योगदान को समझना।"
    ],
    courseOutcomes: [
      "CO1: भक्ति आंदोलन के ऐतिहासिक उद्भव (दक्षिण से उत्तर भारत) और अखिल भारतीय स्वरूप को समझना।",
      "CO2: निर्गुण एवं सगुण भक्ति काव्यधाराओं के दार्शनिक पक्षों का विश्लेषण करना।",
      "CO3: कबीर, जायसी, सूरदास, तुलसीदास, मीराबाई, विद्यापति, रैदास, गुरु नानक के काव्य में निहित सामाजिक न्याय व मानव मूल्यों को आत्मसात करना।",
      "CO4: समकालीन समाज में साम्प्रदायिक सद्भाव एवं मानवीय एकता के लिए भक्ति साहित्य की उपादेयता रेखांकित करना।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: भक्ति आंदोलन: अवधारणा एवं अखिल भारतीय परिप्रेक्ष्य",
          topics: [
            "भक्ति की अवधारणा, भक्ति आंदोलन की ऐतिहासिक पृष्ठभूमि एवं सामाजिक कारण",
            "भक्ति का अखिल भारतीय विस्तार: आलवार व नयनार (दक्षिण भारत), असम (शंकरदेव), महाराष्ट्र (ज्ञानेश्वर, तुकाराम), गुजरात (नरसी मेहता), पंजाब (गुरु नानक), बंगाल (चैतन्य महाप्रभु)",
            "भक्ति आंदोलन की प्रमुख प्रवृत्तियाँ: लोकभाषाओं की प्रतिष्ठा, जाति-वर्ण भेद का निषेध, बाह्याडंबरों का विरोध"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: प्रमुख भक्त कवि एवं मानव मूल्य",
          topics: [
            "निर्गुण संत काव्य: कबीर (समानता, ढोंग-खंडन, अंतर-साधना), गुरु नानक, संत रैदास (बेगमपुरा की सामाजिक समतावादी संकल्पना)",
            "सूफी प्रेमाख्यानक काव्य: मलिक मोहम्मद जायसी (प्रेम-तत्व और उदात्त मानवीय दृष्टि)",
            "सगुण कृष्ण-भक्ति काव्य: विद्यापति (मिथिला के लोक-संस्कार व भक्ति), सूरदास (वात्सल्य व सख्य भाव), मीराबाई (स्त्री-मुक्ति व अनन्य समर्पण)",
            "सगुण राम-भक्ति काव्य: तुलसीदास (समन्वय चेतना, लोकमंगल की भावना, पारिवारिक व सामाजिक कर्तव्य)"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: समकालीन समाज और भक्ति साहित्य की प्रासंगिकता",
          topics: [
            "साम्प्रदायिक सौहार्द, सर्वधर्म समभाव और विश्व बंधुत्व",
            "मानवीय मूल्य: सत्य, करुणा, सेवा, विनम्रता, अहिंसा, परोपकार",
            "सांस्कृतिक राष्ट्रीयता और जनपदीय लोक-संस्कृतियों का एकात्म भाव"
          ]
        }
      ]
    },
    practical: {
      title: "प्रायोगिक अभ्यास एवं सांस्कृतिक सत्र",
      topics: [
        "भक्त कवियों (विद्यापति, कबीर, मीरा, तुलसी) के पदों का सस्वर गायन एवं भाव-विश्लेषण",
        "स्थानीय भक्ति परंपराओं, लोकगीतों, संकीर्तन मंडलियों का अध्ययन एवं प्रलेखीकरण",
        "'भक्ति साहित्य में सामाजिक समरसता' विषय पर संगोष्ठी एवं शोध-आलेख प्रस्तुति"
      ],
      evaluation: [
        { component: "सतत मूल्यांकन एवं गायन/प्रस्तुति जर्नल", marks: 30 },
        { component: "सत्रांत लिखित परीक्षा", marks: 50 },
        { component: "मौखिकी (वाइवा)", marks: 20 }
      ]
    },
    suggestedBooks: [
      "शुक्ल, आचार्य रामचंद्र - हिंदी साहित्य का इतिहास, नागरी प्रचारिणी सभा, वाराणसी",
      "द्विवेदी, हजारीप्रसाद - कबीर, राजकमल प्रकाशन, नई दिल्ली",
      "सिंह, नामवर - दूसरी परंपरा की खोज, राजकमल प्रकाशन",
      "झा, शिवप्रसाद - मिथिला की भक्ति परंपरा और विद्यापति",
      "शर्मा, रामविलास - भारतीय साहित्य के इतिहास की समस्याएँ, वाणी प्रकाशन"
    ]
  },
  {
    courseTitle: "साहित्य, संस्कृति और सिनेमा",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "साहित्य, संस्कृति और सिनेमा के अंतर्संबंधों को समझाना।",
      "सिनेमा को दृश्य-श्रव्य माध्यम और सांस्कृतिक अभिव्यक्ति के रूप में विश्लेषित करना।",
      "साहित्यिक कृतियों के सिनेमाई रूपांतरण की प्रक्रिया और चुनौतियों से अवगत कराना।"
    ],
    courseOutcomes: [
      "CO1: साहित्य, संस्कृति और सिनेमा के अंतःसंबंध को समझ सकेंगे।",
      "CO2: भारतीय सिनेमा के ऐतिहासिक विकास एवं सामाजिक सरोकारों का मूल्यांकन कर सकेंगे।",
      "CO3: साहित्यिक कृतियों पर आधारित फिल्मों (उदा. 'तीसरी कसम', 'गोदान', 'शतरंज के खिलाड़ी') का पाठ्य व दृश्य विश्लेषण कर सकेंगे।",
      "CO4: सिनेमा की भाषा, दृश्य-विधान, पार्श्वगायन एवं सांस्कृतिक प्रभावों पर समीक्षात्मक दृष्टि विकसित कर सकेंगे।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: साहित्य, संस्कृति और सिनेमा: अंतःसंबंध",
          topics: [
            "साहित्य और सिनेमा: समानता एवं भिन्नता (शब्द बनाम दृश्य)",
            "सिनेमा की भाषा: फ्रेम, शॉट, कैमरा मूवमेंट, प्रकाश, ध्वनि, संपादन (Editing)",
            "सिनेमा और भारतीय संस्कृति: जन-संस्कृति, उत्सव, लोक-कलाओं और सामाजिक यथार्थ का प्रतिबिंब"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: भारतीय सिनेमा का विकास एवं धाराएँ",
          topics: [
            "भारतीय सिनेमा का प्रारंभिक दौर: मूक फिल्में (राजा हरिश्चंद्र), सवाक फिल्में (आलम आरा)",
            "स्वर्ण युग (1950-60 के दशक): सामाजिक यथार्थवाद (सत्यजीत रे, बिमल रॉय, गुरु दत्त, राज कपूर)",
            "समानांतर (कला) सिनेमा आंदोलन (श्याम बेनेगल, गोविंद निहलानी, मृणाल सेन)",
            "समकालीन सिनेमा और ओटीटी (OTT) प्लेटफॉर्म: विषयगत विविधता और चुनौतियाँ"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: साहित्यिक कृतियों का सिनेमाई रूपांतरण",
          topics: [
            "रूपांतरण की प्रविधि और चुनौतियाँ: उपन्यास/कहानी से पटकथा की यात्रा",
            "प्रमुख रूपांतरित फिल्में: फणीश्वरनाथ रेणु की 'मारे गए गुलफाम' पर आधारित फिल्म 'तीसरी कसम', प्रेमचंद के 'शतरंज के खिलाड़ी' (सत्यजीत रे) एवं 'गोदान', शरतचंद्र की 'देवदास'",
            "सिनेमाई संगीत, गीत-परंपरा (साहिर लुधियानवी, शैलेंद्र, मजरूह सुल्तानपुरी, गुलजार) और भारतीय जनमानस"
          ]
        }
      ]
    },
    practical: {
      title: "फिल्म स्क्रीनिंग, समीक्षा एवं कार्यशाला",
      topics: [
        "किसी साहित्यिक कृति पर आधारित शास्त्रीय फिल्म की स्क्रीनिंग एवं तुलनात्मक दृश्य समीक्षा लेखन",
        "फिल्म समीक्षा (Film Review) और पोस्टर निर्माण अभ्यास",
        "स्थानीय सिनेमा / मैथिली-भोजपुरी सिनेमा के सांस्कृतिक विमर्श पर परियोजना रिपोर्ट"
      ],
      evaluation: [
        { component: "सतत फिल्म समीक्षा जर्नल व अभ्यास", marks: 30 },
        { component: "सत्रांत लिखित परीक्षा", marks: 50 },
        { component: "मौखिकी (वाइवा)", marks: 20 }
      ]
    },
    suggestedBooks: [
      "तिवारी, विनोद - साहित्य, संस्कृति और सिनेमा, वाणी प्रकाशन",
      "गौतम, रमेश - सिनेमा और साहित्य, स्वराज प्रकाशन",
      "रेणु, फणीश्वरनाथ - मारे गए गुलफाम (तीसरी कसम), राजकमल प्रकाशन",
      "रे, सत्यजीत - विषय सिनेमा, अनुवाद: अमित कुमार, राजकमल",
      "मिश्र, यतींद्र - विभास: भारतीय सिनेमा के सौ वर्ष, वाणी प्रकाशन"
    ]
  },
  {
    courseTitle: "सृजनात्मक लेखन के विविध आयाम",
    courseCode: "VAC-2",
    credits: "2",
    marks: "100",
    evaluationScheme: "End-Term Appraisal: 70 Marks | Internal Assessment: 30 Marks",
    courseObjectives: [
      "सृजनात्मक लेखन की विविध विधाओं (कविता, कहानी, लघुकथा, संस्मरण, निबंध) का सैद्धांतिक एवं व्यावहारिक ज्ञान देना।",
      "विद्यार्थियों में कल्पनाशीलता, भाव-प्रवणता और भाषायी सौष्ठव को संवर्धित करना।",
      "प्रिंट, इलेक्ट्रॉनिक एवं डिजिटल मीडिया के लिए सृजनात्मक लेखन कौशल विकसित करना।"
    ],
    courseOutcomes: [
      "CO1: सृजनात्मक लेखन की अवधारणा, प्रेरणा-स्रोत और रचना-प्रक्रिया को समझना।",
      "CO2: गद्य एवं पद्य की विभिन्न विधाओं के शिल्पगत घटकों का विश्लेषण करना।",
      "CO3: मौलिक कविता, कहानी, फीचर, ब्लॉग एवं साक्षात्कार लिखने की क्षमता अर्जित करना।",
      "CO4: संपादन, प्रूफ-शोधन एवं पांडुलिपि तैयार करने के व्यावहारिक कौशलों में दक्ष होना।"
    ],
    theory: {
      credits: "1",
      units: [
        {
          unitNumber: 1,
          title: "यूनिट 1: सृजनात्मक लेखन: स्वरूप एवं रचना-प्रक्रिया",
          topics: [
            "सृजनात्मक लेखन: अर्थ, परिभाषा, महत्व एवं प्रेरणा",
            "रचना-प्रक्रिया के चरण: अनुभव, संवेदन, कल्पना, विचार, भाषा और संरचना",
            "सृजनात्मक भाषा के लक्षण: बिम्ब-विधान, प्रतीक, मुहावरेदार प्रयोग, वक्रोक्ति एवं लय"
          ]
        },
        {
          unitNumber: 2,
          title: "यूनिट 2: पद्य एवं गद्य विधाओं का सृजन",
          topics: [
            "कविता लेखन: तुक, लय, छंद, मुक्तछंद, गीत एवं हाइकु विधा",
            "कथा लेखन: कहानी एवं लघुकथा के तत्व (कथानक, चरित्र-चित्रण, संवाद, देशकाल, उद्देश्य, शीर्षक)",
            "कथेतर गद्य विधाएँ: संस्मरण, रेखाचित्र, यात्रा-वृत्तांत, ललित निबंध, डायरी लेखन"
          ]
        },
        {
          unitNumber: 3,
          title: "यूनिट 3: आधुनिक मीडिया एवं व्यावहारिक लेखन",
          topics: [
            "समाचार पत्रों के लिए लेखन: फीचर लेखन, संपादकीय, पुस्तक समीक्षा, साक्षात्कार",
            "डिजिटल मीडिया के लिए सृजन: ब्लॉगिंग (Blogging), सोशल मीडिया पोस्ट लेखन, व्लॉग स्क्रिप्ट",
            "संपादन एवं पांडुलिपि तैयारी: प्रूफ-रीडिंग के संकेत, वर्तनी-शुद्धि, शीर्षक चयन"
          ]
        }
      ]
    },
    practical: {
      title: "सृजन कार्यशाला एवं मौलिक पोर्टफोलियो",
      topics: [
        "मौलिक कविता / लघुकथा / ललित निबंध का लेखन एवं कक्षा में सहपाठी समीक्षा (Peer Review)",
        "समसामयिक सामाजिक मुद्दे पर एक पूर्ण फीचर एवं साक्षात्कार आलेख तैयार करना",
        "छात्र पत्रिका / ई-पत्रिका के लिए संपादन, प्रूफ-रीडिंग एवं लेआउट डिजाइन परियोजना"
      ],
      evaluation: [
        { component: "सतत मौलिक रचना संचिका (Portfolio)", marks: 30 },
        { component: "सत्रांत लिखित परीक्षा", marks: 50 },
        { component: "मौखिकी एवं रचना पाठ (Viva)", marks: 20 }
      ]
    },
    suggestedBooks: [
      "पांडेय, मैनेजर - शब्द और कर्म, वाणी प्रकाशन",
      "गौतम, रमेश - रचनात्मक लेखन, वाणी प्रकाशन",
      "वजाहत, असगर - कहानी की तलाश में, राजकमल प्रकाशन",
      "गुप्ता, मन्मथनाथ - कथा शिल्प, सामयिक प्रकाशन",
      "शर्मा, कृष्णदत्त - व्यावहारिक हिंदी और रचना, साहित्य भवन"
    ]
  }
];

fs.writeFileSync('src/data/vac2_data.json', JSON.stringify(vac2, null, 2));
console.log('VAC 2 written successfully!');
