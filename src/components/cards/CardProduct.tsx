import SpotlightCard from "./spotlightcard/SpotlightCard";
import { Icon as PhosphorIcon } from "phosphor-icons-react";

interface CardProductProps {
  Icon?: PhosphorIcon;
  size: number;
  color: string;
  titulo: string;
  texto: string;
}

function CardProduct({ titulo, texto, Icon, size, color }: CardProductProps) {
  return (
    <>
      <SpotlightCard
        className="custom-spotlight-card w-100 h-90"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="">
          <Icon size={size} color={color} />
        </div>
        <div>
          <h2 className="font-bold text-3xl mb-5 text-(var(--fourth)) text-left">
            {" "}
            {titulo}{" "}
          </h2>
        </div>

        <div>
          <h3 className="text-2xl text-justify text-[#f2ae30] text-left">
            {" "}
            {texto}{" "}
          </h3>
        </div>
      </SpotlightCard>
    </>
  );
}

export default CardProduct;
