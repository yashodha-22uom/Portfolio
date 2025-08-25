"use client";

export default function Skills() {
  const skills = [
    {
      name: "Python",
      icon: "🐍",
      image: "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
    },
    {
      name: "C",
      icon: "💻",
      image: "https://img.icons8.com/fluency/140/c-programming.png",
    },
    {
      name: "JavaScript",
      icon: "🟡",
      image: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    },
    {
      name: "HTML",
      icon: "🌐",
      image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/html_original_logo_icon_146477.png",
    },
    {
      name: "CSS",
      icon: "🎨",
      image: "https://logospng.org/download/css-3/logo-css-3-2048.png",
    },
    {
      name: "React JS",
      icon: "⚛️",
      image: "https://reactjsdeveloper.com/images/react_icon-min.png",
    },
    {
      name: "PHP",
      icon: "🐘",
      image: "https://www.php.net/images/logos/new-php-logo.svg",
    },
    {
      name: "Node JS",
      icon: "🟢",
      image: "https://api.qspiders.com/media/course_images/node-js_a3KAOmA.png",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      image: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      image: "https://w7.pngwing.com/pngs/634/68/png-transparent-mongo-db-mongodb-database-document-oriented-nosql-mongodb-logo-3d-icon.png",
    },
    {
      name: "Git",
      icon: "📝",
      image: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/git-13.png",
    },
    {
      name: "GitHub",
      icon: "🐙",
      image: "https://www.pngmart.com/files/23/Github-Logo-PNG-Pic.png",
    },
    {
      name: "GitLab",
      icon: "🦊",
      image: "https://about.gitlab.com/images/press/logo/svg/gitlab-logo-500.svg",
    },
    {
      name: "Version Control",
      icon: "🔄",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    }
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img 
                  src={skill.image} 
                  alt={skill.name}
                  className="skill-image"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="skill-emoji" style={{ display: 'none' }}>
                  {skill.icon}
                </span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
