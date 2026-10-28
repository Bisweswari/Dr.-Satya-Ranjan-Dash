import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Clubs from "./pages/Clubs";
import Workshops from "./pages/Workshops";
import Forums from "./pages/Forums";

import BeyondAcademia from "./pages/BeyondAcademia";

import Scholars from "./pages/Scholars";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/beyond-academia" element={<BeyondAcademia />} />
        <Route path="/scholars" element={<Scholars />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
