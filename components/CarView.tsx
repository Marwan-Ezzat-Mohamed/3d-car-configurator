"use client";

import {
  MeshReflectorMaterial,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei";

import Car from "./Car";
import { CameraControls } from "./CameraControls";

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[3, 2, 3.5]} fov={80} />
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
