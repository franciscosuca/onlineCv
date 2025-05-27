
export type Metadata = {
  sdate: string
  edate: string
  company: string
  location: string
  jobTitle: string
  summary: string
  skills: string
}

export interface Post {
  metadata: {
      sdate: string;
      edate: string;
      location: string;
      company: string;
      jobTitle: string;
      summary: string;
      skills: string;
      link?: string;
  };
  content: string;
}