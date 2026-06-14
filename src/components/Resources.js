import "../styles/Resources.css";

function Resources() {
  return (
    <section className="resources-section">

      {/* TOP CONTENT */}
      <div className="resources-header">


        <h2>
          CampDavid Resources
        </h2>

        <p className="resources-text">
          Access spiritual resources, teachings, devotionals, and life
          transforming messages from CampDavid Global Bible School.
        </p>
      </div>

      
    
      {/* MEDIA SECTION */}
      <div className="media-section">

        <div className="media-text">
          <h2>Watch Recent Programs</h2>

          <p>
            Join our online community by watching chapel sessions,
            conferences, worship experiences, and transformational teachings.
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="youtube-btn"
          >
            Visit YouTube Channel
          </a>
        </div>

        {/* YOUTUBE EMBED */}
        <div className="video-container">

          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="CampDavid Program"
            frameBorder="0"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Resources;