import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

        {/* CENTER LOGO */}
   <a
  href="/"
  className="nav-logo"
  style={{ backgroundImage: "url('/assets/logoDavid.png')" }}
></a>

        {/* RIGHT LINKS */}
        <div className="nav-right">
          {/* <a href="/events">EVENTS</a> */}
          <a href="/About">ABOUT US</a>
          <a href="/Contact">CONTACT</a>
  <a href="/Donate" className="donate-nav-btn">
    DONATE
  </a>

        </div>

      </div>

    </div>
  );
}

export default Navbar;