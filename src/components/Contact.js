import "../styles/Contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    
      {/* HERO SECTION */}
      <section className="contact-hero">

        <div className="contact-header">
          <p className="contact-subtitle">
            We'd love to hear from you
          </p>

          <h1>Contact CampDavid</h1>

          <p className="contact-text">
            Reach out for admissions, inquiries, partnerships,
            or prayer support. Our team will respond as soon as possible.
          </p>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">

        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-info">

            <div className="info-card">
              <h3>Email</h3>
              <p>campdavidmin@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <p>+234 800 000 0000</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Lagos, Nigeria</p>
            </div>

          </div>

          {/* CONTACT FORM */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="contact-form"
          >

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="7"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>


      </section>
<Footer />  

    </>
  );
}

export default Contact;