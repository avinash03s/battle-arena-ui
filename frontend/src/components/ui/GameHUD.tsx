import type {
  Player,
} from "../../game/gameTypes";

interface GameHUDProps {
  player?: Player;
  onReload: () => void;
  onLeave: () => void;
}

function GameHUD({
  player,
  onReload,
  onLeave,
}: GameHUDProps) {
  if (!player) {
    return null;
  }

  return (
    <>
      <div className="game-top-bar">
        <div className="game-logo">
          BATTLE ARENA
        </div>

        <button
          className="game-exit-button"
          onClick={onLeave}
        >
          EXIT
        </button>
      </div>

      <div className="hud-bottom">
        <div className="hud-panel">
          <div className="hud-label">
            HEALTH
          </div>

          <div className="health-row">
            <div className="health-track">
              <div
                className="health-fill"
                style={{
                  width: `${Math.max(
                    0,
                    Math.min(
                      100,
                      player.health
                    )
                  )}%`,
                }}
              />
            </div>

            <span>
              {Math.max(
                0,
                player.health
              )}{" "}
              / 100
            </span>
          </div>
        </div>

        <div className="hud-panel ammo-panel">
          <div className="hud-label">
            AMMO
          </div>

          <div className="ammo-value">
            {player.reloading
              ? "RELOADING..."
              : `${player.ammo} / ${player.reserveAmmo}`}
          </div>

          <button
            className="reload-button"
            onClick={onReload}
          >
            RELOAD [R]
          </button>
        </div>

        <div className="hud-panel kills-panel">
          <div className="hud-label">
            KILLS
          </div>

          <div className="kills-value">
            {player.kills}
          </div>
        </div>
      </div>
    </>
  );
}

export default GameHUD;