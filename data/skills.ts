// data/skills.ts
export type SkillCategory = 
  | 'Programming & Development' 
  | 'ML & Data Science' 
  | 'Quantitative Finance' 
  | 'Cloud & Infrastructure'
  | 'System Architecture' 
  | 'Specialized Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Programming & Development': [
    // Programming Languages
    { name: 'Python', category: 'Programming & Development', logoKey: 'python' },
    { name: 'C++', category: 'Programming & Development', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Programming & Development', logoKey: 'java' },
    { name: 'JavaScript', category: 'Programming & Development', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Programming & Development', logoKey: 'typescript' },
    { name: 'Swift', category: 'Programming & Development', logoKey: 'swift' },
    { name: 'C', category: 'Programming & Development', logoKey: 'c' },
    { name: 'SQL', category: 'Programming & Development', logoKey: 'mysql' },
    { name: 'x86-64 Assembly', category: 'Programming & Development', logoKey: 'cplusplus' },
    { name: 'Kotlin', category: 'Programming & Development', logoKey: 'kotlin' },
    // Frameworks & Libraries
    { name: 'Spring Boot', category: 'Programming & Development', logoKey: 'spring' },
    { name: 'Flask', category: 'Programming & Development', logoKey: 'flask' },
    { name: 'FastAPI', category: 'Programming & Development', logoKey: 'python' },
    { name: 'Express.js', category: 'Programming & Development', logoKey: 'express' },
    { name: 'Node.js', category: 'Programming & Development', logoKey: 'nodejs' },
    { name: 'React.js', category: 'Programming & Development', logoKey: 'react' },
    { name: 'Next.js', category: 'Programming & Development', logoKey: 'nextjs' },
    { name: 'React Native', category: 'Programming & Development', logoKey: 'react' },
    { name: 'SwiftUI', category: 'Programming & Development', logoKey: 'swift' },
    { name: 'Flutter', category: 'Programming & Development', logoKey: 'flutter' },
    { name: 'Django', category: 'Programming & Development', logoKey: 'django' },
    { name: 'Vue.js', category: 'Programming & Development', logoKey: 'vuejs' },
    { name: 'Angular', category: 'Programming & Development', logoKey: 'angularjs' },
    { name: 'Tailwind CSS', category: 'Programming & Development', logoKey: 'tailwindcss' },
    { name: 'Three.js', category: 'Programming & Development', logoKey: 'threejs' },
  ],
  'ML & Data Science': [
    { name: 'TensorFlow', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'PyTorch', category: 'ML & Data Science', logoKey: 'pytorch' },
    { name: 'PyTorch Geometric', category: 'ML & Data Science', logoKey: 'pytorch' },
    { name: 'Scikit-learn', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Pandas', category: 'ML & Data Science', logoKey: 'pandas' },
    { name: 'NumPy', category: 'ML & Data Science', logoKey: 'numpy' },
    { name: 'Keras', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'XGBoost', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'LightGBM', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'OpenCV', category: 'ML & Data Science', logoKey: 'opencv' },
    { name: 'Matplotlib', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Seaborn', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Plotly', category: 'ML & Data Science', logoKey: 'plotly' },
    { name: 'Jupyter', category: 'ML & Data Science', logoKey: 'jupyter' },
    { name: 'Optuna', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'UMAP', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'LSTM', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'Random Forest', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Neural Networks', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'Deep Learning', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'Computer Vision', category: 'ML & Data Science', logoKey: 'opencv' },
    { name: 'NLP', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Time Series Analysis', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Transfer Learning', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'Reinforcement Learning', category: 'ML & Data Science', logoKey: 'python' },
    { name: 'Graph Neural Networks', category: 'ML & Data Science', logoKey: 'pytorch' },
    { name: 'GANs', category: 'ML & Data Science', logoKey: 'tensorflow' },
    { name: 'Word2Vec', category: 'ML & Data Science', logoKey: 'python' },
  ],
  'Quantitative Finance': [
    { name: 'Value at Risk (VaR)', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Conditional VaR (CVaR)', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Monte Carlo Simulation', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Alpha Generation', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Sharpe Ratio', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Risk Management', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Portfolio Optimization', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Backtesting', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'High-Frequency Trading', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Algorithmic Trading', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Options Pricing', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Derivatives', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Statistical Arbitrage', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Factor Models', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Market Microstructure', category: 'Quantitative Finance', logoKey: 'python' },
    { name: 'Volatility Modeling', category: 'Quantitative Finance', logoKey: 'python' },
  ],
  'Cloud & Infrastructure': [
    // Cloud Platforms
    { name: 'AWS', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS EC2', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS Lambda', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS S3', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS RDS', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS CloudFormation', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS CloudWatch', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'AWS ECS', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'GCP', category: 'Cloud & Infrastructure', logoKey: 'googlecloud' },
    { name: 'Google Kubernetes Engine', category: 'Cloud & Infrastructure', logoKey: 'googlecloud' },
    { name: 'Google Cloud Functions', category: 'Cloud & Infrastructure', logoKey: 'googlecloud' },
    // DevOps & Infrastructure
    { name: 'Docker', category: 'Cloud & Infrastructure', logoKey: 'docker' },
    { name: 'Kubernetes', category: 'Cloud & Infrastructure', logoKey: 'kubernetes' },
    { name: 'Terraform', category: 'Cloud & Infrastructure', logoKey: 'terraform' },
    { name: 'GitHub Actions', category: 'Cloud & Infrastructure', logoKey: 'github' },
    { name: 'Jenkins', category: 'Cloud & Infrastructure', logoKey: 'jenkins' },
    { name: 'CI/CD', category: 'Cloud & Infrastructure', logoKey: 'github' },
    { name: 'Prometheus', category: 'Cloud & Infrastructure', logoKey: 'prometheus' },
    { name: 'Grafana', category: 'Cloud & Infrastructure', logoKey: 'grafana' },
    { name: 'nginx', category: 'Cloud & Infrastructure', logoKey: 'nginx' },
    { name: 'Apache', category: 'Cloud & Infrastructure', logoKey: 'apache' },
    // Databases & Storage
    { name: 'PostgreSQL', category: 'Cloud & Infrastructure', logoKey: 'postgresql' },
    { name: 'MySQL', category: 'Cloud & Infrastructure', logoKey: 'mysql' },
    { name: 'MongoDB', category: 'Cloud & Infrastructure', logoKey: 'mongodb' },
    { name: 'Redis', category: 'Cloud & Infrastructure', logoKey: 'redis' },
    { name: 'Firebase Firestore', category: 'Cloud & Infrastructure', logoKey: 'firebase' },
    { name: 'NoSQL', category: 'Cloud & Infrastructure', logoKey: 'mongodb' },
    { name: 'InfluxDB', category: 'Cloud & Infrastructure', logoKey: 'influxdb' },
    { name: 'Elasticsearch', category: 'Cloud & Infrastructure', logoKey: 'elasticsearch' },
    { name: 'Apache Cassandra', category: 'Cloud & Infrastructure', logoKey: 'apache' },
    { name: 'DynamoDB', category: 'Cloud & Infrastructure', logoKey: 'amazonwebservices' },
    { name: 'BigQuery', category: 'Cloud & Infrastructure', logoKey: 'googlecloud' }
  ],
  'System Architecture': [
    { name: 'Microservices', category: 'System Architecture', logoKey: 'docker' },
    { name: 'REST APIs', category: 'System Architecture', logoKey: 'swagger' },
    { name: 'GraphQL', category: 'System Architecture', logoKey: 'graphql' },
    { name: 'gRPC', category: 'System Architecture', logoKey: 'grpc' },
    { name: 'Event-Driven Architecture', category: 'System Architecture', logoKey: 'apache' },
    { name: 'Distributed Systems', category: 'System Architecture', logoKey: 'github' },
    { name: 'Load Balancing', category: 'System Architecture', logoKey: 'nginx' },
    { name: 'Caching Strategies', category: 'System Architecture', logoKey: 'redis' },
    { name: 'Message Queues', category: 'System Architecture', logoKey: 'rabbitmq' },
    { name: 'Pub/Sub', category: 'System Architecture', logoKey: 'apache' },
    { name: 'Serverless', category: 'System Architecture', logoKey: 'amazonwebservices' },
    { name: 'Service Mesh', category: 'System Architecture', logoKey: 'kubernetes' },
    { name: 'API Gateway', category: 'System Architecture', logoKey: 'swagger' },
    { name: 'SOLID Principles', category: 'System Architecture', logoKey: 'github' },
    { name: 'Design Patterns', category: 'System Architecture', logoKey: 'github' },
    { name: 'System Design', category: 'System Architecture', logoKey: 'github' },
    { name: 'Scalability', category: 'System Architecture', logoKey: 'kubernetes' },
    { name: 'High Availability', category: 'System Architecture', logoKey: 'kubernetes' },
  ],
  'Specialized Tools': [
    // Streaming & Message Processing
    { name: 'Apache Kafka', category: 'Specialized Tools', logoKey: 'apache' },
    { name: 'Apache Flink', category: 'Specialized Tools', logoKey: 'apache' },
    { name: 'RabbitMQ', category: 'Specialized Tools', logoKey: 'rabbitmq' },
    // High-Performance Computing
    { name: 'Intel TBB', category: 'Specialized Tools', logoKey: 'intel' },
    { name: 'pybind11', category: 'Specialized Tools', logoKey: 'python' },
    { name: 'OpenMP', category: 'Specialized Tools', logoKey: 'cplusplus' },
    // Development Tools
    { name: 'Git', category: 'Specialized Tools', logoKey: 'git' },
    { name: 'GitHub', category: 'Specialized Tools', logoKey: 'github' },
    { name: 'GitLab', category: 'Specialized Tools', logoKey: 'gitlab' },
    { name: 'Jira', category: 'Specialized Tools', logoKey: 'jira' },
    { name: 'Confluence', category: 'Specialized Tools', logoKey: 'confluence' },
    { name: 'Slack', category: 'Specialized Tools', logoKey: 'slack' },
    { name: 'VS Code', category: 'Specialized Tools', logoKey: 'visualstudiocode' },
    { name: 'IntelliJ IDEA', category: 'Specialized Tools', logoKey: 'intellijidea' },
    { name: 'Postman', category: 'Specialized Tools', logoKey: 'postman' },
    { name: 'Swagger', category: 'Specialized Tools', logoKey: 'swagger' },
    { name: 'QEMU', category: 'Specialized Tools', logoKey: 'qemu' },
    { name: 'Vim', category: 'Specialized Tools', logoKey: 'vim' },
    // Operating Systems
    { name: 'Linux', category: 'Specialized Tools', logoKey: 'linux' },
    { name: 'Ubuntu', category: 'Specialized Tools', logoKey: 'ubuntu' },
    { name: 'macOS', category: 'Specialized Tools', logoKey: 'apple' }
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};

export const getSkillsByCategory = (category: SkillCategory) => {
  return skills[category] || [];
};

export const getTotalSkillCount = () => {
  return getAllSkills().length;
};

export const getCategorySkillCount = (category: SkillCategory) => {
  return skills[category]?.length || 0;
};