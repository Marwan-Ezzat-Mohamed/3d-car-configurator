"use client";

import { MeshReflectorMaterial, Stage } from "@react-three/drei";

import Car from "./Car";
import { CameraControls } from "./CameraControls";

const Scene = () => {
  return (
    <>
      <CameraControls />

      <Stage environment="city" intensity={0.9} castShadow={false}>
        <Car />
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          mirror={0.5}
          blur={0}
          depthToBlurRatioBias={0}
          distortion={0}
        />
      </mesh>
    </>
  );
};

export default Scene;
