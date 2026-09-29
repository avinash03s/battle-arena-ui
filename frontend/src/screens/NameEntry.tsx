import {
  useState,
} from "react";

interface NameEntryProps {
  initialName: string;
  onJoin: (
    name: string
  ) => void;
  onBack: () => void;
}

function NameEntry({
  initialName,
  onJoin,
  onBack,
}: NameEntryProps) {
  const [name, setName] =
    useState(initialName);

  const submit = () => {
    onJoin(name.trim());
  };

  return (
    <div className="screen">
      <div className="name-panel">
        <h2 className="screen-heading">
          ENTER YOUR NAME
        </h2>

        <input
          className="name-input"
          value={name}
          maxLength={16}
          placeholder="Your name"
          onChange={(event) =>
            setName(
              event.target.value
            )
          }
          onKeyDown={(event) => {
            if (
              event.key === "Enter"
            ) {
              submit();
            }
          }}
        />

        <div className="character-actions">
          <button
            className="btn"
            onClick={onBack}
          >
            BACK
          </button>

          <button
            className="btn btn-primary"
            onClick={submit}
          >
            JOIN GAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default NameEntry;