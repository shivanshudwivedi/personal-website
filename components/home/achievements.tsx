"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Cpu, BookOpen, GraduationCap, Star, Brain, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  category: 'academic' | 'research' | 'leadership' | 'competition';
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Next Genius Scholar (India)",
    description: "Won Full-Tuition Scholarship by Next Genius Scholarship Program at Trinity College, Hartford worth $350,000+",
    colorClass: "text-yellow-600 dark:text-yellow-400",
    category: 'academic'
  },
  {
    icon: <Medal className="h-6 w-6" />,
    title: "Thomas Holland Scholar",
    description: "Won $2000 for being the 2nd highest GPA in Trinity College, Hartford",
    colorClass: "text-blue-600 dark:text-blue-400",
    category: 'academic'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Albert J. Howard - Best Junior in Physics Award",
    description: "Won the Best Junior in Physics Award at Trinity College, Hartford",
    colorClass: "text-green-600 dark:text-green-400",
    category: 'academic'
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Deans Scholar",
    description: "Achieved the top 0.1% GPA at Trinity College, Hartford",
    colorClass: "text-purple-600 dark:text-purple-400",
    category: 'academic'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Phi Sigma Phi - Physics National Honors Society",
    description: "Inducted as a member of the national society of Physics for commendable achievements in Physics",
    colorClass: "text-indigo-600 dark:text-indigo-400",
    category: 'academic'
  },
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Phi Delta Gamma - Mathematics Award of Merit",
    description: "Awarded for commendable achievements in Mathematics",
    colorClass: "text-teal-600 dark:text-teal-400",
    category: 'academic'
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "WesHacks'24 Winner",
    description: "Won the best project award at the Wesleyan University's annual hackathon",
    colorClass: "text-red-600 dark:text-red-400",
    category: 'competition'
  }
];

const categoryColors = {
  academic: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  research: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  leadership: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
  competition: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
};

const categoryLabels = {
  academic: "Academic Excellence",
  research: "Research",
  leadership: "Leadership",
  competition: "Competitions"
};

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements & Recognition
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Academic excellence, research contributions, and competitive achievements
          </p>
        </motion.div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${achievement.colorClass} shrink-0 p-2 rounded-lg bg-muted/50`}>
                      {achievement.icon}
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg leading-tight">{achievement.title}</h3>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`mb-3 text-xs ${categoryColors[achievement.category]}`}
                      >
                        {categoryLabels[achievement.category]}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-2 px-4">$350K+ Scholarship Winner</Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">Top 0.1% GPA</Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">Physics & Math Honors</Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">Hackathon Champion</Badge>
          <Badge variant="secondary" className="text-sm py-2 px-4">National Honor Societies</Badge>
        </div>
      </div>
    </section>
  );
}