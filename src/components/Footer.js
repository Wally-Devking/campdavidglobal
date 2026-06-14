import "../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="footer-logo">
            <img
              src="/assets/logoDavid.png"
              alt="CampDavid Logo"
            />
          </div>

          <p>
            CampDavid Global Bible School is committed to raising
            spiritually grounded believers through biblical teaching,
            discipleship, leadership training, and kingdom impact.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          {/* <a href="/admissions">Admissions</a>
          <a href="/programs">Programs</a> */}

        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">

          <h3>Contact</h3>

          <p>info@campdavid.org</p>
          <p>+234 800 000 0000</p>
          <p>Lagos, Nigeria</p>

        </div>

        {/* SOCIALS */}
        <div className="footer-socials">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaYoutube />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>

          </div>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="footer-youtube-btn"
          >
            Watch Sermons
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 CampDavid Global Bible School. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;