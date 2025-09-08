import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Image from "next/image";
const Blog = () => {
  return (
    <section
      id="blog"
      className="white:bg-bg-color-dark "
    >
      <div >
        <SectionTitle
          title="Produtos Corporate"
          paragraph=""
          center
        
        />

        <div
       className="corporaTeste" > <Image
                                src="/images/blog/corporate.JPG"
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
       <div  className="mt-[100px]">
        <SectionTitle
          title="Produtos pessoa física"
          paragraph="Como uma pessoa física
           pode contar com diferentes serviços para crescer e se proteger no mercado"
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
