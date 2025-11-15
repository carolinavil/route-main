import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
 {
    id: 2,
    title: "Sobre nós",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Compliance",
        path: "/compliance", /* https://verbumcapital.com */
        newTab: false,
      },
      {
        id: 12,
        title: "Equipe",
        path: "/equipe",
        newTab: false,
      },
      {
        id: 13,
        title: "Onde estamos",
        path: "/onde-estamos",
        newTab: false,
      },
    ],
  },
 
    {
    id: 3,
    title: "Soluções",
    path: "/investimentos",
    newTab: false,
  },
   {
    id: 4,
    title: "Contato",
    path: "/contato",
    newTab: false,
  },
 
  {
    id:5,
    title: "Conteúdo",
    path: "https://blog.routeinvestimentos.com.br",
    newTab: false,
  },


  /* {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 32,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 33,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 34,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 35,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 36,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 37,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 38,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  }, */
];
export default menuData;
