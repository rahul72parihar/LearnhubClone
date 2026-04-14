export default function HeaderCenter() {
  const links = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Mentors", id: "mentors" },
    { name: "Groups", id: "groups" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="headerCenter">
      {links.map((item, index) => (
        <span
          key={index}
          className="nav-item"
          onClick={() => scrollToSection(item.id)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}