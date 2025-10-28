// skills-data.js - Centralized Skills Database
// This file automatically builds relationships between skills and projects

const skillsDatabase = {
  // Technical Skills
  "Robotics": [],
  "Sensor Fusion": [],
  "MATLAB": [],
  "Arduino": [],
  "PLC Programming": [],
  "SolidWorks": [],
  "Python": [],
  "LabVIEW": [],
  "YOLOv4": [],
  "LiDAR": [],
  "3D Printing": [],
  "Circuit Design": [],
  
  // Soft Skills
  "Leadership": [],
  "Event Planning": [],
  "Team Management": [],
  "Budget Management": [],
  "Public Speaking": [],
  "Communication": [],
  
  // Add more skills as needed
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