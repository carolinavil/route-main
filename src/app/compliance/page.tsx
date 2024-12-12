import ComplianceSectionTwo from "@/components/Compliance/ComplianceSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance | Route Investimentos ",
  description: "Acreditamos que a integridade é a chave para construir relacionamentos duradouros com nossos clientes.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Compliance"
        description="Conheça nossas soluções e ações para construir uma marca e negócio pautados na ética e boa conduta."
      />
      <ComplianceSectionTwo />
    </>
  );
};

export default AboutPage;
