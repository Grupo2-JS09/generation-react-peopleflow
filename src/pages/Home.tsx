// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import Carousel from "../components/carousel/Carousel";
import Titulo from "../components/titulo/Titulo";
import Servicos from "./Servicos";
import Sobre from "./Sobre";

function Home() {
  return (
    <>
      <div className='flex justify-around w-auto h-auto'>
        <div className=''>
          <Titulo />
        </div>

        <div className='w-200 size-20'>
          <Carousel
            slides={[
              {
                image: "https://i.imgur.com/ZXAYWAe.png",
                text: "Transformando gestão de pessoas"
              },
              {
                image: "https://i.imgur.com/Y5j6ACc.png",
                text: "Plataforma People Flow"
              },
              {
                image: "https://i.imgur.com/7f9WtAs.png",
                text: "Tecnologia para o seu time"
              }
            ]}
          />
        </div>
      </div>

      <section id='sobre'>
        <Sobre />
      </section>

      <section id='servico'>
        <Servicos />
      </section>
    </>
  );
}

export default Home;
