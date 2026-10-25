/**
 * @file mathematicsSyllabus.ts
 * @description LNMU B.Sc. & B.A. Mathematics Honours Syllabus under 4-Year CBCS & NEP 2020 Framework.
 * 
 * Contains complete curriculum mapping, Program Outcomes (POs), Program Specific Outcomes (PSOs),
 * and course breakdowns across:
 * - Major Courses (MJC-1 through MJC-16)
 * - Minor Courses (MIC-1 through MIC-10)
 * - Multidisciplinary Courses (MDC-1 through MDC-3)
 */

// B.Sc. & B.A. Mathematics Syllabus under 4-Year CBCS & NEP 2020 for Universities of Bihar
export const MATHEMATICS_SYLLABUS = {
  "regulations": {
    "programTitle": "4-Year Bachelor of Science / Bachelor of Arts (Mathematics) Honours Degree B.Sc./B.A. (Hons) Mathematics",
    "duration": "4 Years (3+1 Years / 8 Semesters)",
    "academicSession": "2023-27 & onwards",
    "framework": "Choice Based Credit System (CBCS) & NEP 2020 (Curriculum and Credit Framework for Undergraduate Programme in Universities of Bihar)",
    "submittedBy": "Subject Expert Committee: Prof. Shambhu Kr Mishra (Patliputra Univ, Patna), Dr. S.B. Rai (B.N. College, Patna Univ), Dr. Gurudayal Singh (VKSU Ara), Dr. Rafiqul Hasan (TMBU Bhagalpur), Dr. Bijendra Kumar (TMBU Bhagalpur), Dr. Ashok Kumar (JP Univ Chapra), Dr. Abdul Halim (HS College Kharagpur, Munger Univ), Dr. Anupam Kumar Singh (CM College, LNMU Darbhanga), Dr. Manoj Kumar Manoranjan (BNMU Madhepura), Dr. Kumar Vishal (Magadh Univ Bodh Gaya), Dr. Vipul Kumar Baranwal (DC College Hajipur, BRABU Muzaffarpur), Dr. Raj Kishore Singh (BRABU Muzaffarpur), Dr. Ayaz Ahmad (LNMU Darbhanga), Dr. S.N. Roy (LNMU Darbhanga), Dr. Abhay Singh (CM Sc College, Darbhanga), Prof. Prem Mohan Mishra (Dean, Faculty of Science, LNMU Darbhanga)",
    "programOutcomes": [
      "PO1. Mathematical Foundation & Disciplinary Knowledge: Demonstrate comprehensive understanding of foundational and advanced branches of mathematics including Classical Algebra, Real Analysis, Calculus & Analytical Geometry, Abstract Algebra (Group & Ring Theory), Linear Algebra, Ordinary & Partial Differential Equations, Complex Analysis, Metric Spaces, Numerical Methods, and Mathematical Finance.",
      "PO2. Problem Solving & Logical Reasoning: Formulate rigorous mathematical proofs, solve complex mathematical models, and analyze abstract mathematical structures using deductive reasoning and analytical techniques.",
      "PO3. Applied & Computational Competency: Apply mathematical theorems, differential equations, Fourier series, numerical approximations, and statistical/financial modeling to real-world problems in physical sciences, engineering, data analysis, economics, and life sciences.",
      "PO4. Research Aptitude & Scientific Literacy: Conduct literature reviews, analyze contemporary mathematical research, design mathematical models, and synthesize rigorous research dissertations/projects.",
      "PO5. Cross-Disciplinary Versatility (BA & BSc): Seamlessly bridge mathematical theory with social sciences, natural sciences, commerce, technology, and multidisciplinary domains."
    ],
    "programSpecificOutcomes": [
      "PSO1. Deep mastery over algebraic structures, number theory, polynomials, matrix algebra, system of linear equations, eigenvalues, and Cayley-Hamilton theorem.",
      "PSO2. Advanced analytical proficiency in single and multivariable differential & integral calculus, vector calculus, curves, and 3D coordinate geometry of conicoids.",
      "PSO3. Conceptual mastery of pure analysis: Dedekind theory, topological properties of R, convergence of sequences & infinite series, Riemann integration, uniform convergence of function series, metric space topology, and complex function theory.",
      "PSO4. Competency in solving first and higher-order ODEs, linear/non-linear PDEs, Laplace transformations, Fourier series expansions, and boundary value problems.",
      "PSO5. Practical numerical computation skills in root-finding, LU decomposition, finite difference interpolation, numerical calculus, Runge-Kutta methods, and financial derivative pricing."
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
        "courseTitle": "Algebra",
        "courseCode": "MJC-01",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Employ De Moivre's theorem in a number of applications to solve numerical problems, hyperbolic functions, and Gregory series.",
          "CO2: Understand sets, relations, partitions, functions, countability, Cantor's theorem, and cardinal numbers.",
          "CO3: Apply Euclid's algorithm and backwards substitution to find greatest common divisor, congruences, and modular arithmetic.",
          "CO4: Recognize consistent and inconsistent systems of linear equations by the row echelon form of the augmented matrix, using rank and adjoint/inverse methods.",
          "CO5: Master polynomial equations, Descartes rule of signs, Cardon's method for cubic equations, and Euler's method for biquadratic equations."
        ],
        "theory": {
          "credits": "6",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Complex Quantities & Trigonometry (10 Lectures)",
              "topics": [
                "Polar representation of complex numbers.",
                "De Moivre's theorem and its applications.",
                "Logarithms of complex quantities.",
                "Hyperbolic functions.",
                "Gregory series, Summation of series, and Resolution into factors."
              ]
            },
            {
              "title": "Unit 2: Set Theory & Relations (12 Lectures)",
              "topics": [
                "Cartesian product of sets, Equivalence relations, and Partition of sets.",
                "Partial and total order relations.",
                "Functions, Composition of functions, Invertible functions.",
                "Cardinality of a set, Countable and Uncountable sets, Cantor's theorem."
              ]
            },
            {
              "title": "Unit 3: Number Theory (12 Lectures)",
              "topics": [
                "Well-ordering property of positive integers.",
                "Division algorithm, Euclidean algorithm.",
                "Fundamental Theorem of Arithmetic.",
                "Modular arithmetic and basic properties of congruences.",
                "Principle of mathematical induction."
              ]
            },
            {
              "title": "Unit 4: Matrices and Linear Systems (12 Lectures)",
              "topics": [
                "Matrices: Operations on Matrices, Kinds of matrices.",
                "Transpose, symmetric & skew-symmetric Matrices, Hermitian and skew-Hermitian Matrices.",
                "Adjoint and Inverse of a matrix, Orthogonal matrix.",
                "Solution of a system of linear equations by matrix methods.",
                "Echelon forms, Rank of a matrix."
              ]
            },
            {
              "title": "Unit 5: Theory of Equations (14 Lectures)",
              "topics": [
                "Fundamental theorem of algebra.",
                "Relation between roots and coefficients of a polynomial equation.",
                "Symmetric functions of roots.",
                "Transformation of equations.",
                "Descartes' rule of signs.",
                "Solution of Cubic equation by Cardon's method.",
                "Solution of Biquadratic equation by Euler's method."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Dickson, Leonard Eugene (1922). First Course in The Theory of Equations. John Wiley & Sons, Inc. New York.",
          "Kolman, Bernard, & Hill, David R. (2001). Introductory Linear Algebra with Applications (7th ed.). Pearson Education, Delhi.",
          "Andrilli, Stephen, & Hecker, David (2016). Elementary Linear Algebra (5th ed.). Academic Press, Elsevier India.",
          "Burton, David M. (2007). Elementary Number Theory (7th ed.). Tata McGraw Hill Edition.",
          "K.K. Jha. Advanced Set Theory. Nav Bharat Prakashan, Patna.",
          "M.L. Khanna. Theory of Equations. Jai Prakash Nath & Co., Meerut.",
          "Lalji Prasad. Matrices. Paramount Publications, Patna.",
          "Dasgupta. Trigonometry. Bharti Bhawan, Patna."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Calculus & Geometry",
        "courseCode": "MJC-02",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Apply derivatives in optimization, social sciences, physics, life sciences, curve tracing, asymptotes, and curvature.",
          "CO2: Compute areas of plane curves, length of curves, volume and surface area of solids of revolution, Beta-Gamma functions, and multiple integrals.",
          "CO3: Analyze general 2D conic equations, tangents, normals, and coordinate transformations.",
          "CO4: Understand 3D geometry of spheres, cones, cylinders, central conicoids, paraboloids, and generating lines.",
          "CO5: Master vector differential operators (Gradient, Divergence, Curl) and vector integration in Cartesian coordinates."
        ],
        "theory": {
          "credits": "6",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Differential Calculus (12 Lectures)",
              "topics": [
                "Successive differentiation and Leibnitz's theorem.",
                "Maclaurin's and Taylor's series of expansion.",
                "Tangent and Normal, Curvature, Asymptotes.",
                "Partial differentiation and Euler's theorem on homogeneous functions, Total Differential.",
                "L'Hospital's rule, Curve tracing in Cartesian coordinates and polar coordinates of standard curves."
              ]
            },
            {
              "title": "Unit 2: Integral Calculus (12 Lectures)",
              "topics": [
                "Integration of rational and irrational functions.",
                "Evaluation of definite integrals, Reduction formulae.",
                "Area, Length of plane curves and area bounded by plane curves.",
                "Volume and surface area of solid of revolution.",
                "Beta and Gamma Functions, Multiple Integrals."
              ]
            },
            {
              "title": "Unit 3: Analytical Geometry of Two Dimensions (10 Lectures)",
              "topics": [
                "Transformation of rectangular axes.",
                "General equations of conics and its reduction to the normal form.",
                "Equation of the tangent and normal at a point of the Conics."
              ]
            },
            {
              "title": "Unit 4: Analytical Geometry of Three Dimensions (12 Lectures)",
              "topics": [
                "Sphere, Cone, Cylinder.",
                "Central conicoid, Paraboloids.",
                "Plane section of conicoid, Generating lines.",
                "Tangent plane and normal to a conicoid."
              ]
            },
            {
              "title": "Unit 5: Vector Calculus (14 Lectures)",
              "topics": [
                "Scalar triple product and vector triple product, Product of four vectors.",
                "Introduction to vector functions, Operations with vector-valued functions.",
                "Differentiation and integration of vector functions.",
                "Gradient of a scalar, Divergence and Curl of a vector function in Cartesian coordinates."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Anton, Howard, Bivens, Irl, & Davis, Stephen (2013). Calculus (10th ed.). John Wiley & Sons.",
          "Thomas, Jr. George B., Weir, Maurice D., & Hass, Joel (2014). Thomas' Calculus (13th ed.). Pearson Education.",
          "Osborne, George A. (1906). Differential and Integral Calculus with Examples and Applications. D.C. Health & Co.",
          "Strauss, Monty J., Bradley, Gerald L., & Smith, Karl J. (2007). Calculus (3rd ed.). Pearson Education.",
          "Lalji Prasad. Integral Calculus. Paramount Publications, Patna.",
          "B.C. Das and B.N. Mukherjee. Differential Calculus / Integral Calculus. Dhur & Sons, Kolkata.",
          "Shanti Narayan & P.K. Mittal. Integral Calculus. S. Chand, New Delhi.",
          "Utpal Chatterjee. Vector and Tensor Analysis. Academic Publishers, Kolkata.",
          "Dasgupta. Differential Calculus. Bharti Bhawan, Patna."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Real Analysis",
        "courseCode": "MJC-03",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand properties of the real line, Dedekind cut theory, Archimedean property, density, and completeness.",
          "CO2: Comprehend topology of R: open/closed sets, limit points, Bolzano-Weierstrass theorem, and interior/closure.",
          "CO3: Master sequence convergence, monotone sequences, subsequences, Cauchy criterion, and limit superior/inferior.",
          "CO4: Apply comprehensive convergence tests for infinite series of real numbers (comparison, ratio, root, Raabe, Gauss, Leibnitz tests)."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Real Number System (10 Lectures)",
              "topics": [
                "Dedekind theory of real numbers.",
                "Algebraic and order properties of R.",
                "Archimedean Property, Density Theorem.",
                "Completeness property of R, Bounded sets, Theorems on Suprema and Infima."
              ]
            },
            {
              "title": "Unit 2: Point Set Topology in R (12 Lectures)",
              "topics": [
                "Neighbourhood of a point in R.",
                "Open and closed sets, Limit points and isolated points of a set.",
                "Bolzano-Weierstrass theorem for a set.",
                "Derived set, Closure and Interior of a set."
              ]
            },
            {
              "title": "Unit 3: Sequences of Real Numbers (14 Lectures)",
              "topics": [
                "Sequence and its convergence, Bounded sequence, Monotone sequences, Subsequences.",
                "Limit of a sequence, Limit Theorem.",
                "Bolzano-Weierstrass theorem for sequences.",
                "Limit superior and limit inferior for bounded sequence.",
                "Cauchy sequence, Cauchy's general principle of convergence."
              ]
            },
            {
              "title": "Unit 4: Infinite Series of Real Numbers (14 Lectures)",
              "topics": [
                "Infinite series and their convergence, Cauchy Criterion.",
                "Tests for convergence: Comparison test, D'Alembert Ratio Test, Cauchy's root test, Rabbe's test, Logarithmic test, De Morgan and Bertrand's test, Cauchy integral test, Cauchy condensation test, Gauss's test.",
                "Alternating series, Leibnitz test, Absolute and Conditional convergence."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Bartle, Robert G., & Sherbert, Donald R. (2015). Introduction to Real Analysis (4th ed.). Wiley India.",
          "Ross, Kenneth A. (2013). Elementary Analysis: The Theory of Calculus (2nd ed.). Springer.",
          "Malik, S.C. & Arora, Savita (2021). Mathematical Analysis (6th ed.). New Age International Publishers.",
          "Jha, K.K. Advanced Course in Real Analysis and Higher Analysis. New Bharat Publishing House."
        ]
      },
      {
        "courseTitle": "Ordinary Differential Equations",
        "courseCode": "MJC-04",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate and solve first order first degree ODEs (separable, homogeneous, exact, linear, Bernoulli).",
          "CO2: Solve first order higher degree ODEs, Clairaut's form, singular solutions, orthogonal trajectories, and linear ODEs with constant/Euler-Cauchy coefficients.",
          "CO3: Master second order linear ODEs with variable coefficients using normal form, variation of parameters, and total/simultaneous ODEs.",
          "CO4: Apply Laplace transform and inverse Laplace transform to solve ordinary differential equations and initial value problems."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Differential Equations of First Order and First Degree (10 Lectures)",
              "topics": [
                "Formulation of Differential equations, order and degree.",
                "General, Particular and Singular solutions of differential equations.",
                "Variables separable and equations reducible to variables separable.",
                "Homogeneous differential equations and equations reducible to homogeneous form.",
                "Exact differential equations and equations reducible to the exact form.",
                "Linear differential equations and equations reducible to linear form (Bernoulli's equation)."
              ]
            },
            {
              "title": "Unit 2: First Order Higher Degree & Higher Order Linear Equations (10 Lectures)",
              "topics": [
                "Differential equations of first order but not of first degree, Singular solutions, Clairaut's form.",
                "Orthogonal Trajectories of family of curves.",
                "Wronskian and its properties.",
                "Linear differential equation of order greater than one with constant coefficients, Cauchy-Euler Equation, Legendre's Linear Equation."
              ]
            },
            {
              "title": "Unit 3: Second Order Linear Equations with Variable Coefficients (10 Lectures)",
              "topics": [
                "Second order linear differential equations with variable coefficients: Use of a known solution to find another.",
                "Normal form, Method of undetermined coefficients, Variation of parameters.",
                "Total differential equation in three variables, Simultaneous differential equations."
              ]
            },
            {
              "title": "Unit 4: Laplace Transforms and Applications (10 Lectures)",
              "topics": [
                "Definition of Laplace transform, Existence Theorem, Formulas and Properties of Laplace transform.",
                "Laplace transform of special functions: Dirac's delta, Unit step, Periodic, Bessel, Error functions.",
                "Inverse Laplace transform, Formulas and Properties of inverse Laplace transform, Convolution theorem.",
                "Solution of ordinary differential equation using Laplace transform."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Simmons, George F. (2016). Differential Equations with Applications and Historical Notes. Tata McGraw Hill.",
          "Raisinghania, M.D. (2020). Ordinary and Partial Differential Equations (20th ed.). S. Chand Publication.",
          "Bronson, R. & Costa, Gabriel B. (2021). Schaum's Outline of Differential Equations (5th ed.). McGraw Hill.",
          "Prasad, Lalji (2019). Differential Equations. Paramount Publication."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Theory of Real Functions",
        "courseCode": "MJC-05",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master limits of functions, sequential criteria, divergence criteria, and infinite limits.",
          "CO2: Understand continuity, algebra of continuous functions, intermediate value theorem, boundedness, and uniform continuity.",
          "CO3: Analyze differentiability, Darboux theorem, Rolle's, Lagrange's and Cauchy's Mean Value Theorems.",
          "CO4: Apply Taylor's and Maclaurin's theorems with remainder terms to error estimation and finding extrema."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Limits of Functions (10 Lectures)",
              "topics": [
                "Limit of functions, Sequential criterion for limits, Divergence criteria.",
                "Limit theorems, One-sided limits, Infinite limits and limits at infinity."
              ]
            },
            {
              "title": "Unit 2: Continuous Functions (14 Lectures)",
              "topics": [
                "Continuous functions, Sequential criterion for continuity and discontinuity.",
                "Algebra of continuous functions, Properties of continuous functions on closed intervals.",
                "Uniform continuity, Uniform continuity theorem."
              ]
            },
            {
              "title": "Unit 3: Differentiability of Functions (14 Lectures)",
              "topics": [
                "Differentiability of a function, Algebra of differentiable functions.",
                "Increasing and Decreasing functions, Sign of derivatives, Chain rule.",
                "Darboux's theorem, Intermediate value theorem for derivatives.",
                "Rolle's theorem, Lagrange's and Cauchy's Mean value theorem and their applications."
              ]
            },
            {
              "title": "Unit 4: Taylor's Theorem and Extrema (12 Lectures)",
              "topics": [
                "Taylor's theorem with Lagrange's and Cauchy's remainder forms.",
                "Maclaurin's theorem.",
                "Application of Taylor's theorem in error estimation.",
                "Extreme values, Theorems related to extrema."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Bartle, Robert G., & Sherbert, Donald R. (2015). Introduction to Real Analysis (4th ed.). Wiley India.",
          "Ross, Kenneth A. (2013). Elementary Analysis: The theory of calculus (2nd ed.). Springer.",
          "Malik, S.C. & Arora, S. (2021). Mathematical Analysis (6th ed.). New Age International.",
          "Jha, K.K. Advanced Course in Real Analysis and Higher Analysis. New Bharat Publishing House."
        ]
      },
      {
        "courseTitle": "Group Theory",
        "courseCode": "MJC-06",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Recognize mathematical objects that are groups, abelian/cyclic groups, and generator properties.",
          "CO2: Understand permutation groups, alternating groups, cosets, Lagrange's, Fermat's, and Euler's theorems, and normal subgroups.",
          "CO3: Master group homomorphisms, kernel, fundamental homomorphism theorem, Cayley's theorem, and isomorphism theorems.",
          "CO4: Understand automorphisms, inner automorphisms, group of automorphisms, and commutator subgroups.",
          "CO5: Analyze conjugacy classes, class equation, p-groups, Cauchy's theorem for abelian groups, and Sylow's theorems."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Groups and Subgroups (10 Lectures)",
              "topics": [
                "Definition and examples of groups, Elementary properties of groups.",
                "Subgroups and examples of subgroups, Generator of a group.",
                "Cyclic groups and properties of cyclic groups."
              ]
            },
            {
              "title": "Unit 2: Permutation Groups & Cosets (10 Lectures)",
              "topics": [
                "Permutations Group, Even and odd permutations, Alternating Group.",
                "Cosets and its properties, Lagrange's theorem, Fermat's Little theorem, Euler's theorem.",
                "Normal subgroups, Quotient groups, Center of a group, Normalizer of an element, Normalizer of a subgroup."
              ]
            },
            {
              "title": "Unit 3: Homomorphisms and Isomorphisms (10 Lectures)",
              "topics": [
                "Group homomorphisms, Kernel of a group homomorphism.",
                "Fundamental theorem of group homomorphism, Isomorphisms, Properties of Isomorphisms.",
                "First, Second and Third isomorphism theorems for groups, Cayley's theorem."
              ]
            },
            {
              "title": "Unit 4: Automorphisms (08 Lectures)",
              "topics": [
                "Automorphism, Inner automorphism, Group of Automorphisms.",
                "Group Automorphisms of finite and infinite cyclic groups, Commutator subgroup."
              ]
            },
            {
              "title": "Unit 5: Class Equations & Sylow Theorems (12 Lectures)",
              "topics": [
                "Conjugacy classes, Class equation, p-groups.",
                "Cauchy's theorem for finite abelian groups.",
                "Sylow's theorems."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Gallian, Joseph A. (2013). Contemporary Abstract Algebra (8th ed.). Cengage Learning India.",
          "Herstein, I.N. (2003). Topics in Algebra (2nd ed.). John Wiley & Sons.",
          "Khanna, Vijay K. & Bhambri, S.K. A Course in Abstract Algebra (5th ed.). Vikas Publishing House.",
          "Fraleigh, John B. (2002). A Course in Abstract Algebra (7th ed.). Pearson Education."
        ]
      },
      {
        "courseTitle": "Partial Differential Equations",
        "courseCode": "MJC-07",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate and classify first order PDEs, solving via Lagrange's and Charpit's methods.",
          "CO2: Solve homogeneous and non-homogeneous second and higher order linear PDEs with constant coefficients.",
          "CO3: Classify second order PDEs into hyperbolic, parabolic, elliptic types, reduction to canonical forms, and Monge's methods.",
          "CO4: Master Fourier series expansions, half-range series, and separation of variables for Wave, Heat, and Laplace equations."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: First Order Partial Differential Equations (14 Lectures)",
              "topics": [
                "Partial differential equations - Basic concepts and definitions, Formation of PDEs.",
                "Classification of First order PDEs, Lagrange's and Charpit's method for solving PDEs."
              ]
            },
            {
              "title": "Unit 2: Higher Order PDEs with Constant Coefficients (12 Lectures)",
              "topics": [
                "Homogeneous and non-homogeneous Partial differential equations of second and higher order with constant coefficients.",
                "Partial differential equations reducible to equations with constant coefficients."
              ]
            },
            {
              "title": "Unit 3: Second Order PDEs with Variable Coefficients (10 Lectures)",
              "topics": [
                "Partial differential equations of second order with variable coefficients, Monge's Methods.",
                "Classification of second order linear equations as hyperbolic, parabolic or elliptic.",
                "Reduction of second order linear equations to canonical forms."
              ]
            },
            {
              "title": "Unit 4: Fourier Series and Boundary Value Problems (14 Lectures)",
              "topics": [
                "Fourier series in (c, c + 2π), Dirichlet's condition (without proof), Euler's formulae.",
                "Fourier series for even and odd functions, Fourier series of arbitrary interval (0, 2L) and (-L, L), Fourier Half range sine and cosine series.",
                "Method of Separation of variables, Solution of the Wave, Heat and Laplace equations and their applications."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Sneddon, Ian N. (2006). Elements of Partial Differential Equations. Dover Publications.",
          "Raisinghania, M.D. (2018). Advanced Differential Equations (19th ed.). S. Chand Publication.",
          "Raisinghania, M.D. (2020). Ordinary and Partial Differential Equations (20th ed.). S. Chand.",
          "Amarnath, T. An elementary course in Partial differential equations (2nd ed.). Narosa Publication."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Ring Theory and Linear Algebra-I",
        "courseCode": "MJC-08",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand rings, subrings, zero divisors, integral domains, division rings, fields, characteristic, and ideals/quotient rings.",
          "CO2: Master ring homomorphisms, kernels, and isomorphism theorems for rings.",
          "CO3: Grasp vector spaces, linear combinations, linear span, linear independence, basis, dimension, and quotient spaces.",
          "CO4: Formulate linear transformations, rank-nullity theorem, matrix representations, eigenvalues/eigenvectors, and Cayley-Hamilton theorem.",
          "CO5: Understand vector space isomorphisms and invertibility."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Ring Theory Fundamentals (14 Lectures)",
              "topics": [
                "Definition and examples of rings, Properties of rings.",
                "Definition and examples of Subrings, Zero divisors, Integral domains and examples.",
                "Properties of integral domains, Division rings, fields, Characteristic of a ring.",
                "Ideals and its properties, Quotient rings."
              ]
            },
            {
              "title": "Unit 2: Ring Homomorphisms (10 Lectures)",
              "topics": [
                "Ring homomorphisms, Kernel of Ring homomorphisms.",
                "Properties of ring homomorphisms, Isomorphism theorems for Rings."
              ]
            },
            {
              "title": "Unit 3: Vector Spaces and Bases (14 Lectures)",
              "topics": [
                "Vector spaces, Subspaces, Algebra of subspaces.",
                "Linear combination of vectors, Linear span, Linear independence.",
                "Basis and dimension, Dimension of subspaces, Quotient spaces."
              ]
            },
            {
              "title": "Unit 4: Linear Transformations and Matrices (14 Lectures)",
              "topics": [
                "Linear transformations, Null Spaces and Ranges.",
                "Matrix representation of a linear transformation, Rank-Nullity Theorem, Algebra of linear transformations.",
                "Eigenvalues and Eigenvectors, Characteristic equation of a matrix and Cayley-Hamilton theorem."
              ]
            },
            {
              "title": "Unit 5: Vector Space Isomorphisms (08 Lectures)",
              "topics": [
                "Isomorphisms for vector spaces, Isomorphism theorems for vector spaces.",
                "Invertibility and Isomorphisms."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Gallian, Joseph A. (2013). Contemporary Abstract Algebra (8th ed.). Cengage Learning India.",
          "Herstein, I.N. (2006). Topics in Algebra (2nd ed.). Wiley Student Edition.",
          "Friedberg, Stephen H., Insel, Arnold J., & Spence, Lawrence E. (2003). Linear Algebra (4th ed.). Prentice-Hall of India.",
          "Kumaresan, S. (2000). Linear Algebra: A Geometric Approach. Prentice Hall India.",
          "Hoffman, Kenneth & Kunze, Ray Alden (1978). Linear Algebra (2nd ed.). Prentice-Hall of India."
        ]
      },
      {
        "courseTitle": "Multivariate Calculus",
        "courseCode": "MJC-09",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master limits, continuity, partial derivatives, Euler's theorem, differentiability, and Schwarz/Young theorems for functions of several variables.",
          "CO2: Analyze directional derivatives, gradients, tangent planes, normal lines, extrema, saddle points, and Lagrange multipliers.",
          "CO3: Compute double and triple integrals in Cartesian, polar, cylindrical, and spherical coordinates, with change of variables.",
          "CO4: Formulate line integrals, conservative vector fields, divergence, and curl.",
          "CO5: Master Green's theorem, Stokes' theorem, and the Gauss Divergence Theorem with surface integrals."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Functions of Several Variables (12 Lectures)",
              "topics": [
                "Functions of several variables, Limits and continuity, Partial derivatives.",
                "Euler's theorem, Higher order partial derivatives, Total differential and differentiability.",
                "Schwarz and Young's theorem, Chain rule."
              ]
            },
            {
              "title": "Unit 2: Gradients, Tangents and Extrema (12 Lectures)",
              "topics": [
                "Directional derivatives, Gradient, Maximal and normal property of the gradient.",
                "Tangent planes and normal lines, Level curves and surfaces, Gradient and Tangents to Level curves.",
                "Extrema of functions of two variables, Critical points, Saddle points, Method of Lagrange multipliers."
              ]
            },
            {
              "title": "Unit 3: Multiple Integrals (14 Lectures)",
              "topics": [
                "Double integrals in Cartesian and polar coordinates, area and surface area.",
                "Triple integrals, Volume by triple integrals.",
                "Triple integrals in cylindrical and spherical coordinates, Change of variables in double and triple integrals."
              ]
            },
            {
              "title": "Unit 4: Vector Fields and Line Integrals (12 Lectures)",
              "topics": [
                "Line integrals, Applications of line integrals: Mass and Work.",
                "Fundamental theorem for line integrals.",
                "Definition of vector field, Conservative vector fields, Divergence and curl."
              ]
            },
            {
              "title": "Unit 5: Integral Theorems of Vector Calculus (10 Lectures)",
              "topics": [
                "Green's theorem - Tangential and Normal form, Evaluation of line integrals using Green's theorem.",
                "Surface integrals, Stokes' theorem, The Gauss divergence theorem."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Malik, S.C. & Arora, Savita (2017). Mathematical Analysis. New Age International.",
          "Strauss, Monty J., Bradley, Gerald L., & Smith, Karl J. (2007). Calculus (3rd ed.). Pearson Education.",
          "Marsden, J.E., Tromba, A., & Weinstein, A. (2004). Basic Multivariable Calculus. Springer.",
          "George B. Thomas, Joel Hass, Christopher Heil, Maurice D. Weir. Thomas' Calculus, 14th ed. Pearson Education.",
          "Prasad, Lalji. Advanced Calculus. Paramount Publications."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Complex Analysis",
        "courseCode": "MJC-10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand differentiability of complex functions, analytic functions, Cauchy-Riemann equations, and harmonic conjugates.",
          "CO2: Evaluate contour integrals, branch cuts of logarithmic and complex power functions, and ML inequality bounds.",
          "CO3: Master Cauchy's theorem, Cauchy-Goursat theorem, Cauchy integral formula, Morera's, Liouville's, and Fundamental Theorem of Algebra.",
          "CO4: Expand complex functions into Taylor and Laurent series and analyze power series convergence.",
          "CO5: Apply bilinear (Möbius) transformations, cross-ratio preservation, and fixed points."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Complex Functions & Differentiability (08 Lectures)",
              "topics": [
                "Introduction to complex numbers and geometrical interpretation, algebra of complex numbers.",
                "Functions of complex variables, limit of a complex function, continuity and uniform continuity.",
                "Differentiability, Analytic and regular functions, Cauchy-Riemann equations and applications."
              ]
            },
            {
              "title": "Unit 2: Elementary Complex Functions and Contours (08 Lectures)",
              "topics": [
                "Exponential function, logarithmic function, Branches and derivatives of logarithms.",
                "Trigonometric and hyperbolic functions, derivatives of functions.",
                "Definite integrals of functions, Contours, Contour integrals with examples, Upper bounds for moduli of contour integrals (ML-inequality)."
              ]
            },
            {
              "title": "Unit 3: Complex Integration Theorems (08 Lectures)",
              "topics": [
                "Complex integration, Cauchy's theorem, Cauchy-Goursat theorem, primitives.",
                "Cauchy's integral formula, Cauchy's integral formula for the derivative of an analytic function.",
                "Morera's theorem, Poisson's integral formula for a circle, Cauchy's inequality, Liouville's Theorem and Fundamental theorem of Algebra."
              ]
            },
            {
              "title": "Unit 4: Series Expansions in Complex Plane (08 Lectures)",
              "topics": [
                "Convergence of sequences and series.",
                "Taylor series with examples; Laurent series and its examples.",
                "Absolute and uniform convergence of power series, Uniqueness of series representations of power series."
              ]
            },
            {
              "title": "Unit 5: Bilinear (Möbius) Transformations (08 Lectures)",
              "topics": [
                "Linear Transformation, Jacobian of a transformation.",
                "Elementary transformations: translation, rotation, magnification, inversion.",
                "Mobius transformation (bilinear transformation), Cross ratio, preservation of cross ratio under bilinear transformation, fixed point of a bilinear transformation."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Brown, James Ward, & Churchill, R.V. (2014). Complex Variables and Applications (9th ed.). McGraw-Hill Education.",
          "S. Ponnusamy (2011). Foundation of Complex Analysis. Alpha Science International.",
          "Bak, Joseph & Newman, Donald J. (2010). Complex Analysis (3rd ed.). Springer.",
          "Zill, Dennis G., & Shanahan, Patrick D. (2003). A First Course in Complex Analysis with Applications. Jones & Bartlett.",
          "Mathews, John H., & Howell, Russell W. (2012). Complex Analysis for Mathematics and Engineering (6th ed.). Jones & Bartlett Learning."
        ]
      },
      {
        "courseTitle": "Metric Space",
        "courseCode": "MJC-11",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand the basic concepts of metric spaces, open and closed balls, neighbourhoods, open/closed sets, interior, closure, and dense sets.",
          "CO2: Master Cauchy sequences, completeness, Cantor's intersection theorem, Baire's category theorem, and Banach fixed point theorem.",
          "CO3: Analyze continuous mappings between metric spaces, sequential criteria, uniform continuity, and homeomorphisms.",
          "CO4: Understand connectedness, connected subsets of R, and preserving connectedness under continuous maps.",
          "CO5: Understand compactness, boundedness, Heine-Borel theorem, and continuous functions on compact metric spaces."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Fundamentals of Metric Spaces (12 Lectures)",
              "topics": [
                "Definition and examples of metric spaces.",
                "Notion of Open and closed ball, Neighborhood of a point.",
                "Open set, Interior point, Interior of a set, Limit point of a set, Derived set, Closed set, Closure of a set.",
                "Diameter of a set, Dense set, Subspaces."
              ]
            },
            {
              "title": "Unit 2: Complete Metric Spaces (12 Lectures)",
              "topics": [
                "Sequences in metric spaces, Cauchy sequences.",
                "Complete metric space, Cantor's intersection theorem, Baire's category theorem.",
                "Contraction mapping, Banach fixed point theorem."
              ]
            },
            {
              "title": "Unit 3: Continuity and Homeomorphism (10 Lectures)",
              "topics": [
                "Continuous mappings between metric spaces.",
                "Sequential criterion and other characterizations of continuity.",
                "Uniform continuity, Homeomorphism."
              ]
            },
            {
              "title": "Unit 4: Connectedness (08 Lectures)",
              "topics": [
                "Connectedness, Connected subsets of R.",
                "Connectedness and continuous mappings."
              ]
            },
            {
              "title": "Unit 5: Compactness (08 Lectures)",
              "topics": [
                "Compactness, Boundedness, Total boundedness.",
                "Continuous functions on compact spaces."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Kumaresan, S. (2014). Topology of Metric Spaces (2nd ed.). Narosa Publishing House.",
          "Simmons, G.F. (2004). Introduction to Topology and Modern Analysis. Tata McGraw Hill.",
          "Copson, E.T. (1968). Metric Spaces. Cambridge University Press.",
          "Shirali, S. and Vasudeva, H.L. Metric Spaces. Springer.",
          "Jain, P.K. and Ahmad, K. Metric Spaces. Narosa Publishing House."
        ]
      },
      {
        "courseTitle": "Riemann Integration and Series of Functions",
        "courseCode": "MJC-12",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand Riemann integrability, Darboux sums, conditions of integrability, fundamental theorem of calculus, and mean value theorems.",
          "CO2: Analyze improper integrals of Type-I, Type-II and mixed type, comparison tests, μ-test, and Beta-Gamma function properties.",
          "CO3: Master pointwise and uniform convergence of sequences of functions, Cauchy criterion, and limit properties.",
          "CO4: Understand series of functions, Weierstrass M-test, term-by-term continuity, differentiability, and integrability.",
          "CO5: Analyze power series, radius of convergence, Cauchy-Hadamard theorem, Abel's theorem, and Weierstrass approximation theorem."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Riemann Integration (14 Lectures)",
              "topics": [
                "Definition and existence of Riemann Integral of bounded functions, Darboux theorem.",
                "Necessary and sufficient condition for R-Integrability.",
                "Riemann integrability of continuous functions, monotonic functions, and functions having finite number of discontinuities.",
                "Riemann integral as the limit of a sum, Fundamental theorem of integral calculus, Mean value theorems."
              ]
            },
            {
              "title": "Unit 2: Improper Integrals & Beta-Gamma Functions (12 Lectures)",
              "topics": [
                "Improper integrals of Type-I, Type-II and mixed type.",
                "Test for convergence of improper integrals: comparison test and μ-test.",
                "Convergence of Beta and Gamma functions and their properties."
              ]
            },
            {
              "title": "Unit 3: Sequences of Functions (08 Lectures)",
              "topics": [
                "Pointwise and uniform convergence of sequence of functions.",
                "Cauchy criterion for uniform convergence.",
                "Theorems on boundedness, continuity, derivability and integrability of the limit function of a sequence of functions under uniform convergence."
              ]
            },
            {
              "title": "Unit 4: Series of Functions (08 Lectures)",
              "topics": [
                "Series of functions: Theorems on continuity, integrability and derivability of the sum function of a uniformly convergent series of functions.",
                "Cauchy criterion for uniform convergence of series and Weierstrass M-Test."
              ]
            },
            {
              "title": "Unit 5: Power Series and Polynomial Approximation (08 Lectures)",
              "topics": [
                "Power series, radius of convergence, Cauchy-Hadamard Theorem.",
                "Differentiation and integration of power series.",
                "Abel's Theorem, Weierstrass Approximation Theorem."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Bartle, Robert G., & Sherbert, Donald R. (2015). Introduction to Real Analysis (4th ed.). Wiley India.",
          "Ghorpade, Sudhir R. & Limaye, B.V. (2006). A Course in Calculus and Real Analysis. Springer.",
          "Ross, Kenneth A. (2013). Elementary Analysis: The Theory of Calculus (2nd ed.). Springer.",
          "Shanti Narayan. Elements of Real Analysis. S. Chand Publication.",
          "S. Ponnusamy. Foundations of Mathematical Analysis. Birkhauser.",
          "K.K. Jha. Advanced Real Analysis.",
          "S.K. Mapa. Introduction to Real Analysis. Sarat Book Distributor, Kolkata."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Ring Theory and Linear Algebra-II",
        "courseCode": "MJC-13",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand field of quotients of integral domains, polynomial rings, division algorithm, irreducible polynomials, Gauss's lemma, and UFDs.",
          "CO2: Master linear functionals, dual spaces, dual bases, double duals, annihilators, and transpose of linear transformations.",
          "CO3: Compute eigenspaces, diagonalization of linear operators, invariant subspaces, and minimal polynomials.",
          "CO4: Formulate inner product spaces, norms, orthonormal bases, Gram-Schmidt process, orthogonal complements, and Bessel's inequality.",
          "CO5: Analyze adjoint operators, least squares approximation, normal/self-adjoint operators, and unitary/orthogonal operators."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Polynomial Rings and Factorization (14 Lectures)",
              "topics": [
                "Field of quotients of an integral domain, Embedding of rings.",
                "Polynomial rings, The Division algorithm and consequences, The Remainder Theorem, The Factor Theorem.",
                "Irreducible polynomials, Reducible polynomials, Primitive Polynomials, Gauss's Lemma, Irreducibility tests, Unique Factorization Domains (UFD)."
              ]
            },
            {
              "title": "Unit 2: Dual Spaces and Transpose (12 Lectures)",
              "topics": [
                "Linear Functionals, Dual spaces, dual basis, Double dual.",
                "Annihilators, Transpose of a linear transformation and its matrix in the dual basis."
              ]
            },
            {
              "title": "Unit 3: Diagonalization and Invariant Subspaces (10 Lectures)",
              "topics": [
                "Eigenspaces of a linear operator, Diagonalization of Linear Operators.",
                "Invariant subspaces, The minimal polynomial for a linear operator."
              ]
            },
            {
              "title": "Unit 4: Inner Product Spaces (10 Lectures)",
              "topics": [
                "Inner products and Norms, Orthonormal basis.",
                "Gram-Schmidt orthogonalization process, Orthogonal complements, Bessel's inequality."
              ]
            },
            {
              "title": "Unit 5: Operators on Inner Product Spaces (14 Lectures)",
              "topics": [
                "The adjoint of a linear operator.",
                "Least squares approximation, Minimal solutions to systems of linear equations.",
                "Normal and Self-Adjoint Operators, Unitary and orthogonal operators."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Gallian, Joseph A. (2019). Contemporary Abstract Algebra (9th ed.). Cengage Learning India.",
          "Friedberg, Stephen H., Insel, Arnold J., & Spence, Lawrence E. (2022). Linear Algebra (5th ed.). Pearson Education.",
          "Herstein, I.N. (2006). Topics in Algebra (2nd ed.). Wiley Student Edition.",
          "Hoffman, Kenneth M., & Kunze, Ray Alden (1978). Linear Algebra (2nd ed.). Prentice-Hall of India.",
          "Kumaresan, S. (2000). Linear Algebra: A Geometric Approach. Prentice Hall India."
        ]
      },
      {
        "courseTitle": "Research Methodology",
        "courseCode": "MJC-14",
        "credits": "5",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand scientific research philosophy, formulation of research problems, and hypothesis testing in mathematics.",
          "CO2: Perform literature survey using mathematical databases (MathSciNet, zbMATH, arXiv, Scopus).",
          "CO3: Master technical scientific writing using LaTeX, BibTeX, TikZ, and mathematical typography standards.",
          "CO4: Formulate mathematical modeling workflows, simulation paradigms, and qualitative analysis.",
          "CO5: Uphold research ethics, plagiarism guidelines, publication metrics, and patent/copyright protocols."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50 hrs (50 Lectures)",
          "units": [
            {
              "title": "Unit 1: Foundations of Mathematical Research (10 Lectures)",
              "topics": [
                "Meaning, objectives, motivation and types of research in mathematical sciences (pure, applied, computational).",
                "Formulation of research problems, research design, and identification of research gaps.",
                "Role of axiomatic methods and deductive reasoning in mathematical discovery."
              ]
            },
            {
              "title": "Unit 2: Literature Search and Digital Tools (10 Lectures)",
              "topics": [
                "Review of literature, sourcing research papers: MathSciNet, zbMATH, Google Scholar, ResearchGate, arXiv, ScienceDirect.",
                "Reference management tools (Mendeley, Zotero).",
                "Citation indices: h-index, i10-index, Impact Factor, Scopus, Web of Science."
              ]
            },
            {
              "title": "Unit 3: Scientific Computing & Mathematical Typesetting (12 Lectures)",
              "topics": [
                "LaTeX typesetting: Document structure, math mode, equations, matrices, tables, theorem environments.",
                "BibTeX for reference citations, TikZ and PGFPlots for mathematical illustrations.",
                "Mathematical computing software: Python (NumPy, SciPy, SymPy), MATLAB/Octave, SageMath."
              ]
            },
            {
              "title": "Unit 4: Mathematical Modeling & Data Analysis (10 Lectures)",
              "topics": [
                "Principles of mathematical modeling: deterministic vs. stochastic models.",
                "Parameter estimation, model validation, and sensitivity analysis.",
                "Statistical inference in empirical data and simulation analysis."
              ]
            },
            {
              "title": "Unit 5: Research Ethics, IPR & Scientific Presentation (08 Lectures)",
              "topics": [
                "Ethics in research, academic integrity, plagiarism detection software (Turnitin, Urkund).",
                "Intellectual Property Rights (IPR), patents, copyrights.",
                "Preparation of research papers, seminar presentations, posters, and dissertation writing."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Kothari, C.R. and Garg, Gaurav (2019). Research Methodology: Methods and Techniques. New Age International.",
          "Lamport, Leslie (1994). LaTeX: A Document Preparation System. Addison-Wesley.",
          "Higham, Nicholas J. (1998). Handbook of Writing for the Mathematical Sciences. SIAM.",
          "Velten, Kai (2009). Mathematical Modeling and Simulation. Wiley-VCH."
        ]
      },
      {
        "courseTitle": "Numerical Methods",
        "courseCode": "MJC-15",
        "credits": "6",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Analyze numerical errors and find roots of transcendental/polynomial equations using Bisection, Secant, Regula-Falsi, Newton-Raphson, and Fixed Point methods.",
          "CO2: Solve systems of linear algebraic equations using LU decomposition, Gauss Elimination, Gauss-Jordan, Gauss-Jacobi, Gauss-Seidel, and SOR methods.",
          "CO3: Master interpolation techniques: Newton forward/backward, Stirling, Bessel, Newton's divided difference, and Lagrange interpolation.",
          "CO4: Compute numerical derivatives and definite integrals using Newton-Cotes, Trapezoidal, Simpson's 1/3 & 3/8, and Gauss Quadrature formulas.",
          "CO5: Solve linear difference equations and ODE initial value problems using Euler's, Modified Euler's, Picard's, and Runge-Kutta methods."
        ],
        "theory": {
          "credits": "6",
          "totalHours": "60 hrs (60 Lectures)",
          "units": [
            {
              "title": "Unit 1: Errors & Roots of Equations (12 Lectures)",
              "topics": [
                "Errors: Relative, Absolute, Round off, Truncation.",
                "Finding roots of Transcendental and Polynomial equations: Bisection method, Secant method, Regula-Falsi method, Newton-Raphson method, Fixed point iteration method.",
                "Rate of convergence of root-finding methods."
              ]
            },
            {
              "title": "Unit 2: System of Linear Algebraic Equations (12 Lectures)",
              "topics": [
                "Solution of system of linear algebraic equations: Partial pivoting.",
                "LU decomposition and its applications.",
                "Gaussian Elimination and Gauss-Jordan methods.",
                "Gauss-Jacobi method, Gauss-Seidel method, SOR methods and their convergence analysis."
              ]
            },
            {
              "title": "Unit 3: Finite Differences & Interpolation (12 Lectures)",
              "topics": [
                "Finite differences, Difference operators.",
                "Newton's Forward and Backward interpolation.",
                "Central difference formulas: Stirling's Formula, Bessel's Formula.",
                "Newton's divided difference interpolation, Lagrange's Interpolation, Inverse Interpolation."
              ]
            },
            {
              "title": "Unit 4: Numerical Differentiation and Integration (12 Lectures)",
              "topics": [
                "Numerical differentiation formulas based on interpolation.",
                "Numerical Integration: Newton-Cotes quadrature formula.",
                "Trapezoidal rule, Simpson's 1/3rd rule, Simpson's 3/8th rule, Gauss quadrature formula."
              ]
            },
            {
              "title": "Unit 5: Difference Equations & ODE Numerical Solutions (12 Lectures)",
              "topics": [
                "Solution of difference equation of the first order, General solution, Linear difference equation with constant coefficients.",
                "Solution of ordinary differential equations (single step methods): Euler's method, Modified Euler's method, Picard's method of successive approximations.",
                "Runge-Kutta methods (2nd and 4th order)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Sastry, S.S. (2012). Introductory Methods of Numerical Analysis (5th ed.). Prentice-Hall of India.",
          "Iyengar, S.R.K., Jain, R.K., & Jain, M.K. (2012). Numerical Methods for Scientific and Engineering Computation (6th ed.). New Age International.",
          "Rajaraman, V. (2004). Computer Oriented Numerical Methods (3rd ed.). Prentice-Hall of India.",
          "Balaguruswamy, E. (1999). Numerical Methods. McGraw Hill Education.",
          "Bradie, Brian (2006). A Friendly Introduction to Numerical Analysis. Pearson Education."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Mathematical Finance",
        "courseCode": "MJC-16",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand interest rates, zero rates, forward rates, bond pricing, duration, convexity, and exchange-traded vs. OTC financial markets.",
          "CO2: Master derivative instruments: forward contracts, futures, options, hedging, speculation, arbitrage, and the No-Arbitrage principle.",
          "CO3: Analyze option contracts, underlying assets, option pricing factors, bounds on option prices, put-call parity, and dividend effects.",
          "CO4: Master the Binomial Option Pricing Model, risk-neutral valuation for European and American options, lognormal stock price models, and expected returns."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Interest Rates and Bond Markets (10 Lectures)",
              "topics": [
                "Interest rates, Types of rates, Measuring interest rates, Zero rates, Bond pricing.",
                "Forward rate, Duration, Convexity.",
                "Exchange traded markets and Over-the-Counter (OTC) markets."
              ]
            },
            {
              "title": "Unit 2: Financial Derivatives & Arbitrage (10 Lectures)",
              "topics": [
                "Derivatives: Forward contracts, Futures contract, Options, Types of traders (Hedgers, Speculators, Arbitrageurs).",
                "Hedging, Speculation, Arbitrage, No Arbitrage principle.",
                "Short selling, Forward price for an investment asset."
              ]
            },
            {
              "title": "Unit 3: Mechanics of Option Markets (10 Lectures)",
              "topics": [
                "Types of Options, Option positions, Underlying assets.",
                "Factors affecting option prices, Bounds on option prices.",
                "Put-call parity, Early exercise of American options, Effect of dividends."
              ]
            },
            {
              "title": "Unit 4: Binomial Trees & Stochastic Asset Modeling (10 Lectures)",
              "topics": [
                "Binomial option pricing model (One-step and multi-step).",
                "Risk-neutral valuation (for European and American options on assets following binomial tree model).",
                "Lognormal property of stock prices, Distribution of rate of return, expected return."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Hull, J.C., & Basu, S. (2010). Options, Futures and Other Derivatives (7th ed.). Pearson Education.",
          "Luenberger, David G. (1998). Investment Science. Oxford University Press.",
          "Ross, Sheldon M. (2011). An Elementary Introduction to Mathematical Finance (3rd ed.). Cambridge University Press."
        ]
      }
    ]
  },
  "MIC": {
    "1st": [
      {
        "courseTitle": "Algebra",
        "courseCode": "MIC-01",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Employ De Moivre's theorem in solving trigonometric equations, hyperbolic functions, and Gregory series.",
          "CO2: Understand Cartesian products of sets, equivalence relations, functions, and countable/uncountable sets.",
          "CO3: Master matrix operations, transpose, symmetric/skew-symmetric, Hermitian/skew-Hermitian, adjoint, inverse, and linear systems.",
          "CO4: Solve polynomial equations using symmetric functions of roots, transformation of equations, and Cardon's method for cubic equations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Trigonometry and Complex Quantities (08 Lectures)",
              "topics": [
                "Polar representation of complex numbers, De Moivre's theorem and its applications.",
                "Logarithms of complex quantities, Hyperbolic functions, Gregory series, Summation of series."
              ]
            },
            {
              "title": "Unit 2: Set Theory & Relations (07 Lectures)",
              "topics": [
                "Cartesian product of sets, Equivalence relations, Functions, Composition of functions, Invertible functions.",
                "Partial and Total order relations, Countable and Uncountable sets."
              ]
            },
            {
              "title": "Unit 3: Matrices and Linear Systems (08 Lectures)",
              "topics": [
                "Matrices, Operation on Matrices, Kinds of matrices.",
                "Transpose, symmetric & skew-symmetric matrices, Hermitian and skew-Hermitian matrices.",
                "Adjoint and Inverse of a matrix, Solution of a system of linear equations by matrix methods."
              ]
            },
            {
              "title": "Unit 4: Theory of Equations (07 Lectures)",
              "topics": [
                "Fundamental theorem of algebra, Relation between roots and coefficients of a polynomial equation.",
                "Evaluation of symmetric functions of roots, Transformation of equations.",
                "Solution of Cubic equation (Cardon's method)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Dickson, Leonard Eugene (1922). First Course in The Theory of Equations. John Wiley & Sons.",
          "Lay, David C., Lay, Steven R., & McDonald, Judi J. (2016). Linear Algebra and its Applications (5th ed.). Pearson Education.",
          "Andrilli, Stephen, & Hecker, David (2016). Elementary Linear Algebra (5th ed.). Academic Press.",
          "Burton, David M. (2007). Elementary Number Theory (7th ed.). Tata McGraw Hill.",
          "K.K. Jha. Advanced Set Theory. Nav Bharat Prakashan, Patna.",
          "M.L. Khanna. Theory of Equations. Jai Prakash Nath & Co.",
          "Lalji Prasad. Matrices. Paramount Publications.",
          "Dasgupta. Trigonometry. Bharti Bhawan, Patna."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Calculus & Geometry",
        "courseCode": "MIC-02",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Apply successive differentiation, Leibnitz's theorem, Taylor/Maclaurin series, partial differentiation, Euler's theorem, L'Hospital's rule, and curvature.",
          "CO2: Evaluate definite integrals, reduction formulae, plane curve areas/lengths, and volumes/surfaces of solids of revolution.",
          "CO3: Master transformation of rectangular axes, reduction of conic equations, and equations of tangent and normal.",
          "CO4: Understand 3D geometry of spheres, cones, cylinders, central conicoids, paraboloids, and generating lines."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Differential Calculus (08 Lectures)",
              "topics": [
                "Successive differentiation and Leibnitz's theorem, Maclaurin's and Taylor's series of Expansion.",
                "Partial differentiation and Euler's theorem, Total Differential, L'Hospital's rule.",
                "Tangent and Normal, Asymptotes, Curvature."
              ]
            },
            {
              "title": "Unit 2: Integral Calculus (08 Lectures)",
              "topics": [
                "Evaluation of definite integrals, Reduction formulae.",
                "Length of plane curves and area bounded by plane curves.",
                "Volumes and Surface area of solid of revolution."
              ]
            },
            {
              "title": "Unit 3: Analytical Geometry of 2D (07 Lectures)",
              "topics": [
                "Transformation of rectangular axes.",
                "General equations of Conic and its Reduction to the normal form.",
                "Equation of the tangent and normal at a point of the Conic."
              ]
            },
            {
              "title": "Unit 4: Analytical Geometry of 3D (07 Lectures)",
              "topics": [
                "Sphere, Cone, Cylinder.",
                "Central conicoid, Paraboloids, Plane section of conicoid, Generating lines, Tangent plane and normal to a conicoid."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Anton, Howard, Bivens, Irl, & Davis, Stephen (2013). Calculus (10th ed.). John Wiley & Sons.",
          "Thomas, Jr. George B., Weir, Maurice D., & Hass, Joel (2014). Thomas' Calculus (13th ed.). Pearson Education.",
          "S.L. Loney. Coordinate Geometry.",
          "Lalji Prasad. Integral Calculus. Paramount Publications.",
          "Shanti Narayan & P.K. Mittal. Integral Calculus. S. Chand.",
          "B.C. Das and B.N. Mukherjee. Differential Calculus. Dhur & Sons.",
          "Dasgupta. Differential Calculus. Bharti Bhawan."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Real Analysis",
        "courseCode": "MIC-03",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand properties of the real line, Archimedean property, density, completeness, and theorems on infima/suprema.",
          "CO2: Comprehend sequences, bounded and monotone sequences, subsequences, Bolzano-Weierstrass theorem, and Cauchy convergence principle.",
          "CO3: Apply Cauchy criterion and tests for convergence of infinite series (comparison, ratio, root, Raabe, Gauss, Leibnitz tests)."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Real Numbers (10 Lectures)",
              "topics": [
                "Dedekind theory of real numbers, Algebraic and order properties of R.",
                "Archimedean Property, Density Theorem, Completeness property of R.",
                "Bounded sets, Theorems on Suprema and Infima."
              ]
            },
            {
              "title": "Unit 2: Sequences of Real Numbers (10 Lectures)",
              "topics": [
                "Sequence and its convergence, Bounded sequence, Monotone sequences, Subsequences.",
                "Limit of a sequence, Limit Theorem, Bolzano-Weierstrass theorem for sequences.",
                "Cauchy sequence, Cauchy's general principle of convergence."
              ]
            },
            {
              "title": "Unit 3: Infinite Series (10 Lectures)",
              "topics": [
                "Infinite series and their convergence, Cauchy Criterion.",
                "Tests for convergence: Comparison test, D'Alembert Ratio Test, Cauchy's root test, Rabbe's test, Logarithmic test, Cauchy integral test, Gauss's test.",
                "Alternating series, Leibnitz test, Absolute and Conditional convergence."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Bartle, Robert G., & Sherbert, Donald R. (2015). Introduction to Real Analysis (4th ed.). Wiley India.",
          "Ross, Kenneth A. (2013). Elementary Analysis: The theory of calculus (2nd ed.). Springer.",
          "Malik, S.C. & Arora, Savita (2021). Mathematical Analysis (6th ed.). New Age International."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Ordinary Differential Equations",
        "courseCode": "MIC-04",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate and solve first order ODEs (variables separable, homogeneous, exact, linear, Bernoulli).",
          "CO2: Solve first order higher degree equations, Clairaut's form, singular solutions, orthogonal trajectories, and linear ODEs with constant/Euler-Cauchy coefficients.",
          "CO3: Solve second order linear ODEs with variable coefficients using normal form, variation of parameters, and total/simultaneous differential equations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: First Order First Degree ODEs (10 Lectures)",
              "topics": [
                "Formulation of Differential equations, order and degree.",
                "General, Particular and Singular solutions of differential equations.",
                "Variables separable, Homogeneous differential equations, Exact differential equations, Linear differential equations, Bernoulli equation."
              ]
            },
            {
              "title": "Unit 2: First Order Higher Degree & Higher Order Linear Equations (10 Lectures)",
              "topics": [
                "Differential equations of first order but not of first degree, Singular solutions, Clairaut's form.",
                "Orthogonal Trajectories of family of curves.",
                "Linear differential equations with constant coefficients, Cauchy-Euler Equation, Legendre's Linear Equation."
              ]
            },
            {
              "title": "Unit 3: Variable Coefficient Second Order ODEs (10 Lectures)",
              "topics": [
                "Second order linear differential equations with variable coefficients: Use of a known solution to find another.",
                "Normal form, method of undetermined coefficients, variation of parameters.",
                "Total differential equation in three variables, Simultaneous differential equations."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Simmons, George F. (2016). Differential Equations with Applications and Historical Notes. Tata McGraw Hill.",
          "Raisinghania, M.D. (2020). Ordinary and Partial Differential Equations (20th ed.). S. Chand.",
          "Prasad, Lalji (2019). Differential Equations. Paramount Publication."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Theory of Real Functions",
        "courseCode": "MIC-05",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand limits of functions, sequential criteria, divergence criteria, and infinite limits.",
          "CO2: Master continuous functions, algebra of continuous functions, closed interval properties, and uniform continuity.",
          "CO3: Analyze differentiability, Darboux's theorem, Rolle's theorem, Lagrange's and Cauchy's Mean Value Theorems."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Limits of Functions (08 Lectures)",
              "topics": [
                "Limit of functions, Sequential criterion for limits, Divergence criteria, Limit theorems.",
                "One-sided limits, Infinite limits and limits at infinity."
              ]
            },
            {
              "title": "Unit 2: Continuous Functions (10 Lectures)",
              "topics": [
                "Continuous functions, Sequential criterion for continuity and discontinuity.",
                "Algebra of continuous functions, Properties of continuous functions on closed intervals.",
                "Uniform continuity, Uniform continuity theorem."
              ]
            },
            {
              "title": "Unit 3: Differentiability and Mean Value Theorems (12 Lectures)",
              "topics": [
                "Differentiability of a function, Algebra of differentiable functions.",
                "Increasing and Decreasing functions, Sign of derivatives.",
                "Darboux's theorem, Intermediate value theorem for derivatives.",
                "Rolle's theorem, Lagrange's and Cauchy's Mean value theorem and applications."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Bartle, Robert G., & Sherbert, Donald R. (2015). Introduction to Real Analysis (4th ed.). Wiley India.",
          "Ross, Kenneth A. (2013). Elementary Analysis: The theory of calculus (2nd ed.). Springer.",
          "Malik, S.C. & Arora, S. (2021). Mathematical Analysis (6th ed.). New Age International."
        ]
      },
      {
        "courseTitle": "Group Theory",
        "courseCode": "MIC-06",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand definition, elementary properties of groups, subgroups, generators, and cyclic groups.",
          "CO2: Master permutation groups, alternating groups, cosets, Lagrange's theorem, Fermat's/Euler's theorems, and normal subgroups.",
          "CO3: Understand group homomorphisms, kernel, fundamental theorem of homomorphism, Cayley's theorem, and isomorphism theorems."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Groups & Subgroups (10 Lectures)",
              "topics": [
                "Definition and examples of groups, Elementary properties of groups.",
                "Subgroups and examples of subgroups, Generator of a group, Cyclic group, Properties of cyclic groups."
              ]
            },
            {
              "title": "Unit 2: Permutation Groups and Normal Subgroups (10 Lectures)",
              "topics": [
                "Permutations Group, Even and odd permutations, Alternating Group.",
                "Cosets and its properties, Lagrange's theorem, Fermat's Little theorem, Normal subgroups, Quotient groups, Center of a group, Normalizer."
              ]
            },
            {
              "title": "Unit 3: Homomorphisms and Isomorphisms (10 Lectures)",
              "topics": [
                "Group homomorphisms, Kernel of a group homomorphism.",
                "Fundamental theorem of group homomorphism, Isomorphisms, Properties of Isomorphisms.",
                "First, Second and Third isomorphism theorems for groups, Cayley's theorem."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Gallian, Joseph A. (2013). Contemporary Abstract Algebra (8th ed.). Cengage Learning India.",
          "Herstein, I.N. (2003). Topics in Algebra (2nd ed.). John Wiley & Sons.",
          "Khanna, Vijay K. & Bhambri, S.K. A Course in Abstract Algebra (5th ed.). Vikas Publishing."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Partial Differential Equations",
        "courseCode": "MIC-07",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate and classify PDEs, derivation by elimination of arbitrary functions.",
          "CO2: Solve first order linear and non-linear PDEs using Lagrange's and Charpit's methods.",
          "CO3: Apply Laplace transformations and inverse transforms to partial differential equations and convolutions."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Introduction to PDEs (10 Lectures)",
              "topics": [
                "Introduction to PDEs, Order and Degree of a PDE, Classification of partial differential equations.",
                "Formation and solution of PDEs, derivation of PDEs by elimination of arbitrary functions."
              ]
            },
            {
              "title": "Unit 2: First Order PDEs (10 Lectures)",
              "topics": [
                "Linear partial differential equation of first order, Lagrange's solution of linear equations.",
                "Solution of partial differential equations using Charpit's method.",
                "Solution of special non-linear PDE forms: f(p,q)=0, f(z,p,q)=0, f(x,p)=f(y,q), and z=px+qy+f(p,q)."
              ]
            },
            {
              "title": "Unit 3: Laplace Transforms for PDEs (10 Lectures)",
              "topics": [
                "Laplace transforms and its application to partial differential equations.",
                "Inverse Laplace transformations and its properties, convolutions."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Myint-U, Tyn & Debnath, Lokenath (2007). Linear Partial Differential Equation for Scientists and Engineers (4th ed.). Springer.",
          "Sneddon, I.N. (2006). Elements of Partial Differential Equations. Dover Publications.",
          "Raisinghania, M.D. Ordinary and Partial Differential Equations. S. Chand."
        ]
      },
      {
        "courseTitle": "Ring Theory and Linear Algebra",
        "courseCode": "MIC-08",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand rings, subrings, ideals, prime/maximal ideals, and quotient rings.",
          "CO2: Master ring homomorphisms and isomorphism theorems for rings.",
          "CO3: Grasp linear spaces, subspaces, linear span, linear dependence/independence, basis, and finite dimensional vector spaces."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Rings and Ideals (10 Lectures)",
              "topics": [
                "Definition and examples of rings, properties of rings, subrings, characteristics of a subring.",
                "Ideal, Ideal generated by a subset of a ring, quotient ring, operation on ideals, prime and maximal ideals."
              ]
            },
            {
              "title": "Unit 2: Ring Homomorphisms (10 Lectures)",
              "topics": [
                "Ring homomorphisms, properties of ring homomorphism, isomorphism theorems."
              ]
            },
            {
              "title": "Unit 3: Vector Spaces (10 Lectures)",
              "topics": [
                "Definition of linear space, general properties of linear space, vector subspaces.",
                "Linear combination of vectors, linear span, Linear dependence and independence of vectors.",
                "Basis of a vector space, finite dimensional vector spaces."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Gallian, Joseph A. (2013). Contemporary Abstract Algebra (8th ed.). Cengage Learning India.",
          "Friedberg, Stephen H., Insel, Arnold J., & Spence, Lawrence E. (2003). Linear Algebra (4th ed.). Prentice-Hall.",
          "Herstein, I.N. Abstract Algebra. Prentice Hall.",
          "Lalji Prasad. Linear Algebra. Paramount Publications."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Multivariate Calculus",
        "courseCode": "MIC-09",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master limits, continuity, partial derivatives, and Euler's theorem on homogeneous functions for several variables.",
          "CO2: Evaluate double and triple integrals in Cartesian and polar coordinates with change of variables.",
          "CO3: Compute line integrals, mass, work, fundamental theorem of line integrals, vector fields, divergence, and curl.",
          "CO4: Apply Green's theorem, Stokes' theorem, and surface integrals."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Functions of Several Variables (10 Lectures)",
              "topics": [
                "Functions of several variables, Limits and continuity, Partial derivatives.",
                "Higher order partial derivatives, Euler's theorem on Homogeneous functions."
              ]
            },
            {
              "title": "Unit 2: Multiple Integrals (10 Lectures)",
              "topics": [
                "Double integrals in Cartesian and polar coordinates, Triple integrals.",
                "Change of variables in double and triple integrals."
              ]
            },
            {
              "title": "Unit 3: Line Integrals and Vector Fields (10 Lectures)",
              "topics": [
                "Line integrals, Applications of line integrals: Mass and Work.",
                "Fundamental theorem for line integrals.",
                "Definition of vector field, Conservative vector fields, Divergence and curl."
              ]
            },
            {
              "title": "Unit 4: Integral Theorems (10 Lectures)",
              "topics": [
                "Green's theorem - Tangential and Normal form, Evaluate line integrals using Green's theorem.",
                "Surface integrals, Stokes' theorem."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Malik, S.C. & Arora, Savita (2017). Mathematical Analysis. New Age International.",
          "Marsden, J.E., Tromba, A., & Weinstein, A. (2004). Basic Multivariable Calculus. Springer.",
          "Thomas, Jr. George B., Hass, Joel, Heil, Christopher, Weir, Maurice D. Thomas' Calculus (14th ed.). Pearson."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Complex Analysis",
        "courseCode": "MIC-10",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Understand algebra of complex numbers, continuity, differentiability, analytic functions, and Cauchy-Riemann equations.",
          "CO2: Evaluate exponential, trigonometric, hyperbolic functions, branch cuts of logarithms, and contour integrals.",
          "CO3: Master Cauchy's theorem, Cauchy-Goursat theorem, Cauchy integral formula, and Morera's theorem.",
          "CO4: Expand complex functions into Taylor and Laurent series and analyze power series convergence."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40 hrs (40 Lectures)",
          "units": [
            {
              "title": "Unit 1: Analytic Functions (10 Lectures)",
              "topics": [
                "Introduction to complex number and geometrical interpretation, algebra of complex numbers.",
                "Functions of complex variables, limit of a complex function, continuity and uniform continuity.",
                "Differentiability, Analytic and regular functions, Cauchy-Riemann equations and applications."
              ]
            },
            {
              "title": "Unit 2: Elementary Functions and Contours (10 Lectures)",
              "topics": [
                "Exponential function, logarithmic function, Branches, trigonometric and hyperbolic functions.",
                "Derivatives of functions, Contours, Contour integrals and examples."
              ]
            },
            {
              "title": "Unit 3: Complex Integration (10 Lectures)",
              "topics": [
                "Complex integration, Cauchy's theorem, Cauchy's Goursat theorem (Statement only).",
                "Primitives, Cauchy's integral formula, Cauchy's integral formula for the derivative of an analytic function, Morera's theorem."
              ]
            },
            {
              "title": "Unit 4: Taylor and Laurent Series (10 Lectures)",
              "topics": [
                "Convergence of sequences and series.",
                "Taylor series and examples; Laurent series and examples.",
                "Absolute and uniform convergence of power series."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Brown, James Ward, & Churchill, Ruel V. (2014). Complex Variables and Applications (9th ed.). McGraw-Hill Education.",
          "S. Ponnusamy (2011). Foundation of complex Analysis. Alpha Science International.",
          "Bak, Joseph & Newman, Donald J. (2010). Complex analysis (3rd ed.). Springer."
        ]
      }
    ]
  },
  "MDC": {
    "1st": [
      {
        "courseTitle": "Basic Mathematics for Multidisciplinary Applications",
        "courseCode": "MDC-01",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master basic arithmetic operations on real numbers, linear and quadratic equations, polynomial factorization, and HCF/LCM.",
          "CO2: Understand matrices, operations (addition, subtraction, multiplication), determinants (2x2 and 3x3), and linear system solutions.",
          "CO3: Apply distance and section formulas, slope and straight line equations, trigonometric ratios and identities to solve triangle and geometric problems."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Fundamentals of Arithmetic and Algebra (10 Lectures)",
              "topics": [
                "Basic operations on real numbers and properties.",
                "Introduction to linear and quadratic equations.",
                "Factorization of polynomials.",
                "Concept of HCF, LCM, and divisors.",
                "Simplification of algebraic expressions and identities."
              ]
            },
            {
              "title": "Unit 2: Basics of Matrices and Determinants (10 Lectures)",
              "topics": [
                "Introduction to matrices and types of matrices.",
                "Operations on matrices: Addition, subtraction, multiplication.",
                "Determinant of a 2x2 and 3x3 matrix.",
                "Properties of determinants.",
                "Solution of systems of linear equations using matrices (up to 2 variables)."
              ]
            },
            {
              "title": "Unit 3: Basics of Geometry and Trigonometry (10 Lectures)",
              "topics": [
                "Distance formula and section formula.",
                "Introduction to slope and equations of a straight line.",
                "Basics of trigonometric ratios and identities.",
                "Applications of trigonometry in solving triangles.",
                "Introduction to coordinate geometry concepts."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Sharma, R. C., Basic Algebra, Bharti Prakashan, Patna.",
          "Strang, G., Introduction to Linear Algebra.",
          "Rosen, K. H., Discrete Mathematics and Its Applications.",
          "Thomas, G. B., Calculus and Analytic Geometry.",
          "Loney, S. L., Plane Trigonometry, Part I."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Calculus & Geometry",
        "courseCode": "MDC-02",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Master basic differential calculus: successive differentiation, Leibnitz's theorem (without proof), Taylor/Maclaurin series, partial differentiation, and Euler's theorem.",
          "CO2: Evaluate definite integrals, reduction formulae, length of plane curves, and areas bounded by plane curves.",
          "CO3: Understand transformation of rectangular axes, general conic equations, normal forms, and tangent/normal equations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Basics of Differential Calculus (10 Lectures)",
              "topics": [
                "Successive differentiation & Leibnitz's theorem (without proof).",
                "Maclaurin's & Taylor's series of expansion.",
                "Partial differentiation & Euler's theorem.",
                "Total differential."
              ]
            },
            {
              "title": "Unit 2: Basics of Integral Calculus (10 Lectures)",
              "topics": [
                "Evaluation of definite integrals.",
                "Reduction formulae.",
                "Length of plane curve.",
                "Area bounded by plane curves."
              ]
            },
            {
              "title": "Unit 3: Geometrical Properties of Conic Section (10 Lectures)",
              "topics": [
                "Transformation of rectangular axes.",
                "General equations of conics.",
                "Normal form of conics.",
                "Equations of the tangents and normal at a point of the Conic."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Anton, Howard, Bivens, Irl, & Davis, Stephen (2013). Calculus (10th ed.). John Wiley & Sons.",
          "Osborne, George, A. (1906). Differential & Integral Calculus with Examples and Applications.",
          "Lalji Prasad, Integral Calculus, Paramount Publications Patna.",
          "S.L. Loney, Coordinate Geometry."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Ordinary Differential Equations",
        "courseCode": "MDC-03",
        "credits": "3",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate differential equations and solve first order first degree ODEs (separable, homogeneous, linear, Bernoulli, exact).",
          "CO2: Solve equations solvable for x, y, p, Clairaut's form, singular solutions, and orthogonal trajectories.",
          "CO3: Solve linear differential equations of order greater than one with constant coefficients (CF & PI).",
          "CO4: Solve second order linear differential equations with variable coefficients using known solutions, normal form, undetermined coefficients, and variation of parameters."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30 hrs (30 Lectures)",
          "units": [
            {
              "title": "Unit 1: Differential Equations of First Order and First Degree (12 Lectures)",
              "topics": [
                "Formulation of Differential equations, Order and degree of Differential equations.",
                "Variable separable Differential equations and equations reducible to Variable separable.",
                "Homogeneous Differential equations and equations reducible to Homogeneous forms.",
                "Linear Differential equations and equations reducible to Linear forms (Bernoulli equation).",
                "Exact Differential equations and equations reducible to Exact forms."
              ]
            },
            {
              "title": "Unit 2: First Order Higher Degree Differential Equations (08 Lectures)",
              "topics": [
                "Equation solvable for x, Equation solvable for y, Equation solvable for p.",
                "Clairaut's form, Singular Solutions, General and Particular solutions.",
                "Orthogonal Trajectories of family of curves, Wronskian and its properties."
              ]
            },
            {
              "title": "Unit 3: Higher Order Linear Equations with Constant Coefficients (06 Lectures)",
              "topics": [
                "Linear Differential equations of order greater than one with constant coefficients.",
                "Complementary Functions (CF).",
                "Particular Integrals (PI)."
              ]
            },
            {
              "title": "Unit 4: Second Order Linear Equations with Variable Coefficients (04 Lectures)",
              "topics": [
                "Second order Linear Differential equations with variable coefficients.",
                "Use of a known solution to find another.",
                "Normal form, Method of undetermined coefficients, Variation of parameters."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Simmons, George F. (2016). Differential Equations with Application and Historical Notes. Tata-McGraw Hill.",
          "Raisinghania, M. D. (2020). Ordinary and Partial Differential Equations (20th ed.). S. Chand Publication.",
          "Bronson, R. & Costa, Gabriel B. (2021). Schaum's Outline of Differential Equations (5th ed.). McGraw Hill.",
          "Prasad, Lalji. (2019). Differential Equations. Paramount Publication."
        ]
      }
    ]
  },
  "INT": {
    "5th": [
      {
        "courseTitle": "Internship / Apprenticeship / Industrial Training / Mathematical Project",
        "courseCode": "INT-1",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Apply mathematical formulations, numerical computing, or statistical/financial modeling in an industry, laboratory, educational or research setting.",
          "CO2: Demonstrate professional ethics, collaborative problem solving, and technical presentation skills."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "120 hrs",
          "units": [
            {
              "title": "Internship / Industry & Lab Training Workflow (4 Credits)",
              "topics": [
                "Summer Internship of minimum 4 weeks duration in an academic institution, research laboratory, data analytics firm, financial institute, software industry, or approved organization.",
                "Practical training in scientific computing tools (Python, MATLAB, R, Mathematica, LaTeX).",
                "Submission of Internship Logbook, Project Report, and evaluation via Viva-Voce."
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
        "courseTitle": "Research Project / Dissertation in Mathematics",
        "courseCode": "RP-1",
        "credits": "12",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate and conduct an independent mathematical research project under faculty supervision.",
          "CO2: Prepare a comprehensive research dissertation and defend findings in an open Viva-Voce examination."
        ],
        "theory": {
          "credits": "12",
          "totalHours": "360 hrs",
          "units": [
            {
              "title": "Research Dissertation / Project (12 Credits)",
              "topics": [
                "Selection of research problem in Pure Mathematics, Applied Mathematics, Computational Mathematics, Fluid Dynamics, Topology, Operations Research, Mathematical Physics, or Mathematical Finance.",
                "Literature review, theorem proving, mathematical formulation, numerical simulations, and result analysis.",
                "Dissertation writing in LaTeX, preprint preparation, presentation, and Viva-Voce defence."
              ]
            }
          ]
        }
      }
    ]
  }
};
