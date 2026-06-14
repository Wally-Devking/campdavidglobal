import "../styles/Donate.css";
import Footer from "./Footer";
import Marquee from "./Marquee";

function Donate() {
  return (
    <div className="donate-page">

      {/* HERO */}
      <section className="donate-hero">

        <div className="donate-overlay">

          <p className="donate-subtitle">
            Support The Vision
          </p>

          <h1>
            Partner With CampDavid Global Bible School
          </h1>

          <p>
            Your giving helps us raise kingdom leaders, provide biblical
            training, organize conferences, support ministry outreach,
            and impact lives globally through the Word of God.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="donate-content">

        <div className="donate-intro">

          <h2>
            Why Your Support Matters
          </h2>

          <p>
            Every seed sown into CampDavid Global Bible School helps us
            continue the mission of equipping believers through sound
            biblical teaching, discipleship, leadership development,
            worship gatherings, and outreach programs.
          </p>

        </div>

        {/* PAYMENT OPTIONS */}
        <div className="payment-grid">

          {/* BANK TRANSFER */}
          <div className="payment-card">

            <div className="payment-icon">
              🏦
            </div>

            <h3>Bank Transfer</h3>

            <div className="payment-details">

              <p>
                <strong>Bank Name:</strong> Zenith Bank
              </p>

              <p>
                <strong>Account Name:</strong> CampDavid Global Bible School
              </p>

              <p>
                <strong>Account Number:</strong> 0123456789
              </p>

            </div>

          </div>

          {/* INTERNATIONAL */}
          <div className="payment-card">

            <div className="payment-icon">
              🌍
            </div>

            <h3>International Giving</h3>

            <div className="payment-details">

              <p>
                Support from anywhere in the world through PayPal,
                Wise, or international transfers.
              </p>

              <a
                href=""
                className="donate-btn"
              >
                Give Internationally
              </a>

            </div>

          </div>

          {/* ONLINE PAYMENT */}
          <div className="payment-card">

            <div className="payment-icon">
              💳
            </div>

            <h3>Online Payments</h3>

            <div className="payment-details">

              <p>
                Give securely online using debit cards,
                credit cards, or mobile payment platforms.
              </p>

              <a
                href="/"
                className="donate-btn"
              >
                Donate Online
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* BANNER */}
      <section className="support-banner">

        <div className="support-overlay">

          <h2>
            Together We Are Raising A Generation For Christ
          </h2>

          <p>
            Thank you for partnering with the vision and helping us
            transform lives through God’s Word.
          </p>

          <a href="/" className="support-btn">
            Become A Partner
          </a>

        </div>

      </section>

    <Marquee />
    <Footer />
    </div>
  );
}

export default Donate;