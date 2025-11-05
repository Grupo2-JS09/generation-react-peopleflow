import { UserCircleCheckIcon } from "@phosphor-icons/react";
import CardProduct from "../components/cards/CardProduct";

function Sobre() {
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-6xl mb-5">
          Sobre a RH Solutions
        </h2>
        <p className="text-justify">
          Somos uma empresa dedicada a transformar a gestão de recursos humanos
          através de tecnologia inovadora e soluções inteligentes.
        </p>
      </div>

      <div className="grid grid-cols-1 min-[829px]:grid-cols-2 min-[1357px]:grid-cols-3 justify-items-center gap-10 w-auto p-5">
        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Cadastro de Funcionários"
          texto=" Sistema completo para cadastrar e gerenciar informaçõse de todos os colaboradores de forma rápida e segura."
        />
        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Cadastro de Funcionários"
          texto=" Sistema completo para cadastrar e gerenciar informaçõse de todos os colaboradores de forma rápida e segura."
        />

        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Cadastro de Funcionários"
          texto=" Sistema completo para cadastrar e gerenciar informaçõse de todos os colaboradores de forma rápida e segura."
        />
      </div>

      <div>
        <h2 className="text-center font-bold text-6xl mb-5">Nossa História</h2>

        <p className="text-justify">
          Fundada em 2020, a People Flow nasceu da necessidade de tornar a
          gestão de recursos humanos mais acessível e eficiente para empresas de
          todos os tamanhos. Nossa equipe combina experiência em RH com
          expertise tecnológica para criar soluções que realmente fazem a
          diferença no dia a dia das organizações. Hoje, atendemos mais de 500
          empresas em todo o Brasil, ajudando-as a gerenciar suas equipes com
          mais eficiência e segurança.
        </p>
      </div>
    </>
  );
}

export default Sobre;
