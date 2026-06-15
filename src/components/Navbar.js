import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-main">

        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="Camp David Global Home">
          <img
            src="/assets/logoDavid.png"
            alt="Camp David Global Logo"
            className="nav-logo-img"
          />
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <a href="/About" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </a>

          <a href="/Contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>

          <a
            href="/Donate"
            className="donate-nav-btn"
            onClick={() => setMenuOpen(false)}
          >
            DONATE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
