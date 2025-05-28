
export interface Experience {
    id: string;
    type: string;
    sdate: string;
    edate: string;
    company: string;
    location: string;
    jobTitle: string;
    summary: string;
    skills: string;
    link?: string; // Optional field for external links
  }