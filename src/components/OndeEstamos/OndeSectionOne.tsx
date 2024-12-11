import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const OndeSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* Desktop map */}
            <div className="w-full hidden md:block px-4 lg:w-1/2">
              <div>
                <Image src="./images/map/map-nordeste.png" alt="map" width={500} height={500} />
                <div className="flex pt-5">
                  <Image src="./images/map/point.png" alt="map" width={15} height={15} />
                  <span className="text-body-color">&nbsp; Nosso escritório</span>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center rounded-xl bg-[#011e62] px-2 py-2 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  </span>
                  <span className="text-body-color">
                    &nbsp; Nossa área de atendimento presencial <br />
                    <small><b>*</b> Estamos disponíveis para visitá-los em qualquer região do país com agendamento antecipado.</small>
                  </span>
                </div>
                <div className="pt-10 text-black">
                  <b>Conheça nosso escritório: </b> <br />
                  <a 
                    href="https://maps.app.goo.gl/otEcbq6nTKK3EMkj6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color hover:text-primary hover:underline underline-offset-1"
                  >
                    Avenida das Américas, 3434 - Bloco 4, Sala 316, Barra da Tijuca - Rio de Janeiro
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Estamos perto de você"
                paragraph="Acreditamos na pluralidade para alcançar pessoas e democratizar a assessoria de investimentos. Falamos de dinheiro da melhor forma para cada perfil de cliente, valorizando sotaques, cultura e níveis de conhecimento. Por isso, estaremos sempre à sua disposição, onde quer que seja, para recebê-lo (a) ou visitá-lo (a). Te aguardamos para um café e será uma honra recebê-lo (a) em nosso escritório, localizado em um dos principais polos comercial e financeiro do país, no Rio de Janeiro."
                mb="44px"
              />
            </div>
            
            {/* Mobile map */}
            <div className="w-full block md:hidden px-4 lg:w-1/2">
              <div>
                <Image src="./images/map/map-nordeste.png" alt="map" width={500} height={500} />
                <div className="flex pt-5">
                  <Image src="./images/map/point.png" alt="map" width={15} height={15} />
                  <span>&nbsp; Nosso escritório</span>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center rounded-xl bg-[#011e62] px-2 py-2 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  </span>
                  <span>
                    &nbsp; Nossa área de atendimento presencial <br/>
                    <small className="text-body-color">Estamos disponíveis para visitá-los em qualquer região do país com agendamento antecipado.</small>
                  </span>
                </div>
                <div className="pt-10">
                  <b>Conheça nosso escritório: </b> <br />
                  <a 
                    href="https://maps.app.goo.gl/otEcbq6nTKK3EMkj6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      textDecoration: 'underline',
                    }}
                  >
                    Avenida das Américas, 3434 - Bloco 4, Sala 316, Barra da Tijuca - Rio de Janeiro, RJ, CEP 22631-000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OndeSectionOne;
