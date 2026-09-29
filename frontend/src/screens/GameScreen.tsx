import {
  useEffect,
  useRef,
  useState,
} from "react";

import GameCanvas from "../components/game/GameCanvas";

import GameHUD from "../components/ui/GameHUD";
import KillFeed from "../components/ui/KillFeed";

import type {
  GameState,
  MapInfo,
} from "../game/gameTypes";

import {
  INPUT_INTERVAL_MS,
} from "../game/gameConstants";

import {
  useKeyboard,
} from "../hooks/useKeyboard";

interface GameScreenProps {
  map: MapInfo;
  gameState: GameState;
  selfId: string | null;

  send: (
    type:
      | "input"
      | "shoot"
      | "reload"
      | "leaveMatch",
    data?: unknown
  ) => boolean;

  killFeed: {
    name: string;
    by: string;
  }[];

  departures: {
    name: string;
  }[];

  onLeave: () => void;
}

function GameScreen({
  map,
  gameState,
  selfId,
  send,
  killFeed,
  departures,
  onLeave,
}: GameScreenProps) {
  const keyboard =
    useKeyboard();

  const mouseAngle =
    useRef(0);

  const mouseDown =
    useRef(false);

  const [mobileMove, setMobileMove] =
    useState({
      up: false,
      down: false,
      left: false,
      right: false,
    });

  const selfPlayer =
    gameState.players.find(
      (player) =>
        player.id === selfId
    );

  useEffect(() => {
    const handleMouseMove =
      (event: MouseEvent) => {
        const player =
          gameState.players.find(
            (item) =>
              item.id === selfId
          );

        if (!player) {
          return;
        }

        const centerX =
          window.innerWidth / 2;

        const centerY =
          window.innerHeight / 2;

        mouseAngle.current =
          Math.atan2(
            event.clientY -
              centerY,
            event.clientX -
              centerX
          );
      };

    const handleMouseDown =
      (event: MouseEvent) => {
        if (
          event.button === 0
        ) {
          mouseDown.current =
            true;
        }
      };

    const handleMouseUp =
      (event: MouseEvent) => {
        if (
          event.button === 0
        ) {
          mouseDown.current =
            false;
        }
      };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, [
    gameState.players,
    selfId,
  ]);

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        const keys =
          keyboard.current;

        send("input", {
          up:
            keys.up ||
            mobileMove.up,

          down:
            keys.down ||
            mobileMove.down,

          left:
            keys.left ||
            mobileMove.left,

          right:
            keys.right ||
            mobileMove.right,

          angle:
            mouseAngle.current,
        });

        if (
          mouseDown.current
        ) {
          send("shoot");
        }
      }, INPUT_INTERVAL_MS);

    return () => {
      window.clearInterval(
        timer
      );
    };
  }, [
    keyboard,
    mobileMove,
    send,
  ]);

  useEffect(() => {
    const reload =
      (event: KeyboardEvent) => {
        if (
          event.key.toLowerCase() ===
          "r"
        ) {
          send("reload");
        }
      };

    window.addEventListener(
      "keydown",
      reload
    );

    return () => {
      window.removeEventListener(
        "keydown",
        reload
      );
    };
  }, [send]);

  const leave =
    () => {
      send("leaveMatch");
      onLeave();
    };

  return (
    <div className="game-screen">
      <GameCanvas
        map={map}
        gameState={gameState}
        selfId={selfId}
      />

      <div className="game-overlay">
        <GameHUD
          player={selfPlayer}
          onReload={() =>
            send("reload")
          }
          onLeave={leave}
        />

        <KillFeed
          eliminations={
            killFeed
          }
          departures={
            departures
          }
        />
      </div>
    </div>
  );
}

export default GameScreen;