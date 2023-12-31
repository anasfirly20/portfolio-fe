// Assets
import belinsky from '../assets/Belinsky.webp'
import turta from "../assets/Turta.webp";
import kima from "../assets/Kima.webp";

interface IIcons {
  icon: string
}

interface IImages {
  name: string,
  img: string,
  link: string,
  desc: string,
  hash: string
}

export const icons : IIcons[] = [
  {
    icon: "simple-icons:javascript",
  },
  {
    icon: "simple-icons:typescript",
  },
  {
    icon: "simple-icons:react",
  },
  {
    icon: "simple-icons:redux",
  },
  {
    icon: "simple-icons:tailwindcss",
  },
  {
    icon: "simple-icons:antdesign",
  },
  {
    icon: "simple-icons:mui",
  },
  {
    icon: "tabler:brand-framer-motion",
  },
  {
    icon: "simple-icons:git",
  },
  {
    icon: "simple-icons:axios",
  },
  {
    icon: "simple-icons:vite",
  },
];

export const images : IImages[] = [
  {
    name: "Belinsky Studio",
    img: belinsky,
    link: "https://belinskyproduction.com/",
    desc: "Belinsky is a production house and creative studio that specializes in both professional photography and filmmaking.",
    hash: "LZLEKUWC~p%MxDofR-of_2Rjozt7",
  },
  {
    name: "TurunTangan",
    img: turta,
    link: "https://turuntangan.id/",
    desc: "TurunTangan is a non-profit youth volunteer movement with more than 70 chapters across Indonesia.",
    hash: "LONIKvRPD4xu-pVrR*Mx.mMyRPoz",
  },
  {
    name: "KIMA",
    img: kima,
    link: "https://kima.kpfu.ru/",
    desc: "KIMA is a digital platform that helps universities assess the relevance of their programs in specific fields and their alignment with the competency requirements of the job market.",
    hash: "LHO|kbNh~URP-h?vs*IU^$Sj01s;",
  },
];

export const list : string[] = [
  "Developed a fully fullstack responsive web app using React",
  "Optimized key content pages for SEO objectives",
  "Utilized Axios library to perform HTTP requests and consume RESTful APIs",
  "Integrated Tailwind CSS for responsive component-based styling",
  "Leveraged Redux Toolkit to implement a global state management solution",
];
