
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./compenent/Navbar/Navbar";
import Footer from "./compenent/Footer/Footer";

import Projects from "./compenent/Project/Project";
import About from "./compenent/About/About";
import Expirment from "./compenent/Expirment/Expirment";
import Resume from "./compenent/Resume/Resume";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Projects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Expirment" element={<Expirment />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent text-gray-900">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
