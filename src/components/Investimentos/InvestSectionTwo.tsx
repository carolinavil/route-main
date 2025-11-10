import Image from "next/image";
import Link from "next/link";
import Blog from "../Services";
import HomeSectionTwo from '@/components/HomeSections/HomeSectionTwo';

const InvestSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
  <div className="corporateTeste">
       <Blog />
    </div>
       
        {/* Tesouro direto */}
        {/* <div className="flex flex-wrap items-center md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-1.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Tesouro Direto
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Programa do Tesouro Nacional que permite a compra de títulos de dívida do governo federal de diversas modalidades diferentes para pessoas físicas através de bancos e corretoras de valores.
                </p>
              </div>              
            </div>
          </div>
        </div> */}

        Renda fixa
        <div className="flex flex-wrap items-center mt-10 md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-2.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Renda Fixa
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Um título de Renda Fixa é todo tipo de dívida que possui regras e características pré-definidas. Na hora de aplicar, o investidor já conhece o prazo, a taxa de rendimento, a forma de remuneração e a saúde financeira da emissora do papel. É uma forma de captação de recursos para bancos e empresas através do mercado financeiro.
                </p>
              </div>              
            </div>
          </div>
        </div>

        {/* Fundos de Investimentos */}
        <div className="flex flex-wrap items-center mt-10 md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-3.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Fundos de Investimentos
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Os Fundos de Investimentos são condomínios de investimentos onde uma gestora profissional capta recursos de investidores no mercado para alocá-los de forma eficiente através de suas estratégias.
                </p>
              </div>              
            </div>
          </div>
        </div>

     
        {/* <div className="flex flex-wrap items-center mt-10 md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-4.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Renda Variável
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Renda Variável são investimentos sem ganhos fixos ou garantia de retorno do capital aplicado. Seu valor depende das negociações no mercado, como na Bolsa de Valores, e podem ter diferentes regras e características.
                </p>
              </div>              
            </div>
          </div>
        </div>

      
        <div className="flex flex-wrap items-center mt-10 md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-5.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Fundos Imobiliários
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  O Fundo de Investimento Imobiliário (FII) é um pool de recursos destinado a investimentos no mercado imobiliário, incluindo a aquisição de imóveis urbanos ou rurais, construídos ou em construção, para fins comerciais ou residenciais, além de títulos de dívida do setor imobiliário.
                </p>
              </div>              
            </div>
          </div>
        </div> */}

        {/* Certificados de Operações Estruturadas */}
        <div className="flex flex-wrap items-center mb-16 mt-10 md:mx-12 border rounded-xl">
          <div className="w-full lg:w-1/2">
            <div
              className="relative mx-auto mb-12 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/investimentos/photo-6.png"
                alt="about image"
                width={500}
                height={320}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
          </div>
          <div className="w-full px-10 lg:w-1/2">
            <div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl border-l-4 border-primary font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                &nbsp;&nbsp;Soluções Corporate
                </h3>
                <p className="text-base font-small leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Soluções Corporate em investimentos são estratégias personalizadas para empresas de médio a grande porte, focadas em otimizar alocação de recursos, reduzir riscos e maximizar retornos, alinhadas aos objetivos específicos de cada empresa.
                </p>
              </div>              
            </div>
          </div>
        </div>
    </div>
  
          <div className="container">
        <HomeSectionTwo />
      </div>
   
    </section>
  );
};

export default InvestSectionTwo;
