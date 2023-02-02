"use client";
import { Canvas } from "@react-three/fiber";
import { MantineProvider } from "@mantine/core";
import Scene from "@/components/CarView";
import CarConfigurator from "@/components/CarConfigurator";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <MantineProvider>
      <div className="h-screen w-screen">
        <Canvas dpr={[1, 2]} camera={{ position: [3, 2, 3.5] }}>
          <color attach="background" args={["#87ceeb"]} />
          <fog attach="fog" args={["#87ceeb", 10, 20]} />
          <Scene />
        </Canvas>
        <CarConfigurator />
      </div>
    </MantineProvider>
  );
}
