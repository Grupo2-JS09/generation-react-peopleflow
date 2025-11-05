// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import Carousel from "../components/carousel/Carousel";
import Titulo from "../components/titulo/Titulo";

function Home() {
  return (
    <>
      <div
        className='flex justify-around w-full h-screen'
      >
        <Titulo />
        <div className='w-200 size-20'>
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
      </div>
    </>
  );
}

export default Home;
