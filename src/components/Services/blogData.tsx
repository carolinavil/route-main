import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Clássico",
    paragraph:
      "Investimentos de até R$ 300 mil. Relacionamento passivo com a equipe de assessoria da Route Investimentos e exposição à plataforma de produtos e serviços Safra.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Clássico"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Exclusivo",
    paragraph:
      "Investimentos entre R$ 1 e R$ 3 milhões. Relacionamento exclusivo e acompanhamento constante com um assessor de investimentos especializado e áreas de suporte.",
    image: "/images/blog/blog-05.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Alta Renda",
    paragraph:
      "Investimentos entre R$ 3 e R$ 10 milhões. Relacionamento próximo e ativo com um assessor de investimentos especializado e exposição à áreas satélites.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Private",
    paragraph:
      "Investimentos acima de R$ 10 milhões. Equipe altamente qualificada, soluções sob medida e relatórios diferenciados.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Corporate",
    paragraph:
      "Soluções personalizadas criadas através de profissionais especializados em atender as necessidades da empresa.",
    image: "/images/blog/blog-06.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  }
];
export default blogData;
