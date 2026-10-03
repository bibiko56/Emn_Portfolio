import TextType from '../components/TextType';
import ContactForm from '../components/ContactForm';
import MyImage from '/img/485150347_977801797811132_7519280564660279552_n.jpg';
import { Link } from 'react-router-dom';

const logos = [
  { src: "/img/Blender_logo_no_text.svg.png", alt: "Blender" },
  { src: "/img/Figma-logo.svg.png", alt: "Figma" },
  { src: "/img/affinity-studio-icon.svg", alt: "Affinity" },
  { src: "/img/canva-icon.svg", alt: "Canva" },
  { src: "/img/adobe-illustrator-icon.svg", alt: "Illustrator" },
  { src: "/img/adobe-photoshop-icon.svg", alt: "Photoshop" },
  { src: "/img/DaVinci_Resolve_17_logo.svg.png", alt: "DaVinci Resolve" },
];

const work = [
  { to: "/projects#modeling-section", title: "3D modeling", note: "Isometric rooms, buildings and product renders.", img: "/img/3d.png" },
  { to: "/projects#poster-section", title: "Poster design", note: "A numbered series of typographic posters.", img: "/img/7.png" },
  { to: "/projects#web-section", title: "Web development", note: "Interfaces and prototypes, from Figma to code.", img: "/img/6.png" },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero: text left, portrait right */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm
            <span className="name-line">
              <TextType text="Emanuel Mosqueda" speed={150} className="highlight" delay={3000} />
            </span>
            a UI/UX designer.
          </h1>
          <p className="hero-lede">
            A multidisciplinary designer and IT student based in Iloilo, Philippines, bridging
            aesthetic UI/UX and functional development.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn">See my work</Link>
            <Link to="/contact" className="btn-text">Get in touch</Link>
          </div>
        </div>
        <img className="portrait" src={MyImage} alt="Portrait of Emanuel Mosqueda" />
      </section>

      {/* Tools */}
      <div className="scrolling_text" aria-label="Tools I use">
        {[...Array(5)].map((_, i) => (
          <div className="text" key={i} aria-hidden={i > 0}>
            {logos.map((logo) => (
              <span key={`${i}-${logo.alt}`}>
                <img src={logo.src} alt={i === 0 ? logo.alt : ""} />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Work: index list, label left and rows right */}
      <section className="split">
        <h2 className="split-title">Selected work</h2>
        <div className="split-body">
          <ul className="work-list">
            {work.map((w) => (
              <li key={w.title}>
                <Link to={w.to} className="work-row">
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.note}</p>
                  </div>
                  <img src={w.img} alt="" loading="lazy" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="split">
        <div className="split-title">
          <h2>Contact me</h2>
          <p className="split-note">Have a project in mind? Send a message and I'll reply by email.</p>
        </div>
        <div className="split-body">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
