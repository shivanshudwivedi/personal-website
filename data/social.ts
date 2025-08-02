export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/shivanshudwivedi",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shivanshudwivedi",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:shitanshri@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:+1-(860)-209-7055",
      icon: "phone"
    }
  ];