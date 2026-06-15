import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import Resources from "./Resources";
import Marquee from "./Marquee";

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

      {/* WHO WE ARE */}
      <section className="about-content">
        <div className="about-container">

          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              CampDavid Global Bible School is a Christ-centered training
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
              of God's Word, preparing them to impact their generation
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

      {/* CORE VALUES */}
      <section className="core-values">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>📖 Biblical Truth</h3>
            <p>
              Scripture remains the foundation of everything we teach,
              believe, and practice.
            </p>
          </div>

          <div className="value-card">
            <h3>🙏 Prayer</h3>
            <p>
              We cultivate intimacy with God through prayer, worship,
              and spiritual devotion.
            </p>
          </div>

          <div className="value-card">
            <h3>🌍 Kingdom Impact</h3>
            <p>
              We equip believers to influence society and advance God's
              kingdom wherever they serve.
            </p>
          </div>

          <div className="value-card">
            <h3>⭐ Excellence</h3>
            <p>
              We pursue excellence in character, leadership,
              ministry, and service.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="why-campdavid">

        <div className="why-content">

          <h2>Why Choose CampDavid?</h2>

          <ul>
            <li>✓ Deep Biblical Teaching</li>
            <li>✓ Practical Discipleship</li>
            <li>✓ Leadership Development</li>
            <li>✓ Prayer & Worship Culture</li>
            <li>✓ Kingdom Impact Training</li>
            <li>✓ Global Community of Believers</li>
          </ul>

        </div>

        <div className="why-image">
          <img
            src="/assets/students.jpg"
            alt="CampDavid Students"
          />
        </div>

      </section>

      {/* IMPACT STATS */}
      <section className="stats-section">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div className="stat-box">
          <h2>20+</h2>
          <p>Courses & Programs</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Years of Impact</p>
        </div>

        <div className="stat-box">
          <h2>15+</h2>
          <p>Countries Reached</p>
        </div>

      </section>

      {/* ADMISSIONS */}
      <section className="admission-section">

        <h2>Admissions & Enrollment</h2>

        <p>
          CampDavid Global Bible School welcomes students from every
          background who desire a deeper relationship with God and a
          stronger foundation in His Word.
        </p>

        <p>
          Admissions are open every season, and interested applicants
          can join any ongoing or upcoming training program through our
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
              God's purpose for your life.
            </p>
          </div>

        </div>

        <a href="/apply" className="apply-btn">
          Apply Now
        </a>

      </section>

      <Resources />
      <Footer />

    </div>
  );
}

export default About;
