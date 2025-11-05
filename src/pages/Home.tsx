// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import Carousel from "../components/carousel/Carousel";
import Titulo from "../components/titulo/Titulo";
import Servicos from "./Servicos";

function Home() {
  return (
    <>
      <div className="flex justify-around w-auto h-auto">
        <div className="">
          <Titulo />
        </div>

        <div className="w-200 size-20">
          <Carousel
            slides={[
              {
                image: "/src/assets/img/img1.png",
                text: "Transformando gestão de pessoas",
              },
              {
                image: "/src/assets/img/img2.png",
                text: "",
              },
              {
                image: "/src/assets/img/img4.png",
                text: "Tecnologia para o seu time",
              },
            ]}
          />
        </div>
      </div>

      <div id="servico">
        <Servicos />
      </div>
    </>
  );
}

export default Home;
