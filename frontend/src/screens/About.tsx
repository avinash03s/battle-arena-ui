interface AboutProps {
  onBack: () => void;
}

function About({
  onBack,
}: AboutProps) {
  return (
    <div className="screen">
      <div className="panel about-panel">
        <h2 className="screen-heading">
          ABOUT
        </h2>

        <p className="about-title">
          BATTLE ARENA
        </p>

        <p>
          Multiplayer arena shooter built
          with Spring Boot, WebSocket,
          React, TypeScript and Three.js.
        </p>

        <p className="about-version">
          VERSION 2.0
        </p>

        <button
          className="btn back-btn"
          onClick={onBack}
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default About;