import { CameraModes, cameraModeAtom } from "@/jotai";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";

import { useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

const cameraPositions: Record<
  CameraModes,
  { position: THREE.Vector3; target: THREE.Vector3 }
> = {
  [CameraModes.REAR_LEFT_WHEEL]: {
    position: new THREE.Vector3(1.6, -0.4, -1.53),
    target: new THREE.Vector3(0, -0.4, -1.53),
  },
  [CameraModes.REAR_RIGHT_WHEEL]: {
    position: new THREE.Vector3(-1.6, -0.4, -1.53),
    target: new THREE.Vector3(0, -0.4, -1.53),
  },
  [CameraModes.FRONT_LEFT_WHEEL]: {
    position: new THREE.Vector3(1.6, -0.4, 1.53),
    target: new THREE.Vector3(0, -0.4, 1.53),
  },
  [CameraModes.FRONT_RIGHT_WHEEL]: {
    position: new THREE.Vector3(-1.6, -0.4, 1.53),
    target: new THREE.Vector3(0, -0.4, 1.53),
  },
  [CameraModes.FRONT]: {
    position: new THREE.Vector3(0, 1, 3.2),
    target: new THREE.Vector3(0, -0.6, 0),
  },
  [CameraModes.REAR]: {
    position: new THREE.Vector3(0, 1, -3.2),
    target: new THREE.Vector3(0, -0.6, 0),
  },
  [CameraModes.FREE]: {
    position: new THREE.Vector3(0, 0, 0),
    target: new THREE.Vector3(0, 0, 0),
  },
  [CameraModes.OVERVIEW]: {
    position: new THREE.Vector3(3, 2, 3.5),
    target: new THREE.Vector3(0, 1, 0),
  },
};

export const CameraControls = () => {
  const [cameraMode, setCameraMode] = useAtom(cameraModeAtom);
  const orbitControls = useRef<OrbitControlsImpl>(null);

  useFrame((state) => {
    if (!orbitControls.current || cameraMode === CameraModes.FREE) {
      return;
    }

    const targetPosition = cameraPositions[cameraMode].position;
    const targetTarget = cameraPositions[cameraMode].target;

    gsap.to(state.camera.position, {
      duration: 1,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      ease: "power1.out",
      onUpdate: () => state.camera.updateProjectionMatrix(),
    });

    gsap.to(orbitControls.current.target, {
      duration: 1,
      x: targetTarget.x,
      y: targetTarget.y,
      z: targetTarget.z,
      ease: "power1.out",
      onUpdate: () => orbitControls.current?.update(),
    });
  });

  return (
    <OrbitControls
      ref={orbitControls}
      onStart={() => {
        setCameraMode(CameraModes.FREE);
      }}
      maxPolarAngle={toRad(115)}
    />
  );
};

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}
