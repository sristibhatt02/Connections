import portrait from '../../Navy Blazer Portrait in Glass Atrium.png';

export const profile = {
  name: 'Sristi Bhattacharjee',
  location: 'London, United Kingdom',
  linkedin: 'https://www.linkedin.com/in/sristi-bhattacharjee/',
  email: null as string | null,
  portrait,
  cv: null as string | null,
  description: 'Sristi Bhattacharjee’s portfolio: research and work experience, education, publications and skills in bioinformatics, marine science and data analysis.',
};

export const experience = [
  { dates: 'May – Aug 2024', type: 'Academic research', role: 'MSc Researcher — Bioinformatics', organisation: 'University of Aberdeen', text: 'Explored age-associated patterns across T-cell subsets through sequencing analysis. Contributed to quality control, alignment and downstream analysis, built automated workflows, and produced reproducible notebooks and figures.', skills: 'Python · R · Bash · Sequencing analysis' },
  { dates: 'Mar – May 2022', type: 'Academic research', role: 'Undergraduate Researcher', organisation: 'Berhampur University', text: 'Carried out standardised shoreline surveys, classified debris and calculated the Clean Coast Index and General Index. Used QGIS mapping to support recommendations for coastal waste management.', skills: 'Field research · Data classification · QGIS' },
  { dates: 'May – Jul 2021', type: 'Internship', role: 'Aquaculture Intern', organisation: 'Mayank Aquaculture Pvt. Ltd.', text: 'Mapped production workflows and worked with pond-level performance data and cost analysis.', skills: 'Workflow mapping · Data organisation · Cost analysis' },
  { dates: 'May – Jul 2020', type: 'Internship', role: 'Marine Science Intern', organisation: 'Amity University, Noida', text: 'Synthesised literature on trace metals, biomonitoring and remediation, developing a foundation in scientific research and reporting.', skills: 'Literature review · Evidence synthesis · Reporting' },
];

export const education = [
  { level: 'POSTGRADUATE', dates: 'Sep 2023 – Aug 2024', degree: 'MSc Biotechnology and Bioinformatics', institution: 'University of Aberdeen', result: 'Merit', note: 'MSc research on T-cell ageing and immunosenescence.' },
  { level: 'UNDERGRADUATE', dates: 'Jul 2019 – Jun 2022', degree: 'BSc (Hons) Marine Science', institution: 'Amity University, Noida', result: 'First Class · 9.1/10', note: 'Research experience in shoreline assessment and spatial analysis.' },
];

export const skillGroups = [
  { title: 'Data analysis & coding', items: ['Python', 'R', 'Bash', 'pandas', 'SciPy', 'Biopython', 'Notebooks'] },
  { title: 'Sequencing & genomics', items: ['NGS', 'Quality control', 'RNA-seq', 'Variant calling & annotation'] },
  { title: 'Research & organisation', items: ['Literature synthesis', 'Data organisation', 'Workflow mapping', 'Research reporting'] },
  { title: 'Visualisation & spatial analysis', items: ['Matplotlib', 'Seaborn', 'QGIS', 'Scientific figures'] },
];
