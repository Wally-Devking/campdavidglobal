import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services-section">

    
      <h2 className="services-title">
        OUR  SERVICES
      </h2>

      <div className="services-container">

        {/* CARD 1 */}
        <div className="service-card">
          <img
            src="/assets/hands.jpg"
            alt="Bible School"
          />

          <h3>CampDavid 6months Bible School</h3>

          <p>
            Deepen your understanding of God’s word through
            intensive discipleship, spiritual growth, and practical ministry training.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="service-card">
          <img
            src="/assets/hands.jpg"
            alt="Bible Study"
          />

          <h3>CampDavid Weekly Bible Study</h3>

          <p>
            Join our weekly sessions designed to strengthen
            your faith, build community, and grow deeper in scripture.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="service-card">
          <img
            src="/assets/hands.jpg"
            alt="Conferences"
          />

          <h3>CampDavid Conferences</h3>

          <p>
            Experience powerful gatherings filled with worship,
            teaching, prayer, and life changing encounters with God.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;