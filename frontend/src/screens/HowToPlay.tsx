interface HowToPlayProps {
  onBack: () => void;
}

function HowToPlay({
  onBack,
}: HowToPlayProps) {
  return (
    <div className="screen">
      <div className="panel howto-box">
        <h2 className="screen-heading">
          HOW TO PLAY
        </h2>

        <div className="howto-content">
          <p>
            <strong>MOVE</strong>
            <br />
            W / A / S / D or Arrow Keys
          </p>

          <p>
            <strong>AIM</strong>
            <br />
            Move your mouse around the arena.
          </p>

          <p>
            <strong>SHOOT</strong>
            <br />
            Hold the left mouse button.
          </p>

          <p>
            <strong>RELOAD</strong>
            <br />
            Press R.
          </p>

          <p>
            <strong>OBJECTIVE</strong>
            <br />
            Eliminate the other players and
            survive.
          </p>
        </div>

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

export default HowToPlay;