import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiquidEther from "./components/background/liquidether/LiquidEther";
import Footer from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
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
      </div>
      <BrowserRouter>
        <Menu />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
