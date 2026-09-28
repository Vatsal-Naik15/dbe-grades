/* ============================================================
   DBE Grades: course list
   ------------------------------------------------------------
   This is the only file to edit when courses change.
   Each course is one line:

   { term: 1, code: "MK11x", name: "Marketing Fundamentals", credits: 3, batches: [1, 2, 3] },

   term      which term the course is in (1 to 9)
   code      course code, or "" if there isn't one
   name      the course name as Moodle shows it
   credits   1.5, 3 or 4.5
   batches   which batches take it: 1 = 2024 intake, 2 = 2025, 3 = 2026
   project   add  project: true  for project-based courses (marked on a
             project, not a CLA + final exam). They get a "Project" tag and
             are left out of retake plans unless the student includes them.
   aliases   optional other spellings Moodle uses: lowercase, letters and
             numbers only, e.g. aliases: ["microeconomics"]

   A course that isn't listed still shows up. Students pick its credits
   (1.5, 3 or 4.5) and it counts from then on, so a missing line never
   breaks anything. Adding it here just saves everyone that step.

   Curriculum cross-checked with acedbe.in, September 2026.
   ============================================================ */

var COURSES = [
  /* ---------- Term 1 ---------- */
  { term: 1, code: "EP12x", name: "Explorations in Entrepreneurship", credits: 1.5, batches: [1, 2, 3] },
  { term: 1, code: "MK11x", name: "Marketing Fundamentals", credits: 3, batches: [1, 2, 3] },
  { term: 1, code: "AE11x", name: "Foundations of Business Communication I", credits: 1.5, batches: [1, 2, 3], aliases: ["businesscommunication1"] },
  { term: 1, code: "FA11x", name: "Financial Statements and Business Performance", credits: 3, batches: [1, 2, 3], aliases: ["financialstatements"] },
  { term: 1, code: "EP11x", name: "Creative Mindset for Innovation and Imagination", credits: 1.5, batches: [1, 2, 3], aliases: ["creativemindset"] },
  { term: 1, code: "DS11x_B1", name: "Business Statistics for Entrepreneurs", credits: 3, batches: [1], aliases: ["statisticsforentrepreneurs", "statisticsforentrepreneurs1"] },
  { term: 1, code: "DS11x_B2", name: "Business Statistics for Entrepreneurs I", credits: 1.5, batches: [2, 3], aliases: ["statisticsforentrepreneurs1"] },
  { term: 1, code: "ST21x", name: "Evolution of Business and Market", credits: 1.5, batches: [2], aliases: ["evolutionofbusiness"] },
  { term: 1, code: "ID21x", name: "Website Development", credits: 3, batches: [3], project: true, aliases: ["websitedevelopment"] },

  /* ---------- Term 2 ---------- */
  { term: 2, code: "SE21x", name: "Persuasive Communication", credits: 1.5, batches: [1, 2] },
  { term: 2, code: "ES21x", name: "Principles of Microeconomics", credits: 1.5, batches: [1, 2], aliases: ["microeconomics"] },
  { term: 2, code: "AE21x", name: "Foundations of Business Communication II", credits: 1.5, batches: [1, 2], aliases: ["businesscommunication2"] },
  { term: 2, code: "ID22x", name: "Indian Knowledge System", credits: 3, batches: [1, 2], aliases: ["indianknowledge"] },
  { term: 2, code: "PJ21x", name: "Venturing on a Budget: ₹250 Venture", credits: 1.5, batches: [1, 2], project: true, aliases: ["250venture", "venturingonabudget"] },
  { term: 2, code: "ID21x", name: "Website Development", credits: 3, batches: [1, 2], project: true, aliases: ["websitedevelopment"] },
  { term: 2, code: "DS21x", name: "Advanced Statistics for Business", credits: 1.5, batches: [1], aliases: ["advancedstatistics", "statisticsforentrepreneurs2"] },
  { term: 2, code: "ST21x", name: "Evolution of Business and Market", credits: 1.5, batches: [1], aliases: ["evolutionofbusiness"] },
  { term: 2, code: "FA31x", name: "Management Accounting", credits: 1.5, batches: [2], aliases: ["managementaccounting"] },
  { term: 2, code: "DS21x_B2", name: "Business Statistics for Entrepreneurs II", credits: 1.5, batches: [2], aliases: ["statisticsforentrepreneurs2"] },

  /* ---------- Term 3 ---------- */
  { term: 3, code: "FA31x", name: "Management Accounting", credits: 1.5, batches: [1], aliases: ["managementaccounting"] },
  { term: 3, code: "EP31x", name: "Entrepreneurial Mindset and Methods", credits: 3, batches: [1, 2], aliases: ["entrepreneurialmindset"] },
  { term: 3, code: "SE31x", name: "Design Your Thinking", credits: 1.5, batches: [1, 2] },
  { term: 3, code: "MK31x", name: "Social Media for Marketing", credits: 3, batches: [1, 2], aliases: ["socialmedia"] },
  { term: 3, code: "ID32x", name: "Exploring Sustainability in the Indian Context", credits: 3, batches: [1, 2], aliases: ["sustainabilityintheindian", "exploringsustainability"] },
  { term: 3, code: "AE31x", name: "Spreadsheets for Business Decisions", credits: 1.5, batches: [1, 2], aliases: ["spreadsheets"] },
  { term: 3, code: "ID31x", name: "Understanding Indian Culture", credits: 3, batches: [1, 2], project: true, aliases: ["understandingindianculture", "indianculture"] },
  { term: 3, code: "DS31x_B2", name: "Business Statistics for Entrepreneurs III", credits: 1.5, batches: [2], aliases: ["statisticsforentrepreneurs3"] },

  /* ---------- Term 4 ---------- */
  { term: 4, code: "DS21x", name: "Advanced Statistics for Business", credits: 1.5, batches: [2], aliases: ["advancedstatistics"] },
  { term: 4, code: "ST41x", name: "Introduction to Strategic Management", credits: 3, batches: [1, 2] },
  { term: 4, code: "MD41x", name: "Sustainability Measures for SMEs", credits: 1.5, batches: [1, 2] },
  { term: 4, code: "OM41x", name: "Operations Management", credits: 1.5, batches: [1, 2] },
  { term: 4, code: "EP41x", name: "Entrepreneurial Hypothesis Testing", credits: 1.5, batches: [1, 2] },
  { term: 4, code: "MK41x", name: "Digital Marketing Strategy", credits: 3, batches: [1, 2] },
  { term: 4, code: "OB41x", name: "People, Work and Organisations", credits: 3, batches: [1, 2] },
  { term: 4, code: "MD42x", name: "Exploring Society and Social Structure", credits: 1.5, batches: [1, 2], aliases: ["exploringsociety"] },

  /* ---------- Term 5 ---------- */
  { term: 5, code: "ST51x", name: "New Age Business Models", credits: 3, batches: [1, 2] },
  { term: 5, code: "ES51x", name: "Principles of Macroeconomics", credits: 1.5, batches: [1, 2], aliases: ["macroeconomics"] },
  { term: 5, code: "ES52x", name: "Behavioural Economics", credits: 1.5, batches: [1, 2], aliases: ["behaviouraleconomics", "behavioraleconomics"] },
  { term: 5, code: "EP51x", name: "Generating Entrepreneurial Resources", credits: 3, batches: [1, 2] },
  { term: 5, code: "SE51x", name: "Digital Design Tools and Documentation and Presentation", credits: 3, batches: [1, 2], aliases: ["digitaldesigntools"] },
  { term: 5, code: "MK51x", name: "New Product Development", credits: 3, batches: [1, 2] },

  /* ---------- Term 6 ---------- */
  { term: 6, code: "OM61x", name: "Supply Chain Management", credits: 3, batches: [1, 2], aliases: ["supplychain"] },
  { term: 6, code: "MK61x", name: "Growth Hacking", credits: 1.5, batches: [1, 2] },
  { term: 6, code: "MK62x", name: "Product Management", credits: 3, batches: [1, 2], aliases: ["productmanagement"] },
  { term: 6, code: "ST61x", name: "Inclusive Business Models", credits: 3, batches: [1, 2] },
  { term: 6, code: "DS61x", name: "Business Research Methods", credits: 1.5, batches: [1, 2] },
  { term: 6, code: "PJ61x", name: "Project / Do Your Venture 1", credits: 3, batches: [1, 2], project: true, aliases: ["doyourventure1"] },

  /* ---------- Term 7 ---------- */
  { term: 7, code: "", name: "Organizational Development", credits: 3, batches: [1, 2] },
  { term: 7, code: "", name: "Sales and Distribution Management (DTC)", credits: 1.5, batches: [1, 2] },
  { term: 7, code: "", name: "Do Your Venture 2", credits: 3, batches: [1, 2], project: true, aliases: ["doyourventure2"] },
  { term: 7, code: "", name: "Nature of Languages", credits: 1.5, batches: [1, 2] },
  { term: 7, code: "", name: "Critical Thinking", credits: 1.5, batches: [1, 2] },
  { term: 7, code: "", name: "Big Data Analytics", credits: 3, batches: [1, 2] },
  { term: 7, code: "", name: "Family Business", credits: 1.5, batches: [1, 2] },

  /* ---------- Term 8 ---------- */
  { term: 8, code: "", name: "Customer Relationship Management", credits: 3, batches: [1, 2] },
  { term: 8, code: "", name: "Digital Design Tool 2", credits: 3, batches: [1, 2] },
  { term: 8, code: "", name: "Corporate Finance", credits: 3, batches: [1, 2] },
  { term: 8, code: "", name: "New Age Business Models (Term 8)", credits: 3, batches: [1, 2], aliases: ["newagebusinessmodels2"] },
  { term: 8, code: "", name: "UI/UX Design", credits: 3, batches: [1, 2] },

  /* ---------- Term 9 ---------- */
  { term: 9, code: "", name: "Commercial Environment of Business", credits: 3, batches: [1, 2] },
  { term: 9, code: "", name: "Ethics", credits: 3, batches: [1, 2] },
  { term: 9, code: "", name: "Managing Digital Assets", credits: 1.5, batches: [1, 2] },
  { term: 9, code: "", name: "Exponential Technologies", credits: 1.5, batches: [1, 2] },
  { term: 9, code: "", name: "Mobile Application Development", credits: 1.5, batches: [1, 2] },
  { term: 9, code: "", name: "Project (Mentored)", credits: 4.5, batches: [1, 2], project: true, aliases: ["mentoredproject", "projectmentored"] }
];

/* The site picks the batch automatically when the pasted Moodle page says
   "Batch 2024", "Batch 2025" or "Batch 2026". Add a line for each new intake. */
var BATCH_YEARS = { 2024: 1, 2025: 2, 2026: 3 };
var BATCHES = [1, 2, 3];

if (typeof module !== "undefined") module.exports = { COURSES: COURSES, BATCH_YEARS: BATCH_YEARS, BATCHES: BATCHES };
