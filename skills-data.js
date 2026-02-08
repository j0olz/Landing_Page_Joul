// skills-data.js - Centralized Skills Database
// This file automatically builds relationships between skills and projects

const skillsDatabase = {
  // Technical Skills
  "AutoCAD": [],
  "SolidWorks": [],
  "MATLAB & Simulink": [],
  "NI LabVIEW": [],
  "OrCAD PSpice": [],
  "Microcontrollers": [],
  "OMRON CX-ONE": [],
  "PCB Design": [],
  "Power Distribution": [],
  "Motor Control": [],
  "Sensors and Actuators": [],
  "Instrumentation": [],
  "Pneumatic Systems": [],
  "3D Printing": [],
  "Arduino": [],
  "Raspberry Pi": [],
  "CNC Machine Operation": [],
  "PLC Programming": [],
  
  // Programming & Software
  "C++": [],
  "Python": [],
  "Visual Studio": [],
  "Microsoft Office (ICDL)": [],
  "Microsoft Azure AI": [],
  "AI Prompting": [],
  "OpenCV": [],
  "Computer Vision": [],
  "YOLOv4": [],
  
  // Data, Quality & Research
  "Minitab": [],
  "FMEA": [],
  "SPC": [],
  "Six Sigma": [],
  "Root Cause Analysis (5 Whys)": [],
  "Pareto Analysis": [],
  "Reliability Testing": [],
  "Continuous Improvement": [],
  "Statistical Analysis": [],
  "Data Analysis": [],
  "ANOVA": [],
  "Design of Experiments": [],
  
  // Project & Management
  "Agile Project Management": [],
  "Time Management": [],
  "Change Management": [],
  "Risk Management": [],
  "Team Coordination": [],
  "Budgeting": [],
  "Inventory Keeping": [],
  "Event Planning": [],
  
  // Soft Skills
  "Leadership": [],
  "Problem Solving": [],
  "Critical Thinking": [],
  "Adaptability": [],
  "Analytical Mindset": [],
  "Multicultural Communication": [],
  "Public Speaking": [],
  "Quick-thinking": [],
  "Customer Service": [],
  
  // Hands-On & Practical
  "Soldering": [],
  "Mechanical Coupling/Assembly": [],
  "Electrical Wiring": [],
  "Cable Management": [],
  "Switchgear/Main Panel": [],
  "Power/Hand Tools": [],
  "Cable Junction/Termination": [],
  "Circuit Design": [],
  "Troubleshooting": [],
  "Metalwork": [],
  "Image Processing": [],
  "Kinematics": [],
  "Quality Control": [],
  
  // Languages
  "English (C1 – IELTS 7)": [],
  "Arabic (Native)": [],
  "French (Elementary)": []
};

// Function to register skills from a project/experience
function registerProjectSkills(projectName, skillsList) {
  // Get existing mapping
  let mapping = JSON.parse(localStorage.getItem('skillsMapping') || '{}');
  
  // Merge with default database structure
  mapping = { ...skillsDatabase, ...mapping };
  
  // Split skills by comma and trim whitespace
  const skills = skillsList.split(',').map(s => s.trim());
  
  // Add project to each skill's list
  skills.forEach(skill => {
    if (mapping[skill]) {
      if (!mapping[skill].includes(projectName)) {
        mapping[skill].push(projectName);
      }
    } else {
      // Create new skill entry if it doesn't exist
      mapping[skill] = [projectName];
    }
  });
  
  // Save back to localStorage
  localStorage.setItem('skillsMapping', JSON.stringify(mapping));
}

// Master initialization function - runs once to populate all relationships
function initializeAllSkillMappings() {
  // Check if already initialized
  if (localStorage.getItem('skillsInitialized') === 'true') {
    return;
  }
  
  console.log('Initializing all skill mappings...');
  
  // Clear any existing data
  localStorage.removeItem('skillsMapping');
  
  // ============================================
  // REGISTER ALL PROJECTS
  // ============================================
  
  registerProjectSkills("LiDAR-Camera Sensor Fusion", "MATLAB & Simulink, Computer Vision, Python, Sensors and Actuators, Data Analysis, Image Processing, Critical Thinking");
  
  registerProjectSkills("4-DOF Robotic Arm", "SolidWorks, Arduino, NI LabVIEW, MATLAB & Simulink, 3D Printing, Motor Control, Kinematics, C++, Problem Solving");
  
  registerProjectSkills("Search and Rescue Robot", "SolidWorks, Arduino, 3D Printing, Sensors and Actuators, C++, Motor Control, Problem Solving, Critical Thinking");
  
  registerProjectSkills("Regenerative Braking System", "Motor Control, Sensors and Actuators, Arduino, Circuit Design, Power Distribution, C++, Analytical Mindset");
  
  registerProjectSkills("Vacuum Pick-and-Place Station", "PLC Programming, Pneumatic Systems, OMRON CX-ONE, Troubleshooting, Instrumentation, Problem Solving, Critical Thinking");
  
  registerProjectSkills("Coin Measurement System", "Python, OpenCV, Computer Vision, Image Processing, Data Analysis, Analytical Mindset");
  
  registerProjectSkills("Automatic Plant Care System", "Arduino, Sensors and Actuators, C++, Circuit Design, Instrumentation, Problem Solving, 3D Printing");
  
  registerProjectSkills("Drone Delivery Optimization", "Minitab, Statistical Analysis, Data Analysis, ANOVA, Design of Experiments, Analytical Mindset, Critical Thinking");
  
  registerProjectSkills("Adhesive Hook Reliability", "Reliability Testing, Statistical Analysis, Minitab, Quality Control, Root Cause Analysis (5 Whys), Analytical Mindset, Critical Thinking");
  
  registerProjectSkills("International Food Fiesta 2024", "Leadership, Event Planning, Budgeting, Team Coordination, Public Speaking, Multicultural Communication, Time Management");
  
  // ============================================
  // REGISTER PROFESSIONAL EXPERIENCES
  // ============================================
  
  registerProjectSkills("Field Technician - General Contractors", "Electrical Wiring, Cable Management, Power Distribution, Problem Solving, Customer Service, Switchgear/Main Panel, Cable Junction/Termination, Power/Hand Tools, Troubleshooting, Critical Thinking, Adaptability");
  
  registerProjectSkills("Electromechanical Engineer - Hitronik", "CNC Machine Operation, PCB Design, Soldering, Arduino, Circuit Design, Troubleshooting, Microcontrollers, Power Distribution, Mechanical Coupling/Assembly, Problem Solving, Critical Thinking");
  
  registerProjectSkills("USMi Deputy President", "Leadership, Event Planning, Team Coordination, Budgeting, Public Speaking, Multicultural Communication, Time Management, Adaptability, Problem Solving");
  
  registerProjectSkills("Evening Shift Supervisor - Beauhope Café", "Leadership, Time Management, Inventory Keeping, Budgeting, Customer Service, Quick-thinking, Team Coordination, Problem Solving, Adaptability, Electrical Wiring, Troubleshooting");
  
  // ============================================
  // REGISTER PERSONAL LIFE ACTIVITIES
  // ============================================
  
  registerProjectSkills("Background & Roots (Multicultural Living)", "Multicultural Communication, Adaptability, Critical Thinking");
  
  registerProjectSkills("Muay Thai Championship Journey", "Problem Solving, Adaptability, Critical Thinking, Time Management, Continuous Improvement");
  
  registerProjectSkills("Continuous Learning Philosophy", "Continuous Improvement, Critical Thinking, Adaptability, Analytical Mindset, Problem Solving");
  
  registerProjectSkills("Problem Solving Mindset", "Problem Solving, Critical Thinking, Troubleshooting, Analytical Mindset, Adaptability");
  
  registerProjectSkills("Community Builder & Leadership", "Leadership, Team Coordination, Public Speaking, Event Planning, Multicultural Communication, Adaptability");
  
  registerProjectSkills("DIY Projects & Hobbies", "3D Printing, Arduino, Circuit Design, Soldering, Problem Solving, Critical Thinking, Troubleshooting");
  
  registerProjectSkills("Core Values & Philosophy", "Leadership, Critical Thinking, Adaptability, Multicultural Communication, Problem Solving");
  
  registerProjectSkills("Future Aspirations & Growth", "Leadership, Problem Solving, Continuous Improvement, Critical Thinking, Adaptability");
  
  // Mark as initialized
  localStorage.setItem('skillsInitialized', 'true');
  console.log('All skill mappings initialized successfully!');
}

// Function to scan all project pages and build relationships
function buildSkillRelationships() {
  const storedData = localStorage.getItem('skillsMapping');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return skillsDatabase;
}

// Function to get projects for a specific skill
function getProjectsForSkill(skillName) {
  const mapping = buildSkillRelationships();
  return mapping[skillName] || [];
}

// Function to display tooltip with projects
function createSkillTooltip(skillName, projects) {
  if (!projects || projects.length === 0) {
    //return 'No projects linked yet';
    return;
  }
  
  return `Used in:\n${projects.map(p => `• ${p}`).join('\n')}`;
}

// Function to reset all mappings (for development/testing)
function resetSkillMappings() {
  localStorage.removeItem('skillsMapping');
  localStorage.removeItem('skillsInitialized');
  console.log('Skill mappings reset. Refresh the page to reinitialize.');
}

// Auto-initialize on script load
if (typeof window !== 'undefined') {
  // Check for reset parameter in URL
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('reset') === 'true') {
    resetSkillMappings();
  }
  
  // Initialize all mappings
  initializeAllSkillMappings();
}

// Export for use in pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    buildSkillRelationships,
    registerProjectSkills,
    getProjectsForSkill,
    createSkillTooltip,
    resetSkillMappings
  };
}