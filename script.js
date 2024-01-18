const questions = [
    
  {
    question: "How many types of nucleic acids exist in the DNA?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Which principle task of Occupational Health involves locating trends, clusters, associations, and causes of disease and injury for in-depth investigation?",
    answers: [
      { text: "Exposure reduction", correct: false },
      { text: "Analysis", correct: true },
      { text: "Substitution", correct: false },
      { text: "Regulation", correct: false },
      { text: "Awareness", correct: false },
    ],
  },
  {
    question: "In occupational health, what does medical surveillance involve?",
    answers: [
      { text: "Locating trends", correct: false },
      { text: "Compensation", correct: false },
      { text: "Monitoring", correct: true },
      { text: "Exposure reduction", correct: false },
      { text: "Substitution", correct: false },
    ],
  },
  {
    question: "Which task involves preparing for prevention as facilities are planned or renovated?",
    answers: [
      { text: "Exposure reduction", correct: false },
      { text: "Anticipation", correct: true },
      { text: "Analysis", correct: false },
      { text: "Substitution", correct: false },
      { text: "Management-worker cooperation", correct: false },
    ],
  },
  {
    question: "How does analysis contribute to occupational health?",
    answers: [
      { text: "Monitoring disease", correct: false },
      { text: "Identifying trends", correct: true },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Preventing injury", correct: false },
      { text: "Compensating workers", correct: false },
    ],
  },

  {
    question: "What is the primary purpose of medical surveillance in occupational health?",
    answers: [
      { text: "Locating trends", correct: false },
      { text: "Compensation", correct: false },
      { text: "Identifying disease and injury", correct: true },
      { text: "Exposure reduction", correct: false },
      { text: "Substitution", correct: false }
    ]
  },
  {
    question: "Why is awareness important in occupational health?",
    answers: [
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Locating trends", correct: false },
      { text: "Compensation for workers", correct: false },
      { text: "Identifying disease and injury", correct: false },
      { text: "Worker participation", correct: true }
    ]
  },
  {
    question: "What is the role of regulation in occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "On-site supervision", correct: true },
      { text: "Analysis of data", correct: false },
      { text: "Substitution of substances", correct: false }
    ]
  },
  {
    question: "How does compensation relate to occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Management-worker cooperation", correct: false },
      { text: "Locating trends", correct: false },
      { text: "Providing for illness and loss of life", correct: true }
    ]
  },
  {
    question: "Which principal task involves preparing for prevention during the planning or renovation of facilities?",
    answers: [
      { text: "Medical surveillance", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Anticipation", correct: true },
      { text: "Compensation", correct: false },
      { text: "Management-worker cooperation", correct: false }
    ]
  },
  {
    question: "If a workplace consistently exceeds established exposure limits, which task is most relevant for addressing this issue?",
    answers: [
      { text: "Monitoring", correct: false },
      { text: "Compensation", correct: false },
      { text: "Substitution", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Regulation", correct: true }
    ]
  },
  {
    question: "In a scenario where toxic substances can be replaced with less harmful alternatives, what strategy aligns with occupational health goals?",
    answers: [
      { text: "Awareness", correct: false },
      { text: "Analysis", correct: false },
      { text: "Substitution", correct: true },
      { text: "Compensation", correct: false },
      { text: "Management-worker cooperation", correct: false }
    ]
  },
  {
    question: "How does management-worker cooperation contribute to occupational health?",
    answers: [
      { text: "Identifying disease and injury", correct: false },
      { text: "Minimizing toxic exposure", correct: false },
      { text: "Compensating workers", correct: false },
      { text: "Worker participation", correct: true },
      { text: "Analysis of data", correct: false }
    ]
  },
  {
    question: "If there is a sudden increase in reported cases of occupational disease, which task is crucial for understanding and addressing the issue?",
    answers: [
      { text: "Compensation", correct: false },
      { text: "Analysis", correct: true },
      { text: "Medical surveillance", correct: false },
      { text: "Exposure reduction", correct: false },
      { text: "Awareness", correct: false }
    ]
  },
  {
    question: "What is one of the key responsibilities of management in worker's health?",
    answers: [
      { text: "Hazard identification", correct: false },
      { text: "Compliance inspections", correct: false },
      { text: "Advocacy", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Risk assessment", correct: true }
    ]
  },
  {
    question: "Which governmental responsibility involves enforcing legislation related to worker health and safety?",
    answers: [
      { text: "Inspections and Compliance", correct: false },
      { text: "Research and Guidance", correct: false },
      { text: "Regulatory Framework", correct: true },
      { text: "Occupational Health Services", correct: false },
      { text: "Advocacy and Collaboration", correct: false }
    ]
  },
  {
    question: "What does management aim to achieve through regular risk assessments in the workplace?",
    answers: [
      { text: "Advocacy", correct: false },
      { text: "Compliance", correct: false },
      { text: "Creating a safe working environment", correct: true },
      { text: "Identifying root causes", correct: false },
      { text: "Offering wellness programs", correct: false }
    ]
  },
  {
    question: "Which management responsibility involves educating employees about potential hazards and safe work practices?",
    answers: [
      { text: "Incident Reporting and Investigation", correct: false },
      { text: "Risk Assessment and Mitigation", correct: false },
      { text: "Health Promotion and Wellness Programs", correct: false },
      { text: "Training and Education", correct: true },
      { text: "Providing Occupational Health Services", correct: false }
    ]
  },
  {
    question: "What is the primary responsibility of management in incident reporting and investigation?",
    answers: [
      { text: "Identifying root causes", correct: true },
      { text: "Compliance inspections", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Advocacy", correct: false },
      { text: "Hazard identification", correct: false }
    ]
  },
  {
    question: "Which governmental responsibility involves ensuring compliance with health and safety regulations through regular inspections?",
    answers: [
      { text: "Research and Guidance", correct: false },
      { text: "Occupational Health Services", correct: false },
      { text: "Advocacy and Collaboration", correct: false },
      { text: "Regulatory Framework", correct: true },
      { text: "Inspections and Compliance", correct: false }
    ]
  },
  {
    question: "What proactive measures can management take to promote employee health and well-being?",
    answers: [
      { text: "Conducting regular risk assessments", correct: false },
      { text: "Providing Occupational Health Services", correct: false },
      { text: "Offering wellness programs", correct: true },
      { text: "Advocating for worker health", correct: false },
      { text: "Implementing safety protocols", correct: false }
    ]
  },
  {
    question: "What is a key aspect of governmental responsibilities in research and guidance?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Providing legal frameworks", correct: false },
      { text: "Ensuring compliance", correct: false },
      { text: "Collaborating with experts", correct: true },
      { text: "Conducting regular inspections", correct: false }
    ]
  },
  {
    question: "In what way can management protect the health of employees during risk assessments?",
    answers: [
      { text: "Developing appropriate strategies", correct: true },
      { text: "Advocating for worker health", correct: false },
      { text: "Offering wellness programs", correct: false },
      { text: "Creating a safe working environment", correct: false },
      { text: "Providing legal frameworks", correct: false }
    ]
  },
  {
    question: "What is the responsibility of governmental agencies in occupational health services?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Advocating for worker health", correct: false },
      { text: "Providing medical support and rehabilitation", correct: true },
      { text: "Creating a safe working environment", correct: false },
      { text: "Conducting regular risk assessments", correct: false }
    ]
  },
  {
    question: "How does management contribute to worker health through health promotion and wellness programs?",
    answers: [
      { text: "By enforcing legislation", correct: false },
      { text: "By conducting regular inspections", correct: false },
      { text: "By promoting work-life balance", correct: true },
      { text: "By developing legal frameworks", correct: false },
      { text: "By collaborating with experts", correct: false }
    ]
  },
  {
    question: "What role does training and education play in both management and governmental responsibilities?",
    answers: [
      { text: "Identifying root causes", correct: false },
      { text: "Ensuring compliance", correct: false },
      { text: "Raising awareness about health and safety", correct: true },
      { text: "Offering wellness programs", correct: false },
      { text: "Providing legal frameworks", correct: false }
    ]
  },
  {
    question: "Why is incident reporting and investigation crucial for both management and worker health?",
    answers: [
      { text: "To develop legal frameworks", correct: false },
      { text: "To identify root causes and prevent future incidents", correct: true },
      { text: "To conduct regular inspections", correct: false },
      { text: "To provide medical support and rehabilitation", correct: false },
      { text: "To advocate for worker health", correct: false }
    ]
  },
  {
    question: "How do governments contribute to worker health through research and guidance?",
    answers: [
      { text: "By enforcing legislation", correct: false },
      { text: "By providing medical support", correct: false },
      { text: "By conducting compliance inspections", correct: false },
      { text: "By developing guidelines based on data and studies", correct: true },
      { text: "By promoting work-life balance", correct: false }
    ]
  },
  {
    question: "What is the significance of governmental advocacy and collaboration in worker health?",
    answers: [
      { text: "Identifying root causes", correct: false },
      { text: "Promoting work-life balance", correct: false },
      { text: "Ensuring compliance with regulations", correct: false },
      { text: "Developing legal frameworks", correct: false },
      { text: "Advocating for worker health at national and international levels", correct: true }
    ]
  },
  {
    question: "In a workplace with outdated safety protocols, what is the most appropriate management action?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Conducting regular inspections", correct: false },
      { text: "Updating safety protocols", correct: true },
      { text: "Advocating for worker health", correct: false },
      { text: "Creating a safe working environment", correct: false }
    ]
  },
  {
    question: "If a new health hazard emerges in a workplace, what is the initial step for both management and government?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Conducting regular risk assessments", correct: true },
      { text: "Updating safety protocols", correct: false },
      { text: "Identifying root causes", correct: false },
      { text: "Developing new legal frameworks", correct: false }
    ]
  },
  {
    question: "How does management contribute to worker health during incident reporting and investigation?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Identifying root causes", correct: true },
      { text: "Conducting regular inspections", correct: false },
      { text: "Providing medical support", correct: false },
      { text: "Developing legal frameworks", correct: false }
    ]
  },
  {
    question: "What action aligns with governmental responsibilities in occupational health services?",
    answers: [
      { text: "Offering wellness programs", correct: false },
      { text: "Advocating for worker health", correct: false },
      { text: "Providing medical support and rehabilitation", correct: true },
      { text: "Conducting compliance inspections", correct: false },
      { text: "Creating a safe working environment", correct: false }
    ]
  },
  {
    question: "What is the primary focus of the question assessing workplace exposures in clinical occupational health practice?",
    answers: [
      { text: "What are the potential health risks?", correct: false },
      { text: "Has the worker undergone medical surveillance?", correct: false },
      { text: "Are there existing work restrictions?", correct: false },
      { text: "What is the impact on job duties?", correct: false },
      { text: "Are there work-related symptoms?", correct: true }
    ]
  },
  {
    question: "What does reviewing the worker's medical history help establish in clinical occupational health practice?",
    answers: [
      { text: "Baseline for job tasks", correct: true },
      { text: "Potential health risks", correct: false },
      { text: "Existing accommodations", correct: false },
      { text: "Relevant exposures", correct: false },
      { text: "Ongoing health concerns", correct: false }
    ]
  },
  {
    question: "Understanding if the worker has existing limitations or work modifications relates to which aspect of clinical occupational health practice?",
    answers: [
      { text: "Preventive measures", correct: false },
      { text: "Job performance impact", correct: false },
      { text: "Medical history review", correct: false },
      { text: "Ongoing health concerns", correct: false },
      { text: "Existing accommodations", correct: true }
    ]
  },
  {
    question: "Assessing functional limitations resulting from health conditions is crucial for determining what in clinical occupational health practice?",
    answers: [
      { text: "Preventive measures", correct: false },
      { text: "Impact on job duties", correct: true },
      { text: "Existing work restrictions", correct: false },
      { text: "Potential health risks", correct: false },
      { text: "Ongoing health concerns", correct: false }
    ]
  },
  {
    question: "What is the primary goal of evaluating potential short-term and long-term health risks associated with occupational exposures?",
    answers: [
      { text: "Identifying specific exposures", correct: false },
      { text: "Assessing job performance", correct: false },
      { text: "Preventing health risks", correct: true },
      { text: "Establishing a baseline", correct: false },
      { text: "Guiding preventive measures", correct: false }
    ]
  },
  {
    question: "Identifying the best approaches for preventing or minimizing occupational health risks involves considering what in clinical occupational health practice?",
    answers: [
      { text: "Ongoing health concerns", correct: false },
      { text: "Engineering controls", correct: true },
      { text: "Existing accommodations", correct: false },
      { text: "Job performance impact", correct: false },
      { text: "Specific workplace exposures", correct: false }
    ]
  },
  {
    question: "Why is assessing whether the worker's health symptoms are related to occupational exposures crucial in clinical occupational health practice?",
    answers: [
      { text: "To establish a baseline", correct: false },
      { text: "To identify specific exposures", correct: false },
      { text: "To determine preventive measures", correct: false },
      { text: "To guide appropriate diagnosis and treatment", correct: true },
      { text: "To assess job performance impact", correct: false }
    ]
  },
  {
    question: "How does reviewing the worker's medical history contribute to the overall assessment in clinical occupational health practice?",
    answers: [
      { text: "Identifying existing work restrictions", correct: false },
      { text: "Establishing a baseline for job tasks", correct: true },
      { text: "Evaluating potential health risks", correct: false },
      { text: "Identifying specific exposures", correct: false },
      { text: "Assessing job performance impact", correct: false }
    ]
  },
  {
    question: "In clinical occupational health practice, why is understanding existing work restrictions or accommodations important?",
    answers: [
      { text: "To identify specific exposures", correct: false },
      { text: "To assess job performance impact", correct: false },
      { text: "To guide preventive measures", correct: true },
      { text: "To determine preventive health risks", correct: false },
      { text: "To establish a baseline", correct: false }
    ]
  },
  {
    question: "How does assessing the impact of the worker's health on job duties contribute to clinical occupational health practice?",
    answers: [
      { text: "To determine preventive measures", correct: false },
      { text: "To guide appropriate diagnosis and treatment", correct: true },
      { text: "To identify specific exposures", correct: false },
      { text: "To evaluate potential health risks", correct: false },
      { text: "To establish a baseline for job tasks", correct: false }
    ]
  },
  {
    question: "What is the significance of evaluating short-term and long-term health risks associated with occupational exposures in clinical occupational health practice?",
    answers: [
      { text: "To identify specific exposures", correct: false },
      { text: "To guide preventive measures", correct: false },
      { text: "To assess job performance impact", correct: false },
      { text: "To determine preventive health risks", correct: true },
      { text: "To establish a baseline for job tasks", correct: false }
    ]
  },
  {
    question: "Why is it important to identify the best approaches for preventing or minimizing occupational health risks in clinical occupational health practice?",
    answers: [
      { text: "To establish a baseline", correct: false },
      { text: "To assess job performance impact", correct: false },
      { text: "To guide appropriate diagnosis and treatment", correct: false },
      { text: "To determine preventive measures", correct: true },
      { text: "To evaluate potential health risks", correct: false }
    ]
  },
  {
    question: "How do preventive measures such as engineering controls contribute to the overall goal of clinical occupational health practice?",
    answers: [
      { text: "To guide appropriate diagnosis and treatment", correct: false },
      { text: "To establish a baseline for job tasks", correct: false },
      { text: "To assess job performance impact", correct: false },
      { text: "To identify specific exposures", correct: false },
      { text: "To prevent health risks", correct: true }
    ]
  },
  {
    question: "In a clinical setting, if a worker reports work-related health symptoms, what would be the appropriate next step?",
    answers: [
      { text: "Implementing engineering controls", correct: false },
      { text: "Identifying specific exposures", correct: false },
      { text: "Assessing job performance impact", correct: false },
      { text: "Guiding appropriate diagnosis and treatment", correct: true },
      { text: "Reviewing the worker's medical history", correct: false }
    ]
  },
  {
    question: "If a worker has existing work restrictions, how might this information be used to improve occupational health in the workplace?",
    answers: [
      { text: "Identifying specific exposures", correct: false },
      { text: "Guiding appropriate diagnosis and treatment", correct: false },
      { text: "Establishing a baseline for job tasks", correct: false },
      { text: "Determining preventive measures", correct: true },
      { text: "Assessing job performance impact", correct: false }
    ]
  },
  {
    question: "How would an understanding of potential short-term and long-term health risks guide decision-making in a clinical occupational health setting?",
    answers: [
      { text: "To guide appropriate diagnosis and treatment", correct: false },
      { text: "To assess job performance impact", correct: false },
      { text: "To determine preventive measures", correct: true },
      { text: "To identify specific exposures", correct: false },
      { text: "To establish a baseline for job tasks", correct: false }
    ]
  },
  {
    question: "If a worker's health significantly impacts their ability to perform job duties, what action might be taken to address this in a clinical occupational health practice?",
    answers: [
      { text: "Assessing job performance impact", correct: true },
      { text: "Identifying specific exposures", correct: false },
      { text: "Implementing engineering controls", correct: false },
      { text: "Guiding appropriate diagnosis and treatment", correct: false },
      { text: "Establishing a baseline for job tasks", correct: false }
    ]
  },
  {
    question: "In a workplace with potential health risks, how could the application of preventive measures be tailored to specific exposures?",
    answers: [
      { text: "Identifying specific exposures", correct: true },
      { text: "Assessing job performance impact", correct: false },
      { text: "Establishing a baseline for job tasks", correct: false },
      { text: "Determining preventive measures", correct: false },
      { text: "Guiding appropriate diagnosis and treatment", correct: false }
    ]
  },
  {
    question: "If a clinical occupational health practitioner aims to implement effective preventive measures, what strategies might be considered beyond engineering controls?",
    answers: [
      { text: "Identifying specific exposures", correct: false },
      { text: "Establishing a baseline for job tasks", correct: false },
      { text: "Assessing job performance impact", correct: false },
      { text: "Conducting ongoing health surveillance", correct: true },
      { text: "Guiding appropriate diagnosis and treatment", correct: false }
    ]
  },
  {
    question: "What is the primary focus of a walk-through inspection of a worksite?",
    answers: [
      { text: "Evaluating ergonomic factors", correct: false },
      { text: "Identifying potential hazards", correct: true },
      { text: "Reviewing safety records", correct: false },
      { text: "Checking worker feedback", correct: false },
      { text: "Assessing compliance with regulations", correct: false }
    ]
  },
  {
    question: "During a walk-through inspection, what should be assessed regarding machinery and equipment?",
    answers: [
      { text: "Worker feedback", correct: false },
      { text: "Fire safety measures", correct: false },
      { text: "Compliance with regulations", correct: false },
      { text: "Proper maintenance and operation", correct: true },
      { text: "Indoor air quality", correct: false }
    ]
  },
  {
    question: "What aspect should be considered when evaluating electrical systems during a walk-through inspection?",
    answers: [
      { text: "Availability of personal protective equipment", correct: false },
      { text: "Ergonomic principles", correct: false },
      { text: "Compliance with regulations", correct: true },
      { text: "Presence of potential electrical hazards", correct: true },
      { text: "Worker feedback", correct: false }
    ]
  },
  {
    question: "What is a key consideration when assessing personal protective equipment (PPE)?",
    answers: [
      { text: "Reviewing safety records", correct: false },
      { text: "Checking worker feedback", correct: false },
      { text: "Evaluating overall cleanliness", correct: false },
      { text: "Ensuring proper use and maintenance", correct: true },
      { text: "Assessing compliance with regulations", correct: false }
    ]
  },
  {
    question: "What should be evaluated concerning housekeeping during a walk-through inspection?",
    answers: [
      { text: "Compliance with regulations", correct: false },
      { text: "Presence of ergonomic factors", correct: false },
      { text: "Overall cleanliness and potential hazards", correct: true },
      { text: "Worker engagement", correct: false },
      { text: "Indoor air quality", correct: false }
    ]
  },
  {
    question: "When considering ergonomics in a walk-through inspection, what factors should be assessed?",
    answers: [
      { text: "Worker feedback", correct: false },
      { text: "Compliance with regulations", correct: false },
      { text: "Presence of safety signs", correct: false },
      { text: "Overall cleanliness", correct: false },
      { text: "Workstations, seating, and equipment design", correct: true }
    ]
  },
  {
    question: "Why is it essential to check the availability, appropriateness, and proper use of personal protective equipment (PPE)?",
    answers: [
      { text: "To identify potential hazards", correct: false },
      { text: "To evaluate overall cleanliness", correct: false },
      { text: "To ensure proper labeling of hazardous materials", correct: false },
      { text: "To assess compliance with regulations", correct: true },
      { text: "To promote worker safety and health", correct: false }
    ]
  },
  {
    question: "How does the assessment of electrical systems contribute to the overall safety of a worksite during a walk-through inspection?",
    answers: [
      { text: "By identifying potential hazards", correct: true },
      { text: "By checking worker feedback", correct: false },
      { text: "By reviewing safety records", correct: false },
      { text: "By assessing fire safety measures", correct: false },
      { text: "By promoting worker comfort and efficiency", correct: false }
    ]
  },
  {
    question: "What is the significance of evaluating fire safety measures, including the presence of fire extinguishers, during a walk-through inspection?",
    answers: [
      { text: "To assess compliance with regulations", correct: true },
      { text: "To identify potential ergonomic factors", correct: false },
      { text: "To ensure proper labeling of hazardous materials", correct: false },
      { text: "To promote worker safety in case of emergencies", correct: false },
      { text: "To review safety records", correct: false }
    ]
  },
  {
    question: "How does the consideration of ergonomics contribute to minimizing the risk of musculoskeletal disorders during a walk-through inspection?",
    answers: [
      { text: "By assessing overall cleanliness", correct: false },
      { text: "By checking worker feedback", correct: false },
      { text: "By evaluating workstations, seating, and equipment design", correct: true },
      { text: "By reviewing safety records", correct: false },
      { text: "By promoting worker engagement", correct: false }
    ]
  },
  {
    question: "Why is it important to assess ventilation systems and indoor air quality during a walk-through inspection?",
    answers: [
      { text: "To identify potential hazards", correct: false },
      { text: "To evaluate overall cleanliness", correct: false },
      { text: "To ensure proper labeling of hazardous materials", correct: false },
      { text: "To promote worker comfort and efficiency", correct: false },
      { text: "To check worker feedback", correct: true }
    ]
  },
  {
    question: "What role does safety signage and communication play in enhancing safety during a walk-through inspection?",
    answers: [
      { text: "Identifying potential hazards", correct: false },
      { text: "Promoting worker engagement", correct: false },
      { text: "Ensuring proper labeling of hazardous materials", correct: false },
      { text: "Assessing compliance with regulations", correct: false },
      { text: "Clearly communicating important safety information", correct: true }
    ]
  },
  {
    question: "How does considering compliance with regulations contribute to the overall safety of a worksite during a walk-through inspection?",
    answers: [
      { text: "By identifying potential hazards", correct: false },
      { text: "By promoting worker engagement", correct: false },
      { text: "By assessing fire safety measures", correct: false },
      { text: "By ensuring legal adherence to safety standards", correct: true },
      { text: "By reviewing safety records", correct: false }
    ]
  },
  {
    question: "If, during a walk-through inspection, a potential hazard is identified related to machinery, what action should be taken?",
    answers: [
      { text: "Assess overall cleanliness", correct: false },
      { text: "Report the hazard and ensure proper maintenance", correct: true },
      { text: "Check worker feedback", correct: false },
      { text: "Review safety records", correct: false },
      { text: "Evaluate ventilation systems", correct: false }
    ]
  },
  {
    question: "In a worksite where personal protective equipment (PPE) is needed, what action should be taken?",
    answers: [
      { text: "Promote worker comfort and efficiency", correct: false },
      { text: "Identify potential hazards", correct: false },
      { text: "Assess overall cleanliness", correct: false },
      { text: "Check worker feedback", correct: false },
      { text: "Ensure proper use and provide training", correct: true }
    ]
  },
  {
    question: "If there are deficiencies in fire safety measures, how can a walk-through inspection contribute to improving the situation?",
    answers: [
      { text: "Assess overall cleanliness", correct: false },
      { text: "Report the deficiencies and recommend corrective actions", correct: true },
      { text: "Check worker feedback", correct: false },
      { text: "Review safety records", correct: false },
      { text: "Evaluate ventilation systems", correct: false }
    ]
  },
  {
    question: "During a walk-through inspection, if ergonomic principles are not being followed in a worksite, what measures can be recommended to minimize the risk of musculoskeletal disorders?",
    answers: [
      { text: "Promote worker engagement", correct: false },
      { text: "Identify potential hazards", correct: false },
      { text: "Assess overall cleanliness", correct: false },
      { text: "Check worker feedback", correct: false },
      { text: "Recommend adjustments in workstations and seating", correct: true }
    ]
  },
  {
    question: "Why is it crucial to verify compliance with occupational health and safety regulations during a walk-through inspection?",
    answers: [
      { text: "To assess overall cleanliness", correct: false },
      { text: "To identify potential hazards", correct: false },
      { text: "To promote worker engagement", correct: false },
      { text: "To ensure legal adherence to safety standards", correct: true },
      { text: "To review safety records", correct: false }
    ]
  },
  {
    question: "If, during a walk-through inspection, workers express safety concerns, what steps should be taken to address these concerns?",
    answers: [
      { text: "Assess overall cleanliness", correct: false },
      { text: "Report the concerns and encourage open communication", correct: true },
      { text: "Check worker feedback", correct: false },
      { text: "Review safety records", correct: false },
      { text: "Evaluate ventilation systems", correct: false }
    ]
  },
  {
    question: "What is a common factor in Chemical-Related Occupational Diseases?",
    answers: [
      { text: "Extreme temperatures", correct: false },
      { text: "Exposure to biological agents", correct: false },
      { text: "Physical factors", correct: false },
      { text: "Hazardous chemicals or substances", correct: true },
      { text: "Ergonomic hazards", correct: false }
    ]
  },
  {
    question: "Which category of diseases is associated with conditions like occupational asthma and pneumoconiosis?",
    answers: [
      { text: "Dermatological Occupational Diseases", correct: false },
      { text: "Neurological Occupational Diseases", correct: false },
      { text: "Respiratory Occupational Diseases", correct: true },
      { text: "Cardiovascular Occupational Diseases", correct: false },
      { text: "Musculoskeletal Occupational Diseases", correct: false }
    ]
  },
  {
    question: "What characterizes Biological Occupational Diseases?",
    answers: [
      { text: "Exposure to extreme temperatures", correct: false },
      { text: "Impact on the musculoskeletal system", correct: false },
      { text: "Exposure to bacteria, viruses, or fungi", correct: true },
      { text: "Physical stressors in the workplace", correct: false },
      { text: "Conditions like carpal tunnel syndrome", correct: false }
    ]
  },
  {
    question: "Which diseases fall under Dermatological Occupational Diseases?",
    answers: [
      { text: "Conditions like occupational asthma", correct: false },
      { text: "Skin cancer and infectious diseases", correct: true },
      { text: "Chronic obstructive pulmonary disease (COPD)", correct: false },
      { text: "Respiratory system disorders", correct: false },
      { text: "Musculoskeletal disorders", correct: false }
    ]
  },
  {
    question: "What are the characteristics of Musculoskeletal Occupational Diseases?",
    answers: [
      { text: "Impact on the nervous system", correct: false },
      { text: "Exposure to extreme temperatures", correct: false },
      { text: "Conditions like back pain and repetitive strain injuries", correct: true },
      { text: "Occupational heart disease", correct: false },
      { text: "Physical stressors in the workplace", correct: false }
    ]
  },
  {
    question: "In Neurological Occupational Diseases, what conditions may be included?",
    answers: [
      { text: "Occupational asthma", correct: false },
      { text: "Peripheral neuropathy and vibration-induced disorders", correct: true },
      { text: "Skin cancer and contact dermatitis", correct: false },
      { text: "Cardiovascular system disorders", correct: false },
      { text: "Chronic obstructive pulmonary disease (COPD)", correct: false }
    ]
  },
  {
    question: "If an individual is exposed to hazardous chemicals and develops respiratory disorders, what classification does this fall under?",
    answers: [
      { text: "Cardiovascular Occupational Diseases", correct: false },
      { text: "Physical Occupational Diseases", correct: false },
      { text: "Dermatological Occupational Diseases", correct: false },
      { text: "Respiratory Occupational Diseases", correct: true },
      { text: "Neurological Occupational Diseases", correct: false }
    ]
  },
  {
    question: "How can a worksite improve conditions related to Musculoskeletal Occupational Diseases during a walk-through inspection?",
    answers: [
      { text: "Assess overall cleanliness", correct: false },
      { text: "Ensure proper use of personal protective equipment", correct: false },
      { text: "Report deficiencies in fire safety measures", correct: false },
      { text: "Recommend adjustments in ergonomics and workstations", correct: true },
      { text: "Identify potential hazards related to biological agents", correct: false }
    ]
  },
  {
    question: "In a workplace where employees show signs of skin disorders due to exposure, what measures can be taken to address this issue?",
    answers: [
      { text: "Promote worker engagement", correct: false },
      { text: "Report respiratory disorders", correct: false },
      { text: "Ensure proper use of personal protective equipment", correct: true },
      { text: "Recommend adjustments in ergonomics", correct: false },
      { text: "Assess ventilation systems", correct: false }
    ]
  },
  {
    question: "What is the common term for Coal Worker's Pneumoconiosis (CWP)?",
    answers: [
      { text: "Silicosis", correct: false },
      { text: "Black lung disease", correct: true },
      { text: "Asbestosis", correct: false },
      { text: "Lung fibrosis", correct: false },
      { text: "Respiratory impairment", correct: false }
    ]
  },
  {
    question: "Which type of pneumoconiosis results from the inhalation of crystalline silica dust?",
    answers: [
      { text: "Asbestosis", correct: false },
      { text: "Silicosis", correct: true },
      { text: "Coal Worker's Pneumoconiosis (CWP)", correct: false },
      { text: "Lung cancer", correct: false },
      { text: "Mesothelioma", correct: false }
    ]
  },
  {
    question: "What industry is commonly associated with the development of Coal Worker's Pneumoconiosis (CWP)?",
    answers: [
      { text: "Construction", correct: false },
      { text: "Shipbuilding", correct: false },
      { text: "Asbestos mining", correct: false },
      { text: "Coal mining", correct: true },
      { text: "Sandblasting", correct: false }
    ]
  },
  {
    question: "How does Silicosis affect the lungs?",
    answers: [
      { text: "Accumulation of carbon particles", correct: false },
      { text: "Formation of scar tissue", correct: false },
      { text: "Inflammation and fibrosis", correct: true },
      { text: "Impaired lung function", correct: false },
      { text: "Reduced lung capacity", correct: false }
    ]
  },
  {
    question: "What is a characteristic feature of Asbestosis?",
    answers: [
      { text: "Accumulation of carbon particles", correct: false },
      { text: "Formation of silica particles", correct: false },
      { text: "Increased risk of lung cancer", correct: true },
      { text: "Breathing difficulties", correct: false },
      { text: "Lung impairment", correct: false }
    ]
  },
  {
    question: "In which industries is Asbestosis commonly found?",
    answers: [
      { text: "Mining", correct: false },
      { text: "Quarrying", correct: false },
      { text: "Shipbuilding", correct: false },
      { text: "Construction", correct: true },
      { text: "Sandblasting", correct: false }
    ]
  },
  {
    question: "If an individual has a history of prolonged exposure to coal dust, what type of pneumoconiosis might they be at risk for?",
    answers: [
      { text: "Silicosis", correct: false },
      { text: "Asbestosis", correct: false },
      { text: "Black lung disease (CWP)", correct: true },
      { text: "Mesothelioma", correct: false },
      { text: "Lung cancer", correct: false }
    ]
  },
  {
    question: "What preventive measures can be taken in industries with a risk of Silicosis?",
    answers: [
      { text: "Use of asbestos fibers", correct: false },
      { text: "Proper ventilation", correct: true },
      { text: "Prolonged exposure to coal dust", correct: false },
      { text: "Sandblasting without protective equipment", correct: false },
      { text: "Increased asbestos mining activities", correct: false }
    ]
  },
  {
    question: "How does Asbestosis contribute to an increased risk of lung cancer and mesothelioma?",
    answers: [
      { text: "Formation of silica particles", correct: false },
      { text: "Accumulation of carbon particles", correct: false },
      { text: "Inflammation and fibrosis", correct: false },
      { text: "Prolonged exposure to coal dust", correct: false },
      { text: "Inhalation of asbestos fibers", correct: true }
    ]
  },
  {
    question: "What is a characteristic feature of Asbestosis?",
    answers: [
      { text: "Accumulation of carbon particles", correct: false },
      { text: "Formation of silica particles", correct: false },
      { text: "Increased risk of lung cancer", correct: true },
      { text: "Breathing difficulties", correct: false },
      { text: "Lung impairment", correct: false }
    ]
  },
  {
    question: "How does Silicosis affect the lungs?",
    answers: [
      { text: "Accumulation of carbon particles", correct: false },
      { text: "Formation of scar tissue", correct: false },
      { text: "Inflammation and fibrosis", correct: true },
      { text: "Impaired lung function", correct: false },
      { text: "Reduced lung capacity", correct: false }
    ]
  },
  {
    question: "Which administrative control measures are recommended for noise exposure?",
    answers: [
      { text: "Hosting noise-canceling headphone giveaways", correct: false },
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Enclosing or isolating noise sources", correct: false },
      { text: "Limiting exposure through distance", correct: false },
      { text: "Providing quiet areas for relief", correct: true }
    ]
  },
  {
    question: "What specific measures can be taken to control noise exposure in a workplace? Choose the most effective option.",
    answers: [
      { text: "Providing quiet areas for relief", correct: true },
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Enclosing or isolating noise sources", correct: false },
      { text: "Limiting exposure through distance", correct: false },
      { text: "Initiating a workplace music program", correct: false }
    ]
  },
  {
    question: "A worker reports symptoms related to respiratory occupational diseases. What steps would you take as an occupational health practitioner?",
    answers: [
      { text: "Conduct a walk-through inspection for noise exposure", correct: false },
      { text: "Assess ergonomic factors in the workstation", correct: false },
      { text: "Review medical history and conduct relevant surveillance", correct: true },
      { text: "Implement measures for chemical hazard reduction", correct: false },
      { text: "Organize a team-building exercise", correct: false }
    ]
  },
  {
    question: "In a laboratory setting, what engineering controls can effectively mitigate the risks associated with biological agents?",
    answers: [
      { text: "Installing vibration damping seats", correct: false },
      { text: "Using personal protective equipment (PPE)", correct: false },
      { text: "Conducting weekly mindfulness sessions", correct: false },
      { text: "Providing quiet areas for relief", correct: false },
      { text: "Implementing local exhaust ventilation systems",correct: true }
    ]
  },
  {
    question: "How can an organization ensure compliance with ILO Convention 170 regarding the use of chemicals?",
    answers: [
      { text: "Adhere to occupational standards and policies", correct: true },
      { text: "Establish vaccination policies for workers", correct: false },
      { text: "Focus on noise exposure reduction", correct: false },
      { text: "Use personal protective equipment (PPE)", correct: false },
      { text: "Introduce a daily exercise routine for employees", correct: false }
    ]
  },
  {
    question: "As a safety officer, what measures would you take to reduce the impact of whole-body vibration in a construction environment?",
    answers: [
      { text: "Increase noise exposure controls", correct: false },
      { text: "Implement ventilation and air quality measures", correct: false },
      { text: "Limit time spent by workers on vibrating surfaces", correct: true },
      { text: "Introduce psychological risk factor assessments", correct: false },
      { text: "Distribute stress-relief toys to workers", correct: false }
    ]
  },
  {
    question: "How would you address the risk of silicosis in an industry where workers are exposed to crystalline silica dust?",
    answers: [
      { text: "Use personal protective equipment (PPE)", correct: false },
      { text: "Implement engineering controls like ventilation systems", correct: true },
      { text: "Limit time spent by workers on vibrating surfaces", correct: false },
      { text: "Conduct a walk-through inspection for psychosocial risk factors", correct: false },
      { text: "Initiate a workplace book club", correct: false }
    ]
  },
  {
    question: "In a healthcare setting, what administrative controls can be implemented to reduce the impact of psychosocial risk factors?",
    answers: [
      { text: "Enclosing or isolating noise sources", correct: false },
      { text: "Limiting the amount of time a person spends at a noise source", correct: false },
      { text: "Providing vaccination policies for specific biological hazards", correct: false },
      { text: "Enhancing communication and work organization", correct: true },
      { text: "Introducing a workplace meditation program", correct: false }
    ]
  },
  {
    question: "How can an organization effectively manage the risks associated with the use of hazardous chemicals, considering ILO Convention 170?",
    answers: [
      { text: "Focus on noise exposure controls", correct: false },
      { text: "Adhere to occupational standards and policies", correct: true },
      { text: "Increase ventilation and air quality measures", correct: false },
      { text: "Implement personal protective equipment (PPE)", correct: false },
      { text: "Organize a workplace safety fair", correct: false }
    ]
  },
  {
    question: "What is the primary focus of Occupational Health, according to NIEH (2018)?",
    answers: [
      { text: "Identifying and controlling psychosocial risk factors", correct: false },
      { text: "Protecting workers from physical, chemical, and other hazards", correct: true },
      { text: "Promoting workplace noise exposure celebrations", correct: false },
      { text: "Enhancing communication in the workplace", correct: false },
      { text: "Hosting monthly pizza parties for employees", correct: false }
    ]
  },
  {
    question: "What is the purpose of administrative controls in noise exposure management?",
    answers: [
      { text: "Operating noisy machines during peak hours", correct: false },
      { text: "Increasing exposure time at noise sources", correct: false },
      { text: "Limiting the amount of time spent at a noise source", correct: true },
      { text: "Distributing stress-relief toys to workers", correct: false },
      { text: "Organizing daily musical therapy sessions", correct: false }
    ]
  },
  {
    question: "How does whole-body vibration differ from hand and arm vibration?",
    answers: [
      { text: "Whole-body vibration affects only the hands and arms", correct: false },
      { text: "Hand and arm vibration affect the entire body", correct: false },
      { text: "They both result from noise exposure", correct: false },
      { text: "Different symptoms", correct: true },
      { text: "Hand and arm vibration is a type of psychosocial risk", correct: false }
    ]
  },
  {
    question: "What are the primary types of pneumoconiosis?",
    answers: [
      { text: "Tuberculosis", correct: false },
      { text: "Coal Worker's Pneumoconiosis and silicosis", correct: true },
      { text: "Biological pneumoconiosis and physical pneumoconiosis", correct: false },
      { text: "Whole-body pneumoconiosis and hand and arm pneumoconiosis", correct: false },
      { text: "Noise-induced pneumoconiosis and vibration-induced pneumoconiosis", correct: false }
    ]
  },
  {
    question: "Which of the following represents an example of an engineering control for noise exposure?",
    answers: [
      { text: "Providing areas for quiet", correct: false },
      { text: "Limiting time at noisy machines", correct: false },
      { text: "Enclosing or isolating noise sources", correct: true },
      { text: "Utilizing vibration-absorbing materials", correct: false },
      { text: "Implementing administrative scheduling changes", correct: false }
    ]
  },
  {
    question: "How is whole-body vibration primarily transmitted to the body?",
    answers: [
      { text: "Through hands and arms", correct: false },
      { text: "Through the feet", correct: true },
      { text: "Through the head", correct: false },
      { text: "Through the eyes", correct: false },
      { text: "Through the respiratory system", correct: false }
    ]
  },
  {
    question: "What is an example of an administrative control for whole-body vibration exposure?",
    answers: [
      { text: "Utilizing vibration-absorbing materials", correct: false },
      { text: "Limiting time spent on vibrating surfaces", correct: false },
      { text: "Installing vibration damping seats", correct: false },
      { text: "Enclosing the vibrating source", correct: true },
      { text: "Choosing tools with low noise", correct: false }
    ]
  },
  {
    question: "Which type of vibration is restricted to the hands and arms?",
    answers: [
      { text: "Whole-body vibration", correct: false },
      { text: "Environmental vibration", correct: false },
      { text: "Mechanical vibration", correct: false },
      { text: "Hand and arm vibration", correct: true },
      { text: "Vibration via the eyes", correct: false }
    ]
  },
  {
    question: "What is the purpose of local exhaust ventilation?",
    answers: [
      { text: "Enhancing natural ventilation", correct: false },
      { text: "Eliminating toxic gases", correct: false },
      { text: "Reducing vibration exposure", correct: false },
      { text: "Controlling airborne contaminants", correct: true },
      { text: "Encouraging social interaction", correct: false }
    ]
  },
  {
    question: "Which of the following represents an example of personal protective equipment?",
    answers: [
      { text: "Vaccination policies", correct: false },
      { text: "Noise-canceling headphones", correct: false },
      { text: "Respirators and breathing apparatus", correct: true },
      { text: "Vibration damping seats", correct: false },
      { text: "Aesthetic work uniforms", correct: false }
    ]
  },
  {
    question: "According to Cox and Griffiths, what is the result of psychosocial risk factors?",
    answers: [
      { text: "Improved work organization", correct: false },
      { text: "Physical harm only", correct: false },
      { text: "Occupational stress", correct: true },
      { text: "Reduced use of chemicals", correct: false },
      { text: "Enhanced team collaboration", correct: false }
    ]
  },
  {
    question: "What do psychosocial risk factors have the potential to cause, according to Cox and Griffiths?",
    answers: [
      { text: "Respiratory diseases", correct: false },
      { text: "Infectious diseases", correct: false },
      { text: "Psychological, social, and physical harm", correct: true },
      { text: "Musculoskeletal diseases", correct: false },
      { text: "Noise-related health issues", correct: false }
    ]
  },
  {
    question: "How does administrative control reduce noise exposure through distance?",
    answers: [
      { text: "Offering areas for quiet", correct: false },
      { text: "Limiting time spent at noisy machines", correct: false },
      { text: "Enclosing or isolating noise sources", correct: true },
      { text: "Modifying work schedules", correct: false },
      { text: "Controlling noise through vibration absorption", correct: false }
    ]
  },
  {
    question: "Why is equipment maintenance essential in controlling whole-body vibration exposure?",
    answers: [
      { text: "To enhance aesthetic appeal", correct: false },
      { text: "To prevent infectious diseases", correct: false },
      { text: "To avoid noise exposure", correct: false },
      { text: "To decrease excessive vibration", correct: true },
      { text: "To improve mental well-being", correct: false }
    ]
  },
  {
    question: "What is the primary purpose of mechanical ventilation in controlling biological agents?",
    answers: [
      { text: "Enhancing natural ventilation", correct: false },
      { text: "Reducing noise exposure", correct: false },
      { text: "Filtering airborne contaminants", correct: true },
      { text: "Encouraging social interaction", correct: false },
      { text: "Providing relief areas for workers", correct: false }
    ]
  },
  {
    question: "How do whole-body vibration precautions suggest protecting workers?",
    answers: [
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Limiting time spent on a vibrating surface", correct: true },
      { text: "Installing noise barriers", correct: false },
      { text: "Enclosing the vibrating source", correct: false },
      { text: "Choosing tools with low noise", correct: false }
    ]
  },
  {
    question: "How are workers exposed to biological agents in laboratory work involving infectious diseases?",
    answers: [
      { text: "Limiting time spent at a noise source", correct: false },
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Enclosing the work area", correct: false },
      { text: "Contact with infected individuals or animals", correct: true },
      { text: "Installing vibration damping seats", correct: false }
    ]
  },
  {
    question: "What is the purpose of personal protective equipment?",
    answers: [
      { text: "Enhancing physical appearance", correct: false },
      { text: "Providing relief from noise", correct: false },
      { text: "Preventing psychosocial risk factors", correct: false },
      { text: "Protection against biological hazards", correct: true },
      { text: "Limiting time spent at noisy machines", correct: false }
    ]
  },
  {
    question: "What specific measure is considered the most effective in controlling noise exposure in a workplace?",
    answers: [
      { text: "Providing quiet areas for relief", correct: false },
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Enclosing or isolating noise sources", correct: true },
      { text: "Limiting exposure through distance", correct: false },
      { text: "Modifying work schedule", correct: false }
    ]
  },
  {
    question: "How would you address the risk of silicosis in an industry where workers are exposed to crystalline silica dust?",
    answers: [
      { text: "Use personal protective equipment (PPE)", correct: false },
      { text: "Limit time spent by workers on vibrating surfaces", correct: false },
      { text: "Implement engineering controls like ventilation systems", correct: true },
      { text: "Conduct a walk-through inspection for psychosocial risk factors", correct: false },
      { text: "", correct: false }
    ]
  },
            
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();
