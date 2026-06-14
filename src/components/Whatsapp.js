import "../styles/Whatsapp.css";

function WhatsApp() {
  return (
    <div className="whatsapp-container">

      <span className="whatsapp-text">
        Click here for quick inquiries
      </span>

      <a
        href="https://wa.me/2348000000000"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/assets/whatsapp.png"
          alt="WhatsApp"
        />
      </a>

    </div>
  );
}

export default WhatsApp;