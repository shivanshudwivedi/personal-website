export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "undergraduate",
      degree: "Bachelor's in Computer Science",
      institution: "Trinity College",
      location: "Hartford, Connecticut, USA",
      startDate: "September 2022",
      endDate: "May 2026 (Expected)",
      gpa: "4.00/4.00"
    }
  ];