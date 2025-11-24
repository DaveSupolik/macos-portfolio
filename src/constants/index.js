// ====================================================================
// NOVÉ IMPORTY ASSETŮ (musíte se ujistit, že existují ve správné cestě)
// ====================================================================

// --- NAV/DOCK/SOCIAL IKONY (Icons) ---
import wifiIcon from "../icons/wifi.svg";
import searchIcon from "../icons/search.svg";
import userIcon from "../icons/user.svg";
import modeIcon from "../icons/mode.svg";
import githubIcon from "../icons/github.svg";
import atomIcon from "../icons/atom.svg";
import twitterIcon from "../icons/twitter.svg";
import linkedinIcon from "../icons/linkedin.svg";
import gicon1 from "../icons/gicon1.svg";
import gicon2 from "../icons/gicon2.svg";
import fileIcon from "../icons/file.svg";
import gicon4 from "../icons/gicon4.svg";
import gicon5 from "../icons/gicon5.svg";
import workIcon from "../icons/work.svg";
import infoIcon from "../icons/info.svg";
import trashIcon from "../icons/trash.svg";

// --- DOCK APP IKONY (Images) ---
import finderIcon from "../images/finder.png";
import safariIcon from "../images/safari.png";
import photosIcon from "../images/photos.png";
import contactIcon from "../images/contact.png";
import terminalIcon from "../images/terminal.png";
import trashAppIcon from "../images/trash.png"; // Ikona koše, pokud je potřeba

// --- OSTATNÍ OBRÁZKY (Images) ---
import blog1Image from "../images/blog1.png";
import blog2Image from "../images/blog2.png";
import blog3Image from "../images/blog3.jpg";
import gal1Image from "../images/gal1.png";
import gal2Image from "../images/gal2.png";
import gal3Image from "../images/gal3.png";
import gal4Image from "../images/gal4.png";
import folderImage from "../images/folder.png";
import txtImage from "../images/txt.png";
import imageImage from "../images/image.png";
import plainImage from "../images/plain.png";
import pdfImage from "../images/pdf.png";
import project1Image from "../images/project-1.jpg";
import project2Image from "../images/project-2.jpg";
import project3Image from "../images/project-3.jpg";
import daveImage from "../images/dave.jpg";
import dave2Image from "../images/dave-2.jpg";
import dave3Image from "../images/dave-3.jpeg";
import trash1Image from "../images/trash-1.png";
import trash2Image from "../images/trash-2.png";
// ====================================================================

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: wifiIcon, // OPRAVENO
  },
  {
    id: 2,
    img: searchIcon, // OPRAVENO
  },
  {
    id: 3,
    img: userIcon, // OPRAVENO
  },
  {
    id: 4,
    img: modeIcon, // OPRAVENO
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: finderIcon, // OPRAVENO
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: safariIcon, // OPRAVENO
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: photosIcon, // OPRAVENO
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: contactIcon, // OPRAVENO
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: terminalIcon, // OPRAVENO
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: trashAppIcon, // OPRAVENO (předpokládám, že dock ikona koše je také soubor)
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "Tailwind CSS in Enterprise Projects: A Scalable Configuration",
    image: blog1Image, // OPRAVENO
    link: null,
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "Type-Safe React: How TypeScript Prevents Production Bugs",
    image: blog2Image, // OPRAVENO
    link: null,
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title:
      "Server Components vs. Client Components in Next.js 14: A Practical Guide",
    image: blog3Image, // OPRAVENO
    link: null,
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: githubIcon, // OPRAVENO
    bg: "#f4656b",
    link: null,
  },
  {
    id: 2,
    text: "Platform",
    icon: atomIcon, // OPRAVENO
    bg: "#4bcb63",
    link: null,
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: twitterIcon, // OPRAVENO
    bg: "#ff866b",
    link: null,
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: linkedinIcon, // OPRAVENO
    bg: "#05b6f6",
    link: null,
  },
];

const photosLinks = [
  {
    id: 1,
    icon: gicon1, // OPRAVENO
    title: "Library",
  },
  {
    id: 2,
    icon: gicon2, // OPRAVENO
    title: "Memories",
  },
  {
    id: 3,
    icon: fileIcon, // OPRAVENO
    title: "Places",
  },
  {
    id: 4,
    icon: gicon4, // OPRAVENO
    title: "People",
  },
  {
    id: 5,
    icon: gicon5, // OPRAVENO
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: gal1Image, // OPRAVENO
  },
  {
    id: 2,
    img: gal2Image, // OPRAVENO
  },
  {
    id: 3,
    img: gal3Image, // OPRAVENO
  },
  {
    id: 4,
    img: gal4Image, // OPRAVENO
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: workIcon, // OPRAVENO
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Lorem Ipsum Lorem Ipsum",
      icon: folderImage, // OPRAVENO
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Lorem Ipsum Project.txt",
          icon: txtImage, // OPRAVENO
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
          ],
        },
        {
          id: 2,
          name: "Lorem Ipsum.com",
          icon: safariIcon, // OPRAVENO (použito z DockApps, předpokládám stejnou ikonu)
          kind: "file",
          fileType: "url",
          href: "https://www.google.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Lorem Ipsum.png",
          icon: imageImage, // OPRAVENO
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project1Image, // OPRAVENO
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImage, // OPRAVENO
          kind: "file",
          fileType: "fig",
          href: "https://www.google.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Lorem Ipsum",
      icon: folderImage, // OPRAVENO
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Lorem Ipsum Project.txt",
          icon: txtImage, // OPRAVENO
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
          ],
        },
        {
          id: 2,
          name: "Lorem Ipsum.com",
          icon: safariIcon, // OPRAVENO
          kind: "file",
          fileType: "url",
          href: "https://www.google.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Lorem Ipsum.png",
          icon: imageImage, // OPRAVENO
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: project2Image, // OPRAVENO
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImage, // OPRAVENO
          kind: "file",
          fileType: "fig",
          href: "https://www.google.com/",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Lorem Ipsum App",
      icon: folderImage, // OPRAVENO
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Lorem Ipsum App Project.txt",
          icon: txtImage, // OPRAVENO
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.",
            "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
          ],
        },
        {
          id: 2,
          name: "Lorem Ipsum.com",
          icon: safariIcon, // OPRAVENO
          kind: "file",
          fileType: "url",
          href: "https://www.google.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Lorem Ipsum.png",
          icon: imageImage, // OPRAVENO
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project3Image, // OPRAVENO
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImage, // OPRAVENO
          kind: "file",
          fileType: "fig",
          href: "https://www.google.com/",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: infoIcon, // OPRAVENO
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: imageImage, // OPRAVENO
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: daveImage, // OPRAVENO
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: imageImage, // OPRAVENO
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: dave2Image, // OPRAVENO
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: imageImage, // OPRAVENO
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: dave3Image, // OPRAVENO
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: txtImage, // OPRAVENO
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Lorem Ipsum Lorem Ipsum",
      image: daveImage, // OPRAVENO
      description: [
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.",
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: fileIcon, // OPRAVENO
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: pdfImage, // OPRAVENO
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: trashIcon, // OPRAVENO
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: imageImage, // OPRAVENO
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: trash1Image, // OPRAVENO
    },
    {
      id: 2,
      name: "trash2.png",
      icon: imageImage, // OPRAVENO
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: trash2Image, // OPRAVENO
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
