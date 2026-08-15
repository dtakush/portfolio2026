export interface WorkVideo {
  id: number;
  src: string;
  alt: string;
}

export interface WorkImage {
  id: number;
  src: string;
  alt: string;
  width?: number;
  height?: number;
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
            src: `${import.meta.env.BASE_URL}media/images/01_tate.webp`,
            alt: "баннеры tate",
            width: 1282,
            height: 621, }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },
    /*{
    id: 2,
    title: "сбер // motion design // 2026",
    images: [
            { id: 1,
            src: "",
            alt: "", }
            ],
    video: [
            { id: 1,
            src: `${import.meta.env.BASE_URL}media/videos/sber.mp4`,
            alt: "видео Сбер", }
        ],
    },*/
    {
    id: 3,
    title: "купер.бизнес // key visual // 2026",
    images: [
            { id: 1,
            src: `${import.meta.env.BASE_URL}media/images/03_kuper.webp`,
            alt: "баннеры купер бизнес",
            width: 1920,
            height: 1080, }
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
            src: `${import.meta.env.BASE_URL}media/videos/citydrive_gallery.mp4`,
            alt: "видео Ситидрайв", }
        ],
    },
    {
    id: 5,
    title: "brand ice // ai tv integration // 2023",
    images: [
            { id: 1,
            src: `${import.meta.env.BASE_URL}media/images/04_brandice.png`,
            alt: "баннеры brand ice",
            width: 1095,
            height: 617, }
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
            src: `${import.meta.env.BASE_URL}media/images/05_gigachat.webp`,
            alt: "баннеры гагичат",
            width: 1095,
            height: 616, }
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
            src: `${import.meta.env.BASE_URL}media/images/06_samokat.png`,
            alt: "иллюстрация самокат",
            width: 1137,
            height: 640, }
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
            src: `${import.meta.env.BASE_URL}media/images/07_citydrive.png`,
            alt: "баннеры ситидрайв",
            width: 1095,
            height: 616, }
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
            src: `${import.meta.env.BASE_URL}media/images/08_mdb.webp`,
            alt: "баннеры ситидрайв",
            width: 1920,
            height: 1080, }
            ],
    video: [
            { id: 1,
            src: "",
            alt: "", }
        ],
    },

]
