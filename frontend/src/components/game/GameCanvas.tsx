import {
  Canvas,
} from "@react-three/fiber";

import {
  OrthographicCamera,
} from "@react-three/drei";

import Arena from "./Arena";
import Player from "./Player";
import Bullet from "./Bullet";

import type {
  GameState,
  MapInfo,
} from "../../game/gameTypes";

interface GameCanvasProps {
  map: MapInfo;
  gameState: GameState;
  selfId: string | null;
}

function GameScene({
  map,
  gameState,
  selfId,
}: GameCanvasProps) {
  const self =
    gameState.players.find(
      (player) =>
        player.id === selfId
    );

  const centerX =
    self?.x ?? map.width / 2;

  const centerZ =
    self?.y ?? map.height / 2;

  return (
    <>
      <color
        attach="background"
        args={["#11151a"]}
      />

      <ambientLight
        intensity={1.5}
      />

      <directionalLight
        castShadow
        position={[
          centerX + 500,
          1600,
          centerZ + 500,
        ]}
        intensity={2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Arena
        width={map.width}
        height={map.height}
        walls={map.walls}
        decorations={
          map.decorations
        }
      />

      {gameState.players.map(
        (player) => (
          <Player
            key={player.id}
            player={player}
            isSelf={
              player.id === selfId
            }
          />
        )
      )}

      {gameState.bullets.map(
        (bullet) => (
          <Bullet
            key={bullet.id}
            bullet={bullet}
          />
        )
      )}
    </>
  );
}

function GameCanvas(props: GameCanvasProps) {
  const { map } = props;

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        powerPreference:
          "high-performance",
      }}
    >
      <OrthographicCamera
        makeDefault
        position={[
          map.width / 2,
          1800,
          map.height / 2 + 1200,
        ]}
        rotation={[
          Math.PI / 4.5,
          0,
          0,
        ]}
        zoom={0.55}
        near={1}
        far={10000}
      />

      <GameScene {...props} />
    </Canvas>
  );
}

export default GameCanvas;