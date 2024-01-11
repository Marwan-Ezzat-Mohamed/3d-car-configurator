import { CameraModes, cameraModeAtom } from "@/jotai";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";

import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!orbitControls.current || cameraMode === CameraModes.FREE) return;
    const { position, target } = cameraPositions[cameraMode];
    const targetAnimation = gsap.to(orbitControls.current.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1,
      ease: "power2.out",
    });
    const cameraAnimation = gsap.to(orbitControls.current.object.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration: 1,
      ease: "power2.out",
    });
    return () => {
      targetAnimation.kill();
      cameraAnimation.kill();
    };
  }, [cameraMode]);

  return (
    <OrbitControls
      ref={orbitControls}
      onStart={() => {
        setCameraMode(CameraModes.FREE);
      }}
      maxPolarAngle={toRad(100)}
      minPolarAngle={toRad(10)}
      maxAzimuthAngle={toRad(90)}
    />
  );
};

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}
