// Gallery items can be images or videos.
// Images: { src: "/imgs/...", alt: "..." }
// Videos: { type: "video", src: "/videos/my-video.mp4", alt: "..." }
//        Or use .mp4/.webm/.ogg/.mov extension - video is auto-detected.
// Put videos in public/videos/ (src: "/videos/filename.mp4")
export const workItems = [
  {
    slug: "work-1",
    title: "Bonnie Jean",
    frontImg: "/imgs/public/imgs/selected_work/new%20Bonnie%20Jean.jpg",
    frontAlt: "Bonnie Jean",
    tags: [
      { label: "paid social", black: false },
      { label: "creative direction", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    externalUrl: "https://www.bonniejean.com",
    projectDetails: {
      title: "Back to School with Bonnie Jean | 2024",
      description: "Creative direction and video editing for Back to School campaign",
    },
    galleryProjectDetails: {
      title: "Easter Campaign",
      description: "paid ad creative, web, & social",
    },
    gallery: [
      { type: "video", src: "https://q1juiwwyza7zlpgk.public.blob.vercel-storage.com/BTS%20vid.mov", alt: "Bonnie Jean BTS" },
      { type: "video", src: "https://q1juiwwyza7zlpgk.public.blob.vercel-storage.com/easter%20vid.mov", alt: "Bonnie Jean Easter Campaign", galleryLeft: true },
      { src: "/imgs/public/imgs/bonnie%20work%201/1.png", alt: "Bonnie Jean Back to School" },
      { src: "/imgs/public/imgs/bonnie%20work%201/2.png", alt: "Bonnie Jean Back to School" },
      {
        type: "stack",
        images: [
          { src: "/imgs/public/imgs/bonnie%20work%201/3.png", alt: "Bonnie Jean Back to School" },
          { src: "/imgs/public/imgs/bonnie%20work%201/4.png", alt: "Bonnie Jean Back to School" },
        ],
      },
      { src: "/imgs/public/imgs/bonnie%20work%201/5.png", alt: "Bonnie Jean Back to School", belowColumns: 2 },
    ],
  },
  {
    slug: "cloak-and-dagger-nyc",
    title: "Cloak and Dagger NYC",
    frontImg: "/imgs/public/imgs/c%26d%20work%201/1.png",
    frontAlt: "Cloak and Dagger NYC",
    noHero: true,
    tags: [
      { label: "social media", black: false },
      { label: "content creation", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    externalUrl: "https://www.cloakanddaggernyc.com/",
    gallery: [
      { src: "/imgs/public/imgs/c%26d%20work%201/1.png", alt: "Cloak and Dagger NYC" },
      { src: "/imgs/public/imgs/c%26d%20work%201/2.png", alt: "Cloak and Dagger NYC" },
      { src: "/imgs/public/imgs/c%26d%20work%201/3.png", alt: "Cloak and Dagger NYC" },
      { src: "/imgs/public/imgs/c%26d%20work%201/4.png", alt: "Cloak and Dagger NYC" },
      { src: "/imgs/public/imgs/c%26d%20work%201/5.png", alt: "Cloak and Dagger NYC" },
      { src: "/imgs/public/imgs/c%26d%20work%201/6.png", alt: "Cloak and Dagger NYC" },
    ],
  },
  {
    slug: "other-woman-vintage",
    title: "Other Woman Vintage",
    frontImg: "/imgs/public/imgs/selected_work/4.jpg",
    frontAlt: "Other Woman Vintage",
    tags: [{ label: "creative direction", black: false }],
    hasTitle: true,
    titleTop: true,
    gallery: [
      { src: "/imgs/public/imgs/selected_work/4.jpg", alt: "Other Woman Vintage" },
    ],
  },
  {
    slug: "winkd",
    title: "winkd",
    frontImg: "/imgs/public/imgs/selected_work/5.png",
    frontAlt: "winkd",
    tags: [
      { label: "GTM Strategy", black: false },
      { label: "Growth Marketing", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    extraClass: "dark-bg-tint",
    externalUrl: "https://www.winkd.app/",
    gallery: [
      { src: "/imgs/public/imgs/selected_work/5.png", alt: "winkd" },
    ],
  },
  {
    slug: "resume-hero",
    title: "Resume Hero",
    frontImg: "/imgs/public/imgs/selected_work/6.png",
    frontAlt: "Resume Hero",
    tags: [
      { label: "figma design", black: false },
      { label: "ASO", black: false },
    ],
    hasTitle: true,
    titleTop: true,
    extraClass: "img-top",
    externalUrl: "https://www.resume-hero.app",
    gallery: [
      { src: "/imgs/public/imgs/selected_work/6.png", alt: "Resume Hero" },
    ],
  },
];
