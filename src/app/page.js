'use client'

import styles from "./page.module.css";
import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { Model_non_compressed } from "./Model_non_compressed";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    
      <Canvas style={{'width':'100vw', 'height':'100vh'}} camera={{ position: [0, 1.8, 6], target: [0, 3, 0], near: 0.05, far: 50, fov: 50 }}  >
        <OrbitControls />
        <ambientLight intensity={5} />
        <directionalLight position={[0, 5, 5]}  intensity={1} />
        {/* <Model /> */}
        <Model_non_compressed />
      </Canvas>
   
  );
}
