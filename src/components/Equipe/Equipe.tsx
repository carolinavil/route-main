import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import Principios from './Principios';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Equipe = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="">
      <div className="container">
        <div className="bg-white py-24 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Nossa equipe</h2>
              <p className="mt-6 text-md font-medium leading-8 text-body-color">Profissionais altamente capacitados e reconhecidos no mercado financeiro nacional, com vasta experiência em Bancos e Corretoras de primeira linha. Diretores comprometidos com o sucesso dos clientes internos e externos, assessores próximos no seu dia a dia, conceituados e um time de especialistas de backoffice preparado, que tem como objetivo solidificar uma assessoria de investimentos capaz de entender para atender com excelência todos os perfis de investidores, no Brasil e no exterior.</p>
            </div>
            <ul role="list" className="grid px-10 gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:row-span-2">
              
              {/* Alexandre Mori */}
              <li>
                <div className="flex flex-col items-center">
                <Image 
                    className="w-full  rounded-3xl" 
                    src="/images/equipe/daniel.jpeg" 
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="w-full pt-5">
                    <h3 className="text-2xl font-semibold leading-10 tracking-tight text-gray-900">Daniel Borges</h3>
                    <p className="text-lg font-medium leading-6 text-primary">Sócio-Diretor & Assessor de Investimentos</p>
                  </div>

               
                  <div className="w-full flex flex-row pt-5">

                   

                    
                    <a
                      href="https://www.linkedin.com/in/daniborgesss?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li> 

              {/* Carlos */}
           

              {/* Victor Sampaio */}
              <li>
                <div className="flex flex-col items-center">
                <Image 
                    className="w-full rounded-3xl" 
                    src="/images/equipe/suellen.jpeg" 
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="w-full pt-5">
                    <h3 className="text-2xl font-semibold leading-10 tracking-tight text-gray-900">Suellen Melo</h3>
                    <p className="text-lg font-medium leading-6 text-primary">Sócia & Assessora de Investimentos</p>
                  </div>

               
                  <div className="w-full flex flex-row pt-5">

                  
                    <a
                      href="https://www.linkedin.com/in/suellen-melo-231786308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li> 

              <li>
                <div className="flex flex-col items-center">
                <Image 
                    className="w-full rounded-3xl" 
                    src="/images/equipe/yuri.jpeg" 
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div className="w-full pt-5">
                    <h3 className="text-2xl font-semibold leading-10 tracking-tight text-gray-900">Yuri Sathler</h3>
                    <p className="text-lg font-medium leading-6 text-primary">Sócio & Assessor de Investimentos</p>
                  </div>

               
                  <div className="w-full flex flex-row pt-5">

                  
                    <a
                      href="https://www.linkedin.com/in/yuri-sathler-147043150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      aria-label="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 17 16"
                        className="fill-current"
                      >
                        <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>




            <ul role="list" className="grid px-10 gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:row-span-2">
              
              {/* Alexandre Mori */}
              <li>
                <div className="flex flex-col items-center">
                <Image 
                    className="w-full  rounded-3xl" 
                    src="/images/equipe/equipe1.jpeg" 
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </li> 

              {/* Carlos */}
           

              {/* Victor Sampaio */}
              <li>
                <div className="flex flex-col items-center">
                <Image 
                    className="w-full rounded-3xl" 
                    src="/images/equipe/equipe2.jpeg" 
                    alt=""
                    width={100}
                    height={100}
                  />
              
                </div>
              </li> 

             
            </ul>
          </div>
          <Principios />
        </div>
      </div>
    </section>
  );
};

export default Equipe;
