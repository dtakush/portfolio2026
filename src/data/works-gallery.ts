export interface WorkVideo {
  id: number;
  src: string;
  alt: string;
}

export interface WorkImage {
  id: number;
  src: string;
  alt: string;
}

export interface Work {
  id: number;
  title: string;
  images: WorkImage[];
  video: WorkVideo[];
}

export const worksSmall: Work[] = [
  {
    id: 1,
    title: "tate // campaign key visual // 2024",
    images: [
            { id: 1,
            src: "/media/images/01_tate.png",
            alt: "баннеры tate", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 2,
    title: "сбер // motion design // 2026",
    images: [
            { id: 1,
            src: "",
            alt: "", }
            ],
    video: [
            { id: 1,
            src: "/media/videos/sber.mp4",
            alt: "видео Сбер", }
        ],
    },
    {
    id: 3,
    title: "купер.бизнес // key visual // 2026",
    images: [
            { id: 1,
            src: "/media/images/03_kuper.png",
            alt: "баннеры купер бизнес", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 4,
    title: "ситидрайв // key visual // 2025",
    images: [
            { id: 1,
            src: "",
            alt: "", }
            ],
    video: [
            { id: 1,
            src: "/media/videos/citydrive_gallery.mp4",
            alt: "видео Ситидрайв", }
        ],
    },
    {
    id: 5,
    title: "brand ice // ai tv integration // 2023",
    images: [
            { id: 1,
            src: "/media/images/04_brandice.png",
            alt: "баннеры brand ice", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 6,
    title: "гагичат // ai campaign // 2024",
    images: [
            { id: 1,
            src: "/media/images/05_gigachat.png",
            alt: "баннеры гагичат", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 7,
    title: "самокат // illustration // 2025",
    images: [
            { id: 1,
            src: "/media/images/06_samokat.png",
            alt: "иллюстрация самокат", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 8,
    title: "ситидрайв // digital campaign // 2025",
    images: [
            { id: 1,
            src: "/media/images/07_citydrive.png",
            alt: "баннеры ситидрайв", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    {
    id: 9,
    title: "мясной дом бородина // key visual // 2026",
    images: [
            { id: 1,
            src: "/media/images/08_mdb.png",
            alt: "баннеры ситидрайв", }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },

]
