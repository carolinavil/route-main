import Image from "next/image";
import { IconArrowRight } from '@tabler/icons-react';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/home/cellman.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/cellman.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none rounded-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl">
                  Simule e compare os seus investimentos
                </h3>
              </div>
              <div className="mb-9">
                <h3 className="mb-8 text-lg font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-1xl">
                  Acesse o nosso simulador e veja quais os melhores produtos para você investir.
                </h3>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-base max-w-[170px] flex items-center justify-center font-medium leading-relaxed bg-primary text-white py-3 px-4 sm:px-8 rounded-xl sm:text-lg sm:leading-relaxed hover:bg-blue-900 hover:justify-between">
                  <span className="mr-2">Acesse</span>
                  <IconArrowRight />
                </a>
              </div>
              <div className="mb-1">
                <h3 className="mb-8 text-lg font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-1xl">
                  Compare diferentes investimentos e saiba como fazer o seu dinheiro render mais.
                </h3>
                <a href="" target="_blank" rel="noopener noreferrer" className="text-base max-w-[190px] flex items-center justify-center font-medium leading-relaxed bg-primary text-white py-3 px-4 sm:px-8 rounded-xl sm:text-lg sm:leading-relaxed hover:bg-blue-900 hover:justify-between">
                  <span className="mr-2">Compare</span>
                  <IconArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
