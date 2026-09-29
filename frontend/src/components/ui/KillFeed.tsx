import type {
  PlayerEliminatedData,
  PlayerLeftData,
} from "../../game/gameTypes";

interface KillFeedProps {
  eliminations: PlayerEliminatedData[];
  departures: PlayerLeftData[];
}

function KillFeed({
  eliminations,
  departures,
}: KillFeedProps) {
  const items = [
    ...eliminations.map(
      (item) => ({
        id: `kill-${item.name}-${item.by}`,
        text: `${item.name} was eliminated by ${item.by}`,
      })
    ),

    ...departures.map(
      (item) => ({
        id: `left-${item.name}`,
        text: `${item.name} left the match`,
      })
    ),
  ].slice(-5);

  return (
    <div className="kill-feed">
      {items.map((item) => (
        <div
          key={item.id}
          className="kill-feed-item"
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default KillFeed;