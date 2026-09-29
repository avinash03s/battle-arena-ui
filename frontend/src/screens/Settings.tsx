interface SettingsProps {
  soundEnabled: boolean;
  onSoundChange: (
    enabled: boolean
  ) => void;
  onBack: () => void;
}

function Settings({
  soundEnabled,
  onSoundChange,
  onBack,
}: SettingsProps) {
  return (
    <div className="screen">
      <div className="panel settings-panel">
        <h2 className="screen-heading">
          SETTINGS
        </h2>

        <label className="setting-row">
          <span>
            SOUND
          </span>

          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(event) =>
              onSoundChange(
                event.target.checked
              )
            }
          />
        </label>

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

export default Settings;