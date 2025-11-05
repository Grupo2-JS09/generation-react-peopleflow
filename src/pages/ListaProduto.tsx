import CardProduct from "../components/cards/CardProduct";
import { LinkedinLogoIcon } from "@phosphor-icons/react";

function ListaProduto() {
  return (
    <>
      <div className="grid grid-cols-1 min-[731px]:grid-cols-2 min-[1457px]:grid-cols-4 justify-items-center gap-10 w-auto p-5">
        <div>
          <CardProduct
            Icon={LinkedinLogoIcon}
            size={24}
            titulo="Gestão Simplificada"
            texto=" Saiba quem está presente e acompanhe o status de cada colaborador de forma rápida e eficiente."
          />
        </div>
        <CardProduct
          Icon={LinkedinLogoIcon}
          size={24}
          titulo="Modernizar seu RH"
          texto="Dê um passo à frente com uma solução que reflete o dinamismo da sua empresa."
        />
        <CardProduct
          Icon={LinkedinLogoIcon}
          size={24}
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
        <CardProduct
          Icon={LinkedinLogoIcon}
          size={24}
          titulo="Teste de titulo"
          texto="Texto de pbkrngfjnf"
        />
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          cumque, perferendis quidem recusandae minima dolores quam atque soluta
          et nostrum fuga aliquid dicta sed voluptatem libero dignissimos ut,
          qui numquam!
        </p>
      </div>
    </>
  );
}

export default ListaProduto;
