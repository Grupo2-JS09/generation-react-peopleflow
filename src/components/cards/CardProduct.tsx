import SpotlightCard from "./spotlightcard/SpotlightCard";
import { Icon as PhosphorIcon } from "phosphor-icons-react";

interface CardProductProps {
  Icon: PhosphorIcon;
  size: number;
  titulo: string;
  texto: string;
}

function CardProduct({ titulo, texto, Icon, size }: CardProductProps) {
  return (
    <>
      <SpotlightCard
        className="custom-spotlight-card w-90 h-80"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div>
          <Icon size={size} />
        </div>
        <div>
          <h2 className="font-bold text-3xl text-center mb-5 text-[#f29a2e]">
            {" "}
            {titulo}{" "}
          </h2>
        </div>

        <div>
          <h3 className="text-2xl text-justify text-[#f2ae30]"> {texto} </h3>
        </div>
      </SpotlightCard>
    </>
  );
}

export default CardProduct;
