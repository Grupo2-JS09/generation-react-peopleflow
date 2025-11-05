import CardProduct from "../components/cards/CardProduct";
import {
  UserCircleCheckIcon,
  UsersIcon,
  ChartLineUpIcon,
  ClockCountdownIcon,
  FileCloudIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";

function ListaProduto() {
  return (
    <>
      <div className="grid grid-cols-1 min-[829px]:grid-cols-2 min-[1357px]:grid-cols-3 justify-items-center gap-10 w-auto p-5">
        <CardProduct
          Icon={UserCircleCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Cadastro de Funcionários"
          texto=" Sistema completo para cadastrar e gerenciar informaçõse de todos os colaboradores de forma rápida e segura."
        />
        <CardProduct
          Icon={UsersIcon}
          size={34}
          color="#f29a2e"
          titulo="Gestão de Equipes"
          texto="Organize departamentos, equipes e hierarquias com visualizações clara e intuirivas."
        />

        <CardProduct
          Icon={ChartLineUpIcon}
          size={34}
          color="#f29a2e"
          titulo="Relatorio e Analytics"
          texto="DashBoard Completos com métricas e indicadores para tomadas de decisões estratégicas."
        />
        <CardProduct
          Icon={ClockCountdownIcon}
          size={34}
          color="#f29a2e"
          titulo="Controle de Ponto"
          texto="Registre e Acompanhe jornadas de trabalho, horas extras e banco de horas automaticamente."
        />
        <CardProduct
          Icon={FileCloudIcon}
          size={34}
          color="#f29a2e"
          titulo="Documentação Digital"
          texto="Armazenie e gerencie documentos dos funcionários com segurança e acessibilidade."
        />
        <CardProduct
          Icon={ShieldCheckIcon}
          size={34}
          color="#f29a2e"
          titulo="Segurança e Compiliance"
          texto="Total conformidade comLGPD e normnas trabalhistas, garantindo a privacidade dos dados."
        />
      </div>
    </>
  );
}

export default ListaProduto;
