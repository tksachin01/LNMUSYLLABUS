/**
 * @file bscZoologySyllabus.ts
 * @description LNMU B.Sc. (Hons) Zoology Syllabus under 4-Year CBCS & NEP 2020 Framework.
 * 
 * Defines curriculum outlines, Program Outcomes (POs), Program Specific Outcomes (PSOs),
 * and semester-wise theory/practical modules for:
 * - Major Courses (MJC)
 * - Minor Courses (MIC)
 * - Multidisciplinary Courses (MDC)
 */

// B.Sc. Zoology Syllabus under 4-Year CBCS & NEP 2020 for Universities of Bihar
export const BSC_ZOOLOGY_SYLLABUS = {
  "regulations": {
    "programTitle": "Bachelor of Science Honours Degree B.Sc. (Hons) Zoology",
    "duration": "4 Years (3+1 Years / 8 Semesters)",
    "academicSession": "2023-27 & onwards",
    "framework": "Choice Based Credit System (CBCS) & NEP 2020 (Curriculum and Credit Framework for Undergraduate Programme in Universities of Bihar)",
    "submittedBy": "Subject Expert Committee: Prof. (Dr) Rakesh Prasad, Prof. (Dr) Dilip Kumar Keshri, Prof. (Dr) Ajit Kumar Sinha, Prof. (Dr) Preety Sinha, Prof. (Dr) Parimal Kumar Khan, Prof. (Dr) Narendra Srivastava, Prof. (Dr) Rana Vikram Singh, Dr. Gyanendra Bahadur Chand, Sri Ravindra Nath Pathak, Dr. Dhiraj Kumar, Dr. Shushovan Banik, Dr. Mayank Madhukar, Dr. Sujata Kumari (Dated 21.09.2023 / 14.06.2023)",
    "programOutcomes": [
      "PO1. Disciplinary knowledge: Capable of demonstrating comprehensive knowledge of major concepts, theoretical principles and experimental findings in Zoology and its different subfields including biodiversity, physiology, biochemistry, ecology, evolutionary biology, cell biology, molecular biology, immunology and genetics etc. learning of the various techniques, instruments, computational software used for analysis of animal's forms and functions.",
      "PO2. Communication, thinking, reasoning and problem solving ability: to convey the intricate zoological information effectively and efficiently, rationally analyze and solve the problems related to animal sciences, seeking solutions and logically solving them by experimentation and data processing.",
      "PO3. Leadership quality & Team spirit: Ability to work effectively in a heterogeneous team and to recognise and mobilise relevant resources essential for a project, and manage the project in a responsible way by following ethical scientific conduct and bio-safety protocols.",
      "PO4. Digitally literate: Capability of using computers for biological simulation, computation and appropriate software for biostatistics, and employing search tools to locate, retrieve, and evaluate zoology-related data.",
      "PO5. Environment and Sustainability: Understand the environmental and sustainability issues, acquire self-paced and self-directed learning aimed at personal and social development."
    ],
    "programSpecificOutcomes": [
      "PSO1. Students should be able to identify, classify and differentiate diverse chordates and non-chordates based on their morphological, anatomical and systemic organization.",
      "PSO2. They will also be able to describe economic, ecological and medical significance of various animals in human life. This will create a curiosity and awareness among them to explore the animal diversity and explore related career options. The procedural knowledge about identifying and classifying animals will provide students professional advantages in teaching, research and taxonomist jobs in various government organizations.",
      "PSO3. Acquired practical skills in molecular biology; biotechnology; microscopy; enzymology and analytical biochemistry and genetics will provide an extra edge to our students, who wish to undertake higher studies.",
      "PSO4. In-depth knowledge and understanding about comparative anatomy and developmental biology of various biological systems; and learning about the organisation, functions, strength and weaknesses of various systems will let students critically analyse the way evolution has shaped these traits in the human body.",
      "PSO5. Acquired skills in diagnostic testings, haematology, histopathology, staining procedures etc. used in clinical and research laboratories will provide students opportunity to work in diagnostic or research laboratory. Deep understanding of different physiological systems and methods available to measure vital physiological parameters and to comprehend the mechanism behind occurrence of different life threatening disease via laboratory examination, assessment of basic physiological functions by interpreting physiological charts will help to find their career options."
    ]
  },
  "MJC": {
    "1st": [
      {
        "courseTitle": "Diversity of Non-Chordata",
        "courseCode": "MJC-1",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Learn about the importance of systematics, taxonomy, and structural organization of non-chordates.",
          "CO-2: Understand & Appreciate the diversity of non-chordates living in varied habits and habitats.",
          "CO-3: Understand evolutionary history and relationships of different non-chordates through functional and structural affinities.",
          "CO-4: Critically analyse the organization, complexity and characteristic features of non chordates.",
          "CO-5: Recognize the life functions and the ecological roles of the animals belonging to different phyla.",
          "CO-6: Enhance collaborative learning and communication skills through practical sessions, team-work, group discussions, assignments and projects."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Non-chordates (8 Lectures)",
              "topics": [
                "General characteristics and classification (up to order) of the following Phyla: Protozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes and Nemathelminthes, Annelida, Arthropoda, Mollusca, Echinodermata."
              ]
            },
            {
              "title": "Unit 2: Protozoa and Porifera (10 Lectures)",
              "topics": [
                "2.1. Protozoa: Structure and Life cycle of Paramecium, Plasmodium and Leishmania donovani.",
                "2.2. Porifera: Spicules and Canal system in sponges; affinities of the Phylum."
              ]
            },
            {
              "title": "Unit 3: Cnidaria, Ctenophora, Platyhelminthes and Nemathelminthes (10 Lectures)",
              "topics": [
                "3.1. Cnidaria: Structure and Life Cycle: Obelia, Aurelia.",
                "3.2. Ctenophora: General organization of Hormiphora; affinities of the phylum.",
                "3.3 Platyhelminthes and Nemathelminthes: Structure and Life cycle of Fasciola hepatica, Taenia solium, Ascaris lumbricoides."
              ]
            },
            {
              "title": "Unit 4: Annelida, Arthropoda, Mollusca and Echinodermata (12 Lectures)",
              "topics": [
                "4.1. Annelida: Earthworm and Leech: Structure, locomotion, alimentary canal and Reproduction.",
                "4.2. Arthropoda: Palaemon and Peripatus, Adaptive variations in insect mouth parts.",
                "4.3. Mollusca: Structure and Life cycle: Unio, Pila. Torsion and Detorsion in Gastropoda.",
                "4.4. Echinodermata: Structure: Star fish; Larval forms in Echinoderms; Water Vascular System in Echinoderms."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts provided (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Study of whole mount of Euglena, Amoeba, Paramecium, Monocystis; Binary fission and Conjugation in Paramecium.",
            "2. Study of Sycon; T.S. of Sycon, L.S. of Sycon; Gemmule, Hyalonema.",
            "3. Permanent stained preparation of spicules of sponges.",
            "4. Study of Obelia, Aurelia, Metridium, Physalia.",
            "5. Specimen/slide of any one Ctenophore.",
            "6. Study of adult Fasciola hepatica, Taenia solium and Ascaris (male & female).",
            "7. Study of Aphrodite, Septal nephridia and Ovary of Earthworm; Jaws of leech; Trochophore larva.",
            "8. Study of T.S. through pharynx, gizzard, and typhlosolar region of earthworm.",
            "9. Study of Limulus, Scolopendra, Grasshopper, Phyllium, Praying mantis, Palaemon, Sacculina, Cancer, Eupagurus, Apis, Musca. Salivary gland of Cockroach, Mouth parts of Mosquito.",
            "10. Study of Chiton, Dentalium, Octopus, Glochidium larva.",
            "11. Study of Asterias, Echinus, Antedon."
          ]
        },
        "suggestedBooks": [
          "Ruppert and Barnes, R.D. (2006). Invertebrate Zoology, VIII Edition. Holt Saunders International Edition.",
          "Barnes, R.S.K., Calow, P., Olive, P.J.W., Golding, D.W. and Spicer, J.I. (2002). The Invertebrates: A New Synthesis, III Edition, Blackwell Science.",
          "Barrington, E.J.W. (1979). Invertebrate Structure and Functions. II Edition, E.L.B.S. and Nelson.",
          "Verma P S, Jordan E L. (2009). Invertebrate Zoology. S. Chand publishers.",
          "Brusca R C (2016). Invertebrates. Published by Sinauer Associates, an imprint of Oxford University Press.",
          "S. S. Lal, Practical Zoology Invertebrate."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Diversity of Chordates",
        "courseCode": "MJC-2",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Understand different classes of chordates, level of organization and evolutionary relationship between different subphyla and classes, within and outside the phylum.",
          "CO-2: Study about diversity in animals making students understand about their distinguishing features.",
          "CO-3: Appreciate similarities and differences in life functions among various groups of animals in Phylum Chordata.",
          "CO-4: Comprehend the circulatory, nervous and skeletal system of chordates.",
          "CO-5: Know about the habit and habitat of chordates in marine, freshwater and terrestrial ecosystems."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Chordates (8 Lectures)",
              "topics": [
                "1.1 Introduction to Chordates.",
                "1.2 General characteristics and classification (upto Order): Cephalochordata, Urochordata, Cyclostomata, Pisces, Amphibia, Reptilia, Aves and Mammalia."
              ]
            },
            {
              "title": "Unit 2: Origin, Evolution, Cephalochordata, Urochordata & Cyclostomata (10 Lectures)",
              "topics": [
                "2.1 Origin and Evolution of Chordata.",
                "2.2 Cephalochordata: Amphioxus.",
                "2.3 Urochordata: Herdmania (including retrogressive metamorphosis).",
                "2.4 Cyclostomata: Petromyzon."
              ]
            },
            {
              "title": "Unit 3: Pisces, Amphibia and Reptilia (12 Lectures)",
              "topics": [
                "3.1 Pisces: Migration, Osmoregulation, and Accessory respiration.",
                "3.2 Amphibia: Origin and Evolution; Parental care and Neoteny.",
                "3.3 Reptilia: Poison and Non-poisonous snakes; Poison apparatus; biting and feeding mechanism in snakes."
              ]
            },
            {
              "title": "Unit 4: Aves and Mammalia (10 Lectures)",
              "topics": [
                "4.1 Aves: Origin of birds; Flight adaptations; Migration in birds.",
                "4.2 Mammalia: Characters, distribution and affinities of Prototheria, Metatheria and Eutheria."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts provided (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Amphioxus: T.S through pharyngeal, intestinal, and caudal regions.",
            "2. Herdmania: Whole mount, Spicules.",
            "3. Cyclostomata: Petromyzon, Myxine.",
            "4. Fish: Scoliodon, Torpedo, Chimaera, Labeo, Exocoetus, Echeneis, Hippocampus; Scales of fishes.",
            "5. Amphibia: Ichthyophis, Bufo, Hyla, Alytes, Salamandra, Axolotl larva.",
            "6. Reptilia: Chelone, Hemidactylus, Varanus, Vipera, Naja, Bungarus, Uromastix, Chamaeleon, Draco, Calotes, Heloderma; Key for Identification of poisonous and non-poisonous snakes.",
            "7. Aves: Types of beaks and claws, Study of pecten from fowl head and brain of fowl.",
            "8. Mammalia: Sorex, Bat (Insectivorous and Frugivorous), Funambulus, Loris, Herpestes, Erinaceous, Macropus, Echidna."
          ]
        },
        "suggestedBooks": [
          "Young, J. Z. (2004). The Life of Vertebrates. III Edition. Oxford university press.",
          "Pough H. Vertebrate life, VIII Edition, Pearson International.",
          "Darlington P.J. The Geographical Distribution of Animals, R.E. Krieger Pub Co.",
          "Hall B. K. and Hallgrimsson B. (2008). Strickberger's Evolution. IV Edition. Jones and Bartlett Publishers Inc.",
          "Classification from Young, J. Z. (2004) to be followed.",
          "S.S. Lal, Practical Zoology Vertebrates."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Comparative Anatomy of Vertebrates",
        "courseCode": "MJC-3",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Explain comparative account of the different vertebrate systems.",
          "CO-2: Understand the pattern of vertebrate evolution, organization and functions of various systems.",
          "CO-3: Learn the comparative account of integument, skeletal components, their functions and modifications in different vertebrates.",
          "CO-4: Understand the evolution of heart, modification in aortic arches, structure of respiratory organs used in aquatic, terrestrial and aerial vertebrates; and digestive system and its anatomical specializations with respect to different diets and feeding habits.",
          "CO-5: Learn the evolution of brain, sense organs and excretory organs to a complex, highly evolved form in mammals.",
          "CO-6: Learn to analyze and critically evaluate the structure and functions of vertebrate systems, which helps them to discern the developmental, functional and evolutionary history of vertebrate species."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Integumentary System (4 Lectures)",
              "topics": [
                "Structure and derivatives of integument, functions of skin."
              ]
            },
            {
              "title": "Unit 2: Skeletal System (4 Lectures)",
              "topics": [
                "Basic plan of axial and appendicular skeleton."
              ]
            },
            {
              "title": "Unit 3: Digestive System (4 Lectures)",
              "topics": [
                "Alimentary canal and associated glands."
              ]
            },
            {
              "title": "Unit 4: Respiratory System (5 Lectures)",
              "topics": [
                "Respiratory organs and accessory respiratory organs."
              ]
            },
            {
              "title": "Unit 5: Circulatory System (4 Lectures)",
              "topics": [
                "5.1 General plan of circulation.",
                "5.2 Evolution of heart and aortic arches."
              ]
            },
            {
              "title": "Unit 6: Urinogenital System (4 Lectures)",
              "topics": [
                "Evolution of kidney and urinogenital ducts."
              ]
            },
            {
              "title": "Unit 7: Nervous System (5 Lectures)",
              "topics": [
                "Comparative account of Central nervous system and Peripheral nervous system."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Placoid/cycloid/ctenoid scales (15), Afferent/efferent branchial vessels (15), Digestive tract of frog/rat (10), Disarticulated skeleton (10), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Study of placoid, cycloid and ctenoid scales of fish through permanent slides.",
            "2. Study of afferent and efferent branchial vessels of Scoliodon through videos/models.",
            "3. Study of digestive tract of frog/ rat through videos/models.",
            "4. Disarticulated skeleton of Frog, Varanus, Fowl and Rabbit (Skull, Limb bones, Vertebral Column, Sternum, Girdles, Ribs).",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Kardong, K.V. (2005). Vertebrate's Comparative Anatomy, Function and Evolution. IV Edition. McGraw-Hill Higher Education.",
          "Kent, G.C. and Carr R.K. (2000). Comparative Anatomy of the Vertebrates. IX Edition. The McGraw-Hill Companies.",
          "Kotpal, R. L. (2010). Modern text book of zoology: vertebrates. Rastogi Publications.",
          "SWAYAM (Structure of heart): https://www.swayamprabha.gov.in/index.php/program/archive/9",
          "COURSERA (PALEONTOLOGY: Early vertebrate evolution): https://www.coursera.org/learn/early-vertebrate-evolution"
        ]
      },
      {
        "courseTitle": "Physiology",
        "courseCode": "MJC-4",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Know the principles of normal biological function in human body.",
          "CO-2: Outline basic human physiology and correlate with histological structures.",
          "CO-3: Comprehend and analyse problem-based questions on physiological aspects.",
          "CO-4: Recognize and explain how all physiological systems work in unison to maintain homeostasis in the body; and use of feedback loops to control the same.",
          "CO-5: Learn an integrative approach to understand the interactions of various organ systems resulting in the complex overall functioning of the body."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Digestive System (5 Lectures)",
              "topics": [
                "1.1 Digestion, Absorption and Assimilation of Carbohydrates, Protein and Lipid.",
                "1.2 Digestive glands."
              ]
            },
            {
              "title": "Unit 2: Neuromuscular Physiology (5 Lectures)",
              "topics": [
                "2.1 Structure of neuron, Propagation of nerve impulse.",
                "2.2 Structure of skeletal muscle, Mechanism of muscle contraction.",
                "2.3 Neuromuscular junction."
              ]
            },
            {
              "title": "Unit 3: Respiratory Physiology (4 Lectures)",
              "topics": [
                "3.1 Ventilation and Internal Respiration.",
                "3.2 Respiratory pigments.",
                "3.3 Transport of gases in blood."
              ]
            },
            {
              "title": "Unit 4: Cardiovascular System (8 Lectures)",
              "topics": [
                "4.1 Components of blood and their function, blood coagulation.",
                "4.2 Coronary circulation and heart beat.",
                "4.3 Cardiac cycle and ECG.",
                "4.4 Nervous and chemical regulation of heart rate."
              ]
            },
            {
              "title": "Unit 5: Renal and Reproductive Physiology (8 Lectures)",
              "topics": [
                "5.1 Structure of nephron and renal blood supply.",
                "5.2 Mechanism of urine formation and its regulation.",
                "5.3 Acid-Base balance.",
                "5.4 Spermatogenesis and oogenesis.",
                "5.5 Menstrual cycle."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Enumeration of RBC/WBC (10), ESR determination (10), Estimation of haemoglobin (10), Histological sections of mammalian organs (20), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Enumeration of red blood cells and white blood cells using haemocytometer.",
            "2. Determination of erythrocyte sedimentation rate (ESR).",
            "3. Estimation of haemoglobin.",
            "4. Examination of histological sections of mammalian oesophagus, stomach, duodenum, ileum, rectum, trachea, lung, Testis and Ovary.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Tortora, G.J. & Grabowski, S (2006). Principles of Anatomy & Physiology, XI edition. John Wiley & Sons.",
          "Vander A, Sherman J, and Luciano D (2014). Vander's Human Physiology: The mechanism of Body Function. XIII Edition, McGraw Hills.",
          "Guyton, A.C & Hall, J.E. (2006). Textbook of Medical Physiology, XI Edition. Harcourt Asia PTE Ltd/W.B. Saunders Company.",
          "e portals like SWAYAM & http://nsdl.niscair.res.in"
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Cell Biology",
        "courseCode": "MJC-5",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Understand fundamental principles of cell biology.",
          "CO-2: Explain structure and functions of cell organelles involved in diverse cellular processes.",
          "CO-3: Appreciate how cells grow, divide, survive, die and regulate these important processes.",
          "CO-4: Comprehend the process of cell signaling and its role in cellular functions.",
          "CO-5: Have an insight of how defects in functioning of cell organelles and regulation of cellular processes can develop into diseases.",
          "CO-6: Learn the advances made in the field of cell biology and their applications."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Overview of Virus, Prokaryotic and Eukaryotic cells (2 Lectures)",
              "topics": [
                "Overview of Virus, Prokaryotic and Eukaryotic cells."
              ]
            },
            {
              "title": "Unit 2: Plasma Membrane (6 Lectures)",
              "topics": [
                "2.1 Various models of plasma membrane.",
                "2.2 Transport across membranes (passive and active transport)."
              ]
            },
            {
              "title": "Unit 3: Cytoplasmic Organelles (10 Lectures)",
              "topics": [
                "3.1 Endoplasmic Reticulum — Structure, Signal hypothesis.",
                "3.2 Golgi apparatus — Structure, Protein sorting.",
                "3.3 Lysosomes and Peroxisomes.",
                "3.4 Mitochondria — Structure, Respiratory chain and oxidative phosphorylation."
              ]
            },
            {
              "title": "Unit 4: Nucleus (6 Lectures)",
              "topics": [
                "4.1 Structure of Nucleus.",
                "4.2 Euchromatin and Heterochromatin."
              ]
            },
            {
              "title": "Unit 5: Cell Division (6 Lectures)",
              "topics": [
                "5.1 Cell cycle and Molecular basis of its regulation.",
                "5.2 Mitosis and Meiosis."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Vital staining of mitochondria (10), Squash of onion root tip for mitosis (15), Stages of meiosis slides (10), Barr body / Polytene chromosome (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Vital staining of mitochondria in buccal epithelium.",
            "2. Preparation of temporary stained squash of onion root tip to study various stages of mitosis.",
            "3. Study of various stages of meiosis through permanent slides.",
            "4. Preparation of temporary stained mount to show the presence of Barr body in human female blood cells/ cheek cells OR Preparation of polytene chromosome from salivary gland of Chironomus larva.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Cooper, G.M., Hausman, R.E. (2009). The Cell: A Molecular Approach. V Edition, ASMPress and Sinauer Associates.",
          "Karp, G. (2010). Cell and Molecular Biology: Concepts and Experiments, VI Edition, John Wiley & Sons Inc.",
          "Powar, C. B. (1991). Cell Biology, Himalaya Publishing House.",
          "Online resources: https://swayam.gov.in/course/150-cell-biology, https://swayam.gov.in/courses/5173-biochemistry-and-cell-biology, https://www.khanacademy.org/science/biology"
        ]
      },
      {
        "courseTitle": "Endocrinology",
        "courseCode": "MJC-6",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Understand endocrine system and the basic properties of hormones.",
          "CO-2: Appreciate the importance of endocrine system and the crucial role it plays along with the nervous system in maintenance of homeostasis.",
          "CO-3: Gain insight into the molecular mechanism of hormone action and its regulation.",
          "CO-4: Know the regulation of physiological process by the endocrine system and its implication in diseases.",
          "CO-5: Gain knowledge about the prevalent endocrine disorders and critically analyze their own and their family's health issues."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Endocrinology (6 Lectures)",
              "topics": [
                "1.1 Overview of the endocrine system.",
                "1.2 Classification of hormones and their synthesis."
              ]
            },
            {
              "title": "Unit 2: Hypothalamo-hypophysial System (10 Lectures)",
              "topics": [
                "2.1 Structure of hypothalamus and its role in neuroendocrine regulation.",
                "2.2 Structure of pituitary gland, its hormones and function.",
                "2.3 Hormonal dysfunction associated with pituitary gland."
              ]
            },
            {
              "title": "Unit 3: Peripheral Endocrine Glands (8 Lectures)",
              "topics": [
                "3.1 Functional histology, hormones and function of Thyroid, Parathyroid, Adrenal, Islets of Langerhans and Gonads.",
                "3.2 Disorders related to hypersecretion and hyposecretion of hormones."
              ]
            },
            {
              "title": "Unit 4: Molecular Endocrinology (6 Lectures)",
              "topics": [
                "4.1 Hormone receptors.",
                "4.2 Mechanism of hormone action (Steroid and Non-steroid).",
                "4.3 Regulation of hormone action."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Display of mammalian endocrine organs (15), Permanent slides of endocrine glands (4x5=20), Hormone level estimation by ELISA / TLC of steroids (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Display of gonads, thyroid, adrenal, pancreas in mammal through videos/models.",
            "2. Study of the permanent slides of Pituitary, Adrenal, Ovary, Testes, Islets of Langerhans, Thymus, Thyroid and Parathyroid, Study of the permanent slide of vaginal smears.",
            "3. Estimation of plasma level of any hormone using ELISA OR Chromatographic separation of steroid hormones using paper chromatography.",
            "4. Practical Records/Charts/Models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "J. Larry Jameson Leslie De Groot (2010). Endocrinology. VI Edition.",
          "David O. Norris. Vertebrate Endocrinology. V Edition, Elsevier Academic press.",
          "Franklin F. Bolander. Molecular Endocrinology. III Edition, Academic Press, USA.",
          "Online: https://www.endocrine.org/topics"
        ]
      },
      {
        "courseTitle": "Ecology",
        "courseCode": "MJC-7",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Demonstrate an understanding of key concepts in ecology with emphasis on historical perspective, role of physical factors and concept of limiting factors.",
          "CO-2: Comprehend the population characteristics, dynamics, growth models and interactions.",
          "CO-3: Understand the community characteristics, ecosystem development and climax theories.",
          "CO-4: Know about the types of ecosystems, food chains, food webs, energy models and ecological efficiencies.",
          "CO-5: Apply the basic principles of ecology in wildlife conservation and management.",
          "CO-6: Inculcate scientific quantitative skills, evaluate experimental design, read graphs, and analyse and use information available in scientific literature."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Components of Ecology (2 Lectures)",
              "topics": [
                "1.1 Biotic factors.",
                "1.2 Abiotic factors.",
                "1.3 Laws of limiting factors."
              ]
            },
            {
              "title": "Unit 2: Ecosystem (10 Lectures)",
              "topics": [
                "2.1 Definition, structure, and function of different types of ecosystems including wetland ecosystem.",
                "2.2 Food chain and Food web.",
                "2.3 Energy flow through the ecosystem, Ecological pyramids and ecological efficiencies.",
                "2.4 Biogeochemical cycles."
              ]
            },
            {
              "title": "Unit 3: Population Ecology (6 Lectures)",
              "topics": [
                "3.1 Study of population attributes (Natality, Mortality, Density).",
                "3.2 Life tables; Exponential and logistic growth, equation and patterns, r and k strategies.",
                "3.3 Population interactions; Lotka-Volterra model."
              ]
            },
            {
              "title": "Unit 4: Community Ecology (4 Lectures)",
              "topics": [
                "4.1 Community characteristics: species richness, dominance, diversity, abundance, Ecotone and Edge effect.",
                "4.2 Ecological succession with examples and types."
              ]
            },
            {
              "title": "Unit 5: Applied Ecology (8 Lectures)",
              "topics": [
                "5.1 Biodiversity - Importance and threats.",
                "5.2 Wildlife conservation and management; National Parks, Bioreserves and Sanctuaries.",
                "5.3 Pollution and its hazards."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Soil/Pond Biota analysis or survivorship curve (10), DO & pH of water samples (15), Population density by quadrate method (15), Visit report to National Park/Sanctuary/Zoo (10), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Analysis of Soil/Pond Biota OR Study of life tables and plotting of survivorship curves of different types from the hypothetical/real data provided.",
            "2. Determination of dissolved oxygen and pH measurements of different water samples.",
            "3. Determination of population density in a natural/ hypothetical community by quadrate method.",
            "4. Report on a visit to National Park/Biodiversity Park/ Wild life sanctuary/Zoo.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Odum, E.P. (2008). Fundamentals of Ecology. Indian Edition. Brooks/Cole.",
          "Smith, R. L. (2000). Ecology and field biology. Harper and Row published."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Biochemistry",
        "courseCode": "MJC-8",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: To understand the structure, classification and importance of Carbohydrates and Proteins.",
          "CO2: To understand the structure and significance of physiologically important Lipids.",
          "CO3: To understand the basic structure and types of DNA and RNA, Base pairing, denaturation and renaturation of DNA.",
          "CO4: To understand the types of Enzymes, Mechanism of Enzyme Action and Enzyme Kinetics."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Elementary idea of Biomolecule (10 Lectures)",
              "topics": [
                "1.1 Structure and classification of Carbohydrates, Lipid and Protein.",
                "1.2 Structure, classification and physiological importance of Amino Acids.",
                "1.3 Structure, classification and physiological importance of Vitamins."
              ]
            },
            {
              "title": "Unit 2: Enzymes (6 Lectures)",
              "topics": [
                "2.1 Nomenclature and classification, Isozymes.",
                "2.2 Kinetics of enzyme-substrate reactions.",
                "2.3 Regulation of enzyme action."
              ]
            },
            {
              "title": "Unit 3: Carbohydrate Metabolism (8 Lectures)",
              "topics": [
                "3.1 Glycolysis and Citric acid cycle.",
                "3.2 Pentose Phosphate Pathway, Gluconeogenesis, Glycogenolysis and Glycogenesis."
              ]
            },
            {
              "title": "Unit 4: Lipid and Protein Metabolism (6 Lectures)",
              "topics": [
                "4.1 Beta oxidation and omega-oxidation of fatty acids, Ketogenesis.",
                "4.2 Transamination, Deamination, Urea cycle."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Qualitative tests of carbs, proteins, lipids (20), Paper chromatography of amino acids (15), Salivary amylase activity demo under pH/temp/inhibitors (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Qualitative tests of carbohydrates, proteins and lipids.",
            "2. Paper chromatography of amino acids.",
            "3. Demonstration of impact of pH, temperature and inhibitors on the action of salivary amylase.",
            "4. Practical Records/Charts/Models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Cox, M.M and Nelson, D.L. (2008). Lehninger's Principles of Biochemistry, V Edition, W.H. Freeman and Co., New York.",
          "Berg, J.M., Tymoczko, J.L. and Stryer, L. (2007). Biochemistry, VI Edition, W.H. Freeman and Co., New York.",
          "Murray, R.K., Bender, D.A., Botham, K.M., Kennelly, P.J., Rodwell, V.W. and Well, P.A. (2009). Harper's Illustrated Biochemistry, XXVIII Edition, McGraw-Hill Companies Inc.",
          "Hames, B.D. and Hooper, N.M. (2000). Instant Notes in Biochemistry, II Edition, BIOS Scientific Publishers Ltd., U.K."
        ]
      },
      {
        "courseTitle": "Genetics",
        "courseCode": "MJC-9",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To explain and discuss the genetic variation through linkage and crossing over.",
          "CO 2: To describe sex-linked, sex limited and sex influenced inheritance.",
          "CO 3: To understand the Concept behind genetic disorder, gene mutations and molecular basis of mutations and to explain the criteria for extra-chromosomal inheritance.",
          "CO 4: To describe the molecular mechanisms of recombination in bacteria and to explain and distinguish the concept of transposable genetic elements in prokaryotes and eukaryotes. To Solve genetic based problems."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Mendelian Genetics and Linkage (8 Lectures)",
              "topics": [
                "1.1 Principles of inheritance, Incomplete dominance and co-dominance, Multiple alleles, Lethal alleles, Epistasis and Pleiotropy.",
                "1.2 Linkage and crossing over; its cytological basis and molecular mechanisms, Recombination frequency, Interference and coincidence."
              ]
            },
            {
              "title": "Unit 2: Mutations (8 Lectures)",
              "topics": [
                "2.1 Gene mutation - Chemical and Physical mutagenesis.",
                "2.2 Chromosomal aberrations - Structural and Numerical.",
                "2.3 Detection of mutations in Drosophila - ClB method and attached X method."
              ]
            },
            {
              "title": "Unit 3: Sex Determination (6 Lectures)",
              "topics": [
                "3.1 Chromosomal mechanisms of sex determination.",
                "3.2 Genetic and molecular basis of sex determination in Drosophila.",
                "3.3 Sex-linked inheritance, sex-influenced and sex-limited characters."
              ]
            },
            {
              "title": "Unit 4: Extra-chromosomal Inheritance and Quantitative Genetics (8 Lectures)",
              "topics": [
                "4.1 Criteria for extra-chromosomal inheritance.",
                "4.2 Antibiotic resistance in Chlamydomonas, Kappa particles in Paramecium and Maternal effects (Shell spiralling in snail).",
                "4.3 Polygenic inheritance."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Identification of Drosophila mutants (15), Allelic/genotypic frequency via Hardy-Weinberg (20), Mendelian laws & Linkage map crosses problem (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Identification of various mutants of Drosophila in the given photograph/ specimen.",
            "2. Calculate allelic/ genotypic frequencies using Hardy-Weinberg's Principle.",
            "3. Solving problem based on Mendelian laws and Linkage map from Drosophila crosses.",
            "4. Practical Records/Charts/Models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Gardner, E.J., Simmons, M.J., Snustad, D.P. (2008). Principles of Genetics. VIII Edition. Wiley India.",
          "Snustad, D.P., Simmons, M.J. (2009). Principles of Genetics. V Edition. John Wiley and Sons Inc.",
          "Klug, W.S., Cummings, M.R., Spencer, C.A. (2012). Concepts of Genetics. X Edition. Benjamin Cummings.",
          "Russell, P. J. (2009). Genetics- A Molecular Approach. III Edition. Benjamin Cummings.",
          "Fletcher H. and Hickey I. (2015). Genetics. IV Edition. GS, Taylor and Francis Group, New York and London."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Developmental Biology",
        "courseCode": "MJC-10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To describe the mechanism of gametogenesis, fertilization and blocks to polyspermy.",
          "CO 2: To explain early embryonic development in frog and chick.",
          "CO 3: To understand the concepts of late embryonic development in model organisms.",
          "CO 4: To describe post embryonic development such as metamorphosis and regeneration with suitable examples and apply important experiments and project work."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction & Gametogenesis (10 Lectures)",
              "topics": [
                "1.1 Principles and Basic concepts of development biology - Phases of development, Cell-Cell interaction, Differentiation and growth.",
                "1.2 Gametogenesis: Spermatogenesis and Oogenesis.",
                "1.3 Mechanism of fertilization, Types of eggs and cleavage, Blastulation, Fate maps (including Techniques)."
              ]
            },
            {
              "title": "Unit 2: Early and Late Embryonic Development (8 Lectures)",
              "topics": [
                "2.1 Early development of frog and chick up to gastrulation.",
                "2.2 Late Embryonic Development: Fate of Germ Layers, Extra-embryonic membranes in birds, Placentation."
              ]
            },
            {
              "title": "Unit 3: Post Embryonic Development (6 Lectures)",
              "topics": [
                "3.1 Metamorphosis: Changes, hormonal regulations in amphibians.",
                "3.2 Regeneration: Modes of regeneration, epimorphosis, morphallaxis and compensatory regeneration (with one example each)."
              ]
            },
            {
              "title": "Unit 4: Implications of Developmental Biology (6 Lectures)",
              "topics": [
                "4.1 Teratogenesis: Teratogenic agents and their effects on embryonic development.",
                "4.2 In vitro fertilization, Stem cell, Amniocentesis.",
                "4.3 Basic concept of Aging and senescence."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Developmental stages of frog (2x5=10), Chick embryo stages (5x3=15), Drosophila developmental stages & life cycle (15), Placenta histology sections (10), Practical/Project report on chick embryo (10), Viva-voce (10).",
          "topics": [
            "1. Study of whole mounts and sections of developmental stages of frog through permanent slides: Cleavage stages, blastula, gastrula, neurula, tail-bud stage, tadpole (external and internal gill stages).",
            "2. Study of whole mounts of developmental stages of chick through permanent slides (Different hours of incubation).",
            "3. Study of the developmental stages and life cycle of Drosophila from stock culture.",
            "4. Study of different sections of placenta (Photomicrograph/ slides).",
            "5. Practical/Project report on chick embryo development.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Gilbert, S. F. (2010). Developmental Biology, IX Edition, Sinauer Associates, Inc., Publishers, Sunderland, Massachusetts, USA.",
          "Balinsky B. I. and Fabian B. C. (1981). An Introduction to Embryology, V Edition, International Thompson Computer Press.",
          "Carlson, R. F. Patten's Foundations of Embryology.",
          "Kalthoff (2008). Analysis of Biological Development, II Edition, McGraw-Hill.",
          "Lewis Wolpert (2002). Principles of Development. II Edition, Oxford University Press."
        ]
      },
      {
        "courseTitle": "Evolution",
        "courseCode": "MJC-11",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To understand the basis of origin of life such as: chemogeny, RNA world, biogeny and evolution of eukaryotes.",
          "CO 2: To obtain the various evolutionary concepts and heritable variation and to understand concept of species, isolating mechanisms, modes of speciation and adaptive radiation.",
          "CO 3: To explain and different types of fossils, geological time scale, climatic conditions, hominid characteristics, primate phylogeny and evolution of horse and man.",
          "CO 4: To understand Hardy-Weinberg principle of genetic equilibrium and its destabilizing forces such as Natural selection, Mutation, Migration and genetic drift."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Origin of Life (6 Lectures)",
              "topics": [
                "1.1 Chemogeny and RNA World.",
                "1.2 Evolution of Eukaryotes."
              ]
            },
            {
              "title": "Unit 2: Evolutionary Concepts (8 Lectures)",
              "topics": [
                "2.1 Lamarckism, Darwinism and Neo-Darwinism.",
                "2.2 Types and causes of Variation and their role in evolution."
              ]
            },
            {
              "title": "Unit 3: Evidences of Evolution (8 Lectures)",
              "topics": [
                "3.1 Evidences of Organic Evolution.",
                "3.2 Types of fossils and geological time scale.",
                "3.3 Evolution of horse and man.",
                "3.4 Human migration-Theories, Mitochondrial DNA and Y-chromosome studies."
              ]
            },
            {
              "title": "Unit 4: Population Genetics (8 Lectures)",
              "topics": [
                "4.1 Hardy-Weinberg Law, gene pool and allele frequency.",
                "4.2 Natural selection (concept of fitness, types of selection, kin selection).",
                "4.3 Genetic Drift (mechanism, founder's effect, bottleneck phenomenon)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Fossil types, Archaeopteryx (15), Vestigial/Analogous/Homologous organs OR Population sampling for discrete traits (15), Genotypic/allelic frequency calculations (20), Practical records/charts/models (10), Viva-voce (10).",
          "topics": [
            "1. Study of types of fossils, Archaeopteryx.",
            "2. Vestigial, Analogous and Homologous organs using suitable specimens OR Sampling for discrete characteristics (dominant vs recessive) for discontinuous variations e.g. hitch-hiker's thumb, tongue rolling and ear lobe.",
            "3. Calculation of genotypic, phenotypic and allelic frequencies from the data provided.",
            "4. Practical records/ charts/ models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Ridley, M. (2004). Evolution. III Edition. Blackwell publishing.",
          "Hall, B.K. and Hallgrimson, B (2008). Evolution. IV Edition. Jones and Barlett Publishers.",
          "Douglas, J. Futuyma (1997). Evolutionary Biology. Sinauer Associates.",
          "Snustad. S Principles of Genetics.",
          "Pevsner, J (2009). Bioinformatics and Functional Genomics. II Edition. Wiley-Blackwell.",
          "Savage, Evolution."
        ]
      },
      {
        "courseTitle": "Animal Behaviour",
        "courseCode": "MJC-12",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To understand various pattern of animal behaviours such as stereotyped, instinct, learnt, associative behaviour along with operant conditioning and habituation imprinting and to explain the concept of social and sexual behaviour.",
          "CO 2: To provide the concept of biological rhythm, photoperiod and regulation of seasonal reproduction of vertebrates and role of melatonin.",
          "CO 3: To understand the relevance of biological clock in terms of chronopharmacology, chronomedicine and chronotherapy.",
          "CO 4: To develop the skill in this course by performing practical works such as studying nest and nesting habitat of birds and social insects and other significant experiments."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Animal Behaviour (6 Lectures)",
              "topics": [
                "1.1 Definition of behaviour.",
                "1.2 Brief profile of modern ethologists (Karl von Frisch, Ivan Pavlov, Konrad Lorenz, Niko Tinbergen).",
                "1.3 Proximate and ultimate causes of behaviour."
              ]
            },
            {
              "title": "Unit 2: Patterns of behaviour and its Control (8 Lectures)",
              "topics": [
                "2.1 Stereotyped Behaviour; Orientation and Reflex.",
                "2.2 Innate and Learned behaviours."
              ]
            },
            {
              "title": "Unit 3: Biological Rhythm (8 Lectures)",
              "topics": [
                "3.1 Biological clocks in animals, Adaptive significance of biological clocks.",
                "3.2 Types of biological rhythms - Tidal, Lunar, Circadian and Circannual.",
                "3.3 Role of melatonin."
              ]
            },
            {
              "title": "Unit 4: Social and Sexual Behaviour (8 Lectures)",
              "topics": [
                "4.1 Social behaviour of insects (Honey bee), Foraging and dances in honey bee.",
                "4.2 Parental care in fishes and amphibians."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Photo/Geotactic response in earthworm/pest (15), Specimen comment on parental care (15), Write-up on courtship/maternal/nesting behaviour (20), Practical records/charts/models (10), Viva-voce (10).",
          "topics": [
            "1. Study of the pattern of Behaviour (any one of the followings): a) Photo Tactile Response in Earthworms or Paramecium, b) Geotactic Response of Earthworm or Pest.",
            "2. Comment upon the given specimen with response to parental care — Ichthyophis, Alytes and Hippocampus etc.",
            "3. Submit and write-up on any one of the given topic: a) Courtship in Peacock/Pigeons, b) Maternal Behavior in Rats/Cats, c) Study of nests and nesting behavior of the birds and social insects, d) Study of honey bee hive.",
            "4. Practical records/ charts/ models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "David McFarland, Animal Behaviour, Pitman Publishing Limited, London, UK.",
          "Manning, A. and Dawkins, M. S, An Introduction to Animal Behaviour, Cambridge University Press, UK.",
          "John Alcock, Animal Behaviour, Sinauer Associate Inc., USA.",
          "Paul W. Sherman and John Alcock, Exploring Animal Behaviour, Sinauer Associate Inc., Massachusetts, USA.",
          "Biological Rhythms: Vinod Kumar (2002) Narosa Publishing House, Delhi/ Springer-Verlag, Germany."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Molecular Biology",
        "courseCode": "MJC-13",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To understand Central dogma of molecular biology. Explain and distinguish mechanism of replication, transcription and translation in prokaryotes and eukaryotes.",
          "CO 2: To understand and explain the post transcriptional modifications in eukaryotes.",
          "CO 3: To explain and differentiate the mechanism of gene expression and regulation in prokaryotes and eukaryotes.",
          "CO 4: To describe the concept of regulatory RNAs, Ribo-switches and RNA interference and to enhance skill in molecular biology through relevant experiments."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs",
          "units": [
            {
              "title": "Unit 1: Basics of Nucleic Acid (8 Lectures)",
              "topics": [
                "1.1 Central Dogma of Molecular Biology.",
                "1.2 Structure of DNA, DNA forms, Repetitive DNA.",
                "1.3 Structure and functions of mRNA, tRNA, and rRNA."
              ]
            },
            {
              "title": "Unit 2: DNA Replication and Repair (8 Lectures)",
              "topics": [
                "2.1 DNA replication in prokaryotes.",
                "2.2 DNA repair, mismatch repair, Base excision repair (BER), Nucleotide excision repair (NER).",
                "2.3 Difference between prokaryotic and eukaryotic replication (A brief account)."
              ]
            },
            {
              "title": "Unit 3: Transcription (6 Lectures)",
              "topics": [
                "3.1 Mechanism of transcription in prokaryotes.",
                "3.2 Difference between prokaryotic and eukaryotic transcription (A brief account)."
              ]
            },
            {
              "title": "Unit 4: Translation (8 Lectures)",
              "topics": [
                "4.1 Genetic code, degeneracy of genetic code and Wobble hypothesis.",
                "4.2 Structure of ribosomes.",
                "4.3 Mechanism of translation in prokaryotes.",
                "4.4 Difference between prokaryotes and eukaryotes translation (A brief account)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Demonstration of DNA/RNA by Feulgen/MGP (20), DNA isolation/restriction digestion (15), Gel electrophoresis / Nucleotide model (15), Practical/Project report (10), Viva-voce (10).",
          "topics": [
            "1. Demonstration of DNA by Feulgen reaction or RNA by Methyl Green Pyronin (MGP) method.",
            "2. Isolation of plasmid/genomic DNA OR Restriction digestion of DNA.",
            "3. DNA gel electrophoresis OR Preparation of nucleotide model by beads and sticks.",
            "4. Practical/Project report on chick embryo development.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Becker, W.M., Kleinsmith, L.J., Hardin. J. and Bertoni, G. P. (2009). The World of the Cell. VII Edition. Pearson Benjamin Cummings Publishing, San Francisco.",
          "Bruce Alberts, Alexander Johnson, Julian Lewis, Martin Raff, Keith Roberts, Peter Walter: Molecular Biology of the Cell, IV Edition.",
          "Cooper G. M. and Robert E. Hausman R. E. The Cell: A Molecular Approach, V Edition, ASM Press and Sinauer Associates.",
          "De Robertis, E.D.P. and De Robertis, E.M.F. (2006). Cell and Molecular Biology. VIII Edition. Lippincott Williams and Wilkins, Philadelphia.",
          "Karp, G. (2010). Cell and Molecular Biology: Concepts and Experiments. VI Edition. John Wiley and Sons. Inc."
        ]
      },
      {
        "courseTitle": "Research Methodology",
        "courseCode": "MJC-14",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Acquire fundamental knowledge on scientific research methodologies, literature review, and experimental design in biological sciences.",
          "CO2: Learn statistical data interpretation, scientific writing, publication ethics, research ethics, and IPR guidelines.",
          "CO3: Formulate research hypotheses and prepare formal research proposals."
        ],
        "theory": {
          "credits": "5",
          "note": "Common Syllabus of MJC-14 for all the subjects of the Faculty of Sciences has been separately prepared.",
          "units": [
            {
              "title": "Unit 1: Introduction to Research & Research Design",
              "topics": [
                "Meaning, Objectives, Motivation, Types of research, Research approaches, Significance of research, Research methods versus Methodology, Research and Scientific Method, Importance of Knowing How Research is Done, Research Process, Criteria of Good Research."
              ]
            },
            {
              "title": "Unit 2: Defining Research Problem & Literature Survey",
              "topics": [
                "What is a Research Problem?, Selecting the Problem, Necessity of Defining the Problem, Technique Involved in Defining a Problem, Primary and secondary sources, Online databases (PubMed, Scopus, Web of Science, Google Scholar), Citation styles and reference management tools (Zotero, Mendeley)."
              ]
            },
            {
              "title": "Unit 3: Data Collection and Analysis in Biological Sciences",
              "topics": [
                "Methods of data collection (Primary and secondary data), Sampling fundamentals, Sampling design, Measurement scales, Data presentation, Application of statistical software (SPSS, R, Excel) for biological data analysis."
              ]
            },
            {
              "title": "Unit 4: Research Ethics, Plagiarism and IPR",
              "topics": [
                "Ethics in biological research, Institutional Animal Ethics Committee (IAEC) norms, Bio-safety guidelines, Plagiarism checks, Intellectual Property Rights (IPR), Patents, Copyrights, Trademark."
              ]
            },
            {
              "title": "Unit 5: Scientific Writing and Report Preparation",
              "topics": [
                "Structure of research paper/thesis (IMRAD format), Abstract writing, Preparation of figures and tables, Peer review process, Writing research proposals and grant applications."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "C.R. Kothari and Gaurav Garg (2019). Research Methodology: Methods and Techniques, New Age International Publishers.",
          "Ranjit Kumar (2014). Research Methodology: A Step-by-Step Guide for Beginners, Sage Publications.",
          "Day, R.A. and Gastel, B. (2011). How to Write and Publish a Scientific Paper, Cambridge University Press."
        ]
      },
      {
        "courseTitle": "Immunology and Microbiology",
        "courseCode": "MJC-15",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To explain cells and organs of the immune system, innate and adaptive immunity.",
          "CO 2: To describe autoimmunity with reference to rheumatoid arthritis and tolerance and AIDS.",
          "CO 3: To understand antigens and its type, structure and functions of immunoglobulins, antigen-antibody interactions and immunoassays (such as ELISA and RIA).",
          "CO 4: To explain structure and functions major histocompatibility complex, know the concept of hypersensitivity and vaccines.",
          "CO 5: To understand the microbial basis of diseases."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs",
          "units": [
            {
              "title": "Unit 1: Basic Concept of Immunity (10 Lectures)",
              "topics": [
                "1.1 Overview of Immune System, Cells and organs of Immune system.",
                "1.2 Innate and Adaptive Immunity - Anatomical barriers, Inflammation and Phagocytosis, Mechanism of cell and humoral mediated immunity, Active and Passive immunity."
              ]
            },
            {
              "title": "Unit 2: Antigen and Immunoglobulin (8 Lectures)",
              "topics": [
                "2.1 Antigens; Antigenicity vs immunogenicity, Factors influencing immunogenicity, Adjuvants and haptens.",
                "2.2 Immunoglobulins: Structure and functions of different classes of immunoglobulins, Antigen-antibody interactions."
              ]
            },
            {
              "title": "Unit 3: MHC and Cytokines (6 Lectures)",
              "topics": [
                "3.1 Major Histocompatibility Complex: Structure and functions of MHC I and II, Antigen processing and presentation.",
                "3.2 Cytokines - Types and function."
              ]
            },
            {
              "title": "Unit 4: Complement System and Vaccines (6 Lectures)",
              "topics": [
                "4.1 Complement System: Components and pathways of complement activation.",
                "4.2 Vaccines: Various types of vaccines."
              ]
            },
            {
              "title": "Unit 5: Microbiology (10 Lectures)",
              "topics": [
                "5.1 Bacteria; Structure, Classification, Growth, Culture and Pathogenicity.",
                "5.2 Virus; Morphology and Pathogenicity.",
                "5.3 A brief outline of endoparasitic diseases."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): ABO blood group determination (15), Study of lymphoid organs (15), Working principle of RIA/Flow Cytometry/ELISA (10), Culture and Gram staining of Bacteria (10), Practical/Project report on chick embryo development (10), Viva-voce (10).",
          "topics": [
            "1. Determination of ABO blood group using ABD antisera method.",
            "2. Study of lymphoid organs: (i) Kidney, (ii) Spleen, (iii) Bone marrow, (iv) Lymph node.",
            "3. Comment upon working principle of RIA, Flow Cytometry, ELISA.",
            "4. Culture and Gram staining of Bacteria.",
            "5. Practical/Project report on chick embryo development.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Kindt, T. J., Goldsby, R.A., Osborne, B. A. and Kuby, J (2006). Immunology, VI Edition. W.H. Publication.",
          "David, M., Jonathan, B., David, R. B. and Ivan R. (2006). Immunology, VII Edition, Mosby, Elsevier Edition. Saunders Publication.",
          "Abbas, K.Abul and Lechtman H. Andrew (2003.) Cellular and Molecular Immunology. V Edition.",
          "Owen J A, Punt J, Stanford S A (2013). Kuby Immunology. W H Freeman & Co.",
          "Wood P. (2007). Basic Immunology. Pearson publication.",
          "Principles of Microbiology, Ronald M. Atlas, Wm. C. Brown Publishers.",
          "Microbiology by Pelczar, M. J. Pelczar."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Instrumentation and Biometry",
        "courseCode": "MJC-16",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: To understand the principles and working of various instruments used in biological experimentation.",
          "CO2: Gain insight of relationship between mathematics and biology.",
          "CO3: To present their data in statistically reliable form.",
          "CO4: To test their hypothesis using different models.",
          "CO5: To correlate their data with different factors."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs",
          "units": [
            {
              "title": "Unit 1: Instrumentation (10 Lectures)",
              "topics": [
                "1.1 Principle and uses of: pH meter, Colorimeter, Spectrophotometer, Centrifuge.",
                "1.2 Microscopy: Light microscope, Compound microscope, Phase contrast, Fluorescent and Electron Microscope."
              ]
            },
            {
              "title": "Unit 2: Biological Techniques (10 Lectures)",
              "topics": [
                "2.1 Electrophoresis - Agarose gel, SDS-PAGE electrophoresis.",
                "2.2 Chromatography - Column, GLC.",
                "2.3 Cell separation by density gradient centrifugation.",
                "2.4 Introduction to different culture medium and tools used.",
                "2.5 PCR.",
                "2.6 Recombinant DNA Technology."
              ]
            },
            {
              "title": "Unit 3: Introduction to Biometry (10 Lectures)",
              "topics": [
                "3.1 Concept of data and graphical presentation of data.",
                "3.2 Measures of central tendency: mean, mode and median.",
                "3.3 Measures of dispersion, standard deviation, standard error.",
                "3.4 Types of variables; Poisson, Binomial and Normal distribution.",
                "3.5 Experimental design and hypothesis testing."
              ]
            },
            {
              "title": "Unit 4: Tests of Significance (10 Lectures)",
              "topics": [
                "4.1 Test of significance: t-test, F-test, chi square test.",
                "4.2 Multiple linear regression — ANOVA (One way and two-way ANOVA).",
                "4.3 Correlation and simple linear regression.",
                "4.4 Karl-Pearson correlation coefficient and Ranks correlation coefficient."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "AB Khanal (2016). Mahajan's Methods in Biostatistics for Medical Students and Research Workers. Jaypee Brothers Medical Publishers.",
          "Jerrold H. Zar (2009). Biostatistical analysis. Pearson publication.",
          "RC Elston and WD Johnson (2008). Basic Biostatistics for Geneticists and Epidemiologists. Wiley publication.",
          "Norman TJ Bailey (2000). Statistical Methods in Biology. Published by: Cambridge University Press.",
          "Biological instrumentation and Methodology, P. K. Bajpai.",
          "Instrumentation: Theory and Application, S. Sheel.",
          "Virtual Labs: http://www.vlab.co.in, http://zoologygysan.blogspot.com, www.onlinelabs.in, www.labinapp.com, www.uwlax.edu"
        ]
      }
    ]
  },
  "MIC": {
    "1st": [
      {
        "courseTitle": "Diversity of Non-Chordates",
        "courseCode": "MIC-1",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Learn about the importance of systematics, taxonomy, and structural organization of non-chordates.",
          "CO-2: Critically analyse the organization, complexity and characteristic features of non chordates.",
          "CO-3: Recognize the life functions and the ecological roles of the animals belonging to different phyla."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Non-chordates (5 Lectures)",
              "topics": [
                "General characteristics and classification (up to order) of the following Phyla: Protozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes and Nemathelminthes, Annelida, Arthropoda, Mollusca, Echinodermata."
              ]
            },
            {
              "title": "Unit 2: Structure and life history of Protozoa & Porifera (4 Lectures)",
              "topics": [
                "(i) Protozoa - Paramecium.",
                "(ii) Porifera - Sycon."
              ]
            },
            {
              "title": "Unit 3: Structure and life history of Cnidaria, Platyhelminthes & Aschelminthes (5 Lectures)",
              "topics": [
                "(iii) Cnidaria - Obelia.",
                "(iv) Platyhelminthes - Fasciola.",
                "(v) Aschelminthes - Ascaris."
              ]
            },
            {
              "title": "Unit 4: Study of coelomates (6 Lectures)",
              "topics": [
                "(vi) Annelida - Pheretima.",
                "(vii) Arthropoda - Palaemon.",
                "(viii) Mollusca - Pila.",
                "(ix) Echinodermata - Asterias.",
                "(x) Hemichordata - Balanoglossus."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Study of whole mount of Euglena, Paramecium, Leishmania.",
            "2. Study of Sycon, Spongilla, T.S. of Sycon, L.S. of Sycon.",
            "3. Study of Obelia, Aurelia, Gorgonia.",
            "4. Study of adult Fasciola hepatica, Taenia solium and their life stages.",
            "5. Study of Pheretima, Hirudinaria.",
            "6. Study of T.S. through pharynx, gizzard, and typhlosolar intestine of earthworm.",
            "7. Study of Limulus, Palaemon, Apis.",
            "8. Mouth parts of Mosquito and Cockroach.",
            "9. Study of Pila, Unio.",
            "10. Study of Asterias."
          ]
        },
        "suggestedBooks": [
          "Ruppert and Barnes, R.D. (2006). Invertebrate Zoology, VIII Edition. Holt Saunders International Edition.",
          "Barnes, R.S.K., Calow, P., Olive, P.J.W., Golding, D.W. and Spicer, J.I. (2002). The Invertebrates: A New Synthesis, III Edition, Blackwell Science.",
          "Barrington, E.J.W. (1979). Invertebrate Structure and Functions. II Edition, E.L.B.S. and Nelson.",
          "Verma P S, Jordan E L. (2009). Invertebrate Zoology. S. Chand publishers.",
          "Brusca R C (2016). Invertebrates. Published by Sinauer Associates, an imprint of Oxford University Press.",
          "S.S. Lal, Practical Zoology Invertebrate."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Diversity of Chordates",
        "courseCode": "MIC-2",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: To understand the General Characteristics and Classification of Hemichordata, Urochordata and Cephalochordata, the Larval forms of Protochordata and Retrogressive Metamorphosis in Urochordata.",
          "CO-2: To acquire knowledge about the General Characters and Classification of Agnatha, Pisces and Amphibia.",
          "CO-3: To understand the General Characteristics and Classification of Reptilia, Aves and Mammals, Biting Mechanism in Snakes, Flight Adaptations in Birds and Migration in Birds."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: General characteristics and classification (upto Order) (5 Lectures)",
              "topics": [
                "Cephalochordata, Urochordata, Pisces, Amphibia, Reptilia, Aves, Mammals, Cyclostomata."
              ]
            },
            {
              "title": "Unit 2: Protochordata (4 Lectures)",
              "topics": [
                "2. Cephalochordata: Amphioxus.",
                "3. Urochordata: Herdmania (including retrogressive metamorphosis)."
              ]
            },
            {
              "title": "Unit 3: Pisces and Reptilia (5 Lectures)",
              "topics": [
                "4. Pisces: Scoliodon.",
                "5. Reptilia: Biting and feeding mechanism in snakes."
              ]
            },
            {
              "title": "Unit 4: Aves and Mammals (6 Lectures)",
              "topics": [
                "6. Aves: Flight adaptations, Elementary idea of migration.",
                "7. Mammals: Characters, distribution and affinities of Prototheria and Metatheria."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Amphioxus: Section through pharyngeal, intestinal, and caudal regions.",
            "2. Herdmania: Whole mount, Spicules.",
            "3. Cyclostomata: Petromyzon, Myxine.",
            "4. Fish: Scoliodon, Torpedo, Chimaera, Labeo, Exocoetus, Echeneis, Hippocampus; Scales of fishes.",
            "5. Amphibia: Ichthyophis, Bufo, Hyla, Alytes, Salamandra, Axolotl larva.",
            "6. Reptilia: Chelone, Hemidactylus, Varanus, Vipera, Naja, Bungarus, Uromastix, Chamaeleon, Draco, Calotes, Heloderma; Key for Identification of poisonous and non-poisonous snakes.",
            "7. Aves: Types of beaks and claws, Study of pecten from fowl head and brain of fowl.",
            "8. Mammalia: Sorex, Bat (Insectivorous and Frugivorous), Funambulus, Loris, Herpestes, Erinaceous, Macropus, Echidna."
          ]
        },
        "suggestedBooks": [
          "Young, J. Z. (2004). The Life of Vertebrates. III Edition. Oxford university press.",
          "Pough H. Vertebrate life, VIII Edition, Pearson International.",
          "Darlington P.J. The Geographical Distribution of Animals, R.E. Krieger Pub Co.",
          "Hall B. K. and Hallgrimsson B. (2008). Strickberger's Evolution. IV Edition. Jones and Bartlett Publishers Inc.",
          "Classification from Young, J. Z. (2004) to be followed.",
          "S. S. Lal, Practical Zoology Vertebrates."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Physiology",
        "courseCode": "MIC-3",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Know the principles of normal biological function in human body.",
          "Outline basic human physiology and correlate with histological structures.",
          "Comprehend and analyse problem-based questions on physiological aspects.",
          "Recognize and explain how all physiological systems work in unison to maintain homeostasis in the body; and use of feedback loops to control the same.",
          "Learn an integrative approach to understand the interactions of various organ systems resulting in the complex overall functioning of the body."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Digestive system (3 Lectures)",
              "topics": [
                "1.1. Structure and function of digestive system.",
                "1.2. Digestion and absorption of food."
              ]
            },
            {
              "title": "Unit 2: Neuromuscular Physiology (4 Lectures)",
              "topics": [
                "2.1. Structure of neuron and propagation of nerve impulse.",
                "2.2. Structure of skeletal muscle and mechanism of muscle contraction."
              ]
            },
            {
              "title": "Unit 3: Respiratory system (4 Lectures)",
              "topics": [
                "3.1. Structure of respiratory organs, pulmonary ventilation.",
                "3.2. Transport of gases in blood."
              ]
            },
            {
              "title": "Unit 4: Excretory system (2 Lectures)",
              "topics": [
                "4.1. Structure of excretory organs.",
                "4.2. Mechanism of urine formation."
              ]
            },
            {
              "title": "Unit 5: Heart (2 Lectures)",
              "topics": [
                "5.1. Structure and functions of heart.",
                "5.2. Cardiac cycle."
              ]
            },
            {
              "title": "Unit 6: Endocrine glands and Reproduction (5 Lectures)",
              "topics": [
                "6.1. Structure and functions of endocrine glands.",
                "6.2. Spermatogenesis and oogenesis."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Enumeration of RBC/WBC (10), ESR determination (10), Estimation of haemoglobin (10), Histological sections of mammalian organs (20), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Enumeration of red blood cells and white blood cells using haemocytometer.",
            "2. Determination of erythrocyte sedimentation rate.",
            "3. Estimation of haemoglobin.",
            "4. Examination of histological sections of mammalian oesophagus, stomach, duodenum, ileum, rectum, trachea, lung, Testis and Ovary.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Tortora, G.J.& Grabowski, S (2006) Principles of Anatomy & Physiology, XI edition. John Wiley & Sons.",
          "Vander A, Sherman J, and Luciano D (2014). Vander's Human Physiology: The mechanism of Body Function. XIII Edition, McGraw Hills.",
          "Guyton, A.C & Hall, J.E. (2006). Textbook of Medical Physiology, XI Edition. Harcourt Asia PTE Ltd/W.B. Saunders Company.",
          "e portals like SWAYAM, http://nsdl.niscair.res.in"
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Ecology",
        "courseCode": "MIC-4",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Demonstrate an understanding of key concepts in ecology with emphasis on historical perspective, role of physical factors and concept of limiting factors.",
          "Comprehend the population characteristics, dynamics, growth models and interactions.",
          "Understand the community characteristics, ecosystem development and climax theories.",
          "Know about the types of ecosystems, food chains, food webs, energy models, and ecological efficiencies.",
          "Apply the basic principles of ecology in wildlife conservation and management.",
          "Inculcate scientific quantitative skills, evaluate experimental design, read graphs, and analyse and use information available in scientific literature."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Ecology (2 Lectures)",
              "topics": [
                "Introduction to Ecology, Scope of ecology, Laws of limiting factors."
              ]
            },
            {
              "title": "Unit 2: Population Dynamics (4 Lectures)",
              "topics": [
                "Population dynamics, Demographic indices, Population interactions."
              ]
            },
            {
              "title": "Unit 3: Community & Biodiversity (2 Lectures)",
              "topics": [
                "Community: Biodiversity and study of diversity index."
              ]
            },
            {
              "title": "Unit 4: Ecosystem (7 Lectures)",
              "topics": [
                "Ecosystem: Types of ecosystems, Detailed study of Aquatic ecosystem, Food chain, Food web, Ecological pyramids and Biogeochemical cycle."
              ]
            },
            {
              "title": "Unit 5: Applied Ecology (5 Lectures)",
              "topics": [
                "Applied Ecology: Wildlife conservation; Importance, threats and management, Protected areas; National Parks, Bioreserves and Sanctuaries."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Analysis of Pond Biota (10), DO of water samples (15), Life tables & survivorship curves (15), Population density by quadrate method (10), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Analysis of Pond Biota.",
            "2. Determination of dissolved oxygen of different water samples.",
            "3. Study of life tables and plotting of survivorship curves of different types from the hypothetical/real data provided.",
            "4. Determination of population density in a natural/ hypothetical community by quadrate method.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Odum, E.P. (2008). Fundamentals of Ecology. Indian Edition. Brooks/Cole.",
          "Smith, R. L. (2000). Ecology and field biology. Harper and Row publisher.",
          "Colinvaux, P.A. (1993). Ecology. John Willey & Sons, Inc.",
          "Krebs, C. J. (2001). Ecology. Benjamin Cummings."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Cell Biology",
        "courseCode": "MIC-5",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Understand the basic organization of prokaryotic and eukaryotic cells.",
          "Explain the structure and functioning of biological membranes and cell organelles.",
          "Comprehend cell cycle regulation and mechanisms of mitosis and meiosis."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Overview of Prokaryotic and Eukaryotic cells (2 Lectures)",
              "topics": [
                "Overview of Prokaryotic and Eukaryotic cells."
              ]
            },
            {
              "title": "Unit 2: Plasma Membrane (3 Lectures)",
              "topics": [
                "Plasma Membrane: Fluid Mosaic Model, Active and passive transport."
              ]
            },
            {
              "title": "Unit 3: Endomembrane System (4 Lectures)",
              "topics": [
                "Endomembrane System: Structure and Functions of Endoplasmic Reticulum, Golgi apparatus, Lysosomes and Peroxisomes."
              ]
            },
            {
              "title": "Unit 4: Mitochondria (4 Lectures)",
              "topics": [
                "Mitochondria: Structure, Respiratory chain and ATP production."
              ]
            },
            {
              "title": "Unit 5: Nucleus (3 Lectures)",
              "topics": [
                "Nucleus: Structure of Nucleus and organization of Chromatin."
              ]
            },
            {
              "title": "Unit 6: Cell Cycle (4 Lectures)",
              "topics": [
                "Cell cycle: Mitosis, Meiosis and their regulation in brief."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Vital staining of mitochondria (15), Mitosis slides (5x2=10), Meiosis slides (5x2=10), Barr body mount (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Vital staining of mitochondria in buccal epithelium.",
            "2. Study of various stages of mitosis through permanent slides. (any two)",
            "3. Study of various stages of meiosis through permanent slides (any two)",
            "4. Preparation of temporary stained mount to show the presence of Barr body in human cheek cells.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Cooper, G.M., Hausman, R.E. (2009) The Cell: A Molecular Approach. V Edition, ASM Press and Sinauer Associates.",
          "Karp, G. (2010). Cell and Molecular Biology: Concepts and Experiments, VI Edition, John Wiley & Sons Inc.",
          "Powar, C. B. (1991) Cell Biology, Himalaya Publishing House.",
          "Alberts et al: Molecular Biology of the Cell (2008, Garland)"
        ]
      },
      {
        "courseTitle": "Genetics",
        "courseCode": "MIC-6",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "To understand variation, linkage and crossing over.",
          "To understand sex linked inheritance.",
          "To understand genetic disorders and mutations.",
          "To understand extra chromosomal inheritance."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Principles of Genetic Inheritance & Linkage (5 Lectures)",
              "topics": [
                "1.1 Principles of Genetic inheritance, Incomplete dominance and co-dominance.",
                "1.2 Concept of Linkage and crossing over."
              ]
            },
            {
              "title": "Unit 2: Gene Mutation (4 Lectures)",
              "topics": [
                "2.1 Gene mutation - Chemical and Physical mutagenesis.",
                "2.2 Chromosomal aberrations — Structural and Numerical."
              ]
            },
            {
              "title": "Unit 3: Sex Determination & Sex-linked Inheritance (6 Lectures)",
              "topics": [
                "3.1 Chromosomal mechanisms of sex determination.",
                "3.2 Sex-linked inheritance, sex-influenced and sex-limited characters."
              ]
            },
            {
              "title": "Unit 4: Extra-chromosomal Inheritance (5 Lectures)",
              "topics": [
                "4.1 Extra-chromosomal Inheritance.",
                "4.2 Kappa particles in Paramecium and Maternal effects (Shell spiralling in snail)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Polytene chromosomes preparation (20), Identification of Drosophila mutants (15), Pedigree analysis of human inherited traits (15), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Preparation of Polytene chromosomes from Chironomous/Drosophila.",
            "2. Identification of various mutants of Drosophila in the given photograph.",
            "3. Study of pedigree analysis of human inherited traits.",
            "4. Practical Records/Charts/Models.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Gardner, E. J., Simmons, M. J., Snustad, D. P. (2008). Principles of Genetics. VIII Edition. Wiley, India.",
          "Snustad, D. P., Simmons, M. J. (2009). Principles of Genetics. V Edition. John Wiley and Sons Inc.",
          "Klug, W. S., Cummings, M. R., Spencer, C.A. (2012). Concepts of Genetics. X Edition. Benjamin Cummings.",
          "Russell, P. J. (2009). Genetics- A Molecular Approach. III Edition. Benjamin Cummings.",
          "Fletcher H. and Hickey I. (2015). Genetics. IV Edition. G S, Taylor and Francis Group, New York and London."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Evolutionary Biology",
        "courseCode": "MIC-7",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Understand origin of life theories and evolutionary doctrines.",
          "Analyze evidences of evolution and mechanisms of population genetics."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Origin of Life (4 Lectures)",
              "topics": [
                "Origin of Life: Chemogeny and Biogeny."
              ]
            },
            {
              "title": "Unit 2: Evolutionary Concepts (8 Lectures)",
              "topics": [
                "Evolutionary concepts: A brief account of evolutionary theories: Lamarckism, Darwinism and Neo-Darwinism."
              ]
            },
            {
              "title": "Unit 3: Evidences of Evolution (6 Lectures)",
              "topics": [
                "Evidences of Evolution, Evolution of man."
              ]
            },
            {
              "title": "Unit 4: Population Genetics (2 Lectures)",
              "topics": [
                "Population Genetics: Hardy-Weinberg Law."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Fossil types Archaeopteryx (10), Vestigial/Homologous organs (15), Discrete variations sampling (10), Genotypic/allelic frequencies calculation (15), Practical records/charts/models (10), Viva-voce (10).",
          "topics": [
            "1. Study of types of fossils (Archaeopteryx - a connecting link).",
            "2. Vestigial, Analogous and Homologous organs using suitable specimens.",
            "3. Sampling for discrete characteristics (dominant vs recessive) for discontinuous variations e.g., tongue rolling, ear lobe.",
            "4. Calculation of genotypic, phenotypic and allelic frequencies from the data provided.",
            "5. Practical records/ charts/ models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Ridley, M. (2004). Evolution. III Edition. Blackwell publishing.",
          "Hall, B.K. and Hallgrimson, B (2008). Evolution. IV Edition. Jones and Barlett Publishers.",
          "Douglas, J. Futuyma (1997). Evolutionary Biology. Sinauer Associates.",
          "Pevsner, J (2009). Bioinformatics and Functional Genomics. II Edition. Wiley-Blackwell."
        ]
      },
      {
        "courseTitle": "Developmental Biology",
        "courseCode": "MIC-08",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To describe the mechanism of gametogenesis, fertilization.",
          "CO 2: To explain early embryonic development in frog and chick.",
          "CO 3: To understand the concepts of late embryonic development in model organisms.",
          "CO 4: To describe post embryonic development such as metamorphosis and regeneration with suitable examples and apply important experiments and project work."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction (4 Lectures)",
              "topics": [
                "Basic concepts of reproduction and development."
              ]
            },
            {
              "title": "Unit 2: Early and Late Embryonic Development (6 Lectures)",
              "topics": [
                "2.1 Gametogenesis - Spermatogenesis, Oogenesis.",
                "2.2 Types of eggs, Patterns of cleavage and Blastulation.",
                "2.3 Early development of frog up to gastrulation.",
                "2.4 Extra-embryonic membranes in birds."
              ]
            },
            {
              "title": "Unit 3: Post Embryonic Development (5 Lectures)",
              "topics": [
                "3.1 Metamorphosis: Changes, hormonal regulations in amphibians.",
                "3.3 Ageing: Concepts and Theories."
              ]
            },
            {
              "title": "Unit 4: Implications of Developmental Biology (5 Lectures)",
              "topics": [
                "4.1 Teratogenesis: Teratogenic agents and their effects on embryonic development.",
                "4.2 In vitro fertilization."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Frog development slides (20), Chick embryo stages (20), Placenta sections (10), Practical/Project report (10), Viva-voce (10).",
          "topics": [
            "1. Study of whole mounts and sections of developmental stages of frog through permanent slides: Cleavage stages, blastula, gastrula.",
            "2. Study of whole mounts of developmental stages of chick through permanent slides: Primitive streak 18, 24, 36, 48, 72, and 96 hours of incubation.",
            "3. Study of different sections of placenta (Photomicrograph/ slides).",
            "4. Practical/Project report on chick embryo development.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Gilbert, S. F. (2010). Developmental Biology, IX Edition, Sinauer Associates, Inc., Publishers, Sunderland, Massachusetts, USA.",
          "Balinsky B. I. and Fabian B. C. (1981). An Introduction to Embryology, V Edition, International Thompson Computer Press.",
          "Carlson, R. F. Patten's Foundations of Embryology.",
          "Kalthoff (2008). Analysis of Biological Development, II Edition, McGraw-Hill Publishers.",
          "Lewis Wolpert (2002). Principles of Development. II Edition, Oxford University Press."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Animal Behaviour",
        "courseCode": "MIC-09",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: To understand various pattern of animal behaviours such as stereotyped, instinct, learnt, associative behaviour along with operant conditioning and habituation imprinting and to explain the concept of social and sexual behaviour.",
          "CO 2: To provide the concept of biological rhythm, photoperiod and regulation of seasonal reproduction of vertebrates and role of melatonin.",
          "CO 3: To understand the relevance of biological clock in terms of chronopharmacology, chronomedicine and chronotherapy.",
          "CO 4: To develop the skill in this course by performing practical works such as studying nest and nesting habitat of birds and social insects and other significant experiments."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Animal Behaviour (5 Lectures)",
              "topics": [
                "1.1 Definition and types of behaviour.",
                "1.2 Origin and history of ethology."
              ]
            },
            {
              "title": "Unit 2: Patterns of Behaviour (5 Lectures)",
              "topics": [
                "2.1 Instinct behaviours.",
                "2.2 Learned behaviours."
              ]
            },
            {
              "title": "Unit 3: Biological Rhythm (5 Lectures)",
              "topics": [
                "3.1 Biological clocks in animals and its adaptive significance.",
                "3.2 Types of biological rhythms- Tidal, Lunar, Circadian and Circannual."
              ]
            },
            {
              "title": "Unit 4: Social Behaviour (5 Lectures)",
              "topics": [
                "4.1 Social behaviour in insects (Honey bee).",
                "4.2 Parental care in fishes."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Photo/Geotactic response in earthworm/pest (15), Specimen comment on parental care (15), Write-up on courtship/maternal/nesting behaviour (20), Practical records/charts/models (10), Viva-voce (10).",
          "topics": [
            "1. Study of the pattern of Behaviour (any one of the followings): a) Photo Tactile Response in Earthworm or Pest, b) Geotactic Response of Earthworm or Pest.",
            "2. Comment upon the given specimen with response to parental care — Ichthyophis, Hippocampus etc.",
            "3. Submit and write up on any one of the given topic: a) Courtship in Peacock /Pigeons, b) Study of nests and nesting behavior of the birds and social insects.",
            "4. Practical/Project report on chick embryo development.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "David McFarland, Animal Behaviour, Pitman Publishing Limited, London, UK.",
          "Manning, A. and Dawkins, M. S, An Introduction to Animal Behaviour, Cambridge University Press, UK.",
          "John Alcock, Animal Behaviour, Sinauer Associate Inc., USA.",
          "Paul W. Sherman and John Alcock, Exploring Animal Behaviour, Sinauer Associate Inc., Massachusetts, USA.",
          "Biological Rhythms: Vinod Kumar (2002) Narosa Publishing House, Delhi/ Springer-Verlag, Germany."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Endocrinology",
        "courseCode": "MIC-10",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Understand endocrine system and the basic properties of hormones.",
          "Appreciate the importance of endocrine system and the crucial role it plays along with the nervous system in maintenance of homeostasis.",
          "Know the of hormone action and its regulation.",
          "Know the regulation of physiological process by the endocrine system and its implication in diseases."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Overview of the Endocrine System (5 Lectures)",
              "topics": [
                "Overview of the endocrine system — Glands and their hormone."
              ]
            },
            {
              "title": "Unit 2: Hypothalamus (5 Lectures)",
              "topics": [
                "Hypothalamus: Structure and its functions."
              ]
            },
            {
              "title": "Unit 3: Pituitary (5 Lectures)",
              "topics": [
                "Pituitary: Structure, Hormones and their function."
              ]
            },
            {
              "title": "Unit 4: Peripheral Endocrine Glands (5 Lectures)",
              "topics": [
                "4.1 Peripheral Endocrine Glands: Histophysiology of Thyroid, Parathyroid and Adrenal.",
                "4.2 Gonads: Hormones and functions."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Display of mammalian endocrine organs (15), Permanent slides of endocrine glands (4x5=20), Working principles of ELISA/RIA (15), Practical/Project report (10), Viva-voce (10).",
          "topics": [
            "1. Display of gonads, thyroid, adrenal, pancreas in mammal through videos or virtual dissection.",
            "2. Study of the permanent slides of Pituitary, Adrenal, Ovary, Testes, Islets of Langerhan's, Thymus, Thyroid, Parathyroid.",
            "3. Working principles of ELISA/RIA.",
            "4. Practical/Project report on chick embryo development.",
            "5. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "J. Larry Jameson Leslie De Groot (2010). Endocrinology. VI Edition.",
          "David O. Norris. Vertebrate Endocrinology. V Edition, Elsevier Academic press.",
          "Franklin F. Bolander. Molecular Endocrinology. III Edition, Academic Press, USA.",
          "Online: https://www.endocrine.org/topics"
        ]
      }
    ]
  },
  "MDC": {
    "1st": [
      {
        "courseTitle": "Diversity of Non-Chordata",
        "courseCode": "MDC-1",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: Learn about the importance of systematics, taxonomy, and structural organization of non-chordates.",
          "CO-2: Critically analyse the organization, complexity and characteristic features of non chordates.",
          "CO-3: Recognize the life functions and the ecological roles of the animals belonging to different phyla."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Non-chordates (5 Lectures)",
              "topics": [
                "General characteristics and classification (up to order) of the following Phyla: Protozoa, Porifera, Cnidaria, Ctenophora, Platyhelminthes and Nemathelminthes, Annelida, Arthropoda, Mollusca, Echinodermata."
              ]
            },
            {
              "title": "Unit 2: Structure and life history of Protozoa & Porifera (4 Lectures)",
              "topics": [
                "(i) Protozoa - Paramecium.",
                "(ii) Porifera - Sycon."
              ]
            },
            {
              "title": "Unit 3: Structure and life history of Cnidaria, Platyhelminthes & Aschelminthes (5 Lectures)",
              "topics": [
                "(iii) Cnidaria - Obelia.",
                "(iv) Platyhelminthes - Fasciola.",
                "(v) Aschelminthes - Ascaris."
              ]
            },
            {
              "title": "Unit 4: Study of coelomates (6 Lectures)",
              "topics": [
                "(vi) Annelida - Pheretima.",
                "(vii) Arthropoda - Palaemon.",
                "(viii) Mollusca - Pila.",
                "(ix) Echinodermata - Asterias.",
                "(x) Hemichordata - Balanoglossus."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Study of whole mount of Euglena, Paramecium, Leishmania.",
            "2. Study of Sycon, Spongilla, T.S. of Sycon, L.S. of Sycon.",
            "3. Study of Obelia, Aurelia, Gorgonia.",
            "4. Study of adult Fasciola hepatica, Taenia solium and their life stages.",
            "5. Study of Pheretima, Hirudinaria.",
            "6. Study of T.S. through pharynx, gizzard, and typhlosolar intestine of earthworm.",
            "7. Study of Limulus, Palaemon, Apis.",
            "8. Mouth parts of Mosquito and Cockroach.",
            "9. Study of Pila, Unio.",
            "10. Study of Asterias."
          ]
        },
        "suggestedBooks": [
          "Ruppert and Barnes, R.D. (2006). Invertebrate Zoology, VIII Edition. Holt Saunders International Edition.",
          "Barnes, R.S.K., Calow, P., Olive, P.J.W., Golding, D.W. and Spicer, J.I. (2002). The Invertebrates: A New Synthesis, III Edition, Blackwell Science.",
          "Barrington, E.J.W. (1979). Invertebrate Structure and Functions. II Edition, E.L.B.S. and Nelson.",
          "Verma P S, Jordan E L. (2009). Invertebrate Zoology. S. Chand publishers.",
          "Brusca R C (2016). Invertebrates. Published by Sinauer Associates, an imprint of Oxford University Press.",
          "S. S. Lal, Practical Zoology Invertebrate."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Diversity of Chordates",
        "courseCode": "MDC-2",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO-1: To understand the General Characteristics and Classification of Hemichordata, Urochordata and Cephalochordata, the Larval forms of Protochordata and Retrogressive Metamorphosis in Urochordata.",
          "CO-2: To acquire knowledge about the General Characters and Classification of Agnatha, Pisces and Amphibia.",
          "CO-3: To understand the General Characteristics and Classification of Reptilia, Aves and Mammals, Biting Mechanism in Snakes, Flight Adaptations in Birds and Migration in Birds."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: General characteristics and classification (upto Order) (5 Lectures)",
              "topics": [
                "Cephalochordata, Urochordata, Cyclostomata, Pisces, Amphibia, Reptilia, Aves, Mammals."
              ]
            },
            {
              "title": "Unit 2: Protochordata (4 Lectures)",
              "topics": [
                "2. Cephalochordata: Amphioxus.",
                "3. Urochordata: Herdmania (including retrogressive metamorphosis)."
              ]
            },
            {
              "title": "Unit 3: Pisces and Reptilia (5 Lectures)",
              "topics": [
                "4. Pisces: Scoliodon.",
                "5. Reptilia: Biting and feeding mechanism in snakes."
              ]
            },
            {
              "title": "Unit 4: Aves and Mammals (6 Lectures)",
              "topics": [
                "6. Aves: Flight adaptations, Elementary idea of migration.",
                "7. Mammals: Characters, distribution and affinities of Prototheria & Metatheria."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Permanent slides (15), Museum specimen (15), Larval forms (10), Comments on display charts (10), Practical record/Chart/Model (10), Viva-voce (10).",
          "topics": [
            "1. Amphioxus: Section through pharyngeal, intestinal, and caudal regions.",
            "2. Herdmania: Whole mount, Spicules.",
            "3. Cyclostomata: Petromyzon, Myxine.",
            "4. Fish: Scoliodon, Torpedo, Chimaera, Labeo, Exocoetus, Echeneis, Hippocampus; Scales of fishes.",
            "5. Amphibia: Ichthyophis, Bufo, Hyla, Alytes, Salamandra, Axolotle larva.",
            "6. Reptilia: Chelone, Hemidactylus, Varanus, Vipera, Naja, Bungarus, Uromastix, Chamaeleon, Draco, Calotes, Heloderma; Key for Identification of poisonous and non-poisonous snakes.",
            "7. Aves: Types of beaks and claws, Study of pecten from fowl head and brain of fowl.",
            "8. Mammalia: Sorex, Bat (Insectivorous and Frugivorous), Funambulus, Loris, Herpestes, Erinaceous, Macropus, Echidna."
          ]
        },
        "suggestedBooks": [
          "Young, J. Z. (2004). The Life of Vertebrates. III Edition. Oxford university press.",
          "Pough H. Vertebrate life, VIII Edition, Pearson International.",
          "Darlington P.J. The Geographical Distribution of Animals, R.E. Krieger Pub Co.",
          "Hall B. K. and Hallgrimsson B. (2008). Strickberger's Evolution. IV Edition. Jones and Bartlett Publishers Inc.",
          "Classification from Young, J. Z. (2004) to be followed.",
          "S. S. Lal, Practical Zoology Vertebrates."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Physiology",
        "courseCode": "MDC-3",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Know the principles of normal biological function in human body.",
          "Outline basic human physiology and correlate with histological structures.",
          "Comprehend and analyse problem-based questions on physiological aspects.",
          "Recognize and explain how all physiological systems work in unison to maintain homeostasis in the body; and use of feedback loops to control the same.",
          "Learn an integrative approach to understand the interactions of various organ systems resulting in the complex overall functioning of the body."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20 hrs",
          "units": [
            {
              "title": "Unit 1: Digestive system (3 Lectures)",
              "topics": [
                "1.1. Structure and function of digestive system.",
                "1.2. Digestion and absorption of food."
              ]
            },
            {
              "title": "Unit 2: Neuromuscular Physiology (4 Lectures)",
              "topics": [
                "2.1. Structure of neuron and propagation of nerve impulse.",
                "2.2. Structure of skeletal muscle and mechanism of muscle contraction."
              ]
            },
            {
              "title": "Unit 3: Respiratory system (4 Lectures)",
              "topics": [
                "3.1. Structure of respiratory organs, pulmonary ventilation.",
                "3.2. Transport of gases in blood."
              ]
            },
            {
              "title": "Unit 4: Excretory system (2 Lectures)",
              "topics": [
                "4.1. Structure of excretory organs.",
                "4.2. Mechanism of urine formation."
              ]
            },
            {
              "title": "Unit 5: Heart (2 Lectures)",
              "topics": [
                "5.1. Structure and function of heart.",
                "5.2. Cardiac cycle."
              ]
            },
            {
              "title": "Unit 6: Endocrine glands and Reproduction (5 Lectures)",
              "topics": [
                "6.1. Structure and function of endocrine glands.",
                "6.2. Spermatogenesis and oogenesis."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "examPattern": "End Semester Practical Examination (Time: 3 hours, Full Marks: 70): Enumeration of RBC/WBC (10), ESR determination (10), Estimation of haemoglobin (10), Histological sections of mammalian organs (20), Practical Records/Charts/Models (10), Viva-voce (10).",
          "topics": [
            "1. Enumeration of red blood cells and white blood cells using haemocytometer.",
            "2. Determination of erythrocyte sedimentation rate.",
            "3. Estimation of haemoglobin.",
            "4. Examination of histological sections of mammalian oesophagus, stomach, duodenum, ileum, rectum, trachea, lung, Testis and Ovary.",
            "5. Practical Records/Charts/Models.",
            "6. Viva-voce."
          ]
        },
        "suggestedBooks": [
          "Tortora, G.J.& Grabowski, S (2006). Principles of Anatomy & Physiology, XI edition. John Wiley & Sons.",
          "Vander A, Sherman J, and Luciano D (2014). Vander's Human Physiology: The mechanism of Body Function. XIII Edition, McGraw Hills.",
          "Guyton, A.C & Hall, J.E. (2006). Textbook of Medical Physiology, XI Edition. Harcourt Asia PTE Ltd/W.B. Saunders Company.",
          "Online Tools: e portals like SWAYAM, http://nsdl.niscair.res.in"
        ]
      }
    ]
  },
  "INT": {
    "5th": [
      {
        "courseTitle": "Summer Internship / Apprenticeship",
        "courseCode": "INT-1",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Acquire practical exposure and field / laboratory skills in zoological research institutes, pharmaceutical companies, aquaculture / sericulture farms, diagnostic labs, or forest & wildlife reserves.",
          "CO2: Apply zoological scientific knowledge and laboratory techniques in professional industrial or ecological settings."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Internship Modules & Training",
              "topics": [
                "4-week practical industrial / institutional training in biological sciences, clinical diagnostics, wildlife management, sericulture, apiculture, or research laboratories.",
                "Submission of comprehensive Internship Project Report and evaluation through presentation and viva-voce."
              ]
            }
          ]
        }
      }
    ]
  },
  "RP": {
    "8th": [
      {
        "courseTitle": "Research Project / Dissertation",
        "courseCode": "RP-1",
        "credits": "12",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Undertake specialized research investigation in zoological sciences under supervision.",
          "CO2: Perform literature survey, formulate experimental design, collect and analyze biological data using modern biostatistical tools.",
          "CO3: Prepare dissertation thesis according to scientific writing standards and defend findings in a viva-voce examination."
        ],
        "theory": {
          "credits": "12",
          "units": [
            {
              "title": "Dissertation & Research Investigation",
              "topics": [
                "Selection of research topic in advanced zoology (Ecology, Molecular Biology, Immunology, Endocrinology, Entomology, Fisheries, Parasitology, Genetics, etc.).",
                "Execution of experimental or field investigation, data analysis, dissertation thesis preparation, and defense."
              ]
            }
          ]
        }
      }
    ]
  }
};
