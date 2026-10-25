const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const micMdcSyllabus = {
  MIC: {
    '1st': [
      {
        courseTitle: 'Introduction to Mathematical Physics & Classical Mechanics',
        courseCode: 'MIC-1',
        credits: '3',
        theory: {
          credits: '2',
          units: [
            {
              title: 'Unit 1: Concept of Differentiation & Integration',
              topics: [
                'Differential calculus: Geometric Meaning of derivative',
                'Integral Calculus: Geometric Meaning of integration',
                'D-operator'
              ]
            },
            {
              title: 'Unit 2: Vector Algebra & Vector Calculus',
              topics: [
                'Vector Triple Products & their significance',
                'Gradient of scalar, Divergence & Curl of vectors'
              ]
            }
          ]
        },
        practical: {
          credits: '1',
          topics: [
            '1. Measurements of length (or diameter) using vernier caliper, screw gauge and travelling microscope.',
            '2. To study the random error in observations.'
          ]
        }
      }
    ],
    '2nd': [
      {
        courseTitle: 'Oscillations and Waves',
        courseCode: 'MIC-2',
        credits: '3',
        theory: {
          credits: '2',
          units: [
            {
              title: 'Unit 1: Basics of Oscillations',
              topics: [
                'Idea of S.H.M., its differential equation and solutions.',
                'Energy in S.H.M, Two body oscillation, coupled Pendulum.'
              ]
            }
          ]
        },
        practical: {
          credits: '1',
          topics: [
             '1. To determine the value of g using bar pendulum'
          ]
        }
      }
    ],
    '3rd': [{ courseTitle: 'Thermal Physics & Thermodynamics', courseCode: 'MIC-3', credits: '3' }],
    '4th': [{ courseTitle: 'Electricity & Magnetism', courseCode: 'MIC-4', credits: '3' }],
    '5th': [
       { courseTitle: 'Mathematical Physics-II and Introduction to Computational Methods', courseCode: 'MIC-5', credits: '3' },
       { courseTitle: 'Electrodynamics and Electromagnetism', courseCode: 'MIC-6', credits: '3' }
    ],
    '6th': [
        { courseTitle: 'Optics', courseCode: 'MIC-7', credits: '3' },
        { courseTitle: 'Elements of Modern Physics', courseCode: 'MIC-8', credits: '3' }
    ],
    '7th': [{ courseTitle: 'Basic Electronics', courseCode: 'MIC-9', credits: '4' }],
    '8th': [{ courseTitle: 'Analytical Mechanics & Special Theory of Relativity', courseCode: 'MIC-10', credits: '4' }]
  },
  MDC: {
    '1st': [
      {
        courseTitle: 'Physics Around Us',
        courseCode: 'MDC-1',
        credits: '3',
        theory: {
          credits: '3',
          units: [
            {
              title: 'Unit 1: Measurements and Physics of daily life',
              topics: [
                'Units, Significant Figures, Mechanics in daily life',
                'Fluids in daily life: Pressure, Buoyancy',
                'Heat and Temperature'
              ]
            },
            {
               title: 'Unit 2: Electricity, Magnetism & Optics in everyday life',
               topics: [
                   'Voltage, Current, household electrical wiring',
                   'Magnets, Earth as a magnet',
                   'Light, Reflection, Refraction, Human Eye'
               ]
            }
          ]
        }
      }
    ],
    '2nd': [{ courseTitle: 'Physics Around Us (Continuing MDC)', courseCode: 'MDC-2', credits: '3' }],
    '3rd': [{ courseTitle: 'Physics Around Us (Continuing MDC)', courseCode: 'MDC-3', credits: '3' }]
  }
};

const physicsRegex = /(Physics:\s*\{\s*["']?MJC["']?:\s*\{[\/\/a-zA-Z0-9\s\{\}\[\]:,'"\-!@#\$%\^&\*\(\)_+\.=\\<>]*?\}\n\s*\})/;

const match = code.match(physicsRegex);

if (match) {
   let modifiedPhysics = match[1];
   modifiedPhysics = modifiedPhysics.slice(0, -1) + ',\n"MIC": ' + JSON.stringify(micMdcSyllabus.MIC, null, 2) + ',\n"MDC": ' + JSON.stringify(micMdcSyllabus.MDC, null, 2) + "\n      ";
   
   code = code.replace(match[1], modifiedPhysics);
   fs.writeFileSync('src/App.tsx', code);
   console.log("Successfully replaced. MIC and MDC added to Physics");
} else {
   console.log("Failed to match Physics block.");
}
