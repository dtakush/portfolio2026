export interface EducationItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  type: "education" | "course";
}

export const education = [
  {
    id: 1,
    title: "дизайнер-график (специалитет)",
    subtitle: "московский педагогический государственный университет (мпгу)",
    period: "2010 — 2016",
    type: "education"
  },
  {
    id: 2,
    title: "коммерческий иллюстратор",
    subtitle: "яндекс практикум",
    period: "2023",
    type: "education"
  },
  {
    id: 3,
    title: "3d-дизайнер",
    subtitle: "яндекс практикум",
    period: "2025",
    type: "education"
  },
  {
    id: 2,
    title: "веб-разработчик",
    subtitle: "яндекс практикум",
    period: "2021",
    type: "education"
  },

];