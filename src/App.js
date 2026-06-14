import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutHome from "./components/AboutHome";
import Services from "./components/Services";

import About from "./components/AboutUs";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import HomeContact from "./components/HomeContact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import WhatsApp from "./components/Whatsapp";
import Donate from "./components/Donate";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />

      <AboutHome />
      <Services />
      <Resources />
      <HomeContact />
      <Footer />  
      <WhatsApp />





























































    </>
  );
}

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>

    </Router>
  );
}

export default App;