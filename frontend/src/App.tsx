import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Warehouse() {
  const { scene } = useGLTF("/warehouse.glb");
  return <primitive object={scene} scale={0.1} />;
}

function LoadingScreen() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a2e" }}>
      <h1 style={{
        position: "absolute",
        top: 20,
        left: 20,
        color: "white",
        zIndex: 10,
        margin: 0,
        fontFamily: "Arial"
      }}>
        Smart Warehouse AI
      </h1>

      <Canvas camera={{ position: [10, 8, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={<LoadingScreen />}>
          <Warehouse />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}