import "./About.scss";

const About = () => {
  return (
    <div className="about_wrapper">
      <div>
        <h1>About Me</h1>
        <h2>Education</h2>
        <h3>
          Bachelar's degree of computer science in&nbsp;
          <a href="https://u-aizu.ac.jp/en/">the University of Aizu</a>
        </h3>
        <h2>Study</h2>
        <h3>
          Creating more human likely AI agent by reinforcement learning in&nbsp;
          <a href="https://github.com/google-research/football">
            google football environment
          </a>
        </h3>
        <h2>Hobby</h2>
        <h3>
          Watching Soccer Game⚽️, especialy Premier League, &nbsp;
          <a href="https://www.brightonandhovealbion.com/">
            Brighton & Hove Albion FC
          </a>
          is my favorite team ever!
        </h3>
      </div>
    </div>
  );
};

export default About;
