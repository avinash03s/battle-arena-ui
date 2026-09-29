import type {
  Decoration as DecorationData,
  Wall as WallData,
} from "../../game/gameTypes";

import Wall from "./Wall";
import Decoration from "./Decoration";

interface ArenaProps {
  width: number;
  height: number;
  walls: WallData[];
  decorations: DecorationData[];
}

function Arena({
  width,
  height,
  walls,
  decorations,
}: ArenaProps) {
  return (
    <group>
      {/* Arena ground */}
      <mesh
        position={[
          width / 2,
          -2,
          height / 2,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        receiveShadow
      >
        <planeGeometry
          args={[
            width,
            height,
          ]}
        />

        <meshStandardMaterial
          color="#4b7f3c"
          roughness={1}
        />
      </mesh>

      {/* Ground grid */}
      <gridHelper
        args={[
          Math.max(width, height),
          30,
          "#5b914b",
          "#426e36",
        ]}
        position={[
          width / 2,
          0,
          height / 2,
        ]}
      />

      {/* Walls */}
      {walls.map(
        (wall, index) => (
          <Wall
            key={`${wall.type}-${wall.x}-${wall.y}-${index}`}
            wall={wall}
          />
        )
      )}

      {/* Decorations */}
      {decorations.map(
        (decoration, index) => (
          <Decoration
            key={`${decoration.type}-${decoration.x}-${decoration.y}-${index}`}
            decoration={
              decoration
            }
          />
        )
      )}
    </group>
  );
}

export default Arena;