import "../styles/AboutHome.css";

function AboutHome() {
  return (
    <section className="dts-section">
      <div className="dts-container">

        {/* Left Image Card */}
        <div className="dts-card">
          <img
            src="/assets/Abouthome.jpg"
            alt="Find a DTS"
          />

          <div className="dts-overlay">
            {/* <h3>Find a DTS</h3> */}
            {/* <p>Let us help you find the right fit</p> */}
          </div>
        </div>

        {/* Right Content */}
        <div className="dts-content">
          <h2>
            Respond to your longing for a more intimate relationship with God
          </h2>

          <p>
            CampDavid Global Discipleship Training School gives you an
            opportunity to discover your passions and your part in God’s
            purposes for the world. It is for those who long to follow Jesus Christ more closely, to know Him more deeply, and to make Him known more effectively.
          </p>

          <a href="/about" className="see-more-btn">
            See More
          </a>
        </div>

      </div>
    </section>
  );
}

export default AboutHome;