import MyImage from '/img/485150347_977801797811132_7519280564660279552_n.jpg';

const About = () => {
  return (
    <section className="split split-sticky">
      <div className="split-title">
        <h1>About me</h1>
        <img className="portrait" src={MyImage} alt="Portrait of Emanuel Mosqueda" />
      </div>

      <div className="split-body prose">
        <p className="prose-lead">
          Nice to meet you! I'm Emanuel, a multidisciplinary designer and IT student based in Iloilo, Philippines.
        </p>
        <p>I bridge the gap between aesthetic UI/UX and functional development.</p>
        <p>
          I am a designer who prioritizes visual harmony, specializing in the creation of comprehensive design
          systems in Figma that ensure every interface element feels intentional and unified.
        </p>
        <p>
          My collaborative process is rooted in UI/UX fundamentals, where I focus on crafting intuitive user journeys and
          polished interactive elements that enhance digital engagement.
        </p>
        <p>
          Beyond the screen, I am constantly studying the evolving landscape of design systems, focusing on how to create
          components that are as technically efficient as they are visually stunning.
        </p>
        <p className="tagline">I don’t just build interfaces; I engineer digital experiences.</p>
      </div>
    </section>
  );
};

export default About;
