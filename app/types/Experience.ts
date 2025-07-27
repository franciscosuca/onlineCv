
export interface Experience {
    id: string;
    type: string;
    sdate: string;
    edate: string;
    company: string;
    location: string;
    title: string;  // Changed from jobTitle to title to match your data
    summary: string;
    skills: string;
    link?: string; // Optional field for external links
  }