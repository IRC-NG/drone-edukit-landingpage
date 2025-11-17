
'use client'

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";

export function DroneModel() {
  // load as BufferGeometry
  // Use absolute path from public/ and correct filename case
  const geometry = useLoader(STLLoader, '/3d/drone.stl') as THREE.BufferGeometry;

  if (!geometry) return null;

  // Ensure geometry has vertex normals
  if (!geometry.attributes.normal) {
    geometry.computeVertexNormals();
  }

  // Compute bounding box and normalize size & center
  geometry.computeBoundingBox();
  if (geometry.boundingBox) {
    const box = geometry.boundingBox;
    const size = new THREE.Vector3();
    box.getSize(size);

    // Target maximum size in world units (adjustable)
    const TARGET = 5.0; // ~2 units
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = maxDim > 0 ? TARGET / maxDim : 1;

    // Apply centering translation then scale
    const center = box.getCenter(new THREE.Vector3());
    geometry.translate(-center.x, -center.y, -center.z);
    geometry.scale(scaleFactor, scaleFactor, scaleFactor);
  }

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial color="#2563eb" metalness={0.3} roughness={0.4} />
    </mesh>
  );
}
