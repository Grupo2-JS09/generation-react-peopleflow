// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import Carousel from "../components/carousel/Carousel";
import Titulo from "../components/titulo/Titulo";

function Home() {
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh", position: "fixed" }}
        className='flex-auto'
      >
        <Titulo />
        <div className='absolute right-10 w-200 size-20'>
          <Carousel
            slides={[
              {
                image: "/src/assets/img/img1.png",
                text: "Transformando gestão de pessoas"
              },
              {
                image: "/src/assets/img/img2.png",
                text: ""
              },
              {
                image: "/src/assets/img/img3.jpg",
                text: "Tecnologia para o seu time"
              }
            ]}
          />
        </div>
        <section id='about'>
          <div className='w-100% h-800'></div>
        </section>
      </div>
    </>
  );
}

export default Home;
