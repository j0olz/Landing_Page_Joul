/* ============================================
   RENDER.JS – Shared render layer
   ============================================ */

(function (global) {
  'use strict';

  const _CONTENT_DATA = {"meta":{"name":"Seif-Eddine Joul","tagline":"Versatile and Ambitious Engineer, Quality and Safety focused, Team player and solo achiever","linkedin":"https://www.linkedin.com/in/seifjoul","boldpro":"https://bold.pro/my/s-joul","email":"seifjoul@gmail.com","phone1":{"display":"+212 6 3129 3071","wa":"https://wa.link/jy8ah4"},"phone2":{"display":"+971 52 6000 849","wa":"https://wa.link/x9e47d"},"cvFile":"SEIF JOUL RESUME.pdf","qrCaption":"Scan this code to access this site on mobile","copyright":"2025 Seif-Eddine Joul | All rights reserved.","gtag":"G-C8K6QM5ZGZ","gtm":"GTM-N5KVXWVH"},"index":{"whoAmI":"Mechatronics Engineer who is driven, curious, and adaptable. With hands-on experience across electrical, electronic, and mechanical systems; from maintenance and LV installations to 3D design and automation, I've done them all.\n\nI thrive in collaborative quality-focused environments and I'm continuously expanding my skill set through project management practices/mentality and the exploration of AI-driven tools and automation, ensuring my engineering approach is always aligned with modern industry standards.","whoAmIClosing":"...the one you're looking for!","cards":[{"href":"professional-experience.html","icon":"icons/xp.png","label":"Career"},{"href":"my-skills.html","icon":"icons/skl.png","label":"Skills"},{"href":"my-projects.html","icon":"icons/pro.png","label":"Projects"},{"href":"my-certifications.html","icon":"icons/cert.png","label":"Certificates"},{"href":"personal-life.html","icon":"icons/life.png","label":"Personal Life"},{"href":"education.html","icon":"icons/edu.png","label":"Education"}]},"education":[{"type":"Bachelor's Degree","dateRange":"February 2020 – November 2024","degree":"Bachelor of Engineering in Mechatronics Engineering (Hons)","school":"Universiti Sains Malaysia (USM)","location":"Penang, Malaysia","courses":["Robotics and Automation","Instrumentation","Machine Vision","Mechatronics Design","Control Systems","Embedded Systems","Manufacturing Processes","Quality Engineering"],"achievements":["Board of Engineers Malaysia Registration","Dean's List Conferment","Vice President of Student Society","Completed with Honors distinction"],"rank":{"value":"#137","note":"Based on: QS World University Rankings 2025"}},{"type":"High School Diploma","dateRange":"January 2016 – June 2019","degree":"American Curriculum High School Diploma","school":"Al Nahda National School","location":"Abu Dhabi, UAE","courses":["Science (Biology, Chemistry, Physics)","Business and Finance","Sociology"],"achievements":["SAT Math Score: 600/800","IELTS Score: 7 (C1 Level)","PISA Achievement Recognition","SMART Program Participant","ICDL certificate acquired"]}],"certifications":[{"category":"Academic","items":["Board of Engineers Malaysia","Deans List conferment","SAT Math 600/800","IELTS 7/C1","PISA (Programme for International Student Assessment)","S.M.A.R.T Math"]},{"category":"Engineering and Technical","items":["Manufacturing engineering drawing","Sustainability for Design/Construction/Manufacturing","Industrial automation & PLC controllers","Copper & fiber optic communication systems","Electrical power systems"]},{"category":"Personal Development","items":["Agile Project Management","Six Sigma (Wb)","Time Management","Service Management IT","Communication","Technical Writing & documentation","Monitoring and Metrics in IT"]}],"personalLife":[{"title":"Background & Roots","body":"Born and raised in Abu Dhabi, UAE, I grew up in a multicultural environment that shaped my adaptability and global perspective. Moving to Malaysia for my studies opened my eyes to new cultures, cuisines, and ways of thinking. This cross-cultural experience taught me the value of diversity and the importance of staying curious about the world around me."},{"title":"Martial Arts Journey","body":"Muay Thai has been more than just a sport for me — it's a discipline that shaped my personality. Competing at national and international levels, including representing Morocco at the IFMA Youth World Championship in Thailand, taught me resilience, focus, and the importance of consistent effort. The ring is where I learned that setbacks are just setups for comebacks."},{"title":"Always a Student","body":"I believe learning never stops. Whether it's picking up a new skill, exploring niche subjects, or reading about professional mentalities and strategies, I'm constantly feeding my curiosity. I enjoy online courses and hands-on experimentation. My philosophy: every day is an opportunity to know something I didn't know yesterday."},{"title":"Problem Solver at Heart","body":"I find genuine joy in fixing things — whether it's a broken appliance, squeaky chair, or an overheating laptop. Friends and family often call me when something's not working right, and I take pride in diagnosing and solving issues others might overlook. For me, every problem is just a puzzle waiting to be solved."},{"title":"Community Builder","body":"I've always believed in the power of bringing people together. From organizing large-scale cultural events to coordinating international student exchanges, I feel proud when I'm helping others connect and open up. Leadership, to me, is about creating spaces where everyone feels valued and heard — and I try to embody that in everything I do."},{"title":"Hobbies & Interests","body":"Outside of work and academics, I enjoy swimming, playing futsal with friends, and exploring new cuisines. I'm also fascinated by seeing things move and work, which attracted me to simulation games or programs such as Mindustry. When I am bored I try to perfect a recipe — my life as a foreign single student taught me how to make cheap things edible and taste good."},{"title":"Core Values","body":"Integrity, adaptability, and empathy guide my decisions. I value transparency in relationships, flexibility in the face of change, and understanding in my interactions with others. I believe success isn't just about what you achieve, but how you treat people along the way. And I try to always leave a lasting impression or nice memory for people I meet."},{"title":"Looking Ahead","body":"I am actively seeking opportunities in mechatronics, automation, quality engineering, or project management roles — ideally in an environment where I can apply both my technical and interpersonal strengths. I'm open to relocation and excited about contributing to teams building something meaningful."}],"experience":[{"title":"Electromechanical Engineer","company":"Hitronik","location":"Casablanca, Morocco","dateRange":"Dec 2024 – Present","duration":"6+ months","color":"#e8a020","overview":["Assembly and testing of custom electromechanical systems and control panels","PCB design, soldering, and component-level troubleshooting","Programming and commissioning of microcontroller-based embedded systems","CNC machine operation and precision mechanical fabrication"],"achievements":["Reduced rework rate by 15% through improved soldering SOPs","Led integration of new microcontroller platform across 3 product lines","Trained 2 junior technicians on PCB assembly and quality inspection"],"skills":["Microcontrollers","PCB Design","Arduino","CNC Machine Operation","Soldering","Mechanical Coupling and Assembly"]},{"title":"Field Technician (LV Electrical)","company":"General Contractors","location":"Abu Dhabi, UAE","dateRange":"Jun 2024 – Sep 2024","duration":"3 months","color":"#3b82f6","overview":["Executed LV electrical installations including wiring, switchgear, and main panel work","Performed cable junction, termination, and cable management on construction sites","Operated power and hand tools in compliance with site safety standards","Collaborated with site engineers to ensure timely and accurate task completion"],"achievements":["Successfully completed wiring of 4 residential units ahead of schedule","Zero safety incidents across 3-month deployment","Commended by site engineer for reliability and technical accuracy"],"skills":["Electrical Wiring","Cable Management","Switchgear/Main Panel","Cable Junction/Termination","Power/Hand Tools","Power Distribution"]},{"title":"Evening Shift Supervisor","company":"Beauhope Café","location":"Penang, Malaysia","dateRange":"Jan 2023 – Jun 2023","duration":"6 months","color":"#10b981","overview":["Supervised evening operations including staff coordination, inventory, and customer service","Managed shift scheduling and ensured quality standards were consistently met","Handled cash reconciliation, stock replenishment, and end-of-day reporting","Trained new team members on operational procedures and customer handling"],"achievements":["Improved shift efficiency by restructuring task rotation among 4 staff members","Maintained 98% inventory accuracy over the 6-month period","Received consistent positive customer feedback for team conduct and service speed"],"skills":["Leadership","Team Coordination","Budgeting","Inventory Keeping","Time Management","Communication"]},{"title":"Deputy President","company":"USMi (International Student Society)","location":"Penang, Malaysia","dateRange":"Sep 2022 – Sep 2023","duration":"1 year","color":"#8b5cf6","overview":["Served as deputy head of the international student body at Universiti Sains Malaysia","Co-led organizational strategy, event planning, and member engagement initiatives","Represented international students in university committees and formal engagements","Mentored committee members and facilitated cross-cultural collaboration programs"],"achievements":["Co-organized International Food Fiesta 2024 with 300+ attendees and RM 20,000+ budget","Led 2 international mobility programs involving South Korean and Singaporean delegations","Delivered welcome address representing USM at a formal inter-university ceremony"],"skills":["Leadership","Event Planning","Public Speaking","Team Coordination","Budgeting","Communication"]}],"projects":[{"name":"LiDAR-Camera Sensor Fusion for Autonomous Navigation","category":"academic","categoryLabel":"Autonomous Systems","body":"Developed a sensor fusion pipeline integrating LiDAR point cloud data with camera RGB frames for real-time object detection and distance estimation. Implemented Kalman filtering for noisy sensor readings and achieved reliable obstacle detection at up to 8 meters. Validated system performance in simulated indoor navigation environments with 92% detection accuracy.","skills":["MATLAB & Simulink","Python","Sensors and Actuators","OpenCV"]},{"name":"4-DOF Robotic Arm – Simulation, Fabrication and Control","category":"academic","categoryLabel":"Robotics and Control","body":"Designed and implemented a 4-degree-of-freedom robotic arm with servo-based actuation for pick-and-place operations. Integrated forward and inverse kinematics algorithms for real-time spatial manipulation with Cartesian coordinate input. Constructed custom GUI interface and achieved end-effector placement accuracy within ±2 mm with response latency under 100 ms.","skills":["SolidWorks","Arduino","NI LabVIEW","3D Printing","Motor Control","C/C++"]},{"name":"Search and Rescue Robot","category":"academic","categoryLabel":"Robotics and Embedded","body":"Built a competition-ready search and rescue robot capable of navigating obstacle courses, detecting and retrieving objects under time constraints. Designed custom chassis and integration of multiple sensor types for environment feedback. Optimized motor control algorithms to improve navigation precision and response time.","skills":["SolidWorks","Arduino","3D Printing","Sensors and Actuators","Motor Control","C/C++"]},{"name":"Regenerative Braking System","category":"personal","categoryLabel":"Electrical and Power Systems","body":"Designed and constructed a prototype regenerative braking system for a small-scale electric vehicle demonstrator. Engineered energy recovery circuitry that captured kinetic energy during braking cycles and recharged a battery module. Achieved measurable energy recovery efficiency and validated system performance under repeated load and stop cycles.","skills":["Motor Control","Sensors and Actuators","Arduino","Power Distribution","C/C++"]},{"name":"Vacuum Pick-and-Place Station","category":"academic","categoryLabel":"Automation and PLC","body":"Programmed and commissioned a pneumatic pick-and-place station using OMRON PLC and CX-ONE software. Designed ladder logic sequences for precise actuator timing and sensor-triggered state transitions. System achieved reliable, repeatable cycle execution with full fault detection and recovery logic.","skills":["PLC Programming","Pneumatic Systems","OMRON CX-ONE","Instrumentation"]},{"name":"Coin Measurement System","category":"academic","categoryLabel":"Computer Vision","body":"Developed a Python/OpenCV-based machine vision system to automatically detect, classify, and measure coin dimensions from live camera input. Implemented HSV colour segmentation and Hough circle detection algorithms for robust coin identification across varying lighting conditions. System demonstrated measurement accuracy within ±0.5 mm under controlled lighting.","skills":["Python","OpenCV","Analytical Mindset"]},{"name":"Automatic Plant Care System","category":"personal","categoryLabel":"Embedded and IoT","body":"Designed and built an autonomous plant care station using Arduino and environmental sensors. System monitored soil moisture, light levels, and temperature, triggering automated watering and alert responses via threshold logic. Compact 3D-printed enclosure housed all electronics and water delivery components in a single integrated unit.","skills":["Arduino","Sensors and Actuators","C/C++","Instrumentation","3D Printing"]},{"name":"Drone Delivery Optimization via DoE & ANOVA","category":"extracurricular","categoryLabel":"Data Analysis and Simulation","body":"Designed and conducted simulation-based DoE evaluating drone platform capacity impact on delivery time, analyzing 5 configurations with 20+ simulation runs each. Applied one-way ANOVA to confirm statistically significant effect of platform size on delivery efficiency. Observed 2× increase in delivery time from platform size 2 to 10; used regression modeling to fit a 3rd-order polynomial curve for performance prediction.","skills":["Minitab","ANOVA","Design of Experiments","Analytical Mindset"]},{"name":"Adhesive Hook Reliability Project","category":"extracurricular","categoryLabel":"Quality and Reliability Analysis","body":"Demonstrated reliability prediction techniques applicable to consumer and industrial product validation. Analyzed failure modes using Weibull distribution, demonstrating >90% confidence in expected performance lifetime. Conducted accelerated life testing using stress analysis (temperature and load cycles) to predict long-term failure patterns.","skills":["Reliability Testing","Minitab","Root Cause Analysis (5 Whys)","Analytical Mindset"]},{"name":"International Food Fiesta 2024","category":"part-time","categoryLabel":"Organisation and Management","body":"Led the entire organizing effort for a multicultural celebration with 300+ attendees as Deputy President of USMi. Managed logistics, booths, media coordination, and a budget exceeding RM 20,000. Event became one of USM's flagship experiences for the year, showcasing cross-cultural collaboration and community building.","skills":["Leadership","Event Planning","Budgeting","Team Coordination","Public Speaking"]},{"name":"Explorace – Large-Scale Campus Challenge Event","category":"extracurricular","categoryLabel":"Organisation and Management","body":"Organized and executed a university-wide Explorace challenge involving complex logistics, multi-location coordination, and real-time problem solving. Worked with cross-functional teams to manage participants, checkpoints, safety, and smooth event flow under time and resource constraints.","skills":["Team Coordination","Event Planning","Problem Solving","Leadership"]},{"name":"Academic & English Language Support","category":"personal","categoryLabel":"Tuition and Volunteering","body":"Provided academic writing and language support to high school and university students, including report structuring, proofreading, summarization, and study material preparation. Also supported candidates preparing for English certification exams (Linguaskill, Duolingo) through targeted tutoring and practice resources, achieving consistently successful results.","skills":["Communication","Critical Thinking","Adaptability"]},{"name":"Fruit Harvesting Robotic Arm (4-DOF)","category":"academic","categoryLabel":"Computer Aided Design and Robotics","body":"Engineered a 4-DOF fruit-harvesting robotic arm from kinematic specification through to hardware validation. Derived the full DH parameter table, performed forward and inverse kinematics analysis in MATLAB, and generated joint trajectory profiles with velocity and acceleration constraints. Implemented the motion controller on NI myRIO with LabVIEW, tuning the closed-loop response to achieve smooth, repeatable end-effector paths suitable for delicate fruit contact.","skills":["MATLAB & Simulink","NI LabVIEW","Robotics & Automation","Instrumentation"]},{"name":"International Mobility & Global Representation Programs","category":"extracurricular","categoryLabel":"Leadership & Representation","body":"Represented USM in high-level student mobility exchanges, delivering ceremonial welcome addresses to South Korean delegations and managing 4-day hospitality logistics for NYP Singapore students. Directed media coordination and program planning to facilitate seamless cultural integration and strengthen institutional partnerships.","skills":["Communication","Public Speaking","Team Coordination","Multicultural Communication"]}]};

  const _SKILLS_DATA = {"categories":[{"title":"Technical Skills","skills":["AutoCAD","SolidWorks","MATLAB & Simulink","NI LabVIEW","OrCAD PSpice","Microcontrollers","OMRON CX-ONE","PCB Design","Power Distribution","Motor Control","Sensors and Actuators","Instrumentation","Pneumatic Systems","3D Printing","Arduino","Raspberry Pi","CNC Machine Operation","PLC Programming","Robotics & Automation","Mechanical Coupling and Assembly"]},{"title":"Programming & Software","skills":["C/C++","Python","Visual Studio","Microsoft Office (ICDL)","OpenCV","GitHub","Microsoft Office Suite"]},{"title":"Data, Quality & Research","skills":["ANOVA","Design of Experiments","Minitab","FMEA","SPC","Six Sigma","Power Query in Excel","Root Cause Analysis (5 Whys)","Pareto Analysis","Reliability Testing","Continuous Improvement"]},{"title":"Project & Management","skills":["Agile Project Management","Time Management","Change Management","Risk Management","Team Coordination","Ms Project","Budgeting","Inventory Keeping","Event Planning"]},{"title":"Soft Skills","skills":["Leadership","Problem Solving","Critical Thinking","Adaptability","Analytical Mindset","Multicultural Communication","Public Speaking","Communication"]},{"title":"Hands-On & Practical","skills":["Soldering","Mechanical Coupling/Assembly","Electrical Wiring","Cable Management","Switchgear/Main Panel","Power/Hand Tools","Cable Junction/Termination"]}],"projectMappings":{"AutoCAD":[],"SolidWorks":["4-DOF Robotic Arm","Search and Rescue Robot"],"MATLAB & Simulink":["LiDAR-Camera Sensor Fusion","4-DOF Robotic Arm","Fruit Harvesting Robotic Arm","Drone Delivery Optimization"],"NI LabVIEW":["4-DOF Robotic Arm","Fruit Harvesting Robotic Arm"],"OrCAD PSpice":[],"Microcontrollers":["Electromechanical Engineer - Hitronik"],"OMRON CX-ONE":["Vacuum Pick-and-Place Station"],"PCB Design":["Electromechanical Engineer - Hitronik"],"Power Distribution":["Regenerative Braking System","Field Technician - General Contractors"],"Motor Control":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System"],"Sensors and Actuators":["LiDAR-Camera Sensor Fusion","Regenerative Braking System","Automatic Plant Care System"],"Instrumentation":["Vacuum Pick-and-Place Station","Automatic Plant Care System"],"Pneumatic Systems":["Vacuum Pick-and-Place Station"],"3D Printing":["4-DOF Robotic Arm","Search and Rescue Robot","Automatic Plant Care System"],"Arduino":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System","Automatic Plant Care System","Electromechanical Engineer - Hitronik"],"Raspberry Pi":[],"CNC Machine Operation":["Electromechanical Engineer - Hitronik"],"PLC Programming":["Vacuum Pick-and-Place Station"],"Robotics & Automation":["4-DOF Robotic Arm","Search and Rescue Robot","Fruit Harvesting Robotic Arm"],"Mechanical Coupling and Assembly":["Electromechanical Engineer - Hitronik"],"C/C++":["4-DOF Robotic Arm","Search and Rescue Robot","Regenerative Braking System","Automatic Plant Care System"],"Python":["LiDAR-Camera Sensor Fusion","Coin Measurement System"],"Visual Studio":[],"Microsoft Office (ICDL)":[],"OpenCV":["Coin Measurement System"],"GitHub":[],"Microsoft Office Suite":[],"ANOVA":["Drone Delivery Optimization"],"Design of Experiments":["Drone Delivery Optimization"],"Minitab":["Drone Delivery Optimization","Adhesive Hook Reliability"],"FMEA":[],"SPC":[],"Six Sigma":[],"Power Query in Excel":[],"Root Cause Analysis (5 Whys)":["Adhesive Hook Reliability"],"Pareto Analysis":[],"Reliability Testing":["Adhesive Hook Reliability"],"Continuous Improvement":["Muay Thai Championship Journey","Continuous Learning Philosophy"],"Agile Project Management":[],"Time Management":["International Food Fiesta 2024","USMi Deputy President","Evening Shift Supervisor - Beauhope Café"],"Change Management":[],"Risk Management":[],"Team Coordination":["International Food Fiesta 2024","USMi Deputy President","Explorace Campus Challenge","Evening Shift Supervisor - Beauhope Café"],"Ms Project":[],"Budgeting":["International Food Fiesta 2024","USMi Deputy President","Evening Shift Supervisor - Beauhope Café"],"Inventory Keeping":["Evening Shift Supervisor - Beauhope Café"],"Event Planning":["International Food Fiesta 2024","USMi Deputy President","Community Builder & Leadership"],"Leadership":["International Food Fiesta 2024","USMi Deputy President","Community Builder & Leadership","Evening Shift Supervisor - Beauhope Café"],"Problem Solving":["4-DOF Robotic Arm","Search and Rescue Robot","Vacuum Pick-and-Place Station","Field Technician - General Contractors","Problem Solving Mindset"],"Critical Thinking":["LiDAR-Camera Sensor Fusion","Search and Rescue Robot","Vacuum Pick-and-Place Station","Drone Delivery Optimization","Adhesive Hook Reliability"],"Adaptability":["Background & Roots","Muay Thai Championship Journey","Field Technician - General Contractors"],"Analytical Mindset":["Coin Measurement System","Drone Delivery Optimization","Adhesive Hook Reliability","Regenerative Braking System"],"Multicultural Communication":["International Food Fiesta 2024","Community Builder & Leadership","Background & Roots"],"Public Speaking":["International Food Fiesta 2024","USMi Deputy President","Community Builder & Leadership"],"Communication":["USMi Deputy President","Academic & Language Support","Evening Shift Supervisor - Beauhope Café"],"Soldering":["Electromechanical Engineer - Hitronik"],"Mechanical Coupling/Assembly":["Electromechanical Engineer - Hitronik"],"Electrical Wiring":["Field Technician - General Contractors","Evening Shift Supervisor - Beauhope Café"],"Cable Management":["Field Technician - General Contractors"],"Switchgear/Main Panel":["Field Technician - General Contractors"],"Power/Hand Tools":["Field Technician - General Contractors"],"Cable Junction/Termination":["Field Technician - General Contractors"]}};

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
        👁 <img
          src="https://hitwebcounter.com/counter/counter.php?page=21457518&style=0006&nbdigits=5&type=page&initCount=200"
          title="Visitor Counter" alt="visitor count" border="0"
          style="vertical-align:middle;height:16px;">
        visits
      </span>
    `;
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
