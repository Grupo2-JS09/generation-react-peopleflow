import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import Home from "./pages/Home";
import Produto from "./pages/ListaProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sobre" element={<Sobre />} /> */}
            <Route path="/produto" element={<Produto />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
