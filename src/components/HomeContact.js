import "../styles/HomeContact.css";

function HomeContact() {
  return (
    <section className="home-contact">

      <div className="home-contact-overlay">

          <h2>
          Have Questions Or Want To Join?
        </h2>

        <p className="contact-description">
          Reach out to us for admissions, partnerships,
          counseling, or ministry inquiries.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="home-contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default HomeContact;