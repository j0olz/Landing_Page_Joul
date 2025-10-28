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

// Function to scan all project pages and build relationships
function buildSkillRelationships() {
  // This will be called when the skills page loads
  // It reads from localStorage which is populated by project pages
  
  const storedData = localStorage.getItem('skillsMapping');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return skillsDatabase;
}

// Function to register skills from a project page
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

// Function to get projects for a specific skill
function getProjectsForSkill(skillName) {
  const mapping = buildSkillRelationships();
  return mapping[skillName] || [];
}

// Function to display tooltip with projects
function createSkillTooltip(skillName, projects) {
  if (!projects || projects.length === 0) {
    return 'No projects linked yet';
  }
  
  return `Used in:\n${projects.map(p => `• ${p}`).join('\n')}`;
}

// Export for use in pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    buildSkillRelationships,
    registerProjectSkills,
    getProjectsForSkill,
    createSkillTooltip
  };
}