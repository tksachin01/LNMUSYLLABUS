const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /const SUBJECT_MAPPING:\s*any\s*=\s*\{[\s\S]*?\s*BCom:\s*\{/m;
const match = code.match(regex);

if (match) {
  const replacement = `const SUBJECT_MAPPING: any = { 
  BA: {
    'Faculty of Social Sciences': ['History', 'Political Science', 'Economics', 'Geography', 'Psychology', 'Sociology', 'Home Science', 'A.I.H. & C.', 'Public Administration', 'Rural Economics', 'Anthropology', 'L.S.W.'],
    'Faculty of Humanities': ['Hindi', 'English', 'Sanskrit', 'Urdu', 'Maithili', 'Philosophy', 'Bengali', 'Bhojpuri', 'Persian', 'Arabic', 'Pali', 'Prakrit'],
    'Faculty of Fine Arts': ['Music', 'Dramatics'],
    'Faculty of Science': ['Mathematics', 'Statistics']
  },
  BSc: {
    'Faculty of Science': ['Physics', 'Chemistry', 'Botany', 'Zoology', 'Mathematics', 'Statistics']
  },
  BCom: {`;
  code = code.replace(match[0], replacement);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Fixed SUBJECT_MAPPING");
} else {
  console.log("Not found");
}
