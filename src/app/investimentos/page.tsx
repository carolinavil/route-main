import InvestSectionTwo from "@/components/Investimentos/InvestSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções | Route Investimentos",
  description: "Soluções oferecidas em parceria com a Safra.",
  // other metadata
};

const Compliance = () => {
  
  console.log("Componente de Investimentos renderizado");
  
  return (
    <>
      <Breadcrumb
        pageName="Soluções"
          description="Soluções oferecidas pela assessoria vinculada à Safra."
      />
      <InvestSectionTwo />
    </>
  );
};

export default Compliance;
