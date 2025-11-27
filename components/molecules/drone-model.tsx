'use client'

import { useGLTF, Bounds } from "@react-three/drei";
import * as THREE from 'three';
import { useMemo } from "react";

export function DroneModel() {
  const { scene } = useGLTF('/3d/drone.glb');
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const redMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#8B0000' }), []);

  useMemo(() => {
    clonedScene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.material = redMaterial;
      }
    });
  }, [clonedScene, redMaterial]);

  return (
    <Bounds fit clip observe margin={1.4}>
      <primitive object={clonedScene} />
    </Bounds>
  );
}

useGLTF.preload('/3d/drone.glb');