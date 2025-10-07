import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <section
      id="blog"
      className="white:bg-bg-color-dark "
    >
      <div >
        <SectionTitle
          title="Soluções Corporate"
          paragraph=""
          center

        />

  <div className="relative w-full max-w-[800px] mx-auto">
  <Image
    src="/images/blog/corporate.JPG"
    alt="Serviços Financeiros"
    width={800}
    height={600}
  className="object-contain"
  />

  {/* Exemplo de ícone com posição relativa à imagem */}
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
</div>


      </div>
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
    </section>



  );
};

export default Blog;
