import InvestSectionTwo from "@/components/Investimentos/InvestSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investimentos | Router Investimentos",
  description: "Soluções oferecidas em parceria com a Safra Invest",
  // other metadata
};

const Compliance = () => {
  return (
    <>
      <Breadcrumb
        pageName="Investimentos"
          description="Soluções oferecidas pela assessoria vinculada à Safra Invest"
      />
      <InvestSectionTwo />
    </>
  );
};

export default Compliance;
