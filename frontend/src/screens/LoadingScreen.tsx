import {
  useEffect,
  useState,
} from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const interval =
      window.setInterval(() => {
        setProgress(
          (current) =>
            Math.min(
              current + 8,
              100
            )
        );
      }, 100);

    const timer =
      window.setTimeout(
        onComplete,
        1500
      );

    return () => {
      window.clearInterval(
        interval
      );

      window.clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loader-bg" />
      <div className="loader-scanline" />

      <div className="loader-content">
        <div className="loader-icon">
          ⚔️
        </div>

        <h1 className="loader-title">
          BATTLE ARENA
        </h1>

        <div className="loader-tagline">
          ENTER THE ARENA
        </div>

        <div className="loader-bar-wrap">
          <div
            className="loader-bar"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="loader-text">
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;