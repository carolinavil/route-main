import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Image from "next/image";
import Link from "next/link";

const items1 = [
  {
    title: "Crédito & Financiamentos",
    desc: "Soluções personalizadas para atender às necessidades de capital da sua empresa.",
    img: "/images/blog/financial-insurance_17522294.png",
  },
  {
    title: "Gestão Estratégica de Caixa",
    desc: "Planejamento eficiente para otimizar o fluxo de caixa corporativo.",
    img: "/images/blog/cash-deposit_17522259.png",
  },
  {
    title: "Operaçõess Estruturadas",
    desc: "Soluções sob medida para atender demandas financeiras complexas.",
    img: "/images/blog/money_8886257.png",
  },
  {
    title: "Planejamento Patrimonial e Sucessório",
    desc: "Soluções estratégicas para proteger e perpetuar o patrimônio familiar e empresarial.",
    img: "/images/blog/check_16061550.png",
  },
  {
    title: "M&A – Fusões e Aquisições",
    desc: "Consultoria especializada para estruturar, negociar operações estratégicas de compra, venda ou associação entre empresas.",
    img: "/images/blog/introduction_6234999.png",
  },
  {
    title: "Outros Produtos",
    desc: "Portfólio diversificado para maximizar oportunidades e atender às necessidades específicas do seu negócio.",
    img: "/images/blog/report_3028661.png",
  },
  {
    title: "Operações de Mercado Exterior",
    desc: "Facilitação de transações internacionais com segurança e eficiência.",
    img: "/images/blog/earth-globe_1070546.png",
  },
  {
    title: "Derivativos",
    desc: "Proteção contra oscilações de mercado por meio de estratégias financeiras avançadas.",
    img: "/images/blog/strategy_9926384.png",
  },
];

const items2 = [
  {
    title: "Fundos da Safra Asset",
    desc: "Administradora reconhecida por seu desempenho no mercado.",
    img: "/images/blog/check_16061550.png",
  },
  {
    title: "Plataforma Aberta",
    desc: "Fundos de gestores renomados, criteriosamente selecionados pelo Safra.",
    img: "/images/blog/cash-deposit_17522259.png",
  },
  {
    title: "Análise Macroeconômica",
    desc: "Nossas projeções e os fatores que podem impactar a economia.",
    img: "/images/blog/mobile-payment_8886228.png",
  },
  {
    title: "Renda Fixa",
    desc: "Variedade de produtos que combinam segurança e rentabilidade.",
    img: "/images/blog/safe-box_8886247.png",
  },
  {
    title: "Alocação Internacional",
    desc: "Exposição a ativos globais para diversificação e acesso às melhores oportunidades do mercado internacional.",
    img: "/images/blog/internet_801906.png",
  },
  {
    title: "Planejamento Patrimonial e Sucessório",
    desc: "Soluções estratégicas para proteger e perpetuar o patrimônio familiar e empresarial.",
    img: "/images/blog/check_16061550.png",
  },
  {
    title: "Investimentos Estruturados",
    desc: "Soluções sofisticadas, desenvolvidas sob medida.",
    img: "/images/blog/money_8886257.png",
  },
  {
    title: "Corretora Safra e Equipe de Research",
    desc: "Acesso ao mercado acionário com suporte do time de especialistas.",
    img: "/images/blog/search_8886237.png",
  },
];


const Blog = () => {
  return (
    <section
      id="blog"
      className="white:bg-bg-color-dark "
    >

      <div className="caixa-desktop">
      <SectionTitle
          title="Soluções Corporate"
          paragraph=""
          center

        />
  <div className="circular-container">
        <div className="center-icon">        <Image
    src="/images/blog/Route - Circulo.png"
    alt="Serviços Financeiros"
    width={800}
    height={600}
  className="object-contain"
  /></div> {/* Centro do círculo */}
      {items1.map((item, index) => {
        const angle = (index / items1.length) * 360; // ângulo de cada item
        return (
          
          
          <div
            key={index}
            className="circular-item"
            style={{
              transform: `rotate(${angle}deg) translate(310px) rotate(-${angle}deg)`,
            }}
          >
           
            <div className="item-icon foco" >
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
    
      <SectionTitle
          title="Soluções Física"
          paragraph=""
          center

        />
      <div className="circular-container">
        <div className="center-icon2 ">
          
            <Image
    src="/images/blog/Route - Circulo.png"
    alt="Serviços Financeiros"
    width={800}
    height={600}
  className="object-contain"
  /></div> {/* Centro do círculo */}
      {items2.map((item, index) => {
        const angle = (index / items1.length) * 360; // ângulo de cada item
        return (
          
          
          <div
            key={index}
            className="circular-item"
            style={{
              transform: `rotate(${angle}deg) translate(310px) rotate(-${angle}deg)`,
            }}
          >
           
            <div className="item-icon foco" >
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
    
    
      </div>
       

    <div className="caixa-mobile">
  <Image
    src="/images/blog/corporate.JPG"
    alt="Serviços Financeiros"
    width={800}
    height={600}
  className="object-contain"
  />
 <div
    className="absolute w-10 h-10 bg-orange-500 rounded-full hover:scale-110 transition-transform cursor-pointer"
    style={{
      top: "20%",  // porcentagem do alto da imagem
      left: "35%", // porcentagem da esquerda
    }}
  ></div>
      <div
    className="absolute w-10 h-10 bg-orange-500 rounded-full hover:scale-110 transition-transform cursor-pointer"
    style={{
      top: "60%",
      left: "70%",
    }}
  ></div>
       <div className="mt-[100px]">
        <SectionTitle
          title="Soluções Pessoa Física "
          paragraph=""
          center

        />
      <div
          className="corporaTeste" > <Image
            src="/images/blog/pf.JPG"
            alt="image"
            width={800}   // ajuste para o tamanho real ou desejado
            height={600}
            className="imgCorporate"
          /></div>

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
    
    </section>


















  );
};

export default Blog;
