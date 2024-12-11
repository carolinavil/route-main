import Equipe from "@/components/Equipe/Equipe";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conheça nossa equipe | Router Investimentos ",
  description: "Conheça nossa equipe de profissionais",
  // other metadata
};

const WeAre = () => {
  return (
    <>
      <Breadcrumb
        pageName="Equipe"
        description="Conheça nossa equipe de profissionais"
      />
      <Equipe />
    </>
  );
};

export default WeAre;
