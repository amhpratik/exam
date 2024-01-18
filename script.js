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
      { text: "Regulatory Framework", correct: false },
      { text: "Inspections and Compliance", correct: true }
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
      { text: "Assessing job performance impact", correct: false },
      { text: "Identifying specific exposures", correct: false },
      { text: "Implementing engineering controls", correct: true },
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
      { text: "Compliance with regulations", correct: false },
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
      { text: "To assess compliance with regulations", correct: false },
      { text: "To promote worker safety and health", correct: true }
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
      { text: "To assess compliance with regulations", correct: false },
      { text: "To identify potential ergonomic factors", correct: false },
      { text: "To ensure proper labeling of hazardous materials", correct: false },
      { text: "To promote worker safety in case of emergencies", correct: true },
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
      { text: "To ensure proper labeling of hazardous materials", correct: true },
      { text: "To promote worker comfort and efficiency", correct: false },
      { text: "To check worker feedback", correct: false }
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
      { text: "Exposure to extreme temperatures", correct: true },
      { text: "Impact on the musculoskeletal system", correct: false },
      { text: "Exposure to bacteria, viruses, or fungi", correct: false },
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
      { text: "Shipbuilding", correct: true },
      { text: "Construction", correct: false },
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
      { text: "Providing quiet areas for relief", correct: false },
      { text: "Using vibration-absorbing materials", correct: false },
      { text: "Enclosing or isolating noise sources", correct: true },
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
        { text: "Organize a workplace safety fair", correct: false },
      ],
    },
    {
      question: "What is the primary focus of Occupational Health, according to NIEH (2018)?",
      answers: [
        { text: "Identifying and controlling psychosocial risk factors", correct: false },
        { text: "Protecting workers from physical, chemical, and other hazards", correct: true },
        { text: "Promoting workplace noise exposure celebrations", correct: false },
        { text: "Enhancing communication in the workplace", correct: false },
        { text: "Hosting monthly pizza parties for employees", correct: false },
      ],
    },
    {
      question: "What is the purpose of administrative controls in noise exposure management?",
      answers: [
        { text: "Operating noisy machines during peak hours", correct: false },
        { text: "Increasing exposure time at noise sources", correct: false },
        { text: "Limiting the amount of time spent at a noise source", correct: true },
        { text: "Distributing stress-relief toys to workers", correct: false },
        { text: "Organizing daily musical therapy sessions", correct: false },
      ],
    },
    {
      question: "How does whole-body vibration differ from hand and arm vibration?",
      answers: [
        { text: "Whole-body vibration affects only the hands and arms", correct: false },
        { text: "Hand and arm vibration affect the entire body", correct: false },
        { text: "Different symptoms", correct: true },
        { text: "They both result from noise exposure", correct: false },
        { text: "Hand and arm vibration is a type of psychosocial risk", correct: false },
      ],
    },
    {
      question: "What are the primary types of pneumoconiosis?",
      answers: [
        { text: "Tuberculosis", correct: false },
        { text: "Coal Worker's Pneumoconiosis and silicosis", correct: true },
        { text: "Biological pneumoconiosis and physical pneumoconiosis", correct: false },
        { text: "Whole-body pneumoconiosis and hand and arm pneumoconiosis", correct: false },
        { text: "Noise-induced pneumoconiosis and vibration-induced pneumoconiosis", correct: false },
      ],
    },
    { 
      question: "Which of the following represents an example of an engineering control for noise exposure?",
      answers: [
        { text: "Providing areas for quiet", correct: false },
        { text: "Limiting time at noisy machines", correct: false },
        { text: "Enclosing or isolating noise sources", correct: true },
        { text: "Utilizing vibration-absorbing materials", correct: false },
        { text: "Implementing administrative scheduling changes", correct: false },
      ],
    },
    {
      question: "How is whole-body vibration primarily transmitted to the body?",
      answers: [
        { text: "Through hands and arms", correct: false },
        { text: "Through the feet", correct: true },
        { text: "Through the head", correct: false },
        { text: "Through the eyes", correct: false },
        { text: "Through the respiratory system", correct: false },
      ],
    },
    {
      question: "What is an example of an administrative control for whole-body vibration exposure?",
      answers: [
        { text: "Utilizing vibration-absorbing materials", correct: false },
        { text: "Limiting time spent on vibrating surfaces", correct: true },
        { text: "Installing vibration damping seats", correct: false },
        { text: "Enclosing the vibrating source", correct: false },
        { text: "Choosing tools with low noise", correct: false },
      ],
    },
    {
      question: "Which type of vibration is restricted to the hands and arms?",
      answers: [
        { text: "Whole-body vibration", correct: false },
        { text: "Environmental vibration", correct: false },
        { text: "Mechanical vibration", correct: false },
        { text: "Hand and arm vibration", correct: true },
        { text: "Vibration via the eyes", correct: false },
      ],
    },
    {
      question: "What is the purpose of local exhaust ventilation?",
      answers: [
        { text: "Enhancing natural ventilation", correct: false },
        { text: "Eliminating toxic gases", correct: false },
        { text: "Reducing vibration exposure", correct: false },
        { text: "Controlling airborne contaminants", correct: true },
        { text: "Encouraging social interaction", correct: false },
      ],
    },
      {
        question: "Which of the following represents an example of personal protective equipment?",
        answers: [
          { text: "Vaccination policies", correct: false },
          { text: "Noise-canceling headphones", correct: false },
          { text: "Respirators and breathing apparatus", correct: true },
          { text: "Vibration damping seats", correct: false },
          { text: "Aesthetic work uniforms", correct: false },
        ],
      },
      {
        question: "According to Cox and Griffiths, what is the result of psychosocial risk factors?",
        answers: [
          { text: "Improved work organization", correct: false },
          { text: "Physical harm only", correct: false },
          { text: "Occupational stress", correct: true },
          { text: "Reduced use of chemicals", correct: false },
          { text: "Enhanced team collaboration", correct: false },
        ],
      },
      {
        question: "What do psychosocial risk factors have the potential to cause, according to Cox and Griffiths?",
        answers: [
          { text: "Respiratory diseases", correct: false },
          { text: "Infectious diseases", correct: false },
          { text: "Psychological, social, and physical harm", correct: true },
          { text: "Musculoskeletal diseases", correct: false },
          { text: "Noise-related health issues", correct: false },
        ],
      },
      {
        question: "How does administrative control reduce noise exposure through distance?",
        answers: [
          { text: "Offering areas for quiet", correct: false },
          { text: "Limiting time spent at noisy machines", correct: false },
          { text: "Enclosing or isolating noise sources", correct: false },
          { text: "Modifying work schedules", correct: true },
          { text: "Controlling noise through vibration absorption", correct: false },
        ],
      },
      {
        question: "Why is equipment maintenance essential in controlling whole-body vibration exposure?",
        answers: [
          { text: "To enhance aesthetic appeal", correct: false },
          { text: "To prevent infectious diseases", correct: false },
          { text: "To avoid noise exposure", correct: false },
          { text: "To decrease excessive vibration", correct: true },
          { text: "To improve mental well-being", correct: false },
        ],
      },
      {
        question: "What is the primary purpose of mechanical ventilation in controlling biological agents?",
        answers: [
          { text: "Enhancing natural ventilation", correct: false },
          { text: "Reducing noise exposure", correct: false },
          { text: "Filtering airborne contaminants", correct: true },
          { text: "Encouraging social interaction", correct: false },
          { text: "Providing relief areas for workers", correct: false },
        ],
      },
      {
        question: "How do whole-body vibration precautions suggest protecting workers?",
        answers: [
          { text: "Using vibration-absorbing materials", correct: false },
          { text: "Limiting time spent on a vibrating surface", correct: true },
          { text: "Installing noise barriers", correct: false },
          { text: "Enclosing the vibrating source", correct: false },
          { text: "Choosing tools with low noise", correct: false },
        ],
      },
      {
        question: "How are workers exposed to biological agents in laboratory work involving infectious diseases?",
        answers: [
          { text: "Limiting time spent at a noise source", correct: false },
          { text: "Using vibration-absorbing materials", correct: false },
          { text: "Enclosing the work area", correct: false },
          { text: "Contact with infected individuals or animals", correct: true },
          { text: "Installing vibration damping seats", correct: false },
        ],
      },
      {
        question: "What is the purpose of personal protective equipment?",
        answers: [
          { text: "Enhancing physical appearance", correct: false },
          { text: "Providing relief from noise", correct: false },
          { text: "Preventing psychosocial risk factors", correct: false },
          { text: "Protection against biological hazards", correct: true },
          { text: "Limiting time spent at noisy machines", correct: false },
        ],
      },
      {
        question: "What specific measure is considered the most effective in controlling noise exposure in a workplace?",
        answers: [
          { text: "Providing quiet areas for relief", correct: false },
          { text: "Using vibration-absorbing materials", correct: false },
          { text: "Enclosing or isolating noise sources", correct: true },
          { text: "Limiting exposure through distance", correct: false },
          { text: "Modifying work schedule", correct: false },
        ],
      },
      {
        question: "How would you address the risk of silicosis in an industry where workers are exposed to crystalline silica dust?",
        answers: [
          { text: "Use personal protective equipment (PPE)", correct: false },
          { text: "Limit time spent by workers on vibrating surfaces", correct: false },
          { text: "Implement engineering controls like ventilation systems", correct: true },
          { text: "Conduct a walk-through inspection for psychosocial risk factors", correct: false },
          { text: "C", correct: false },
        ],
      },
 
  {
    question: "What sign of physical development is related to physiometric?",
    answers: [
      { text: "condition of the skin", correct: false },
      { text: "foot shape", correct: false },
      { text: "body mass", correct: false },
      { text: "height", correct: false },
      { text: "muscle strength", correct: true },
    ],
  },
  {
    question: "What sign of physical development is related to somatoscopic?",
    answers: [
      { text: "chest circumference", correct: false },
      { text: "degree of sexual development", correct: true },
      { text: "muscle strength", correct: false },
      { text: "arterial pressure", correct: false },
      { text: "pulse", correct: false },
    ],
  },
  {
    question: "What sign of physical development relates to somatometric?",
    answers: [
      { text: "muscle strength", correct: false },
      { text: "lung capacity", correct: false },
      { text: "height and body weight", correct: false },
      { text: "fat deposition", correct: false },
      { text: "sexual development", correct: true },
    ],
  },
  {
    question: "Which group of children has the lowest prevalence of chronic diseases and functional abnormalities?",
    answers: [
      { text: "with an accelerated type of biological development", correct: false },
      { text: "with a timely type of biological development", correct: true },
      { text: "with a slow type of biological development", correct: false },
      { text: "Biological development does not affect", correct: false },
      { text: "with an accelerated type of physiological development", correct: false },
    ],
  },
  {
    question: "What rates of age development of children are characterized at the present stage?",
    answers: [
      { text: "stabilization", correct: true },
      { text: "deceleration", correct: false },
      { text: "acceleration", correct: false },
      { text: "restabilization", correct: false },
      { text: "destabilization", correct: false },
    ],
  },
  {
    question: "How do the rates of growth and development change with age?",
    answers: [
      { text: "increase", correct: false },
      { text: "increases only mentally", correct: false },
      { text: "decreases", correct: true },
      { text: "increases and simultaneously decreases", correct: false },
      { text: "does not change", correct: false },
    ],
  },
  {
    question: "At what age is there a 'growth leap' in development?",
    answers: [
      { text: "infancy", correct: false },
      { text: "adolescence", correct: true },
      { text: "preschool age", correct: false },
      { text: "school age", correct: false },
      { text: "youth period", correct: false },
    ],
  },
  {
    question: "What are the processes of acceleration in the development of the child?",
    answers: [
      { text: "increase in the average age of puberty", correct: false },
      { text: "increase in the age of teething", correct: false },
      { text: "an increase in the average age of completion of growth", correct: false },
      { text: "increase in average body indicators", correct: true },
      { text: "do not show up in anything", correct: false },
    ],
  },
  {
    question: "What are the criteria for the health of children at the individual level?",
    answers: [
      { text: "disability", correct: false },
      { text: "mortality", correct: false },
      { text: "child nutrition", correct: false },
      { text: "genealogical history", correct: false },
      { text: "degree of neuropsychic development", correct: true },
    ],
  },
  {
    question: "What is the indicator of children's health at the population level?",
    answers: [
      { text: "hereditary diseases", correct: false },
      { text: "fertility", correct: false },
      { text: "disability", correct: true },
      { text: "child's lifestyle", correct: false },
      { text: "climatic and geographical conditions", correct: false },
    ],
  },


  {
    question: "Which of the following is true for a child's health?",
    answers: [
      { text: "the presence or absence of chronic diseases", correct: true },
      { text: "health index", correct: false },
      { text: "actual power state", correct: false },
      { text: "environmental pollution", correct: false },
      { text: "child's living conditions", correct: false },
    ],
  },
  {
    question: "The health of the child is",
    answers: [
      { text: "accessibility of education", correct: false },
      { text: "priority of children's interests", correct: false },
      { text: "level of material security", correct: false },
      { text: "absence or presence of morpho-functional changes", correct: true },
      { text: "actual power state", correct: false },
    ],
  },
  {
    question: "What refers to uneven growth and development in ontogenesis:",
    answers: [
      { text: "the growth and development of each child is controlled by its own genetic program", correct: false },
      { text: "the older the child, the lower the rate of growth and development", correct: true },
      { text: "growth rates of boys and girls are not the same", correct: false },
      { text: "the growth and development rates of different body systems are not the same", correct: false},
      { text: "accelerated rates ensure the survival of the organism", correct: false },
    ],
  },
  {
    question: "Sexual dimorphism of growth and development is",
    answers: [
      { text: "the growth and development rates of different body systems are not the same", correct: false },
      { text: "the older the child, the lower the rate of growth and development", correct: false },
      { text: "growth and development rates of boys and girls are not the same", correct: true },
      { text: "the growth and development of each child is controlled by its own genetic program", correct: false },
      { text: "in the process of growth and development, periods of accelerated and slow development are distinguished", correct: false },
    ],
  },
  {
    question: "List the leading cause of death in children over two years of age:",
    answers: [
      { text: "congenital anomalies and malformations", correct: false },
      { text: "respiratory diseases", correct: false },
      { text: "diseases of the perinatal period", correct: false },
      { text: "infectious diseases", correct: false },
      { text: "injuries, accidents, poisoning", correct: true },
    ],
  },
  {
    question: "What diseases are the most common causes of death in children in the first year of life",
    answers: [
      { text: "congenital anomalies and malformations", correct: true },
      { text: "respiratory diseases", correct: false },
      { text: "infectious diseases", correct: false },
      { text: "injuries, accidents, poisoning", correct: false },
      { text: "Genetic diseases", correct: false },
    ],
  },
  {
    question: "What is the most likely risk factor for a decrease in lung capacity:",
    answers: [
      { text: "high teaching loads", correct: false },
      { text: "malnutrition", correct: false },
      { text: "hereditary predisposition", correct: false },
      { text: "low physical activity", correct: true },
      { text: "lack of hardening", correct: false },
    ],
  },
  {
    question: "What are the features of nervous processes in childhood:",
    answers: [
      { text: "longer attention span", correct: false },
      { text: "excitatory processes predominate over inhibitory processes", correct: true },
      { text: "concentration processes prevail over irradiation processes", correct: false },
      { text: "the activity of the left hemisphere predominates", correct: false },
      { text: "the degree of growth does not affect the nervous process", correct: false },
    ],
  },
  {
    question: "At what age does the brain develop most intensively?",
    answers: [
      { text: "5 - 7 years old", correct: false },
      { text: "4 - 6 years old", correct: false },
      { text: "0-3 years old", correct: true },
      { text: "6 -12 years old", correct: false },
      { text: "14 years old and over", correct: false },
    ],
  },
  {
    question: "What are the structural features of the respiratory system in children compared to adults",
    answers: [
      { text: "narrower airways", correct: true },
      { text: "airways are wider", correct: false },
      { text: "surface of lung alveoli", correct: false },
      { text: "thoracic breathing predominates", correct: false },
      { text: "children and adults are similar", correct: false },
    ],
  },


  {
    question: "What are the features of the functioning of the respiratory system in children compared to adults:",
    answers: [
      { text: "breathing rate is less", correct: false },
      { text: "respiratory minute volume is greater", correct: false },
      { text: "during physical activity, the depth of breathing mainly increases", correct: false },
      { text: "respiration rate does not change", correct: false },
      { text: "respiratory rate is higher", correct: true },
    ],
  },
  {
    question: "With what anatomical and physiological features of the skin is the special need for hardening in childhood associated?",
    answers: [
      { text: "greater expression of subcutaneous fat", correct: false },
      { text: "relatively smaller (per 1 kg of body weight) skin surface", correct: false },
      { text: "deep location of blood vessels", correct: false },
      { text: "superficial arrangement of blood vessels", correct: true },
      { text: "unbranched subcutaneous capillary network", correct: false },
    ],
  },
  {
    question: "What anatomical and physiological features of the visual analyzer contribute to the formation of myopia in childhood?",
    answers: [
      { text: "large bulge of the lens", correct: false },
      { text: "far-sighted refraction up to 7-10 years", correct: true },
      { text: "not elastic walls of the eyeballs", correct: false },
      { text: "prolonged accommodation", correct: false },
      { text: "strong development of the oculomotor muscles", correct: false },
    ],
  },
  {
    question: "What measures are taken to prevent scoliosis in schoolchildren",
    answers: [
      { text: "correspondence of educational furniture to the height group", correct: true },
      { text: "control over the nutrition of schoolchildren", correct: false },
      { text: "room layout", correct: false },
      { text: "clinical examination of children with posture disorders", correct: false },
      { text: "local lighting on desks", correct: false },
    ],
  },
  {
    question: "Which day is an easy day of the week for middle and high school students should be:",
    answers: [
      { text: "Monday", correct: false },
      { text: "Tuesday", correct: false },
      { text: "Wednesday", correct: false },
      { text: "Thursday", correct: true },
      { text: "Friday", correct: false },
    ],
  },
  {
    question: "How is student seat height determined:",
    answers: [
      { text: "student growth", correct: false },
      { text: "calf length of students", correct: false },
      { text: "calf length with foot", correct: true },
      { text: "sitting tall", correct: false },
      { text: "thigh length", correct: false },
    ],
  },
  {
    question: "What are the general requirements for school furniture:",
    answers: [
      { text: "coloring in light colors", correct: false },
      { text: "matching student height", correct: true },
      { text: "ease of students", correct: false },
      { text: "coloring in dark colors", correct: false },
      { text: "modern finish, beautiful design", correct: false },
    ],
  },
  {
    question: "What is the acceleration of growth and development processes called?",
    answers: [
      { text: "secular trend", correct: false },
      { text: "stagnation", correct: false },
      { text: "deceleration", correct: false },
      { text: "gracilization", correct: false },
      { text: "acceleration", correct: true },
    ],
  },
  {
    question: "How is air velocity measured in a school building?",
    answers: [
      { text: "psychrometer", correct: false },
      { text: "hygrometer", correct: false },
      { text: "thermometer", correct: false },
      { text: "catathermomet", correct: true },
      { text: "barometer", correct: false },
    ],
  },
  {
    question: "What pathology is school-significant",
    answers: [
      { text: "scoliosis", correct: true },
      { text: "hepatitis", correct: false },
      { text: "bronchitis", correct: false },
      { text: "hearing loss", correct: false },
      { text: "nephropathy", correct: false },
    ],
  },

  {
    question: "What issues are not studied by the subject of hygiene of children and adolescents",
    answers: [
      { text: "health and physical development", correct: false },
      { text: "hygiene of the educational process", correct: false },
      { text: "work hygiene", correct: false },
      { text: "sanitary well-being in children's and adolescent institutions", correct: false },
      { text: "environmental hygiene", correct: true },
    ],
  },
  {
    question: "What does not apply to modern trends in the study of hygiene of children and adolescents",
    answers: [
      { text: "decreased psychological development", correct: false },
      { text: "reduction of infectious diseases", correct: false },
      { text: "reduction of allergic reactions", correct: true },
      { text: "improvement of dermographic parameters", correct: false },
      { text: "decrease in mortality", correct: false },
    ],
  },
  {
    question: "What is not a determinant of health",
    answers: [
      { text: "Ante deviation - intra postnotal", correct: false },
      { text: "violation of the environment", correct: true },
      { text: "body mass", correct: false },
      { text: "living conditions", correct: false },
      { text: "family income", correct: false },
    ],
  },
  {
    question: "What external favorable conditions are not created in the process of upbringing and in the process of teaching children",
    answers: [
      { text: "eliminate the possibility of bad habits", correct: false },
      { text: "improve health", correct: false },
      { text: "promote physical development", correct: false },
      { text: "stop overall performance", correct: true },
      { text: "Improve student achievement", correct: false },
    ],
  },
  {
    question: "What causes student stress",
    answers: [
      { text: "body fatigue", correct: true },
      { text: "memory improves", correct: false },
      { text: "positive effect on mental activity", correct: false },
      { text: "physical activity increases", correct: false },
      { text: "attention is activated", correct: false },
    ],
  },
  {
    question: "Which factor is an unfavorable factor, long sitting at a desk at school or at home",
    answers: [
      { text: "increased physical activity", correct: false },
      { text: "positive effect on mental performance", correct: false },
      { text: "positive effect on physical performance", correct: false },
      { text: "reduces static load", correct: false },
      { text: "reduces the body's resistance to adverse environmental influences", correct: true },
    ],
  },
  {
    question: "What anatomical and physiological features are not included in the period of childhood",
    answers: [
      { text: "newborns 1-10 days old", correct: false },
      { text: "infants from 10 days to 1 year", correct: false },
      { text: "late childhood 1 to 3 years", correct: true },
      { text: "first childhood 4-7 years old", correct: false },
      { text: "second childhood from 7 years to 12 years", correct: false },
    ],
  },
  {
    question: "What anatomical and physiological features are not typical for early childhood",
    answers: [
      { text: "rapid development of the central nervous system", correct: false },
      { text: "children at this age are not able to draw", correct: true },
      { text: "effectively forming motor skills", correct: false },
      { text: "significant enlargement of the lower extremities", correct: false },
      { text: "reducing the roundness of the shape", correct: false },
    ],
  },
  {
    question: "What anatomical and physiological features are not typical for primary school age",
    answers: [
      { text: "the muscular system develops intensively", correct: false },
      { text: "instability of nervous processes", correct: false },
      { text: "predominance of excitatory processes over inhibition processes", correct: false },
      { text: "at this age, bone deformity does not occur", correct: true },
      { text: "relatively rapid decline in attention and fatigue", correct: false },
    ],
  },
  {
    question: "What anatomical and physiological features are not typical for adolescence (primary school age)",
    answers: [
      { text: "increased learning ability", correct: true },
      { text: "displacement of the pelvic bones when jumping", correct: false },
      { text: "improved movement coordination", correct: false },
      { text: "increased height and muscle strength", correct: false },
          ],
  },

  {
    question: "What anatomical and physiological features are not typical for senior school age",
    answers: [
      { text: "the formation of the musculoskeletal system is completed", correct: false },
      { text: "increase in body length", correct: false },
      { text: "significant increase in muscle strength", correct: false },
      { text: "significant weight gain", correct: false },
      { text: "development of small muscles is slowed down", correct: true },
    ],
  },
  {
    question: "Which organ system does not change in the growth and development of the child's body",
    answers: [
      { text: "cardiovascular", correct: false },
      { text: "respiratory system", correct: false },
      { text: "organ of hearing", correct: true },
      { text: "endocrine", correct: false },
      { text: "digestive", correct: false },
    ],
  },
  {
    question: "What development is not typical for physical development",
    answers: [
      { text: "the presence of adipose tissue", correct: false },
      { text: "ecology", correct: true },
      { text: "puberty", correct: false },
      { text: "body build and weight", correct: false },
      { text: "motor development", correct: false },
    ],
  },
  {
    question: "What patterns are not typical for physical development",
    answers: [
      { text: "the younger the body, the more intensive its growth and development", correct: false },
      { text: "the processes of growth and development do not proceed evenly", correct: false },
      { text: "the process of growth and development depending on gender", correct: false },
      { text: "the process of growth and development proceeds evenly", correct: true },
      { text: "growth process does not depend on gender", correct: false },
    ],
  },
  {
    question: "How much sleep should a child under 1 year old",
    answers: [
      { text: "17-19 hours with an interval of 1.5-2 hours", correct: true },
      { text: "night 10-10.5 hours and day 2 hours", correct: false },
      { text: "night 10-10.5 hours and day 1.5 hours", correct: false },
      { text: "14-15 hours at night and 1-5 hours during the day", correct: false },
      { text: "night 12-13 hours and day 1 hour", correct: false },
    ],
  },
  {
    question: "How much time should a child sleep 3-5 years",
    answers: [
      { text: "17-19 hours with an interval of 1.5-2 hours", correct: false },
      { text: "night 10-10.5 hours and day 1.5 hours", correct: false },
      { text: "night 12-13 hours and day 1 hour", correct: false },
      { text: "night 12-13 hours and day 2 hours", correct: false },
      { text: " night 10-10.5 hours and day 2 hours", correct: true },
    ],
  },
  {
    question: "How much time should a child sleep 5-6 years",
    answers: [
      { text: "night 10-10.5 hours and day 2 hours", correct: false },
      { text: "17-19 hours with an interval of 1.5-2 hours", correct: false },
      { text: "night 10-10.5 hours and day 1.5 hours", correct: true },
      { text: "14-15 hours at night and 1-5 hours during the day", correct: false },
      { text: "night 12-13 hours and day 1 hour", correct: false },
    ],
  },
  {
    question: "What patterns are not typical for physical development",
    answers: [
      { text: "endogeneity", correct: false },
      { text: "exogenous", correct: true },
      { text: "not reversibility", correct: false },
      { text: "cyclicality", correct: false },
      { text: "synchronicity", correct: false },
    ],
  },
  {
    question: "How is body height measured?",
    answers: [
      { text: "Somatoscopic", correct: true },
      { text: "Somatometria", correct: false },
      { text: "wooden stadiometer", correct: false },
      { text: "metal anthropometer", correct: false },
      { text: "pedobaroacrometer", correct: false },
    ],
  },
  {
    question: "How is somatometric of chest circumference measured?",
    answers: [
      { text: "steel tape measure", correct: false },
      { text: "centimeter tape measure", correct: false },
      { text: "measured at rest", correct: false },
      { text: "measured with a pedobaroacrometer", correct: true },
      { text: "measured at maximum inhalation and exhalation", correct: false },
    ],
  },
{
    question: "How is the average thickness of fatty deviations determined?",
    answers: [
      { text: "from 0.5 to 1.5cm", correct: false },
      { text: "from 1.0 to 1.5cm", correct: false },
      { text: "from 2cm to 2.5cm", correct: false },
      { text: "from 0.5cm to 2cm", correct: false },
      { text: "from 1.0 to 2cm", correct: true },
    ],
  },
  {
    question: "How are the somatometric signs of the skeleton determined",
    answers: [
      { text: "big feet", correct: false },
      { text: "thick skin", correct: false },
      { text: "stocky", correct: true },
      { text: "Long hands", correct: false },
      { text: "thick neck", correct: false },
    ],
  },
  {
    question: "What breast shape is not typical for somatoscopy",
    answers: [
      { text: "cylindrical", correct: false },
      { text: "thin", correct: true },
      { text: "conical", correct: false },
      { text: "flat", correct: false },
      { text: "barrel-shaped", correct: false },
    ],
  },
  {
    question: "What is not typical for somatoscopy of the back",
    answers: [
      { text: "rounded", correct: true },
      { text: "lordotic", correct: false },
      { text: "kyphotic", correct: false },
      { text: "slouch", correct: false },
      { text: "normal", correct: false },
    ],
  },
  {
    question: "What is not characteristic of spinal deformity",
    answers: [
      { text: "right-sided and left-sided scoliosis", correct: false },
      { text: "shoulder asymmetry", correct: false },
      { text: "Steady tilt right or left", correct: false },
      { text: "cylindrical curvature of the arm", correct: true },
      { text: "deep curvature of the shoulders", correct: false },
    ],
  },
  {
    question: "What method can determine the shape of the feet?",
    answers: [
      { text: "center of little finger", correct: false },
      { text: "point E-base of the thumb", correct: false },
      { text: "point C-from the end of the heel", correct: false },
      { text: "point A - between the middle finger", correct: false },
      { text: "point B - in the middle of the base of the thumb", correct: true },
    ],
  },
  {
    question: "How is the shape of the foot measured?",
    answers: [
      { text: "if only one line is out of bounds", correct: false },
      { text: "if only the lateral line comes out", correct: false },
      { text: "if 2-lines do not go beyond the trace", correct: true },
      { text: "if the medial does not go beyond", correct: false },
      { text: "if there is one line on the seat", correct: false },
    ],
  },
  {
    question: "What are the shapes of the human foot?",
    answers: [
      { text: "flat feet", correct: true },
      { text: "x-shaped", correct: false },
      { text: "o-shaped", correct: false },
      { text: "wide", correct: false },
      { text: "mixed", correct: false },
    ],
  },
  {
    question: "What method determines the Stritter method?",
    answers: [
      { text: "pedobaroanthropometer", correct: false },
      { text: "plantography", correct: true },
      { text: "strong compass", correct: false },
      { text: "gas spirometer", correct: false },
      { text: "weighing", correct: false },
    ],
  },
  {
    question: "What determines the assessment of puberty boys?",
    answers: [
      { text: "hyperactivity", correct: false },
      { text: "hypothermia", correct: false },
      { text: "Improves vision", correct: false },
      { text: "voice change", correct: true },
      { text: "shrinking thyroid gland", correct: false },
    ],
  },

  {
    question: "What determines the assessment of sexual development in girls?",
    answers: [
      { text: "hyperactivity", correct: false },
      { text: "hypothermia", correct: false },
      { text: "hoarse voice", correct: false },
      { text: "enlargement of the thyroid gland", correct: false },
      { text: "development of mammary glands", correct: true },
    ],
  },
  {
    question: "What determines lung capacity?",
    answers: [
      { text: "strong compass", correct: false },
      { text: "centimeter tape measure", correct: false },
      { text: "water spirometer", correct: true },
      { text: "metal anthropometer", correct: false },
      { text: "steel tape measure", correct: false },
    ],
  },
  {
    question: "What determines arm strength?",
    answers: [
      { text: "manual dynamometer", correct: true },
      { text: "strong compass", correct: false },
      { text: "metal anthropometer", correct: false },
      { text: "centimeter tape measure", correct: false },
      { text: "water spirometer", correct: false },
    ],
  },
  {
    question: "What determines the strength of the back extensors?",
    answers: [
      { text: "strong compass", correct: false },
      { text: "rear dynamometer", correct: true },
      { text: "centimeter tape measure", correct: false },
      { text: "water spirometer", correct: false },
      { text: "metal anthropometer", correct: false },
    ],
  },
  {
    question: "How is blood pressure determined?",
    answers: [
      { text: "metal dynamometer", correct: false },
      { text: "gas spirometer", correct: false },
      { text: "manual dynamometer", correct: false },
      { text: "tonometer", correct: true },
      { text: "water spirometer", correct: false },
    ],
  },
  {
    question: "What criteria are not included in the comprehensive assessment of physical development?",
    answers: [
      { text: "the state of the main organs and systems", correct: false },
      { text: "Nervous and mental state", correct: false },
      { text: "chronic diseases", correct: false },
      { text: "resistance", correct: false },
      { text: "puberty", correct: true },
    ],
  },
  {
    question: "What method of a comprehensive assessment of physical development is a generalized (transverse)?",
    answers: [
      { text: "statistical analysis", correct: true },
      { text: "reveals features of growth", correct: false },
      { text: "Monitoring chronic diseases", correct: false },
      { text: "studies the rate of physical development", correct: false },
      { text: "systematically observes faces for a long time", correct: false },
    ],
  },
  {
    question: "What method of complex assessment of physical development is individual (longitudinal)?",
    answers: [
      { text: "mass study of physical development", correct: false },
      { text: "reveals features of growth and development of personality", correct: true },
      { text: "statistical data analysis", correct: false },
      { text: "study of groups of children", correct: false },
      { text: "various telechecks", correct: false },
    ],
  },
  {
    question: "What method is not included in the assessment of physical development?",
    answers: [
      { text: "comprehensive health assessment", correct: false },
      { text: "regression scale method", correct: false },
      { text: "assessment of puberty", correct: true },
      { text: "centile method", correct: false },
      { text: "standard deviation method", correct: false },
    ],
  },
  {
    question: "How is the result of the standard deviation method determined?",
    answers: [
      { text: "narrow", correct: false },
      { text: "round", correct: false },
      { text: "high", correct: false },
      { text: "average", correct: true },
      { text: "cylindrical", correct: false },
    ],
  },

  {
    question: "What are not regression scale methods?",
    answers: [
      { text: "harmonious physical development", correct: false },
      { text: "disharmonious physical development", correct: false },
      { text: "very disharmonious development", correct: false },
      { text: "make correlation array", correct: false },
      { text: "weight and circumference of the chest does not determine harmony", correct: true },
    ],
  },
  {
    question: "What does not determine the morphological status of an organism?",
    answers: [
      { text: "complete retardation of physical development", correct: false },
      { text: "rich and disharmonious", correct: true },
      { text: "advanced physical development", correct: false },
      { text: "worse and disharmonious", correct: false },
      { text: "balanced", correct: false },
    ],
  },
  {
    question: "The physical development of children does not include",
    answers: [
      { text: "biological development", correct: false },
      { text: "Muscle strength and performance", correct: false },
      { text: "chemical factors", correct: true },
      { text: "Nutrition", correct: false },
      { text: "environment", correct: false },
    ],
  },
  {
    question: "What question will not be included in the study of hygiene of children and adolescents?",
    answers: [
      { text: "Hygiene of the educational process", correct: false },
      { text: "Hygienic bases of physical education", correct: false },
      { text: "Occupational hygiene", correct: false },
      { text: "Sanitary well-being", correct: false },
      { text: "external conditions", correct: true },
    ],
  },
  {
    question: "What external conditions are not required for the development of the child's body?",
    answers: [
      { text: "do not promote physical development", correct: true },
      { text: "improve health", correct: false },
      { text: "improve student achievement", correct: false },
      { text: "improve overall performance", correct: false },
      { text: "exclude the possibility of harmful effects", correct: false },
    ],
  },
  {
    question: "Specify anthropometric indicators of physical development",
    answers: [
      { text: "lung capacity status", correct: false },
      { text: "body mass", correct: true },
      { text: "degree of puberty", correct: false },
      { text: "muscle strength", correct: false },
      { text: "posture", correct: false },
    ],
  },
  {
    question: "What method is used to measure arm muscle strength",
    answers: [
      { text: "anthropometer", correct: false },
      { text: "spirometer", correct: false },
      { text: "hand dynamometer", correct: true },
      { text: "backbone dynamometer", correct: false },
      { text: "thick compasses", correct: false },
    ],
  },
  {
    question: "Choose from the proposed list the most likely risk factor for neurosis in a child at school age:",
    answers: [
      { text: "environmental pollution", correct: false },
      { text: "malnutrition", correct: false },
      { text: "irrational organization of the workplace", correct: false },
      { text: "low physical activity", correct: false },
      { text: "psycho-emotional stress", correct: true },
    ],
  },
  {
    question: "At what age is the rate of growth and development the highest?",
    answers: [
      { text: "0-1 year", correct: true },
      { text: "1-3 year", correct: false },
      { text: "4-7 year", correct: false },
      { text: "13-16 year", correct: false },
      { text: "17-21 year", correct: false },
    ],
  },
  {
    question: "Specify somatoscopic indicators of physical development",
    answers: [
      { text: "body length", correct: false },
      { text: "posture", correct: true },
      { text: "dental formula", correct: false },
      { text: "body mass", correct: false },
      { text: "ossification of the bones of the hand", correct: false },
    ],
  },

  {
    question: "What indicators are used to assess the level of biological maturity of a child?",
    answers: [
      { text: "Head circumference", correct: false },
      { text: "lung capacity", correct: false },
      { text: "body mass", correct: false },
      { text: "dental formula", correct: true },
      { text: "hand muscle strength", correct: false },
    ],
  },
  {
    question: "Healthy eating is",
    answers: [
      { text: "a lot of protein", correct: true },
      { text: "more meat", correct: false },
      { text: "less fish", correct: false },
      { text: "many nutritional supplements", correct: false },
      { text: "a lot of salt", correct: false },
    ],
  },
  {
    question: "Which vitamins are water-soluble vitamins",
    answers: [
      { text: "Антропометр", correct: false },
      { text: "В", correct: true },
      { text: "D", correct: false },
      { text: "Е", correct: false },
      { text: "Choline", correct: false },
    ],
  },
  {
    question: "What is the daily requirement of an adult for vitamin C:",
    answers: [
      { text: "10-20mg", correct: false },
      { text: "20-50mg", correct: false },
      { text: "50-70mg", correct: false },
      { text: "70-100mg", correct: true },
      { text: "120-150mg", correct: false },
    ],
  },
  {
    question: "What foods can be a source of vitamin B1",
    answers: [
      { text: "milk", correct: false },
      { text: "apples", correct: false },
      { text: "nuts", correct: true },
      { text: "beef meat", correct: false },
      { text: "jams and juices", correct: false },
    ],
  },
  {
    question: "What are the causes of hypovitaminosis C, in the winter-spring period",
    answers: [
      { text: "Decreased reactivity of the body;", correct: false },
      { text: "Decrease in the amount of vitamin C in foods", correct: true },
      { text: "Increasing levels of ultraviolet radiation", correct: false },
      { text: "Low air temperatures;", correct: false },
      { text: "Low atmospheric pressure", correct: false },
    ],
  },
  {
    question: "What symptoms of hypervitaminosis A are not",
    answers: [
      { text: "Headache;", correct: false },
      { text: "Loss of appetite;", correct: false },
      { text: "Hair loss", correct: false },
      { text: "Pain in the bones, their fragility;", correct: false },
      { text: "Keratoconjunctivitis.", correct: true },
    ],
  },
  {
    question: "What is the main criterion for the freshness of milk determined in the laboratory",
    answers: [
      { text: "density", correct: false },
      { text: "acidity", correct: true },
      { text: "fat content", correct: false },
      { text: "starch test", correct: false },
      { text: "test for posterization", correct: false },
    ],
  },
  {
    question: "Which body stores vitamin A?",
    answers: [
      { text: "In the intestines", correct: false },
      { text: "nervous system", correct: false },
      { text: "skeletal system", correct: false },
      { text: "liver", correct: true },
      { text: "endocrine system", correct: false },
    ],
  },
  {
    question: "What foods are healthy",
    answers: [
      { text: "vegetables and fruits", correct: true },
      { text: "processed meat", correct: false },
      { text: "White bread", correct: false },
      { text: "sweet sparkling water", correct: false },
      { text: "fast food", correct: false },
    ],
  },

  {
    question: "What symptoms are not typical for vitamin A",
    answers: [
      { text: "Keratinization and cyanotic edema of the skin;", correct: false },
      { text: "Disease cracks in the corners of the mouth", correct: true },
      { text: "Violation of twilight vision;", correct: false },
      { text: "Increased bone fragility;", correct: false },
      { text: "Hair loss", correct: false },
    ],
  },
  {
    question: "What does not apply to the prevention of toxic infections",
    answers: [
      { text: "no need for a lab", correct: true },
      { text: "food storage", correct: false },
      { text: "heat treatment", correct: false },
      { text: "transportation", correct: false },
      { text: "control", correct: false },
    ],
  },
  {
    question: "Specify the daily intake reference for fats of a person of working age",
    answers: [
      { text: "20-30g", correct: false },
      { text: "60-154 g", correct: true },
      { text: "300-350 g", correct: false },
      { text: "40-60 g", correct: false },
      { text: "100-220 g", correct: false },
    ],
  },
  {
    question: "How much energy do we get from 1 g of carbohydrates?",
    answers: [
      { text: "12 kcal", correct: false },
      { text: "9 kcal", correct: false },
      { text: "1 kcal", correct: false },
      { text: "2 kcal", correct: false },
      { text: "4 kcal", correct: true },
    ],
  },
  {
    question: "What foods are rich in",
    answers: [
      { text: "bread", correct: false },
      { text: "cabbage", correct: false },
      { text: "beans and peas", correct: true },
      { text: "beet", correct: false },
      { text: "potato", correct: false },
    ],
  },
  {
    question: "Specify the mineral element that participates in hematopoiesis",
    answers: [
      { text: "sodium", correct: false },
      { text: "Potassium", correct: false },
      { text: "Iodine", correct: false },
      { text: "Iron", correct: true },
      { text: "fluorine", correct: false },
    ],
  },
  {
    question: "What vitamin is used for the improvement of vision?",
    answers: [
      { text: "A", correct: true },
      { text: "C", correct: false },
      { text: "B12", correct: false },
      { text: "B6", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "What vitamin is used in the treatment of pernicious anemia, polyneuritis, and radiculitis?",
    answers: [
      { text: "A", correct: false },
      { text: "B12", correct: true },
      { text: "C", correct: false },
      { text: "E", correct: false },
      { text: "cholin", correct: false },
    ],
  },
  {
    question: "What chemical element in milk cannot fully satisfy the needs of a growing organism",
    answers: [
      { text: "Calcium", correct: false },
      { text: "Phosphorus", correct: false },
      { text: "Magnesium", correct: false },
      { text: "Iodine", correct: false },
      { text: "Iron", correct: true },
    ],
  },
  {
    question: "Specify the amount of protein in fish",
    answers: [
      { text: "2-3%", correct: false },
      { text: "4-8%", correct: false },
      { text: "8-21%", correct: true },
      { text: "28-37%", correct: false },
      { text: "38-44%", correct: false },
    ],
  },


 {
    question: "What helminths are associated with eating vegetables",
    answers: [
      { text: "Ascaridosis", correct: true },
      { text: "Diphyllobothriasis", correct: false },
      { text: "Leptospirosis", correct: false },
      { text: "Teniarinhoz", correct: false },
      { text: "Opisthorchiasis", correct: false },
    ],
  },
  {
    question: "Please indicate compounds that promote the excretion of metals from the body",
    answers: [
      { text: "sterols", correct: false },
      { text: "pectins", correct: true },
      { text: "phosphatides", correct: false },
      { text: "cholesterol", correct: false },
      { text: "chlorid", correct: false },
    ],
  },
  {
    question: "What kind of food poisoning, if the clinic notes: temperature 38-40 °, vomiting, abdominal pain, frequent and copious stools, fetid with mucus and blood, tenesmus, pallor of the skin",
    answers: [
      { text: "poisoning with pale toadstool", correct: false },
      { text: "Poisoning by belladonna", correct: false },
      { text: "botulism", correct: false },
      { text: "Toxicinfection caused by salmonella", correct: true },
      { text: "Escherichia coli poisoning", correct: false },
    ],
  },
  {
    question: "Indicate the average duration of the incubation period in botulism",
    answers: [
      { text: "From 30min-2 hours to 5 days", correct: false },
      { text: "12-72 hours", correct: false },
      { text: "5-7 days", correct: false },
      { text: "6-10 days", correct: false },
      { text: "From 2-3 hours to 10 days", correct: true },
    ],
  },
  {
    question: "What contributes to the death of salmonella?",
    answers: [
      { text: "boiling", correct: true },
      { text: "smoking", correct: false },
      { text: "salting", correct: false },
      { text: "freezing", correct: false },
      { text: "instillation", correct: false },
    ],
  },
  {
    question: "What is the optimal ratio of proteins, fats and carbohydrates in the diet for the elderly",
    answers: [
      { text: "1:0.8:5", correct: false },
      { text: "1:0.9:6", correct: false },
      { text: "1:1:4", correct: true },
      { text: "1:01:05", correct: false },
      { text: "1:01:06", correct: false },
    ],
  },
  {
    question: "What percentage of total dietary carbohydrates should sugar take in the diet of adult persons with mental occupation?",
    answers: [
      { text: "36%", correct: false },
      { text: "20%", correct: true },
      { text: "15%", correct: false },
      { text: "40%", correct: false },
      { text: "55%", correct: false },
    ],
  },
  {
    question: "What is the physiological need for fats for adults engaged in mental work;",
    answers: [
      { text: "4 g/kg body weight", correct: false },
      { text: "2 g/kg body weight", correct: false },
      { text: "70g", correct: false },
      { text: "1 g/kg body weight", correct: true },
      { text: "6 g/kg body weight", correct: false },
    ],
  },
  {
    question: "What should be the daily diet",
    answers: [
      { text: "breakfast - 10% lunch - 70% dinner - 20%", correct: false },
      { text: "breakfast - 40% lunch - 30% dinner - 30%", correct: false },
      { text: "breakfast - 30% lunch - 60% dinner -10%", correct: false },
      { text: "breakfast - 20% lunch - 70% dinner - 10%", correct: false },
      { text: "breakfast - 30% lunch - 50% dinner -20%", correct: true },
    ],
  },
  {
    question: "What is the physiological need of breastfed infants for carbohydrates:",
    answers: [
      { text: "13 g/kg", correct: true },
      { text: "20 g/kg", correct: false },
      { text: "5 g/kg", correct: false },
      { text: "150 g", correct: false },
      { text: "300 g", correct: false },
    ],
  },

  {
    question: "How does the child's body experience an increased need for the following minerals",
    answers: [
      { text: "sodium", correct: false },
      { text: "potassium", correct: false },
      { text: "calcium", correct: true },
      { text: "manganese", correct: false },
      { text: "iron", correct: false },
    ],
  },
  {
    question: "What is the physiological need for proteins for a 6-month-old baby",
    answers: [
      { text: "1-1.5 g/kg body weight", correct: false },
      { text: "2.6 g/kg body weight", correct: true },
      { text: "150 g", correct: false },
      { text: "200 g", correct: false },
      { text: "250 g", correct: false },
    ],
  },
  {
    question: "What is the physiological need for protein in adult mental workers who are not involved in sports, are:",
    answers: [
      { text: "50 g", correct: false },
      { text: "80 g", correct: false },
      { text: "150 g", correct: false },
      { text: "0.8 g/kg body weight", correct: true},
      { text: "4 g/kg body weight", correct: false },
    ],
  },
  {
    question: "In what period is the enrichment of prepared dishes carried out in children's institutions:",
    answers: [
      { text: "ascorbic acid is added to 3 meals all year round", correct: true },
      { text: "adding ascorbic acid to all dishes in the autumn-winter period", correct: false },
      { text: "ascorbic acid was added to the third dishes in the autumn-winter period", correct: false },
      { text: "multivitamin preparations added to all meals all year round", correct: false },
      { text: "iron is added in the autumn-winter period", correct: false },
    ],
  },
  {
    question: "What are the physiological needs for carbohydrates of adults engaged in physical labor",
    answers: [
      { text: "500 g", correct: false },
      { text: "300 g", correct: false },
      { text: "15 g/kg", correct: false },
      { text: "10 g/kg", correct: false },
      { text: "5 g/kg", correct: true },
    ],
  },
  {
    question: "The principles of a healthy diet include:",
    answers: [
      { text: "the increase in protein and fat intake", correct: false },
      { text: "the increase in carbohydrate intake", correct: false },
      { text: "balanced diet in qualities and quantities", correct: true },
      { text: "the impact on separate organ rather than on the entire body", correct: false },
      { text: "increased intake of macronutrients", correct: false },
    ],
  },
  {
    question: "The principles of a healthy diet include:",
    answers: [
      { text: "the increase in protein and fat intake", correct: false },
      { text: "adherence to eating regime", correct: true },
      { text: "the impact on separate organ rather than on the entire body", correct: false },
      { text: "the decrease in carbohydrate intake", correct: false },
      { text: "increased intake of macronutrients", correct: false },
    ],
  },
  {
    question: "The principles of a healthy diet include:",
    answers: [
      { text: "increased intake of macronutrients", correct: false },
      { text: "the increase in carbohydrate intake", correct: false },
      { text: "the impact on separate organ rather than on the entire body", correct: false },
      { text: "sufficiency in terms of energy", correct: true },
      { text: "the increase in protein and carbohydrate intake", correct: false },
    ],
  },
  {
    question: "The principles of a healthy diet include:",
    answers: [
      { text: "diversity of food", correct: true },
      { text: "the decrease in carbohydrate intake", correct: false },
      { text: "the increase in intake of all nutrients", correct: false },
      { text: "the impact on separate organ rather than on the entire body", correct: false },
      { text: "increased intake of macronutrients", correct: false },
    ],
  },
  {
    question: "What are the requirements for the concept of rational nutrition:",
    answers: [
      { text: "stereotypity of the diet", correct: false },
      { text: "decreasing intake of fat", correct: false },
      { text: "assimilation of food", correct: true },
      { text: "increase intake of all nutrients", correct: false },
      { text: "the increase in carbohydrate intake", correct: false },
    ],
  },

  {
    question: "What does the term healthy eating include?",
    answers: [
      { text: "increased carbohydrate intake", correct: false },
      { text: "decreasing intake of fat", correct: false },
      { text: "decreasing intake of fat and protein", correct: false },
      { text: "increasing intake of all nutrients", correct: false },
      { text: "qualitative and quantitative adequacy of nutrients", correct: true },
    ],
  },
  {
    question: "Requirements to a healthy diet include the following:",
    answers: [
      { text: "increasing intake of all nutrients", correct: false },
      { text: "adherence to eating regime", correct: true },
      { text: "decreasing intake of fat and protein", correct: false },
      { text: "decreasing intake of fat", correct: false },
      { text: "increased carbohydrate intake", correct: false },
    ],
  },
  {
    question: "What kind of food is included in the requirement of a healthy diet?",
    answers: [
      { text: "variety of food", correct: true },
      { text: "decreasing intake of fat", correct: false },
      { text: "increase intake of all nutrients", correct: false },
      { text: "decreasing intake of fat and protein", correct: false },
      { text: "increased carbohydrate intake", correct: false },
    ],
  },
  {
    question: "What diet should a healthy person have?",
    answers: [
      { text: "Taking optimal amounts of all micro- and micronutrients", correct: false },
      { text: "The taking right amount of food", correct: false },
      { text: "The multiplicity of meals", correct: true },
      { text: "It is systematic taking meal", correct: false },
      { text: "reception of the optimal amount of carbohydrates", correct: false },
    ],
  },
  {
    question: "What should be the diet?",
    answers: [
      { text: "It is adequate diet", correct: false },
      { text: "It is systematic taking meal", correct: false },
      { text: "Taking optimal amounts of all micro- and micronutrients", correct: false },
      { text: "Intervals between meals", correct: true },
      { text: "reception of the optimal amount of carbohydrates", correct: false },
    ],
  },
  {
    question: "What is the eating regime?",
    answers: [
      { text: "The taking right amount of food", correct: false },
      { text: "Qualitative and quantitative distribution of food on separate meals", correct: true },
      { text: "It is adequate diet", correct: false },
      { text: "It is systematic taking meal", correct: false },
      { text: "reception of the optimal amount of carbohydrates", correct: false },
    ],
  },
  {
    question: "What is the eating regime?",
    answers: [
      { text: "reception of the optimal amount of carbohydrates", correct: false },
      { text: "It is adequate diet", correct: false },
      { text: "The taking right amount of food", correct: false },
      { text: "Taking optimal amounts of all micro- and micronutrients", correct: false },
      { text: "The duration and multiplicity of the eating meal", correct: true },
    ],
  },
  {
    question: "What method can be used to measure the daily energy expenditures?",
    answers: [
      { text: "direct calorimetry", correct: true },
      { text: "alimentary energometry", correct: false },
      { text: "indirect chronometry", correct: false },
      { text: "mental and physical wok account", correct: false },
      { text: "not direct calorimetry", correct: false },
    ],
  },
  {
    question: "What method can be used to measure the daily energy expenditures?",
    answers: [
      { text: "alimentary energometry", correct: false },
      { text: "indirect chronometry", correct: false },
      { text: "respiratory calorimetry", correct: true },
      { text: "mental and physical wok account", correct: false },
      { text: "not direct calorimetry", correct: false },
    ],
  },
  {
    question: "What method can be used to measure the daily energy expenditures?",
    answers: [
      { text: "mental and physical wok account", correct: false },
      { text: "alimentary energometry", correct: false },
      { text: "indirect chronometry", correct: false },
      { text: "table-chronometry", correct: true },
      { text: "not direct calorimetry", correct: false },
    ],
  },

  {
    question: "What method can be used to measure the daily energy expenditures?",
    answers: [
      { text: "alimentary energometry", correct: false },
      { text: "calorimetric", correct: true },
      { text: "indirect chronometry", correct: false },
      { text: "mental and physical wok account", correct: false },
      { text: "not direct calorimetry", correct: false },
    ],
  },
  {
    question: "What energy expenditures are adjustable?",
    answers: [
      { text: "energy expenditures for sleeping", correct: false },
      { text: "anabolic and catabolic reactions", correct: false },
      { text: "only for catabolic reactions", correct: false },
      { text: "specific dynamic action of nutrients", correct: false },
      { text: "energy expenditures for domestic activities", correct: true },
    ],
  },
  {
    question: "What energy expenditures are adjustable?",
    answers: [
      { text: "energy expenditures for professional activities", correct: true },
      { text: "the basal metabolic rate", correct: false },
      { text: "anabolic and catabolic reactions", correct: false },
      { text: "energy expenditures for sleeping", correct: false },
      { text: "only for catabolic reactions", correct: false },
    ],
  },
  {
    question: "What energy expenditures are adjustable?",
    answers: [
      { text: "energy expenditures for sleeping", correct: false },
      { text: "anabolic and catabolic reactions", correct: false },
      { text: "energy expenditures for sport activities", correct: true },
      { text: "specific dynamic action of nutrients", correct: false },
      { text: "the basal metabolic rate", correct: false },
    ],
  },
  {
    question: "What energy expenditures are adjustable?",
    answers: [
      { text: "specific dynamic action of nutrients", correct: false },
      { text: "energy expenditures for mental work", correct: true },
      { text: "anabolic and catabolic reactions", correct: false },
      { text: "energy expenditures for sleeping", correct: false },
      { text: "the basal metabolic rate", correct: false },
    ],
  },
  {
    question: "The rate of basal metabolism depends on which profession:",
    answers: [
      { text: "professions", correct: false },
      { text: "Air pollution", correct: false },
      { text: "Altitude above sea level", correct: false },
      { text: "National food habits", correct: true },
      { text: "basic exchange", correct: false },
    ],
  },
  {
    question: "The rate of basal metabolism depends on which profession:",
    answers: [
      { text: "Air pollution", correct: false },
      { text: "Altitude", correct: false },
      { text: "professions", correct: false },
      { text: "The quality of drinking water", correct: false },
      { text: "The climatic conditions", correct: true },
    ],
  },
  {
    question: "Basal metabolic rate depends on:",
    answers: [
      { text: "Body constitution", correct: true },
      { text: "Profession", correct: false },
      { text: "Altitude", correct: false },
      { text: "The quality of drinking water", correct: false },
      { text: "Air pollution", correct: false },
    ],
  },
  {
    question: "Basal metabolic rate depends on:",
    answers: [
      { text: "Altitude", correct: false },
      { text: "The quality of drinking water", correct: false },
      { text: "Age", correct: true },
      { text: "Air pollution", correct: false },
      { text: "professions", correct: false },
    ],
  },
  {
    question: "What morbidity is caused by a constant positive energy balance:",
    answers: [
      { text: "Malnutrition", correct: false },
      { text: "alimentary obesity", correct: true },
      { text: "Kwashiorkor", correct: false },
      { text: "taeniasis", correct: false },
      { text: "shigellosis", correct: false },
    ],
  },

  {
    question: "Prolonged negative energy balance leads to the development of the following disease:",
    answers: [
      { text: "Kwashiorkor", correct: false },
      { text: "Atherosclerosis", correct: false },
      { text: "Gouter", correct: false },
      { text: "Alimentary obesity", correct: true },
      { text: "Alimentary dystrophy", correct: false },
    ],
  },
  {
    question: "What is a specific dynamic action of nutrients?",
    answers: [
      { text: "It is increased energy expenditures during taking and digestion of nutrients", correct: true },
      { text: "It is the decrease of energy expenditures when taking and digesting meal", correct: false },
      { text: "It is increased energy expenditures during the working activity", correct: false },
      { text: "It is reduction in energy expenditures during mental work", correct: false },
      { text: "Reduced energy consumption during rest and sleep", correct: false },
    ],
  },
  {
    question: "How many calories are in 1 g of protein:",
    answers: [
      { text: "1 kcal", correct: false },
      { text: "4 kcal", correct: true },
      { text: "9 kcal", correct: false },
      { text: "10 kcal", correct: false },
      { text: "12 kcal", correct: false },
    ],
  },
  {
    question: "How many calories are in 1 g of carbohydrate:",
    answers: [
      { text: "0.5 kcal", correct: false },
      { text: "1 kcal", correct: false },
      { text: "2 kcal", correct: false },
      { text: "2.5 kcal", correct: false },
      { text: "4 kcal", correct: true },
    ],
  },
  {
    question: "How many calories are in 1 g of fat is:",
    answers: [
      { text: "1 kcal", correct: false },
      { text: "3.75 kcal", correct: false },
      { text: "9 kcal", correct: true },
      { text: "4 kcal", correct: false },
      { text: "12 kcal", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "Alanine", correct: false },
      { text: "Glycine", correct: false },
      { text: "Tyrosine", correct: false },
      { text: "Tryptophan", correct: true },
      { text: "Cysteine", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "Isoleucine", correct: true },
      { text: "Glycine", correct: false },
      { text: "Cysteine", correct: false },
      { text: "Tyrosine", correct: false },
      { text: "Alanine", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "Proline", correct: false },
      { text: "Leucine", correct: true },
      { text: "Serine", correct: false },
      { text: "Arginine", correct: false },
      { text: "Tyrosine", correct: false },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "Proline", correct: false },
      { text: "Serine", correct: false },
      { text: "Arginine", correct: false },
      { text: "Tyrosine", correct: false },
      { text: "Valine", correct: true },
    ],
  },
  {
    question: "Which of the following amino acids is essential:",
    answers: [
      { text: "Cysteine", correct: false },
      { text: "Arginine", correct: false },
      { text: "Histidine", correct: true },
      { text: "Alanine", correct: false },
      { text: "Tyrosine", correct: false },
    ],
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
