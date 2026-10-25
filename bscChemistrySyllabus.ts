/**
 * @file bscChemistrySyllabus.ts
 * @description LNMU B.Sc. (Hons) Chemistry Syllabus under 4-Year CBCS & NEP 2020 Framework.
 * 
 * Provides structural definitions, Program Outcomes (POs), Program Specific Outcomes (PSOs),
 * and course breakdowns across Inorganic, Organic, and Physical Chemistry for:
 * - Major Courses (MJC)
 * - Minor Courses (MIC)
 * - Multidisciplinary Courses (MDC)
 */

// B.Sc. Chemistry Syllabus under 4-Year CBCS & NEP 2020 for Universities of Bihar
export const BSC_CHEMISTRY_SYLLABUS = {
  "regulations": {
    "programTitle": "Bachelor of Science Honours Degree B.Sc. (Hons) Chemistry",
    "duration": "4 Years (3+1 Years / 8 Semesters)",
    "academicSession": "2023-27 & onwards",
    "framework": "Choice Based Credit System (CBCS) & NEP 2020 (Curriculum and Credit Framework for Undergraduate Programme in Universities of Bihar)",
    "submittedBy": "Subject Expert Committee: Dr. Shailendra (Patna Univ), Prof. Himanshu Shekhar (VKSU Ara), Dr. Rabindra Singh (JPU Chapra), Prof. Kalpana Shahi (PPU Patna), Prof. B.B. Sharma (Magadh Univ), Sonu Ram Shankar (LNMU Darbhanga), Dr. Ashok Kumar Yadav (BNMU Madhepura), Dr. Vijay Kumar (BRABU Muzaffarpur), Dr. Rana Pratap Singh (TMBU Bhagalpur), Prof. Ramchandra Singh (JPU Chapra)",
    "programOutcomes": [
      "PO1. Disciplinary Knowledge: Demonstrate comprehensive knowledge of major concepts, theoretical principles, and experimental findings in Chemistry including Inorganic, Organic, Physical, Analytical, and Quantum Chemistry.",
      "PO2. Problem Solving & Analytical Thinking: Formulate and solve complex chemical problems using mathematical, physical, and spectroscopic tools with logical reasoning.",
      "PO3. Practical & Laboratory Skills: Perform qualitative and quantitative chemical analysis, standard synthesis, characterization of inorganic and organic compounds, and operate modern analytical instruments.",
      "PO4. Research Aptitude & Scientific Literacy: Design experiments, analyze experimental data, perform literature survey, and conduct research under modern chemical frameworks.",
      "PO5. Environmental Consciousness & Green Chemistry: Understand chemical sustainability, eco-friendly green synthetic routes, pollution monitoring, and waste management."
    ],
    "programSpecificOutcomes": [
      "PSO1. In-depth understanding of atomic structure, chemical bonding, periodicity, coordination compounds, and organometallics.",
      "PSO2. Mastery over organic reaction mechanisms, stereochemistry, oxygen/nitrogen functional groups, heterocyclic chemistry, biomolecules, and natural products.",
      "PSO3. Thorough grasp of classical and statistical thermodynamics, quantum chemistry, chemical kinetics, phase equilibria, electrochemistry, and photochemistry.",
      "PSO4. Expertise in analytical techniques including UV-Vis, FTIR, NMR, ESR spectroscopy, chromatography, thermal methods, flame photometry, and complexometric titrations.",
      "PSO5. Hands-on laboratory competency in organic/inorganic synthesis, separation, volumetric and gravimetric analysis, and qualitative radical analysis."
    ]
  },
  "examinationScheme": {
    "ciaMarks": 30,
    "eseMarks": 70,
    "totalMarks": 100,
    "pattern": {
      "partA": "Compulsory 10 objective / multiple choice questions (10 x 2 = 20 Marks)",
      "partB": "Short answer type - 4 questions to be answered out of 6 (4 x 5 = 20 Marks)",
      "partC": "Long answer type - 3 questions to be answered out of 5 (3 x 10 = 30 Marks)"
    }
  },
  "MJC": {
    "1st": [
      {
        "courseTitle": "Inorganic Chemistry I: Atomic Structure & Chemical Bonding & Fundamentals of Organic Chemistry",
        "courseCode": "MJC-1",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Explain the atomic model, wave mechanics, quantum numbers, and electron filling rules.",
          "CO2: Describe principles of ionic, covalent, metallic bonding, VSEPR theory, MO diagrams, and weak chemical forces.",
          "CO3: Master electronic displacement effects, reactive intermediates, aromaticity, and strength of acids/bases.",
          "CO4: Understand stereochemistry including optical/geometrical isomerism, conformations, and CIP rules.",
          "CO5: Learn synthesis, properties, and reaction mechanisms of aliphatic hydrocarbons (alkanes, alkenes, alkynes)."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Atomic Structure (10 Lectures)",
              "topics": [
                "Bohr's Theory, its limitations and atomic spectrum of hydrogen atom.",
                "Wave mechanics: de Broglie equation, Heisenberg's Uncertainty Principle and its significance, Schrödinger's wave equation, significance of wave function.",
                "Quantum Numbers and their significance. Normalized and orthogonal wave functions. Sign of wave functions.",
                "Radial and angular wave functions for hydrogen atom. Radial and angular distribution curves. Shapes of s, p, d and f orbitals. Contour boundary and probability diagrams.",
                "Pauli's Exclusion Principle, Hund's Rule of maximum multiplicity, Aufbau's principle and its limitations, Variations of orbital energy with atomic number."
              ]
            },
            {
              "title": "Unit 2: Chemical Bonding (10 Lectures)",
              "topics": [
                "(i) Ionic Bond: General characteristics, types of ions size effects, radius ratio rule and its limitations. Packing of ions in crystals. Born-Lande equation with derivation and importance of Kapustinskii expression for lattice energy. Madelung constant, Born-Haber cycle and its applications, Solvation energy.",
                "(ii) Covalent Bond: Lewis structure, Valence Bond Theory (Heitler-London approach). Energetics of hybridization, equivalent and non-equivalent hybrid orbitals. Bent's rule. Resonance and resonance energy, Molecular orbital theory.",
                "Molecular orbital diagrams of diatomic and simple polyatomic molecules N2, O2, C2, B2, F2 & CO, NO and their ions; hydrogen chloride, beryllium fluoride, carbon dioxide (idea of s-p mixing and orbital interaction to be given). Formal charge.",
                "Valence shell electron pair repulsion theory (VSEPR), shapes of simple molecules and ions containing lone pairs and bond pairs of electrons, multiple bonding (sigma and pi bond approach) and bond lengths.",
                "Covalent character in ionic compounds, polarizing power and polarizability. Fajan's rule and consequences of polarization. Ionic character in covalent compounds: Bond moment, dipole moment and electronegativity difference.",
                "(iii) Metallic Bond: Qualitative idea of valence bond and band theories. Semiconductors and insulators, defects in solids.",
                "(iv) Weak Chemical Forces: van der Waals forces, ion-dipole forces, dipole-dipole interactions, induced dipole interactions, Instantaneous dipole-induced dipole interactions. Repulsive forces, Hydrogen Bonding (theories of hydrogen bonding, valence bond treatment), effects on melting/boiling points and solubility."
              ]
            },
            {
              "title": "Unit 3: Fundamentals of Organic Chemistry (5 Lectures)",
              "topics": [
                "Physical Effects, Electronic Displacements: Inductive Effect, Electromeric Effect, Resonance and Hyperconjugation.",
                "Cleavage of Bonds: Homolysis and Heterolysis.",
                "Structure, shape and reactivity of organic molecules, Nucleophiles and electrophiles. Reactive Intermediates: Carbocations, Carbanions and free radicals.",
                "Strength of organic acids and bases: Comparative study with emphasis on factors affecting pK values. Aromaticity: Benzenoids and Hückel's rule."
              ]
            },
            {
              "title": "Unit 4: Stereochemistry (5 Lectures)",
              "topics": [
                "Conformations with respect to ethane, butane and cyclohexane. Interconversion of Wedge Formula, Newmann, Sawhorse and Fischer representations.",
                "Concept of chirality (upto two carbon atoms). Configuration: Geometrical and Optical isomerism; Enantiomerism, Diastereomerism and Meso compounds.",
                "Threo and erythro; D and L; cis-trans nomenclature; CIP Rules: R/S (for upto 2 chiral carbon atoms) and E/Z Nomenclature (for upto two C=C systems)."
              ]
            },
            {
              "title": "Unit 5: Aliphatic Hydrocarbons (10 Lectures)",
              "topics": [
                "Alkanes (Upto 5 Carbons): Preparation (Catalytic hydrogenation, Wurtz reaction, Kolbe's synthesis, Grignard reagent); Reactions (Free radical Substitution: Halogenation).",
                "Alkenes (Upto 5 Carbons): Preparation (Dehydration of alcohols, dehydrohalogenation of alkyl halides - Saytzeff's rule; partial catalytic hydrogenation for cis and Birch reduction for trans); Reactions (cis-addition with alk. KMnO4, trans-addition with bromine, addition of HX - Markownikoff's and anti-Markownikoff's rule, hydration, ozonolysis, oxymercuration-demercuration, hydroboration-oxidation).",
                "Alkynes (Upto 5 Carbons): Preparation (Acetylene from CaC2, dehalogenation of tetrahalides, dehydrohalogenation of vicinal dihalides); Reactions (Formation of metal acetylides, addition of Br2, alk. KMnO4 oxidation, ozonolysis)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "Inorganic Chemistry Practical: (a) Acidimetry and Alkalimetry, (b) Preparation and dilution of standard solutions, (c) Permanganatometry / dichromatry, (d) Iodometry / iodimetry.",
            "Organic Chemistry Practical: Detection of elements (N, S, Halogens), separation and purification of Organic Compounds, Hydrolysis of ester."
          ]
        },
        "suggestedBooks": [
          "Lee, J.D. Concise Inorganic Chemistry, 5th Ed., Blackwell Science / Wiley India.",
          "Cotton, F.A., & Wilkinson, G. Advanced Inorganic Chemistry, John Wiley & Sons.",
          "Huheey, J.E., Keiter, E.A., & Keiter, R.L. Inorganic Chemistry: Principles of Structure and Reactivity, Pearson.",
          "Morrison, R.T., & Boyd, R.N. Organic Chemistry, Pearson Education.",
          "Solomons, T.W.G., & Fryhle, C.B. Organic Chemistry, John Wiley & Sons.",
          "Kalsi, P.S. Stereochemistry - Conformation and Mechanism, New Age International.",
          "Vogel, A.I. Quantitative Chemical Analysis / Practical Organic Chemistry, Pearson / Longman."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Physical Chemistry I: States of Matter & Ionic Equilibrium",
        "courseCode": "MJC-2",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand kinetic molecular model of gases, Maxwell velocity distribution, and real gas equations of state.",
          "CO2: Learn structural properties of liquids, surface tension, viscosity, and cleansing action of detergents.",
          "CO3: Explain solid state crystallography, crystal systems, Miller indices, and X-ray diffraction methods (Bragg's law, NaCl/CsCl/KCl).",
          "CO4: Grasp ionic equilibria, pH scale, buffer solutions, Henderson equation, and solubility product principle."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Gaseous State (12 Lectures)",
              "topics": [
                "Kinetic molecular model of a gas: postulates and concept of an Ideal gas, Derivation of the kinetic gas equation and gas laws.",
                "Maxwell's Distribution of Molecular velocities: Most Probable Velocity, Average (Mean) Velocity, Root Mean Square (RMS) Velocity, Average kinetic energy; Law of equipartition of energy, degrees of freedom.",
                "Viscosity of gases, coefficient of viscosity and dependence on temperature and pressure; Collision frequency, Collision diameter (σ) and Mean free path (λ).",
                "Behaviour of real gases: Deviations from ideal gas behavior, compressibility factor Z; Van der Waals equation of state, derivation and applications, Virial coefficients, Boyle temperature; Critical constants and van der Waals constants, Law of corresponding states."
              ]
            },
            {
              "title": "Unit 2: Liquid State (8 Lectures)",
              "topics": [
                "Qualitative treatment of the structure of the liquid state; physical properties of liquids: vapour pressure, surface tension, and coefficient of viscosity.",
                "Methods of determination of surface tension and viscosity; Effect of addition of solutes; Explanation of cleansing action of detergents.",
                "Temperature variation of viscosity of liquids and comparison with gases."
              ]
            },
            {
              "title": "Unit 3: Solid State (8 Lectures)",
              "topics": [
                "Nature of the solid state, law of constancy of interfacial angles, law of rational indices, Miller indices, elementary symmetry elements and operations.",
                "Seven crystal systems and fourteen Bravais lattices.",
                "X-ray diffraction, Bragg's law, rotating crystal method and powder pattern method; Analysis of powder diffraction patterns of NaCl, CsCl and KCl."
              ]
            },
            {
              "title": "Unit 4: Ionic Equilibria (12 Lectures)",
              "topics": [
                "Strong, moderate and weak electrolytes, degree of ionization, ionization constant and ionic product of water; Dissociation constants of mono- and diprotic acids; pH and pOH scale, common ion effect.",
                "Salt hydrolysis: calculation of hydrolysis constant, degree of hydrolysis and pH for different types of salts.",
                "Buffer solutions: derivation of Henderson equation and its applications; Solubility product of sparingly soluble salts and applications.",
                "Qualitative treatment of acid-base titration curves; Theory of acid-base indicators, selection of indicators and limitations."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "Surface tension measurements using Stalagmometer: Determination of surface tension of aqueous solutions by (a) drop number, (b) drop weight method.",
            "Viscosity measurement using Ostwald viscometer: (a) Determination of coefficient of viscosity of unknown aqueous solution, (b) Variation of viscosity with concentration of sugar solutions.",
            "Molecular weight of a volatile compound: Determination of molecular weight using Victor Meyer's method.",
            "pH-metry: (a) Effect of addition of HCl/NaOH on pH of acetic acid/sodium acetate buffer, (b) Preparation of buffer solutions of specified pH, (c) pH-metric titration of strong acid-strong base and weak acid-strong base."
          ]
        },
        "suggestedBooks": [
          "Atkins, P.W., & de Paula, J. Physical Chemistry, Oxford University Press.",
          "Castellan, G.W. Physical Chemistry, Narosa Publishing House.",
          "Kapoor, K.L. A Textbook of Physical Chemistry (Vol 1), McGraw Hill Education.",
          "Puri, B.R., Sharma, L.R., & Pathania, M.S. Principles of Physical Chemistry, Vishal Publishing.",
          "Khosla, B.D., Garg, V.C., & Gulati, A. Senior Practical Physical Chemistry, R. Chand & Co."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Organic Chemistry: Cyclic Hydrocarbons and their Halogen Derivatives",
        "courseCode": "MJC-3",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand generation, structure, stability and reactions of reactive intermediates (carbenes, nitrenes, benzynes).",
          "CO2: Grasp conformation of cyclohexanes, Baeyer strain theory, aromaticity, Huckel rule, and electrophilic aromatic substitution.",
          "CO3: Master substitution and elimination mechanisms (SN1, SN2, SNi, E1, E2, E1CB) of halogenated alkanes.",
          "CO4: Learn preparation, properties, ArSN1, ArSN2, and benzyne mechanisms of halogen derivatives of arenes."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Reaction Intermediates (12 Lectures)",
              "topics": [
                "Carbenes: Generation, structure (singlet and triplet), stability and chemical reactions.",
                "Nitrenes: Generation, structure, stability and characteristic reactions.",
                "Benzynes: Generation, structure, stability and reactions."
              ]
            },
            {
              "title": "Unit 2: Chemistry of Cyclic Hydrocarbons (12 Lectures)",
              "topics": [
                "Nomenclature of monocyclic and bicyclic compounds, Baeyer's strain theory.",
                "Conformation of cyclohexane: relative stability of chair, boat and twist boat forms with energy level diagrams; relative stability of mono- and disubstituted cyclohexanes.",
                "Aromaticity and Hückel rules with reference to benzenoids, cyclocarbocations, and cyclocarbanions.",
                "Mechanism of electrophilic aromatic substitution in benzene: halogenation, nitration, sulphonation, Friedel-Crafts alkylation and acylation, energy profile diagrams.",
                "Reactivity of mono-substituted benzene, directive influence and activating/deactivating effects of functional groups."
              ]
            },
            {
              "title": "Unit 3: Chemistry of Halogen Derivatives of Alkanes (12 Lectures)",
              "topics": [
                "General methods of preparation, physical and chemical properties and uses of mono- and dihalo derivatives of alkanes.",
                "Nucleophilic substitution mechanisms: SN1, SN2, and SNi mechanisms, kinetics, stereochemical outcomes, and factors affecting rates.",
                "Elimination reaction mechanisms: E1, E2, and E1CB mechanisms, Saytzeff and Hofmann orientations, competition between substitution and elimination."
              ]
            },
            {
              "title": "Unit 4: Halogen Derivatives of Arenes (12 Lectures)",
              "topics": [
                "General methods of preparation, physical properties and synthetic uses of halogen derivatives of arenes.",
                "Nucleophilic aromatic substitution: Addition-elimination mechanism (ArSN2) and elimination-addition mechanism (Benzyne mechanism).",
                "Unimolecular nucleophilic aromatic substitution (ArSN1) via diazonium salts."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Mukherjee, S.M., & Singh, S.P. Reaction Mechanism in Organic Chemistry, Trinity Press.",
          "Finar, I.L. Organic Chemistry (Vol. 1), Pearson Education.",
          "Morrison, R.T., & Boyd, R.N. Organic Chemistry, Prentice Hall.",
          "Solomons, T.W.G. Organic Chemistry, John Wiley & Sons.",
          "March, J. Advanced Organic Chemistry, Wiley-Interscience.",
          "Sykes, P. A Guidebook to Mechanism in Organic Chemistry, Pearson Education."
        ]
      },
      {
        "courseTitle": "Physical Chemistry: Chemical Thermodynamics and its Applications",
        "courseCode": "MJC-4",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand thermodynamic terminology, First Law, internal energy, enthalpy, and Joule-Thomson effect.",
          "CO2: Apply Hess's Law, standard enthalpies, bond energies, and Kirchhoff's equations in thermochemistry.",
          "CO3: Master Second and Third Laws of thermodynamics, Carnot cycle, entropy, Gibbs/Helmholtz free energy, and Maxwell relations.",
          "CO4: Formulate chemical potential and Gibbs-Duhem equation in systems of variable composition."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Thermodynamics-I (12 Lectures)",
              "topics": [
                "System, surroundings, types of systems, intensive and extensive properties, state and path functions, thermodynamic processes, concept of heat and work.",
                "First law of Thermodynamics: Statements, internal energy (U) and enthalpy (H), Heat capacities (Cv and Cp) and their relationship.",
                "Joule's law, Joule-Thomson coefficient (μJT) and inversion temperature.",
                "Calculation of w, q, dU & dH for expansion of ideal gases under isothermal and adiabatic conditions (reversible and irreversible processes)."
              ]
            },
            {
              "title": "Unit 2: Thermochemistry (12 Lectures)",
              "topics": [
                "Standard state, standard enthalpy of formation, Hess's law of constant heat summation and its applications.",
                "Enthalpy of combustion, enthalpy of neutralization, enthalpy of solution and dilution.",
                "Bond dissociation energy and calculation from thermo-chemical data; Temperature dependence of enthalpy: Kirchhoff's equation."
              ]
            },
            {
              "title": "Unit 3: Thermodynamics-II (12 Lectures)",
              "topics": [
                "Second law of thermodynamics: need of the law, Kelvin-Planck and Clausius statements, Carnot theorem, Carnot cycle and efficiency.",
                "Concept of entropy: entropy as state function of V&T, P&T; Entropy changes in ideal gases, reversible/irreversible processes, and mixing of ideal gases.",
                "Gibbs free energy (G) and Helmholtz free energy (A), criteria of spontaneity; Variation of G and A with P, V and T.",
                "Maxwell's relations, Thermodynamic equations of state; Nernst heat theorem, Third law of thermodynamics, calculation of absolute entropy, residual entropy."
              ]
            },
            {
              "title": "Unit 4: Systems of Variable Composition (12 Lectures)",
              "topics": [
                "Partial molar quantities, chemical potential (μ), physical significance.",
                "Dependence of chemical potential with temperature and pressure.",
                "Chemical potential of a gas in an ideal gas mixture; Gibbs-Duhem equation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "1. Determination of water equivalent of calorimeter.",
            "2. Determination of enthalpy of neutralization of hydrochloric acid with sodium hydroxide.",
            "3. Determination of enthalpy of ionization of ethanoic acid.",
            "4. Determination of the basicity of a polybasic acid against standard sodium hydroxide solution.",
            "5. Determination of heat of displacement of Cu by Zn from Cu2+ salt solution.",
            "6. Determination of enthalpy of hydration of copper sulphate.",
            "7. Determination of solubility of benzoic acid in water and ΔH for the process.",
            "8. Determination of heat capacity of calorimeter and integral enthalpy of solution of salts."
          ]
        },
        "suggestedBooks": [
          "Atkins, P.W., & de Paula, J. Physical Chemistry, Oxford University Press.",
          "Castellan, G.W. Physical Chemistry, Narosa.",
          "McQuarrie, D.A., & Simon, J.D. Molecular Thermodynamics, Viva Books.",
          "Khosla, B.D., Garg, V.C., & Gulati, A. Senior Practical Physical Chemistry, R. Chand & Co."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Inorganic Chemistry: s-, p-, d- and f-block elements",
        "courseCode": "MJC-5",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand periodic trends, Slater rules, electronegativity scales, inert pair effect, and catenation.",
          "CO2: Master structures, bonding, and synthesis of p-block compounds (boranes, silicates, silicones, oxyacids, interhalogens).",
          "CO3: Understand noble gas compounds and their geometries using VSEPR theory.",
          "CO4: Comprehend transition metal characteristics, oxidation states, and key coordination/peroxo compounds of Cr, Mn, Fe, Co.",
          "CO5: Explain lanthanide and actinide chemistry, lanthanide contraction, and spent nuclear fuel separation."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "45 hrs (45 Lectures)",
          "units": [
            {
              "title": "Unit 1: Periodic Table and Periodicity of Elements (10 Lectures)",
              "topics": [
                "s-, p-, d- and f-block elements, long form of periodic table; Shielding/screening effect, Slater's rules, effective nuclear charge.",
                "Atomic radii (covalent, metallic, van der Waals), ionization enthalpy and successive ionization enthalpies.",
                "Electron gain enthalpy; Electronegativity: Pauling's, Mulliken's, and Allred-Rochow's scales, variations with bond order and partial charge.",
                "General electronic configurations of s- and p-block elements, inert pair effect, relative stability of oxidation states, diagonal relationship, anomalous behaviour of first member, allotropy, catenation."
              ]
            },
            {
              "title": "Unit 2: Compounds of p-block elements (10 Lectures)",
              "topics": [
                "Boric acid, borates, borazines, borohydrides; Calcium carbide, silicon carbide, aluminium carbide.",
                "Silicates, silanes, siloxanes, silicon halides, silicones.",
                "Haber process for NH3, oxides and oxyacids of nitrogen, phosphorus, and sulphur; Peroxy acids; Inter-halogen compounds, polyhalides, pseudohalides."
              ]
            },
            {
              "title": "Unit 3: Chemistry of Noble Gases (5 Lectures)",
              "topics": [
                "Occurrence and isolation, rationalization of chemical inertness of noble gases.",
                "Bonding, structure, and shapes of XeF2, XeF4, XeF6, XeOF4, and XeO3 using VSEPR theory.",
                "Clathrate compounds of noble gases."
              ]
            },
            {
              "title": "Unit 4: Chemistry of d-block Elements (10 Lectures)",
              "topics": [
                "General electronic configuration, group trends, variable oxidation states, magnetic and catalytic properties, colour, complex forming ability.",
                "Comparison of 1st, 2nd, and 3rd transition series.",
                "Chemistry of Cr, Mn, Fe, and Co in various oxidation states: peroxo compounds of Cr, K2Cr2O7, KMnO4, K4[Fe(CN)6], K3[Fe(CN)6], sodium nitroprusside, sodium cobaltinitrite."
              ]
            },
            {
              "title": "Unit 5: Chemistry of f-block Elements (10 Lectures)",
              "topics": [
                "Electronic configurations of lanthanides (4f) and actinides (5f), positions in the periodic table.",
                "Lanthanide contraction: causes and consequences on ionic radii and chemical behavior.",
                "Complexation tendencies, occurrence, isolation, and extraction of lanthanides.",
                "General chemistry of actinides, comparison with lanthanides, separation of Np and Pu from spent nuclear fuel."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "1. Identification of known cations (basic radicals) and anions (acid radicals) from supplied salt.",
            "2. Identification of cations and anions from unknown salt.",
            "3. Semi-micro qualitative analysis of binary mixture of inorganic salts containing four radicals (interfering anions included)."
          ]
        },
        "suggestedBooks": [
          "Lee, J.D. Concise Inorganic Chemistry, 5th Ed., Wiley India.",
          "Huheey, J.E., Keiter, E.A., & Keiter, R.L. Inorganic Chemistry, Pearson Education.",
          "Miessler, G., & Tarr, D.A. Inorganic Chemistry, Pearson.",
          "Puri, B.R., Sharma, L.R., & Kalia, K.C. Principles of Inorganic Chemistry, Vishal Publishing.",
          "Vogel, A.I. Quantitative Chemical Analysis, Pearson Education."
        ]
      },
      {
        "courseTitle": "Organic Chemistry: Compounds with Oxygen Containing Functional Groups",
        "courseCode": "MJC-6",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Synthesize and manipulate alcohols, phenols, ethers, and epoxides with named rearrangements (Pinacol, Fries, Claisen).",
          "CO2: Understand nucleophilic additions, condensations (Aldol, Benzoin, Wittig, Perkin), and rearrangements in carbonyls.",
          "CO3: Master monocarboxylic/dicarboxylic acids, esters, amides, and active methylene syntheses.",
          "CO4: Learn structural elucidation, configurations, mutarotation, and synthesis of mono-, di-, and polysaccharides."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Alcohols, Phenols, Ethers and Epoxides (20 Lectures)",
              "topics": [
                "Alcohols: Preparation of 1°, 2°, 3° alcohols; Reactions: Lucas test, esterification, oxidation (PCC, KMnO4, CrO3, Oppenauer); Diols: Pinacol-Pinacolone rearrangement; Glycerol.",
                "Phenols: Preparation via cumene hydroperoxide and diazonium salts; Electrophilic substitutions; Fries & Claisen rearrangements, Kolbe-Schmidt, Reimer-Tiemann, Lederer-Manasse, Gattermann-Koch, Houben-Hoesch, Schotten-Baumann reactions.",
                "Ethers & Epoxides: Preparation, HI cleavage; Acid- and base-catalyzed ring opening of epoxides, Grignard/organolithium reactions with oxiranes; Crown ethers."
              ]
            },
            {
              "title": "Unit 2: Aldehydes and Ketones (10 Lectures)",
              "topics": [
                "Nucleophilic addition to carbonyls: HCN, NaHSO3, Grignard reagents, ammonia derivatives and mechanisms.",
                "Named Condensations & Reactions: Aldol, Benzoin, Knoevenagel, Claisen-Schmidt, Perkin, Cannizzaro, Wittig, Beckmann rearrangement, Benzil-Benzilic acid rearrangement, Haloform reaction, Baeyer-Villiger oxidation.",
                "Reductions & Oxidations: Clemmensen, Wolff-Kishner, LiAlH4, NaBH4, MPV reduction, PDC oxidation; Michael addition to α,β-unsaturated carbonyls.",
                "Active Methylene Compounds: Keto-enol tautomerism; Synthesis and applications of diethyl malonate and ethyl acetoacetate."
              ]
            },
            {
              "title": "Unit 3: Carboxylic Acids and their Derivatives (9 Lectures)",
              "topics": [
                "Monocarboxylic acids: Preparation, acidity, Hell-Volhard-Zelinsky reaction.",
                "Dicarboxylic, hydroxy, and unsaturated acids: Succinic, phthalic, lactic, malic, tartaric, citric, maleic, fumaric acids.",
                "Acid derivatives: Chlorides, anhydrides, esters, amides; Acid/base ester hydrolysis mechanisms; Claisen, Dieckmann, Reformatsky reactions; Hofmann bromamide and Curtius rearrangements."
              ]
            },
            {
              "title": "Unit 4: Carbohydrates (9 Lectures)",
              "topics": [
                "Classification of carbohydrates, Open chain and cyclic structures of D-Glucose and D-Fructose, Determination of ring size.",
                "Absolute configuration, Mutarotation, Epimerization, Ascending (Kiliani-Fischer) and Descending (Ruff/Wohl) series of aldoses.",
                "Structure and linkage of disaccharides (sucrose, maltose, lactose, cellobiose) and polysaccharides (starch and cellulose)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "(a) Acetylation of phenols (β-naphthol, vanillin, salicylic acid) by conventional / green method.",
            "(b) Benzoylation of amines (aniline, toluidines, anisidines) and phenols by Schotten-Baumann reaction.",
            "(c) Preparation of Oximes and 2,4-Dinitrophenylhydrazones of aldehydes and ketones.",
            "(d) Oxidation of ethanol and isopropanol (Iodoform test).",
            "(e) Preparation of semicarbazone of acetone, ethyl methyl ketone, cyclohexanone, benzaldehyde.",
            "(f) Aldol condensation (dibenzalacetone synthesis).",
            "(g) S-Benzylisothiouronium chloride synthesis.",
            "(h) Reduction of nitrobenzaldehydes with NaBH4.",
            "(i) Bromination of Phenol.",
            "(j) Hydrolysis of amides and esters."
          ]
        },
        "suggestedBooks": [
          "Clayden, J., Greeves, N., & Warren, S. Organic Chemistry, Oxford University Press.",
          "Sykes, P. A Guidebook to Mechanism in Organic Chemistry, Pearson.",
          "Bahl, A., & Bahl, B.S. Advanced Organic Chemistry, S. Chand.",
          "Vogel, A.I. Elementary Practical Organic Chemistry, Pearson Education."
        ]
      },
      {
        "courseTitle": "Physical Chemistry: Phase Equilibria, Conductance and Electrochemical Cells",
        "courseCode": "MJC-7",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Apply Gibbs Phase Rule to one-component (water, sulphur) and two-component systems (Pb-Ag, FeCl3-H2O).",
          "CO2: Apply Nernst Distribution Law and understand solvent extraction.",
          "CO3: Explain conductance, Kohlrausch Law, transport numbers (Hittorf/Moving boundary), and conductometric titrations.",
          "CO4: Master electrochemical cells, Nernst equation, liquid junction potentials, concentration cells, and potentiometric titrations."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Phase Equilibria (12 Lectures)",
              "topics": [
                "Phases, components, and degrees of freedom; Gibbs Phase Rule and thermodynamic derivation; Clausius-Clapeyron equation and its applications.",
                "One-component systems: Phase diagrams of water and sulphur systems.",
                "Two-component systems: Simple eutectics (Lead-Silver), congruent and incongruent melting points (FeCl3-water and Na-K systems).",
                "Nernst Distribution Law: Thermodynamic derivation, limitations, association/dissociation of solutes, application in solvent extraction."
              ]
            },
            {
              "title": "Unit 2: Conductance (12 Lectures)",
              "topics": [
                "Specific, equivalent, and molar conductance; Variation with dilution for strong and weak electrolytes; Kohlrausch law of independent migration of ions.",
                "Transference numbers and experimental determination by Hittorf and Moving Boundary methods; Ionic mobility.",
                "Applications: Degree of ionization of weak electrolytes, solubility product of sparingly soluble salts, ionic product of water, conductometric titrations."
              ]
            },
            {
              "title": "Unit 3: Electrochemical Cells (12 Lectures)",
              "topics": [
                "Reversible and irreversible cells, Galvanic cells, Standard Hydrogen Electrode (SHE), Calomel electrode, Standard electrode potential and Electrochemical series.",
                "Nernst equation for electrode potential and EMF of cells; Chemical cells and Concentration cells (with and without transference).",
                "Liquid junction potential, salt bridge mechanism."
              ]
            },
            {
              "title": "Unit 4: Applications of EMF Measurements (12 Lectures)",
              "topics": [
                "Thermodynamics of cell reactions: Determination of ΔG, ΔH, ΔS, and equilibrium constant (K) from EMF data.",
                "Potentiometric determination of solubility product, valency of ions, and pH using hydrogen, quinhydrone, and glass electrodes.",
                "Potentiometric titrations (acid-base and redox)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Atkins, P.W., & de Paula, J. Physical Chemistry, Oxford University Press.",
          "Puri, B.R., Sharma, L.R., & Pathania, M.S. Principles of Physical Chemistry, Vishal Publishing.",
          "Kapoor, K.L. A Textbook of Physical Chemistry, Vol 1 & 3, McGraw Hill.",
          "Silbey, R.J., Alberty, R.A., & Bawendi, M.G. Physical Chemistry, Wiley India."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Inorganic Chemistry: Coordination Chemistry",
        "courseCode": "MJC-8",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand nomenclature, isomerism, Werner's theory, and EAN rule in coordination compounds.",
          "CO2: Apply Valence Bond Theory (VBT) and Crystal Field Theory (CFT) to predict geometries, CFSE, and magnetic properties.",
          "CO3: Explain Jahn-Teller distortion, charge transfer spectra (LMCT/MLCT), and nephelauxetic series.",
          "CO4: Determine magnetic moments (spin-only and orbital contribution) and perform complexometric EDTA titrations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Introduction to Coordination Compounds (12 Lectures)",
              "topics": [
                "Double salts vs. coordination compounds; Coordination number, ligands and classification, chelates and chelate effect.",
                "Werner's coordination theory, Effective Atomic Number (EAN) rule, IUPAC nomenclature of coordination complexes.",
                "Isomerism in coordination compounds: Structural isomerism (ionization, hydrate, linkage, coordination) and Stereoisomerism (geometrical and optical)."
              ]
            },
            {
              "title": "Unit 2: Valence Bond Theory (12 Lectures)",
              "topics": [
                "Valence Bond Theory applied to octahedral, tetrahedral, and square planar complexes of 3d metals (Cr, Fe, Co, Ni, Cu, Zn).",
                "Inner and outer orbital complexes, magnetic behavior.",
                "Limitations of Valence Bond Theory."
              ]
            },
            {
              "title": "Unit 3: Crystal Field Theory (12 Lectures)",
              "topics": [
                "Crystal field splitting of d-orbitals in octahedral, tetrahedral, tetragonal, and square planar geometries.",
                "High-spin and low-spin complexes, Spectrochemical series, Crystal Field Stabilization Energy (CFSE) calculations.",
                "Factors affecting 10 Dq, variation of ionic radii across transition series, normal and inverse spinel structures.",
                "Jahn-Teller theorem and tetragonal distortions; Charge transfer spectra (LMCT and MLCT), hydration energies and lattice energies."
              ]
            },
            {
              "title": "Unit 4: Magnetic Properties of Transition Metal Complexes (12 Lectures)",
              "topics": [
                "Diamagnetism, paramagnetism, ferromagnetism, and antiferromagnetism; Gouy method for magnetic susceptibility.",
                "L-S coupling, spin-only formula (μs) and effective magnetic moment (μeff); Quenching of orbital angular momentum.",
                "Application of magnetic moment data in structural elucidation of 3d metal complexes."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "1. Preparation of coordination complexes: (a) Potash alum, (b) Potassium tris(oxalato)ferrate(III), (c) Potassium tris(oxalato)chromate(III), (d) Hexamminenickel(II) chloride, (e) Tetraamminecopper(II) sulphate, (f) Sodium nitroprusside.",
            "2. Colorimetric estimations: (a) Copper(II) as tetraammine complex, (b) Phosphate ion in water/soil sample.",
            "3. Complexometric EDTA titrations: (a) Estimation of Ca2+ and Mg2+, (b) Total hardness of water."
          ]
        },
        "suggestedBooks": [
          "Miessler, G.L., Fischer, P.J., & Tarr, D.A. Inorganic Chemistry, Pearson.",
          "Huheey, J.E. Inorganic Chemistry: Principles of Structure and Reactivity, Harper & Row.",
          "Malik, W.U., Tuli, G.D., & Madan, R.D. Selected Topics in Inorganic Chemistry, S. Chand.",
          "Vogel, A.I. Quantitative Inorganic Analysis, Longman."
        ]
      },
      {
        "courseTitle": "Organic Chemistry: Polynuclear Hydrocarbons, Heterocyclic Compounds, Alkaloids and Terpenoids",
        "courseCode": "MJC-9",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand nomenclature, constitution, and reactions of naphthalene, anthracene, and phenanthrene.",
          "CO2: Master chemistry of nitro compounds, amines, nitriles, isonitriles, and diazonium coupling reactions.",
          "CO3: Synthesize and predict reactivity of 5- and 6-membered heterocycles (pyrrole, furan, thiophene, pyridine, quinoline, isoquinoline).",
          "CO4: Elucidate structures of natural products: alkaloids (nicotine, piperine) and terpenoids (citral, α-terpineol) using isoprene rule."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Polynuclear Hydrocarbons (12 Lectures)",
              "topics": [
                "Nomenclature and structure of polynuclear aromatic hydrocarbons.",
                "Naphthalene: Haworth synthesis, electrophilic substitution, oxidation, and reduction.",
                "Anthracene and Phenanthrene: Synthesis, chemical reactions, structure elucidation, and carcinogenic properties."
              ]
            },
            {
              "title": "Unit 2: Nitrogen Containing Compounds (15 Lectures)",
              "topics": [
                "Nitro compounds: Reduction under acidic, alkaline, and neutral conditions; von Richter reaction.",
                "Amines: Separation of 1°, 2°, 3° amines (Hinsberg, Hoffmann methods); Basicity in aqueous and non-aqueous media.",
                "Diazonium Salts: Preparation, mechanism of diazotization, synthetic replacements, diazo coupling, Gomberg-Bachmann reaction.",
                "Nitriles and Isocyanides: Preparation, hydrolysis, and reduction."
              ]
            },
            {
              "title": "Unit 3: Heterocyclic Compounds (12 Lectures)",
              "topics": [
                "Five-membered heterocycles (Pyrrole, Furan, Thiophene): Paal-Knorr, Knorr-pyrrole, Hantzsch syntheses; Electrophilic substitution reactions and aromaticity.",
                "Pyridine: Hantzsch synthesis, structure, aromaticity, basicity, electrophilic and nucleophilic substitutions (Chichibabin reaction).",
                "Fused heterocycles: Quinoline (Skraup, Friedländer, Knorr syntheses) and Isoquinoline (Bischler-Napieralski synthesis)."
              ]
            },
            {
              "title": "Unit 4: Alkaloids and Terpenoids (9 Lectures)",
              "topics": [
                "Alkaloids: Natural occurrence, classification, general methods of structural elucidation (Hoffmann exhaustive methylation, Emde degradation).",
                "Terpenoids: Occurrence, classification, Isoprene rule and Special isoprene rule; Structure elucidation and synthesis of Citral and α-Terpineol."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Morrison, R.T., & Boyd, R.N. Organic Chemistry, Pearson.",
          "Finar, I.L. Organic Chemistry (Vol. 1 & 2), Pearson Education.",
          "Acheson, R.M. An Introduction to the Chemistry of Heterocyclic Compounds, John Wiley & Sons.",
          "Kalsi, P.S. Textbook of Organic Chemistry, New Age International."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Physical Chemistry: Colligative Properties of Dilute Solutions, Chemical Kinetics and Photochemistry",
        "courseCode": "MJC-10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Derive Raoult's Law, osmotic pressure, boiling point elevation, freezing point depression, and van't Hoff factor.",
          "CO2: Analyze kinetics of zero, first, second, third order reactions, Arrhenius theory, and transition state theory.",
          "CO3: Solve complex reaction mechanisms (opposing, parallel, consecutive) using steady state approximation.",
          "CO4: Understand Grotthus-Draper, Stark-Einstein laws, quantum yields, Jablonski diagrams, and photophysical processes."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Colligative Properties of Dilute Solutions (15 Lectures)",
              "topics": [
                "Dilute solutions, Raoult's law (thermodynamic derivation), ideal and non-ideal solutions, azeotropic mixtures.",
                "Thermodynamic derivation of: (a) Relative lowering of vapour pressure, (b) Elevation of boiling point, (c) Depression of freezing point, (d) Osmotic pressure (van't Hoff equation).",
                "Experimental determination of colligative properties (Landsberger, Beckmann, Berkeley-Hartley methods).",
                "Abnormal molar mass, association and dissociation of solutes, van't Hoff factor (i) and degree of dissociation/association."
              ]
            },
            {
              "title": "Unit 2: Kinetics of Elementary Reactions (12 Lectures)",
              "topics": [
                "Rate laws and integrated rate equations for zero, first, second, and third order reactions; Half-life period.",
                "Methods of determination of order of reactions: differential method, integral method, half-life method, isolation method.",
                "Temperature dependence: Arrhenius equation, concept of activation energy; Collision theory and Transition State Theory (Eyring equation); Homogeneous and heterogeneous catalysis."
              ]
            },
            {
              "title": "Unit 3: Kinetics of Complex Reactions (12 Lectures)",
              "topics": [
                "Steady state approximation principle in chemical kinetics.",
                "Kinetics of Opposing (reversible) reactions (first order opposed by first order).",
                "Kinetics of Parallel (side) reactions and Consecutive reactions with integrated rate equations."
              ]
            },
            {
              "title": "Unit 4: Photochemistry (9 Lectures)",
              "topics": [
                "Grotthus-Draper Law, Stark-Einstein Law of photochemical equivalence, Quantum yield (high and low quantum efficiency causes).",
                "Kinetics of photochemical reactions (H2 + Cl2, H2 + Br2, decomposition of HI).",
                "Jablonski diagram: radiative (fluorescence, phosphorescence) and non-radiative transitions (internal conversion, intersystem crossing); Photosensitization and chemiluminescence."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "1. Determination of molecular weight of non-volatile solute by Landsberger's method.",
            "2. Determination of molecular mass by Beckmann's freezing point method.",
            "3. Chemical Kinetics: (a) Rate constant of acid-catalyzed ester hydrolysis (ethyl acetate), (b) Rate constant of cane sugar inversion by polarimetry, (c) Saponification of ethyl acetate by NaOH."
          ]
        },
        "suggestedBooks": [
          "Atkins, P.W. Physical Chemistry, Oxford University Press.",
          "Puri, B.R., Sharma, L.R., & Pathania, M.S. Principles of Physical Chemistry, Vishal Publishing.",
          "Barrow, G.M. Physical Chemistry, McGraw Hill.",
          "Rohatgi-Mukherjee, K.K. Fundamentals of Photochemistry, New Age International."
        ]
      },
      {
        "courseTitle": "Organic Chemistry: Biomolecules",
        "courseCode": "MJC-11",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand synthesis, isoelectric point, electrophoresis, and peptide sequencing of amino acids and proteins.",
          "CO2: Grasp enzyme kinetics, active sites, competitive/non-competitive inhibition, and lipid classifications.",
          "CO3: Describe structures and synthesis of purine/pyrimidine bases, nucleosides, nucleotides, and DNA double helix.",
          "CO4: Formulate bioenergetics of ATP in glycolysis and understand synthesis/mode of action of pharmaceuticals (aspirin, paracetamol, ibuprofen)."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Amino Acids, Peptides and Proteins (10 Lectures)",
              "topics": [
                "Classification of α-amino acids, Strecker synthesis, Gabriel phthalimide synthesis, Zwitterions, isoelectric points, electrophoresis.",
                "Peptides: Peptide bond geometry, Merrifield solid-phase peptide synthesis, Sanger and Edman methods of N-terminal analysis.",
                "Primary, secondary (α-helix, β-pleated sheet), tertiary, and quaternary structures of proteins; Denaturation."
              ]
            },
            {
              "title": "Unit 2: Enzymes and Lipids (10 Lectures)",
              "topics": [
                "Enzyme nomenclature and classification; Mechanism of enzyme action (lock & key, induced fit), active site; Factors affecting enzyme activity.",
                "Enzyme inhibition: Competitive, uncompetitive, and non-competitive inhibitors.",
                "Lipids: Classification, fatty acids, triglycerides, phospholipids, iodine value, saponification value, rancidity of fats."
              ]
            },
            {
              "title": "Unit 3: Nucleic Acids (10 Lectures)",
              "topics": [
                "Components of nucleic acids: Ribose/deoxyribose sugars, nitrogenous bases (Adenine, Guanine, Cytosine, Thymine, Uracil) and synthesis.",
                "Nucleosides, nucleotides, phosphodiester linkage.",
                "Watson-Crick model of DNA double helix, base pairing rules, types of RNA (mRNA, tRNA, rRNA)."
              ]
            },
            {
              "title": "Unit 4: Bioenergetics and Pharmaceutical Compounds (18 Lectures)",
              "topics": [
                "Bioenergetics: Role of ATP in glycolysis, phosphorylation of glucose, substrate-level phosphorylation, net ATP generation balance sheet.",
                "Synthesis and therapeutic actions of antipyretics and analgesics: Aspirin, Paracetamol, Ibuprofen.",
                "Medicinal chemistry of natural compounds: Curcumin (turmeric), Azadirachtin (neem), and Vitamin C (ascorbic acid)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "examPattern": "End Semester Practical Examination (Full Marks: 70, CIA: 30)",
          "topics": [
            "1. Amino acid & protein estimations: (a) Formol titration of glycine by Sorenson's method, (b) Titration curve of glycine, (c) Biuret, Ninhydrin, and Xanthoproteic tests.",
            "2. Enzymatic and lipid experiments: (a) Action of salivary amylase on starch under variable temp/pH, (b) Saponification value of oil/fat, (c) Iodine number of vegetable oil.",
            "3. Pharmaceutical synthesis: Preparation of salicylic acid and aspirin."
          ]
        },
        "suggestedBooks": [
          "Nelson, D.L., & Cox, M.M. Lehninger Principles of Biochemistry, W.H. Freeman.",
          "Berg, J.M., Tymoczko, J.L., & Stryer, L. Biochemistry, W.H. Freeman.",
          "Murray, R.K. Harper's Illustrated Biochemistry, McGraw-Hill.",
          "Foye, W.O. Principles of Medicinal Chemistry, Lea & Febiger."
        ]
      },
      {
        "courseTitle": "Physical Chemistry: Quantum Chemistry & Spectroscopy",
        "courseCode": "MJC-12",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master postulates of quantum mechanics, Schrödinger equation, particle in 1D/3D box, and hydrogen atom.",
          "CO2: Compare VBT and MOT (LCAO approximation) for H2 and H2+, calculate hybrid orbital coefficients.",
          "CO3: Explain rotational and electronic spectra, selection rules, rigid rotor, and Franck-Condon principle.",
          "CO4: Analyze vibrational (IR) and Raman spectroscopy, harmonic oscillator model, and Rule of Mutual Exclusion."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Elementary Quantum Mechanics (12 Lectures)",
              "topics": [
                "Postulates of Quantum Mechanics, quantum mechanical operators (Hermitian operators), commutation relations.",
                "Schrödinger wave equation: Physical interpretation of wave function (ψ and |ψ|^2), boundary conditions and normalization.",
                "Particle in a one-dimensional box: energy eigenvalues, eigenfunctions, nodal properties; Particle in a 3D cubic box and degeneracy.",
                "Schrödinger equation for hydrogen atom, radial and angular wave functions, quantum numbers."
              ]
            },
            {
              "title": "Unit 2: Valence Bond Theory & Molecular Orbital Theory (12 Lectures)",
              "topics": [
                "VBT approach for H2 molecule (Heitler-London treatment); MOT approach: LCAO approximation for H2+ and H2.",
                "Bonding and antibonding molecular orbitals, physical picture of σ, σ*, π, π* orbitals; Comparison of VBT and MOT.",
                "Hybridization: Calculation of mixing coefficients of atomic orbitals for sp, sp2, and sp3 hybrid orbitals."
              ]
            },
            {
              "title": "Unit 3: Rotational and Electronic Spectroscopy (12 Lectures)",
              "topics": [
                "Electromagnetic spectrum, interaction of radiation with matter.",
                "Rotational spectroscopy: Rigid rotor model, energy levels, selection rule (ΔJ = ±1), determination of bond lengths, isotopic substitution effect.",
                "Electronic spectroscopy: Franck-Condon principle, selection rules, types of electronic transitions (σ→σ*, n→σ*, π→π*, n→π*), potential energy curves."
              ]
            },
            {
              "title": "Unit 4: Vibrational and Raman Spectroscopy (12 Lectures)",
              "topics": [
                "Vibrational spectroscopy: Simple Harmonic Oscillator model, force constant, zero point energy, selection rule (Δv = ±1), anharmonicity and Morse potential.",
                "Fundamental bands, overtones, hot bands, Fermi resonance, normal modes of vibration in CO2 and H2O.",
                "Raman spectroscopy: Classical and quantum theory of Raman effect, polarizability ellipsoid, Stokes and anti-Stokes lines, Rule of Mutual Exclusion."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Banwell, C.N., & McCash, E.M. Fundamentals of Molecular Spectroscopy, Tata McGraw-Hill.",
          "Chandra, A.K. Introductory Quantum Chemistry, Tata McGraw-Hill.",
          "Prasad, R.K. Quantum Chemistry, New Age International.",
          "Lowe, J.P., & Peterson, K. Quantum Chemistry, Academic Press."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Inorganic Chemistry: Organometallic Chemistry, Symmetry and Group Theory",
        "courseCode": "MJC-13",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand nomenclature, hapticity, 18-electron rule, and synergic bonding in metal carbonyls.",
          "CO2: Describe synthesis, structures, and multicentre bonding of organo-Li, Al, Hg, Sn, and Ti compounds.",
          "CO3: Explain metal-alkene/alkyne complexes, Zeise's salt, and ferrocene structure and aromaticity.",
          "CO4: Apply symmetry operations, point groups, and multiplication tables (C2v, C3v) to chemical systems."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Introduction to Organometallic Compounds & Metal Carbonyls (12 Lectures)",
              "topics": [
                "Definition, nomenclature, classification of organometallic compounds based on bond type and hapticity (η).",
                "Metal Carbonyls: 18-electron rule and EAN rule; Preparation, properties, and structure of mono-, bi-, and polynuclear carbonyls (Fe, Co, Ni, Cr, Mn).",
                "Bonding in metal carbonyls: π-acceptor behavior of CO, synergic M-C σ and C-M π back-bonding, IR diagnostic shifts of C-O stretching frequencies."
              ]
            },
            {
              "title": "Unit 2: σ-Bonded Organometallic Compounds (12 Lectures)",
              "topics": [
                "Synthesis, properties, bonding, and applications of alkyls and aryls of Li, Al, Hg, Sn, and Ti.",
                "Multicentre bonding in electron deficient organometallics (dimeric trimethylaluminium)."
              ]
            },
            {
              "title": "Unit 3: π-Complexes (12 Lectures)",
              "topics": [
                "Metal-alkene and metal-alkyne complexes: Preparation, properties, Dewar-Chatt-Duncanson bonding model.",
                "Zeise's salt: Synthesis, structural features, and synergic bonding.",
                "Ferrocene: Synthesis, structure, aromaticity, electrophilic substitutions, comparison of reactivity with benzene."
              ]
            },
            {
              "title": "Unit 4: Symmetry and Group Theory (12 Lectures)",
              "topics": [
                "Symmetry elements (E, Cn, σ, i, Sn) and symmetry operations in molecules.",
                "Point groups classification and determination of point groups of simple molecules (H2O, NH3, BF3, trans-N2F2, benzene).",
                "Group theory principles: Group axioms, Group multiplication tables of C2v and C3v point groups, representations and subgroups."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Chatwal, G.R., & Yadav, M.S. Organometallic Chemistry, Himalaya Publishing House.",
          "Cotton, F.A. Chemical Applications of Group Theory, Wiley Interscience.",
          "Mehrotra, R.C., & Singh, A. Organometallic Chemistry, New Age International.",
          "Raj, G. Group Theory & Symmetry in Chemistry, Krishna Prakashan."
        ]
      },
      {
        "courseTitle": "Research Methodology",
        "courseCode": "MJC-14",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand principles of scientific research, literature review, and experimental design.",
          "CO2: Acquire competency in research data collection, statistical data analysis, and error propagation.",
          "CO3: Master technical writing of scientific proposals, research papers, dissertation formatting, and citation management.",
          "CO4: Comply with chemical laboratory safety, ethics in research, and intellectual property rights (IPR)."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs",
          "units": [
            {
              "title": "Unit 1: Introduction to Research & Literature Survey",
              "topics": [
                "Objectives and types of research: Fundamental, applied, descriptive, and analytical.",
                "Literature survey: Chemical Abstracts, SciFinder, ScienceDirect, PubMed, Google Scholar, Web of Science, referencing styles and reference managers (Mendeley, Zotero)."
              ]
            },
            {
              "title": "Unit 2: Research Design & Data Analysis",
              "topics": [
                "Formulation of research problems, hypothesis testing, sampling techniques, reproducibility and control experiments.",
                "Data processing, significant figures, statistical analysis: Mean, standard deviation, t-test, F-test, ANOVA, linear regression, curve fitting."
              ]
            },
            {
              "title": "Unit 3: Scientific Communication & Thesis Writing",
              "topics": [
                "Structure of a research paper and dissertation: Title, abstract, introduction, experimental methodology, results & discussion, conclusion, acknowledgements, bibliography.",
                "Oral and poster presentations, ethics in publishing, plagiarism check, peer-review process."
              ]
            },
            {
              "title": "Unit 4: Lab Safety & Intellectual Property",
              "topics": [
                "Laboratory hazards, MSDS (Material Safety Data Sheets), handling of toxic, pyrophoric, and radioactive substances, waste neutralization and disposal.",
                "Patents, copyrights, trademarks, technology transfer, and ethical conduct in scientific research."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Kothari, C.R., & Garg, G. Research Methodology: Methods and Techniques, New Age International.",
          "Dean, J.R. Practical Skills in Chemistry, Prentice Hall."
        ]
      },
      {
        "courseTitle": "Organic Chemistry: Spectroscopy",
        "courseCode": "MJC-15",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Interpret UV-Vis spectra, electronic transitions, chromophores, and apply Woodward-Fieser rules.",
          "CO2: Apply FTIR spectroscopy to identify functional groups, fingerprint bands, and analyze molecular vibrations.",
          "CO3: Elucidate organic structures using 1H-NMR (chemical shift, splitting, coupling constants, integrals).",
          "CO4: Understand principles, g-factor, and hyperfine splitting in Electron Spin Resonance (ESR) spectroscopy."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Ultraviolet (UV) Absorption Spectroscopy (12 Lectures)",
              "topics": [
                "Origin and spectrum of electromagnetic radiation; Beer-Lambert law, molar absorptivity.",
                "Types of electronic transitions (σ→σ*, n→σ*, π→π*, n→π*), selection rules.",
                "Chromophores, auxochromes, bathochromic, hypsochromic, hyperchromic, and hypochromic shifts.",
                "Woodward-Fieser rules for calculating λmax in conjugated dienes, polyenes, enones, and aromatic systems."
              ]
            },
            {
              "title": "Unit 2: Infrared (IR) Absorption Spectroscopy (12 Lectures)",
              "topics": [
                "Molecular degrees of freedom, Hooke's law, types of fundamental vibrations (stretching and bending).",
                "Selection rules, characteristic functional group frequencies (alkanes, alkenes, alkynes, alcohols, phenols, carbonyls, carboxylic acids, amines, amides).",
                "Fingerprint region, factors affecting IR absorption frequencies (hydrogen bonding, conjugation, inductive/mesomeric effects, ring strain)."
              ]
            },
            {
              "title": "Unit 3: Nuclear Magnetic Resonance (1H-NMR) Spectroscopy (12 Lectures)",
              "topics": [
                "Principle of NMR, nuclear spin, Larmor precession, resonance condition.",
                "Chemical shift (δ scale), TMS reference, shielding and deshielding mechanisms (diamagnetic and paramagnetic anisotropy).",
                "Spin-spin splitting (n+1 rule), coupling constant (J), equivalent and non-equivalent protons, peak area integration.",
                "Structure elucidation of simple organic compounds using combined UV, IR, and 1H-NMR spectra."
              ]
            },
            {
              "title": "Unit 4: Electron Spin Resonance (ESR) Spectroscopy (12 Lectures)",
              "topics": [
                "Principle of ESR, comparison with NMR, g-factor and its significance.",
                "Relaxation mechanisms: spin-lattice and spin-spin relaxation, line widths.",
                "Hyperfine splitting: electron-nuclear spin coupling, (2nI+1) rule.",
                "ESR spectra of representative radicals: hydrogen atom, methyl radical (•CH3), ethyl radical (•C2H5), benzene anion radical (•C6H6-)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Silverstein, R.M., Webster, F.X., & Kiemle, D.J. Spectrometric Identification of Organic Compounds, John Wiley & Sons.",
          "Pavia, D.L., Lampman, G.M., Kriz, G.S., & Vyvyan, J.R. Introduction to Spectroscopy, Cengage Learning.",
          "Kalsi, P.S. Spectroscopy of Organic Compounds, New Age International.",
          "Sharma, Y.R. Elementary Organic Spectroscopy, S. Chand."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Analytical Methods in Chemistry",
        "courseCode": "MJC-16",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Evaluate errors, accuracy, precision, F-test, t-test, Q-test, and confidence intervals in chemical analysis.",
          "CO2: Apply UV-Vis spectrophotometry, Flame Atomic Absorption (AAS), and Flame Emission (FES) for trace metal analysis.",
          "CO3: Understand Thermogravimetric Analysis (TGA/TG) and evaluate thermal stability and mixture compositions.",
          "CO4: Master chromatographic separations: adsorption, partition, ion-exchange, HPLC, and GC methods."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "48 hrs (48 Lectures)",
          "units": [
            {
              "title": "Unit 1: Qualitative and Quantitative Aspects of Analysis (12 Lectures)",
              "topics": [
                "Sampling methods, types of analytical data, classification of errors: determinate and indeterminate errors; Accuracy and precision, expression of errors.",
                "Normal distribution curve, statistical tests: F-test, Student t-test, Q-test for rejection of data, confidence intervals and significant figures."
              ]
            },
            {
              "title": "Unit 2: Optical Methods of Analysis (12 Lectures)",
              "topics": [
                "UV-Visible Spectrophotometry: Instrumentation (radiation sources, monochromators, detectors) for single and double beam spectrophotometers.",
                "Quantitative spectrophotometric analysis of metal ions in solutions, study of geometrical isomers and keto-enol equilibria.",
                "Flame Atomic Absorption Spectrometry (AAS) and Flame Emission Spectrometry (FES): Principles, burner designs, atomization, hollow cathode lamp, chemical interferences and background correction; Quantitative trace metal estimations in environmental water samples."
              ]
            },
            {
              "title": "Unit 3: Thermal Methods of Analysis (12 Lectures)",
              "topics": [
                "Thermogravimetry (TG/TGA): Principles, instrumentation of thermal balance, thermogravimetric curves, factors affecting TG curves.",
                "Applications of TG: Thermal decomposition of calcium oxalate monohydrate, quantitative estimation of Ca and Mg in dolomite mixtures."
              ]
            },
            {
              "title": "Unit 4: Chromatography (12 Lectures)",
              "topics": [
                "Classification of chromatographic techniques, retention parameters, theoretical plates, Van Deemter equation, resolution.",
                "Adsorption and partition chromatography, Thin Layer Chromatography (TLC), Column chromatography, Ion-Exchange chromatography.",
                "Overview of High Performance Liquid Chromatography (HPLC) and Gas Chromatography (GC)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Skoog, D.A., West, D.M., Holler, F.J., & Crouch, S.R. Fundamentals of Analytical Chemistry, Cengage Learning.",
          "Willard, H.H., Merritt, L.L., Dean, J.A., & Settle, F.A. Instrumental Methods of Analysis, CBS Publishers.",
          "Christian, G.D. Analytical Chemistry, John Wiley & Sons.",
          "Harris, D.C. Quantitative Chemical Analysis, W.H. Freeman."
        ]
      }
    ]
  },
  "MIC": {
    "1st": [
      {
        "courseTitle": "Inorganic Chemistry: Atomic Structure & Chemical Bonding & Fundamentals of Organic Chemistry",
        "courseCode": "MIC-1",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "20 Lectures",
          "units": [
            {
              "title": "Unit 1: Atomic Structure (6 Lectures)",
              "topics": [
                "Bohr's theory and limitations, de-Broglie relation, Heisenberg uncertainty principle, quantum numbers, Hund's rule, Pauli exclusion principle, Aufbau principle, orbital energies."
              ]
            },
            {
              "title": "Unit 2: Chemical Bonding and Molecular Structure (6 Lectures)",
              "topics": [
                "Ionic bonding, Born-Lande equation, Born-Haber cycle, Fajan's rules, dipole moments; Covalent bonding, VSEPR theory, hybridization, MO diagrams of homonuclear/heteronuclear diatomics."
              ]
            },
            {
              "title": "Unit 3: Fundamentals of Organic Chemistry (4 Lectures)",
              "topics": [
                "Inductive, electromeric, resonance, hyperconjugation effects, reactive intermediates (carbocations, carbanions, free radicals), aromaticity and Hückel's rule."
              ]
            },
            {
              "title": "Unit 4: Stereochemistry (4 Lectures)",
              "topics": [
                "Conformations of ethane and butane, Fischer/Newman/Sawhorse projections, optical and geometrical isomerism, CIP rules (R/S and E/Z)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "topics": [
            "Inorganic Practical: Solution preparation and standardization, permanganatometry, acidimetry/alkalimetry.",
            "Organic Practical: Detection of extra elements (N, S, Halogens), separation and purification."
          ]
        }
      }
    ],
    "2nd": [
      {
        "courseTitle": "Physical Chemistry: States of Matter & Ionic Equilibrium",
        "courseCode": "MIC-2",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "20 Lectures",
          "units": [
            {
              "title": "Unit 1: Atomic Structure & Quantum Mechanics (4 Lectures)",
              "topics": [
                "Schrodinger equation, significance of psi and psi^2, radial and angular wave functions of hydrogen atom."
              ]
            },
            {
              "title": "Unit 2: Chemical Bonding & MO Approach (4 Lectures)",
              "topics": [
                "LCAO method, bonding/antibonding MOs, MO treatment of CO, NO, and NO+."
              ]
            },
            {
              "title": "Unit 3: Aliphatic Hydrocarbons (6 Lectures)",
              "topics": [
                "Preparations and reactions of alkanes, alkenes (Saytzeff rule, anti-Markownikoff), and alkynes."
              ]
            },
            {
              "title": "Unit 4: Gaseous State (6 Lectures)",
              "topics": [
                "Kinetic gas equation, Maxwell distribution, real gas van der Waals equation, critical constants."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "topics": [
            "Surface tension determination by Stalagmometer, viscosity measurement by Ostwald viscometer, molecular weight by Victor Meyer method."
          ]
        }
      }
    ],
    "3rd": [
      {
        "courseTitle": "Hydrocarbons & Chemistry in Everyday Life",
        "courseCode": "MIC-3",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "totalHours": "45 Lectures",
          "units": [
            {
              "title": "Unit 1: Alkanes (11 Lectures)",
              "topics": [
                "Alkanes (up to 5 carbons): Catalytic hydrogenation, Wurtz reaction, Kolbe synthesis, Grignard synthesis, free radical halogenation."
              ]
            },
            {
              "title": "Unit 2: Alkenes (11 Lectures)",
              "topics": [
                "Elimination reactions, Saytzeff rule, Birch reduction, cis/trans additions, hydration, ozonolysis, hydroboration-oxidation."
              ]
            },
            {
              "title": "Unit 3: Alkynes (11 Lectures)",
              "topics": [
                "Acetylene synthesis, higher alkynes, metal acetylides, halogenation, oxidation."
              ]
            },
            {
              "title": "Unit 4: Chemistry in Everyday Life (12 Lectures)",
              "topics": [
                "Air and water pollution, toxic chemicals in soil, fertilizers, principles of green chemistry, common drugs, food preservatives."
              ]
            }
          ]
        }
      }
    ],
    "4th": [
      {
        "courseTitle": "Physical Chemistry: Chemical Thermodynamics and its Applications",
        "courseCode": "MIC-4",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "totalHours": "45 Lectures",
          "units": [
            {
              "title": "Unit 1: Basic Concepts and First Law (12 Lectures)",
              "topics": [
                "Thermodynamic systems, state and path functions, First Law, internal energy, enthalpy, Cp & Cv relations, Joule-Thomson effect."
              ]
            },
            {
              "title": "Unit 2: Thermochemistry (11 Lectures)",
              "topics": [
                "Standard state, Hess's Law, enthalpy of neutralization and combustion, bond dissociation energy, Kirchhoff's equation."
              ]
            },
            {
              "title": "Unit 3: Second Law of Thermodynamics (11 Lectures)",
              "topics": [
                "Carnot cycle and efficiency, concept of entropy, entropy of ideal gases and mixing."
              ]
            },
            {
              "title": "Unit 4: Entropy and Free Energy (11 Lectures)",
              "topics": [
                "Gibbs and Helmholtz free energy, spontaneity criteria, variation with P, V, T."
              ]
            }
          ]
        }
      }
    ],
    "5th": [
      {
        "courseTitle": "Chemical Thermodynamics and its Applications (Practical)",
        "courseCode": "MIC-5",
        "credits": "3",
        "marks": "100",
        "practical": {
          "credits": "3",
          "totalHours": "30 hrs",
          "topics": [
            "1. Determination of water equivalent of calorimeter.",
            "2. Enthalpy of neutralization of HCl with NaOH.",
            "3. Enthalpy of ionization of ethanoic acid.",
            "4. Heat of displacement of Cu by Zn.",
            "5. Enthalpy of hydration of copper sulphate."
          ]
        }
      },
      {
        "courseTitle": "Inorganic Chemistry: s-, p- and d-block elements",
        "courseCode": "MIC-6",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "totalHours": "45 Lectures",
          "units": [
            {
              "title": "Unit 1: Periodic Table and Periodicity (14 Lectures)",
              "topics": [
                "Slater rules, ionization enthalpy, electron affinity, electronegativity scales, inert pair effect, diagonal relationships."
              ]
            },
            {
              "title": "Unit 2: Compounds of p-block Elements (11 Lectures)",
              "topics": [
                "Boric acid, borates, silicates, silicones, Haber NH3 synthesis, oxyacids of N, P, S."
              ]
            },
            {
              "title": "Unit 3: Chemistry of Noble Gases (8 Lectures)",
              "topics": [
                "Inertness, VSEPR geometries of XeF2, XeF4, XeF6, clathrates."
              ]
            },
            {
              "title": "Unit 4: Chemistry of d-block Elements (12 Lectures)",
              "topics": [
                "Transition metal trends, oxidation states, complexes and peroxo compounds of Cr and Mn (KMnO4, K2Cr2O7)."
              ]
            }
          ]
        }
      }
    ],
    "6th": [
      {
        "courseTitle": "Qualitative Analysis of Inorganic Salt Mixture Containing Four Radicals (Practical)",
        "courseCode": "MIC-7",
        "credits": "3",
        "marks": "100",
        "practical": {
          "credits": "3",
          "totalHours": "30 hrs",
          "topics": [
            "1. Identification of basic and acid radicals from known salt.",
            "2. Identification of basic and acid radicals from unknown salt.",
            "3. Qualitative analysis of binary inorganic salt mixture containing four radicals."
          ]
        }
      },
      {
        "courseTitle": "Organic Chemistry: Compounds with Oxygen Containing Functional Groups",
        "courseCode": "MIC-8",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "totalHours": "45 Lectures",
          "units": [
            {
              "title": "Unit 1: Alcohols, Phenols, Ethers and Epoxides (17 Lectures)",
              "topics": [
                "Reactions of alcohols (Lucas test, oxidation), Phenols (Reimer-Tiemann, Kolbe, Fries rearrangement), Ether cleavage and oxiranes."
              ]
            },
            {
              "title": "Unit 2: Aldehydes and Ketones (10 Lectures)",
              "topics": [
                "Nucleophilic additions, Aldol, Cannizzaro, Perkin, Clemmensen, Wolff-Kishner, haloform reaction."
              ]
            },
            {
              "title": "Unit 3: Carboxylic Acids and Derivatives (9 Lectures)",
              "topics": [
                "Monocarboxylic/dicarboxylic acids, esters, amides, Hofmann bromamide degradation."
              ]
            },
            {
              "title": "Unit 4: Carbohydrates (9 Lectures)",
              "topics": [
                "Glucose and fructose structures, mutarotation, ascending/descending series."
              ]
            }
          ]
        }
      }
    ],
    "7th": [
      {
        "courseTitle": "Organic Chemistry: Identification of Oxygen Containing Functional Groups (Practical)",
        "courseCode": "MIC-9",
        "credits": "2",
        "marks": "100",
        "practical": {
          "credits": "2",
          "totalHours": "20 hrs",
          "topics": [
            "(a) Acetylation of salicylic acid.",
            "(b) Benzoylation of aniline.",
            "(c) Preparation of oximes and 2,4-dinitrophenylhydrazones.",
            "(d) Bromination of phenol."
          ]
        }
      },
      {
        "courseTitle": "Colligative Properties of Dilute Solutions, Chemical Kinetics and Photochemistry",
        "courseCode": "MIC-9",
        "credits": "2",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "30 Lectures",
          "units": [
            {
              "title": "Unit 1: Colligative Properties (8 Lectures)",
              "topics": [
                "Raoult's law, boiling elevation, freezing depression, osmotic pressure, van't Hoff factor."
              ]
            },
            {
              "title": "Unit 2: Elementary Chemical Kinetics (8 Lectures)",
              "topics": [
                "Zero, 1st, 2nd order rate equations, Arrhenius equation, activation energy, catalysis."
              ]
            },
            {
              "title": "Unit 3: Complex Kinetics (7 Lectures)",
              "topics": [
                "Steady state approximation in opposing, parallel, and consecutive reactions."
              ]
            },
            {
              "title": "Unit 4: Photochemistry (7 Lectures)",
              "topics": [
                "Lambert-Beer law, Stark-Einstein law, quantum yield, Jablonski diagram, fluorescence and phosphorescence."
              ]
            }
          ]
        }
      }
    ],
    "8th": [
      {
        "courseTitle": "Physical Chemistry: Phase Equilibria, Conductance and Electrochemical Cells",
        "courseCode": "MIC-10",
        "credits": "4",
        "marks": "100",
        "theory": {
          "credits": "4",
          "totalHours": "60 Lectures",
          "units": [
            {
              "title": "Unit 1: Phase Equilibria (15 Lectures)",
              "topics": [
                "Gibbs phase rule, water and sulphur systems, Pb-Ag eutectic system, Nernst distribution law."
              ]
            },
            {
              "title": "Unit 2: Conductance (15 Lectures)",
              "topics": [
                "Specific and molar conductance, Kohlrausch law, transport numbers, conductometric titrations."
              ]
            },
            {
              "title": "Unit 3: Electrochemical Cells (15 Lectures)",
              "topics": [
                "Galvanic cells, Nernst equation, SHE, Calomel electrode, liquid junction potential, concentration cells."
              ]
            },
            {
              "title": "Unit 4: Applications of EMF Measurements (15 Lectures)",
              "topics": [
                "Determination of Delta G, Delta H, Delta S, equilibrium constant, pH determination, potentiometric titrations."
              ]
            }
          ]
        }
      }
    ]
  },
  "MDC": {
    "1st": [
      {
        "courseTitle": "Inorganic Chemistry: Atomic Structure, Chemical Bonding & Fundamentals of Organic Chemistry",
        "courseCode": "MDC-1",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "20 Lectures",
          "units": [
            {
              "title": "Unit 1: Atomic Structure (6 Lectures)",
              "topics": [
                "Bohr's theory, de Broglie relation, Heisenberg uncertainty principle, quantum numbers, Hund's and Pauli principles, Aufbau rule."
              ]
            },
            {
              "title": "Unit 2: Chemical Bonding & Molecular Structure (6 Lectures)",
              "topics": [
                "Ionic bonding, Born-Haber cycle, Fajan's rule; Covalent bonding, VSEPR theory, MO theory for diatomics."
              ]
            },
            {
              "title": "Unit 3: Fundamentals of Organic Chemistry (4 Lectures)",
              "topics": [
                "Inductive, electromeric, resonance, and hyperconjugation effects; Reactive intermediates; Aromaticity."
              ]
            },
            {
              "title": "Unit 4: Stereochemistry (4 Lectures)",
              "topics": [
                "Conformations of alkanes, optical and geometrical isomerism, D/L and R/S configuration."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "topics": [
            "Inorganic & Organic Practical: Standard solution preparation, acidimetry/alkalimetry, detection of extra elements in organic compounds."
          ]
        }
      }
    ],
    "2nd": [
      {
        "courseTitle": "Inorganic Chemistry: Atomic Structure, Chemical Bonding & Fundamentals of Organic Chemistry / Physical Chemistry",
        "courseCode": "MDC-2",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "20 Lectures",
          "units": [
            {
              "title": "Unit 1: Atomic Structure (4 Lectures)",
              "topics": [
                "Schrodinger equation, orbital wave functions, radial/angular probability."
              ]
            },
            {
              "title": "Unit 2: Chemical Bonding (4 Lectures)",
              "topics": [
                "LCAO method, MO diagrams of CO and NO."
              ]
            },
            {
              "title": "Unit 3: Aliphatic Hydrocarbons (6 Lectures)",
              "topics": [
                "Reactions of alkanes, alkenes, and alkynes."
              ]
            },
            {
              "title": "Unit 4: Gaseous State (6 Lectures)",
              "topics": [
                "Kinetic theory of gases, Maxwell velocities, van der Waals equation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "topics": [
            "Physical chemistry practicals: Surface tension by Stalagmometer, viscosity by Ostwald viscometer, molecular weight determination."
          ]
        }
      }
    ],
    "3rd": [
      {
        "courseTitle": "Chemistry in Everyday Life",
        "courseCode": "MDC-3",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "totalHours": "30 Lectures",
          "units": [
            {
              "title": "Unit 1: Polymers (8 Lectures)",
              "topics": [
                "Monomers and polymers, addition and condensation polymerization, homopolymers and copolymers, preparation and properties of styrene, PVC, Teflon, nylon-6, nylon-66, Buna-S, Buna-N, Bakelite, Neoprene, biodegradable polymers."
              ]
            },
            {
              "title": "Unit 2: Sources of Energy (8 Lectures)",
              "topics": [
                "Nuclear energy, solar energy, bioenergy, hydral energy, bio-additives to fuels, blue and green hydrogen as clean fuels."
              ]
            },
            {
              "title": "Unit 3: Colloids (8 Lectures)",
              "topics": [
                "True solutions, suspensions, colloidal solutions, preparation and properties of colloids, Tyndall effect, Brownian motion, electrophoresis, cataphoresis, dialysis."
              ]
            },
            {
              "title": "Unit 4: Chemistry in Everyday Life (6 Lectures)",
              "topics": [
                "Air and water pollution, toxic chemicals (inorganic and organic), soil chemicals, fertilizers, green chemistry, and food preservatives."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10 hrs",
          "topics": [
            "Qualitative analysis of inorganic salt mixture containing four radicals (known and unknown salts)."
          ]
        }
      }
    ]
  },
  "INT": {
    "5th": [
      {
        "courseTitle": "Summer Internship / Industrial Training / Lab Apprenticeship",
        "courseCode": "INT-1",
        "credits": "4",
        "marks": "100",
        "description": "Internship / Apprenticeship / Industrial Training in Chemical Research Laboratories, Pharmaceutical/Chemical Industry, or Environmental Testing Facilities with Project Report & Viva-Voce."
      }
    ]
  },
  "RP": {
    "8th": [
      {
        "courseTitle": "Research Project / Dissertation in Chemistry",
        "courseCode": "RP-1",
        "credits": "12",
        "marks": "100",
        "description": "Dissertation / Research Project on advanced experimental/theoretical chemical sciences under faculty mentorship with thesis defense."
      }
    ]
  }
};
