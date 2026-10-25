const fs = require('fs');

const SEC_COURSES = {
  '1st': [
    {
      courseTitle: 'Advance Spreadsheet Tools',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To enable the students to use Excel for advanced data analysis.',
        'To equip the students with automation skills on Excel.',
        'To enable the students to use Excel for informed decision making.'
      ],
      courseOutcomes: [
        'CO1: Make meaningful representations of data in the form of charts and pivot tables.',
        'CO2: Draw analysis on data using spreadsheets and use interpretation to make decisions.',
        'CO3: Generate word documents with appropriate formatting, layout, proofing.',
        'CO4: Manage data for generating queries, forms and reports in a database.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Excel Advanced Techniques',
            topics: [
              'Templates, Efficiency, and Risk (Standard Deviation, Variance, and Coefficient of Variation), Data Validation',
              '*Functions and Power functions, Array Formulae (Frequency Distribution, mode.mult, mode.sngl), Tables, Advanced Range Names',
              'What-if-analysis: Goal-seek, Data tables, and Scenario Manager',
              'Data analysis ToolPak: Descriptive Statistics, Moving averages, Histogram, Covariance, correlation, and Regression analysis (only for projection)',
              'Solver add-in: Problem Solving using Solver (optimal product mix, workforce scheduling, transportation, capital budgeting, financial planning)',
              'Integrating Excel with other tools: MS Word, Outlook, PowerPoint, Access, Power BI'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Excel Interactivity and Automation',
            topics: [
              'Index and Match, Offset, Dynamic Charting, Database functions, Text functions, and Error functions: IfError, IsError, Aggregate, Circular Reference, Formula Auditing, Floating-Point Errors',
              'Form Controls (Button, Combo, Check box, Spinner, List, Option), Visual Basic (only basic)',
              'Recording Macros, Absolute and relative macros, editing macros, Use of spinner buttons and command buttons',
              'Sub Procedure, Function Procedure (creating New Functions)',
              'Working with Loops: Do_while loop, For_Next loop',
              'Creating User Forms: Message Box, Input Box; If_Then_Else'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Introduction to VBA',
            topics: [
              'Conditional Formatting, Charts that Inspire (Waterfall, Column, Line, Combo, Thermometer, Scatter, Histogram)',
              'Sheets, Sparklines, Graphics Tricks and Techniques',
              'Worksheet Automation using Macros: Absolute and relative macros, editing macros',
              'Creating new functions using macros, Use of spinner buttons and command buttons'
            ]
          },
          {
            unitNumber: 4,
            title: 'Unit 4: Data Analysis and Decision-Making',
            topics: [
              'Working with External Data, Advanced Uses of PivotTables, PowerPivot, Reporting with PowerPivot, Power Query, Dashboard',
              'Creating a spreadsheet in the area of: Loan and Lease statement; Ratio Analysis; Payroll Accounting; Capital Budgeting (NPV & IRR)',
              'Portfolio Management, Breakeven analysis, and Sensitivity analysis',
              'Operations Management: Constraint, Forecasting & Trend Analysis optimization, Assignment Problems',
              'Depreciation Accounting (Single Method); Graphical representation of data; Frequency distribution and its statistical parameters; Correlation and Regression Analysis'
            ]
          }
        ]
      },
      practical: {
        title: 'Laboratory / Practical Practice (3 Credits - 40+ Classes)',
        topics: [
          'Hands-on building of dynamic financial and statistical dashboards using PivotTables and Power Query',
          'VBA Macro programming for task automation and form control scripting',
          'Applying What-if-analysis (Goal Seek, Scenario Manager) and Solver optimization to real business scenarios',
          'Data cleaning, transformation, and multi-criteria lookup model creation'
        ],
        evaluation: [
          { component: 'Continuous Lab Record & Formative Practical Tests', marks: 30 },
          { component: 'End-Term Hands-on Practical Examination', marks: 50 },
          { component: 'Viva-Voce & Project Presentation', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Alexander, M. & Kusleika, D. - Excel 2016 Power Programming with VBA, Wiley.',
        'Sengupta, C. - Financial Analysis and Modelling Using Excel and VBA, 2nd Ed., Wiley Student Edition.',
        'Winston, W. - MS Excel 2016, Data Analysis & Business Modelling, PHI.',
        'Winston, W. L. (2017) - Microsoft Excel 2016 Data Analysis and Business Modelling, Microsoft Press.',
        'Griffiths, D. - Microsoft Excel Practical Formulae: From Basic Data Analysis to Advanced Formulae Manipulation.'
      ]
    },
    {
      courseTitle: 'Basic IT Tools',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To enable students develop IT skills that are a pre-requisite in today\'s work environment.',
        'To equip them with basic computing skills that will enhance their employability in general.',
        'To enable the student to analyse and present information in a meaningful manner.'
      ],
      courseOutcomes: [
        'CO1: Use word-processor to generate documents with appropriate formatting, layout, review and referencing.',
        'CO2: Manage data in worksheets and workbooks and analyze it using spreadsheet functions and inbuilt formulas.',
        'CO3: Draw analysis on data using spreadsheets to make informed decisions and create pivot tables & charts.',
        'CO4: Manage data in database tables and use the same for generating queries, forms and reports.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Introduction to Spreadsheets',
            topics: [
              'Spreadsheets: Concept of worksheets and workbooks, creating, opening, closing and saving workbooks, moving, copying, inserting, deleting and renaming worksheets',
              'Working with multiple worksheets and multiple workbooks, controlling worksheet views, naming cells using name box, name create and name define',
              'Exchanging data using clipboard, object linking and embedding; Printing and Protecting worksheets: Adjusting margins, creating headers and footers, setting page breaks, changing orientation',
              'Creating portable documents and printing data and formulae; Implementing file level security and protecting data within the worksheet',
              'Understanding absolute, relative and mixed referencing in formulas, referencing cells in other worksheets and workbooks, correcting common formula errors',
              'Working with inbuilt function categories like mathematical, statistical, text, lookup, information, logical, database, date and time and basic financial functions'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Data Analysis in Spreadsheets',
            topics: [
              'Consolidating worksheets and workbooks using formulae and data consolidate command',
              'Choosing a chart type, understanding data points and data series, editing and formatting chart elements, and creating sparkline graphics',
              'Analysing data using pivot tables: Creating, formatting and modifying a pivot table, sorting, filtering and grouping items, creating calculated field and calculated item',
              'Creating pivot table charts, producing a report with pivot tables; Introduction to recording and execution of macros'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Word Processing',
            topics: [
              'Introduction: Creating and saving your document, displaying different views, working with styles and character formatting, working with paragraph formatting techniques using indents, tabs, alignment, spacing, bullets and numbering and creating borders',
              'Page setup and sections: Setting page margins, orientation, headers and footers, end notes and foot notes, creating section breaks and page borders',
              'Working with tables: Creating tables, modifying table layout and design, sorting, inserting graphics in a table, table math, converting text to table and vice versa',
              'Create newspaper columns, indexes and table of contents, Spell check your document using inbuilt and custom dictionaries, checking grammar and style, using thesaurus and finding and replacing text',
              'Create bookmarks, captions and cross referencing, adding hyperlinks, adding sources and compiling and bibliography; Mail merge: Creating and editing your main document and data source, sorting and filtering merged documents and using merge instructions like ask, fill-in and if-then-else; Linking and embedding to keep things together'
            ]
          },
          {
            unitNumber: 4,
            title: 'Unit 4: Databases',
            topics: [
              'Introduction to Database Development: Database Terminology, Objects, Creating Tables, working with fields, understanding Data types, Changing table design, Assigning Field Properties, Setting Primary Keys, using field validation and record validation rules, Indexing',
              'Working with multiple tables, Relationships & Integrity Rules, Join Properties, Record manipulation, Sorting & Filtering',
              'Select data with queries: Creating Query by design & by wizard (Select, Make Table, Append, Delete, Cross Tab, Update, Parameterized Query, Find Duplicate and Find Unmatched), Creating multi table queries, creating & working with table joins',
              'Using operators & expressions: Creating simple & advance criteria; Working with forms: Creating Basic forms, working with bound, unbound and calculated controls, understanding property sheet, Working with Data on Forms: Changing Layout, creating Sub Forms, creating list box, combo box and option groups',
              'Working with Reports: Creating Basic Reports, Creating Header & Footer, Placing Controls on reports, sorting & grouping, Creating Sub reports'
            ]
          }
        ]
      },
      practical: {
        title: 'IT Lab Practicals & Software Exercises',
        topics: [
          'Document formatting, table generation, and advanced mail merge creation in MS Word / LibreOffice Writer',
          'Workbook consolidation, complex nested formulas, and Pivot Table reporting in MS Excel / Calc',
          'Relational database design, table linking, primary key enforcement, and query building in MS Access / Base',
          'Form designing with controls and printable report generation from SQL queries'
        ],
        evaluation: [
          { component: 'Continuous Practical Lab Notebook & Assignments', marks: 30 },
          { component: 'End-Term Computing Lab Exam', marks: 50 },
          { component: 'Viva-Voce & Practical Demonstration', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Swinford, E., Dodge, M., Couch, A., Melton, B. A. (2013). Microsoft Office Professional 2013. O\'Reilly Media.',
        'Wang, W. (2018). Office 2019 For Dummies. Wiley.',
        'Lambert, J. (2019). Microsoft Word 2019 Step by Step. Pearson Education.',
        'Jelen, B. (2013). Excel 2013 Charts and Graphs. Que Publishing.',
        'Alexander, M. & Kusleika, R. (2018). Access 2019 Bible. Wiley.'
      ]
    },
    {
      courseTitle: 'Creative Writing',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To build creative writing skills of students in the main modes of creative writing viz poetry, fiction (novel, short stories), non-fiction (life narratives, autobiographies and biographies) and drama.',
        'To inculcate practical skills in students by mapping their creative talent which be beneficial for employability too.',
        'To perform hands-on-activities to students to develop their creative skills through practical sessions.'
      ],
      courseOutcomes: [
        'CO1: Be sensitive to the texture of literary language and develop craft in creative writing.',
        'CO2: Develop sense of expressing themselves through poetry/short story/biography.',
        'CO3: Induce an understanding of the relationship between an individual and society and pursue versatile career opportunities.',
        'CO4: Develop an understanding of theatre and performance through drama, proofreading, editing, and book publishing.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Introduction to Creative Writing',
            topics: [
              'Introduction to Creative Writing - Meaning, Importance',
              'Imagination & Writing - Peer-interaction, Activities on Imagination',
              'Tropes, Motifs and Figures - Learning tropes, motifs and figures through videos, Discussion on the findings',
              'Craft of Writing - Figure of Speech, Word Play, Character Creation',
              'Character Creation - Dialogue Enaction, Learning Characters through discussion on famous writings, Character Analysis, Writing activities on creating different types of characters (gender/social background/ethnicity etc.)'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Close Reading & Editing',
            topics: [
              'Close Reading: Analysis and Interpretation - Reading different works in Literature, Discussion in small groups, Practice Writing Session',
              'Proofreading & Editing - Practice sessions on Proofreading & Editing of different types of writing'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Genres of Creative Writing & Publishing',
            topics: [
              'Steps of Creative Writing - Pre-Writing, Writing, Post-Writing/Final Draft',
              'Types of Creative Writing - Poetry, Fiction, Non-Fiction (Life Narratives), Drama',
              'Creative Writing & Media - Film Review, Book Review, Other Writings in Media, Submission, Publication',
              'Learning to write Poetry - Reading & understanding Poetry; Practising tone, rhyme, metre, verses; Writing sessions',
              'Learning to write Fiction - Reading & understanding Fiction; Practicing different elements of fiction (Short story, Novella, Novel); Writing sessions',
              'Learning to write Non-Fiction - Reading & understanding Non-Fiction (Biographies & Autobiographies); Practicing different elements of non-fiction; Writing sessions',
              'Learning to write Drama - Reading & understanding Drama; Practicing different elements (plot, character, climax, verbal & non-verbal cues) of Drama; Writing sessions',
              'Submission & Publication (in Print & Digital) - Discussions over how & where to submit and publish (online/offline), Hands-on activities'
            ]
          }
        ]
      },
      practical: {
        title: 'Creative Writing Workshops & Portfolio Submission',
        topics: [
          'Original short story and poetry composition workshop with peer review',
          'Film review and literary book review writing exercises',
          'Dialogue scripting and dramatic enactment sessions',
          'Submission of a bound creative portfolio containing polished original works'
        ],
        evaluation: [
          { component: 'Continuous Writing Portfolio & Workshop Exercises', marks: 30 },
          { component: 'End-Term Written Creative Submission', marks: 50 },
          { component: 'Oral Presentation & Reading Viva', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Dev, Anjana Neira et al. (2008). Creative Writing: A Beginners\' Manual. Pearson, New Delhi.',
        'Morley, David (2007). The Cambridge Introduction to Creative Writing. Cambridge University Press.',
        'Strunk, W. & White, E. B. (1999). The Elements of Style. Longman.'
      ]
    },
    {
      courseTitle: 'Communication in Everyday Life',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To lay down a basic foundation for basic communication that is a part of a student\'s everyday life.',
        'To inculcate the fundamentals of communication with the aim to enhance listening, speaking and writing skills.',
        'To hone practical skills that can be used in day-to-day affairs.'
      ],
      courseOutcomes: [
        'CO1: Improve mediation skills and build stronger interpersonal human relationships.',
        'CO2: Foster societal understanding and develop an independent perspective.',
        'CO3: Enhance active listening and public presentation abilities in everyday scenarios.',
        'CO4: Master practical reading and writing formats including letters, reports, and textual analyses.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Theory of Communication',
            topics: [
              'Meaning, Features, Uses, Cycle, Feedback, Advantages',
              'Barriers to Communication',
              '7 C\'s of Effective Communication'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Listening Skills',
            topics: [
              'Netiquettes of digital and audio interactions',
              'Audio-book Listening & Group Discussions',
              'Note-taking strategies during live lectures and conversations'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Speaking Skills',
            topics: [
              'Oral Presentation - Audio-Visual aids, Audience & Feedback, Delivery of Presentation, Handling Questions',
              'Group Discussion - Culture & History, Current Affairs, Society-related topics',
              'Public Speaking - Public Speech, Extempore delivery',
              'Interview Skills - Personal, Conversational, Public interactions'
            ]
          },
          {
            unitNumber: 4,
            title: 'Unit 4: Reading Skills',
            topics: [
              'Close Reading techniques',
              'Skimming for main ideas and central themes',
              'Scanning for specific details and information retrieval'
            ]
          },
          {
            unitNumber: 5,
            title: 'Unit 5: Writing Skills & Interpersonal Communication',
            topics: [
              'Summarising and Paraphrasing techniques',
              'Note-making and synthesis',
              'Essays - Expository Essay, Descriptive Essay, Narrative Essay',
              'Letter Writing - Formal Letter, Informal Letter',
              'Reports - Incident Report, Newspaper Report, Organisational Report',
              'Analysis & Interpretation - Textual analysis',
              'Intra & Inter-personal Skills - Monologue, Dialogue'
            ]
          }
        ]
      },
      practical: {
        title: 'Communication Practice Exercises & Simulation',
        topics: [
          'Group discussions on current societal and cultural themes',
          'Mock personal interviews and impromptu extempore speeches',
          'Audio listening tests with real-time note-taking and summarization',
          'Drafting formal applications, letters, and incident reports'
        ],
        evaluation: [
          { component: 'Continuous Assessment & Communication Practice Log', marks: 30 },
          { component: 'End-Term Examination', marks: 50 },
          { component: 'Viva-Voce & Oral Presentation', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Chaudhary, Shoma. "Understanding Interviews, Billy Elliot is my Story, Only Less Happy". Tehelka, Feb 2006.',
        'Kumar, Dinesh. "Understanding Values, Our Muddled Generation". The Hindu, March 2006.',
        'Varma, Pramodini & Mukti Sanyal (eds.) (2015). Fluency in English II. Oxford University Press, New Delhi.',
        'Kaul, Asha (2013). Effective Business Communication. PHI Learning.'
      ]
    },
    {
      courseTitle: 'Public Speaking in English Language & Leadership',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To impart leadership skills to students along with adequate communication skills to curate strong leaders in the emerging social, political and corporate world.',
        'To create leaders with ethics and resilience in industry-based fields as well as social fields.',
        'To allow students to realise their leadership skills and curate them through a hand-on practical approach which will be helpful in generating employable skills.'
      ],
      courseOutcomes: [
        'CO1: Learn effective communication through public speaking to instill leadership development.',
        'CO2: Lead in different fields at the undergraduate level and employ leadership skills in future endeavours.',
        'CO3: Strengthen critical mindset, assertiveness, and constructive viewpoints through practice sessions.',
        'CO4: Master rhetoric skills, audience analysis, extempore delivery, and parliamentary debate formats.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Introduction to Effective Communication',
            topics: [
              'Features, Advantages & Disadvantages of Communication',
              'Importance of Active Listening in Leadership',
              'Oral communication - Meaning, Features & Importance',
              'Reading Public Speech - Reading documented speeches delivered in the past; Understanding the art of word play, vocabulary and putting thoughts into words'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Public Speaking Dynamics',
            topics: [
              'What is Speech?, Overcoming Fear of Public Speaking, Language of Public Speech',
              'Drafting a Public Speech (Reading, research, writing, Fact check, Re-writing, Delivery)',
              '3P\'s of Public Speaking (Preparation, Practice, Performance)',
              'Rhetoric Skills, Art of Informative & Persuasive Speaking, Concluding Speech with Power',
              'Types of Public Speaking: Physical & Online; Political, Organisational, Educational & Motivational; Ted Talks, Public Speaking in Media',
              'Listening in groups and Discussion - Listening famous speeches (from history & everyday life); Analysis of its elements & classroom discussion',
              'Writing Public speech - Classroom Practice Sessions'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Leadership Skills and Innovations',
            topics: [
              'Meaning, Features & Importance of Leadership; Historical Overview',
              'Leadership in Academic Life, Corporate Space, Public Life, Social Leadership and Political Leadership',
              'Audience analysis, Audience Engagement & Leadership, Influencing through Leadership',
              'Execution & Delivery of Public Speech - Learning rhetorics through speeches in the form of Audio/Video; Learning Body Language & Paralanguage through ICT',
              'Developing leadership competence through Public Speaking - Intra-class Speech Competitions; Extempore; Group Discussion'
            ]
          },
          {
            unitNumber: 4,
            title: 'Unit 4: Leadership Ethics & Mock Assemblies',
            topics: [
              'Importance of Public Speaking in developing Leadership Skills',
              'Ethics in Public Speaking & Leadership',
              'Mock Parliament / Model United Nations (MUNs)',
              'Interactive Leadership & Speaking Workshops'
            ]
          }
        ]
      },
      practical: {
        title: 'Public Speaking Exercises & Mock Parliament',
        topics: [
          'Delivering prepared persuasive and informative speeches with timed feedback',
          'Impromptu extempore speaking and handling live audience questions',
          'Participating in Mock Parliament sessions and Model United Nations (MUN) debates',
          'Critical rhetorical analysis of landmark historical speeches via video recordings'
        ],
        evaluation: [
          { component: 'Continuous Speech Performance & Participation', marks: 30 },
          { component: 'End-Term Speech Drafting & Delivery Examination', marks: 50 },
          { component: 'Viva-Voce & Rhetorical Analysis', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Beebe, S. A., & Beebe, S. J. (2012). Public Speaking: An Audience-Centred Approach, 8th ed. Boston: Pearson.',
        'Cardon, P. (2014). Business Communication: Developing Leaders for a Networked World. McGraw-Hill.',
        'Jaffe, C. I. (2013). Public Speaking: Concepts & Skills for a Diverse Society, 7th ed. Cengage Learning.'
      ]
    },
    {
      courseTitle: 'Digital Marketing',
      courseCode: 'SEC-1',
      credits: '3',
      marks: '100',
      evaluationScheme: 'End-Term Appraisal: 70 Marks | Continuous Internal Assessment: 30 Marks',
      courseObjectives: [
        'To acquaint the students with the knowledge of growing integration between traditional and digital marketing concepts and practices.',
        'To familiarize the students with the tools and techniques used by digital marketers for driving marketing decisions to attain marketing objectives.'
      ],
      courseOutcomes: [
        'CO1: Understand the concept of digital marketing and its integration with traditional marketing.',
        'CO2: Understand customer value journey in digital context and behavior of online consumers.',
        'CO3: Understand email, content and social media marketing and apply learnings to create digital media campaigns.',
        'CO4: Leverage digital strategies to gain competitive advantage for business and career.'
      ],
      theory: {
        credits: '1',
        units: [
          {
            unitNumber: 1,
            title: 'Unit 1: Marketing in the Digital World',
            topics: [
              'Digital marketing: Concept, Features, Difference between traditional and digital marketing, Moving from traditional to Digital Marketing',
              'Digital Marketing Channels: Intent Based - SEO, Search Advertising; Brand Based - Display Advertising; Community Based - Social Media Marketing; Others - Affiliate, Email, Content, Mobile',
              'Customer Value Journey: 5As Framework; The Ozone 03 Concept Key; Traits of online consumer'
            ]
          },
          {
            unitNumber: 2,
            title: 'Unit 2: Content and Email Marketing',
            topics: [
              'Content Marketing: Step-by-step Content Marketing, Developing a content marketing strategy',
              'Email Marketing: Types of Emails in email marketing, Email Marketing best practices, automated campaign flows'
            ]
          },
          {
            unitNumber: 3,
            title: 'Unit 3: Social Media Marketing and Display Marketing',
            topics: [
              'Social Media Marketing: Building Successful Social Media strategy; Social Media Marketing Channels: Facebook, LinkedIn, YouTube (Concepts and strategies)',
              'Display Advertising: Working of Display Advertising; Benefits and challenges; Overview of Display ad Process; Define - Customer, Publisher, Objectives; Format - Budget, Media, Ad Formats, Ad Copy'
            ]
          },
          {
            unitNumber: 4,
            title: 'Unit 4: Search Engine Marketing & SEO',
            topics: [
              'Introduction of SEM: Working of Search Engine; SERP Positioning; online search behaviour, DMI\'s 5P Customer Search Insights Model',
              'Search Engine Optimization: Overview of SEO Process; Goal Setting - Types',
              'On-Page Optimization: Keyword Research, SEO Process - Site Structure, Content, Technical Mechanics, Headings, Image & Alt text, Social Sharing, Sitemaps, Technical Aspects - Compatibility, Structured Data Markup',
              'Off Page Optimisation: Link Formats, Link Building, Content Marketing, Social Sharing; Black and White Hat Techniques',
              'Search Advertising: Overview of PPC Process; Benefits of Paid Search; Basis of Ranking; Goal Setting - Objectives; Account Setting - Creation of Google Ads, Campaign architecture, Campaign setup, Targeting, Bid Strategy, Delivery, Ad Scheduling, Ad Rotation, Keyword Selection; Ad Copy composition, Ad Extension'
            ]
          }
        ]
      },
      practical: {
        title: 'Digital Campaign Building & Analytics Lab',
        topics: [
          'Setting up a mock Google Ads PPC search campaign and keyword planning',
          'Conducting website SEO audit and on-page metadata optimization',
          'Designing social media content calendar and creative ad copy for Facebook/LinkedIn',
          'Email newsletter template creation and click-through analytics tracking'
        ],
        evaluation: [
          { component: 'Continuous Campaign Portfolio & Assignments', marks: 30 },
          { component: 'End-Term Examination', marks: 50 },
          { component: 'Campaign Defense & Viva-Voce', marks: 20 }
        ]
      },
      suggestedBooks: [
        'Dodson, I. (2016). The Art of Digital Marketing: The Definitive Guide. John Wiley & Sons.',
        'Kotler, P., Kartajaya, H., & Setiawan, I. (2016). Marketing 4.0: Moving from Traditional to Digital. Wiley.',
        'Ryan, Damien. Understanding Digital Marketing: Marketing Strategies for Engaging the Digital Generation. Kogan Page.',
        'Maity, Moutusy. Internet Marketing: A Practical Approach in the Indian Context. Oxford University Press.',
        'Gupta, Seema. Digital Marketing. McGraw Hill.'
      ]
    }
  ]
};

console.log("SEC-1 courses parsed successfully!");
