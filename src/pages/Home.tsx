// @ts-ignore: no declaration file for '../components/background/LiquidEther'
import LiquidEther from "../components/background/liquidether/LiquidEther";
import Titulo from "../components/titulo/Titulo";

function Home() {
  return (
    <>
      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        
      <Titulo />
      <section id="about">
        <div className="border-8 w-200 h-800"></div>
      </section>
      </div>

    </>
  );
}

export default Home;
