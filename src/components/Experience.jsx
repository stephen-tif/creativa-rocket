import { OrbitControls } from "@react-three/drei";
import Rocket from "./Rocket";

const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group position={[0, 0, 0]}>
        <Rocket/>
      </group>
    </>
  );
};

export default Experience;
