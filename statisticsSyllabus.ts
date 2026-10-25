/**
 * @file statisticsSyllabus.ts
 * @description LNMU B.A. & B.Sc. Statistics Honours Syllabus under 4-Year CBCS & NEP 2020 Framework.
 * 
 * Includes comprehensive curriculum specifications, Program Outcomes (POs),
 * and semester-wise theory and practical distributions for:
 * - Major Courses (MJC-1 through MJC-16)
 * - Minor Courses (MIC-1 through MIC-10)
 * - Multidisciplinary Courses (MDC-1 through MDC-3)
 */

// B.A. & B.Sc. Statistics Syllabus under 4-Year CBCS & NEP 2020 for Universities of Bihar
// Source: Approved Uniform Syllabus by Subject Expert Committee (Patna Univ, TMBU Bhagalpur, BNMU Madhepura, etc.)

export const STATISTICS_SYLLABUS = {
  "regulations": {
    "programTitle": "4-Year Bachelor of Arts / Science (Statistics) Honours Degree B.A. / B.Sc. (Hons) Statistics",
    "duration": "4 Years (3+1 Years / 8 Semesters)",
    "academicSession": "2023-24 onwards",
    "framework": "Choice Based Credit System (CBCS) & NEP 2020 (Uniform Curriculum for Universities of Bihar)",
    "submittedBy": "Subject Expert Committee: Dr. Nesar Ahmad (Prof. & Head, Univ. Dept. of Statistics & Computer Applications, TMBU Bhagalpur), Dr. Arbind Kumar Singh (Assoc. Prof., Univ. Dept. of Statistics, BNMU Madhepura), Dr. Manoj Kumar Rastogi (Asst. Prof., Univ. Dept. of Statistics, Patna Univ), Dr. Surbhi Suman (Asst. Prof., Univ. Dept. of Statistics, Patna Univ)",
    "referenceLetter": "Letter No-BSU (UGC) 02/2023-1457 GS (I) Dated-14.09.2023, Rajbhavan, Bihar, Patna"
  },
  "examinationScheme": {
    "endSemesterExamMarks": 70,
    "continuousInternalAssessmentMarks": 30,
    "totalMarks": 100,
    "pattern": {
      "partA": "Compulsory - consisting of objective/multiple choice type (10 x 2 = 20 Marks)",
      "partB": "Short answer type - 4 questions to be answered out of 6 questions (4 x 5 = 20 Marks)",
      "partC": "Long answer type - 3 questions to be answered out of 5 questions (3 x 10 = 30 Marks)"
    }
  },
  "MJC": {
    "1st": [
      {
        "courseTitle": "Descriptive Statistics",
        "courseCode": "MJC-1",
        "credits": "6",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of descriptive statistics including graphical representation",
          "To introduce theory of Attributes"
        ],
        "courseOutcomes": [
          "CO1: Identify the basic problem in statistics.",
          "CO2: Understand the statistical data, graphical presentation and scales of measurements.",
          "CO3: Apply various statistical methods to analyze the statistical data.",
          "CO4: Use the Correlation coefficient and Rank Correlation etc.",
          "CO5: Apply regression analysis and fitting of different polynomials curves.",
          "CO6: Measure the degree of association between two variables."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40",
          "units": [
            {
              "title": "Unit I: Statistical Methods & Presentation of Data (09 hrs)",
              "topics": [
                "Definition and scope of Statistics, concepts of population and sample. Data: quantitative and qualitative, variables, frequency and non frequency.",
                "Scales of measurement: nominal, ordinal, interval and ratio.",
                "Presentation of data: tabular and graphical including histogram, ogives and box plot."
              ]
            },
            {
              "title": "Unit II: Measures of Central Tendency & Dispersion (11 hrs)",
              "topics": [
                "Measures of Central Tendency: mathematical and positional, their relative merits and demerits.",
                "Measures of Dispersion: range, quartile deviation, mean deviation, standard deviation, coefficient of variation.",
                "Moments, absolute moments, factorial moments, skewness and kurtosis, Sheppard's corrections."
              ]
            },
            {
              "title": "Unit III: Bivariate Data, Correlation & Regression (11 hrs)",
              "topics": [
                "Bivariate data: Definition, scatter diagram, Karl Pearson product moment correlation coefficient and its properties, rank correlation, partial and multiple correlation (3 variables only).",
                "Simple linear regression, properties of regression coefficients, principle of least squares and fitting of polynomials and exponential curves."
              ]
            },
            {
              "title": "Unit IV: Theory of Attributes (09 hrs)",
              "topics": [
                "Theory of Attributes: Notations, Dichotomy, classes & class frequency, consistency of data and its conditions of independence of attributes, criterion of independence.",
                "Association of attributes, Yule's coefficient of association."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Experiment Performance", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Continuous Practical Record / Notebook", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Graphical representation of data: Histogram, Frequency Curve, Frequency Polygon, Ogives (cumulative frequency curves), and Box-plot.",
            "2. Computation of Measures of Central Tendency: Arithmetic Mean, Median, Mode, Geometric Mean, and Harmonic Mean for grouped and ungrouped data.",
            "3. Computation of Measures of Dispersion: Range, Quartile Deviation, Mean Deviation, Standard Deviation, and Coefficient of Variation (C.V.).",
            "4. Calculation of Raw Moments, Central Moments, Factorial Moments, and applying Sheppard's corrections for grouping errors.",
            "5. Measures of Skewness (Karl Pearson's, Bowley's, and based on moments) and Kurtosis (Beta-2, Gamma-2).",
            "6. Computation of Karl Pearson's Product Moment Correlation Coefficient and Spearman's Rank Correlation Coefficient (with and without ties).",
            "7. Fitting of Linear Regression lines (Y on X and X on Y) and finding the point of intersection and angle between regression lines.",
            "8. Fitting of Second Degree Parabola and Exponential curves ($Y = ab^X, Y = ae^{bX}$) using the principle of least squares.",
            "9. Analysis of Categorical Data: Checking consistency of data of 2 and 3 attributes, determination of class frequencies.",
            "10. Testing Independence of Attributes and calculation of Yule's Coefficient of Association and Coefficient of Colligation."
          ]
        },
        "suggestedBooks": [
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Mood, A.M. Graybill, F.A. and Boes, D.C. (2007): Introduction to the Theory of Statistics, Tata McGraw-Hill Pub. Co. Ltd.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Theory of Probability",
        "courseCode": "MJC-2",
        "credits": "6",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic concept of probability and probability distribution",
          "To introduce mathematical expectation and moment generating function"
        ],
        "courseOutcomes": [
          "CO1: Understand the concept of probability.",
          "CO2: Find elementary probability of an event.",
          "CO3: Use various rules in the theory of elementary probability.",
          "CO4: Apply Random Variables and their probability distribution.",
          "CO5: Compute marginal and conditional distribution for two dimensional random variable.",
          "CO6: Use mathematical expectation and m.g.f and c.f.",
          "CO7: Understand special probability distributions with their properties."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40",
          "units": [
            {
              "title": "Unit I: Concepts of Probability & Theorems (09 hrs)",
              "topics": [
                "Probability: Introduction, random experiments, sample space, events and algebra of events.",
                "Definitions of Probability — classical, statistical, and axiomatic.",
                "Laws of addition and multiplication, independence and mutual independence of events, theorem of total probability, conditional probability, Baye's theorem and its applications."
              ]
            },
            {
              "title": "Unit II: Random Variables & Probability Distributions (11 hrs)",
              "topics": [
                "Random variables: discrete and continuous random variables, probability mass function (p.m.f), probability density functions (p.d.f) and cumulative density function (c.d.f) with illustrations and properties of random variables, univariate transformations with illustrations.",
                "Two dimensional random variables: discrete and continuous type, joint, marginal, and conditional p.m.f, p.d.f., and c.d.f., independence of variables, bivariate transformations with illustrations."
              ]
            },
            {
              "title": "Unit III: Mathematical Expectation & Generating Functions (10 hrs)",
              "topics": [
                "Mathematical Expectation and Generating Functions: Expectation of univariate and bivariate random variables and its properties.",
                "Moments, moment generating function (m.g.f) and characteristic function (c.f.), Uniqueness and inversion theorems (without proof) along with applications, Conditional expectations."
              ]
            },
            {
              "title": "Unit IV: Standard Probability Distributions (10 hrs)",
              "topics": [
                "Standard probability distributions: Binomial, Poisson, geometric, negative binomial, hyper-geometric, uniform, normal, exponential, Cauchy, beta and gamma along with their properties."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Experiment Performance", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Continuous Practical Record / Notebook", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Computation of simple, compound, and conditional probabilities using Classical and Axiomatic definitions.",
            "2. Practical applications and problem solving using Baye's Theorem for posterior probability estimation.",
            "3. Evaluation of p.m.f., p.d.f., and cumulative distribution function (c.d.f.) for discrete and continuous random variables.",
            "4. Construction of Joint, Marginal, and Conditional probability distributions for two-dimensional random variables.",
            "5. Computation of Expectation, Variance, Covariance, and Correlation coefficient of random variables.",
            "6. Derivation and evaluation of Moment Generating Functions (m.g.f.) and Characteristic Functions (c.f.).",
            "7. Fitting of Binomial distribution to observed data and computation of theoretical frequencies.",
            "8. Fitting of Poisson distribution to observed data and goodness of fit evaluation.",
            "9. Fitting of Normal distribution (by area method and ordinate method) and evaluation of standard normal probabilities.",
            "10. Applications of Geometric, Negative Binomial, Hypergeometric, and Exponential distributions."
          ]
        },
        "suggestedBooks": [
          "Hogg, R.V., Tanis, E.A. and Rao J.M. (2009): Probability and Statistical Inference, Pearson Education, New Delhi.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Myer, P.L. (1970): Introductory Probability and Statistical Applications, Oxford & IBH Publishing, New Delhi.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Numerical Analysis & Sampling Distribution",
        "courseCode": "MJC-3",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of numerical analysis",
          "To introduce sampling Distribution"
        ],
        "courseOutcomes": [
          "CO1: Identify the basic operators of finite difference.",
          "CO2: Understand the interpolation and extrapolation problem of real life situation.",
          "CO3: Understand the basics of Testing of significance.",
          "CO4: Apply testing of hypothesis in the real life problem.",
          "CO5: Acquire the basic sampling distributions and their properties."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Finite Differences & Equal Interval Interpolation (07 hrs)",
              "topics": [
                "Finite difference: Different types of operators and their properties, fundamental theorem of finite differences, missing terms (equal intervals), factorial notation.",
                "Assumptions and uses of interpolation. Gregory Newton's Forward and Backward Interpolation formula for equal intervals."
              ]
            },
            {
              "title": "Unit II: Unequal Interval Interpolation & Formulas (05 hrs)",
              "topics": [
                "Interpolation with arguments at unequal intervals: divided differences, theorems on divided differences, Newton's divided difference formula, Lagrange's interpolation formula."
              ]
            },
            {
              "title": "Unit III: Sampling Distribution & Tests of Significance (09 hrs)",
              "topics": [
                "Parameter and statistic, sampling distribution of a statistics, standard errors of sample mean, sample variance and sample proportion.",
                "Null and alternative hypotheses, level of significance, Type I and Type II errors and critical region.",
                "Large sample tests: Test of proportion, mean and standard deviation (For one and two-sample)."
              ]
            },
            {
              "title": "Unit IV: Exact Sampling Distributions (09 hrs)",
              "topics": [
                "Exact sampling distribution: Definition and derivation of p.d.f. of Chi-square ($\chi^2$), Student's t and Fisher's F-distribution, with their mean, variance, m.g.f., and cumulant generating function.",
                "Additive property and limiting form of $\chi^2$, t, F distribution. Relationship between them and their applications."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Experiment Performance", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Continuous Practical Record / Notebook", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Interpolation using Newton's Forward and Backward difference formulae for equally spaced values.",
            "2. Interpolation using Newton's Divided Difference formula and Lagrange's formula for unequally spaced arguments.",
            "3. Finding missing values in a given statistical data set using finite difference operators.",
            "4. Numerical differentiation and Numerical integration using Trapezoidal rule, Simpson's 1/3rd rule and 3/8th rule.",
            "5. Large sample test for single mean, difference of two means, single proportion, and difference of two proportions.",
            "6. Large sample test for testing equality of two population standard deviations.",
            "7. Exact test of significance based on Chi-square ($\chi^2$) distribution: Test for goodness of fit and independence of attributes in a contingency table.",
            "8. Tests based on Student's t-distribution: Single mean, difference of two means (independent samples), and Paired t-test for correlated samples.",
            "9. Snedecor's F-test for equality of two population variances."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Saxena, H. C. (2010): Calculus of finite differences, S. Chand & Sons, New Delhi.",
          "Sastry S.S.(2012): Introductory Methods of Numerical Analysis, Prentice Hall of India."
        ]
      },
      {
        "courseTitle": "Real Analysis and Matrices",
        "courseCode": "MJC-4",
        "credits": "4",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of real analysis",
          "To introduce the Matrices theory"
        ],
        "courseOutcomes": [
          "CO1: Acquire the basic knowledge of real number system and their properties.",
          "CO2: Understanding the basic concept of limit and continuity.",
          "CO3: Apply the limit and continuity concept in statistical problem.",
          "CO4: Understand the Matrices theory and their application."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Real Number System, Sets & Sequences (08 hrs)",
              "topics": [
                "Real Analysis: Representation of real numbers as points on the line and the set of real numbers as complete ordered field. Bounded and unbounded sets, neighborhood sand limit points, Supremum and infimum, open and closed sets.",
                "Sequences and their convergence. Infinite series, positive termed series and their convergence, Comparison test, D'Alembert's ratio test, Cauchy's nth root test, Raabe's test."
              ]
            },
            {
              "title": "Unit II: Limit, Continuity & Mean Value Theorems (08 hrs)",
              "topics": [
                "Review of limit, continuity and differentiability, uniform Continuity and boundedness of a function.",
                "Rolle's and Lagrange's Mean Value theorems. Taylor's theorem with lagrange's and Cauchy's form of remainder (without proof). Taylor's and Maclaurin's series expansions."
              ]
            },
            {
              "title": "Unit III: Algebra of Matrices & Inverses (07 hrs)",
              "topics": [
                "Different types of Matrices. Algebra of Matrices. Adjoint and inverse of a Matrix, different ways of finding inverse, partitioning, characteristic equation and Cayley-Hamilton theorem."
              ]
            },
            {
              "title": "Unit IV: Matrix Transformations & Linear Systems (07 hrs)",
              "topics": [
                "Elementary row and column operations. Elementary matrices, equivalent matrices, rank of a matrix, invariance of rank through elementary row/column operations, rank of sum and product of matrices and related theorems. Solution of a system of linear equations."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Performance & Calculations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record Book", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Verification of Cayley-Hamilton theorem and computing inverse and powers of square matrices.",
            "2. Reduction of matrices to Echelon and Normal canonical forms using elementary row and column transformations.",
            "3. Computation of Rank of matrices and testing consistency of systems of linear algebraic equations ($AX = B$).",
            "4. Finding characteristic roots (Eigenvalues) and characteristic vectors (Eigenvectors) of real symmetric and non-symmetric matrices."
          ]
        },
        "suggestedBooks": [
          "Malik, S. C. and Arora S. (1994): Mathematical Analysis, Wiley Eastern Limited, New Age International limited, New Delhi.",
          "Narayan, S.(1987): A Course of Mathematical Analysis, S. Chand & Co.(Pvt.) Ltd.,New Delhi.",
          "Narayan, S and Mittal, P.K. (2010): A Textbook of Matrices, S. Chand & Sons, New Delhi.",
          "Vasishtha, A.R., and Vasishtha A.K.(1991): Matrices, Krishna Prakashan Media."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Statistical Inference",
        "courseCode": "MJC-5",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of inferential statistics",
          "To learn the estimation techniques to estimate the parameters of the population",
          "To introduce theory behind test of significance."
        ],
        "courseOutcomes": [
          "CO1: Identify the estimation and testing problems of real life.",
          "CO2: Develop/find best point estimators based on the desirable properties.",
          "CO3: Understand the basic principle of Bayesian estimation.",
          "CO4: Develop / construct best/most powerful statistical tests to test hypotheses regarding unknown population parameters."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "28",
          "units": [
            {
              "title": "Unit I: Theory of Estimation & Desirable Properties (08 hrs)",
              "topics": [
                "Estimation: Problem of estimation, Properties of a good estimator - unbiasedness, consistency, efficiency and sufficiency. Factorization theorem.",
                "Cramer-Rao inequality and MVB estimators (statement and applications), Minimum variance unbiased estimator (MVUE), Rao-Blackwell theorem."
              ]
            },
            {
              "title": "Unit II: Methods of Estimation (06 hrs)",
              "topics": [
                "Methods of Estimation: Method of moments, method of maximum likelihood and minimum chi square, properties of maximum likelihood estimators and minimum chi square (without proof)."
              ]
            },
            {
              "title": "Unit III: Confidence Intervals & Bayesian Estimation (08 hrs)",
              "topics": [
                "Confidence interval: Confidence interval for mean, proportion and variance.",
                "Bayesian Estimation: Loss function, prior distribution, Bayes theorem, posterior distributions, Bayes risk, Bayes principle, Bayes estimators."
              ]
            },
            {
              "title": "Unit IV: Testing of Hypothesis & Most Powerful Tests (08 hrs)",
              "topics": [
                "Testing of hypothesis: Null and alternative hypotheses, simple and composite hypotheses, Type-I and Type-II errors, critical region, level of significance, size and power of a test, best critical region, most powerful test, uniformly most powerful test.",
                "Neyman Pearson Lemma (statement and applications to construct most powerful test). Likelihood ratio test, properties of likelihood ratio tests (without proof)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Performance & Computations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Lab Journal / Assignment File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Finding Maximum Likelihood Estimates (MLE) and Method of Moments Estimates (MME) for Binomial, Poisson, Normal, and Exponential distributions.",
            "2. Computation of Confidence Intervals for population mean and variance under normal setup for small and large samples.",
            "3. Construction of Confidence Intervals for difference between two population means and ratio of two population variances.",
            "4. Applications of Neyman-Pearson Lemma for finding Most Powerful (MP) and Uniformly Most Powerful (UMP) critical regions.",
            "5. Plotting of Power function curves and Operating Characteristic (OC) curves for statistical tests.",
            "6. Likelihood Ratio Tests (LRT) for testing hypothesis concerning mean and variance of Normal populations."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Rohatgi V. K. and Saleh, A.K. Md. E (2009): An Introduction to Probability and Statistics, John Wiley and Sons.",
          "Mood A.M, Graybill F.A. and Boes D.C.: Introduction to the Theory of Statistics, McGraw Hill."
        ]
      },
      {
        "courseTitle": "Non-Parametric and Sequential Analysis",
        "courseCode": "MJC-6",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the Non-parametric test",
          "To introduce the sequential analysis"
        ],
        "courseOutcomes": [
          "CO1: Understand the basic concept of Non-parametric tests.",
          "CO2: Apply distribution free statistical tests to test hypotheses regarding unknown population parameters."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "40",
          "units": [
            {
              "title": "Unit I: Introduction to Non-Parametric Tests (05 hrs)",
              "topics": [
                "Nonparametric Tests: Introduction and Concept, advantages of Non-parametric tests over parametric tests. Concept of a distribution free statistic."
              ]
            },
            {
              "title": "Unit II: Single Sample and Two Sample Non-Parametric Tests (14 hrs)",
              "topics": [
                "Single sample and two samples Nonparametric tests: Wald-Wolfowitz Run test, Test for randomness based on total number of runs, Sign tests, Median test, Mann-Whitney U-test."
              ]
            },
            {
              "title": "Unit III: Sequential Analysis & SPRT (11 hrs)",
              "topics": [
                "Sequential Analysis: Sequential probability ratio test (SPRT) for simple vs simple hypotheses. Fundamental relations among alpha, beta, A and B, determination of A and B in practice."
              ]
            },
            {
              "title": "Unit IV: Wald's Identity & OC / ASN Functions (10 hrs)",
              "topics": [
                "Wald's fundamental identity and the derivation of operating characteristics (OC) and average sample number (ASN) functions, examples based on normal, Poisson, binomial and exponential distributions."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Execution", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Test for randomness based on total number of runs (Run test).",
            "2. Wald-Wolfowitz two-sample run test for testing equality of two distributions.",
            "3. Single sample and paired-sample Sign test for location parameter / median.",
            "4. Wilcoxon Signed Rank test for symmetric distributions.",
            "5. Median test for two independent samples.",
            "6. Mann-Whitney U-test / Wilcoxon Rank Sum test for two independent samples.",
            "7. Construction and graphical presentation of SPRT for testing simple hypothesis in Binomial and Poisson distributions.",
            "8. Evaluation of OC (Operating Characteristic) function and ASN (Average Sample Number) function for SPRT in Normal and Exponential cases."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Rohatgi V. K. and Saleh, A.K. Md. E (2009): An Introduction to Probability and Statistics, John Wiley and Sons.",
          "Mood A.M, Graybill F.A. and Boes D.C.: Introduction to the Theory of Statistics, McGraw Hill."
        ]
      },
      {
        "courseTitle": "Demography & Vital Statistics",
        "courseCode": "MJC-7",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To collect valid Demographic data using different methods.",
          "To learn basic measures of Mortality, Fertility and Population Growth.",
          "To construct life tables."
        ],
        "courseOutcomes": [
          "CO1: Understand the fundamental of demographic data.",
          "CO2: Understand the Distinction between Vital Statistics and Demography.",
          "CO3: Interpret the demographic estimators in population studies and other related areas."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Population Theories & Data Quality Assessment (08 hrs)",
              "topics": [
                "Population Theories: Coverage and content errors in demographic data, use of balancing equations and Chandrasekaran-Deming formula to check completeness of registration data.",
                "Adjustment of age data, use of Myer and UN indices, Population composition, dependency ratio."
              ]
            },
            {
              "title": "Unit II: Vital Statistics & Mortality Measures (07 hrs)",
              "topics": [
                "Introduction and sources of collecting data on vital statistics, errors in census and registration data.",
                "Measurement of population, rate and ratio of vital events. Measurements of Mortality: Crude Death Rate (CDR), Specific Death Rate (SDR), Infant Mortality Rate (IMR) and Standardized Death Rates."
              ]
            },
            {
              "title": "Unit III: Life Tables & Stationary Populations (06 hrs)",
              "topics": [
                "Stationary and Stable population, Central Mortality Rates and Force of Mortality.",
                "Life (Mortality) Tables: Assumption, description, construction of Life Tables and Uses of Life Tables."
              ]
            },
            {
              "title": "Unit IV: Abridged Life Tables, Fertility & Reproduction Rates (09 hrs)",
              "topics": [
                "Abridged Life Tables: Concept and construction of abridged life tables by Reed-Merrell method, Greville's method and King's Method.",
                "Measurements of Fertility: Crude Birth Rate (CBR), General Fertility Rate (GFR), Specific Fertility Rate (SFR) and Total Fertility Rate (TFR).",
                "Measurement of Population Growth: Crude rates of natural increase, Pearl's Vital Index, Gross Reproduction Rate (GRR) and Net Reproduction Rate (NRR)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Computations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Calculation of Myer's Index and UN Joint Score Index for checking age heaping and age-sex data accuracy.",
            "2. Computation of Mortality Rates: Crude Death Rate (CDR), Age Specific Death Rate (ASDR), and Infant Mortality Rate (IMR).",
            "3. Direct and Indirect methods of Standardization of Death Rates.",
            "4. Complete Construction of Life Table from given age-specific mortality rates ($q_x, l_x, d_x, L_x, T_x, e_x$).",
            "5. Construction of Abridged Life Table using Reed-Merrell and Greville's methods.",
            "6. Computation of Fertility Rates: Crude Birth Rate (CBR), General Fertility Rate (GFR), Age Specific Fertility Rate (ASFR), and Total Fertility Rate (TFR).",
            "7. Measurement of Population Reproduction: Gross Reproduction Rate (GRR) and Net Reproduction Rate (NRR)."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. II, The World Press, Kolkata.",
          "Mukhopadhyay P. (1999): Applied Statistics, Books and Allied (P) Ltd.",
          "Biswas, S. (1988): Stochastic Processes in Demography & Application, Wiley Eastern Ltd."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Survey Sampling & Indian Official Statistics",
        "courseCode": "MJC-8",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To provide tools and techniques for selecting a sample of elements from a target population keeping in mind the objectives to be fulfilled and nature of population",
          "To obtain estimator of the population parameter on the basis of selected sample."
        ],
        "courseOutcomes": [
          "CO1: Clear understanding of the fundamental concepts of population and sample (or The basic concepts of survey).",
          "CO2: The principles of sample survey and the steps involved in selecting a sample.",
          "CO3: Different sampling methods such as simple random, stratified random sampling.",
          "CO4: Official statistics system in India."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Principles of Sampling & Simple Random Sampling (08 hrs)",
              "topics": [
                "Concept of population and sample, complete enumeration versus sampling, sampling and non-sampling errors.",
                "Types of sampling: non-probability and probability sampling, basic principle of sample survey, simple random sampling with and without replacement, definition and procedure of selecting a sample, estimates of: population mean, total and proportion, variances of these estimates, estimates of their variances and sample size determination."
              ]
            },
            {
              "title": "Unit II: Stratified & Systematic Sampling (07 hrs)",
              "topics": [
                "Stratified random sampling: Technique, estimates of population mean and total, variances of these estimates, proportional and optimum allocations and their comparison with SRS.",
                "Systematic Sampling: Technique, estimates of population mean and total, variances of these estimates (N=nxk). Comparison of systematic sampling with SRS and stratified sampling."
              ]
            },
            {
              "title": "Unit III: Ratio, Regression & Cluster Sampling (07 hrs)",
              "topics": [
                "Ratio and regression method of estimation, estimate of population mean and total (of SRS of large size) and its variance.",
                "Cluster sampling (equal clusters only) estimation of population mean and its variance, comparison (with and without randomly formed clusters). Relative efficiency of cluster sampling with SRS in terms of intra class correlation."
              ]
            },
            {
              "title": "Unit IV: Indian Official Statistical System (08 hrs)",
              "topics": [
                "Present official statistical system in India, Method of collection of official statistics, their reliability and limitations.",
                "Principle publications containing data on the topics such as population, industry and finance. Various official agencies responsible for data collection and their main function (MOSPI, CSO, NSSO, Registrar General of India)."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Performance", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Drawing random samples using random number tables under SRSWOR and SRSWR.",
            "2. Estimation of population mean, total, and proportion and standard errors under SRSWOR and SRSWR.",
            "3. Estimation of population mean and variance under Stratified Random Sampling with Proportional and Neyman (Optimum) allocation.",
            "4. Comparison of efficiency of Stratified Random Sampling relative to SRSWOR.",
            "5. Estimation of population mean and variance under Systematic Sampling and comparison of precision with SRS and Stratified sampling.",
            "6. Estimation of population mean using Ratio Method of Estimation and calculating its mean square error (MSE).",
            "7. Estimation of population mean using Regression Method of Estimation and efficiency comparison with sample mean.",
            "8. Cluster sampling for clusters of equal size: estimation of mean, variance and calculating intra-cluster correlation coefficient."
          ]
        },
        "suggestedBooks": [
          "Cochran W.G. (1984): Sampling Techniques, Wiley Eastern.",
          "Sukhatme, P.V., Sukhatme, B.V. Sukhatme, S. Asok, C. (1984): Sampling Theories of Survey With Application, IOWA State University Press and Indian Society of Agricultural Statistics.",
          "Sen Amartya (2003): Poverty and Famines, Oxford University Press, New Delhi.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi."
        ]
      },
      {
        "courseTitle": "Statistical Computing Using C and R",
        "courseCode": "MJC-9",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements statistical computing using C and R programming."
        ],
        "courseOutcomes": [
          "CO1: Describe computer Programs in C and R related to statistical data analysis.",
          "CO2: Write computer programs in C and R related to statistical data analysis."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Fundamentals of C Programming Language (06 hrs)",
              "topics": [
                "Components of C language, structure of a C program, Data types, variable declaration, Local, Global, Parametric variables, Assignment of Variables, Numeric, Character, Real and String constants, Different operators, Basic input/output."
              ]
            },
            {
              "title": "Unit II: Control Structures & Arrays in C (06 hrs)",
              "topics": [
                "Control statements: conditional statements, if - else, nesting of if - else, else if ladder, switch statements, loops in c, for, while, do - while loops, break, continue, exit ( ), goto and label declarations.",
                "One dimensional two dimensional and multidimensional arrays. Storage classes: Automatic variables, External variables, Static variables."
              ]
            },
            {
              "title": "Unit III: Functions, Pointers, Structures & Unions in C (09 hrs)",
              "topics": [
                "Functions: classification of functions, functions definition and declaration, assessing a function, return statement, parameter passing in functions. Pointers (concept only).",
                "Structure: Definition and declaration; structure (initialization) comparison of structure variable; Array of structures: array within structures, structures within structures, passing structures to functions; Unions accessing a union member, union of structure, initialization of a union variable, uses of union. Introduction to linked list."
              ]
            },
            {
              "title": "Unit IV: Statistical Programming in R & Graphics (09 hrs)",
              "topics": [
                "R language: Basics of R, naming a data object, R is a functional language, creation of data objects including vectors, factors, matrices, list and data frames. Extraction from a data object.",
                "Data Visualization: Grammar of graphics, ggplot2, scatter plot, line graphs, histograms, boxplots, bar plots, density plots. Statistics Methods and techniques in R."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Programming Execution & Coding Test (C & R)", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Code Lab Record Book", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. C program to compute Mean, Variance, Standard Deviation, and Coefficient of Variation for discrete and continuous frequency distribution.",
            "2. C program for Matrix Addition, Multiplication, Transpose, and Determinant evaluation.",
            "3. C program for fitting Linear Regression line and computing Karl Pearson's correlation coefficient.",
            "4. R script for creating vectors, matrices, data frames, and performing indexing, slicing, and subsetting operations.",
            "5. R programming for summary statistics: mean, median, standard deviation, quantiles, skewness, and kurtosis.",
            "6. Data visualization in R using base graphics and ggplot2: Bar plots, Histograms, Box-plots, Scatter plots, and Density curves.",
            "7. R script for hypothesis testing: One-sample t-test, Two-sample independent t-test, Paired t-test, and Chi-square test.",
            "8. R script for fitting simple and multiple linear regression models (lm function) and residual diagnostic plots."
          ]
        },
        "suggestedBooks": [
          "Balagurusamy, E.: Programming in ANSI C, 6th Edition, Tata McGraw Hill.",
          "Dalgaard P.: Introductory Statistics with R, Springer.",
          "Braun W J, and Murdoch D J: A First Course in Statistical Programming with R. Cambridge University Press. New York."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Linear Models",
        "courseCode": "MJC-10",
        "credits": "4",
        "marks": "100",
        "courseObjectives": [
          "To introduce the concepts of linear models."
        ],
        "courseOutcomes": [
          "CO1: Theory and estimation of Linear Models, Gauss-Markov Theorem and its use, Simple and Multiple linear regression models and their applications.",
          "CO2: The sound scientific interpretation of the results for applications in the fields of design of experiments and econometrics."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Gauss-Markov Setup & Linear Estimation (08 hrs)",
              "topics": [
                "Gauss-Markov set-up: Theory of linear estimation, Estimability of linear parametric functions, Method of least squares, Gauss-Markov theorem, Estimation of error variance."
              ]
            },
            {
              "title": "Unit II: Multiple Regression Analysis & Model Matrix (06 hrs)",
              "topics": [
                "Regression analysis: Simple regression analysis, Estimation and hypothesis testing in case of simple and multiple regression models, Concept of model matrix and its use in estimation."
              ]
            },
            {
              "title": "Unit III: Analysis of Variance & Covariance (ANOVA / ANCOVA) (09 hrs)",
              "topics": [
                "Analysis of variance: Definitions of fixed, random and mixed effect models, analysis of variance and covariance in one-way classified data for fixed effect models, analysis of variance and covariance in two-way classified data with one observation per cell for fixed effect models."
              ]
            },
            {
              "title": "Unit IV: Model Diagnostics & Multicollinearity (07 hrs)",
              "topics": [
                "Model checking: Prediction from a fitted model, Violation of usual assumptions concerning normality, Homoscedasticity and collinearity, Diagnostics using quantile-quantile plots, Ridge Regression."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Experiment Performance", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Continuous Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Checking estimability of linear parametric functions and obtaining BLUE (Best Linear Unbiased Estimator).",
            "2. Fitting of Multiple Linear Regression model with matrix algebra and testing significance of regression coefficients.",
            "3. One-way Analysis of Variance (ANOVA) for fixed-effects models.",
            "4. Two-way Analysis of Variance (ANOVA) with one observation per cell.",
            "5. Analysis of Covariance (ANCOVA) for one-way classified data.",
            "6. Model diagnostic checks: Q-Q plot for normality, residual plots for heteroscedasticity, and VIF (Variance Inflation Factor) for multicollinearity."
          ]
        },
        "suggestedBooks": [
          "Weisberg, S. (2005): Applied Linear Regression. Wiley.",
          "Wu, C. F. J. And Hamada, M. (2009): Experiments, Analysis, and Parameter Design Optimization, John Wiley.",
          "Renchner, A. C. And Schaalje, G. B. (2008): Linear Models in Statistics, John Wiley and Sons.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi."
        ]
      },
      {
        "courseTitle": "Design of Experiments",
        "courseCode": "MJC-11",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the nuances of designing, conducting, analyzing and extracting information from experimental data."
        ],
        "courseOutcomes": [
          "CO1: Analyze one way and two way classified data set in fixed and random effect model.",
          "CO2: Describe Split and Strip Plot Design.",
          "CO3: Apply these designs to various fields of applications."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Principles of Experimental Design (06 hrs)",
              "topics": [
                "Experimental designs: Role, historical perspective, terminology, experimental error, basic principles - Randomization, replication, local control and uniformity trials."
              ]
            },
            {
              "title": "Unit II: Standard Designs: CRD, RBD, LSD (10 hrs)",
              "topics": [
                "Analysis of Variance for one way and Two Way Classification.",
                "Basic designs: Completely Randomized Design (CRD), Randomized Block Design (RBD), Latin Square Design (LSD) - layout, model and statistical analysis and relative efficiency. Missing Plot techniques."
              ]
            },
            {
              "title": "Unit III: Factorial Experiments & Split/Strip Plot (07 hrs)",
              "topics": [
                "Factorial experiments: advantages, notations and concepts, $2^2, 2^3... 2^n$ factorial experiments, design and analysis.",
                "Split Plot Design and Strip Plot Design."
              ]
            },
            {
              "title": "Unit IV: Confounding in Factorial Experiments & ANCOVA (07 hrs)",
              "topics": [
                "Total and Partial confounding for $2^n (n \\leq 5)$.",
                "Analysis of covariance. Analysis of non-orthogonal data. Analysis of missing data."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Computation & ANOVA Layout", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Lab Journal", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Statistical analysis of Completely Randomized Design (CRD) with equal and unequal replications.",
            "2. Statistical analysis of Randomized Block Design (RBD) and comparison of efficiency of RBD over CRD.",
            "3. Statistical analysis of Latin Square Design (LSD) and evaluation of relative efficiency of LSD over RBD and CRD.",
            "4. Missing plot analysis in Randomized Block Design (one missing value) and Latin Square Design.",
            "5. Complete analysis of $2^2$ and $2^3$ Factorial Experiments using Yates's algorithm.",
            "6. Analysis of $2^3$ Factorial Experiment with Total Confounding in one or more replicates.",
            "7. Analysis of $2^3$ Factorial Experiment with Partial Confounding.",
            "8. Layout and statistical analysis of Split-Plot Design."
          ]
        },
        "suggestedBooks": [
          "Cochran, W.G. and Cox, G.M. (1959): Experimental Design. Asia Publishing House.",
          "Das, M.N. and Giri, N.C. (1986): Design and Analysis of Experiments. Wiley Eastern Ltd.",
          "Goon, A.M., Gupta, M.K. and Dasgupta, B. (2005): Fundamentals of Statistics. Vol. II, World Press, Kolkata.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi."
        ]
      },
      {
        "courseTitle": "Index Number and Time Series Analysis",
        "courseCode": "MJC-12",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the index number and time series analysis application in the statistics."
        ],
        "courseOutcomes": [
          "CO1: Apply various statistical techniques in time series data.",
          "CO2: Understand index number construction, testing and economic interpretation."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Theory and Construction of Index Numbers (07 hrs)",
              "topics": [
                "Meaning of Index Numbers, Problems in the construction of index numbers, Types of index number, Different formulae (Laspeyres, Paasche, Fisher, Marshall-Edgeworth, Dorbish-Bowley).",
                "Test of Index numbers (Time Reversal Test, Factor Reversal Test, Circular Test), Base shifting, splicing and deflating of index numbers, Uses of Index Numbers."
              ]
            },
            {
              "title": "Unit II: Components of Time Series & Trend Estimation (08 hrs)",
              "topics": [
                "Introduction to times series data, application of time series to various fields, Components of a times series, Decomposition of a time series.",
                "Trend: Estimation of trend by free hand curve method, method of semi averages, fitting various mathematical curves, and growth curves, Method of moving averages."
              ]
            },
            {
              "title": "Unit III: Seasonal, Cyclic Variations & Harmonic Analysis (07 hrs)",
              "topics": [
                "Effect of elimination of trend on other components of the time series.",
                "Seasonal Component: Estimation of seasonal component by Method of simple averages, Ratio to Trend, Ratio to Moving Averages, Depersonalization.",
                "Cyclic Component: Harmonic Analysis."
              ]
            },
            {
              "title": "Unit IV: Stochastic Time Series Models & Forecasting (08 hrs)",
              "topics": [
                "Moving-average (MA) process and Autoregressive (AR) process of orders one and two, Estimation of the parameters of AR (1) and AR (2) - Yule-Walker equations.",
                "Random Component: Variate component method. Forecasting: Exponential smoothing methods, Short term forecasting methods, Stationary Time series: Weak stationarity, autocorrelation function and correlogram of moving average."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Computations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Construction of Price and Quantity Index numbers using Laspeyres, Paasche, Fisher's Ideal, and Marshall-Edgeworth formulas.",
            "2. Verification of Time Reversal Test (TRT) and Factor Reversal Test (FRT) for Fisher's index number.",
            "3. Base shifting, splicing of index series, and deflating of value index series to find real wages.",
            "4. Estimation of Secular Trend by Method of Moving Averages (odd and even period moving averages).",
            "5. Fitting of Linear, Quadratic, and Exponential trends using method of least squares.",
            "6. Measurement of Seasonal Variations using Method of Simple Averages, Ratio-to-Trend method, and Ratio-to-Moving Average method.",
            "7. Calculation of Autocorrelation coefficients and plotting Correlograms for stationary time series data.",
            "8. Short-term forecasting using Single and Double Exponential Smoothing techniques."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. II, The World Press, Kolkata.",
          "Kendall M.G. (1976): Time Series, Charles Griffin.",
          "Chatfield C. (1980): The Analysis of Time Series - An Introduction, Chapman & Hall."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Statistical Quality Control",
        "courseCode": "MJC-13",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements of statistical quality control."
        ],
        "courseOutcomes": [
          "CO1: Describe the various charts in SQC.",
          "CO2: Interpretation of these charts in real life situations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Quality Concepts & Control Charts Foundations (06 hrs)",
              "topics": [
                "Quality: Definition, dimensions of quality, chance and assignable Causes of quality variation.",
                "Statistical Control Charts - Construction and Statistical basis of 3-sigma Control charts."
              ]
            },
            {
              "title": "Unit II: Control Charts for Variables & Attributes (08 hrs)",
              "topics": [
                "Control charts for variables: X-bar & R-chart, X-bar & s-chart.",
                "Control charts for attributes: np-chart, p-chart, c-chart and u-chart.",
                "Comparison between control charts for variables and control charts for attributes. Analysis of patterns on control chart, estimation of process capability."
              ]
            },
            {
              "title": "Unit III: Acceptance Sampling Plans (08 hrs)",
              "topics": [
                "Acceptance sampling plan: Principle of acceptance sampling plans.",
                "Single and Double sampling plan their OC, AQL, LTPD, AOQ, AOQL, ASN, ATI functions with graphical interpretation, use and interpretation of Dodge and Romig's sampling inspection plan tables."
              ]
            },
            {
              "title": "Unit IV: Six-Sigma & Total Quality Management (08 hrs)",
              "topics": [
                "Introduction to Six-Sigma: Overview of Six Sigma, Lean Manufacturing and Total Quality Management (TQM).",
                "Organizational Structure and Six Sigma training plans - Selection Criteria for Six-Sigma roles and training plans. Voice of customers (VOC): Importance and VOC data collection."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Practical Plotting & Inspection Problem", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "SQC Lab Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Construction and interpretation of Mean ($\bar{X}$) and Range ($R$) charts for variable quality characteristics.",
            "2. Construction of Mean ($\bar{X}$) and Standard Deviation ($s$) charts with standard values given and not given.",
            "3. Construction and interpretation of $p$-chart (fraction defective) and $np$-chart (number of defectives) for constant and varying sample sizes.",
            "4. Construction and interpretation of $c$-chart and $u$-chart for number of defects per unit.",
            "5. Determination of Process Capability Ratio ($C_p$) and Process Capability Index ($C_{pk}$).",
            "6. Construction of Operating Characteristic (OC) curve and AOQ curve for Single Sampling Plan.",
            "7. Construction of ASN and ATI curves for Single and Double Sampling Plans.",
            "8. Determination of single sampling plan using Dodge-Romig tables for specified LTPD and AOQL."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Montgomery, D. C. (2009): Introduction to Statistical Quality Control, Wiley India Pvt. Ltd.",
          "Montgomery, D. C. and Runger, G.C. (2008): Applied Statistics and Probability for Engineers, 3rd Edition reprint, Wiley India Pvt. Ltd."
        ]
      },
      {
        "courseTitle": "Research Methodology",
        "courseCode": "MJC-14",
        "credits": "5",
        "marks": "100",
        "courseObjectives": [
          "To provide rigorous training in research methods, literature review, data collection, statistical software tools, and scientific paper drafting."
        ],
        "courseOutcomes": [
          "CO1: Formulate research problems and hypotheses.",
          "CO2: Perform comprehensive literature survey and bibliographic management.",
          "CO3: Apply statistical modeling and software tools for data analysis.",
          "CO4: Adhere to research ethics, plagiarism guidelines, and IPR regulations."
        ],
        "theory": {
          "credits": "5",
          "totalHours": "50",
          "units": [
            {
              "title": "Unit I: Foundations of Research & Problem Formulation (10 hrs)",
              "topics": [
                "Meaning, objectives, and motivation of research. Types of research: descriptive, analytical, applied, fundamental, quantitative, qualitative, conceptual, and empirical.",
                "Research problem: identification, formulation, and research questions. Hypothesis formulation, criteria of good research, and research process workflow."
              ]
            },
            {
              "title": "Unit II: Research Design, Sampling & Data Collection (10 hrs)",
              "topics": [
                "Research design: features of good design, exploratory, descriptive, and experimental research designs.",
                "Sampling design: census vs. sample survey, probability and non-probability sampling techniques, sample size determination.",
                "Data collection methods: primary data (observation, interview, questionnaires, schedules) and secondary data sources, reliability and validity of measurement instruments."
              ]
            },
            {
              "title": "Unit III: Statistical Data Analysis & Software Tools (10 hrs)",
              "topics": [
                "Data processing: editing, coding, classification, and tabulation.",
                "Statistical modeling, hypothesis testing, multivariate exploratory techniques.",
                "Application of statistical computing tools (R, Python, SPSS, SAS) in data cleaning, exploratory data analysis, and inferential modeling."
              ]
            },
            {
              "title": "Unit IV: Scientific Writing, LaTeX & Reference Management (10 hrs)",
              "topics": [
                "Structure of a scientific paper/thesis: Title, Abstract, Keywords, Introduction, Literature Review, Methodology, Results & Discussion, Conclusions, and References.",
                "Typesetting with LaTeX: mathematical equations, tables, figures, bibliography management with BibTeX. Citation styles (APA, IEEE, Harvard, Vancouver)."
              ]
            },
            {
              "title": "Unit V: Research Ethics, Plagiarism & Intellectual Property Rights (10 hrs)",
              "topics": [
                "Ethics in research: integrity, confidentiality, fabrication, falsification, and conflict of interest.",
                "Plagiarism: concepts, forms, detection tools (Turnitin, Urkund), UGC regulations on academic integrity.",
                "Intellectual Property Rights (IPR): patents, copyrights, trademarks, open access publishing, peer-review process, journal metrics (Impact factor, h-index, i10-index, Scopus, Web of Science)."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Kothari, C.R. and Garg, G. (2019): Research Methodology: Methods and Techniques, New Age International Publishers.",
          "Kumar, R. (2018): Research Methodology: A Step-by-Step Guide for Beginners, SAGE Publications.",
          "Montgomery, D.C. (2017): Design and Analysis of Experiments, John Wiley & Sons.",
          "Lamport, L. (1994): LaTeX: A Document Preparation System, Addison-Wesley."
        ]
      },
      {
        "courseTitle": "Multivariate Analysis",
        "courseCode": "MJC-15",
        "credits": "6",
        "marks": "100",
        "courseObjectives": [
          "To introduce the elementary and advanced concepts of multivariate analysis tools."
        ],
        "courseOutcomes": [
          "CO1: Describe the multivariate analysis tools in relation to univariate tools.",
          "CO2: Apply multivariate statistical methods in AI, Machine Learning applications."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "40",
          "units": [
            {
              "title": "Unit I: Bivariate & Multivariate Normal Distribution (10 hrs)",
              "topics": [
                "Bivariate Normal Distribution (BVN): p.d.f. of BVN, properties of BVN, marginal and conditional p.d.f. of BVN.",
                "Multivariate Data: Random Vector: Probability mass/density functions, Distribution function, Mean vector & Dispersion matrix, Marginal & Conditional distributions."
              ]
            },
            {
              "title": "Unit II: Multivariate Normal Properties & Correlation Matrices (10 hrs)",
              "topics": [
                "Multivariate Normal distribution and its properties.",
                "Sampling distribution for mean vector and variance-covariance matrix.",
                "Multiple and partial correlation coefficient and their properties."
              ]
            },
            {
              "title": "Unit III: Random Sampling from Multivariate Normal (09 hrs)",
              "topics": [
                "Random sampling from multivariate normal distribution, Maximum likelihood estimators of parameters, Distribution of sample mean vector, Wishart distribution (statement of properties)."
              ]
            },
            {
              "title": "Unit IV: Applications of Multivariate Analysis (11 hrs)",
              "topics": [
                "Applications of Multivariate Analysis: Discriminant Analysis, Principal Components Analysis (PCA) and Factor Analysis."
              ]
            }
          ]
        },
        "practical": {
          "credits": "2",
          "totalHours": "20",
          "evaluationScheme": [
            { "component": "Multivariate Data Analysis / Machine Learning Task", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Lab File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce Defence", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Computation of Mean Vector, Variance-Covariance Matrix, and Correlation Matrix from multivariate data.",
            "2. Evaluation of Partial Correlation and Multiple Correlation coefficients for three or more variables.",
            "3. Maximum Likelihood Estimation of parameters ($\mu, \Sigma$) of Multivariate Normal Distribution.",
            "4. Applications of Hotelling's $T^2$ statistic for testing equality of mean vectors.",
            "5. Extraction of Principal Components (PCA) using spectral decomposition of covariance / correlation matrix and scree plot analysis.",
            "6. Performing Fisher's Linear Discriminant Analysis for classifying observations into two groups.",
            "7. Factor Analysis: extraction of initial factors and orthogonal Varimax factor rotation."
          ]
        },
        "suggestedBooks": [
          "Anderson, T.W. (2003): An Introduction to Multivariate Statistical Analysis, John Wiley.",
          "Muirhead, R.J. (1982): Aspects of Multivariate Statistical Theory, John Wiley.",
          "Kshirsagar, A.M. (1972): Multivariate Analysis, Marcel Dekker.",
          "Johnson, R.A. and Wichern, D.W. (2007): Applied Multivariate Analysis, Pearson & Prentice Hall."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Operations Research",
        "courseCode": "MJC-16",
        "credits": "4",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements of Operations Research."
        ],
        "courseOutcomes": [
          "CO1: Understand the fundamentals of Operations Research.",
          "CO2: Apply the results of transportation problems, game theory, transportation sequencing problems, etc in the real life applications."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Convex Sets & Linear Programming Problem (08 hrs)",
              "topics": [
                "Convex sets and their properties, Introduction to linear programming problem, solution by graphical method.",
                "Simplex method, optimality and unboundedness, artificial variables, two-phase method, Big-M method.",
                "Duality, formulation of the dual problem, primal-dual relationships, economic interpretation of the dual."
              ]
            },
            {
              "title": "Unit II: Transportation Problem (07 hrs)",
              "topics": [
                "Transportation problem and its mathematical formulation, north-west-corner method, least cost method and Vogel approximation method (VAM) for determination of initial basic solution, algorithm for solving transportation problem (MODI method).",
                "Transportation problem as a linear programming problem."
              ]
            },
            {
              "title": "Unit III: Assignment Problem (07 hrs)",
              "topics": [
                "Assignment problem and its mathematical formulation, Hungarian method for solving assignment problem. Assignment problem as a linear programming problem."
              ]
            },
            {
              "title": "Unit IV: Theory of Games (08 hrs)",
              "topics": [
                "Game theory: Rectangular game, pure and mixed strategies, minimax-maximin principle, solution to rectangular game using graphical method, dominance and modified dominance property to reduce the game matrix and solution to rectangular game with mixed strategy."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Optimization Practical Problems", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Graphical solution of two-variable Linear Programming Problems (LPP).",
            "2. Solving LPP using Simplex Method, Big-M Method, and Two-Phase Simplex Method.",
            "3. Obtaining Dual of given Primal LPP and verifying complementary slackness.",
            "4. Finding Initial Basic Feasible Solution (IBFS) of Transportation Problem using NWCM, LCM, and VAM.",
            "5. Finding Optimal Solution of Transportation Problem using MODI (Modified Distribution) Method.",
            "6. Solving balanced and unbalanced Assignment Problems using Hungarian Algorithm.",
            "7. Solving two-person zero-sum games with saddle point (pure strategy) and without saddle point using Algebraic and Graphical methods."
          ]
        },
        "suggestedBooks": [
          "Hadley, G. (2002): Linear Programming, Narosa Publishing House, New Delhi.",
          "Taha, H.A. (2006): Operations Research, An Introduction, Prentice-Hall India.",
          "Sharma, S.D. (2014): Operations Research, Theory and Application.",
          "Swarup, K., Gupta, P.K. and Mohan, M. (2019): Operations Research, Sultan Chand and Sons."
        ]
      }
    ]
  },
  "MIC": {
    "1st": [
      {
        "courseTitle": "Introduction to Statistics",
        "courseCode": "MIC-1",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic idea of descriptive statistics including graphical representation",
          "To introduce the concept of simple linear regression"
        ],
        "courseOutcomes": [
          "CO1: Identify the basic problem in statistics.",
          "CO2: Understand the statistical data, graphical presentation.",
          "CO3: Apply various statistical methods to analyze the statistical data.",
          "CO4: Use the Correlation coefficient and Rank Correlation etc.",
          "CO5: Apply simple linear regression analysis."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Data & Graphical Presentation (04 hrs)",
              "topics": [
                "Statistical Methods: Definition and scope of Statistics, concepts of population and sample. Data: quantitative and qualitative, variables, frequency and non frequency.",
                "Scales of measurement- nominal, ordinal, Presentation of data: tabular and graphical including histogram, and ogives."
              ]
            },
            {
              "title": "Unit II: Central Tendency & Dispersion (06 hrs)",
              "topics": [
                "Measures of Central Tendency: mathematical and positional.",
                "Measures of Dispersion: range, quartile deviation, mean deviation, standard deviation, coefficient of variation. Moments, skewness and kurtosis."
              ]
            },
            {
              "title": "Unit III: Correlation Analysis (05 hrs)",
              "topics": [
                "Bivariate data: Definition, scatter diagram, Karl Pearson product moment correlation coefficient and its properties, rank correlation."
              ]
            },
            {
              "title": "Unit IV: Simple Linear Regression (05 hrs)",
              "topics": [
                "Simple linear regression, properties of regression coefficients, principle of least square."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Experiment", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Lab Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Graphical representation of statistical data: Histogram, Frequency polygon, and Ogives.",
            "2. Computation of Mean, Median, Mode, Standard Deviation, and Coefficient of Variation for frequency distributions.",
            "3. Calculation of Karl Pearson's correlation coefficient and Spearman's rank correlation coefficient.",
            "4. Fitting of simple linear regression line by the principle of least squares."
          ]
        },
        "suggestedBooks": [
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Mood, A.M. Graybill, F.A. and Boes, D.C. (2007): Introduction to the Theory of Statistics, Tata McGraw-Hill Pub. Co. Ltd.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Probability Theory and Probability Distribution",
        "courseCode": "MIC-2",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic concept of probability and probability distribution.",
          "To introduce mathematical expectation and moment generating function."
        ],
        "courseOutcomes": [
          "CO1: Understand the concept of probability.",
          "CO2: Find elementary probability of an event.",
          "CO3: Use various rules in the theory of elementary probability.",
          "CO4: Apply Random Variables and their probability distribution.",
          "CO5: Understand special probability distributions with their properties."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Basic Probability Concepts & Theorems (06 hrs)",
              "topics": [
                "Probability: Introduction, random experiments, sample space, events and algebra of events. Definitions of Probability — classical, statistical, and axiomatic, laws of addition and multiplication, independence and conditional probability."
              ]
            },
            {
              "title": "Unit II: Random Variables & Distributions (05 hrs)",
              "topics": [
                "Random variables: discrete and continuous random variables, probability mass function (p.m.f), probability density functions (p.d.f), cumulative density function (c.d.f), and its properties, univariate transformations with illustrations."
              ]
            },
            {
              "title": "Unit III: Expectation & Moment Generating Functions (04 hrs)",
              "topics": [
                "Expectation of random variable with properties and moments, moment generating function (m.g.f) and characteristic function (c.f)."
              ]
            },
            {
              "title": "Unit IV: Common Probability Distributions (05 hrs)",
              "topics": [
                "Standard probability distributions: Binomial, Poisson, geometric, uniform, normal, exponential, and gamma along with their properties."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Probability Computations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Problems on classical and conditional probability and Baye's theorem.",
            "2. Calculation of Expectation and Variance for discrete and continuous distributions.",
            "3. Fitting of Binomial distribution and calculation of theoretical frequencies.",
            "4. Fitting of Poisson distribution and Normal distribution."
          ]
        },
        "suggestedBooks": [
          "Hogg, R.V., Tanis, E.A. and Rao J.M. (2009): Probability and Statistical Inference, Pearson Education, New Delhi.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Myer, P.L. (1970): Introductory Probability and Statistical Applications, Oxford & IBH Publishing, New Delhi.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Introductory Numerical Analysis & Sampling Distribution",
        "courseCode": "MIC-3",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of numerical analysis",
          "To introduce sampling Distribution"
        ],
        "courseOutcomes": [
          "CO1: Identify the basic operators of finite difference.",
          "CO2: Understand the interpolation and extrapolation problem of real life situation.",
          "CO3: Understand the basics of Testing of significance.",
          "CO4: Apply testing of hypothesis in the real life problem.",
          "CO5: Acquire the basic sampling distributions and their properties."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Operators & Equal Interval Interpolation (06 hrs)",
              "topics": [
                "Finite difference: Forward difference operation $\\Delta$, The shift operator $E$, properties of operator $\\Delta$ and $E$. Assumptions and uses of interpolation. Gregory Newton's Forward and Backward Interpolation formula for equal intervals."
              ]
            },
            {
              "title": "Unit II: Unequal Interval Interpolation (04 hrs)",
              "topics": [
                "Interpolation with arguments at unequal intervals: divided differences $\\Delta$, divided differences table, Newton's divided difference formula, Lagrange's interpolation formula."
              ]
            },
            {
              "title": "Unit III: Numerical Quadrature (05 hrs)",
              "topics": [
                "General Quadrature Formula for equidistant ordinates, Trapezoidal Rule, Simpson's one-third rule, Simpson's three-eighth rule."
              ]
            },
            {
              "title": "Unit IV: Exact Sampling Distributions (05 hrs)",
              "topics": [
                "Exact sampling distribution: Definition of $\\chi^2$, Student's t and Fishers F-distribution, mean, variance, and m.g.f., of $\\chi^2, t, F$ distribution."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Computation", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Interpolation using Newton's Forward and Backward differences formula.",
            "2. Interpolation using Lagrange's formula for unequal intervals.",
            "3. Numerical Integration using Trapezoidal Rule and Simpson's 1/3rd Rule.",
            "4. Applications of t-test, Chi-square test, and F-test."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Saxena, H. C. (2010): Calculus of finite differences, S. Chand & Sons, New Delhi.",
          "Sastry S.S.(2012): Introductory Methods of Numerical Analysis, Prentice Hall of India."
        ]
      }
    ],
    "4th": [
      {
        "courseTitle": "Introduction to Statistical Inference",
        "courseCode": "MIC-4",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of inferential statistics",
          "To learn the estimation techniques to estimate the parameters of the population",
          "To introduce theory behind test of significance."
        ],
        "courseOutcomes": [
          "CO1: Identify the estimation and testing problems of real life.",
          "CO2: Understand the Different methods of finding point estimators.",
          "CO3: Find best point and confidence estimators.",
          "CO4: Develop / construct best/most powerful statistical tests to test hypotheses regarding unknown population parameters."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Point Estimation Methods & Properties (06 hrs)",
              "topics": [
                "Introduction of Statistical inference, Estimation: Problem of estimation, Properties of a good estimator - unbiasedness, consistency, efficiency and sufficiency.",
                "Methods of Estimation: Method of moments, method of maximum likelihood, properties of maximum likelihood estimators (without proof)."
              ]
            },
            {
              "title": "Unit II: Testing of Hypotheses Concepts (04 hrs)",
              "topics": [
                "Testing of hypothesis: Null and alternative hypotheses, simple and composite hypotheses, Type-I and Type-II errors, critical region, level of significance, size and power of a test, best critical region."
              ]
            },
            {
              "title": "Unit III: Tests Based on t, Chi-Square & F Distributions (05 hrs)",
              "topics": [
                "Test based on t-distribution: Test of single mean, difference of two means, paired t-test, test for sample correlation coefficient.",
                "Test based on chi square-distribution and F distribution for the equality of two population variance."
              ]
            },
            {
              "title": "Unit IV: Non-Parametric Tests (05 hrs)",
              "topics": [
                "Non-Parametric tests: Sign test for median, Sign test for symmetry, Wilcoxon two-sample test."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Inference Tests", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Notebook", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Parameter estimation using Method of Maximum Likelihood and Method of Moments.",
            "2. Student's t-test for single mean, difference of two means, and paired t-test.",
            "3. Chi-square test for goodness of fit and contingency table independence.",
            "4. Non-parametric Sign test and Wilcoxon rank test."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Rohatgi V. K. and Saleh, A.K. Md. E (2009): An Introduction to Probability and Statistics, John Wiley and Sons.",
          "Mood A.M, Graybill F.A. and Boes D.C.: Introduction to the Theory of Statistics, McGraw Hill."
        ]
      }
    ],
    "5th": [
      {
        "courseTitle": "Introduction to Survey Sampling & Indian Official Statistics",
        "courseCode": "MIC-5",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To provide tools and techniques for selecting a sample of elements from a target population keeping in mind the objectives to be fulfilled and nature of population",
          "To obtain estimator of the population parameter on the basis of selected sample and study its properties."
        ],
        "courseOutcomes": [
          "CO1: The fundamental concepts of population and sample (or The basic concepts of survey).",
          "CO2: The principles of sample survey and the steps involved in selecting a sample.",
          "CO3: Different sampling methods such as simple random sampling, stratified random sampling and others.",
          "CO4: Indian official statistical system."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Sampling Basics & Simple Random Sampling (08 hrs)",
              "topics": [
                "Concept of population and sample, complete enumeration versus sampling, sampling and non-sampling errors.",
                "Types of sampling: non-probability and probability sampling, basic principle of sample survey, simple random sampling with and without replacement."
              ]
            },
            {
              "title": "Unit II: Stratified Random Sampling (08 hrs)",
              "topics": [
                "Stratified random sampling: Technique, estimates of population mean and total, variances of these estimates, proportional and optimum allocations."
              ]
            },
            {
              "title": "Unit III: Systematic & Cluster Sampling (06 hrs)",
              "topics": [
                "Systematic Sampling: Technique, estimates of population mean and total, Comparison of systematic sampling with SRS and stratified sampling. Cluster sampling."
              ]
            },
            {
              "title": "Unit IV: Indian Official Statistics (06 hrs)",
              "topics": [
                "Present official statistical system in India, Method of collection of official statistics, their reliability and limitations."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Sampling Calculations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Lab Journal", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Selection of random sample using random number tables under SRSWOR and SRSWR.",
            "2. Estimation of population mean and standard error under simple random sampling.",
            "3. Estimation of population mean under Stratified Sampling with Proportional and Optimum Allocation.",
            "4. Estimation of mean under Systematic Sampling."
          ]
        },
        "suggestedBooks": [
          "Cochran W.G. (1984): Sampling Techniques, Wiley Eastern.",
          "Sukhatme,P.V., Sukhatme,B.V. Sukhatme,S. Asok,C.(1984): Sampling Theories of Survey With Application, IOWA State University Press and Indian Society of Agricultural Statistics.",
          "Sen Amartya (2003): Poverty and Famines, Oxford University Press, New Delhi.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi."
        ]
      },
      {
        "courseTitle": "Basics of Statistical Computing using C and R",
        "courseCode": "MIC-6",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements statistical computing using C and R programming."
        ],
        "courseOutcomes": [
          "CO1: Describe computer Programs in C/ R related to statistical data analysis.",
          "CO2: Write computer programs in C/R related to statistical data analysis."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: C Language Basics (06 hrs)",
              "topics": [
                "Components of C language, structure of a C program, Data types, variable declaration, Local, Global, Parametric variables, Assignment of Variables, Numeric, Character, Real and String constants, Different operators, Basic input/output."
              ]
            },
            {
              "title": "Unit II: Control Statements & Arrays in C (04 hrs)",
              "topics": [
                "Control statements: conditional statements, if - else, nesting of if - else, switch statements, loops in c, for, while, do - while loops, break, continue, exit ( ), goto and label declarations, One dimensional two dimensional."
              ]
            },
            {
              "title": "Unit III: Functions & Structures in C (05 hrs)",
              "topics": [
                "Functions: classification of functions, functions definition and declaration, assessing a function, return statement. Pointers (concept only). Structure: Definition and declaration; structure (initialization) comparison of structure variable."
              ]
            },
            {
              "title": "Unit IV: Introduction to R Language (05 hrs)",
              "topics": [
                "R language: Basics of R, naming a data object, creation of data objects including vectors, matrices, list and data frames. Extraction from a data object. Data Visualization: Grammar of graphics, scatter plot, line graphs, histograms, boxplots, bar plots; Statistics Methods and techniques in R."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "C & R Programming Lab Test", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Programming Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. C program to compute statistical measures: Mean, Variance, and Correlation.",
            "2. C program for Matrix operations.",
            "3. R programming: Creating vectors, matrices, data frames and generating summary statistics.",
            "4. Data visualization in R: Histograms, Box plots, and Scatter plots."
          ]
        },
        "suggestedBooks": [
          "Balagurusamy, E.: Programming in ANSI C, 6th Edition, Tata McGraw Hill.",
          "Dalgaard P.: Introductory Statistics with R, Springer.",
          "Braun W J, and Murdoch D J: A First Course in Statistical Programming with R. Cambridge University Press. New York."
        ]
      }
    ],
    "6th": [
      {
        "courseTitle": "Introduction to Design of Experiments",
        "courseCode": "MIC-7",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the nuances of designing, conducting, analyzing and extracting information from experimental data."
        ],
        "courseOutcomes": [
          "CO1: Handle one way and two way classified data in design of experimental setup.",
          "CO2: Apply these designs to various fields of applications."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Principles of Experimental Design (06 hrs)",
              "topics": [
                "Experimental designs: Role, historical perspective, terminology, experimental error, basic principles - Randomization, replication and local control."
              ]
            },
            {
              "title": "Unit II: Analysis of Variance (04 hrs)",
              "topics": [
                "Analysis of variance for one way and two-way analysis. Fixed and Random effect Model."
              ]
            },
            {
              "title": "Unit III: Standard Designs (CRD, RBD, LSD) (06 hrs)",
              "topics": [
                "Basic designs: Completely Randomized Design (CRD), Randomized Block Design (RBD), Latin Square Design (LSD) - layout, model and statistical analysis."
              ]
            },
            {
              "title": "Unit IV: Factorial Experiments (04 hrs)",
              "topics": [
                "Factorial experiments: advantages, notations and concepts, $2^2, 2^3... 2^n$ factorial experiments, design and analysis."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Design of Experiment Analysis", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Lab File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Statistical analysis of Completely Randomized Design (CRD).",
            "2. Statistical analysis of Randomized Block Design (RBD) and calculating efficiency.",
            "3. Statistical analysis of Latin Square Design (LSD).",
            "4. Analysis of $2^2$ and $2^3$ Factorial Experiments."
          ]
        },
        "suggestedBooks": [
          "Cochran, W.G. and Cox, G.M. (1959): Experimental Design. Asia Publishing House.",
          "Das, M.N. and Giri, N.C. (1986): Design and Analysis of Experiments. Wiley Eastern Ltd.",
          "Goon, A.M., Gupta, M.K. and Dasgupta, B. (2005): Fundamentals of Statistics. Vol. II, World Press, Kolkata.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi."
        ]
      },
      {
        "courseTitle": "Basics of Index Number and Time Series Analysis",
        "courseCode": "MIC-8",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the time series analysis application in the statistics."
        ],
        "courseOutcomes": [
          "CO1: Apply various statistical techniques in time series data.",
          "CO2: Understand various index number formulas and applications."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Index Numbers Construction (06 hrs)",
              "topics": [
                "Meaning of Index Numbers, Problems in the construction of index numbers, Types of index number, Different formulae, Uses of Index Numbers."
              ]
            },
            {
              "title": "Unit II: Components of Time Series (04 hrs)",
              "topics": [
                "Introduction to times series data, application of time series to various fields, Components of a times series, Decomposition of a time series."
              ]
            },
            {
              "title": "Unit III: Secular Trend Estimation (04 hrs)",
              "topics": [
                "Trend: Estimation of trend by free hand curve method, method of semi averages, fitting various mathematical curves, and growth curves."
              ]
            },
            {
              "title": "Unit IV: Seasonal, Cyclic & Random Variations (06 hrs)",
              "topics": [
                "Seasonal Component: Estimation of seasonal component by Method of simple averages, Ratio to Trend. Cyclic Component: Harmonic Analysis, Random Component: Variate component method."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Index & Time Series Computations", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Construction of Laspeyres, Paasche, and Fisher's Ideal Index Numbers.",
            "2. Measurement of Trend by Moving Average method.",
            "3. Fitting of Linear trend by least square method.",
            "4. Calculation of Seasonal Indices by Ratio-to-Trend method."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Applied Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. II, The World Press, Kolkata.",
          "Kendall M.G. (1976): Time Series, Charles Griffin.",
          "Chatfield C. (1980): The Analysis of Time Series - An Introduction, Chapman & Hall."
        ]
      }
    ],
    "7th": [
      {
        "courseTitle": "Introduction to Statistical Quality Control",
        "courseCode": "MIC-9",
        "credits": "4",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements of statistical quality control."
        ],
        "courseOutcomes": [
          "CO1: Describe the various charts in SQC.",
          "CO2: Interpretation of these charts in real life situations."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "30",
          "units": [
            {
              "title": "Unit I: Quality Concepts & Control Charts (07 hrs)",
              "topics": [
                "Quality: Definition, dimensions of quality, chance and assignable Causes of quality variation. Statistical Control Charts - Construction and Statistical basis of 3-sigma Control charts."
              ]
            },
            {
              "title": "Unit II: Control Charts for Variables & Attributes (08 hrs)",
              "topics": [
                "Control charts for variables: X-bar & R-chart, X-bar & s-chart. Control charts for attributes: np-chart, p-chart, c-chart and u-chart."
              ]
            },
            {
              "title": "Unit III: Control Chart Comparison & Process Capability (07 hrs)",
              "topics": [
                "Comparison between control charts for variables and control charts for attributes. Analysis of patterns on control chart, estimation of process capability."
              ]
            },
            {
              "title": "Unit IV: Acceptance Sampling Plans (08 hrs)",
              "topics": [
                "Acceptance sampling plan: Principle of acceptance sampling plans. Single and Double sampling plan their OC, AQL, LTPD, AOQ, AOQL, ASN, ATI functions with graphical interpretation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Quality Control Chart Plotting", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Construction and interpretation of Mean ($\bar{X}$) and Range ($R$) charts.",
            "2. Construction and interpretation of $p$-chart (fraction defective) and $c$-chart (number of defects).",
            "3. Construction of Operating Characteristic (OC) curve for Single Sampling Plan."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Montgomery, D. C. (2009): Introduction to Statistical Quality Control, Wiley India Pvt. Ltd.",
          "Montgomery, D. C. and Runger, G.C. (2008): Applied Statistics and Probability for Engineers, 3rd Edition reprint, Wiley India Pvt. Ltd."
        ]
      }
    ],
    "8th": [
      {
        "courseTitle": "Introductory Operations Research",
        "courseCode": "MIC-10",
        "credits": "4",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic elements of Operations Research."
        ],
        "courseOutcomes": [
          "CO1: Understand the fundamentals of Operations Research.",
          "CO2: Apply the results of Linear programming, Transportation and Assignment problem in the real life applications."
        ],
        "theory": {
          "credits": "3",
          "totalHours": "40",
          "units": [
            {
              "title": "Unit I: Convex Sets & Graphical LP (08 hrs)",
              "topics": [
                "Convex sets and their properties, Introduction to linear programming problem, solution by graphical method."
              ]
            },
            {
              "title": "Unit II: Simplex & Artificial Variable Techniques (12 hrs)",
              "topics": [
                "Simplex method, optimality and unboundedness, artificial variables, two-phase method, Big-M method."
              ]
            },
            {
              "title": "Unit III: Duality in Linear Programming (10 hrs)",
              "topics": [
                "Duality, formulation of the dual problem, primal-dual relationships, economic interpretation of the dual."
              ]
            },
            {
              "title": "Unit IV: Transportation and Assignment Problems (10 hrs)",
              "topics": [
                "Transportation and Assignment problem and its mathematical formulation."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Optimization Problem Solving", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Graphical solution of two-variable Linear Programming Problems.",
            "2. Solving LPP using Simplex Method.",
            "3. Initial Basic Feasible Solution of Transportation Problem using NWCM, LCM, and VAM.",
            "4. Solving Assignment Problem using Hungarian Method."
          ]
        },
        "suggestedBooks": [
          "Hadley, G. (2002): Linear Programming, Narosa Publishing House, New Delhi.",
          "Taha, H.A. (2006): Operations Research, An Introduction, Prentice-Hall India.",
          "Sharma, S.D. (2014): Operations Research, Theory and Application.",
          "Swarup, K., Gupta, P.K. and Mohan, M. (2019): Operations Research, Sultan Chand and Sons."
        ]
      }
    ]
  },
  "MDC": {
    "1st": [
      {
        "courseTitle": "Basics of Statistics",
        "courseCode": "MDC-1",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic idea of descriptive statistics including graphical representation",
          "To introduce the concept of simple linear regression"
        ],
        "courseOutcomes": [
          "CO1: Identify the basic problem in statistics.",
          "CO2: Understand the statistical data, graphical presentation.",
          "CO3: Apply various statistical methods to analyze the statistical data.",
          "CO4: Use the Correlation coefficient.",
          "CO5: Apply simple linear regression analysis."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Statistical Data & Graphical Representation (04 hrs)",
              "topics": [
                "Definition and scope of Statistics, concepts of population and sample. Data: quantitative and qualitative, variables, frequency and non-frequency.",
                "Presentation of data: tabular and graphical including bar, line diagram and pie chart."
              ]
            },
            {
              "title": "Unit II: Measures of Central Tendency (06 hrs)",
              "topics": [
                "Histogram and ogives. Measures of Central Tendency: mean, median, mode, geometric and harmonic mean and their properties."
              ]
            },
            {
              "title": "Unit III: Measures of Dispersion & Moments (05 hrs)",
              "topics": [
                "Measures of Dispersion: range, quartile deviation, mean deviation, standard deviation, coefficient of variation, Moments, skewness and kurtosis."
              ]
            },
            {
              "title": "Unit IV: Correlation & Regression (05 hrs)",
              "topics": [
                "Bivariate data: Scatter diagram, Karl Pearson product moment correlation coefficient and its properties. Simple linear regression."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Test", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical File", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Graphical representation of data: Bar diagrams, Pie charts, Histograms, and Ogives.",
            "2. Calculation of Mean, Median, Mode, Standard Deviation, and Coefficient of Variation.",
            "3. Calculation of Karl Pearson's correlation coefficient.",
            "4. Fitting of simple linear regression line."
          ]
        },
        "suggestedBooks": [
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Mood, A.M. Graybill, F.A. and Boes, D.C. (2007): Introduction to the Theory of Statistics, Tata McGraw-Hill Pub. Co. Ltd.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "2nd": [
      {
        "courseTitle": "Introductory Probability",
        "courseCode": "MDC-2",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic concept of probability and probability distribution.",
          "To introduce mathematical expectation and moment generating function."
        ],
        "courseOutcomes": [
          "CO1: Understand the concept of probability.",
          "CO2: Find elementary probability of an event.",
          "CO3: Use various rules in the theory of elementary probability.",
          "CO4: Apply Random Variables and their probability distribution.",
          "CO5: Use mathematical expectation and m.g.f.",
          "CO6: Understand special probability distributions with their properties."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Basic Probability (06 hrs)",
              "topics": [
                "Probability: Introduction, random experiments, sample space, events and algebra of events. Definitions of Probability — classical, statistical, and axiomatic, laws of addition and multiplication, independence and conditional probability."
              ]
            },
            {
              "title": "Unit II: Random Variables & Probability Functions (05 hrs)",
              "topics": [
                "Random variables: discrete and continuous random variables, probability mass function (p.m.f), probability density functions (p.d.f), cumulative density function (c.d.f), and its properties."
              ]
            },
            {
              "title": "Unit III: Expectation & Moment Generating Function (04 hrs)",
              "topics": [
                "Expectation of random variable with properties and moments, moment generating function (m.g.f)."
              ]
            },
            {
              "title": "Unit IV: Standard Distributions (05 hrs)",
              "topics": [
                "Standard probability distributions: Binomial, Poisson, normal distribution and its properties."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Practical Exercises", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Problems on Probability and Conditional Probability.",
            "2. Computation of Mathematical Expectation and Variance.",
            "3. Fitting of Binomial, Poisson, and Normal distributions."
          ]
        },
        "suggestedBooks": [
          "Hogg, R.V., Tanis, E.A. and Rao J.M. (2009): Probability and Statistical Inference, Pearson Education, New Delhi.",
          "Miller, Irwin and Miller, Marylees (2006): John E. Freund's Mathematical Statistics with Applications, Pearson Education, Asia.",
          "Myer, P.L. (1970): Introductory Probability and Statistical Applications, Oxford & IBH Publishing, New Delhi.",
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi."
        ]
      }
    ],
    "3rd": [
      {
        "courseTitle": "Basics of Sampling Distribution and Test of Significance",
        "courseCode": "MDC-3",
        "credits": "3",
        "marks": "100",
        "courseObjectives": [
          "To introduce the basic of numerical analysis",
          "To introduce sampling Distribution"
        ],
        "courseOutcomes": [
          "CO1: Differentiate between the population and sample.",
          "CO2: Understand the basics of Testing of significance.",
          "CO3: Apply testing of hypothesis in the real life problem.",
          "CO4: Acquire the basic sampling distributions and their properties."
        ],
        "theory": {
          "credits": "2",
          "totalHours": "20",
          "units": [
            {
              "title": "Unit I: Sampling Concepts & Hypotheses (06 hrs)",
              "topics": [
                "Population and Sample, Parameter and statistic, sampling distribution of a statistic, sampling distribution of sample mean, standard errors of sample mean, sample variance and sample proportion. Null and alternative hypotheses, level of significance, Type I and Type II errors and critical region."
              ]
            },
            {
              "title": "Unit II: Large Sample Tests (04 hrs)",
              "topics": [
                "Large sample tests, standard normal variate, testing of mean and proportion, testing of difference of two mean and two proportion."
              ]
            },
            {
              "title": "Unit III: Exact Sampling Distributions (04 hrs)",
              "topics": [
                "Exact sampling distribution: $\\chi^2$, Student's t and Fishers F-distribution and their mean and variance."
              ]
            },
            {
              "title": "Unit IV: Applications of Sampling Tests (06 hrs)",
              "topics": [
                "Application of Exact sampling distributions: testing of one sample mean, two sample mean, paired t-test, testing of variance and goodness of fit."
              ]
            }
          ]
        },
        "practical": {
          "credits": "1",
          "totalHours": "10",
          "evaluationScheme": [
            { "component": "Significance Testing Practical", "cia": "15", "endSem": "45", "total": "60" },
            { "component": "Practical Record", "cia": "05", "endSem": "10", "total": "15" },
            { "component": "Viva-Voce", "cia": "10", "endSem": "15", "total": "25" }
          ],
          "topics": [
            "1. Large sample tests for single mean and difference of two means.",
            "2. Large sample tests for proportions.",
            "3. Student's t-test for single mean and paired t-test.",
            "4. Chi-square test for goodness of fit and testing variance."
          ]
        },
        "suggestedBooks": [
          "Gupta, S. C. and Kapoor, V. K. (2020): Fundamentals of Mathematical Statistics, S. Chand & Sons, New Delhi.",
          "Goon A.M., Gupta M.K. and Dasgupta B. (2002): Fundamentals of Statistics, Vol. I & II, The World Press, Kolkata.",
          "Saxena, H. C. (2010): Calculus of finite differences, S. Chand & Sons, New Delhi.",
          "Sastry S.S.(2012): Introductory Methods of Numerical Analysis, Prentice Hall of India."
        ]
      }
    ]
  },
  "INT": {
    "5th": [
      {
        "courseTitle": "Summer Internship / Apprenticeship / Statistical Project",
        "courseCode": "INT-1",
        "credits": "4",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Acquire practical exposure to real-world statistical applications in industry, government data organizations (e.g. NSSO, DES Bihar, CSO), market research, analytics companies, or healthcare institutions.",
          "CO2: Apply sampling techniques, statistical modeling, data visualization, and computational tools (R/Python/Excel) to solve practical analytical problems."
        ],
        "theory": {
          "credits": "4",
          "totalHours": "60",
          "units": [
            {
              "title": "Unit 1: Organizational Induction, Data Gathering & Project Scope Definition",
              "topics": [
                "Orientation to the host organization's analytical setup: Data Collection, Quality Audit, Big Data, or Statistical Reporting.",
                "Identification of research or business problem, formulation of analytical objectives, and review of relevant demographic/statistical literature."
              ]
            },
            {
              "title": "Unit 2: Field Survey / Data Processing / Statistical Modeling",
              "topics": [
                "Hands-on execution of data collection (field surveys, questionnaire administration, secondary official databases) and data scrubbing.",
                "Application of statistical computing (R, Python, C, SPSS) for exploratory data analysis, hypothesis testing, linear modeling, time series forecasting, or quality control."
              ]
            },
            {
              "title": "Unit 3: Comprehensive Internship Report & Viva-Voce Defense",
              "topics": [
                "Preparation of formal internship report: Introduction, Literature Review, Methodology, Data Analysis, Findings, Policy Recommendations, and References.",
                "Viva-Voce presentation and defense before the Departmental Board of Examiners."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Official Internship Guidelines issued by Bihar State Higher Education Council (BSHEC) & UGC NEP 2020.",
          "MOSPI, Government of India: Official Statistics Survey Reports and Manuals."
        ]
      }
    ]
  },
  "RP": {
    "8th": [
      {
        "courseTitle": "Research Project / Dissertation in Statistics",
        "courseCode": "RP-1",
        "credits": "12",
        "marks": "100",
        "courseOutcomes": [
          "CO1: Formulate independent research questions and hypotheses in theoretical or applied statistics.",
          "CO2: Conduct in-depth literature review using scientific journals (Sankhya, Biometrika, Annals of Statistics, JRSS).",
          "CO3: Implement advanced statistical modeling, inference, simulation, or data analytics pipelines.",
          "CO4: Compile a scholarly dissertation adhering to ethical research and publication standards, and defend findings."
        ],
        "theory": {
          "credits": "12",
          "totalHours": "180",
          "units": [
            {
              "title": "Phase 1: Research Formulation & Comprehensive Literature Review",
              "topics": [
                "Identification of research domain: Inferential Statistics, Sampling Theory, Experimental Design, Econometrics, Time Series, Machine Learning, Biostatistics, or Demography.",
                "Extensive literature survey using bibliographic databases (Google Scholar, Scopus, JSTOR, ArXiv) and formulation of research methodology."
              ]
            },
            {
              "title": "Phase 2: Theoretical Derivations / Simulation / Empirical Data Analysis",
              "topics": [
                "Development of mathematical models, derivation of statistical properties, Monte Carlo simulations, or rigorous analysis of real-world datasets.",
                "Computational implementation in R / Python / C / MATLAB, validation of model assumptions, and interpretation of results."
              ]
            },
            {
              "title": "Phase 3: Dissertation Thesis Submission & Defense",
              "topics": [
                "Typesetting the dissertation in LaTeX/Word: Abstract, Introduction, Literature Review, Theoretical Framework, Numerical Results & Discussion, Conclusions, and Bibliography.",
                "Plagiarism check verification and oral defense before the External & Internal Board of Examiners."
              ]
            }
          ]
        },
        "suggestedBooks": [
          "Anderson, T.W.: An Introduction to Multivariate Statistical Analysis, John Wiley.",
          "Casella, G. and Berger, R.L.: Statistical Inference, Duxbury Press.",
          "Hastie, T., Tibshirani, R., and Friedman, J.: The Elements of Statistical Learning, Springer."
        ]
      }
    ]
  }
};
