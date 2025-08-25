"use client";
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  const projectsData = [
    {
      title: "Fleet and Asset Management System",
      description: "A comprehensive system for managing fleet and assets using React.js, Node.js, and MySQL with role-based authentication.",
      fullDescription: "Developed a full-stack fleet and asset management system as a Second Year Group Project. Built authentication and authorization modules, designed and implemented user interfaces, integrated backend APIs in Node.js and Express, handling data validation, error handling, and database interaction via Sequelize ORM. Created responsive UI components for registration, login aligned with the project's role hierarchy. Enforced role-based access control (RBAC) throughout the system to enable secure user permission handling.",
      image: "/fleetManager.jpg",
      technologies: ["React.js", "Node.js", "MySQL", "Express", "Sequelize ORM"],
      githubUrl: "https://github.com/mandrini/fleet-management",
      linkedinUrl: "https://linkedin.com/in/mandrini-yashodha"
    },
    {
      title: "Agro Sence - Microcontroller-based Soil Monitoring System",
      description: "A real-time soil moisture and temperature monitoring system using ESP32 microcontroller and database integration.",
      fullDescription: "Designed and developed a microcontroller-based system to measure and monitor soil moisture levels and temperature in real time as a First Year Group Project. Used ESP32 microcontroller with soil moisture sensor and temperature sensor (DS18B20). Implemented hardware solution integrating moisture and temperature sensors with a microcontroller, created software to collect, process, and store sensor data in a database, used technologies including Firebase, HTML, CSS, JavaScript, and Express.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["ESP32", "Firebase", "HTML", "CSS", "JavaScript", "Express"],
      githubUrl: "https://github.com/mandrini/agro-sence",
      linkedinUrl: "https://linkedin.com/in/mandrini-yashodha"
    },
    {
      title: "MobileZone - Responsive E-commerce Platform",
      description: "A responsive frontend web application designed for mobile phone selling platform with product browsing and search functionality.",
      fullDescription: "Designed and developed a responsive frontend web application for a mobile phone selling platform. Built user interface for browsing mobile phones by category and brand, implemented product search and filtering functionality, created dynamic product display with images, specifications, and pricing, ensured responsive design compatible with both desktop and mobile devices. Used Frontend technologies: React.js",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React.js", "Responsive Design", "CSS", "JavaScript"],
      githubUrl: "https://github.com/mandrini/mobilezone",
      linkedinUrl: "https://linkedin.com/in/mandrini-yashodha"
    }
  ];
  
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            fullDescription={project.fullDescription}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            linkedinUrl={project.linkedinUrl}
          />
        ))}
      </div>
    </section>
  );
}