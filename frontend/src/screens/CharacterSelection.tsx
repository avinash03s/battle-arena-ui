import {
  CHARACTERS,
} from "../game/gameConstants";

interface CharacterSelectionProps {
  selectedCharacter: string;
  onSelect: (
    character: string
  ) => void;
  onContinue: () => void;
  onBack: () => void;
}

function CharacterSelection({
  selectedCharacter,
  onSelect,
  onContinue,
  onBack,
}: CharacterSelectionProps) {
  return (
    <div className="screen character-screen">
      <h2 className="screen-heading">
        SELECT CHARACTER
      </h2>

      <div className="character-grid">
        {CHARACTERS.map(
          (character) => (
            <button
              key={character.id}
              disabled={
                !character.available
              }
              className={[
                "character-card",
                selectedCharacter ===
                character.id
                  ? "selected"
                  : "",
                !character.available
                  ? "locked"
                  : "",
              ].join(" ")}
              onClick={() =>
                onSelect(
                  character.id
                )
              }
            >
              <div className="character-preview">
                {character.emoji}
              </div>

              <div className="character-name">
                {character.name}
              </div>

              <div className="character-status">
                {character.status}
              </div>
            </button>
          )
        )}
      </div>

      <div className="character-actions">
        <button
          className="btn"
          onClick={onBack}
        >
          BACK
        </button>

        <button
          className="btn btn-primary"
          onClick={onContinue}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default CharacterSelection;