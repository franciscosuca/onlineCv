export interface Experience {
    id: string;
    type: string;
    sdate: string;
    edate: string;
    company: string;
    location: string;
    title: string;
    summary: string;
    skills: string;
    link?: string;
    resources?: { label: string; url: string }[];
}