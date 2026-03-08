function Projects() {
  const projects = [
    {
      title: "Watch Zone",
      desc: "Responsive ecommerce website for watch enthusiasts.",
      img: "/assets/watchzone.png",
      link: "https://behance.net/your-watchzone"
    },
    {
      title: "Luxury Carz",
      desc: "Mobile app design for luxury car rentals.",
      img: "/assets/luxurycarz.png",
      link: "https://behance.net/your-luxurycarz"
    },
    {
      title: "Splitify",
      desc: "Mobile app for splitting costs efficiently.",
      img: "/assets/splitify.png",
      link: "https://behance.net/your-splitify"
    }
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.img} alt={p.title} className="project-img" />
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Case Study →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;