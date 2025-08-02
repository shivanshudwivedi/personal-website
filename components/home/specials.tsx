"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Brain, Zap, Activity, Cpu, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ResearchProject {
  id: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  period: string;
  type: 'quantum' | 'gravitational' | 'predictive' | 'astrophysics';
}

const researchProjects: ResearchProject[] = [
  {
    id: "ligo-research",
    title: "LIGO Gravitational Wave Detection",
    organization: "LIGO Scientific Collaboration",
    description: "Real-time analytics pipeline for gravitational wave detection using advanced ML models",
    achievements: [
      "Sub-second latency on 100M+ daily seismic samples",
      "20% boost in anomaly-detection accuracy",
      "Under 1% false-positive rate"
    ],
    icon: <Activity className="h-6 w-6" />,
    period: "Mar 2025 - Present",
    type: 'gravitational'
  },
  {
    id: "quantum-control",
    title: "Quantum Control with GNNs",
    organization: "Trinity College",
    description: "GNN-driven 3D Hubbard lattice simulations for advanced qubit control systems",
    achievements: [
      "28% reduction in gate error across 50+ configurations",
      "65% faster parameter search optimization",
      "Peer-reviewed paper & open-source toolkit"
    ],
    icon: <Brain className="h-6 w-6" />,
    period: "May 2025 - Present",
    type: 'quantum'
  },
  {
    id: "disk-failure",
    title: "SSD Failure Prediction",
    organization: "Trinity College",
    description: "ML-based predictive maintenance system for enterprise storage infrastructure",
    achievements: [
      "94.1% prediction accuracy (30.4% improvement)",
      "30% reduction in model training time",
      "7% improvement in maintenance efficiency"
    ],
    icon: <Database className="h-6 w-6" />,
    period: "Jan 2024 - Jan 2025",
    type: 'predictive'
  },
  {
    id: "supernova-prediction",
    title: "Supernova Explosion Modeling",
    organization: "Trinity College & NC State",
    description: "Time-series models for astrophysical event prediction and analysis",
    achievements: [
      "15.4% increase in supernova prediction accuracy",
      "20% enhancement in model runtime performance",
      "Scalable cloud deployment on GCP"
    ],
    icon: <Zap className="h-6 w-6" />,
    period: "Jan 2024 - Jan 2025",
    type: 'astrophysics'
  }
];

const typeColors = {
  quantum: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
  gravitational: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  predictive: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  astrophysics: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
};

const typeLabels = {
  quantum: "Quantum Computing",
  gravitational: "Gravitational Physics",
  predictive: "Predictive Analytics",
  astrophysics: "Astrophysics"
};

export function Specials() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Startups & Research
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Building the future through entrepreneurship and cutting-edge scientific research
          </p>
        </motion.div>

        {/* Startup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Rocket className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Yaaro</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Founded and architected a next-generation social networking platform that scales to serve 500,000+ monthly active users. 
                    Built with cutting-edge geospatial algorithms, microservices architecture, and AI-powered matchmaking that achieved 88% success rate improvement.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">GCP/Kubernetes</Badge>
                    <Badge variant="secondary">PostGIS</Badge>
                    <Badge variant="secondary">Redis</Badge>
                  </div>
                  
                  <Link href="https://www.yaaro.co" target="_blank">
                    <Button className="group">
                      Explore Yaaro
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center">
                    {/* You can replace this with actual Yaaro graphics/image */}
                    <img src="/images/yaaro.png" alt="Yaaro" className="object-cover object-center" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Research Contributions</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advancing the frontiers of quantum computing, gravitational wave detection, and predictive analytics through innovative machine learning approaches
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {researchProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${typeColors[project.type]}`}
                          >
                            {typeLabels[project.type]}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{project.organization} • {project.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Cpu className="h-3 w-3 text-primary mt-1 shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-2 px-4">Machine Learning</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Applied Physics</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">Entrepreneurship</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}