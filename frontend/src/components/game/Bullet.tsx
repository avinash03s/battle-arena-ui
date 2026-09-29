import type {
  Bullet as BulletData,
} from "../../game/gameTypes";

interface BulletProps {
  bullet: BulletData;
}

function Bullet({
  bullet,
}: BulletProps) {
  return (
    <mesh
      position={[
        bullet.x,
        32,
        bullet.y,
      ]}
    >
      <sphereGeometry
        args={[7, 8, 8]}
      />

      <meshStandardMaterial
        color="#ffd23a"
        emissive="#ff8c00"
        emissiveIntensity={1.5}
      />
    </mesh>
  );
}

export default Bullet;