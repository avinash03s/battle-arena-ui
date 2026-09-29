import type {
  MatchResultData,
} from "../game/gameTypes";

interface ResultScreenProps {
  result: MatchResultData;
  playerName: string;
  onPlayAgain: () => void;
  onMenu: () => void;
}

function formatTime(
  milliseconds: number
) {
  const totalSeconds =
    Math.floor(
      milliseconds / 1000
    );

  const minutes =
    Math.floor(
      totalSeconds / 60
    );

  const seconds =
    totalSeconds % 60;

  return `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

function ResultScreen({
  result,
  playerName,
  onPlayAgain,
  onMenu,
}: ResultScreenProps) {
  const winner =
    result.winner;

  const isWinner =
    winner?.name ===
    playerName;

  const sortedPlayers =
    [...result.players].sort(
      (a, b) =>
        b.kills - a.kills
    );

  const self =
    result.players.find(
      (player) =>
        player.name ===
        playerName
    );

  return (
    <div className="screen result-screen">
      <h1
        className={
          isWinner
            ? "result-title victory"
            : "result-title defeated"
        }
      >
        {isWinner
          ? "VICTORY!"
          : "DEFEATED"}
      </h1>

      <div className="result-sub">
        {winner
          ? `Winner: ${winner.name}`
          : "No survivors"}
      </div>

      <div className="result-stats">
        <div>
          Kills:{" "}
          {self?.kills ?? 0}
        </div>

        <div>
          Survival Time:{" "}
          {formatTime(
            result.elapsed
          )}
        </div>
      </div>

      <div className="result-list">
        {sortedPlayers.map(
          (player, index) => (
            <div
              key={player.id}
              className="result-row"
            >
              <span>
                {index + 1}.{" "}
                {player.name}
              </span>

              <span>
                {player.kills} Kills
              </span>
            </div>
          )
        )}
      </div>

      <div className="result-actions">
        <button
          className="btn btn-primary"
          onClick={
            onPlayAgain
          }
        >
          PLAY AGAIN
        </button>

        <button
          className="btn"
          onClick={onMenu}
        >
          MAIN MENU
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;