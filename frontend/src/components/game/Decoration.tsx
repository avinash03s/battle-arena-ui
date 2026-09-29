import type {
  Decoration as DecorationData,
} from "../../game/gameTypes";

interface DecorationProps {
  decoration: DecorationData;
}

function Decoration({
  decoration,
}: DecorationProps) {
  switch (decoration.type) {
    case "tree":
      return (
        <group
          position={[
            decoration.x,
            0,
            decoration.y,
          ]}
        >
          <mesh
            position={[0, 45, 0]}
            castShadow
          >
            <cylinderGeometry
              args={[14, 18, 90, 8]}
            />

            <meshStandardMaterial
              color="#654321"
            />
          </mesh>

          <mesh
            position={[0, 105, 0]}
            castShadow
          >
            <sphereGeometry
              args={[55, 12, 10]}
            />

            <meshStandardMaterial
              color="#2f6b38"
            />
          </mesh>
        </group>
      );

    case "bush":
      return (
        <mesh
          position={[
            decoration.x,
            25,
            decoration.y,
          ]}
          castShadow
        >
          <sphereGeometry
            args={[32, 10, 8]}
          />

          <meshStandardMaterial
            color="#3e7d42"
          />
        </mesh>
      );

    case "grassPatch":
      return (
        <group
          position={[
            decoration.x,
            3,
            decoration.y,
          ]}
        >
          {[-20, 0, 20].map(
            (offset) => (
              <mesh
                key={offset}
                position={[
                  offset,
                  0,
                  0,
                ]}
                rotation={[
                  0,
                  offset * 0.03,
                  0,
                ]}
              >
                <coneGeometry
                  args={[
                    8,
                    18,
                    5,
                  ]}
                />

                <meshStandardMaterial
                  color="#5b9d45"
                />
              </mesh>
            )
          )}
        </group>
      );

    default:
      return null;
  }
}

export default Decoration;