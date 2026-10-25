/**
 * @file bscPhysicsSyllabus.ts
 * @description LNMU B.Sc. Physics Honours & Major Curriculum (CBCS NEP 2020 Structure).
 * 
 * Provides full course specifications across all 8 Semesters:
 * - Major Courses (MJC-1 through MJC-16)
 * - Minor Courses (MIC-1 through MIC-10)
 * - Multidisciplinary Courses (MDC-1 through MDC-3)
 * Includes Course Outcomes (COs), Theory Lecture Units with hour allocations,
 * and Practical Laboratory Experiment lists with examination schemes.
 */

export const BSC_PHYSICS_SYLLABUS = {
  "MJC": {
    "1st": [
      {
        "courseTitle": "Introduction to Mathematical Physics & Classical Mechanics",
        "courseCode": "MJC-1",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: Understand various mathematical techniques used in Physical Problems. Know the difference between Newtonian Mechanics and Analytic Mechanics.",
          "CO 2: Understand utility of scalars and vectors and their operations- algebraic and D-operator.",
          "CO 3: Understand the concept of Pseudo force and its importance with application in real life situations.",
          "CO 4: Realize the idea of centre of Mass and Laboratory frame.",
          "CO 5: Understand the orbit of communication and Remote sensing satellite."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Unit I: Concept of Differentiation & Integration (01 Credit / 15 hrs)",
              "topics": [
                "Differential calculus: Geometric Meaning of derivative; Maxima & Minima; Approximation of derivative; Partial Differentiation, Approximation using Taylor and Binomial series.",
                "Integral Calculus: Geometric Meaning of integration, order and degree of differential equation, Solution of First order (homogeneous & Non-homogeneous), Integrating Factor, Exact and Inexact Differentials, D-operator & Solution of Second order Differential Equation."
              ]
            },
            {
              "title": "Unit II: Vector Algebra & Vector Calculus (01 Credit / 15 hrs)",
              "topics": [
                "Vector Triple Products & their significance; concept of scalar & vector fields, Gradient of scalar, Divergence & Curl of vectors and their physical applications in Physics (e.g. Equation of continuity, Euler's equation of motion, Bernoulli's theorem, Fourier heat flow, Poisson's and Laplace's equation in a gravitational field, Gauss's law in Electrostatic, etc.)."
              ]
            },
            {
              "title": "Unit III: Fundamentals of Dynamics (01 Credit / 15 hrs)",
              "topics": [
                "Inertial and Non-Inertial Frame of Reference, Rotating frame of Reference, Centrifugal and Coriolis Forces with their applications (Effect on value of 'g', On path of freely falling body, Geo-physical effect); Foucault pendulum, Direct proof of rotation of Earth."
              ]
            },
            {
              "title": "Unit IV: Centre-of-Mass Frame and Central Forces (01 Credit / 15 hrs)",
              "topics": [
                "Lab frame & Centre of Mass frame, Two dimensional collision in physical problems, Relation connecting Scattering angle, Recoil angle, final velocities in C-frame & L-frame, Cross section & Rutherford scattering, Central forces and their equations; General Equation of central orbit, Kepler's law of Planetary motion, Artificial satellite."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "H. Goldstein, C. P. Poole and J. F. Safko, Classical Mechanics, Addison-Wesley",
          "N. C. Rana and P. S. Joag, Classical Mechanics, Tata McGraw-Hill",
          "Classical mechanics - J.C. Upadhyay",
          "Classical mechanics - A.B Gupta",
          "Classical mechanics - Tackwale & Puranik",
          "Mathematical Physics - Pipes OR W.W. Bell",
          "Innovative Mathematical Physics — Prof B. C. Rai",
          "S. L. Gupta, V. Kumar and H. V. Sharma, Classical Mechanics, Pragati Prakashan",
          "Differential Equations, George F. Simmons, 2006, Tata McGraw-Hill",
          "Mathematical Methods for Physicists, Arfken, Weber and Harris, Elsevier"
        ],
        "practical": {
          "credits": "2",
          "note": "At least 6 experiments must be performed. The theory involved in the prescribed practical should be discussed in class.",
          "topics": [
            "1. Elementary measuring apparatus — Use of Vernier calliper, Screw guage and Spherometer.",
            "2. To determine least Count of (i) Travelling Microscope (ii) Spectrometer (iii) Polarizer.",
            "3. To Evaluate value of 'g' using Bar Pendulum.",
            "4. To Evaluate value of 'g' using Kater's Pendulum.",
            "5. To Verify Conservation of linear Momentum using curved track apparatus.",
            "6. To Determine Young's modulus of Elasticity by Flexure of Beam.",
            "7. To Determine Elastic constants for the material of a wire by Searle's method.",
            "8. To Determine Surface Tension by method of ripples / use of Capillary tube.",
            "9. To Determine Co-efficient of Viscosity of liquid by Stokes method / Poiseuille's method of flow of water through Capillary.",
            "10. To study the motion of spring-mass system and to evaluate spring constant / value of 'g'.",
            "11. To evaluate average error, standard deviation, and percentage error in measurement of focal length of a concave mirror / Convex lens."
          ],
          "evaluationScheme": [
            {
              "component": "Experiment Allotted",
              "cia": "15",
              "endSem": "45",
              "total": "60"
            },
            {
              "component": "Continuous Practical Record",
              "cia": "05",
              "endSem": "10",
              "total": "15"
            },
            {
              "component": "Viva-Voce",
              "cia": "10",
              "endSem": "15",
              "total": "25"
            }
          ]
        }
      }
    ],
    "2nd": [
      {
        "courseTitle": "Oscillations and Waves",
        "courseCode": "MJC-2",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: Understand the concept of Periodic and Oscillatory motion with application of free, Damped and Forced Oscillation in Physical Situation.",
          "CO 2: Learn application of Lissajou Figure in different Physical Problems.",
          "CO 3: Explore the working of various Musical Instrument.",
          "CO 4: Understand the Physics behind Acoustic of Building.",
          "CO 5: Know the technique of sound Recording and Reproduction."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Unit I: Basics of Oscillations (01 Credit / 15 hrs)",
              "topics": [
                "Idea of S.H.M., its differential equation and solutions, Energy in S.H.M, Two body oscillation, coupled Pendulum: Normal modes of vibration, Compound Pendulum, Free, Damped and Forced Oscillations, Transient and steady states, Electrical Oscillations Resonance: Sharpness of Resonance and Quality factor."
              ]
            },
            {
              "title": "Unit II: Superposition of Oscillations (01 Credit / 15 hrs)",
              "topics": [
                "Addition of two S.H.Ms: Concept of Lissajous Figure, its geometrical Composition & Application, Stationary waves as combination of oscillations (Waves in a linear bounded medium), Vibration of string and Sonometer."
              ]
            },
            {
              "title": "Unit III: Wave Motion (01 Credit / 15 hrs)",
              "topics": [
                "Wave front, Equation of Wave Motion, Superposition of two Harmonic waves: Interference, Beats & combination of tones, pressure, energy and intensity in wave propagation, musical instruments."
              ]
            },
            {
              "title": "Unit IV: Sound Waves (01 Credit / 15 hrs)",
              "topics": [
                "Sound wave: Propagation and speed of sound (Acoustic) waves in media, speed in air: Newton's formula & Laplace Correction. Characteristics of Musical sounds & their analysis, Musical scale & consonance, Sound recording and reproduction, Acoustic of Buildings."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Waves & Oscillation - B. S. Agrawall",
          "Waves & Oscillation - Dongre & Bhattacharya",
          "The Physics of Vibrations and Waves, H. J. Pain, John Wiley & Sons Ltd.",
          "The Physics of Waves and Oscillations, N.K. Bajaj, 1998, Tata McGraw Hill",
          "Waves and Oscillations, N Subrahmanyam, Brij Lal, Vikas Publishing House Pvt Ltd.",
          "Theory of Vibration - W. T. Thomson",
          "A Textbook of Sound - D.R. Khanna & R.S Bed."
        ],
        "practical": {
          "credits": "2",
          "note": "At least 6 experiments must be performed. The theory involved in the prescribed practical should be discussed in class.",
          "topics": [
            "1. To determine frequency of Tuning Fork using Sonometer / verify laws of transverse vibration of stretched string.",
            "2. To determine frequency of Tuning Fork using Electrically maintained Melde's apparatus.",
            "3. To determine the frequency of A.C. Mains using a sonometer and an electromagnet.",
            "4. To Find the Speed of sound in the materials of given rod with a Kundt's tube / Quincke's tube.",
            "5. To determine Speed of Ultrasonic waves in any given liquid (e.g. Kerosene).",
            "6. To study motion of Spring-Mass System.",
            "7. To study the directional characteristic of Microphone using signal Generator, Amplifier, microphone, multimedia & C.R.O.",
            "8. To determine the damping constant, relaxation time and quality factor of damped mechanical oscillator using simple Pendulum with bobs of different material (Aluminium, Brass, Wood etc.).",
            "9. To determine torsional constant using Torsional Pendulum.",
            "10. To determine speed of sound using Resonance column Apparatus."
          ],
          "evaluationScheme": [
            {
              "component": "Experiment Allotted",
              "cia": "15",
              "endSem": "45",
              "total": "60"
            },
            {
              "component": "Continuous Practical Record",
              "cia": "05",
              "endSem": "10",
              "total": "15"
            },
            {
              "component": "Viva-Voce",
              "cia": "10",
              "endSem": "15",
              "total": "25"
            }
          ]
        }
      }
    ],
    "3rd": [
      {
        "courseTitle": "Thermal Physics & Thermodynamics",
        "courseCode": "MJCPHY03",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Comprehended the basic concepts of thermodynamics, the first and the second law of thermodynamics.",
          "CO2: Understand the concept of entropy and the associated theorems, the thermodynamic potentials and their physical interpretations.",
          "CO3: Learn about Maxwell's relations and use them for solving many problems in Thermodynamics.",
          "CO4: Learn the basic aspects of kinetic theory of gases, Maxwell-Boltzmann distribution law, equipartition of energy, mean free path of molecular collisions transport phenomenon like: viscosity, thermal conductivity, diffusion and Brownian motion.",
          "CO5: Get background for further studies and research in different subject areas namely condensed matter physics, chemistry, material science and life sciences."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Kinetic Theory of Gases (13 Lectures)",
              "topics": [
                "Maxwell-Boltzmann Molecular Speed distribution Law for an Ideal Gas. Mean, RMS and Most Probable Speeds. Degrees of Freedom. Law of Equipartition of Energy (no derivation).",
                "Molecular Collisions: Mean Free Path. Estimation of Mean Free Path. Transport Phenomenon in Ideal Gases: (1) Viscosity, (2) Thermal Conductivity and (3) Diffusion.",
                "Brownian motion, Langevin and Einstein's theories and experimental determination of Avogadro's no., Rectilinear flow of heat in a metal rod, Relation between thermal & electrical conductivities."
              ]
            },
            {
              "title": "Unit 2: Real Gases (09 Lectures)",
              "topics": [
                "Behavior of Real Gases. Van der Waal's Equation of State for Real Gases. Values of Critical Constants. Law of Corresponding States.",
                "Joule-Thomson Porous Plug Experiment. Joule-Thomson Effect for Real Gases. Joule-Thomson Cooling."
              ]
            },
            {
              "title": "Unit 3: Zeroth and First Law of Thermodynamics (09 Lectures)",
              "topics": [
                "Extensive and intensive Thermodynamic Variables, Thermodynamic Equilibrium, Zeroth Law of Thermodynamics and Concept of Temperature.",
                "Work, Heat, State Functions and path functions, First Law of Thermodynamics, Internal Energy for ideal and real gases.",
                "Applications of First Law of thermodynamics in case of thin film, stretched wire, hydrostatics, and specific Molar Heat Capacity for gases, Relation between Cp and Cv."
              ]
            },
            {
              "title": "Unit 4: Second Law of Thermodynamics (15 Lectures)",
              "topics": [
                "Cyclic, reversible and irreversible process, Carnot engine, Carnot cycle, Second Law of thermodynamics. Principle of heat engine and refrigerator Kelvin-Planck and Clausius Statements.",
                "Concept of Entropy, Clausius Inequality, Second Law in terms of Entropy, Temperature-Entropy diagrams. Third Law of thermodynamics.",
                "Thermodynamic Potentials: Internal Energy, Enthalpy, Helmholtz & Gibb's Functions, Maxwell's Relations, Co-efficient of performance, Clausius-Clapeyron equation and phase transition (1st and 2nd order)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. To determine Mechanical Equivalent of Heat, J, by Callender and Barne's constant flow method.",
            "2. To determine the Coefficient of Thermal Conductivity of good conductor (Cu) by Searle's Apparatus.",
            "3. To determine the Coefficient of Thermal Conductivity of good conductor (Cu) by Angstrom's Method.",
            "4. To determine the Coefficient of Thermal Conductivity of a bad conductor by Lee and Charlton's disc method.",
            "5. To determine the Temperature Coefficient of Resistance by Platinum Resistance Thermometer (PRT).",
            "6. To study the variation of Thermo-emf of a Thermocouple with difference of Temperature of its two Junctions using a null method.",
            "7. To determine Mechanical Equivalent of Heat (J) with the help of Joule's calorimeter.",
            "8. To plot a graph between temperature and pressure at constant volume using Joly's apparatus and to find the coefficient of increase of pressure at constant volume.",
            "9. To study the adiabatic expansion of a gas and hence to find the value of the ratio of specific heat at constant pressure to specific heat at constant volume for air using Clement and Desorme's apparatus."
          ]
        },
        "suggestedBooks": [
          "Thermal Physics - S. Garg, R. Bansal and C. Ghosh (Tata McGraw-Hill)",
          "Heat and Thermodynamics - M.W. Zemansky, Richard Dittman (McGraw-Hill)",
          "A Treatise on Heat - Meghnad Saha, and B.N. Srivastava (Indian Press)",
          "Classical and Quantum Thermal Physics - R. Prasad (Cambridge University Press)",
          "Modern Thermodynamics with Statistical Mechanics - Carl S. Helrich (Springer)",
          "Thermodynamics, Kinetic Theory & Statistical Thermodynamics - Sears & Salinger (Narosa)",
          "Concepts in Thermal Physics - S.J. Blundell and K.M. Blundell (University Press)"
        ]
      },
      {
        "courseTitle": "Electricity & Magnetism",
        "courseCode": "MJCPHY-04",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand the basic concepts of electrostatics.",
          "CO2: Understand the dielectric and magnetic properties of matter.",
          "CO3: Understand the electromagnetic induction and electric circuits.",
          "CO4: Provides background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Electrostatics (10 Lectures)",
              "topics": [
                "Electric Field and potential, Field due to a uniformly charged sphere, Gauss Law and its applications: The Field of a conductor.",
                "Electric dipole, Field and potential due to an electric dipole, Dipole approximation for an arbitrary charged distribution, Electric quadruple, Field due to a quadrupole.",
                "Electrostatic Energy of a uniformly charged sphere, Poisson and Laplace Equations, applications of Laplace equation."
              ]
            },
            {
              "title": "Unit 2: Dielectric Properties of Matter (08 Lectures)",
              "topics": [
                "Electric field in matter and Electrical susceptibility and Dielectric polarization, Dielectric constant, Polarisation vector, Surface Charge and bound charge, Displacement Vector D, Relations between E, P and D."
              ]
            },
            {
              "title": "Unit 3: Magnetism (12 Lectures)",
              "topics": [
                "Magnetic field, Magnetic force and Torque on a current carrying conductor, and loop placed in a magnetic field, Biot-Savart's Law and its simple applications: straight wire and circular loop, Magnetic Dipole.",
                "Magnetomotive force and Ampere's Circuital theorem and its applications to calculate magnetic field due to current carrying wire and solenoid and toroid. Gauss's law of magnetism (Integral and Differential Forms).",
                "Relative Permeability of a Material. Magnetic Susceptibility. Magnetization Vector (I), or intensity of magnetisation. Magnetic Intensity (H). Relation between B, I and H. Magnetic Energy stored in Matter. Magnetic Circuit. Potential Energy of a Current Loop placed in a magnetic field.",
                "Ballistic Galvanometer: Electromagnetic Damping, Logarithmic Damping, Critical Damping Resistance (CDR)."
              ]
            },
            {
              "title": "Unit 4: Electromagnetic Induction (05 Lectures)",
              "topics": [
                "Faraday's and Lenz's Laws. Mutual and Self Induction, self and Mutual inductances of a solenoid and system of current carrying loop, Energy stored in a Magnetic Field.",
                "Electric field induced due to time varying Magnetic field, magnetic field induced due to Time varying electric field. Introduction to Maxwell's Equations."
              ]
            },
            {
              "title": "Unit 5: Electrical Circuits (10 Lectures)",
              "topics": [
                "AC Circuits: Kirchhoff's laws for AC circuits. Reactance and Complex Impedance.",
                "Series and parallel LCR Circuit: Resonance, Quality Factor, and Band Width, Power in AC Circuits."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. Use of Multimeter for measuring (a) Resistance, (b) AC and DC Voltages, (c) DC Current, (d) Capacitance, and (e) Checking electrical fuses.",
            "2. To calibrate the ammeter and voltmeter by potentiometer.",
            "3. To find the low resistance by Carey Foster's bridge after calibrating the bridge wire.",
            "4. Measurement of low resistance using Potentiometer.",
            "5. To determine the high resistance by leakage method.",
            "6. Figure of merit of moving coil galvanometer.",
            "7. To determine the angle of dip in the laboratory using an earth inductor.",
            "8. Compare the capacities of capacitors by De Sauty's bridge.",
            "9. To study the characteristics of a series RC Circuit.",
            "10. To verify the Thevenin and Norton theorems.",
            "11. To verify the Superposition, and Maximum power transfer theorems.",
            "12. To determine self inductance of a coil by Anderson's bridge.",
            "13. To study the response curve of a Series LCR circuit and determine its (a) Resonant frequency, (b) Impedance at resonance, (c) Quality factor Q, and (d) Band width.",
            "14. To study the response curve of a parallel LCR circuit and determine its (a) Anti-resonant frequency and (b) Quality factor Q."
          ]
        },
        "suggestedBooks": [
          "Electricity and Magnetism, Basudev Ghosh (Books And Allied (P) Ltd)",
          "Introduction to Electrodynamics, D.J. Griffiths, 3rd Edn (Benjamin Cummings)",
          "Fundamentals of Electricity and Magnetism, Arthur F. Kip (McGraw-Hill)",
          "Electricity, Magnetism & Electromagnetic Theory, S. Mahajan and Choudhury (Tata McGraw-Hill)",
          "Fundamentals of Electricity and Magnetism D.N Vasudev (S. Chand & Co)",
          "Electricity and Magnetism- R. Murugeshan (S. Chand)",
          "Electricity and Magnetism-K.K. Tiwary (S. Chand)",
          "Advanced Practical Physics for students, B. L. Flint and H. T. Worsnop (Asia Publishing House)",
          "A Text Book of Practical Physics, I. Prakash & Ramakrishna (Kitab Mahal)",
          "Advanced level Physics Practicals, Michael Nelson and Jon M. Ogborn (Heinemann)",
          "Engineering Practical Physics, S. Panigrahi and B. Mallick (Cengage Learning)",
          "B. Sc. Practical Physics, C. L. Arora (S. Chand and Co.)"
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Mathematical Physics-II and Introduction to Computational Methods",
        "courseCode": "MJCPHY05",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master the basic elements of complex mathematical analysis.",
          "CO2: Solve differential equations that are common in physical sciences.",
          "CO3: Apply group theory and integral transforms to solve mathematical problems of interest in Physics.",
          "CO4: Understanding how to use special functions in various physics problems.",
          "CO5: Provides background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Curvilinear Coordinates, Tensors and Special Functions (09 Lectures)",
              "topics": [
                "Spherical and Cylindrical Coordinate Systems. Ordinary Integrals of Vectors, Line, surface and volume integrals of Vector fields.",
                "Tensors: Elementary properties, Contra variant and covariant Tensors, Symmetric and Anti-symmetric tensors.",
                "Singular Points of Second Order Linear Differential Equations and their importance, Frobenius method and its applications to differential equations Legendre, Bessel, Hermite and Laguerre Differential Equations."
              ]
            },
            {
              "title": "Unit 2: Partial Differential Equations and Complex Analysis (10 Lectures)",
              "topics": [
                "Solutions to partial differential equations using separation of variables: Laplace's Equation in problems of rectangular and spherical symmetry.",
                "Complex Numbers Graphical Representation Euler's formula, De Moivre's theorem, Roots of Complex Numbers. Functions of Complex Variables.",
                "Analyticity and Cauchy-Riemann Conditions Cauchy's Inequality. Cauchy's Integral formula. Simply and multiply connected region. Integration of function of a complex variable."
              ]
            },
            {
              "title": "Unit 3: Introduction: Importance of Computers in Physics, Algorithms and Flow Charts (06 Lectures)",
              "topics": [
                "Importance of Computers in Physics, Algorithms and Flow Charts: Algorithm Definition, properties and development.",
                "Flowchart: concept of flowchart, symbols, guidelines, types. Sum of two matrices, sum & Products of a finite series, calculations of Sin (x) as a series."
              ]
            },
            {
              "title": "Unit 4: Scientific Programming (06 Lectures)",
              "topics": [
                "Usage of Linux an Editor, some fundamental Linux commands (Internal & External commands), Development of FORTRAN, Basic elements of FORTRAN: Character set, constants and their types, variables and their types, Keywords, variable Declaration and concept of instruction and program.",
                "Operators: Arithmetic, Relational, Logical and Assignment operators. Expressions: Arithmetic Relational, Logical, Character and Assignment Expressions.",
                "FORTRAN Statements: I/O statements (unformatted/formatted), Executable and Non-Executable statements, Layout of FORTRAN program, Format of writing program and concept of coding."
              ]
            },
            {
              "title": "Unit 5: Control statements (09 Lectures)",
              "topics": [
                "Control statements: Types of Logic (sequential, selection, Repetition), Branching statements (Logical IF, Arithmetic IF, Block IF, Nested Block IF, SELECT CASE and ELSE IF Ladder Statements), Looping statements (DO-CONTINUE, DO-ENDDO, DO-WHILE, Implied and Nested DO Loops), Jumping statements (Unconditional GO TO, computed GO TO, Assigned GO TO).",
                "Subscripted variables, Functions and Subroutines (Arithmetic statements, Function, Function subprogram and subroutine), Examples from physics Problems."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. Errors & error Analysis: Truncation & rounding of errors, absolute & relative errors.",
            "2. Differential equations: Solutions of ordinary differential equation, solution of first order differential equation, solution of quadratic equation.",
            "3. Computer Architecture and Organization, Memory and Input/Output devices.",
            "4. Basics of Scientific computing: Binary and decimal arithmetic, Floating point numbers, Algorithms, Single & Double precision arithmetic, underflow & overflow.",
            "5. Programs: Sum & average of a list of numbers, Largest of a given list of numbers and its location in the list, Sorting of numbers in ascending descending order, Familiarity with DOS commands, Linux Commands and FORTRAN commands."
          ]
        },
        "suggestedBooks": [
          "An Introduction to Computational Physics: T. Pang (Cambridge University Press)",
          "Elementary Numerical Analysis: K.E Atkinson (Wiley India Edition)",
          "Numerical Recipes in C: The Art of Scientific Computing, W.H. Pressetal (Cambridge University)",
          "Introduction to Numerical Analysis: S. S Sastry",
          "Mathematical Methods for Physicists: Arfken, Weber (Pub. Elsevier)",
          "Mathematics for Physicists: Susan M. Lea (Pub. Thomson Books)"
        ]
      },
      {
        "courseTitle": "Electrodynamics and Electromagnetism",
        "courseCode": "MJCPHY06",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Establish and analyse four Maxwell's equations of electromagnetism.",
          "CO2: Understand the propagation of electromagnetic waves in vacuum, dielectrics, conductors and also in guided media and the phenomenon of reflection and refraction of plane waves at different boundaries.",
          "CO3: Understand the importance of energy flow (Poynting Theorem) and its usefulness.",
          "CO4: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "5",
          "units": [
            {
              "title": "Unit 1: Maxwell's Equations (10 Lectures)",
              "topics": [
                "Equation of continuity, Displacement Current, Maxwell's equations in differential and Integral forms; Vector and scalar potentials.",
                "Poynting theorem and Poynting vector, energy conservation (qualitative idea of momentum conservation).",
                "Electromagnetic (EM) Energy Density. Physical Concept of Electromagnetic Field Energy Density, Momentum Density, Description of Lorentz force."
              ]
            },
            {
              "title": "Unit 2: Electromagnetic Wave Propagation in unbounded media (14 Lectures)",
              "topics": [
                "Propagation of plane EM waves in free space, and dielectrics, Transverse nature of plane EM waves, refractive index and dielectric constant, wave impedance.",
                "Propagation of EM wave through conducting media, relaxation time, skin depth."
              ]
            },
            {
              "title": "Unit 3: EM Wave Propagation in Bounded Media (14 Lectures)",
              "topics": [
                "Boundary conditions at a plane interface between two media. Reflection and Refraction of plane waves at plane interface between two dielectric media — Laws of Reflection and Refraction.",
                "Fresnel's Formulae for perpendicular & parallel polarization cases, Brewster's law. Reflection & transmission coefficients. Total internal reflection. Metallic reflection (normal Incidence)."
              ]
            },
            {
              "title": "Unit 4: Polarization of Electromagnetic Waves (10 Lectures)",
              "topics": [
                "Description of Linear, Circular and Elliptical Polarization. Uniaxial and Biaxial Crystals.",
                "Light Propagation in Uniaxial Crystal. Double Refraction. Polarization by Double Refraction."
              ]
            },
            {
              "title": "Unit 5: Transmission Line, Wave Guides & Optical Fibres (12 Lectures)",
              "topics": [
                "Transmission Line: Propagation of e.m. wave through transmission line, reflection coefficient, standing wave, characteristic impedance, propagation constant.",
                "Wave Guides: Fundamentals of wave guides, Condition of continuity at the interface. Expressions for field components, TE and TM modes. Propagation properties, cutoff frequency, Field energy and Power transmission.",
                "Optical Fibres: Numerical Aperture. Step and Graded Indices (Definitions Only). Single and Multiple Mode Fibres (Concept and Definition Only)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Introduction to Electrodynamics, D.J. Griffiths, Benjamin Cummings",
          "Electromagnetic Field Theory for Engineers & Physicists, G. Lehner, Springer",
          "Electromagnetic Fields & Waves, P. Lorrain & D. Corson, W.H. Freeman & Co.",
          "Electromagnetics, J. A. Edminster, Schaum Series, Tata McGraw Hill",
          "Electromagnetic field theory fundamentals, B. Guru and H. Hiziroglu, Cambridge University Press",
          "Electrodynamics and Plasma Physics S.L.Kakan, C. Herajan, CBS publisher",
          "Electrodynamics: K.K Chopra & G.C Aggrawal",
          "Classical Electrodynamics J D Jackson Wiley"
        ]
      },
      {
        "courseTitle": "Optics",
        "courseCode": "MJCPHY07",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand Interference as superposition of waves from coherent sources derived from same parent source.",
          "CO2: Demonstrate basic concepts of Diffraction: Superposition of wavelets diffracted from aperture.",
          "CO3: Understand Fraunhofer and Fresnel Diffraction.",
          "CO4: Gain experience of using various optical instruments and making finer measurements of wavelength of light using Newton's Rings experiment, Fresnel Biprism, etc.",
          "CO5: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Interference (12 Lectures)",
              "topics": [
                "Light as EM Wave (Historical Perspective), Superposition of waves, Conditions for interference.",
                "Interference by Division of Wavefront (Fresnel's Biprism, Lloyd's single mirror) and by Division of Amplitude (Interference by Film).",
                "Newton's Ring, Complex Representation for Intensity calculation, Stoke's treatment."
              ]
            },
            {
              "title": "Unit 2: Interferometer (08 Lectures)",
              "topics": [
                "Michelson interferometer and its applications, Multiple beam interference in parallel film, Fabry-Perot interferometer, Coherence — Spatial and Temporal."
              ]
            },
            {
              "title": "Unit 3: Fraunhofer & Fresnel Diffraction (12 Lectures)",
              "topics": [
                "Fraunhofer Diffraction: Conditions for diffraction, Fraunhofer diffraction due to single, double and multiple slits, Plane transmission grating.",
                "Fresnel diffraction: Fresnel half-period zones, Zone plate, Huygen's-Fresnel principle, Diffraction by a circular aperture, Diffraction by a straight edge, Rayleigh's criterion for limit of resolution, Resolving power of Grating, Telescope and Microscope."
              ]
            },
            {
              "title": "Unit 4: Polarization, Double Refraction & Elementary LASERs (13 Lectures)",
              "topics": [
                "Polarized light and its mathematical representation, Production of polarized light by reflection, refraction and scattering, Polarization by double refraction, Nicol prism, Quarter wave plate, Half wave plate, Babinet's compensator, Production and analysis of circularly and elliptically polarized light, Optical activity and Fresnel's theory, Bi-quartz polarimeter.",
                "Elementary ideas of LASERs, Einstein's A & B coefficients, Population Inversion and Holography."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. To determine Magnifying Power of a telescope by the Slit method/ Linear Scale using Microscope.",
            "2. To find the height of an inaccessible object (altitude or angular diameter of the Sun) using Sextant.",
            "3. To find angle of prism/ angle of minimum deviation and hence refractive index of material of prism using Spectrometer.",
            "4. To find value of Cauchy's Constant A and B for the material of a given prism using a Mercury Vapour Lamp.",
            "5. To determine Resolving Power of a prism.",
            "6. To determine diameter of a thin wire by studying the diffraction (and interference) pattern.",
            "7. To determine wavelength of sodium light using a plane diffraction grating.",
            "8. To determine Resolving Power of a plane transmission grating.",
            "9. To establish the dispersion relation for a plane transmission grating.",
            "10. To verify Fresnel's Law of reflection and refraction by using a plane refracting surface.",
            "11. Simple experiment demonstrating different applications of LASER and Optical Fibre.",
            "12. Determination of wavelength of light using biprism on optical bench.",
            "13. To determine the wavelength of the monochromatic light by Newton's Ring.",
            "14. To determine the specific rotation of the cane sugar solution using bi-quartz polarimeter."
          ]
        },
        "suggestedBooks": [
          "Practical Physics: Geeta Sanon (S. Chand & Company); Harnam Singh & P.S. Hemne (R. Chand & Co.)",
          "A Text Book of Practical Physics: Indu Prakash, Ramakrishna & A.K. Jha, Kitab Mahal",
          "Advanced level Physics Practicals: Michael Nelson and Jon M. Ogborn, Heinemann",
          "A Laboratory Manual of Physics for undergraduate classes: D.P. Khandelwal, Vani Pub.",
          "Practical Physics: G.L. Squires, Cambridge University Press",
          "Optics: Eugene Hecht (Pearson)",
          "Optics (Classical & Quantum) - Dr. R.K. Kar (Books & Allied)",
          "Optics: Ajoy Ghatak, McGraw-Hill Education, New Delhi",
          "Fundamental of Optics: Jenkins & White (McGraw Hill)",
          "Fundamental of Optics: B. K. Mathur",
          "Optics: Francis Weston Sears, Addison-Wesley Publishing Company"
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Elements of Modern Physics",
        "courseCode": "MJCPHY08",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: To understand the inadequacy of classical Mechanics.",
          "CO2: To understand the historical development of Quantum Concepts.",
          "CO3: To understand the behaviour of mother nature at microscopic level.",
          "CO4: To prepare background for interdisciplinary research in condensed matter / Material Science/atomic Physics/Life Science etc.",
          "CO5: To enhance employability skills as scientific officers at different research orientated centres.",
          "CO6: To promote application of nuclear energy in various areas.",
          "CO7: To Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "5",
          "units": [
            {
              "title": "Unit 1: Particle Properties of Radiations & Wave Aspect of Particles (10 Lectures)",
              "topics": [
                "Black Body Radiation and Planck's quantum Hypothesis, Discovery and Explanation of Photoelectric effect, Compton Scattering, Pair Production and Annihilation.",
                "Wave Aspect of Particles: Idea De Broglie wavelength and matter waves, Davisson-Germer experiment for diffraction of electron, G.P. Thomson Experiment, Phase velocity, wave packets and Concept of Velocity."
              ]
            },
            {
              "title": "Unit 2: Wave-Particle Duality (10 Lectures)",
              "topics": [
                "Concept of Wave-particle duality, Heisenberg Uncertainty Principle, Uncertainty relations involving canonical pair of variables and their Derivation from Wave Packets.",
                "Estimation of minimum energy for a confined particle using uncertainty principle, origin of natural width of emission lines, Uncertainty Principle and concept of Bohr Orbit."
              ]
            },
            {
              "title": "Unit 3: Atomic Structure (10 Lectures)",
              "topics": [
                "Introduction of Sommerfeld Quantization rule, Bohr-Sommerfeld atomic theory, Explanation of Hydrogen and Hydrogen-like Spectra, Comparison between H and He+ Spectra.",
                "Corrections for finite nuclear mass and corresponding variations in Rydberg Constant, Relativistic correction."
              ]
            },
            {
              "title": "Unit 4: Wave Mechanical Description of electron particles (10 Lectures)",
              "topics": [
                "The Schrodinger Wave equation, properties, concept of normalization of Wave function, Expectation value, Schrodinger equation for non-relativistic particles, Concept of operators in quantum mechanics.",
                "Time independent Schrodinger equation, Probability, probability current densities, Idea of energy eigenvalues and eigenfunctions."
              ]
            },
            {
              "title": "Unit 5: Fundamental Properties of Nucleus (20 Lectures)",
              "topics": [
                "Size, constituent and structure of atomic nuclei, Idea of Isotope, Isobar, Isotope and Mirror nuclei, Mass defect, Packing fraction, Binding energy, Binding Energy per nucleon versus Mass number Curve.",
                "Stability of the nucleus and Nature of Nuclear force, Law of radioactive decay, Mean life and Half-life, successive radioactive disintegration, Basic Idea of Alpha, Beta and Gamma decay, Idea of energy-momentum and parity conservation in nuclear decay process, Q-value in nuclear reaction.",
                "Radiation Detector, Ionization Chamber, Geiger-Muller Counter, Neutron detection, Spark chamber, Bubble, Cloud and Scintillation, Cherenkov radiation."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Concepts of Modern Physics, Arthur Beiser, McGraw-Hill",
          "Introduction to Modern Physics - H.S. Mani & G.K Mehta (PHI)",
          "Elements of Nuclear Physics - M L Prasad, RPS (Kedarnath Ramnath)",
          "Q. Mechanics - H.C Verma (Surya Pub.)",
          "Atomic & Nuclear Physics - K. Gopala Krishnan (Mac Million India Ltd.)",
          "Modern Physics - S.K Gupt & B.S. Agarwal (Kedarnath Ramnath)",
          "Introduction to Modern Physics - F.K Richtmyer, E.H Kennad, T. Lauritsen (McGraw Hill)"
        ]
      },
      {
        "courseTitle": "Basic Electronics",
        "courseCode": "MJCPHY09",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand fundamental designing concepts of different types of Logic Gates, Minimization techniques etc.",
          "CO2: Design of different types of the Digital circuits, and to give the computational details for Digital Circuits.",
          "CO3: Draw characteristics of devices like PNP and NPN junction diode and truth tables of different logic gates.",
          "CO4: Understand basic elements and measurement of their values with multimeter and their characteristic study.",
          "CO5: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Digital Circuits (04 Lectures)",
              "topics": [
                "Difference between Analog & Digital Circuits. Binary Numbers. Decimal to Binary & vice-versa.",
                "AND, OR and NOT Gates (Realisation using Diodes & Transistors) NAND and NOR Gates as Universal gates. XOR and XNOR Gates."
              ]
            },
            {
              "title": "Unit 2: Basic Circuit Operations (08 Lectures)",
              "topics": [
                "De Morgan's Theorem, Boolean Laws, Simplification of Logic Circuit using Boolean Algebra. Fundamental Products. Minterms and Maxterms.",
                "Conversion of a Truth Table into an Equivalent Logic Circuit by (1) Sum of Products Method and (2) Karnaugh Map (For Advanced Learners).",
                "Combinational circuits: Basic idea of Binary Addition. Binary Subtraction using 2's Complement. Half and Full Adders. Half & Full Subtractors."
              ]
            },
            {
              "title": "Unit 3: Semiconductor Devices & Applications (14 Lectures)",
              "topics": [
                "P-and N-type semiconductors. Energy Level Diagram. Barrier Formation in PN Junction Diode. Qualitative Idea of Current Flow Mechanism in Forward and Reverse Biased Diode. P-N junction & its characteristics. Static and Dynamic Resistance.",
                "Principle and structure of (1) LEDs (2) Photodiode (3) Zener Diode (4) Solar Cell.",
                "Electronic Devices and their Applications: (1) Rectifier Diode: Half-wave Rectifiers. Full-wave Rectifiers (Centre-tapped and Bridge), Calculation of Ripple Factor and Rectification Efficiency, (2) Voltage Regulation using Zener Diode.",
                "Bipolar Junction transistors: n-p-n and p-n-p Transistors, Characteristics of CB, CE and CC Configurations. Current gains α and β parameters, Relations between α and β parameters. Load Line analysis of Transistors. DC Load line and Q-point. Physical Mechanism of Current Flow: Active, Cutoff and Saturation Regions.",
                "Amplifiers: Transistor Biasing circuits and Stability. Fixed Bias and Voltage Divider Bias circuit for CE Amplifier. (h-parameter Equivalent Circuit). Analysis of a single-stage CE amplifier using Hybrid Model. Input and Output Impedance. Current, Voltage and Power Gains. Class A, B & C Amplifiers (For Advanced Learners)."
              ]
            },
            {
              "title": "Unit 4: Operational Amplifiers & Feedback Oscillators (08 Lectures)",
              "topics": [
                "Characteristics of an Ideal and Practical Op-Amp (IC 741), Open-loop Gain. CMRR, Concept of virtual ground.",
                "Applications of Op-Amp: (1) Inverting and Non-Inverting Amplifiers (2) Adder (3) Subtractor (4) Differentiator (5) Integrator.",
                "Feedback and Oscillation: Effects of Positive and Negative Feedback on Gain and Stability, Distortion and Noise. Sinusoidal Oscillators: Barkhausen's Criterion for self-sustained oscillations. RC and Wien Bridge oscillator."
              ]
            },
            {
              "title": "Unit 5: Instrumentations, Power Supply & Timer IC (11 Lectures)",
              "topics": [
                "Introduction to CRO: Block Diagram and Applications of CRO: (1) Study of Waveform (2) Measurement of Voltage, Current, Frequency and Phase Difference.",
                "Power Supply: Half Wave Rectifiers, Centre-tapped and Full wave Rectifiers, Calculation of Ripple Factor and Rectification Efficiency, Basic Idea about capacitor filter, Zener Diode and Voltage Regulation.",
                "Timer IC: IC 555 Pin diagram and its applications as Astable and Monostable Multivibrators."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. To measure (a) Voltage and (b) Time period of a periodic waveform using CRO.",
            "2. To test a Diode and Transistor using a Multimeter.",
            "3. To design a switch (NOT gate) using a transistor.",
            "4. To verify and design AND, OR, NOT and XOR gates using NAND gates.",
            "5. Half Adder, Half Subtractor and 4-bit Binary Adder.",
            "6. To study V-I characteristics of P-N junction, Zener and Light emitting diode.",
            "7. To study the characteristics of a Bipolar Junction Transistor in CE configuration.",
            "8. To study the frequency response of voltage gain of a RC-coupled transistor amplifier.",
            "9. To design Inverting amplifier using Op-amp (741) and study its frequency response.",
            "10. To design an Astable Multivibrator using IC 555 Timer.",
            "11. To design a precision Differentiator using an Op-Amp 741."
          ]
        },
        "suggestedBooks": [
          "Electronic Principles & Applications: A.P. Malvino, D.P. Leach and Saha (McGraw Hill)",
          "Modern Digital Electronics - R.P. Jain, Tata McGraw Hill, 4th Edition",
          "Principles of Electronics: V.K. Mehta & Rohit Mehta (S. Chand & Comp)",
          "Basic Electronics Devices: D.P. Kothari & I J Nagrath (McGraw Hill Educ)",
          "Hand Book of Electronics - Gupta & Kumar",
          "Foundation of Electronics - Chattopadhyay, Rakshit, Saha, Purikait (Wiley)"
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Analytical Mechanics & Special Theory of Relativity",
        "courseCode": "MJCPHY10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand Physical Principle behind derivation of Lagrange and Hamiltonion Equation.",
          "CO2: Understand Canonical Transformation.",
          "CO3: Analysis the Centre of mass and Laboratory frames of reference and their use in explaining elastic and inelastic collisions.",
          "CO4: Understand the Planetary motions and motions of satellites using the principles of gravitation and Kepler's laws. Getting an idea of postulates of special theory of relativity and their implications.",
          "CO5: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Unit 1: Constraints & Variational Principle and Hamiltonian Formalism (15 Lectures)",
              "topics": [
                "Constraints: Holonomic, Non Holonomic, Scleronomous, Rheonomous, D'Alembert's Principle, Virtual Displacement, Principle of virtual work, concept of generalized co-ordinates, Derivation of Lagrange's equation from D'Alembert's Principle, simple applications of Lagrange's equations.",
                "Variational Principle and Hamiltonian formalism: Calculus of variation and its applications, Hamilton's Principle, Derivation of Lagrange's equations of motion from Hamilton's Principle, Velocity-dependent potential, Cyclic coordinates, Symmetries and conservation laws, Legendre transformation, Hamilton's equations of motion and its applications, Principle of least action."
              ]
            },
            {
              "title": "Unit 2: Canonical Transformation (10 Lectures)",
              "topics": [
                "Canonical transformation and its applications, Poisson Brackets, Jacobi identity, Hamilton-Jacobi equation, Action-angle variables, Theory of small oscillations."
              ]
            },
            {
              "title": "Unit 3: Motion of a Rigid body (08 Lectures)",
              "topics": [
                "Euler's Angle, Kinematics of rotation, Euler's equation of Motion, Twisting Torque on a Elastic Cylinder."
              ]
            },
            {
              "title": "Unit 4: Special Theory of Relativity (15 Lectures)",
              "topics": [
                "Michelson-Morley Experiment and its outcome. Postulates of Special Theory of Relativity. Lorentz Transformations. Lorentz contraction. Time dilation. Relativistic addition of velocities. Variation of mass with velocity. Mass less Particles. Mass-energy Equivalence Four vectors."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "An introduction to mechanics - Kleppner D., Kolenkow R. J. (McGraw-Hill)",
          "Mechanics, Berkeley Physics, vol.1 - Kittel C., Knight W., et.al. (Tata McGraw - Hill)",
          "Physics - Resnick, Halliday and Walker, Wiley (8/e)",
          "Analytical Mechanics - Fowles G. R. and Cassiday G.L. (Cengage Learning)",
          "Feynman Lectures on Physics, Vol. I - Feynman R. P., Leighton R. B., Sands M. (Pearson)",
          "Mechanics - Mathur D. S., S. Chand (Company Limited)",
          "Special Relativity - B.C. Rai",
          "University Physics - Sears F. W, Zemansky M. W., Young H.D., 13/e (Addison Wesley)",
          "Physics for scientists and Engineers with Modern Phys. - Jewett J. W., Serway R. A. (Cengage)",
          "Theoretical Mechanics - Spiegel M.R. (Tata McGraw Hill)",
          "Special Theory of Relativity - S. Chand",
          "Relativity - Gupta & Kumar (Pragati Prakashan)"
        ]
      },
      {
        "courseTitle": "Statistical Mechanics",
        "courseCode": "MJCPHY11",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Basic knowledge of thermodynamic systems.",
          "CO2: Understand the basic idea about statistical distributions.",
          "CO3: Impart the knowledge about the phase transitions and potentials.",
          "CO4: Understand the applications of statistical laws.",
          "CO5: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "5",
          "units": [
            {
              "title": "Unit 1: Classical Statistics (15 Lectures)",
              "topics": [
                "Macrostate and Microstate, Phase Space, Elementary Concept of Ensemble, Entropy and Thermodynamic Probability.",
                "Maxwell-Boltzmann Distribution Law, Partition Function, Thermodynamic Functions of an Ideal Gas, Classical Entropy Expression, Gibbs Paradox, Sackur-Tetrode equation, Law of Equipartition of energy, its applications to Specific Heat and its Limitations."
              ]
            },
            {
              "title": "Unit 2: Classical Theory of Radiation (10 Lectures)",
              "topics": [
                "Black Body Radiation, Kirchhoff's law, Stefan-Boltzmann law (Thermodynamic proof), Radiation Pressure.",
                "Wien's Displacement Law. Wien's Distribution Law. Saha's Ionization Formula. Rayleigh-Jean's Law. Ultraviolet Catastrophe."
              ]
            },
            {
              "title": "Unit 3: Quantum Theory of Radiation (10 Lectures)",
              "topics": [
                "Spectral Distribution of Black Body Radiation. Planck's Quantum Postulates. Planck's Law of Blackbody Radiation: Experimental verification.",
                "Deduction of (1) Wien's Distribution Law, (2) Rayleigh-Jeans Law, (3) Stefan-Boltzmann Law, (4) Wien's Displacement Law from Planck's law."
              ]
            },
            {
              "title": "Unit 4: Bose-Einstein Statistics (10 Lectures)",
              "topics": [
                "Bose-Einstein distribution law, Thermodynamic functions of a strongly Degenerate Bose Gas, Bose Einstein condensation, Properties of liquid He (qualitative description), Radiation as a photon gas and Thermodynamic functions of photon gas. Bose derivation of Planck's law."
              ]
            },
            {
              "title": "Unit 5: Fermi-Dirac Statistics (15 Lectures)",
              "topics": [
                "Fermi-Dirac Distribution Law, Thermodynamic functions of a Completely and strongly Degenerate Fermi Gas, Fermi Energy, Electron gas in a Metal, Specific Heat of Metals, Relativistic Fermi gas, Chandrasekhar Mass Limit."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Statistical Mechanics, R.K. Patharia, Butterworth Heinemann: Oxford University Press",
          "Statistical Physics, Berkeley Physics Course, F. Reif, Tata McGraw-Hill",
          "An Introduction to Statistical Mechanics & Thermodynamics, R. H. Swendsen, Oxford Univ. Press",
          "Statistical Mechanics, Kerson Huang, Wiley India Pvt. Ltd.",
          "Statistical Mechanics, Agrawal & Eisner, Wiley Ind. Pub.",
          "Modern Thermodynamics with Statistical Mechanics, Carl S. Helrich (Springer)"
        ]
      },
      {
        "courseTitle": "Quantum Mechanics & its Application",
        "courseCode": "MJCPHY12",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Learn to represent quantum states by ket vectors, physical observables as operators and their time evolution.",
          "CO2: Understand commutator brackets between observables and their properties.",
          "CO3: Learn concept of system of identical non-interacting particles: dynamics of two level systems, qubits.",
          "CO4: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Wave-Particle duality (05 Lectures)",
              "topics": [
                "Need of quantum mechanics, de Broglie's theory of matter wave, concept of Wave Packet, Fourier transform and momentum-space wave function.",
                "Postulates of quantum mechanics, Explanation of Heisenberg's Uncertainty relation."
              ]
            },
            {
              "title": "Unit 2: Time Independent Schrodinger Wave Equation (10 Lectures)",
              "topics": [
                "Derivation of Time independent Schrodinger wave equation, Physical interpretation of wave function.",
                "Application of Time independent Schrodinger wave equation in case of Hydrogen atom, Linear harmonic oscillator, Potential Well, Potential Barrier."
              ]
            },
            {
              "title": "Unit 3: Formalism of Quantum Mechanics (10 Lectures)",
              "topics": [
                "Hilbert Space and Concept of Ket and Bra notations, Representation of position operator in momentum space.",
                "Representation of momentum-operator in position space, Representation of eigen-state vector in momentum space and position space."
              ]
            },
            {
              "title": "Unit 4: Time Dependent Schrodinger Wave Equation (10 Lectures)",
              "topics": [
                "Dynamical evolution of a quantum state, Properties of time-development operator, Derivation of dynamical equation for an operator of a quantum system and its Consequences.",
                "Comparative Study of Schrodinger picture, Heisenberg picture and interaction picture."
              ]
            },
            {
              "title": "Unit 5: Angular Momentum Operator (10 Lectures)",
              "topics": [
                "Orbital Angular momentum operator and its Commutation relation, Spin angular momentum operator and Pauli's spin matrices.",
                "Commutation relation of Pauli's spin matrices, ladder operator for total angular momentum operator and its Commutation relation, Spin-Orbit Coupling in atoms (L-S and J-J coupling), Bohr Magneton."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. Solve the Schrodinger equation for the ground state & the 1st excited state of Hydrogen atom.",
            "2. Solve the Radial equation for an atom.",
            "3. Estimate the Energy values of Linear harmonic oscillator with the given data.",
            "4. Estimate the Energy values in Potential Well having defined width & depth.",
            "5. Estimate the allowed Energy values of given Potential Barrier."
          ]
        },
        "suggestedBooks": [
          "Quantum Mechanics, Eugen Merzbacher, John Wiley and Sons, Inc.",
          "Quantum Mechanics, G. P. Singh (Pub: Bharti Bhavan)",
          "Quantum Physics, H. C. Verma (Pub: Surya Publication)",
          "Introduction to Quantum Mechanics, David J. Griffiths, Pearson Education",
          "Quantum Mechanics, Walter Greiner, Springer",
          "Quantum Mechanics, Bruce Cameron Reed, Jones and Bartlett Learning",
          "A Text book of Quantum Mechanics, P. M. Mathews and K. Venkatesan, McGraw Hill",
          "Quantum Mechanics, Leonard I. Schiff, Tata McGraw Hill",
          "Principle of Quantum Mechanics, Ishwar Singh Tyagi, Pearson Publication"
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Physics of Atoms and Nuclei",
        "courseCode": "MJCPHY13",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: To understand the idea of spectra of one and two valence electron atoms.",
          "CO2: To understand the effect of external fields on spectral lines.",
          "CO3: To understand the concept of vector atom model.",
          "CO4: To understand the structure of nucleus.",
          "CO5: To promote interdisciplinary research in spectroscopy and element analysis.",
          "CO6: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: H-spectra (10 Lectures)",
              "topics": [
                "Fine structure of hydrogen spectra (H_α-line), Wilson-Sommerfeld quantization rule, Problems related to Bohr theory, Bohr-Sommerfeld theory and Ionization Potentials.",
                "Bohr-Sommerfeld (B-S) theoretical explanation of fine structure H-spectra, shortcomings of B-S theory.",
                "Stern-Gerlach Experiment to demonstrate the existence of electron spin, Difference between spectra of inner core electron (X-ray spectra) and optically active valence electron (UV-Visible and I.R. Spectra)."
              ]
            },
            {
              "title": "Unit 2: Quantum Mechanics of H-atom (10 Lectures)",
              "topics": [
                "Physical interpretation and properties of wave-function, Quantum mechanical treatment of one-electron atomic system (Hydrogen atom).",
                "Solution of Schrodinger equation for Hydrogen atom using separation of variables, Associated Legendre Polynomial, Hypergeometric series, Recurrence Formula, Spherical Harmonics, Interpretation of quantum numbers and electron-probability density, Expectation value and parity of eigenfunctions."
              ]
            },
            {
              "title": "Unit 3: Concept of Vector Atom Model (08 Lectures)",
              "topics": [
                "Orbital magnetic dipole moment, Behaviour of magnetic dipole in external magnetic field, Larmor Precession, Space quantization, coupling of orbital and spin angular momentum, Spectroscopic term and their notations.",
                "Lamb Shift, Pauli's Exclusion Principle and wave function for identical particle system, Zeeman effect and Paschen Back effect for one electron system."
              ]
            },
            {
              "title": "Unit 4: Spectra of 1 and 2 Electron System (10 Lectures)",
              "topics": [
                "Spectra of 1 and 2 electron system (Alkali and Alkaline Earth Element): Feature and explanation of Spectra of Alkali elements, Resonance lines and fine structure in Alkali spectra, Intensity ratio of Na- doublet lines, Interaction energy for L-S and J-J coupling for Alkaline Earth elements."
              ]
            },
            {
              "title": "Unit 5: Nuclear Models & Reactions (10 Lectures)",
              "topics": [
                "Essence of Liquid drop model, Salient Features and Predictions of Shell model, Brief idea of Collective Model, Alpha particle model and Fermi gas model.",
                "Nuclear reaction and its types, Artificial Transmutation, Experimental determination of Q-value, Deuteron problem and its wavefunction, Central force and Non-Central force, Yukawa's model and π-meson."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. To determine e/m by Millikan's oil drop method.",
            "2. To draw the plateau curve for a GM count.",
            "3. To study Zeeman Effect.",
            "4. To study spectrum of simple atoms.",
            "5. To study H-line.",
            "6. To study Arc-Spectrum and its simulation Experiments."
          ]
        },
        "suggestedBooks": [
          "Physics of Atoms and Molecules - Bransden & Joachain (Pearson)",
          "Atomic and Molecular Physics: Raj Kumar (Kedarnath & Ram Nath)",
          "Concepts of Nuclear Physics by B L Cohen, Tata McGraw Hill Publication",
          "Physics and Engineering of Radiation Detection by S N Ahmed, Academic Press Elsevier",
          "Nuclear Physics: Roy & Nigam (Wiley Eastern Ltd.) - John Lilley (Wiley India)"
        ]
      },
      {
        "courseTitle": "Solid State Physics",
        "courseCode": "MJCPHY15",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Elucidate the concept of lattice, crystals and symmetry operations.",
          "CO2: Understand the elementary lattice dynamics and its influence on the properties of materials.",
          "CO3: Describe the main features of the physics of electrons in solids: origin of energy bands, and their influence electronic behavior.",
          "CO4: Explain the origin of the dielectric properties exhibited by solids and the concept of polarizability.",
          "CO5: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Unit 1: Crystal Structure (12 Lectures)",
              "topics": [
                "Solids: Amorphous and Crystalline Materials, Lattice and Basis, Bravais Lattices. Lattice Translation Vectors, Types of Bravais Lattices, Unit Cell. Miller Indices. Reciprocal Lattice, Brillouin Zones, Diffraction of X-rays by Crystals. Bragg's Law."
              ]
            },
            {
              "title": "Unit 2: Crystal Bonding & Elementary Lattice Dynamics (12 Lectures)",
              "topics": [
                "A. Crystal Bonding: Elementary idea of Bonding in Solids, Cohesive Energy of Ionic Crystals, Lennard Jones Potential.",
                "B. Elementary Lattice Dynamics: Lattice Vibrations and Phonons: Linear Monoatomic and Diatomic Chains, Acoustical and Optical Phonons, Dulong and Petit's Law, Einstein theory Debye theory of specific heat of solids, T³- law."
              ]
            },
            {
              "title": "Unit 3: Free Electron Theory & Elementary Band Theory (12 Lectures)",
              "topics": [
                "A. Free Electron Theory: Theory of free electron gas, Fermi surface, Fermi Energy, Density of States.",
                "B. Elementary Band Theory: Bloch Theorem. Kronig-Penny Model, Band Gap, Conductor, Semiconductor (P and N type) and insulator. Conductivity of Semiconductor, Measurement of conductivity (Four Probe Method), Mobility, Hall Effect & Hall coefficient."
              ]
            },
            {
              "title": "Unit 4: Magnetism, Superconductivity & Dielectrics (12 Lectures)",
              "topics": [
                "A. Magnetic Properties of Matter: Origin of magnetism, Langevin's theory of Diamagnetism and Paramagnetism. Ferromagnetism and Antiferromagnetism. Curie-Weiss law, Ferromagnetic Domains.",
                "B. Superconductivity: Critical Temperature, Critical Magnetic Field, Meissner effect. Type I and Type II Superconductors, London's Equation and Penetration Depth. Isotope effect, Idea of BCS theory (Basic Concept).",
                "C. Dielectric Properties of Materials: Polarization. Local Electric Field at an Atom, Depolarization Field, Electric Susceptibility, Polarizability, Clausius-Mossotti Equation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "topics": [
            "1. Measurement of susceptibility of paramagnetic solution (Quinck's Tube Method).",
            "2. To measure the Magnetic susceptibility of Solids.",
            "3. To determine the Coupling Coefficient of a Piezoelectric crystal.",
            "4. To measure the Dielectric Constant of a dielectric Materials with frequency.",
            "5. To determine the complex dielectric constant and plasma frequency of metal using Surface Plasmon resonance (SPR).",
            "6. To determine the refractive index of a dielectric layer using SPR.",
            "7. To study the PE Hysteresis loop of a Ferroelectric Crystal.",
            "8. To draw the BH curve of Fe using Solenoid & determine energy loss from Hysteresis.",
            "9. To measure the resistivity of a semiconductor (Ge) with temperature by four-probe method (room temperature to 150°C) and to determine its band gap.",
            "10. To determine the Hall coefficient of a semiconductor sample."
          ]
        },
        "suggestedBooks": [
          "Introduction to Solid State Physics, Charles Kittel, Wiley India Pvt. Ltd.",
          "Elements of Solid State Physics, J.P. Srivastava, Prentice-Hall of India",
          "Introduction to Solids, Leonid V. Azaroff, Tata McGraw Hill",
          "Solid-state Physics, H. Ibach and H. Luth, Springer",
          "Solid State Physics - R. L. Singhal, P.A. Alvi, (KedarNath, RamNath), M.A. Wahab (Narosa), S.O Pillai (New Age Pub)",
          "www.youtube.com/distinctphysics - Lecture videos"
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Research Methodology",
        "courseCode": "MJCPHY14",
        "credits": "5",
        "marks": "100",
        "note": "The Paper will be common for all students of faculty of Science. There is a common Syllabus for MJC - 14.",
        "theory": {
          "credits": "5",
          "units": [
            {
              "title": "Unit 1: Foundations of Scientific Research",
              "topics": [
                "Meaning, objectives, motivation, and types of research: Fundamental, Applied, Descriptive, Analytical, Qualitative & Quantitative.",
                "Research process: Problem identification, Formulation of research hypothesis, Research design and framework development.",
                "Literature survey: Primary and secondary sources, indexing databases (Scopus, Web of Science, Google Scholar), citation metrics (h-index, i10-index, Impact Factor)."
              ]
            },
            {
              "title": "Unit 2: Quantitative Data Analysis & Statistical Techniques",
              "topics": [
                "Types of data, sampling methods, sample size determination, errors in measurement and propagation of errors.",
                "Statistical tests: Student's t-test, Chi-square test, F-test, ANOVA (one-way and two-way), correlation and regression analysis.",
                "Software tools for scientific computing, curve fitting, and statistical data visualization (MATLAB / Python / Origin / R)."
              ]
            },
            {
              "title": "Unit 3: Scientific Communication & Thesis Writing",
              "topics": [
                "Structure of a scientific research paper: Title, Abstract, Keywords, Introduction, Materials & Methods, Results & Discussion, Conclusions, References.",
                "Standard citation styles (IEEE, AIP, APA, Vancouver), Reference management software (Mendeley, Zotero).",
                "Technical writing using LaTeX: Document classes, mathematical formatting, tables, figures, bibliography generation with BibTeX.",
                "Oral and poster presentation techniques in conferences and symposia."
              ]
            },
            {
              "title": "Unit 4: Research Ethics, IPR & Publication Integrity",
              "topics": [
                "Research ethics: Plagiarism, fabrication, falsification, and questionable research practices; Plagiarism detection tools (Turnitin, Urkund).",
                "Intellectual Property Rights (IPR): Patents, Copyrights, Trademarks, Industrial Designs, Geographical Indications.",
                "Patent filing process in India and PCT; Open access publishing, predatory journals, UGC-CARE list."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Physics of Laser and Molecules",
        "courseCode": "MJCPHY16",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: To understand the working of LASER- Sources.",
          "CO2: To understand the applications of different types of LASER in day to day life.",
          "CO3: To understand the concept of formation of Molecule.",
          "CO4: To understand the mechanism of spin Resonance Spectroscopy.",
          "CO5: To learn the working of Opto-electronic and Photonic devices.",
          "CO6: To enhance the employability in the field of optics.",
          "CO7: To explore research in the area of photonics.",
          "CO8: Get background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Basic Theory of LASER (12 Lectures)",
              "topics": [
                "Energy levels and process of Absorption and Emission, Einstein's Predication, Difference between spontaneous and stimulated emission, Important features of stimulated emission Einstein's A and B Co-efficient.",
                "Light Amplification condition for enhanced stimulated emission, population inversion and pumping method and schemes (two level, three level and four level): Amplifier and Optical Resonator with threshold condition for Lasing."
              ]
            },
            {
              "title": "Unit 2: Applications of LASER (14 Lectures)",
              "topics": [
                "Application of LASER in Holography, Concept of Temporal and Spatial Coherence, Principle method of generating and observing hologram, types of holograms.",
                "Application in consumer electronic industry (Barcode reader and its elements), in communication-basic principle and element of optical fiber communication. Numerical aperture of fiber optics cables.",
                "In medical science, LASER diagnostics, LASER in ophthalmology and LASIK, LASER-surgery and LASER in Dermatology."
              ]
            },
            {
              "title": "Unit 3: Molecular Structure & Bonding (10 Lectures)",
              "topics": [
                "Concept of molecule, Basic idea of molecular bonding-ionic Non-Rigid rotator and covalent formation of molecules, Morse potential energy curve, Molecule as oscillator, Concept of dissociation, wave function of H₂⁺ Valence bond, Linear Combination of Atomic Orbitals (L.C.A.O.) concept."
              ]
            },
            {
              "title": "Unit 4: Hamiltonian of Molecule Theory & Spectra (12 Lectures)",
              "topics": [
                "Hamiltonian of molecule theory, Separation of electronic and nuclear motion (Born-Oppenheimer approximation), Types of molecular energy states- vibrational, rotational and electronic.",
                "Types of molecular spectra- UV, IR, Raman; flame spectroscopy and flame photometry, X-Ray and Mossbauer spectroscopy."
              ]
            },
            {
              "title": "Unit 5: Molecular Spectroscopic Techniques (12 Lectures)",
              "topics": [
                "Different Molecular spectroscopic techniques as a Tool: Atomic absorption spectroscopy, Emission spectroscopy, Molecular Luminescence, Photo and Opto-acoustic spectroscopy (PAS/OAS).",
                "Nuclear Magnetic Resonance (NMR), Nuclear Quadrupole Resonance (NQR), Electron Spin Resonance (ESR) and Electron diffraction spectroscopy."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. To verify Beer-Lambert law.",
            "2. To detect impurity in given sample using spectrophotometer.",
            "3. To determine speed light in air in Lab.",
            "4. To calculate / evaluate the Numerical aperture of given fiber.",
            "5. To use basic Transmission network using Demonstration Kit.",
            "6. To study Characteristics of LASER.",
            "7. To study UV/IR- Spectrum of given sample."
          ]
        },
        "suggestedBooks": [
          "Quantum Chemistry - R.K. Prasad (New Age International (P) Ltd.)",
          "Physics of Atoms and Molecules - B. H. Bransden and C. J. Joachain",
          "Molecular Structure & Spectroscopy - G. Aruldhas (PHI)",
          "Molecular Spectroscopy - B.K Sharma (Goel Publishing House)",
          "Laser Principle: Types & Application - K.R. Nambiar (New Age Publication)",
          "Laser & Optics - L.V. Tarasov (Mir) / Introduction Laser: Theory & Application - M.N. Avdhanulu & P.S Hemne (S. Chand)"
        ]
      }
    ]
  },
  "MIC": {
    "1st": [
      {
        "courseTitle": "Introduction to Mathematical Physics & Classical Mechanics",
        "courseCode": "MIC-1",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit I: Introduction to Calculus & Vector (15 hrs / 01 Credit)",
              "topics": [
                "Differential calculus: Geometric Meaning of derivative; Maxima & Minima; Approximation of derivative; Partial Differentiation.",
                "Integral Calculus: Geometric Meaning of integration, order and degree of differential equation, Solution of First order (homogeneous & Non-homogeneous), Integrating Factor, Exact and Inexact Differentials.",
                "Recapitulation of Vectors, Vector Algebra involving two and three vectors, Introduction to Gradient, Divergence, Curl of Vectors with their physical significance."
              ]
            },
            {
              "title": "Unit II: Fundamentals of Dynamics (15 hrs / 01 Credit)",
              "topics": [
                "Inertial and Non-Inertial Frame of Reference, Rotating frame, Fictitious Forces- Centrifugal and Coriolis Forces with their applications (Effect on value of 'g', On path of freely falling body).",
                "Introduction to special theory of relativity & its postulates."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "H. Goldstein, C. P. Poole and J. F. Safko, Classical Mechanics, Addison-Wesley",
          "N. C. Rana and P. S. Joag, Classical Mechanics, Tata McGraw-Hill",
          "L. D. Landau and E. M. Lifshitz, Mechanics, Butterworth-Heinemann",
          "S. L. Gupta, V. Kumar and H. V. Sharma, Classical Mechanics, Pragati Prakashan",
          "R. D. Gregory, Classical Mechanics, Cambridge University Press",
          "Classical mechanics - J.C. Upadhyay",
          "Classical mechanics - A.B Gupta"
        ],
        "practical": {
          "credits": "1",
          "note": "The theory involved in the prescribed practical should be discussed in class and students should be made familiar with associated concepts.",
          "topics": [
            "1. Elementary measuring apparatus — Use of Vernier calliper, Screw guage and Spherometer.",
            "2. To determine least Count of (i) Travelling Microscope (ii) Spectrometer (iii) Polarizer.",
            "3. To Evaluate value of 'g' using Bar Pendulum.",
            "4. To Evaluate value of 'g' using Kater's Pendulum.",
            "5. To Verify Conservation of linear Momentum using curved track apparatus.",
            "6. To Determine Young's modulus of Elasticity by Flexure of Beam.",
            "7. To Determine Elastic constants for the material of a wire by Searle's method.",
            "8. To Determine Surface Tension by method of ripples/use of Capillary tube.",
            "9. To Determine Co-efficient of Viscosity of liquid by Stokes method/Poiseuille's method of flow of water through Capillary.",
            "10. To study the motion of spring-mass system and to evaluate spring constant/value of 'g'."
          ],
          "evaluationScheme": [
            {
              "component": "Experiment Allotted",
              "cia": "15",
              "endSem": "45",
              "total": "60"
            },
            {
              "component": "Continuous Practical Record",
              "cia": "05",
              "endSem": "10",
              "total": "15"
            },
            {
              "component": "Viva-Voce",
              "cia": "10",
              "endSem": "15",
              "total": "25"
            }
          ]
        }
      }
    ],
    "2nd": [
      {
        "courseTitle": "Oscillations and Waves",
        "courseCode": "MIC-2",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: Understand the concept of Periodic and Oscillatory motion with application of free, Damped and Forced Oscillation in Physical Situation.",
          "CO 2: Learn application of Lissajou Figure in different Physical Problems.",
          "CO 3: Explore the working of various Musical Instrument.",
          "CO 4: Understand the Physics behind Acoustics of Building.",
          "CO 5: Know the technique of sound Recording and Reproduction."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit I: Basics of Oscillations (15 hrs / 01 Credit)",
              "topics": [
                "Idea of S.H.M, Free, Damped & Forced Oscillation, Superposition of two collinear and Perpendicular Simple Harmonic motion, Concept of Lissajous Figure & Stationary Waves."
              ]
            },
            {
              "title": "Unit II: Wave Motion & Sound (15 hrs / 01 Credit)",
              "topics": [
                "Waves Characteristic of Wave Motion, Sound Wave, Equation of Plane Progressive Waves, Speed of sound (Newton's & Laplace Formula), Energy Transport & Intensity of Waves."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "The Physics of Vibrations and Waves, H. J. Pain, John Wiley & Sons Ltd.",
          "The Physics of Waves and Oscillations, N.K. Bajaj, 1998, Tata McGraw Hill",
          "Waves and Oscillations, N Subrahmanyam, Brij Lal, Vikas Publishing House Pvt Ltd.",
          "Waves & Oscillation - B.S. Agrawall",
          "Waves & Oscillation - A.B Gupta"
        ],
        "practical": {
          "credits": "1",
          "note": "At least 6 experiments must be performed.",
          "topics": [
            "1. To determine frequency of Tuning Fork using Sonometer / verify laws of transverse vibration of stretched string.",
            "2. To determine frequency of Tuning Fork using Electrically maintained Melde's apparatus.",
            "3. To determine the frequency of A. C. Mains using a sonometer and an electromagnet.",
            "4. To Find the speed of sound in the materials of given rod with a Kundt's tube / Quincke's tube.",
            "5. To determine speed of ultrasonic waves in a given liquid (e.g. Kerosene).",
            "6. To study motion of spring-mass system and find g.",
            "7. To study the directional characteristic of Microphone using signal Generator, Amplifier, microphone, multimedia & C. R. O.",
            "8. To determine the damping constant, relaxation time and quality factor of damped simple pendulum with bobs of different material (Aluminum, Brass, Wood, etc.).",
            "9. To determine torsional constant using a Torsional Pendulum.",
            "10. To determine speed of sound using Resonance column Apparatus."
          ],
          "evaluationScheme": [
            {
              "component": "Experiment Allotted",
              "cia": "15",
              "endSem": "45",
              "total": "60"
            },
            {
              "component": "Continuous Practical Record",
              "cia": "05",
              "endSem": "10",
              "total": "15"
            },
            {
              "component": "Viva-Voce",
              "cia": "10",
              "endSem": "15",
              "total": "25"
            }
          ]
        }
      }
    ],
    "3rd": [
      {
        "courseTitle": "Thermal Physics & Thermodynamics",
        "courseCode": "MICPHY03",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Comprehended the basic concepts of thermodynamics, the first and the second law of thermodynamics.",
          "CO2: Understand the concept of entropy and the associated theorems, the thermodynamic potentials and their physical interpretations.",
          "CO3: Learn about Maxwell's relations and use them for solving many problems in Thermodynamics.",
          "CO4: Learn the basic aspects of kinetic theory of gases, Maxwell-Boltzmann distribution law, equipartition of energy, mean free path of molecular collisions, viscosity, thermal conductivity, diffusion and Brownian motion."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit 1: Kinetic Theory of Gases (10 Lectures)",
              "topics": [
                "Maxwell-Boltzmann Molecular Speed distribution Law for an Ideal Gas. Mean, RMS and Most Probable Speeds. Degrees of Freedom. Law of Equipartition of Energy (no derivation).",
                "Molecular Collisions: Mean Free Path. Estimation of Mean Free Path. Transport Phenomenon in Ideal Gases: (1) Viscosity, (2) Thermal Conductivity and (3) Diffusion.",
                "Brownian motion, Langevin and Einstein's theories and experimental determination of Avogadro's no., Rectilinear flow of heat in a metal rod, relation between thermal & electrical conductivities."
              ]
            },
            {
              "title": "Unit 2: Real Gases (08 Lectures)",
              "topics": [
                "Behavior of Real Gases. Van der Waal's Equation of State for Real Gases. Values of Critical Constants. Law of Corresponding States.",
                "Joule-Thomson Porous Plug Experiment. Joule-Thomson Effect for Real Gases. Joule-Thomson Cooling."
              ]
            },
            {
              "title": "Unit 3: Zeroth and First Law of Thermodynamics (05 Lectures)",
              "topics": [
                "Extensive and intensive Thermodynamic Variables, Thermodynamic Equilibrium, Zeroth Law of Thermodynamics and Concept of Temperature.",
                "Work, Heat, State Functions and path functions, First Law of Thermodynamics, Internal Energy for ideal and real gases.",
                "Applications of First Law of thermodynamics in case of thin film, stretched wire, hydrostatics, and specific Molar Heat Capacity for gases, Specific heat General Relation between Cp and Cv."
              ]
            },
            {
              "title": "Unit 4: Second Law of Thermodynamics (07 Lectures)",
              "topics": [
                "Cyclic, reversible and irreversible process, Carnot engine, Carnot cycle, Principle of Refrigerator. Second Law of thermodynamics. Principal of heat engine and refrigerator Kelvin-Planck and Clausius Statements.",
                "Concept of Entropy, Clausius Inequality, Second Law in terms of Entropy, Temperature-Entropy diagrams. Third Law of thermodynamics.",
                "Thermodynamic Potentials: Internal Energy, Enthalpy, Helmholtz & Gibb's Functions, Maxwell's Relations, Co-efficient of performance, Clausius-Clapeyron equation and phase transition (1st and 2nd)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. To determine Mechanical Equivalent of Heat, J, by Callender and Barne's constant flow method.",
            "2. To determine the Coefficient of Thermal Conductivity of good conductor (Cu) by Searle's Apparatus.",
            "3. To determine the Temperature Coefficient of Resistance by Platinum Resistance Thermometer (PRT).",
            "4. To study the variation of Thermo-emf of a Thermocouple with Difference of Temperature of its Two Junctions using a null method.",
            "5. To determine Mechanical Equivalent of Heat, J, with the help of Joule's calorimeter.",
            "6. To plot a graph between temperature and pressure at constant volume using Joly's apparatus and to find the coefficient of increase of pressure at constant volume."
          ]
        },
        "suggestedBooks": [
          "Thermal Physics, S. Garg, R. Bansal and C. Ghosh, 1993, Tata McGraw-Hill",
          "Heat and Thermodynamics, M.W. Zemansky, Richard Dittman, 1981, McGraw-Hill",
          "A Treatise on Heat, Meghnad Saha, and B.N. Srivastava, 1958, Indian Press",
          "Classical and Quantum Thermal Physics, R. Prasad, 2016, Cambridge University Press",
          "Modern Thermodynamics with Statistical Mechanics, Carl S. Helrich, 2009, Springer",
          "Thermodynamics, Kinetic Theory & Statistical Thermodynamics, Sears & Salinger, 1988, Narosa",
          "Thermal Physics, Thermodynamics S.C Garg, R.M Bansal & C. K. Ghosh",
          "Theory and Experiment on Thermal Physics: P.K. Chakrabarti, New Central Book Agency (P) Ltd",
          "Thermodynamics: J.P Aggrawal & Satya Prakash",
          "Advanced Practical Physics for students: B. L. Flint and H.T. Worsnop (Little Hampton Book)",
          "B.Sc. Practical Physics: C.L. Arora (S. Chand)",
          "Practical Physics: G.L. Squires (Cambridge University Press)"
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Electricity & Magnetism",
        "courseCode": "MICPHY04",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand the basic concepts of electrostatics.",
          "CO2: Understand the dielectric properties of matter.",
          "CO3: Understand the electromagnetic induction and electrical circuits."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit 1: Electrostatics (08 Lectures)",
              "topics": [
                "Coulomb's law. Electric Field and potential, Field due to a uniformly charged sphere, Gauss's Law and its application: Electric dipole, Field and potential due to an electric dipole.",
                "Electrostatic Energy of a uniformly charged sphere, Energy of a condenser."
              ]
            },
            {
              "title": "Unit 2: Dielectric Properties of Matter (06 Lectures)",
              "topics": [
                "Electrical susceptibility and Dielectric constant, Polarization, Electronic polarization, Atomic or ionic Polarisation, Surface Charge and bound charge, Displacement Vector D, Relations between E, P and D."
              ]
            },
            {
              "title": "Unit 3: Magnetism & Electromagnetic Induction (10 Lectures)",
              "topics": [
                "Magnetic field, Magnetic force on a current carrying conductor placed in a uniform magnetic field, Biot-Savart's Law and its simple applications: straight wire and circular loop, Magnetic Dipole, and Ampere's Circuital law.",
                "Gauss's law of magnetism (Integral and Differential Forms). Magnetization current. Relative Permeability of a Material. Magnetic Susceptibility. Magnetization Vector (M), Magnetic Intensity (H), Relation between B, M and H.",
                "Electromagnetic Induction: Faraday's and Lenz's Laws. Mutual and Self Induction and their determination for a solenoid. Energy stored in a Magnetic Field, Induced magnetic field (Time varying electric field)."
              ]
            },
            {
              "title": "Unit 4: Electrical Circuits (06 Lectures)",
              "topics": [
                "AC Circuits: Kirchhoff's laws for AC circuits. Reactance and Complex Impedance.",
                "Series and parallel LCR Circuit: (1) Resonance, (2) Quality Factor, and (3) Band Width. Power in AC Circuits."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. Use of Multimeter for measuring (a) Resistance, (b) AC and DC Voltages, (c) DC Current, (d) Capacitance, and (e) Checking electrical fuses.",
            "2. To calibrate the ammeter and voltmeter by potentiometer.",
            "3. To find the low resistance by Carey Foster's bridge after calibrating the bridge wire.",
            "4. Measurement of low resistance using Potentiometer.",
            "5. Figure of merit of moving coil galvanometer.",
            "6. To determine the angle of dip in the laboratory using an earth inductor.",
            "7. Compare the capacities of capacitors by De Sauty' bridge.",
            "8. To verify the Thevenin and Norton theorems.",
            "9. To verify the Superposition, and Maximum power transfer theorems.",
            "10. To determine self inductance of a coil by Anderson's bridge.",
            "11. To study the response curve of a Series LCR circuit and determine its resonance frequency."
          ]
        },
        "suggestedBooks": [
          "Electricity and Magnetism, Basudev Ghosh (Books And Allied (P) Ltd)",
          "Introduction to Electrodynamics, D.J. Griffiths, 3rd Edn., 1998, Benjamin Cummings",
          "Electricity and Magnetism",
          "Fundamentals of Electricity and Magnetism, Arthur F. Kip, 2nd Edn. 1981, McGraw-Hill",
          "Electricity, Magnetism & Electromagnetic Theory, S. Mahajan and Choudhury, 2012, Tata McGraw-Hill",
          "Fundamentals of Electricity and Magnetism D.N Vasudev (S. Chand & Co)",
          "Electricity and Magnetism- R. Murugeshan (S. Chand)",
          "Electricity and Magnetism-K.K. Tiwari (S. Chand)"
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Mathematical Physics-II and Introduction to Computational Methods",
        "courseCode": "MICPHY05",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master the basic elements of complex mathematical analysis.",
          "CO2: Solve differential equations that are common in physical sciences.",
          "CO3: Apply group theory and integral transforms to solve mathematical problems of interest in Physics.",
          "CO4: Understanding how to use special functions in various physics problems.",
          "CO5: Provides background for further studies and research in different subject areas."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit 1: Curvilinear Coordinates, Tensors and Special Functions (06 Lectures)",
              "topics": [
                "Spherical and Cylindrical Coordinate Systems. Ordinary Integrals of Vectors, Line, surface and volume integrals of Vector fields.",
                "Second Order Linear Differential Equation and its solution using Frobenius method."
              ]
            },
            {
              "title": "Unit 2: Partial Differential Equations (06 Lectures)",
              "topics": [
                "Solutions to partial differential equations using separation of variables: Laplace's Equation in problems of rectangular, cylindrical and spherical symmetry."
              ]
            },
            {
              "title": "Unit 3: Introduction to Computers, Algorithms & Flow Charts (06 Lectures)",
              "topics": [
                "Importance of Computers in Physics, Algorithms and Flow Charts: Algorithm Definition, properties and development. Flowchart: concept of flowchart, symbols, guidelines, types."
              ]
            },
            {
              "title": "Unit 4: Scientific Programming in FORTRAN (06 Lectures)",
              "topics": [
                "Basic ideas of Linux, some fundamental Linux commands (Internal & External commands), FORTRAN: Basic ideas for development of FORTRAN Programming.",
                "Layout of FORTRAN programs, writing of simple FORTRAN programs and concept of coding."
              ]
            },
            {
              "title": "Unit 5: Control statements (06 Lectures)",
              "topics": [
                "Introduction of Subscripted variables, Functions and Subroutines (Arithmetic statements, Function, Function subprogram and subroutine), and their usage in programs of simple Physics Problems."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. Errors & error Analysis: Truncation & rounding of errors, absolute & relative errors.",
            "2. Differential equations: Solutions of ordinary differential equation, solution of first order differential equation, solution of quadratic equation.",
            "3. Programs: Sum & average of a list of numbers, Largest of a given list of numbers, Familiarity with DOS commands, Linux Commands and FORTRAN commands."
          ]
        },
        "suggestedBooks": [
          "Introduction to Numerical Analysis: S. S Sastry",
          "Mathematical Methods for Scientists & Engineers: D.A. McQuarrie (Pub. Viva Books)",
          "An Introduction to Computational Physics: T. Pang (Cambridge University Press)",
          "Numerical Recipes in C: The Art of Scientific Computing, W.H. Pressetal (Cambridge University)"
        ]
      },
      {
        "courseTitle": "Electrodynamics and Electromagnetism",
        "courseCode": "MICPHY-06",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Establish and analyse four Maxwell's equations of electromagnetism.",
          "CO2: Understand the propagation of electromagnetic waves in vacuum, dielectrics, conductors and also in guided media and the phenomenon of reflection and refraction of plane waves at different boundaries.",
          "CO3: Understand the importance of energy flow (Poynting Theorem) and its usefulness."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Maxwell's Equations (07 Lectures)",
              "topics": [
                "Equation of continuity, Maxwell's equations in differential and Integral forms; Vector and scalar potentials.",
                "Poynting Theorem and Poynting Vector. Electromagnetic (EM) Energy Density. Physical Concept of Electromagnetic Field Energy Density."
              ]
            },
            {
              "title": "Unit 2: EM Wave Propagation in unbounded media (07 Lectures)",
              "topics": [
                "Propagation of plane EM waves in free space. Transverse nature of plane EM waves, refractive index and dielectric constant, wave impedance. Propagation of EM wave through conducting media."
              ]
            },
            {
              "title": "Unit 3: EM Wave Propagation in Bounded Media (06 Lectures)",
              "topics": [
                "Boundary conditions at a plane interface between two media. Reflection & Refraction of plane waves at plane interface between two dielectric media — Laws of Reflection & Refraction, Total internal reflection."
              ]
            },
            {
              "title": "Unit 4: Polarization, Wave Guides & Optical Fibres (10 Lectures)",
              "topics": [
                "Polarization of Electromagnetic Waves: Description of Linear, Circular and Elliptical Polarization.",
                "Wave Guides: Condition of continuity at interface. Phase shift on total reflection. Solution of wave equation in Rectangular waveguide, Eigenvalue equations. Expressions for field components (TE and TM modes). Propagation properties, cutoff frequency, group & phase velocity of guided waves.",
                "Optical Fibres: Numerical Aperture. Step and Graded Indices (Definitions Only). Single and Multiple Mode Fibres (Concept and Definition Only)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Introduction to Electrodynamics, D.J. Griffiths, 3rd Ed., 1998, Benjamin Cummings",
          "Elements of Electromagnetics, M.N.O. Sadiku, 2001, Oxford University Press",
          "Introduction to Electromagnetic Theory, T.L. Chow, 2006, Jones & Bartlett Learning",
          "Fundamentals of Electromagnetics, M.A.W. Miah, 1982, Tata McGraw Hill",
          "Electromagnetic field Theory, R. S. Kshetrimayun, 2012, Cengage Learning",
          "Electromagnetic Field Theory for Engineers & Physicists, G. Lehner, 2010, Springer",
          "Electromagnetic Fields & Waves, P. Lorrain & D. Corson, 1970, W.H. Freeman & Co.",
          "Electromagnetics, J. A. Edminster, Schaum Series, 2006, Tata McGraw Hill"
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Elements of Modern Physics",
        "courseCode": "MICPHY08",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Main aspects of the inadequacies of classical mechanics as well as understanding of the historical development of quantum mechanics.",
          "CO2: Formulation of Schrodinger equation and the idea of probability interpretation associated with wave-functions.",
          "CO3: The spontaneous and stimulated emission of radiation, optical pumping and population inversion. Three level and four level lasers. Ruby laser and He-Ne laser in details. Basic lasing.",
          "CO4: The properties of nuclei like density, size, binding energy, nuclear forces and structure of atomic nucleus, liquid drop model and nuclear shell model and mass formula."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Wave-Particle Duality (12 Lectures)",
              "topics": [
                "Hertz Experiment and Discovery of Photoelectric effect; Explanation of Photoelectric effect by Einstein; Wave nature of particle; Historical perspectives of de Broglie's Matter wave; Heisenberg's Uncertainty principle."
              ]
            },
            {
              "title": "Unit 2: Understanding Atom (12 Lectures)",
              "topics": [
                "Different Atomic models; alpha particle scattering experiment performed by Geiger and Marsden, Rutherford's nuclear Model of atom; Bohr's Model and spectrum of hydrogen atom, Limitations of Bohr's Theory; Fine structure of H-lines."
              ]
            },
            {
              "title": "Unit 3: Basic properties of atomic nucleus (12 Lectures)",
              "topics": [
                "Mass number, Mass Defect, Binding Energy. Binding Energy per nucleon versus Mass Number Curve; Concept of Nuclear forces; Stability of Nucleus Radioactivity, Law of Radioactive Disintegration. Application of radioactivity in Carbon-Dating and Therapy."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Concepts of Modern Physics, Arthur Beiser, 2002, McGraw-Hill",
          "Modern Physics by R. A. Serway, C. J. Moses and C. A. Moyer, 3rd edition, Thomson Brooks Cole, 2012",
          "Modern Physics for Scientists and Engineers by S. T. Thornton and A. Rex, 4th edition, Cengage Learning, 2013",
          "Concepts of Nuclear Physics by B. L. Cohen, Tata McGraw Hill Publication, 1974",
          "Quantum Mechanics, Robert Eisberg and Robert Resnick, 2nd Edn., 2002, Wiley"
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Optics",
        "courseCode": "MICPHY07",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand Interference as superposition of waves from coherent sources derived from same parent source.",
          "CO2: Demonstrate basic concepts of Diffraction: Superposition of wavelets diffracted from aperture.",
          "CO3: Understand Fraunhofer and Fresnel Diffraction.",
          "CO4: Gain experience of using various optical instruments and making finer measurements of wavelength of light using Newton's Rings experiment, Fresnel Biprism, etc."
        ],
        "theory": {
          "credits": "2",
          "units": [
            {
              "title": "Unit 1: Interference (07 Lectures)",
              "topics": [
                "Light as EM Wave (Historical Perspective), Superposition of waves, Conditions for interference, Interference by Division of Wavefront (Lloyd's single mirror) and by Division of Amplitude Newton's Ring, Stoke's treatment."
              ]
            },
            {
              "title": "Unit 2: Interferometer (06 Lectures)",
              "topics": [
                "Michelson interferometer and its applications, Multiple beam interference in parallel film, Coherence — Spatial and Temporal."
              ]
            },
            {
              "title": "Unit 3: Fraunhofer & Fresnel Diffraction (08 Lectures)",
              "topics": [
                "Fraunhofer Diffraction: Conditions for diffraction, Fraunhofer diffraction due to single, Plane transmission grating.",
                "Fresnel diffraction: Fresnel half-period zones, Zone plate, Huygen's-Fresnel principle, Diffraction by a straight edge, Rayleigh's criterion for limit of resolution, Resolving power of Grating, Telescope."
              ]
            },
            {
              "title": "Unit 4: Polarization, Double Refraction & Elementary LASERs (07 Lectures)",
              "topics": [
                "Polarized light and its mathematical representation, Production of polarized light by reflection, refraction and scattering, Polarization by double refraction, Nicol prism, Quarter wave plate, Half wave plate, Babinet's compensator, Production and analysis of circularly and elliptically polarized light.",
                "Elementary ideas of LASERs, Population Inversion and Holography."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. To determine Magnifying Power of a telescope by the Linear Scale.",
            "2. To find the height of an inaccessible object (altitude or angular diameter of the Sun) using Sextant.",
            "3. To find angle of prism/ angle of minimum deviation and hence refractive index of material of prism using Spectrometer.",
            "4. To determine diameter of a thin wire by studying the diffraction (and interference) pattern.",
            "5. To determine wavelength of sodium light using a plane diffraction grating.",
            "6. To determine Resolving Power of a plane transmission grating.",
            "7. Simple experiment demonstrating different applications of LASER and Optical Fibre.",
            "8. Determination of wavelength of light using biprism on optical bench.",
            "9. To determine the wavelength of the monochromatic light by Newton's Ring."
          ]
        },
        "suggestedBooks": [
          "Optics(Classical & Quantum)-Dr. R.K.Kar(Books & Allied)",
          "Optics:(2017), 6th Edition, Ajoy Ghatak, McGraw-Hill Education, New Delhi",
          "Fundamental of Optics: Jenkins & White (McGraw Hill)",
          "Fundamental of Optics: B. K. Mathur",
          "A TextBook of Optics : N. Subrahmanyam, Brij V. Lal, M.N. Avadhanulu, S. Chand & Co Ltd",
          "Practical Physics :Geeta Sanon(R.Chand& Company); Harnam Singh & P.S. Hemne(S.Chand& Co.)",
          "A Text Book of Practical Physics: Indu Prakash, Ramakrishna&A.K.Jha, 11th Ed., 2011, Kitab Mahal",
          "Advanced level Physics Practicals: Michael Nelson and Jon M. Ogborn, 4th Edition, reprinted 1985, Heinemann Educational Publishers",
          "A Laboratory Manual of Physics for undergraduate classes: D.P.Khandelwal, 1985, Vani Pub.",
          "Practical Physics: G.L. Squires, Cambridge University Press",
          "A Laboratory Manual of Physics - D.P.Khandewal",
          "Optics- Eugene Hecht(Pearson)"
        ]
      },
      {
        "courseTitle": "Basic Electronics",
        "courseCode": "MICPHY09",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand fundamental designing concepts of different types of Logic Gates, Minimization techniques etc.",
          "CO2: Design of different types of the Digital circuits, and to give the computational details for Digital Circuits.",
          "CO3: Draw characteristics of devices like PNP and NPN junction diode and truth tables of different logic gates.",
          "CO4: Understand basic elements and measurement of their values with multimeter and their characteristic study."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Digital Circuits (07 Lectures)",
              "topics": [
                "Difference between Analog & Digital Circuits. Binary Numbers. Decimal to Binary & vice-versa. AND, OR and NOT Gates (Realisation using Diodes & Transistors) NAND and NOR Gates as Universal gates. XOR Gates."
              ]
            },
            {
              "title": "Unit 2: Basic Circuit Operations (12 Lectures)",
              "topics": [
                "De-Morgan's Theorem, Boolean Laws, Simplification of Logic Circuit using Boolean Algebra. Conversion of a Truth Table into an Equivalent Logic Circuit by (1) Sum of Products Method.",
                "Combinational circuits: Basic idea of Binary Addition. Binary Subtraction using 2's Complement. Half and Full Adders."
              ]
            },
            {
              "title": "Unit 3: Semiconductor Devices & Applications (10 Lectures)",
              "topics": [
                "P-and N-type semiconductors. Energy Level Diagram. Barrier Formation in PN Junction Diode. Qualitative Idea of Current Flow Mechanism in Forward and Reverse Biased Diode. P-N junction & its characteristics. Static and Dynamic Resistance.",
                "Principle and structure of (1) LEDs (2) Photodiode (3) Zener Diode (4) Solar Cell.",
                "Electronic Devices and their Applications: (1) Rectifier Diode: Half-wave Rectifiers. Full-wave Rectifiers (Centre-tapped and Bridge), Calculation of Ripple Factor and Rectification Efficiency, (2) Voltage Regulation using Zener Diode.",
                "Bipolar Junction transistors: n-p-n and p-n-p Transistors, Characteristics of CB, CE and CC Configurations. Current gains α and β parameters, Relations between α and β parameters. Load Line analysis of Transistors. DC Load line and Q-point. Physical Mechanism of Current Flow: Active, Cutoff and Saturation Regions.",
                "Amplifiers: Transistor Biasing circuits and Stability. Fixed Bias and Voltage Divider Bias circuit for CE Amplifier. Input and Output Impedance. Current, Voltage and Power Gains. Class A."
              ]
            },
            {
              "title": "Unit 4: Sinusoidal Oscillations (07 Lectures)",
              "topics": [
                "Feedback and Oscillation: Effects of Positive and Negative Feedback on Gain and Stability, Distortion and Noise. Sinusoidal Oscillators: Barkhausen's Criterion for self-sustained oscillations. RC and Wien Bridge oscillator."
              ]
            },
            {
              "title": "Unit 5: Instrumentations & Power Supply (09 Lectures)",
              "topics": [
                "Introduction to CRO: Block Diagram and Applications of CRO: (1) Study of Waveform (2) Measurement of Voltage, Current, Frequency and Phase Difference.",
                "Power Supply: Half Wave Rectifiers, Centre-tapped and Full wave Rectifiers, Calculation of Ripple Factor and Rectification Efficiency, Basic Idea about capacitor filter, Zener Diode and Voltage Regulation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "topics": [
            "1. To measure (a) Voltage and (b) Time period of a periodic waveform using CRO.",
            "2. To test a Diode and Transistor using a Multimeter.",
            "3. To design a switch (NOT gate) using a transistor.",
            "4. To verify and design AND, OR, NOT and XOR gates using NAND gates.",
            "5. Half Adder, Half Subtractor and 4-bit Binary Adder.",
            "6. To study V-I characteristics of P-N junction, Zener and Light emitting diode.",
            "7. To study the characteristics of a Bipolar Junction Transistor in CE configuration."
          ]
        },
        "suggestedBooks": [
          "Electronic Principles & Applications: A.P. Malvino, D.P. Leach and Saha (McGraw Hill)",
          "Modern Digital Electronics - R.P. Jain, Tata McGraw Hill, 4th Edition",
          "Principles of Electronics: V.K. Mehta & Rohit Mehta (S. Chand & Comp)",
          "Basic Electronics Devices: D.P. Kothari & I J Nagrath (McGraw Hill Educ)",
          "Hand Book of Electronics - Gupta & Kumar",
          "Foundation of Electronics - Chattopadhyay, Rakshit, Saha, Purikait (Wiley)"
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Analytical Mechanics & Special Theory of Relativity",
        "courseCode": "MICPHY10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand Physical Principle behind derivation of Lagranges and Hamiltonion Equation.",
          "CO2: Understand problems in space science theoretical research.",
          "CO3: Analysis the Centre of mass and Laboratory frames of reference and their use in explaining elastic and inelastic collisions.",
          "CO4: Understand the Planetary motions and motions of satellites and Space science. Getting an idea of postulates of special theory of relativity and their implications."
        ],
        "theory": {
          "credits": "4",
          "units": [
            {
              "title": "Unit 1: Rigid Body Motion & Variational Principle (14 Lectures)",
              "topics": [
                "Rigid Body Motion: Rigid body, Eulerian angles, Kinematics of rotation, Euler's equations of motion, Motion of a symmetrical top.",
                "Variational Principle and Hamiltonian formalism: Calculus of variation and its applications, Lagrange's equations of motion for non-holonomic system, Velocity-dependent potential, Cyclic coordinates, Symmetries and conservation laws, Legendre transformation."
              ]
            },
            {
              "title": "Unit 2: Canonical Transformation (08 Lectures)",
              "topics": [
                "Canonical transformation and its applications, Poisson Brackets, Jacobi identity, Hamilton-Jacobi equation."
              ]
            },
            {
              "title": "Unit 3: Collisions & Elasticity (08 Lectures)",
              "topics": [
                "Collisions: Elastic and inelastic collisions between particles. Centre of Mass and Laboratory frames. Elasticity: Review of relation between Elastic constants."
              ]
            },
            {
              "title": "Unit 4: Special Theory of Relativity (15 Lectures)",
              "topics": [
                "Michelson-Morley Experiment and its outcome. Postulates of Special Theory of Relativity. Lorentz Transformations. Lorentz contraction. Time dilation. Relativistic addition of velocities. Variation of mass with velocity, mass energy equivalence."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Kleppner D., Kolenkow R. J. (1973). An introduction to mechanics, McGraw-Hill",
          "Kittel C, Knight W., et.al. (2007). Mechanics, Berkeley Physics, vol.1, Tata McGraw-Hill",
          "Resnick, Halliday and Walker (2008), Physics, Wiley, 8/e",
          "Fowles G. R. and Cassiday G.L. (2005). Cengage Learning",
          "Feynman R. P., Leighton R. B., Sands M. (2008). Feynman Lectures, Vol.I, Pearson Education",
          "Mathur D. S. (2000). Mechanics, S. Chand and Company Limited",
          "Sears F. W, Zemansky M. W., Young H.D. (1986). University Physics. 13/e, Addison Wesley",
          "Jewett J. W., Serway R. A. (2010). Physics for scientists and Engineers with Modern Phys., Cengage Learning",
          "Spiegel M.R. (2006). Theoretical Mechanics, Tata McGraw Hill",
          "Special Theory of Relativity S. Chand",
          "Gupta, Kumar, Pragati Prakashan"
        ]
      }
    ]
  },
  "MDC": {
    "1st": [
      {
        "courseTitle": "Physics Around Us",
        "courseCode": "MDC-1",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: Understand the physical laws governing climate and atmosphere.",
          "CO 2: Explore the use of Physics in agriculture and its product Preservation.",
          "CO 3: Importance of Renewable energy and Physics behind its various harvested types."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Climate Science (15 hrs / 01 Credit)",
              "topics": [
                "Atmospheric science as multidisciplinary science, physical and dynamical meteorology weather climate variables, and their difference.",
                "Surface weather station weather forecasting, Greenhouse effect, Physics of Climate change and Climate model."
              ]
            },
            {
              "title": "Unit 2: Applications of Physics (15 hrs / 01 Credit)",
              "topics": [
                "Application in Agriculture, Agro Physics, Agro ecosystem, Soil Physics, Food preservation, Physics behind medical imaging, LASER-Surgery."
              ]
            },
            {
              "title": "Unit 3: Energy Sources (15 hrs / 01 Credit)",
              "topics": [
                "Importance of Renewable energy; solar energy, hydro thermal energy, Geothermal Energy, Hydrogen based Fuel, CNG, Energy Harvesting."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Basics of Medical Physics",
        "courseCode": "MDC-1 (Opt 2)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Fundamentals of Bio-electricity & Signals",
              "topics": [
                "Electrical properties of cell membrane, action potential, resting potential.",
                "Bio-electric signals and recording systems: ECG, EEG, EMG basics."
              ]
            },
            {
              "title": "Unit 2: Diagnostic Imaging Physics",
              "topics": [
                "Physics of X-rays, production and attenuation, Computed Tomography (CT scan) principles.",
                "Ultrasonography: generation of ultrasound, acoustic impedance, Doppler effect in medical diagnosis.",
                "Basics of Magnetic Resonance Imaging (MRI) and Nuclear Medicine (PET / SPECT)."
              ]
            },
            {
              "title": "Unit 3: Radiation Therapy & Safety",
              "topics": [
                "Interaction of ionizing radiation with biological tissues, radiation dosimetry and units.",
                "Teletherapy, Brachytherapy, radiation shielding and safety protocols in medical physics."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Nano Science",
        "courseCode": "MDC-1 (Opt 3)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Introduction to Nanotechnology",
              "topics": [
                "Nanoscale phenomena, 0D, 1D, 2D and 3D nanostructures.",
                "Quantum confinement effect, surface-to-volume ratio, change in physical/optical properties."
              ]
            },
            {
              "title": "Unit 2: Synthesis of Nanomaterials",
              "topics": [
                "Top-down vs. Bottom-up approaches: Sol-gel method, Chemical Vapor Deposition (CVD), Ball milling.",
                "Carbon-based nanostructures: Fullerenes, Carbon Nanotubes (CNTs), Graphene."
              ]
            },
            {
              "title": "Unit 3: Characterization and Applications",
              "topics": [
                "Overview of SEM, TEM, XRD, AFM for nanomaterial characterization.",
                "Applications in electronics, targeted drug delivery, solar energy, water purification."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Physics of Diagnostics",
        "courseCode": "MDC-1 (Opt 4)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Principles of Optical & Thermal Diagnostics",
              "topics": [
                "Endoscopy, fiber optics in diagnostic tools, optical coherence tomography.",
                "Medical thermography and non-contact temperature sensing."
              ]
            },
            {
              "title": "Unit 2: Acoustic and Ultrasonic Diagnostic Tools",
              "topics": [
                "Piezoelectric effect, ultrasonic transducers, A-scan, B-scan, M-scan echography.",
                "Pulse-echo techniques and color Doppler flow imaging."
              ]
            },
            {
              "title": "Unit 3: Nuclear and Magnetic Diagnostic Techniques",
              "topics": [
                "Radioisotopes in diagnostics, gamma cameras, safety handling of isotopes.",
                "NMR spectroscopy and contrast agents in diagnostic MRI."
              ]
            }
          ]
        }
      }
    ],
    "2nd": [
      {
        "courseTitle": "Crystallography",
        "courseCode": "MDC-2",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO 1: Understand the structure of various crystal.",
          "CO 2: Know the theoretical framework like symmetry and space groups.",
          "CO 3: Know characterization of crystal using diffraction technique.",
          "CO 4: Know the analysis of collected diffraction data."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit I: Elements of Crystallography (15 hrs / 01 Credit)",
              "topics": [
                "Unit cell, Lattice and Basis, Symmetry operation for a two dimensional crystal, Two and Three dimensional Bravais lattice.",
                "Reciprocal lattice, Lattice constant crystal plane and Miller indices, Inter planar spacing.",
                "Simple crystal structure - hcp, fcc, bcc, SC diamond and Cesium Chloride Structure."
              ]
            },
            {
              "title": "Unit II: Crystal Type and Crystal Binding (15 hrs / 01 Credit)",
              "topics": [
                "Ionic Crystal, Covalent crystal, Metal crystal, Molecular crystal, Hydrogen bonded crystal.",
                "Calculation of BE in different type of crystals, Crystal of inert gases."
              ]
            },
            {
              "title": "Unit III: X-ray Diffraction (15 hrs / 01 Credit)",
              "topics": [
                "Diffraction, Braggs law, Diffraction methods, Scattering by electrons, atoms.",
                "Laue, Bragg and Ewald Work on X-ray diffraction, Indexing of X-ray diffraction."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Basic of Medical science",
        "courseCode": "MDC-2 (Opt 2)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Anatomy & Human Physiology Basics",
              "topics": [
                "Cardiovascular system, respiratory mechanics, neural signal transmission.",
                "Biomechanics of musculoskeletal motion and fluid flow in circulatory systems."
              ]
            },
            {
              "title": "Unit 2: Medical Instrumentation & Sensors",
              "topics": [
                "Transducers in physiological measurement, blood pressure transducers, pulse oximetry.",
                "Biosensors, glucometers, and wearable health monitoring devices."
              ]
            },
            {
              "title": "Unit 3: Therapeutic and Life Support Devices",
              "topics": [
                "Pacemakers, defibrillators, dialyzers, mechanical ventilators, ventilators physics and safety standards."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Environmental Physics",
        "courseCode": "MDC-2 (Opt 3)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Radiation and Energy Balance of Earth",
              "topics": [
                "Solar constant, solar spectrum, terrestrial radiation, albedo, greenhouse effect.",
                "Global heat balance, convection currents, atmospheric circulation cells."
              ]
            },
            {
              "title": "Unit 2: Atmospheric Physics & Air Quality",
              "topics": [
                "Thermodynamics of dry and moist air, lapse rates, atmospheric stability, inversion layers.",
                "Physics of aerosols, particulate matter dispersion models, air pollution physics."
              ]
            },
            {
              "title": "Unit 3: Renewable Energy & Climate Physics",
              "topics": [
                "Wind energy physics: Betz limit, wind turbines. Hydro and tidal power physics.",
                "Climate modeling, feedback mechanisms, oceans as thermal sinks."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Energy Science",
        "courseCode": "MDC-2 (Opt 4)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Non-Renewable & Nuclear Energy Sources",
              "topics": [
                "Thermodynamic cycles: Carnot, Rankine, Brayton cycle.",
                "Nuclear fission power reactors, fast breeder reactors, nuclear fusion as future energy source."
              ]
            },
            {
              "title": "Unit 2: Solar and Photovoltaic Technologies",
              "topics": [
                "Solar thermal collectors: Flat plate, parabolic trough, concentrating towers.",
                "Photovoltaic effect, p-n junction solar cells, efficiency limits, perovskite solar cells."
              ]
            },
            {
              "title": "Unit 3: Energy Storage & Fuel Cells",
              "topics": [
                "Electrochemical energy storage: Lead-acid, Lithium-ion batteries, supercapacitors.",
                "Hydrogen fuel cells: Proton exchange membrane (PEM), Solid oxide fuel cells (SOFC)."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Measurement & Instrumentation",
        "courseCode": "MDC-2 (Opt 5)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Measurement Standards & Error Analysis",
              "topics": [
                "SI units, calibration, standards of measurement, systematic and random errors, uncertainties.",
                "Static characteristics of instruments: Accuracy, precision, sensitivity, resolution, drift."
              ]
            },
            {
              "title": "Unit 2: Transducers and Signal Conditioning",
              "topics": [
                "Resistive (strain gauges), Inductive (LVDT), Capacitive and Optical transducers.",
                "Bridge circuits, instrumentation amplifiers, filters and analog-to-digital conversion (ADC)."
              ]
            },
            {
              "title": "Unit 3: Electronic Test & Measuring Instruments",
              "topics": [
                "Digital multimeters (DMM), Digital storage oscilloscopes (DSO), function generators, spectrum analyzers."
              ]
            }
          ]
        }
      }
    ],
    "3rd": [
      {
        "courseTitle": "Mesoscopic Materials",
        "courseCode": "MDCPHY-3",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "The Students will be able to understand the mysterious world of Mesoscopic materials.",
          "Comprehend the use of nano-structured materials in our daily life.",
          "Develop a multidisciplinary scientific logic and connect it to our day-to-day life.",
          "The fascination of the diversity of mother nature."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Mesoscopic Scale Materials (10 Hours)",
              "topics": [
                "Mesoscopic sizes materials of bulk size materials of sub molecular sizes, sizes of nanometer range."
              ]
            },
            {
              "title": "Unit 2: Specialty in Physical Properties (10 Hours)",
              "topics": [
                "Specialty in Physical Properties: Size dependents of physical properties like mechanical strength electrical conduction and magnetic properties of materials, applications of materials properties at Nanoscale."
              ]
            },
            {
              "title": "Unit 3: Mesoscopic Materials in Daily Life (10 Hours)",
              "topics": [
                "Mesoscopic materials in daily life: computers, Sensors, High-efficiency lasers and LEDs, ductile ceramics drugs delivery."
              ]
            }
          ]
        }
      },
      {
        "courseTitle": "Acquaintance of Electrical and Electronic Appliances",
        "courseCode": "MDCPHY3 (Opt 2)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit I: Circuit Fundamental (10 Hours)",
              "topics": [
                "Voltage, Current, Power, Work, Short circuit, open circuit, Ohm's Law.",
                "Definition of Resistance, Capacitance, Inductance, Series Resistance, Parallel Resistance.",
                "Passive circuit Element, General, Resistors, types of Resistors, Resistors color code, SI unit, Checking Resistance with ohm meter.",
                "Multimeter, components testing using a multimeter, Inductor, Inductance of Inductor, Mutual Inductance, SI unit. Capacitor, Capacitance, types of Capacitors, Checking capacitor with ohm meter. SI unit."
              ]
            },
            {
              "title": "Unit II: Electronic Devices (10 Hours)",
              "topics": [
                "Diode, Transistor, LED, definition of symbol of these.",
                "AC Circuit definition, Sine wave, DC current. Power socket Identifying the phase, neutral, earth on power socket.",
                "IC, PCB, bread Board, use a tester to monitor AC power, soldering, fuse definition, definition of an analog circuit, Decimal circuit."
              ]
            },
            {
              "title": "Unit III: Hands on Training (10 Hours)",
              "topics": [
                "How to repair an electric cord.",
                "Installing a new plug.",
                "Disassembling the Fan.",
                "How to repair electric Fan."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "A Course in Electrical & Electronics Measurements & Instrumentation - A.K. Sawhney (Dhanpatrai & Co.) 1978"
        ]
      },
      {
        "courseTitle": "History and Philosophy of Science",
        "courseCode": "MDCPHY3 (Opt 3)",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Scientific method, reasoning, truth and evidence.",
          "The contrast between empirical facts and philosophical facts.",
          "The change from Aristotelian worldview to the Newtonian worldview.",
          "The recent developments in science especially relativity theory and evolutionary theory."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Fundamental Issues (06 Hours)",
              "topics": [
                "What is science?, Science and its difference from other systems of belief and knowledge; science as a profession; difference between pure science and technology.",
                "Falsifiability, Instrumentalism and realism, problems and puzzles of Induction."
              ]
            },
            {
              "title": "Unit 2: Science & Technology: from Aristotle to Newton (12 Hours)",
              "topics": [
                "Greek Science, Seventeenth-century attack on Aristotelian Philosophy, Logical Reconstructionist, Philosophy of Science, Astronomical Data: The Philosophical Facts.",
                "The Ptolemaic System, The Copernicus System, Kepler's System, Galileo, Philosophical and conceptual connections in the Development of the New Science, Scientific Law Development of the Newtonian worldview 1700-1900."
              ]
            },
            {
              "title": "Unit 3: Metaphysical foundations of Science : Recent Developments (12 Hours)",
              "topics": [
                "David Hume and the problem of causation, Naturalism and Anti-naturalism, Realism and antirealism about scientific theories; scientific explanation; and laws of nature, Karl popper inductivism and falsificationism, Thomas s Kuhn Rationality in Paradigm Change, normal science and scientific revolutions, Feyeraband scientific rationality and irrationality.",
                "The special Theory of relativity, the general theory of relativity, Overview of the theory of Evolution, Philosophical and conceptual implications of Evolution, Worldviews: concluding Thoughts."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Okasha Samir, Philosophy of Science: A Very Short Introduction, Oxford University Press, 2002",
          "Richard DeWitt, Worldviews: An Introduction to the History and Philosophy of Science, Blackwell, 2004",
          "Chalmers A. F., What Is This Thing Called Science?, (3rd ed.) Open University Press, 1999",
          "Christopher R. Hitchcock, Contemporary Debates in the Philosophy of Science, Blackwell, 2004",
          "John Losee, A Historical Introduction to the Philosophy of Science, Oxford University Press, 2001",
          "Hard M., A. Jamison, Hubris and Hybrids. A Cultural history of Technology and Science, Routledge, 2005",
          "Peter Godfrey-Smith Theory and Reality: An Introduction to the Philosophy of Science, University of Chicago"
        ]
      },
      {
        "courseTitle": "Sports Science",
        "courseCode": "MDCPHY-3 (Opt 4)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Measurement and Mechanics in Sports (10 Hours)",
              "topics": [
                "Measurement: Physical quantities, Standards and Units. International System of Units. Standards of time, length and mass. Precision and significant figures.",
                "Newton's laws of motion: Newton's first law. Force, mass. Newton's second law. Newton's third law. Mass and weight. Applications of Newton's laws.",
                "Projectile motion: Shooting a falling target. Physics behind Shooting, Javelin throw and Discus throw."
              ]
            },
            {
              "title": "Unit 2: Conservation Laws & Body Dynamics (10 Hours)",
              "topics": [
                "Conservation laws: Conservation of linear momentum, collisions — elastic and inelastic. Angular momentum. (Physics behind Carom, Billiards, Racing).",
                "Centre of mass: Physics behind Cycling, rock climbing, Skating, Gravitation: Origin, Newton's law of gravitation. Archimedes's principle, Buoyancy (Physics behind swimming)."
              ]
            },
            {
              "title": "Unit 3: Nutrition, Energy and Exercises (10 Hours)",
              "topics": [
                "Food and Nutrition: Proteins, Vitamins, Fat, Blood Pressure. Problems due to the deficiency of vitamins. Energy: Different forms of Energy, Conservation of mass-energy.",
                "Physical exercises: Walking, Jogging and Running, Weight management."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Physics for Entertainment - Yakov Perelman, Createspace Independent Pub.",
          "Physics Everywhere, Yakov Perelman - Prodinnova",
          "Mechanics for Entertainment - Yakov Perelman - Prodinnova",
          "Food Science - Sri Lakshmi, New Age Publications",
          "Physics, Resnick, Holiday and Krane, Wiley Student Edition",
          "An introduction to the Physics of Sports - Vassilios McInnes Spathopoulos"
        ]
      },
      {
        "courseTitle": "Atmospheric & Space Science",
        "courseCode": "MDCPHY-3 (Opt 5)",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "Understand the structure of atmosphere.",
          "Deal with tools and techniques used for space observation.",
          "Familiarize with our solar system.",
          "Realize the idea of the formation, evolution and classification of stars.",
          "Develop an idea of nucleo-synthesis and formation of heavy nuclei and theories of the Universe.",
          "Connect the multi-disciplinary nature of development in science and technology to enhance the capability of space observation."
        ],
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit I: Earth and its atmosphere (10 Hours)",
              "topics": [
                "Earth as a planet of the solar system: origin and internal structure, crustal types, heat flow and temperature gradient.",
                "Elementary concepts of weather and climate; structure and composition of the atmosphere, Passage of solar radiation through the atmosphere, Atmospheric Windows, emissivity, Absorption spectra of atmospheric gases."
              ]
            },
            {
              "title": "Unit II: Space Exploration & Observation Techniques (10 Hours)",
              "topics": [
                "Perception of Space from early civilization to pre-telescopic era and post-telescopic era, Important International Organizations involved in Space Exploration.",
                "Observation of Space through our eyes, its limitations, and further explorations through instrumental aids.",
                "Distance measuring units and Techniques for Distance Measurement, Use of Non-Optical Telescopes and its importance in space observation."
              ]
            },
            {
              "title": "Unit III: Solar System, Star Formation & Evolution (10 Hours)",
              "topics": [
                "Formation of our Solar System, Origin and Fate of our Sun and its source of energy, Solar Wind, Planets, Asteroids, Satellites and Comets.",
                "Star Formation, Nucleo-Synthesis and Formation of Elements, Stellar Evolution and Stellar Remnants and Classification of Stars: Harvard Classification & Hertzsprung-Russell Diagram."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Astrophysics: A modern Perspective - K. S. Krishnaswami (New Age International)",
          "Atmospheric Sciences: An introductory Survey - J.M. Wallace and P.V. Hobbs (Academic Press)",
          "An Introduction to Astrophysics - Baidyanath Basu, T. Chattopadhyay, S. N. Biswas (PHI 2nd Eds.)",
          "An Introduction to Atmospheric Radiation - K. N. Liou (Academic Press)"
        ]
      },
      {
        "courseTitle": "Physics of Communication Technology",
        "courseCode": "MDCPHY-3 (Opt 6)",
        "credits": "3",
        "marks": "100",
        "theory": {
          "credits": "3",
          "units": [
            {
              "title": "Unit 1: Principles of Electromagnetic Communication",
              "topics": [
                "Basics of communication system: Transmitter, channel, receiver, noise and bandwidth.",
                "Modulation techniques: Amplitude Modulation (AM), Frequency Modulation (FM), Phase Modulation (PM), Pulse Code Modulation (PCM)."
              ]
            },
            {
              "title": "Unit 2: Wireless & Cellular Networks",
              "topics": [
                "Propagation of radio waves: Ground wave, sky wave, space wave propagation.",
                "Antennas: Dipole, Yagi-Uda, parabolic reflector.",
                "Cellular communications: Frequency reuse, handoff, evolution from 2G, 3G, 4G LTE to 5G technologies."
              ]
            },
            {
              "title": "Unit 3: Optical and Satellite Communications",
              "topics": [
                "Optical fiber communication: Total internal reflection, attenuation, dispersion, optical sources (LED/LASER) and detectors (PIN/APD).",
                "Satellite communication: Orbital mechanics, geostationary orbits, transponders, GPS navigation principles."
              ]
            }
          ]
        }
      }
    ]
  }
};
