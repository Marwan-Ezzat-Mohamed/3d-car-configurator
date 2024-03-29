/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: iSteven (https://sketchfab.com/OneSteven)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/tesla-model-y-b65e0d95b7cd423ebb603233bfbb3399
Title: Tesla Model Y
*/

import * as THREE from "three";
import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useAtomValue, useSetAtom } from "jotai";
import { carCustomizationsAtom } from "@/jotai";
import { rimSizes } from "@/lib/utils";

type GLTFResult = GLTF & {
  nodes: {
    mesh001_glack_0: THREE.Mesh;
    mesh002_glass_0: THREE.Mesh;
    mesh003_chrome_0: THREE.Mesh;
    mesh004_paint_0: THREE.Mesh;
    mesh007_glass_0: THREE.Mesh;
    mesh008_mlack_0: THREE.Mesh;
    mesh009_bumpa_0: THREE.Mesh;
    mesh010_glass_l_0: THREE.Mesh;
    mesh011_emit_0: THREE.Mesh;
    mesh012_red_0: THREE.Mesh;
    mesh005_mlack_0: THREE.Mesh;
    mesh006_red001_0: THREE.Mesh;
    wheel003_tire_0: THREE.Mesh;
    wheel003_disc_0: THREE.Mesh;
    wheel003_rim_0: THREE.Mesh;
    wheel003_chrome_0: THREE.Mesh;
    caliper003_cali_0: THREE.Mesh;
    wheel001_tire_0: THREE.Mesh;
    wheel001_disc_0: THREE.Mesh;
    wheel001_rim_0: THREE.Mesh;
    wheel001_chrome_0: THREE.Mesh;
    caliper001_cali_0: THREE.Mesh;
    wheel002_tire_0: THREE.Mesh;
    wheel002_disc_0: THREE.Mesh;
    wheel002_rim_0: THREE.Mesh;
    wheel002_chrome_0: THREE.Mesh;
    caliper002_cali_0: THREE.Mesh;
    wheel004_tire_0: THREE.Mesh;
    wheel004_disc_0: THREE.Mesh;
    wheel004_rim_0: THREE.Mesh;
    wheel004_chrome_0: THREE.Mesh;
    caliper004_cali_0: THREE.Mesh;
  };
  materials: {
    glack: THREE.MeshPhysicalMaterial;
    glass: THREE.MeshStandardMaterial;
    chrome: THREE.MeshStandardMaterial;
    paint: THREE.MeshPhysicalMaterial;
    mlack: THREE.MeshStandardMaterial;
    bumpa: THREE.MeshStandardMaterial;
    glass_l: THREE.MeshStandardMaterial;
    emit: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    ["red.001"]: THREE.MeshStandardMaterial;
    tire: THREE.MeshStandardMaterial;
    disc: THREE.MeshStandardMaterial;
    material_12: THREE.MeshPhysicalMaterial;
    cali: THREE.MeshPhysicalMaterial;
  };
};

const Car = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/tesla_model_y.glb"
  ) as GLTFResult;
  const LARGEST_WHEEL_SIZE = 24;
  const {
    roofGlass,
    chrome,
    frontGlass,

    rearBumper,
    frontHeadLights,

    rearLights,
    fogLight,

    frontLeftWheelTire,
    frontLeftWheelDisc,
    frontLeftWheelRim,
    frontLeftWheelBolts,
    frontLeftWheelCaliper,
    frontLeftRimSize = LARGEST_WHEEL_SIZE,

    frontRightWheelTire,
    frontRightWheelDisc,
    frontRightWheelRim,
    frontRightWheelBolts,
    frontRightWheelCaliper,
    frontRightRimSize = LARGEST_WHEEL_SIZE,

    rearLeftWheelTire,
    rearLeftWheelDisc,
    rearLeftWheelRim,
    rearLeftWheelBolts,
    rearLeftWheelCaliper,
    rearLeftRimSize = LARGEST_WHEEL_SIZE,

    rearRightWheelTire,
    rearRightWheelDisc,
    rearRightWheelRim,
    rearRightWheelBolts,
    rearRightWheelCaliper,
    rearRightRimSize = LARGEST_WHEEL_SIZE,

    carColor,
  } = useAtomValue(carCustomizationsAtom);

  const setCarCustomizations = useSetAtom(carCustomizationsAtom);

  useEffect(() => {
    //default colors for the car
    //if the colors are not set in the atom, set them to the default colors
    if (roofGlass) return;
    setCarCustomizations((prev) => ({
      ...prev,
      roofGlass: `#${materials.glass.color.getHexString()}`,
      chrome: `#${materials.chrome.color.getHexString()}`,
      frontGlass: `#${materials.glass.color.getHexString()}`,

      rearBumper: `#${materials.bumpa.color.getHexString()}`,
      frontHeadLights: `#${materials.glass_l.color.getHexString()}`,
      rearLights: `#${materials.material.color.getHexString()}`,

      frontLeftWheelTire: `#${materials.tire.color.getHexString()}`,
      frontLeftWheelDisc: `#${materials.disc.color.getHexString()}`,
      frontLeftWheelRim: `#${materials.material_12.color.getHexString()}`,
      frontLeftWheelBolts: `#${materials.chrome.color.getHexString()}`,
      frontLeftWheelCaliper: `#${materials.cali.color.getHexString()}`,

      frontRightWheelTire: `#${materials.tire.color.getHexString()}`,
      frontRightWheelDisc: `#${materials.disc.color.getHexString()}`,
      frontRightWheelRim: `#${materials.material_12.color.getHexString()}`,
      frontRightWheelBolts: `#${materials.chrome.color.getHexString()}`,
      frontRightWheelCaliper: `#${materials.cali.color.getHexString()}`,

      rearLeftWheelTire: `#${materials.tire.color.getHexString()}`,
      rearLeftWheelDisc: `#${materials.disc.color.getHexString()}`,
      rearLeftWheelRim: `#${materials.material_12.color.getHexString()}`,
      rearLeftWheelBolts: `#${materials.chrome.color.getHexString()}`,
      rearLeftWheelCaliper: `#${materials.cali.color.getHexString()}`,
      rearRightWheelTire: `#${materials.tire.color.getHexString()}`,
      rearRightWheelDisc: `#${materials.disc.color.getHexString()}`,
      rearRightWheelRim: `#${materials.material_12.color.getHexString()}`,
      rearRightWheelBolts: `#${materials.chrome.color.getHexString()}`,
      rearRightWheelCaliper: `#${materials.cali.color.getHexString()}`,
      carColor: `#${materials.paint.color.getHexString()}`,

      rearLeftRimSize: rimSizes[rimSizes.length - 1],
      rearRightRimSize: rimSizes[rimSizes.length - 1],
      frontLeftRimSize: rimSizes[rimSizes.length - 1],
      frontRightRimSize: rimSizes[rimSizes.length - 1],
    }));
  }, []);

  return (
    <group {...props} dispose={null} scale={0.01} position={[0, 0, 0]}>
      <group name="Tesla_Model_Yfbx">
        <group name="RootNode">
          <group name="frames" scale={100}>
            <mesh
              name="mesh001_glack_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh001_glack_0.geometry}
              material={materials.glack}
            />
          </group>
          <group name="roof glass" scale={100}>
            <mesh
              name="mesh002_glass_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh002_glass_0.geometry}
              material={materials.glass}
            >
              <meshStandardMaterial {...materials.glass} color={roofGlass} />
            </mesh>
          </group>
          <group name="chrome " scale={100}>
            <mesh
              name="mesh003_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh003_chrome_0.geometry}
              material={materials.chrome}
            >
              <meshStandardMaterial {...materials.chrome} color={chrome} />
            </mesh>
          </group>
          <group name="mesh004" scale={100}>
            <mesh
              name="car color"
              castShadow
              receiveShadow
              geometry={nodes.mesh004_paint_0.geometry}
              material={materials.paint}
            >
              <meshPhysicalMaterial {...materials.paint} color={carColor} />
            </mesh>
          </group>
          <group name="mesh007" scale={100}>
            <mesh
              name="front glass"
              castShadow
              receiveShadow
              geometry={nodes.mesh007_glass_0.geometry}
              material={materials.glass}
            >
              <meshStandardMaterial {...materials.glass} color={frontGlass} />
            </mesh>
          </group>
          <group name="front grill " scale={100}>
            <mesh
              name="mesh008_mlack_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh008_mlack_0.geometry}
              material={materials.mlack}
            ></mesh>
          </group>
          <group name="mesh009" scale={100}>
            <mesh
              name="rear bumper"
              castShadow
              receiveShadow
              geometry={nodes.mesh009_bumpa_0.geometry}
              material={materials.bumpa}
            >
              <meshStandardMaterial {...materials.bumpa} color={rearBumper} />
            </mesh>
          </group>
          <group name="mesh010" scale={100}>
            <mesh
              name="front head lights"
              castShadow
              receiveShadow
              geometry={nodes.mesh010_glass_l_0.geometry}
              material={materials.glass_l}
            >
              <meshStandardMaterial
                {...materials.glass_l}
                color={frontHeadLights}
              />
            </mesh>
          </group>
          <group name="mesh011" scale={100}>
            <mesh
              name="mesh011_emit_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh011_emit_0.geometry}
              material={materials.emit}
            />
          </group>
          <group name="rear lights" scale={100}>
            <mesh
              name="mesh012_red_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh012_red_0.geometry}
              material={materials.material}
            >
              <meshStandardMaterial
                {...materials.material}
                color={rearLights}
              />
            </mesh>
          </group>
          <group name="under tray" scale={100}>
            <mesh
              name="mesh005_mlack_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh005_mlack_0.geometry}
              material={materials.mlack}
            />
          </group>
          <group name="fog light" scale={100}>
            <mesh
              name="mesh006_red001_0"
              castShadow
              receiveShadow
              geometry={nodes.mesh006_red001_0.geometry}
              material={materials["red.001"]}
            >
              <meshStandardMaterial
                {...materials["red.001"]}
                color={fogLight}
              />
            </mesh>
          </group>
          <group
            name="front left wheel"
            position={[83.884, 37.78, 163.232]}
            rotation={[-Math.PI / 2, 0, -0.297]}
            scale={204.779 * (frontLeftRimSize / LARGEST_WHEEL_SIZE)}
          >
            <mesh
              name="tire"
              castShadow
              receiveShadow
              geometry={nodes.wheel003_tire_0.geometry}
              material={materials.tire}
            >
              <meshStandardMaterial
                {...materials.tire}
                color={frontLeftWheelTire}
              />
            </mesh>
            <mesh
              name="brake disc"
              castShadow
              receiveShadow
              geometry={nodes.wheel003_disc_0.geometry}
              material={materials.disc}
            >
              <meshStandardMaterial
                {...materials.disc}
                color={frontLeftWheelDisc}
              />
            </mesh>
            <mesh
              name="rim"
              castShadow
              receiveShadow
              geometry={nodes.wheel003_rim_0.geometry}
              material={materials.material_12}
            >
              <meshPhysicalMaterial
                {...materials.material_12}
                color={frontLeftWheelRim}
              />
            </mesh>
            <mesh
              name="bolts"
              castShadow
              receiveShadow
              geometry={nodes.wheel003_chrome_0.geometry}
              material={materials.chrome}
            >
              <meshPhysicalMaterial
                {...materials.chrome}
                color={frontLeftWheelBolts}
              />
            </mesh>
          </group>
          <group
            name="front left caliper"
            position={[83.884, 37.78, 163.232]}
            rotation={[-2.777, 0.278, -0.104]}
            scale={204.779}
          >
            <mesh
              name="caliper"
              castShadow
              receiveShadow
              geometry={nodes.caliper003_cali_0.geometry}
              material={materials.cali}
            >
              <meshPhysicalMaterial
                {...materials.cali}
                color={frontLeftWheelCaliper}
              />
            </mesh>
          </group>
          <group
            name="front right wheel"
            position={[-83.884, 37.78, 163.232]}
            rotation={[-Math.PI / 2, 0, 2.845]}
            scale={204.779 * (frontRightRimSize / LARGEST_WHEEL_SIZE)}
          >
            <mesh
              name="wheel001_tire_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel001_tire_0.geometry}
              material={materials.tire}
            >
              <meshStandardMaterial
                {...materials.tire}
                color={frontRightWheelTire}
              />
            </mesh>
            <mesh
              name="wheel001_disc_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel001_disc_0.geometry}
              material={materials.disc}
            >
              <meshStandardMaterial
                {...materials.disc}
                color={frontRightWheelDisc}
              />
            </mesh>
            <mesh
              name="wheel001_rim_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel001_rim_0.geometry}
              material={materials.material_12}
            >
              <meshPhysicalMaterial
                {...materials.material_12}
                color={frontRightWheelRim}
              />
            </mesh>
            <mesh
              name="wheel001_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel001_chrome_0.geometry}
              material={materials.chrome}
            >
              <meshPhysicalMaterial
                {...materials.chrome}
                color={frontRightWheelBolts}
              />
            </mesh>
          </group>
          <group
            name="front right caliper"
            position={[-83.884, 37.78, 163.232]}
            rotation={[-2.777, 0.278, -0.104]}
            scale={[-204.779, 204.779, 204.779]}
          >
            <mesh
              name="caliper001_cali_0"
              castShadow
              receiveShadow
              geometry={nodes.caliper001_cali_0.geometry}
              material={materials.cali}
            >
              <meshPhysicalMaterial
                {...materials.cali}
                color={frontRightWheelCaliper}
              />
            </mesh>
          </group>
          <group
            name="rear left wheel"
            position={[83.884, 37.78, -126.603]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={204.779 * (rearLeftRimSize / LARGEST_WHEEL_SIZE)}
          >
            <mesh
              name="wheel002_tire_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel002_tire_0.geometry}
              material={materials.tire}
            >
              <meshStandardMaterial
                {...materials.tire}
                color={rearLeftWheelTire}
              />
            </mesh>
            <mesh
              name="wheel002_disc_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel002_disc_0.geometry}
              material={materials.disc}
            >
              <meshStandardMaterial
                {...materials.disc}
                color={rearLeftWheelDisc}
              />
            </mesh>
            <mesh
              name="wheel002_rim_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel002_rim_0.geometry}
              material={materials.material_12}
            >
              <meshPhysicalMaterial
                {...materials.material_12}
                color={rearLeftWheelRim}
              />
            </mesh>
            <mesh
              name="wheel002_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel002_chrome_0.geometry}
              material={materials.chrome}
            >
              <meshPhysicalMaterial
                {...materials.chrome}
                color={rearLeftWheelBolts}
              />
            </mesh>
          </group>
          <group
            name="rear left caliper"
            position={[83.884, 37.78, -126.603]}
            rotation={[-2.792, 0, 0]}
            scale={204.779}
          >
            <mesh
              name="caliper002_cali_0"
              castShadow
              receiveShadow
              geometry={nodes.caliper002_cali_0.geometry}
              material={materials.cali}
            >
              <meshPhysicalMaterial
                {...materials.cali}
                color={rearLeftWheelCaliper}
              />
            </mesh>
          </group>
          <group
            name="rear right wheel"
            position={[-83.884, 37.78, -126.603]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={204.779 * (rearRightRimSize / LARGEST_WHEEL_SIZE)}
          >
            <mesh
              name="wheel004_tire_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel004_tire_0.geometry}
              material={materials.tire}
            >
              <meshStandardMaterial
                {...materials.tire}
                color={rearRightWheelTire}
              />
            </mesh>

            <mesh
              name="wheel004_disc_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel004_disc_0.geometry}
              material={materials.disc}
            >
              <meshStandardMaterial
                {...materials.disc}
                color={rearRightWheelDisc}
              />
            </mesh>
            <mesh
              name="wheel004_rim_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel004_rim_0.geometry}
              material={materials.material_12}
            >
              <meshPhysicalMaterial
                {...materials.material_12}
                color={rearRightWheelRim}
              />
            </mesh>
            <mesh
              name="wheel004_chrome_0"
              castShadow
              receiveShadow
              geometry={nodes.wheel004_chrome_0.geometry}
              material={materials.chrome}
            >
              <meshPhysicalMaterial
                {...materials.chrome}
                color={rearRightWheelBolts}
              />
            </mesh>
          </group>
          <group
            name="rear right caliper"
            position={[-83.884, 37.78, -126.603]}
            rotation={[-2.792, 0, 0]}
            scale={[-204.779, 204.779, 204.779]}
          >
            <mesh
              name="caliper004_cali_0"
              castShadow
              receiveShadow
              geometry={nodes.caliper004_cali_0.geometry}
              material={materials.cali}
            >
              <meshPhysicalMaterial
                {...materials.cali}
                color={rearRightWheelCaliper}
              />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/tesla_model_y.glb");

export default Car;
