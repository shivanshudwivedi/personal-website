"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Database, Zap, Users, Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface ResearchProject {
  id: string;
  title: string;
  organization: string;
  professor?: string;
  period: string;
  location: string;
  status: 'ongoing' | 'completed' | 'published';
  description: string;
  achievements: string[];
  technologies: string[];
  publications?: string;
  icon: React.ReactNode;
  color: string;
}

const researchProjects: ResearchProject[] = [
  {
    id: "ligo-research",
    title: "LIGO Real-time Analytics Pipeline",
    organization: "LIGO Scientific Collaboration",
    period: "Mar 2025 - Present",
    location: "Livingston, Louisiana (Remote)",
    status: 'ongoing',
    description: "Architecting advanced real-time streaming pipelines for gravitational wave detection using cutting-edge machine learning models to process massive volumes of seismic data.",
    achievements: [
      "Achieved sub-second end-to-end latency on 100M+ daily seismic samples",
      "Architected Kafka → Flink streaming pipeline on Kubernetes for 24 HAM5 ISI channels",
      "Boosted anomaly-detection accuracy by 20% with Wavelet → UMAP → XGBoost models",
      "Reduced false-positives to under 1% using microservices with Prometheus monitoring"
    ],
    technologies: ["Apache Flink", "Kafka", "Kubernetes", "Python", "Wavelet Analysis", "UMAP", "XGBoost", "Prometheus", "Grafana"],
    icon: <Activity className="h-6 w-6" />,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    id: "quantum-control",
    title: "Qubit Control with GNN-Driven 3D Hubbard Lattice Simulations",
    organization: "Trinity College-Hartford",
    professor: "Prof. Kalum Palandage",
    period: "May 2025 - Present",
    location: "Hartford, Connecticut",
    status: 'ongoing',
    description: "Advancing quantum computing through Graph Neural Networks applied to 3D Hubbard lattice qubit models, focusing on error reduction and optimization algorithms.",
    achievements: [
      "Leveraged message-passing GNNs in PyTorch Geometric on simulated 3D Hubbard lattice models",
      "Reduced gate error by 28% across 50+ parameter configurations",
      "Implemented Optuna-driven Bayesian hyperparameter optimization",
      "Cut simulation-based parameter search time by 65% to under 2 hours"
    ],
    technologies: ["PyTorch Geometric", "Graph Neural Networks", "Optuna", "Python", "Quantum Computing", "Reinforcement Learning"],
    publications: "Forthcoming peer-reviewed paper & open-source ML-driven quantum simulation toolkit",
    icon: <Brain className="h-6 w-6" />,
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    id: "disk-failure",
    title: "Prediction of SSD Disk Failure by Machine Learning",
    organization: "Trinity College-Hartford",
    professor: "Prof. Chandranil Chakrabortti",
    period: "Jan 2024 - Jan 2025",
    location: "Hartford, Connecticut",
    status: 'completed',
    description: "Developed advanced machine learning models for predictive maintenance in enterprise storage systems, processing massive datasets for failure prediction.",
    achievements: [
      "Built ML models using Sklearn, Keras, TABGAN, & Transfer Learning",
      "Increased SSD & HDD failure prediction accuracy by 30.4% (63.7% to 94.1%)",
      "Processed 2TB of Alibaba Inc data with 1 million+ data points",
      "Enhanced maintenance scheduling efficiency by 7% through predictive insights"
    ],
    technologies: ["Scikit-learn", "Keras", "GANs", "Transfer Learning", "Python", "Data Mining", "Deep Learning"],
    icon: <Database className="h-6 w-6" />,
    color: "text-green-600 dark:text-green-400"
  },
  {
    id: "supernova-prediction",
    title: "Prediction & Modeling of Supernova Explosion",
    organization: "Trinity College-Hartford & NC State University",
    period: "Jan 2024 - Jan 2025",
    location: "Hartford, Connecticut",
    status: 'completed',
    description: "Collaborative astrophysics research developing time-series models for supernova prediction and deployed scalable cloud solutions for astronomical data processing.",
    achievements: [
      "Developed time-series models using LSTM, RandomForest, & Transfer Learning",
      "Increased supernova prediction accuracy by 15.4% in collaboration with NC State",
      "Applied Monte Carlo & Fermi Integrals to enhance runtime performance by 20%",
      "Deployed RESTful application in Flask on Google Cloud with Kubernetes & Docker"
    ],
    technologies: ["LSTM", "TensorFlow", "Flask", "Google Cloud", "Kubernetes", "Docker", "Monte Carlo", "Astrophysics"],
    icon: <Zap className="h-6 w-6" />,
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    id: "heart-sound-research",
    title: "Heart Sound Classification using Machine Learning",
    organization: "Trinity College-Hartford",
    period: "Jan 2023 - Dec 2023",
    location: "Hartford, Connecticut",
    status: 'completed',
    description: "Biomedical signal processing research focusing on heart sound analysis and classification using advanced machine learning techniques for medical diagnostics.",
    achievements: [
      "Applied advanced noise reduction methods to enhance heart sound data quality",
      "Implemented feature selection optimization for effective classification",
      "Achieved 86% accuracy using K-Nearest Neighbors algorithm for murmur classification",
      "Explored unsupervised learning for pattern recognition without predefined labels"
    ],
    technologies: ["Python", "MATLAB", "TensorFlow", "PyTorch", "Scikit-learn", "Digital Signal Processing", "Keras"],
    icon: <Activity className="h-6 w-6" />,
    color: "text-red-600 dark:text-red-400"
  }
];

const statusColors = {
  ongoing: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  completed: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  published: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
};

export default function ResearchPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <Brain className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Research Portfolio
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Advancing the frontiers of Machine Learning, gravitational wave detection, quantum computing, 
            and astrophysics through innovative research and computational methods.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Badge variant="outline" className="text-sm">5 Research Projects</Badge>
            <Badge variant="outline" className="text-sm">2 Ongoing Studies</Badge>
            <Badge variant="outline" className="text-sm">3 Completed Works</Badge>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 mt-16 max-w-7xl mx-auto">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted/50 ${project.color}`}>
                        {project.icon}
                      </div>
                      <div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs mb-2 ${statusColors[project.status]}`}
                        >
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{project.organization}</span>
                    </div>
                    {project.professor && (
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        <span>{project.professor}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                    {project.achievements.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-xs text-primary"
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      >
                        {selectedProject === project.id ? 'Show Less' : `+${project.achievements.length - 2} more achievements`}
                      </Button>
                    )}
                    
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {project.achievements.slice(2).map((achievement, idx) => (
                          <div key={idx + 2} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  {project.publications && (
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <ExternalLink className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{project.publications}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Separator className="my-16" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Research Focus Areas</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            My research spans across multiple interdisciplinary domains, combining computational methods 
            with theoretical physics and practical applications.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium">Quantum Computing</span>
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">Gravitational Wave Detection</span>
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium">Machine Learning</span>
            <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm font-medium">Astrophysics</span>
            <span className="px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm font-medium">Biomedical Signal Processing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}