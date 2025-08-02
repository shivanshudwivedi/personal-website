// data/experience.ts
export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: string[];
    type?: 'work' | 'research' | 'education' | 'leadership';
  }
  
  export const experiences: Experience[] = [
    // Current Leadership & Entrepreneurship
    {
      id: "yaaro-founder",
      title: "Founder & Lead Developer",
      company: "Yaaro",
      location: "Mumbai, India",
      startDate: "January 2025",
      endDate: "Present",
      description: "Founded and architected a social networking platform scaled for 500K+ monthly active users with advanced geospatial matchmaking algorithms.",
      achievements: [
        "Architected for 500K+ Monthly Active Users Scalability: Reduced API latency by 17% by deploying Spring Boot microservices and Redis on a load-tested GCP/Kubernetes architecture",
        "Scaled App from 0 to 20K+ Users: Led full-stack development of the React Native app, driving user adoption with a performance-tuned UI with robust state management",
        "Boosted Matchmaking Success by 88%: Engineered a PostGIS geospatial algorithm with geohashing to optimize real-time location queries and user connections",
        "Automated Deployments with 99.8% Uptime: Deployed containerized (Docker) services in <10 mins by building a full CI/CD pipeline with Terraform and GitHub Actions"
      ],
      type: 'work'
    },
    {
      id: "cs-club-vp",
      title: "Vice President",
      company: "Computer Science Club - Trinity College",
      location: "Hartford, Connecticut",
      startDate: "September 2025",
      endDate: "Present",
      description: "Leading strategic initiatives for the computer science community, organizing technical workshops, and fostering industry connections.",
      achievements: [
        "Spearheaded technical workshop series attracting 200+ participants from across the college",
        "Established partnerships with tech companies for internship and career opportunities",
        "Organized hackathons and coding competitions to enhance student engagement in CS",
        "Mentored junior students in technical projects and career development"
      ],
      type: 'leadership'
    },
    
    // Current Research Positions
    {
      id: "ligo-researcher",
      title: "Machine Learning Researcher",
      company: "LIGO Scientific Collaboration",
      location: "Livingston, Louisiana (Remote)",
      startDate: "March 2025",
      endDate: "Present",
      description: "Developing real-time gravitational wave detection systems using advanced ML pipelines for processing massive seismic datasets.",
      achievements: [
        "Achieved sub-second end-to-end latency on 100M+ daily seismic samples by architecting a Kafka → Flink streaming pipeline on Kubernetes to ingest 24 HAM5 ISI channels",
        "Boosted anomaly-detection accuracy by 20% and cut false-positives to under 1% by deploying Wavelet → UMAP → XGBoost models as microservices with Prometheus monitoring and Slack alerts",
        "Developed real-time gravitational wave signal processing algorithms for enhanced astronomical discovery",
        "Collaborated with international physics teams to optimize detection sensitivity for next-generation experiments"
      ],
      type: 'research'
    },
    {
      id: "quantum-ml-research",
      title: "Machine Learning Research Assistant",
      company: "Trinity College",
      location: "Hartford, Connecticut",
      startDate: "May 2025",
      endDate: "Present",
      description: "Advancing quantum computing research through GNN-driven simulations and optimization algorithms under Prof. Kalum Palandage.",
      achievements: [
        "Leveraged message-passing GNNs in PyTorch Geometric on simulated 3D Hubbard lattice qubit models to reduce gate error by 28% across 50+ parameter configurations",
        "Implemented Optuna-driven Bayesian hyperparameter optimization, cutting simulation-based parameter search time by 65% to under 2 hours",
        "Authored forthcoming peer-reviewed paper and open-sourced an ML-driven quantum simulation toolkit",
        "Pioneered novel approaches in quantum control theory using deep learning methodologies"
      ],
      type: 'research'
    },
    {
      id: "disk-failure-prediction",
      title: "Machine Learning Research Assistant",
      company: "Trinity College",
      location: "Hartford, Connecticut",
      startDate: "January 2024",
      endDate: "Present",
      description: "Enhanced predictive maintenance systems through advanced ML models and large-scale data analysis under Prof. Chandranil Chakrabortti.",
      achievements: [
        "Enhanced Predictive Accuracy to 94%: Boosted failure-prediction model accuracy from 64% by creating ML pipelines with Sklearn, Keras, and GANs on a 4TB Alibaba Dataset",
        "Improved Maintenance Efficiency by 7%: Analyzed over 1 billion time-series records from production systems to generate data-driven insights that optimized hardware replacement schedules",
        "Implemented feature selection techniques, reducing model training time by 30% and enhancing prediction reliability",
        "Developed scalable data processing pipelines for real-time failure prediction in enterprise environments"
      ],
      type: 'research'
    },
    {
      id: "supernova-prediction",
      title: "Machine Learning Research Assistant",
      company: "Trinity College (Collaboration with NC State)",
      location: "Hartford, Connecticut",
      startDate: "January 2024",
      endDate: "January 2025",
      description: "Developed advanced time-series models for supernova explosion prediction and deployed scalable cloud solutions.",
      achievements: [
        "Developed time-series models using LSTM, RandomForest, & Transfer Learning, in collaboration with North Carolina State University, increasing supernova prediction accuracy by 15.4%",
        "Applied Monte Carlo & Fermi Integrals to enhance model runtime performance by 20%",
        "Deployed a RESTful application in Flask on Google Cloud using Kubernetes & Docker for scalable access to prediction results",
        "Created astronomical data processing pipelines for real-time stellar event monitoring"
      ],
      type: 'research'
    },
    
    // Professional Experience
    {
      id: "reality-ai-intern",
      title: "Software Engineering Intern",
      company: "Reality AI",
      location: "New York, NY",
      startDate: "May 2024",
      endDate: "August 2024",
      description: "Built and scaled AI-powered coding assistant infrastructure serving 100K+ weekly API requests with enterprise-grade reliability.",
      achievements: [
        "Handled 100K+ Weekly API Requests: Built and scaled Node.js/Express microservices for an AI coding assistant, integrating OpenAI's GPT-4 API for high-throughput performance",
        "Cut Deployment Failures by 27%: Containerized backend services with Docker for AWS ECS and refined Jenkins CI/CD pipelines to enable reliable, daily production releases",
        "Reduced Incident Resolution Time by 64%: Implemented a full observability stack using AWS CloudWatch and Grafana, creating dashboards and automated Slack alerts to proactively identify issues",
        "Optimized API response times and implemented caching strategies for improved user experience"
      ],
      type: 'work'
    },

    // Teaching & Mentorship
    {
      id: "international-mentor-current",
      title: "International Student Mentor",
      company: "Trinity College",
      location: "Hartford, Connecticut",
      startDate: "September 2024",
      endDate: "Present",
      description: "Providing comprehensive support to international students in academic, cultural, and professional development.",
      achievements: [
        "Mentored 30+ international freshman students in academic and cultural adjustment",
        "Developed comprehensive orientation programs for smooth transition to US academic system",
        "Facilitated cross-cultural communication workshops and networking events",
        "Maintained 95% retention rate among mentored students through personalized support strategies"
      ],
      type: 'leadership'
    },
    {
      id: "math-tutor",
      title: "Mathematics Tutor",
      company: "Q Center - Trinity College",
      location: "Hartford, Connecticut",
      startDate: "January 2025",
      endDate: "Present",
      description: "Providing advanced mathematics tutoring and academic support to undergraduate students.",
      achievements: [
        "Tutored students in advanced calculus, linear algebra, and discrete mathematics",
        "Developed personalized learning strategies resulting in average grade improvement of 1.2 GPA points",
        "Created supplementary learning materials and practice problems for complex mathematical concepts",
        "Maintained consistent student satisfaction ratings above 4.8/5.0"
      ],
      type: 'education'
    },
    {
      id: "teaching-assistant",
      title: "Teaching Assistant",
      company: "Trinity College",
      location: "Hartford, Connecticut",
      startDate: "January 2024",
      endDate: "May 2025",
      description: "Led laboratory sessions and provided academic support for Data Structures & Algorithms and Discrete Mathematics courses.",
      achievements: [
        "Led weekly labs for Data Structures & Algorithms and Discrete Mathematics, mentoring 50+ students across 4 semesters",
        "Graded assignments and provided detailed feedback to enhance student learning outcomes",
        "Conducted review sessions and office hours, resulting in 25% improvement in class performance",
        "Developed innovative teaching materials and coding exercises for complex algorithmic concepts"
      ],
      type: 'education'
    }
  ];