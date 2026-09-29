interface RoomSelectionProps {
  selectedSize: number;
  onSelect: (
    size: number
  ) => void;
  onBack: () => void;
}

function RoomSelection({
  selectedSize,
  onSelect,
  onBack,
}: RoomSelectionProps) {
  return (
    <div className="screen">
      <div className="selection-panel">
        <h2 className="screen-heading">
          SELECT ROOM SIZE
        </h2>

        <div className="menu">
          {[2, 4, 6].map(
            (size) => (
              <button
                key={size}
                className={`btn ${
                  selectedSize === size
                    ? "btn-primary"
                    : ""
                }`}
                onClick={() =>
                  onSelect(size)
                }
              >
                {size} PLAYERS
              </button>
            )
          )}
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

export default RoomSelection;