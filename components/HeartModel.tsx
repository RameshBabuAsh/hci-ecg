"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function HeartGLBModel() {
  const gltf = useGLTF("/models/heart.glb");
  return <primitive object={gltf.scene} scale={0.5} />;
}

const HeartModel = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <HeartGLBModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HeartModel;
