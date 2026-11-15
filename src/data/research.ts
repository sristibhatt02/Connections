export type CaseStudy = {
 slug: string; number: string; title: string; category: string; institution: string; period: string; summary: string;
 question: string; contribution: string[]; methods: string; outputs: string; limitations: string;
};
export const research: CaseStudy[] = [
 {
 slug: 't-cell-ageing', number: '01', title: 'T-cell ageing and immunosenescence', category: 'Bioinformatics', institution: 'University of Aberdeen', period: 'May–August 2024',
 summary: 'Exploring age-associated patterns across T-cell subsets, with sequencing workflows and reproducible analysis.',
 question: 'How can sequencing analysis help us explore age-associated patterns across T-cell subsets?',
 contribution: ['Contributed to quality control, alignment and downstream sequencing analysis.', 'Built automated workflows in Python, R and Bash.', 'Produced reproducible notebooks and figures to document cohort-level analysis.'],
 methods: 'MSc research into T-cell ageing and immunosenescence. The work combined sequencing workflows with cohort-level analysis of T-cell subsets, with an emphasis on documenting analytical steps.',
 outputs: 'Reproducible notebooks and figures documenting age-associated patterns. The emphasis here is on transparent analysis and research communication.',
 limitations: 'This is a qualitative overview of academic research. Assay-specific methods, dataset provenance and numerical findings are not presented here. Research figures, notebooks and the thesis are not currently available for public download.'
 },
 {
 slug: 'shoreline-assessment', number: '02', title: 'Shoreline debris assessment', category: 'Marine science', institution: 'Berhampur University', period: 'March–May 2022',
 summary: 'Turning shoreline observations into classified evidence, spatial analysis and coastal waste-management recommendations.',
 question: 'How can standardised shoreline observations support an assessment of coastal debris?',
 contribution: ['Carried out standardised shoreline surveys and debris classification.', 'Calculated the Clean Coast Index and General Index.', 'Used QGIS mapping to support recommendations for coastal waste management.'],
 methods: 'Undergraduate research combining field observations, structured debris classification, index calculations and spatial analysis in QGIS.',
 outputs: 'A structured assessment of shoreline debris and recommendations for coastal waste management, supported by index calculations and mapping.',
 limitations: 'Site counts, numerical findings and implementation outcomes are not reported here. Survey data and approved maps are not currently available for public download.'
 }
];
