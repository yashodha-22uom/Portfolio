"use client";

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "University Of Moratuwa",
      degree: "BSc Hons in Information Technology",
      period: "2022 - 2026",
      description: "Currently pursuing a comprehensive degree in Information Technology with focus on software development, programming, database management, and web development technologies.",
      location: "Moratuwa, Sri Lanka",
      icon: "🎓",
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["3rd Year Undergraduate", "GPA: 3.2/4"],
      position: "left"
    },
    {
      id: 2,
      title: "Ferguson High School",
      degree: "GCE Advanced Level (A/L) Examination ",
      period: "2021",
      description: "Completed Advanced Level examination from Ferguson High School, Ratnapura with strong performance in core subjects.",
      location: "Ratnapura, Sri Lanka",
      icon: "🏫",
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["A/L Completed", "Z-Score: 1.594", "Physics(B), Chemistry(A), Biology(B)"],
      position: "right"
    },
    {
      id: 3,
      title: "Srimavo Bandaranaike Vidyalaya",
      degree: "GCE Ordinary Level (O/L) Examination",
      period: "2016",
      description: "Completed GCE Ordinary Level examination with excellent results, building a strong foundation for advanced studies.",
      location: "Colombo-07, Sri Lanka",
      icon: "📚",
      iconImage: "https://seekicon.com/free-icon-download/book_4.png",
      achievements: ["O/L Completed", "8A's 1C passes"],
      position: "left"
    }
  ];

  return (
    <section className="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.position}`}>
              <div className="timeline-node">
                <div className="node-icon">
                  <img src={item.iconImage} alt="Education" />
                </div>
              </div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="date-tag">{item.period}</div>
                    <div className="institution-icon">
 
                    </div>
                  </div>
                  <h3 className="education-title-card">{item.title}</h3>
                  <div className="institution-info">
                    <span className="institution-name">
                      <img src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" alt="Building" className="icon-building" />
                      {item.degree}
                    </span>
                    <span className="location">
                      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="icon-location" />
                      {item.location}
                    </span>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="achievements">
                    {item.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        <img src="https://static.vecteezy.com/system/resources/previews/012/909/445/large_2x/green-tick-icon-3d-render-free-png.png" alt="Check" className="icon-check" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 