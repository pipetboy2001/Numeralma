import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Compatibility from "./pages/Compatibility";
import About from "./pages/About";
import "./styles/globals.css";

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compatibilidad" element={<Compatibility />} />
          <Route path="/acerca" element={<About />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}