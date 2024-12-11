import OndeSectionOne from "@/components/OndeEstamos/OndeSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onde estamos | Router Investimentos ",
  description: "Conheça nossos escritórios",
  // other metadata
};

const WeAre = () => {
  return (
    <>
      <Breadcrumb
        pageName="Onde estamos"
        description="Conheça nossos escritórios"
      />
      <OndeSectionOne />
    </>
  );
};

export default WeAre;
