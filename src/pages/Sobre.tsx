import { UserCircleCheckIcon } from "@phosphor-icons/react";
import CardProduct from "../components/cards/CardProduct";

function Sobre() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-center font-bold text-6xl mb-5">
          Sobre a People Flow
        </h2>

        <div
          className="p-8 rounded-2xl shadow-xl shadow-black/20 m-12"
          style={{
            background:
              "linear-gradient(135deg, var(--secondary), var(--primary))",
          }}
        >
          <p className="text-center text-2xl text-(var(--fourth))">
            Somos uma empresa dedicada a transformar a gestão de recursos
            humanos através de tecnologia inovadora e soluções inteligentes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 min-[829px]:grid-cols-2 min-[1357px]:grid-cols-3 justify-items-center gap-10 w-auto p-5">
        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Nossa Missão"
          texto="Promover soluções eficientes em gestão de pessoas, simplificando processos e fortalecendo o papel estratégico do RH nas organizações."
        />

        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Nossa Visão"
          texto="Ser referência em inovação e tecnologia aplicada ao RH, contribuindo para ambientes de trabalho mais humanos, produtivos e colaborativos."
        />

        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Nossos Valores"
          texto="Ética, transparência, respeito às pessoas, inovação contínua e compromisso com resultados que geram impacto real."
        />
      </div>

      <div>
        <h2 className="text-center font-bold text-6xl mb-5">Nossa História</h2>

        <div
          className="p-8 rounded-2xl shadow-xl shadow-black/20 m-12"
          style={{
            background:
              "linear-gradient(135deg, var(--secondary), var(--primary))",
          }}
        >
          <p className="text-center text-2xl text-(var(--fourth))">
            Fundada em 2020, a People Flow nasceu da necessidade de tornar a
            gestão de recursos humanos mais acessível e eficiente para empresas
            de todos os tamanhos. Nossa equipe combina experiência em RH com
            expertise tecnológica para criar soluções que realmente fazem a
            diferença no dia a dia das organizações. Hoje, atendemos mais de 500
            empresas em todo o Brasil, ajudando-as a gerenciar suas equipes com
            mais eficiência e segurança.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sobre;
