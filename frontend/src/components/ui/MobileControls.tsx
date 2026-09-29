interface MobileControlsProps {
  onMove: (
    x: number,
    y: number
  ) => void;

  onMoveEnd: () => void;

  onAim: (
    angle: number,
    active: boolean
  ) => void;

  onAimEnd: () => void;

  onReload: () => void;
}

function MobileControls({
  onMove,
  onMoveEnd,
  onAim,
  onAimEnd,
  onReload,
}: MobileControlsProps) {
  const handleMove =
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement>
    ) => {
      const rect =
        event.currentTarget.getBoundingClientRect();

      const point =
        "touches" in event
          ? event.touches[0]
          : event;

      if (!point) {
        return;
      }

      const dx =
        point.clientX -
        (rect.left + rect.width / 2);

      const dy =
        point.clientY -
        (rect.top + rect.height / 2);

      const distance =
        Math.hypot(dx, dy);

      const maxDistance =
        rect.width / 2;

      const strength =
        Math.min(
          distance,
          maxDistance
        ) / maxDistance;

      onMove(
        dx / maxDistance,
        dy / maxDistance
      );

      if (strength <= 0) {
        onMoveEnd();
      }
    };

  const handleAim =
    (
      event:
        | React.TouchEvent<HTMLDivElement>
        | React.MouseEvent<HTMLDivElement>
    ) => {
      const rect =
        event.currentTarget.getBoundingClientRect();

      const point =
        "touches" in event
          ? event.touches[0]
          : event;

      if (!point) {
        return;
      }

      const dx =
        point.clientX -
        (rect.left + rect.width / 2);

      const dy =
        point.clientY -
        (rect.top + rect.height / 2);

      const angle =
        Math.atan2(dy, dx);

      onAim(angle, true);
    };

  return (
    <div className="mobile-controls">
      <div
        className="joystick move-joystick"
        onTouchMove={handleMove}
        onTouchEnd={onMoveEnd}
      >
        <div className="joystick-knob" />
      </div>

      <div
        className="mobile-actions"
      >
        <button
          className="mobile-reload"
          onClick={onReload}
        >
          R
        </button>
      </div>

      <div
        className="joystick aim-joystick"
        onTouchMove={handleAim}
        onTouchEnd={onAimEnd}
      >
        <div className="joystick-knob" />
      </div>
    </div>
  );
}

export default MobileControls;