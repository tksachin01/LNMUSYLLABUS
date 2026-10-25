const fs = require('fs');

const physicsSyllabus = {
  MJC: {
    '1st': [
      {
        courseTitle: 'Introduction to Mathematical Physics & Classical Mechanics',
        courseCode: 'MJC-1',
        credits: '6',
        theory: {
          credits: '4',
          units: [
            {
              title: 'Unit 1: Concept of Differentiation & Integration',
              topics: [
                'Differential calculus: Geometric Meaning of derivative; Maxima & Minima; Approximation of derivative; Partial Differentiation.',
                'Integral Calculus: Geometric Meaning of integration, order and degree of differential equation, Solution of First order.',
                'D-operator & Solution of Second order Differential Equation.'
              ]
            },
            {
              title: 'Unit 2: Vector Algebra & Vector Calculus',
              topics: [
                'Vector Triple Products & their significance; concept of scalar & vector fields.',
                'Gradient of scalar, Divergence & Curl of vectors.',
                'Equation of continuity, Euler\'s equation of motion, Bernoulli\'s theorem, Fourier heat flow.',
                'Poisson\'s and Laplace\'s equation in a gravitational field, Gauss\'s law of in Electrostatic.'
              ]
            }
          ]
        }
      }
    ],
    '2nd': [
      {
        courseTitle: 'Oscillations and Waves',
        courseCode: 'MJC-2',
        credits: '6',
        theory: {
          credits: '4',
          units: [
            {
              title: 'Unit 1: Basics of Oscillations',
              topics: [
                'Idea of S.H.M., its differential equation and solutions.',
                'Energy in S.H.M, Two body oscillation, coupled Pendulum.'
              ]
            }
          ]
        }
      }
    ],
    '3rd': [
      {
        courseTitle: 'Thermal Physics & Thermodynamics',
        courseCode: 'MJC-3',
        credits: '5',
        theory: {
          credits: '3',
          units: [
            {
              title: 'Unit 1: Kinetic Theory of Gases',
              topics: [
                'Maxwell-Boltzmann Molecular Speed distribution Law for an Ideal Gas.'
              ]
            }
          ]
        }
      },
      {
        courseTitle: 'Electricity & Magnetism',
        courseCode: 'MJC-4',
        credits: '4',
        theory: {
          credits: '3',
          units: [
            {
              title: 'Unit 1: Electrostatics',
              topics: [
                'Electric Field and potential, Gauss Law and its applications.'
              ]
            }
          ]
        }
      }
    ],
    '4th': [
      {
        courseTitle: 'Mathematical Physics-II and Introduction to Computational Methods',
        courseCode: 'MJC-5',
        credits: '5',
        theory: {
          credits: '3',
          units: [
            {
              title: 'Unit 1: Curvilinear Coordinates, Tensors and special functions',
              topics: [
                'Spherical and Cylindrical Coordinate Systems.'
              ]
            }
          ]
        }
      },
      {
        courseTitle: 'Electrodynamics and Electromagnetism',
        courseCode: 'MJC-6',
        credits: '5'
      },
      {
        courseTitle: 'Optics',
        courseCode: 'MJC-7',
        credits: '5'
      }
    ],
    '5th': [
      {
        courseTitle: 'Elements of Modern Physics',
        courseCode: 'MJC-8',
        credits: '5'
      },
      {
        courseTitle: 'Basic Electronics',
        courseCode: 'MJC-9',
        credits: '5'
      }
    ],
    '6th': [
      {
        courseTitle: 'Analytical Mechanics & Special Theory of Relativity',
        courseCode: 'MJC-10',
        credits: '4'
      },
      {
        courseTitle: 'Statistical Mechanics',
        courseCode: 'MJC-11',
        credits: '5'
      },
      {
        courseTitle: 'Quantum Mechanics & its Application',
        courseCode: 'MJC-12',
        credits: '5'
      }
    ],
    '7th': [
      {
        courseTitle: 'Physics of Atoms and Nuclei',
        courseCode: 'MJC-13',
        credits: '5'
      },
      {
        courseTitle: 'Research Methodology',
        courseCode: 'MJC-14',
        credits: '5'
      },
      {
        courseTitle: 'Solid State Physics',
        courseCode: 'MJC-15',
        credits: '6'
      }
    ],
    '8th': [
      {
        courseTitle: 'Physics of Laser and Molecules',
        courseCode: 'MJC-16',
        credits: '4'
      }
    ]
  }
};

const code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /BSc:\s*\{\s*Botany:/m;
const match = code.match(regex);

if (match) {
  const replacement = `BSc: {\n    Physics: ${JSON.stringify(physicsSyllabus, null, 6)},\n    Botany:`;
  const newCode = code.replace(match[0], replacement);
  fs.writeFileSync('src/App.tsx', newCode);
  console.log("Successfully fixed Physics syllabus logic.");
} else {
  console.log("Could not match BSc block.");
}
