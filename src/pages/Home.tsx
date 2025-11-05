// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import Titulo from "../components/titulo/Titulo";

function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "fixed" }}>
        <Titulo />
        <section id="about">
          <div className="w-100% h-800"></div>
        </section>
      </div>
    </>
  );
}

export default Home;
