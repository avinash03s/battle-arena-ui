interface MainMenuProps {
  onPlay: () => void;
  onHowToPlay: () => void;
  onSettings: () => void;
  onAbout: () => void;
}

function MainMenu({
  onPlay,
  onHowToPlay,
  onSettings,
  onAbout,
}: MainMenuProps) {
  return (
    <div className="screen menu-screen">
      <div className="brand-tag">
        <span className="brand-tag-line" />

        <span className="brand-tag-text">
          ALPHA GROUP
        </span>

        <span className="brand-tag-line" />
      </div>

      <h1 className="title">
        BATTLE ARENA
      </h1>

      <p className="subtitle">
        ENTER THE ARENA. BECOME THE LEGEND.
      </p>

      <div className="menu">
        <button
          className="btn btn-primary"
          onClick={onPlay}
        >
          PLAY
        </button>

        <button
          className="btn"
          onClick={onHowToPlay}
        >
          HOW TO PLAY
        </button>

        <button
          className="btn"
          onClick={onSettings}
        >
          SETTINGS
        </button>

        <button
          className="btn"
          onClick={onAbout}
        >
          ABOUT
        </button>
      </div>
    </div>
  );
}

export default MainMenu;