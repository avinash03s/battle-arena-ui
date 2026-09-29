import type {
  RoomUpdate,
} from "../game/gameTypes";

interface WaitingScreenProps {
  room: RoomUpdate | null;
  soloWaitSeconds: number | null;
  onBack: () => void;
}

function WaitingScreen({
  room,
  soloWaitSeconds,
  onBack,
}: WaitingScreenProps) {
  return (
    <div className="screen">
      <div className="waiting-panel">
        <div className="waiting-spinner">
          ◈
        </div>

        <h2 className="screen-heading">
          {soloWaitSeconds !== null
            ? `NO OPPONENTS FOUND — STARTING WITH BOTS IN ${soloWaitSeconds}s`
            : "WAITING FOR PLAYERS"}
        </h2>

        <div className="player-count">
          Players:{" "}
          {room?.players.length ?? 0}/
          {room?.maxPlayers ?? 0}
        </div>

        <ul className="waiting-list">
          {room?.players.map(
            (player) => (
              <li
                key={player.id}
              >
                {player.name}
              </li>
            )
          )}
        </ul>

        <button
          className="btn"
          onClick={onBack}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default WaitingScreen;