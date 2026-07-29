/* ============================================
   RENDER.JS – Shared render layer
   ============================================ */

(function (global) {
  'use strict';

  const _CONTENT_DATA = {"meta":{"name":"Seif-Eddine Joul","tagline":"I build things that move, sense, and respond; I lead the people who build them with me.","linkedin":"https://www.linkedin.com/in/seifjoul","boldpro":"https://bold.pro/my/s-joul","email":"seifjoul@gmail.com","phone1":{"display":"+212 6 3129 3071","wa":"https://wa.link/jy8ah4"},"phone2":{"display":"+971 52 6000 849","wa":"https://wa.link/x9e47d"},"cvFile":"SEIF JOUL RESUME.pdf","qrCaption":"Scan this code to access this site on mobile","copyright":"2025 Seif-Eddine Joul | All rights reserved.","gtag":"G-C8K6QM5ZGZ","gtm":"GTM-N5KVXWVH"},"index":{"whoAmI":"Mechatronics Engineer who is driven, curious, and adaptable. With hands-on experience across electrical, electronic, and mechanical systems; from maintenance and LV installations to 3D design and automation, I've done them all.\n\nI thrive in collaborative quality-focused environments and I'm continuously expanding my skill set through project management practices/mentality and the exploration of AI-driven tools and automation, ensuring my engineering approach is always aligned with modern industry standards.","whoAmIClosing":"...the one you're looking for!","cards":[{"href":"professional-experience.html","icon":"icons/xp.png","label":"Career"},{"href":"my-skills.html","icon":"icons/skl.png","label":"Skills"},{"href":"my-projects.html","icon":"icons/pro.png","label":"Projects"},{"href":"my-certifications.html","icon":"icons/cert.png","label":"Certificates"},{"href":"personal-life.html","icon":"icons/life.png","label":"Personal Life"},{"href":"education.html","icon":"icons/edu.png","label":"Education"}]},"education":[{"type":"Bachelor's Degree","dateRange":"February 2020 \u2013 November 2024","degree":"Bachelor of Engineering in Mechatronics Engineering (Honours)","school":"Universiti Sains Malaysia (USM)","location":"Penang, Malaysia","courses":["Robotics and Automation","Instrumentation","Machine Vision","Mechatronics Design","Control Systems","Embedded Systems","Manufacturing Processes","Quality Engineering"],"achievements":["Registred on the Board of Engineers of Malaysia","Dean's List Conferment","Vice President of Student Society","Officially recognized under the Washington Accord, meeting international professional engineering standards.","Completed an Outcome-Based Education (OBE) program accredited under the international Washington Accord framework."],"rank":{"value":"#137","note":"Based on: QS World University Rankings 2025"}},{"type":"High School Diploma","dateRange":"January 2016 \u2013 June 2019","degree":"American Curriculum High School Diploma","school":"Al Nahda National School","location":"Abu Dhabi, UAE","courses":["Science (Biology, Chemistry, Physics)","Business and Finance","Sociology"],"achievements":["SAT Math Score: 600/800","IELTS Score: 7 (C1 Level)","PISA Achievement Recognition","SMART Program Participant","ICDL certificate acquired"]}],"certifications":[{"category":"Academic","items":["Board of Engineers Malaysia","Dean's List Conferment","SAT Math 600/800","IELTS (C1 / Score 7)","ICDL (Internatinal Computer Driving License)","PISA (Programme for International Student Assessment)","S.M.A.R.T Math"]},{"category":"Engineering & Technical","items":["Engineering Drawings for Manufacturing","Reading Electrical Systems Drawings & Schematics","Sustainability in Design, Construction & Manufacturing","Learning Industrial Automation","PLC Sequencer Logic","Copper & Fiber Optic Communication Systems","Electrical Panel Boards, Frequency Drives & Transformers","HVAC & Plumbing Schematics","Electronics Foundations: Semiconductor Devices"]},{"category":"Data, Quality & Reliability","items":["Six Sigma (White Belt)","Introduction to Minitab","Machine Learning for Beginners","Image Recognition using Machine Learning"]},{"category":"Project Management & Coordination","items":["Project Management Foundations","Advanced Primavera P6","Agile Project Management","Introduction to Kanban","SAP ERP Essentials","SAP Materials Management"]},{"category":"IT & Service Management","items":["IT Service Management","IT Service Desk Monitoring & Metrics","Zendesk Agent Practitioner","HubSpot Service Hub Certified","Intro to Git & GitHub"]},{"category":"Professional Development","items":["Technical Writing","Communication Foundations","Time Management Fundamentals"]}],"personalLife":[{"title":"Background & Roots","body":"Born and raised in Abu Dhabi, UAE, I grew up in a multicultural environment that shaped my adaptability and global perspective. Moving to Malaysia for my studies opened my eyes to new cultures, cuisines, and ways of thinking. This cross-cultural experience taught me the value of diversity and the importance of staying curious about the world around me."},{"title":"Martial Arts Journey","body":"Muay Thai has been more than just a sport for me \u2014 it's a discipline that shaped my personality. Competing at national and international levels, including representing Morocco at the IFMA Youth World Championship in Thailand, taught me resilience, focus, and the importance of consistent effort. The ring is where I learned that setbacks are just setups for comebacks."},{"title":"Always a Student","body":"I believe learning never stops. Whether it's picking up a new skill, exploring niche subjects, or reading about professional mentalities and strategies, I'm constantly feeding my curiosity. I enjoy online courses and hands-on experimentation. My philosophy: every day is an opportunity to know something I didn't know yesterday."},{"title":"Problem Solver at Heart","body":"I find genuine joy in fixing things \u2014 whether it's a broken appliance, squeaky chair, or an overheating laptop. Friends and family often call me when something's not working right, and I take pride in diagnosing and solving issues others might overlook. For me, every problem is just a puzzle waiting to be solved."},{"title":"Community Builder","body":"I've always believed in the power of bringing people together. From organizing large-scale cultural events to coordinating international student exchanges, I feel proud when I'm helping others connect and open up. Leadership, to me, is about creating spaces where everyone feels valued and heard \u2014 and I try to embody that in everything I do."},{"title":"Hobbies & Interests","body":"Outside of work and academics, I enjoy swimming, playing futsal with friends, and exploring new cuisines. I'm also fascinated by seeing things move and work, which attracted me to simulation games or programs such as Mindustry. When I am bored I try to perfect a recipe \u2014 my life as a foreign single student taught me how to make cheap things edible and taste good."},{"title":"Core Values","body":"Integrity, adaptability, and empathy guide my decisions. I value transparency in relationships, flexibility in the face of change, and understanding in my interactions with others. I believe success isn't just about what you achieve, but how you treat people along the way. And I try to always leave a lasting impression or nice memory for people I meet."},{"title":"Looking Ahead","body":"I'm excited about the future \u2014 both professionally and personally. I want to continue growing as an engineer, contribute to meaningful projects, and eventually mentor the next generation of problem-solvers. My goal is to build a career that combines technical excellence with positive impact, whilst allowing me the freedom and resources to explore and live my personal life."}],"experience":[{"title":"Field Technician","company":"Independent","location":"Morocco","dateRange":"Apr 2025 \u2013 Present","duration":"Ongoing","color":"#e74c3c","overview":["Performed on-site electrical installations for renovation and expansion projects, handling full wiring systems, circuit extensions, and load calculations for residential and commercial clients.","Commissioned electrical circuits from MCB panels to outlets and fixtures, enforcing improved cable management, conduit use, and introducing grounding/color-coding standards enhancing safety and reducing troubleshooting time.","Installed CCTV surveillance systems, along with centralized power supply and discreet cable routing to ensure reliable 24/7 operation without overloading existing circuits, educated clients to access and control the systems over a network.","Designed and fabricated custom metal structures such as window frames and light support using precise cutting/drilling, coupling, and galvanized painting techniques for long-term durability."],"achievements":["Successfully completed several projects under the criteria set by customers, under guidance.","Maintained safe, accident-free and tidy work-sites during and post-service.","Offered proofing and finishing services to customers, leaving behind a clean, protected and pleasant scene after each project when possible."],"skills":["Electrical Wiring","Cable Management","Power Distribution","Problem Solving","Switchgear/Main Panel","Cable Junction/Termination","Fault Isolation & Diagnostics","Customer Service","Load Calculations","Schematics Design","Structured Cabling","CCTV & DVR Installation","Metalworking/Fabrication"]},{"title":"Electromechanical Engineer","company":"Hitronik","location":"Penang, Malaysia","dateRange":"Aug 2023 \u2013 Oct 2023","duration":"3 months","color":"#3498db","overview":["Restored a CNC lathe machine by diagnosing, fixing electronic faults and recalibrating motion settings, as well as measuring and ordering custom parts, then machining them to the desired fit.","Designed and installed a solar-powered LED signage system with custom PCB and rooftop solar integration, enabling 24/7 off-grid lighting, with waterproof and heatproof conduits for safe operation in all forecasts.","Built an automated solar-powered pump system using custom circuitry, microcontroller logic, and mechanical coupling to regulate upstream irrigation, with an independent and secure rechargeable battery, all using recycled parts."],"achievements":["Brought CNC machine back to full operation within one week, resuming its intended precision manufacturing capabilities.","Successfully delivered off-grid renewable energy solutions using sustainable and cost-effective approaches."],"skills":["CNC Machine Operation","PCB Design","Soldering","Arduino","Problem Solving","Circuit Design","Fault Isolation & Diagnostics","Solar Power Systems","Microcontrollers","Mechanical Assembly & Coupling","KiCAD","Power Electronics"]},{"title":"USMi Deputy President","company":"USM International Student Society","location":"Penang, Malaysia","dateRange":"Feb 2023 \u2013 Apr 2025","duration":"2 years 3 months","color":"#f1c40f","overview":["Worked under the direct guidance of the founder of USMi, to plan and execute several large-scale multicultural initiatives that reached hundreds of students and consistently advanced the society's vision and purpose.","Introduced an energetic, collaborative, and results-driven mentality, establishing new partnerships with campus societies and departments, and significantly increasing USMi's outreach and visibility among students and staff."],"achievements":["Successfully organized multiple flagship multicultural events including the International Food Fiesta 2024 with 300+ attendees and budget exceeding RM 20,000.","Expanded organization's network and strengthened cross-cultural collaboration across the university campus."],"skills":["Leadership","Event Planning","Team Coordination","Team Management","Budgeting","Public Speaking","Communication","Change Management","SMART Goal Setting"]},{"title":"Evening Shift Supervisor","company":"Beauhope Caf\u00e9","location":"Penang, Malaysia","dateRange":"Aug 2022 \u2013 May 2024","duration":"1 year 10 months","color":"#27ae60","overview":["Managed daily caf\u00e9 operations including team coordination, inventory tracking, and cash handling, ensuring smooth transitions between shifts and consistent service quality during high-traffic hours.","Supervised a small team of baristas, monitored performance and hygiene compliance, resolved customer concerns on-site, and upheld service standards that enhanced customer satisfaction and repeat business.","Oversaw inventory and financial routines including revenue recording, petty cash management, staff compensation, and accurate preparation of next-day funds.","Applied technical background to continuously maintain and improve the caf\u00e9's electrical, lighting, network, and security systems \u2014 including CCTV, Wi-Fi, and media displays \u2014 ensuring consistent reliability, safety, and smooth daily operation."],"achievements":["Strengthened leadership, multitasking, and communication skills through hands-on team management in a fast-paced, customer-facing environment.","Maintained consistent customer satisfaction ratings and smooth operational flow during evening shifts."],"skills":["Leadership","Team Coordination","Inventory Management","Budgeting","Customer Service","Customer Retention","Time Management","Communication","Network & Wi-Fi Setup","CCTV & DVR Installation","Fault Isolation & Diagnostics"]}],"projects":[{"name":"LiDAR-Camera Sensor Fusion System","category":"academic","categoryLabel":"Computer Vision","body":"Developed a MATLAB-based sensor fusion system combining LiDAR point clouds with camera image data using extrinsic calibration and projective transformation. Integrated YOLOv4 object detection and achieved sub-pixel alignment with average reprojection error below 0.03 px. Fusion approach improved obstacle detection accuracy and depth estimation precision by approximately 35% compared to standalone sensors.","skills":["MATLAB & Simulink","Python","Sensors and Actuators","OpenCV","Sensor Fusion","LiDAR Sensors","YOLO Algorithms","Object Detection","Technical Documentation"]},{"name":"4-DOF Robotic Arm \u2013 Simulation, Fabrication and Control","category":"academic","categoryLabel":"Robotics and Control","body":"Designed and implemented a 4-degree-of-freedom robotic arm with servo-based actuation for pick-and-place operations. Integrated forward and inverse kinematics algorithms for real-time spatial manipulation with Cartesian coordinate input. Constructed custom GUI interface and achieved end-effector placement accuracy within \u00b12 mm with response latency under 100 ms.","skills":["SolidWorks","Arduino","NI LabVIEW","3D Printing","Motor Control","C/C++","Kinematics (Forward/Inverse)","PID Tuning","HMI Design","Mechanical Assembly & Coupling"]},{"name":"Search and Rescue Robot","category":"academic","categoryLabel":"Robotics and Embedded","body":"Built a competition-ready search and rescue robot capable of navigating obstacle courses, detecting and retrieving objects under time constraints. Designed custom chassis and integration of multiple sensor types for environment feedback. Optimized motor control algorithms to improve navigation precision and response time.","skills":["SolidWorks","Arduino","3D Printing","Sensors and Actuators","Motor Control","C/C++","Robotics & Automation","Mechanical Assembly & Coupling","Critical Thinking","Problem Solving"]},{"name":"Regenerative Braking System","category":"personal","categoryLabel":"Electrical and Power Systems","body":"Designed and constructed a prototype regenerative braking system for a small-scale electric vehicle demonstrator. Engineered energy recovery circuitry that captured kinetic energy during braking cycles and recharged a battery module. Achieved measurable energy recovery efficiency and validated system performance under repeated load and stop cycles.","skills":["Motor Control","Sensors and Actuators","Arduino","Power Distribution","C/C++","Circuit Design","Power Electronics","Electromechanics","Analytical Mindset"]},{"name":"Vacuum Pick-and-Place Station","category":"academic","categoryLabel":"Automation and PLC","body":"Programmed and commissioned a pneumatic pick-and-place station using OMRON PLC and CX-ONE software. Designed ladder logic sequences for precise actuator timing and sensor-triggered state transitions. System achieved reliable, repeatable cycle execution with full fault detection and recovery logic.","skills":["PLC Programming","Pneumatic Systems","OMRON CX-ONE","Instrumentation","Ladder Logic","IEC 61131-3 Languages","Direct Digital Control","Industrial Automation","I/O Configuration","FMEA","Signal Mapping"]},{"name":"Coin Measurement System","category":"academic","categoryLabel":"Computer Vision","body":"Developed a Python/OpenCV-based machine vision system to automatically detect, classify, and measure coin dimensions from live camera input. Implemented HSV colour segmentation and Hough circle detection algorithms for robust coin identification across varying lighting conditions. System demonstrated measurement accuracy within \u00b10.5 mm under controlled lighting.","skills":["Python","OpenCV","Analytical Mindset","Object Detection","Git & GitHub"]},{"name":"Automatic Plant Care System","category":"personal","categoryLabel":"Embedded and IoT","body":"Designed and built an autonomous plant care station using Arduino and environmental sensors. System monitored soil moisture, light levels, and temperature, triggering automated watering and alert responses via threshold logic. Compact 3D-printed enclosure housed all electronics and water delivery components in a single integrated unit.","skills":["Arduino","Sensors and Actuators","C/C++","Instrumentation","3D Printing","IoT","Communication Protocols","Microcontrollers"]},{"name":"Drone Delivery Optimization via DoE & ANOVA","category":"extracurricular","categoryLabel":"Data Analysis and Simulation","body":"Designed and conducted simulation-based DoE evaluating drone platform capacity impact on delivery time, analyzing 5 configurations with 20+ simulation runs each. Applied one-way ANOVA to confirm statistically significant effect of platform size on delivery efficiency. Observed 2\u00d7 increase in delivery time from platform size 2 to 10; used regression modeling to fit a 3rd-order polynomial curve for performance prediction.","skills":["Minitab","ANOVA","Design of Experiments (DoE)","Analytical Mindset","Regression Modeling","PDCA Cycle","Excel","Technical Documentation","Critical Thinking"]},{"name":"Adhesive Hook Reliability Project","category":"extracurricular","categoryLabel":"Quality and Reliability Analysis","body":"Demonstrated reliability prediction techniques applicable to consumer and industrial product validation. Analyzed failure modes using Weibull distribution, demonstrating >90% confidence in expected performance lifetime. Conducted accelerated life testing using stress analysis (temperature and load cycles) to predict long-term failure patterns.","skills":["Reliability Testing","Minitab","Root Cause Analysis","Analytical Mindset","Weibull Distribution","Stress Analysis","Design Verification Planning","Risk-Based Inspection (RBI)","FMEA","Six Sigma (DMAIC)","SPC","PDCA Cycle","Pareto Analysis","Technical Documentation"]},{"name":"International Food Fiesta 2024","category":"part-time","categoryLabel":"Organisation and Management","body":"Led the entire organizing effort for a multicultural celebration with 300+ attendees as Deputy President of USMi. Managed logistics, booths, media coordination, and a budget exceeding RM 20,000. Event became one of USM's flagship experiences for the year, showcasing cross-cultural collaboration and community building.","skills":["Leadership","Event Planning","Budgeting","Team Coordination","Public Speaking","Multicultural Communication","Team Management","Time Management","Microsoft Office Suite"]},{"name":"Explorace \u2013 Large-Scale Campus Challenge Event","category":"extracurricular","categoryLabel":"Organisation and Management","body":"Organized and executed a university-wide Explorace challenge involving complex logistics, multi-location coordination, and real-time problem solving. Worked with cross-functional teams to manage participants, checkpoints, safety, and smooth event flow under time and resource constraints.","skills":["Team Coordination","Event Planning","Problem Solving","Leadership","Risk Management"]},{"name":"Academic & English Language Support","category":"personal","categoryLabel":"Tuition and Volunteering","body":"Provided academic writing and language support to high school and university students, including report structuring, proofreading, summarization, and study material preparation. Also supported candidates preparing for English certification exams (Linguaskill, Duolingo) through targeted tutoring and practice resources, achieving consistently successful results.","skills":["Communication","Critical Thinking","Adaptability","Technical Documentation"]},{"name":"Fruit Harvesting Robotic Arm (4-DOF)","category":"academic","categoryLabel":"Computer Aided Design and Robotics","body":"Developed a 4-DOF fruit-harvesting robotic arm concept and simulation, using DH-based kinematic modeling and MATLAB analysis. Contributed to trajectory planning (joint position/velocity/acceleration), NI myRIO + LabVIEW hardware integration, and system documentation as part of a multi-member robotics project.","skills":["MATLAB & Simulink","NI LabVIEW","Robotics & Automation","Instrumentation","Kinematics (Forward/Inverse)","PID Tuning","Technical Documentation"]},{"name":"International Mobility & Global Representation Programs","category":"extracurricular","categoryLabel":"Leadership & Representation","body":"Represented USM in high-level student mobility exchanges, delivering ceremonial welcome addresses to South Korean delegations and managing 4-day hospitality logistics for NYP Singapore students. Directed media coordination and program planning to facilitate seamless cultural integration and strengthen institutional partnerships.","skills":["Communication","Public Speaking","Team Coordination","Multicultural Communication","Event Planning","Leadership"]}]};

  const _SKILLS_DATA = {"categories":[{"title":"Technical Skills","skills":["AutoCAD","SolidWorks","KiCAD","MATLAB & Simulink","NI LabVIEW","OrCAD PSpice","Microcontrollers","OMRON CX-ONE","HMI Design","PCB Design","Circuit Design","Power Electronics","Power Distribution","Solar Power Systems","Transformers","Load Calculations","Electromechanics","Motor Control","Sensors and Actuators","Sensor Fusion","LiDAR Sensors","Instrumentation","Signal Mapping","Schematics Design","Pneumatic Systems","3D Printing","Arduino","Raspberry Pi","CNC Machine Operation","Metalworking/Fabrication","PLC Programming","Ladder Logic","IEC 61131-3 Languages","PID Tuning","Direct Digital Control","Industrial Automation","Robotics & Automation","Kinematics (Forward/Inverse)","Mechanical Assembly & Coupling","Fault Isolation & Diagnostics","Communication Protocols","Fiber Optic Communication","Copper Communication Systems","I/O Configuration","Structured Cabling","Network & Wi-Fi Setup","CCTV & DVR Installation","IoT"]},{"title":"Programming & Software","skills":["C/C++","Python","Git & GitHub","Visual Studio","OpenCV","YOLO Algorithms","Object Detection","Microsoft Office Suite"]},{"title":"Data, Quality & Reliability","skills":["ANOVA","Design of Experiments (DoE)","Regression Modeling","Stress Analysis","Minitab","SPC","Six Sigma (DMAIC)","FMEA","Root Cause Analysis","Pareto Analysis","Reliability Testing","Weibull Distribution","Design Verification Planning","Risk-Based Inspection (RBI)","Reliability-Centered Maintenance (RCM)","MTTR","Continuous Improvement","Lean Manufacturing","Kaizen","PDCA Cycle","Power BI","Excel"]},{"title":"Project & Management","skills":["Agile Project Management","Kanban","Change Management","Risk Management","Team Management","Team Coordination","SMART Goal Setting","Ms Project","Budgeting","Inventory Management","Event Planning"]},{"title":"IT & Service","skills":["IT Service Desk","Service Monitoring & Metrics","Ticketing Systems","Zendesk","HubSpot Service Hub","Technical Documentation","Customer Service","Customer Retention"]},{"title":"Soft Skills","skills":["Leadership","Problem Solving","Critical Thinking","Adaptability","Analytical Mindset","Multicultural Communication","Public Speaking","Communication","Time Management"]},{"title":"Hands-On & Practical","skills":["Soldering","Electrical Wiring","Cable Management","Switchgear/Main Panel","Power/Hand Tools","Cable Junction/Termination"]}],"projectMappings":{"AutoCAD":["Field Technician - General Contractors","Electromechanical Engineer - Hitronik"],"SolidWorks":["4-DOF Robotic Arm","Search and Rescue Robot"],"KiCAD":["Electromechanical Engineer - Hitronik"],"MATLAB & Simulink":["LiDAR-Camera Sensor Fusion System","4-DOF Robotic Arm","Fruit Harvesting Robotic Arm (4-DOF)","Drone Delivery Optimization via DoE & ANOVA"],"NI LabVIEW":["4-DOF Robotic Arm","Fruit Harvesting Robotic Arm (4-DOF)"],"OrCAD PSpice":["Electromechanical Engineer - Hitronik"],"Microcontrollers":["Electromechanical Engineer - Hitronik","Automatic Plant Care System","Regenerative Braking System"],"OMRON CX-ONE":["Vacuum Pick-and-Place Station"],"HMI Design":["Vacuum Pick-and-Place Station","4-DOF Robotic Arm"],"PCB Design":["Electromechanical Engineer - Hitronik"],"Circuit Design":["Electromechanical Engineer - Hitronik","Regenerative Braking System"],"Power Electronics":["Regenerative Braking System","Electromechanical Engineer - Hitronik"],"Power Distribution":["Regenerative Braking System","Field Technician - General Contractors"],"Solar Power Systems":["Electromechanical Engineer - Hitronik"],"Transformers":["Field Technician - General Contractors"],"Load Calculations":["Field Technician - General Contractors"],"Electromechanics":["Electromechanical Engineer - Hitronik","Regenerative Braking System"],"Motor Control":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System"],"Sensors and Actuators":["LiDAR-Camera Sensor Fusion System","Regenerative Braking System","Automatic Plant Care System","Search and Rescue Robot"],"Sensor Fusion":["LiDAR-Camera Sensor Fusion System"],"LiDAR Sensors":["LiDAR-Camera Sensor Fusion System"],"Instrumentation":["Vacuum Pick-and-Place Station","Automatic Plant Care System","Fruit Harvesting Robotic Arm (4-DOF)"],"Signal Mapping":["Vacuum Pick-and-Place Station","Electromechanical Engineer - Hitronik"],"Schematics Design":["Electromechanical Engineer - Hitronik","Field Technician - General Contractors"],"Pneumatic Systems":["Vacuum Pick-and-Place Station"],"3D Printing":["4-DOF Robotic Arm","Search and Rescue Robot","Automatic Plant Care System"],"Arduino":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System","Automatic Plant Care System","Electromechanical Engineer - Hitronik"],"Raspberry Pi":["Automatic Plant Care System"],"CNC Machine Operation":["Electromechanical Engineer - Hitronik"],"Metalworking/Fabrication":["Field Technician - General Contractors","Electromechanical Engineer - Hitronik"],"PLC Programming":["Vacuum Pick-and-Place Station"],"Ladder Logic":["Vacuum Pick-and-Place Station"],"IEC 61131-3 Languages":["Vacuum Pick-and-Place Station"],"PID Tuning":["4-DOF Robotic Arm","Fruit Harvesting Robotic Arm (4-DOF)"],"Direct Digital Control":["Vacuum Pick-and-Place Station"],"Industrial Automation":["Vacuum Pick-and-Place Station","Electromechanical Engineer - Hitronik"],"Robotics & Automation":["4-DOF Robotic Arm","Search and Rescue Robot","Fruit Harvesting Robotic Arm (4-DOF)"],"Kinematics (Forward/Inverse)":["4-DOF Robotic Arm","Fruit Harvesting Robotic Arm (4-DOF)"],"Mechanical Assembly & Coupling":["Electromechanical Engineer - Hitronik","4-DOF Robotic Arm","Search and Rescue Robot"],"Fault Isolation & Diagnostics":["Field Technician - General Contractors","Electromechanical Engineer - Hitronik","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Communication Protocols":["Vacuum Pick-and-Place Station","Automatic Plant Care System"],"Fiber Optic Communication":["Field Technician - General Contractors"],"Copper Communication Systems":["Field Technician - General Contractors"],"I/O Configuration":["Vacuum Pick-and-Place Station","Electromechanical Engineer - Hitronik"],"Structured Cabling":["Field Technician - General Contractors"],"Network & Wi-Fi Setup":["Evening Shift Supervisor - Beauhope Caf\u00e9","Field Technician - General Contractors"],"CCTV & DVR Installation":["Field Technician - General Contractors","Evening Shift Supervisor - Beauhope Caf\u00e9"],"IoT":["Automatic Plant Care System","Evening Shift Supervisor - Beauhope Caf\u00e9"],"C/C++":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System","Automatic Plant Care System"],"Python":["LiDAR-Camera Sensor Fusion System","Coin Measurement System"],"Git & GitHub":["LiDAR-Camera Sensor Fusion System","Coin Measurement System"],"Visual Studio":["4-DOF Robotic Arm"],"OpenCV":["Coin Measurement System","LiDAR-Camera Sensor Fusion System"],"YOLO Algorithms":["LiDAR-Camera Sensor Fusion System"],"Object Detection":["LiDAR-Camera Sensor Fusion System","Coin Measurement System"],"Microsoft Office Suite":["USMi Deputy President","International Food Fiesta 2024"],"ANOVA":["Drone Delivery Optimization via DoE & ANOVA"],"Design of Experiments (DoE)":["Drone Delivery Optimization via DoE & ANOVA"],"Regression Modeling":["Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project"],"Stress Analysis":["Adhesive Hook Reliability Project"],"Minitab":["Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project"],"SPC":["Adhesive Hook Reliability Project"],"Six Sigma (DMAIC)":["Adhesive Hook Reliability Project","Drone Delivery Optimization via DoE & ANOVA"],"FMEA":["Adhesive Hook Reliability Project","Vacuum Pick-and-Place Station"],"Root Cause Analysis":["Adhesive Hook Reliability Project","Field Technician - General Contractors"],"Pareto Analysis":["Adhesive Hook Reliability Project"],"Reliability Testing":["Adhesive Hook Reliability Project"],"Weibull Distribution":["Adhesive Hook Reliability Project"],"Design Verification Planning":["Adhesive Hook Reliability Project"],"Risk-Based Inspection (RBI)":["Adhesive Hook Reliability Project"],"Reliability-Centered Maintenance (RCM)":["Field Technician - General Contractors"],"MTTR":["Field Technician - General Contractors"],"Continuous Improvement":["USMi Deputy President","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Lean Manufacturing":["Vacuum Pick-and-Place Station","Electromechanical Engineer - Hitronik"],"Kaizen":["USMi Deputy President","Evening Shift Supervisor - Beauhope Caf\u00e9"],"PDCA Cycle":["Adhesive Hook Reliability Project","Drone Delivery Optimization via DoE & ANOVA"],"Power BI":["Drone Delivery Optimization via DoE & ANOVA"],"Excel":["Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project","USMi Deputy President"],"Agile Project Management":[],"Kanban":[],"Change Management":["USMi Deputy President"],"Risk Management":["USMi Deputy President","Explorace - Large-Scale Campus Challenge Event"],"Team Management":["USMi Deputy President","International Food Fiesta 2024","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Team Coordination":["International Food Fiesta 2024","USMi Deputy President","Explorace - Large-Scale Campus Challenge Event","Evening Shift Supervisor - Beauhope Caf\u00e9"],"SMART Goal Setting":["USMi Deputy President"],"Ms Project":[],"Budgeting":["International Food Fiesta 2024","USMi Deputy President","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Inventory Management":["Evening Shift Supervisor - Beauhope Caf\u00e9"],"Event Planning":["International Food Fiesta 2024","USMi Deputy President","Explorace - Large-Scale Campus Challenge Event"],"IT Service Desk":["Evening Shift Supervisor - Beauhope Caf\u00e9"],"Service Monitoring & Metrics":["Evening Shift Supervisor - Beauhope Caf\u00e9"],"Ticketing Systems":["Evening Shift Supervisor - Beauhope Caf\u00e9"],"Zendesk":[],"HubSpot Service Hub":[],"Technical Documentation":["LiDAR-Camera Sensor Fusion System","Fruit Harvesting Robotic Arm (4-DOF)","Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project"],"Customer Service":["Evening Shift Supervisor - Beauhope Caf\u00e9","Field Technician - General Contractors"],"Customer Retention":["Evening Shift Supervisor - Beauhope Caf\u00e9"],"Leadership":["International Food Fiesta 2024","USMi Deputy President","Explorace - Large-Scale Campus Challenge Event","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Problem Solving":["4-DOF Robotic Arm","Search and Rescue Robot","Vacuum Pick-and-Place Station","Field Technician - General Contractors"],"Critical Thinking":["LiDAR-Camera Sensor Fusion System","Search and Rescue Robot","Vacuum Pick-and-Place Station","Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project"],"Adaptability":["Field Technician - General Contractors","Academic & English Language Support"],"Analytical Mindset":["Coin Measurement System","Drone Delivery Optimization via DoE & ANOVA","Adhesive Hook Reliability Project","Regenerative Braking System"],"Multicultural Communication":["International Food Fiesta 2024","International Mobility & Global Representation Programs"],"Public Speaking":["International Food Fiesta 2024","USMi Deputy President","International Mobility & Global Representation Programs"],"Communication":["USMi Deputy President","Academic & English Language Support","Evening Shift Supervisor - Beauhope Caf\u00e9","International Mobility & Global Representation Programs"],"Time Management":["International Food Fiesta 2024","USMi Deputy President","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Soldering":["Electromechanical Engineer - Hitronik"],"Electrical Wiring":["Field Technician - General Contractors","Evening Shift Supervisor - Beauhope Caf\u00e9"],"Cable Management":["Field Technician - General Contractors"],"Switchgear/Main Panel":["Field Technician - General Contractors"],"Power/Hand Tools":["Field Technician - General Contractors","Electromechanical Engineer - Hitronik"],"Cable Junction/Termination":["Field Technician - General Contractors"]}};

  let _content = null;
  let _skills  = null;

  async function loadContent() {
    if (_content) return _content;
    if (location.protocol === 'file:') { _content = _CONTENT_DATA; return _content; }
    try {
      const r = await fetch('content.json');
      if (!r.ok) throw new Error('fetch failed');
      _content = await r.json();
    } catch (_) {
      _content = _CONTENT_DATA;
    }
    return _content;
  }

  async function loadSkills() {
    if (_skills) return _skills;
    if (location.protocol === 'file:') { _skills = _SKILLS_DATA; return _skills; }
    try {
      const r = await fetch('skills.json');
      if (!r.ok) throw new Error('fetch failed');
      _skills = await r.json();
    } catch (_) {
      _skills = _SKILLS_DATA;
    }
    return _skills;
  }

  /* ------------------------------------------
     GOOGLE ANALYTICS / GTM INJECTION
  ------------------------------------------ */
  function renderHead(meta) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${meta.gtag}`;
    document.head.prepend(gtagScript);

    const gtagInline = document.createElement('script');
    gtagInline.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${meta.gtag}');
    `;
    document.head.appendChild(gtagInline);

    const gtmInline = document.createElement('script');
    gtmInline.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${meta.gtm}');`;
    document.head.appendChild(gtmInline);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${meta.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(noscript);
  }

  /* ------------------------------------------
     HEADER
  ------------------------------------------ */
  function renderHeader(meta, { showHomeBtn = true } = {}) {
    const el = document.getElementById('site-header');
    if (!el) return;

    // Inject the fixed overlay buttons into body (not inside header)
    // so they are never clipped by header overflow:hidden
    if (!document.getElementById('header-overlay-btns')) {
      const overlay = document.createElement('div');
      overlay.id = 'header-overlay-btns';
      overlay.innerHTML = `
        ${showHomeBtn ? `
          <a href="index.html" class="home-button float-btn" aria-label="Go to home">
            <img src="icons/home.png" alt="Home" class="icon">
          </a>` : ''}
        <button id="theme-toggle" class="theme-toggle float-btn" aria-label="Toggle theme">
          <img src="icons/moon.png" alt="Toggle theme" class="icon">
        </button>
      `;
      document.body.appendChild(overlay);
    }

    el.innerHTML = `
      <div class="header-bar">
        <div class="header-spacer"></div>
        <div class="header-text">
          <h1>${meta.name}</h1>
          <p>${meta.tagline}</p>
          <p>
            <a href="${meta.linkedin}" target="_blank" rel="noopener">LinkedIn</a> |
            <a href="${meta.boldpro}"  target="_blank" rel="noopener">Bold.pro</a>
          </p>
        </div>
        <div class="header-photo-wrap">
          <img src="icons/face.png" alt="Profile photo" class="profile-pic">
        </div>
      </div>
    `;
  }

  /* ------------------------------------------
     NAV
  ------------------------------------------ */
  const NAV_LINKS = [
    { href: 'professional-experience.html', label: 'Career'        },
    { href: 'my-skills.html',               label: 'Skills'        },
    { href: 'my-projects.html',             label: 'Projects'      },
    { href: 'my-certifications.html',       label: 'Certificates'  },
    { href: 'personal-life.html',           label: 'Personal Life' },
    { href: 'education.html',               label: 'Education'     },
  ];

  function renderNav(activePage) {
    const el = document.getElementById('site-nav');
    if (!el) return;

    el.className = 'page-nav';
    el.innerHTML = NAV_LINKS.map(({ href, label }) => {
      const isActive = href === activePage;
      return `<a href="${href}" class="${isActive ? 'page-pill-active' : 'page-pill'}">${label}</a>`;
    }).join('');
  }

  /* ------------------------------------------
     BREADCRUMB (4.5)
  ------------------------------------------ */
  function renderBreadcrumb(activePage) {
    if (!activePage) return;
    const link = NAV_LINKS.find(n => n.href === activePage);
    if (!link) return;

    // Insert after nav
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    const bc = document.createElement('div');
    bc.className = 'breadcrumb';
    bc.innerHTML = `<a href="index.html">Home</a> <span class="bc-sep">›</span> <span class="bc-current">${link.label}</span>`;
    nav.insertAdjacentElement('afterend', bc);
  }

  /* ------------------------------------------
     FLOATING BUTTONS
  ------------------------------------------ */
  function renderFloatingButtons() {
    const el = document.getElementById('floating-buttons');
    if (!el) return;
    el.innerHTML = `
      <button class="float-btn to-top"     type="button" aria-label="Back to top">↑</button>
      <button class="float-btn to-contact" type="button" aria-label="Go to contact">
        <img src="icons/contact.png" alt="Contact" class="icon">
      </button>
    `;
  }

  /* ------------------------------------------
     CONTACT SECTION — with share button (4.2)
  ------------------------------------------ */
  function renderContact(meta) {
    const el = document.getElementById('site-contact');
    if (!el) return;

    el.className = 'contact content-section';
    el.id = 'contact';

    const siteURL  = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
    const cvURL    = siteURL + encodeURIComponent(meta.cvFile);
    const waText   = encodeURIComponent(`Check out my portfolio: ${siteURL}\nDownload CV: ${cvURL}`);
    const mailBody = encodeURIComponent(`Portfolio: ${siteURL}\r\nCV Download: ${cvURL}`);

    el.innerHTML = `
      <h2>Contact &amp; Connect</h2>
      <div class="contact-row">
        <div class="contact-info">
          <p>Email: <a href="mailto:${meta.email}">${meta.email}</a></p>
          <p>Phone: <a href="${meta.phone1.wa}">${meta.phone1.display}</a>
            <img src="icons/wts.png" alt="WhatsApp" class="icon"></p>
          <p>Phone: <a href="${meta.phone2.wa}">${meta.phone2.display}</a>
            <img src="icons/wts.png" alt="WhatsApp" class="icon"></p>
        </div>
        <div class="contact-download">
          <div class="share-btn-wrap">
            <button class="cv-btn" id="share-resume-btn" type="button">
              <img src="icons/dwn.png" alt="" class="icon"> Resume &amp; Portfolio
            </button>
            <div class="share-panel" id="share-panel" hidden>
              <a href="${meta.cvFile}" class="share-option" download>
                <span class="share-opt-icon">📄</span> Download PDF
              </a>
              <a href="https://wa.me/?text=${waText}" class="share-option" target="_blank" rel="noopener">
                <span class="share-opt-icon">💬</span> Share via WhatsApp
              </a>
              <a href="mailto:?subject=${encodeURIComponent('Seif-Eddine Joul – Resume')}&body=${mailBody}" class="share-option">
                <span class="share-opt-icon">✉️</span> Share via Email
              </a>
              <button class="share-option" id="copy-link-btn" type="button">
                <span class="share-opt-icon">🔗</span> Copy Portfolio Link
              </button>
            </div>
          </div>
        </div>
        <div class="contact-qr">
          <img src="icons/QR.png" alt="QR code" class="qr-code">
          <div class="qr-caption">${meta.qrCaption}</div>
        </div>
      </div>
    `;

    // Wire up share panel toggle — always show custom panel, no native share
    document.getElementById('share-resume-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      const panel = document.getElementById('share-panel');
      panel.hidden = !panel.hidden;
    });

    document.getElementById('copy-link-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(siteURL).then(() => {
        if (window.showToast) window.showToast('Portfolio link copied!');
      });
      document.getElementById('share-panel').hidden = true;
    });

    document.addEventListener('click', () => {
      const panel = document.getElementById('share-panel');
      if (panel) panel.hidden = true;
    });
  }

  /* ------------------------------------------
     FOOTER
  ------------------------------------------ */
  function renderFooter(meta) {
    const el = document.getElementById('site-footer');
    if (!el) return;

    el.innerHTML = `
      &copy; ${meta.copyright}
      <br>
      <span class="visitor-badge" id="visitor-count">
        👁 <span class="visitor-num" id="visitor-num">—</span> visits
      </span>
    `;

    // Fetch counter via the hitwebcounter pixel (returns a 1px GIF whose
    // URL contains the count in a header we can't read cross-origin, so
    // instead we call the plain-text API endpoint they provide).
    // Fallback: if the network call fails (offline / local) we just leave "—".
    if (location.protocol !== 'file:') {
      fetch(
        'https://hitwebcounter.com/counter/counter.php?page=21457518&style=0006&nbdigits=5&type=page&initCount=200',
        { mode: 'no-cors' }   // fire-and-forget: increments the counter
      ).catch(() => {});

      // Use their JSON stats API to read the displayed number
      fetch('https://hitwebcounter.com/api/get-count?id=21457518', {
        headers: { 'Accept': 'application/json' }
      })
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const num = data && (data.count || data.total || data.page_count);
          if (num != null) {
            const span = document.getElementById('visitor-num');
            if (span) span.textContent = Number(num).toLocaleString();
          }
        })
        .catch(() => {});
    }
  }

  /* ------------------------------------------
     FULL PAGE BOOTSTRAP
  ------------------------------------------ */
  async function bootstrapPage({ activePage, showHomeBtn = true, renderBody } = {}) {
    try {
      const [content, skills] = await Promise.all([loadContent(), loadSkills()]);
      const { meta } = content;

      renderHead(meta);
      renderHeader(meta, { showHomeBtn });
      if (activePage) renderNav(activePage);
      renderBreadcrumb(activePage);
      renderFloatingButtons();
      renderContact(meta);
      renderFooter(meta);

      if (typeof renderBody === 'function') {
        await renderBody(content, skills);
      }

      // Boot main.js interactivity now that the full DOM is ready.
      // Always call _mainInit here — the DOM was just built by bootstrapPage,
      // so any earlier DOMContentLoaded call ran on an empty page and is stale.
      window._mainInitDone = true;
      if (typeof window._mainInit === 'function') {
        window._mainInit();
      }

    } catch (err) {
      console.error('[render.js] bootstrapPage failed:', err);
    }
  }

  /* ------------------------------------------
     UTILITY HELPERS
  ------------------------------------------ */
  function skillChips(skillArray) {
    if (!skillArray || !skillArray.length) return '';
    return skillArray.map(s => {
      const slug = s.replace(/\s+/g, '-');
      return `<a href="my-skills.html#${slug}" class="skill-tag-mini">${s.replace(/-/g, ' ')}</a>`;
    }).join('');
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  global.SiteRender = {
    bootstrapPage,
    loadContent,
    loadSkills,
    renderHeader,
    renderNav,
    renderBreadcrumb,
    renderFloatingButtons,
    renderContact,
    renderFooter,
    skillChips,
    esc,
  };

})(window);
