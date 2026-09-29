import {
  useMemo,
} from "react";

import type {
  Player as PlayerData,
} from "../../game/gameTypes";

interface PlayerProps {
  player: PlayerData;
  isSelf: boolean;
}

function getCharacterColor(
  characterType: string,
  fallback: string
) {
  switch (characterType) {
    case "penguin":
      return "#222831";

    case "bear":
      return "#8b5e3c";

    case "fox":
      return "#d86a2d";

    case "wolf":
      return "#707985";

    case "horse":
      return "#9a7251";

    default:
      return fallback || "#4da6ff";
  }
}

function Player({
  player,
  isSelf,
}: PlayerProps) {
  const bodyColor = useMemo(
    () =>
      getCharacterColor(
        player.characterType,
        player.color
      ),
    [
      player.characterType,
      player.color,
    ]
  );

  if (!player.alive) {
    return null;
  }

  return (
    <group
      position={[
        player.x,
        0,
        player.y,
      ]}
      rotation={[
        0,
        -player.angle,
        0,
      ]}
    >
      {/* Shadow */}
      <mesh
        position={[0, 2, 0]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <circleGeometry
          args={[30, 20]}
        />

        <meshBasicMaterial
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Body */}
      <mesh
        position={[0, 35, 0]}
        castShadow
      >
        <capsuleGeometry
          args={[22, 35, 6, 12]}
        />

        <meshStandardMaterial
          color={bodyColor}
          roughness={0.7}
        />
      </mesh>

      {/* Head */}
      <mesh
        position={[0, 78, 0]}
        castShadow
      >
        <sphereGeometry
          args={[28, 16, 12]}
        />

        <meshStandardMaterial
          color={bodyColor}
          roughness={0.7}
        />
      </mesh>

      {/* Direction indicator */}
      <mesh
        position={[
          0,
          48,
          -32,
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <coneGeometry
          args={[7, 24, 8]}
        />

        <meshStandardMaterial
          color="#ffb020"
        />
      </mesh>

      {/* Self ring */}
      {isSelf && (
        <mesh
          position={[0, 4, 0]}
          rotation={[
            -Math.PI / 2,
            0,
            0,
          ]}
        >
          <ringGeometry
            args={[30, 35, 32]}
          />

          <meshBasicMaterial
            color="#3aa0ff"
            transparent
            opacity={0.8}
          />
        </mesh>
      )}

      {/* Health bar */}
      <group
        position={[0, 120, 0]}
      >
        <mesh>
          <planeGeometry
            args={[70, 8]}
          />

          <meshBasicMaterial
            color="#111111"
          />
        </mesh>

        <mesh
          position={[
            -35 +
              (70 *
                Math.max(
                  0,
                  player.health
                )) /
                200,
            0,
            0.01,
          ]}
        >
          <planeGeometry
            args={[
              Math.max(
                1,
                (70 *
                  Math.max(
                    0,
                    player.health
                  )) /
                  100
              ),
              6,
            ]}
          />

          <meshBasicMaterial
            color={
              player.health > 50
                ? "#48d66b"
                : player.health > 25
                  ? "#ffb020"
                  : "#ff3b3b"
            }
          />
        </mesh>
      </group>
    </group>
  );
}

export default Player;