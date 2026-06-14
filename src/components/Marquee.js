import "../styles/Marquee.css";

function Marquee() {
  return (
    <section className="marquee-section">

      <div className="marquee">

        <div className="marquee-content">

          <span>
            CampDavid Global Bible School
          </span>

          <span>
            Admissions Open
          </span>

          <span>
            Raising Kingdom Leaders
          </span>

          <span>
            Weekly Bible Study
          </span>

          <span>
            Conferences & Worship Meetings
          </span>

          <span>
            Apply For The 6 Months Bible School
          </span>

          {/* DUPLICATE FOR SMOOTH LOOP */}

          <span>
            CampDavid Global Bible School
          </span>

          <span>
            Admissions Open
          </span>

          <span>
            Raising Kingdom Leaders
          </span>

          <span>
            Weekly Bible Study
          </span>

          <span>
            Conferences & Worship Meetings
          </span>

          <span>
            Apply For The 6 Months Bible School
          </span>

        </div>

      </div>

    </section>
  );
}

export default Marquee;