import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em contato | Router Investimentos ",
  description: "Nossa equipe de atendimento está preparada para te atender.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Entre em contato"
        description="Nossa equipe de atendimento está preparada para te atender. Entre em contato através do formulário, pelo telefone (21) 2042-4450
ou pelo email contato@routeinvestimentos.com.br"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
