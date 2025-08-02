export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "techswipe",
    title: "TechSwipe",
    description: "A full-stack swiping app with ML-powered recommendations using Word2Vec and Epsilon-greedy algorithms on 70+ GB e-commerce dataset.",
    longDescription: "Engineered a comprehensive swiping application that combines modern mobile development with advanced machine learning algorithms. The platform processes massive e-commerce datasets to provide intelligent product recommendations through sophisticated swiping interfaces.",
    technologies: ["JavaScript", "Swift", "SwiftUI", "Node.js", "Express.js", "Firebase Firestore", "TensorFlow", "Word2Vec", "Machine Learning", "iOS Development"],
    achievements: [
      "Engineered a full-stack swiping app with Node.js/Express backend and Firebase Firestore, achieving 35% faster server response on a 70+ GB dataset across 100+ collections",
      "Implemented Word2Vec & Epsilon-greedy ML algorithms on Google Shopping data and drove UI optimizations via A/B tests with 1000+ users—increasing app interactions by 30%",
      "Integrated eBay API and web-scraped Google Shopping data into a comprehensive 70+ GB database",
      "Conducted A/B testing with 80+ users, optimizing the UI with SwiftUI and Firebase Authentication"
    ],
    image: "/images/projects/TechSwipe.png",
    github: "https://github.com/shivanshudwivedi/TechSwipe",
    featured: true
  },
  {
    id: "ligo-analytics-pipeline",
    title: "LIGO Real-time Analytics Pipeline",
    description: "A high-performance streaming pipeline processing 100M+ daily seismic samples for gravitational wave detection with sub-second latency.",
    longDescription: "Architected a cutting-edge real-time analytics pipeline for the LIGO Scientific Collaboration, processing massive volumes of seismic data to detect gravitational waves. The system achieves unprecedented performance in anomaly detection while maintaining extremely low latency.",
    technologies: ["Apache Flink", "Kafka", "Python", "Kubernetes", "Wavelet Analysis", "UMAP", "XGBoost", "Prometheus", "Grafana", "Microservices"],
    achievements: [
      "Achieved sub-second end-to-end latency on 100M+ daily seismic samples by architecting a Kafka→Flink streaming pipeline on Kubernetes to ingest 24 vibration data channels",
      "Boosted anomaly-detection accuracy by 20% and cut false-positives to under 1% by deploying Wavelet→UMAP→XGBoost models as microservices",
      "Implemented comprehensive monitoring with Prometheus/Grafana and automated Slack alerts for proactive issue detection",
      "Designed scalable architecture capable of handling massive scientific data streams in real-time"
    ],
    image: "/images/projects/LIGO.png",
    github: "https://github.com/shivanshudwivedi/LIGO",
    featured: true
  },
  {
    id: "microkernel-os",
    title: "Microkernel Operating System",
    description: "A custom microkernel OS with preemptive multitasking, virtual memory management, and optimized context switching.",
    longDescription: "Developed a complete microkernel operating system from scratch, implementing advanced OS concepts including preemptive multitasking, virtual memory management, and inter-process communication. The system demonstrates deep understanding of low-level system programming and computer architecture.",
    technologies: ["C", "x86-64 Assembly", "QEMU", "Virtual Memory", "IPC", "Operating Systems", "System Programming"],
    achievements: [
      "Engineered a microkernel supporting preemptive multitasking, round-robin scheduling, and IPC in C and x86-64 Assembly, optimizing context-switch overhead by 17%",
      "Successfully running 8 concurrent user-space tasks on QEMU with robust process isolation",
      "Built a demand-paged virtual memory manager with LRU page replacement and hardware-enforced process isolation",
      "Reduced page faults by 37% and eliminated cross-process memory leaks through advanced memory management"
    ],
    image: "/images/projects/OS.png",
    github: "https://github.com/shivanshu/Microkernel",
    featured: true
  },
  {
    id: "portfolio-risk-engine",
    title: "Real-Time Portfolio Risk Engine",
    description: "A high-performance hybrid Python/C++ engine computing portfolio VaR/CVaR in under 5ms for 100K+ positions.",
    longDescription: "Built a sophisticated financial risk management system that combines the flexibility of Python with the performance of C++ to deliver ultra-low latency risk calculations for large-scale portfolios. The system enables real-time risk monitoring and decision-making in high-frequency trading environments.",
    technologies: ["Python", "C++", "pybind11", "Intel TBB", "NumPy", "Pandas", "Monte Carlo", "Financial Modeling", "Quantitative Finance"],
    achievements: [
      "Computed portfolio VaR/CVaR in under 5ms for 100K+ positions by engineering a hybrid Python/C++ engine with pybind11 for low-latency risk calculations",
      "Accelerated Monte-Carlo simulations by 70% by implementing multi-threaded execution with Intel TBB",
      "Vectorized numerical operations in Pandas/NumPy for optimal performance in financial computations",
      "Delivered enterprise-grade risk management capabilities for high-frequency trading applications"
    ],
    image: "/images/projects/Portfolio.png",
    github: "https://github.com/yourusername/portfolio-risk-engine",
    featured: true
  },
  {
    id: "alpha-signal-generator",
    title: "ML-Based Alpha Signal Generator",
    description: "A high-frequency trading system achieving 62% directional accuracy with LSTM models and real-time FastAPI inference.",
    longDescription: "Developed an advanced machine learning system for generating alpha signals in financial markets. The platform combines deep learning techniques with high-performance infrastructure to deliver real-time trading signals with exceptional accuracy and throughput.",
    technologies: ["Python", "TensorFlow", "LSTM", "FastAPI", "NumPy", "High-Frequency Trading", "Financial ML", "Backtesting", "API Development"],
    achievements: [
      "Achieved 62% directional accuracy on next-bar return predictions by training and backtesting LSTM models on 5 years of high-frequency financial data",
      "Delivered real-time alpha signals at over 50K requests/sec by deploying the model via a high-performance FastAPI inference service",
      "Implemented comprehensive backtesting framework for model validation and performance analysis",
      "Built scalable infrastructure for live trading signal generation and validation"
    ],
    image: "/images/projects/Alpha.png",
    github: "https://github.com/yourusername/alpha-signal-generator",
    featured: true
  },
  {
    id: "gyan-ai",
    title: "GYAN.AI",
    description: "An inclusive educational platform leveraging OpenAI Whisper, GPT-4 Turbo, and fine-tuned Gemma models for students with disabilities.",
    longDescription: "Developed at YHacks 2024, GYAN.AI revolutionizes education by creating an inclusive learning environment for students with disabilities. The platform integrates multiple cutting-edge AI models to provide comprehensive educational support through innovative accessibility features.",
    technologies: ["OpenAI Whisper", "GPT-4 Turbo", "Google Gemma", "Facebook TTS", "DeepL", "Flask", "React", "Vite", "NextUI", "LangChain"],
    achievements: [
      "Created an innovative educational platform leveraging advanced AI models for inclusive learning environments",
      "Integrated video-to-notes conversion, AI chatbot, summarization, and text-to-speech for comprehensive accessibility",
      "Built using modern web technologies including Flask, React, Vite, and NextUI for optimal user experience",
      "Revolutionized education accessibility by harnessing multiple AI technologies for disabled students"
    ],
    image: "/images/projects/GYAN.png",
    github: "https://github.com/shivanshudwivedi/GYAN.AI",
    featured: true
  },
  {
    id: "whispertalk",
    title: "WhisperTalk",
    description: "A cloud-native social media application showcasing modern deployment with Docker, Kubernetes, and Google Cloud.",
    longDescription: "A sophisticated social media platform that demonstrates state-of-the-art cloud deployment practices. The application combines Spring Boot's efficiency with modern containerization and orchestration technologies to deliver a scalable, resilient platform for social interaction.",
    technologies: ["Spring Boot", "Docker", "Kubernetes", "Google Cloud", "REST API", "Swagger UI", "Microservices", "Cloud Native"],
    achievements: [
      "Leveraged Docker for containerization and Kubernetes for orchestration on Google Cloud Platform",
      "Combined Spring Boot's efficiency with REST API connectivity and Swagger UI interactivity",
      "Delivered a scalable, resilient platform for enhanced social interaction",
      "Demonstrated modern cloud-native deployment practices and developer engagement tools"
    ],
    image: "/images/projects/WhisperTalk.webp",
    github: "https://github.com/yourusername/whispertalk",
    featured: false
  },
  {
    id: "closebuy",
    title: "CloseBuy: Helping Wallets and Environment",
    description: "A Flutter-based campus marketplace with integrated Trinity College map for convenient student transactions.",
    longDescription: "An innovative Android mobile application that creates a sustainable campus economy by enabling students to buy and sell items within Trinity College. The app's standout feature is the integration of the college map, making transactions convenient while promoting environmental sustainability through item recycling.",
    technologies: ["Flutter", "Dart", "Google Maps API", "Firebase", "Android Development", "Mobile UI/UX"],
    achievements: [
      "Developed a comprehensive campus marketplace using Flutter and Dart for Trinity College students",
      "Integrated Trinity College's map for easy location-based transactions between users",
      "Created a user-friendly interface that fosters a vibrant campus economy",
      "Promoted sustainable practices by encouraging recycling and reuse of goods within the campus community"
    ],
    image: "/images/projects/CloseBuy.webp",
    github: "https://github.com/yourusername/closebuy",
    featured: false
  },
  {
    id: "contacts-app",
    title: "Interactive Contacts Application",
    description: "A Java-based contacts management system utilizing Binary Search Tree for efficient data handling and dynamic user interactions.",
    longDescription: "Developed an advanced contacts management application that demonstrates proficiency in data structures and algorithms. The system uses Binary Search Tree implementation for optimal performance in contact operations and includes comprehensive testing practices.",
    technologies: ["Java", "Binary Search Tree", "Gradle", "JUnit", "Object-Oriented Design", "Data Structures", "Algorithms"],
    achievements: [
      "Implemented Binary Search Tree data structure for efficient contact storage and retrieval operations",
      "Created dynamic user interfaces for contact addition, deletion, and search functionality",
      "Performed comprehensive unit testing for each component using Gradle build system",
      "Demonstrated advanced knowledge of data structures and object-oriented programming principles"
    ],
    image: "/images/projects/contacts.png",
    github: "https://github.com/yourusername/contacts-app",
    featured: false
  },
  {
    id: "java-texteditor",
    title: "Java Text Editor",
    description: "A feature-rich text editor built with dynamic data structures and algorithms for optimized text processing.",
    longDescription: "Developed a comprehensive text editor application that showcases advanced Java programming skills and software engineering practices. The project emphasizes efficient text processing algorithms, object-oriented design principles, and thorough testing methodologies.",
    technologies: ["Java", "Dynamic Data Structures", "Algorithms", "Gradle", "JUnit", "Object-Oriented Design", "Software Testing"],
    achievements: [
      "Leveraged dynamic data structures and algorithms for optimized text processing performance",
      "Showcased advanced skills in object-oriented design and software architecture",
      "Implemented comprehensive unit testing framework using JUnit for reliable code quality",
      "Built and tested using Gradle for professional development workflow and dependency management"
    ],
    image: "/images/projects/text.png",
    github: "https://github.com/yourusername/java-texteditor",
    featured: false
  }
];