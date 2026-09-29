import type { Wall as WallData } from "../../game/gameTypes";
import { WALL_HEIGHT } from "../../game/gameConstants";

interface WallProps {
  wall: WallData;
}

function getWallMaterial(type: string) {
  switch (type) {
    case "border":
      return {
        color: "#1d252d",
        roughness: 0.9,
      };

    case "building":
      return {
        color: "#77716a",
        roughness: 0.85,
      };

    case "crate":
      return {
        color: "#8a5a2b",
        roughness: 0.95,
      };

    default:
      return {
        color: "#555d66",
        roughness: 0.9,
      };
  }
}

function Wall({ wall }: WallProps) {
  const material =
    getWallMaterial(wall.type);

  const height =
    wall.type === "border"
      ? 100
      : WALL_HEIGHT;

  return (
    <mesh
      position={[
        wall.x + wall.w / 2,
        height / 2,
        wall.y + wall.h / 2,
      ]}
      castShadow
      receiveShadow
    >
      <boxGeometry
        args={[
          wall.w,
          height,
          wall.h,
        ]}
      />

      <meshStandardMaterial
        color={material.color}
        roughness={material.roughness}
      />
    </mesh>
  );
}

export default Wall;