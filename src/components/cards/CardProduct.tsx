import SpotlightCard from "./spotlightcard/SpotlightCard";

interface CardProductProps{
  titulo: string;
  texto: string;
}

function CardProduct({ titulo, texto }: CardProductProps) {
  return (
    <>
      <SpotlightCard
        className="custom-spotlight-card w-70 h-100"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div>
          <h2 className="font-bold text-3xl"> {titulo} </h2>
        </div>

        <div>
          <h3 className="text-2xl"> {texto} </h3>
        </div>

      </SpotlightCard>
    </>
  );
}

export default CardProduct;
