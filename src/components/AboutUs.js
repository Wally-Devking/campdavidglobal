import React from 'react';
import '../styles/About.css';
import Footer from './Footer';
import Resources from './Resources';
import Marquee from './Marquee';
function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About CampDavid Global Bible School</h1>
          <p>
            Raising believers grounded in truth, transformed by the Word,
            and equipped for kingdom impact.
          </p>
        </div>
      </section>
      <Marquee />

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-container">

          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              CampDavid Global Bible School is a Christ centered training
              institution committed to discipling believers through sound
              biblical teaching, spiritual growth, and practical kingdom
              leadership.
            </p>

            <p>
              We are not a church, but a Bible school designed to equip
              individuals with deep scriptural understanding, spiritual
              maturity, and a lifestyle fully surrendered to God.
            </p>

            <p>
              At CampDavid, students are immersed in an environment of
              worship, prayer, leadership development, and intensive study
              of God’s Word, preparing them to impact their generation
              wherever God sends them.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/assets/hands.jpg"
              alt="CampDavid Bible School"
            />
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">

        <div className="mv-card">
          <h2>Our Mission</h2>

          <p>
            To raise spiritually grounded believers through biblical
            teaching, discipleship, prayer, and leadership training,
            equipping them to influence the world for Christ.
          </p>
        </div>

        <div className="mv-card">
          <h2>Our Vision</h2>

          <p>
            To become a global center for biblical transformation,
            producing kingdom leaders who carry truth, excellence,
            integrity, and the presence of God into every sphere of life.
          </p>
        </div>

      </section>

      {/* ADMISSION */}
      <section className="admission-section">

        <h2>Admissions & Enrollment</h2>

        <p>
          CampDavid Global Bible School welcomes students from every
          background who desire a deeper relationship with God and a
          stronger foundation in His Word.
        </p>

        <p>
          Admissions are open every season, and interested applicants can
          join any ongoing or upcoming training program through our
          enrollment process.
        </p>

        <div className="steps-container">

          <div className="step-card">
            <span>01</span>
            <h3>Submit Application</h3>
            <p>
              Complete the application form with your personal and
              spiritual information.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Application Review</h3>
            <p>
              Our admissions team reviews every application carefully
              before approval.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Begin Your Journey</h3>
            <p>
              Once accepted, you can begin classes and grow deeper in
              God’s purpose for your life.
            </p>
          </div>

        </div>

        <button className="apply-btn">
          Apply Now
        </button>

      </section>

<Resources /> 
<Footer />

    </div>

    
  );
}


export default About;