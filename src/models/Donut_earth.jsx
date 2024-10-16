/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 donut_earth.glb 
Author: Keeya (https://sketchfab.com/keeya)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/earth-sort-of-53ca491de67147539b60ea971cceb415
Title: Earth... sort of
*/

import React, { forwardRef, Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import donutearth from '../assets/models/donut_earth.glb'
import { useFrame } from '@react-three/fiber'

const DonutEarthModel = forwardRef((props, ref) => {
  const { currentColor } = props;
  const group = useRef() 
  const { nodes, materials } = useGLTF(donutearth)

  const groupRef = useRef() // Create a ref for the group

  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.005;
  //     // groupRef.current.rotation.x += 0.01;
  //     groupRef.current.rotation.z += 0.005;
  //   }
  // });

  const customMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0,
    roughness: 0.9,
    clearcoat: .9,
    clearcoatRoughness: .9,
    transparent: false,
    side: THREE.DoubleSide,
    wireframe: false,
    color: new THREE.Color(currentColor || 'white'),
  });

  const material = new THREE.MeshPhysicalMaterial({
    metalness: 0,
    roughness: 0.9,
    clearcoat: .9,
    clearcoatRoughness: .9,
    transparent: false,
    side: THREE.DoubleSide,
    wireframe: false,
  });
  
  const material2 = new THREE.MeshPhysicalMaterial({
    metalness: 0,
    roughness: 0.9,
    clearcoat: .9,
    clearcoatRoughness: .9,
    transparent: false,
    side: THREE.DoubleSide,
    wireframe: false,
    // color: currentColor,
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[-1.221, 0.25, -0.001]} 
      // rotation={[-1.427, -0.097, 0]}
      rotation={[-Math.PI/4, Math.PI/4, -Math.PI/2]}
      scale={0.015}
      ref={groupRef}
      >
        {/* <group 
        // rotation={[Math.PI / 4, 0, 0]} 
        scale={0.0175}> */}
          <group rotation={[-Math.PI / 2, 0, -0.397]} scale={100}>
            <mesh geometry={nodes.Earth_Earth_Texture_0.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_1.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_2.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_3.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_4.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_5.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_6.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_7.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_8.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_9.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_10.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_11.geometry} material={materials.Earth_Texture} />
            <mesh geometry={nodes.Earth_Earth_Texture_0_12.geometry} material={materials.Earth_Texture} />
          </group>
          <mesh geometry={nodes.Clouds_Clouds_0.geometry} 
          material={materials.Clouds} 
          material-color={currentColor}
          rotation={[-Math.PI / 2, 0, -0.397]}
          scale={100} />
          <mesh geometry={nodes.Clouds_Lower_Clouds_Lower_0.geometry} 
          material={materials.Clouds_Lower} 
          material-color={currentColor}
          rotation={[-Math.PI / 2, 0, -0.397]} scale={100} 
          /> 
        </group>
      {/* </group> */}
    </group>
  )
})

DonutEarthModel.displayName = 'DonutEarthModel';

useGLTF.preload(donutearth)

const DonutEarthModelWrapper = forwardRef((props, ref) => (
  <Suspense fallback={null}>
    <DonutEarthModel ref={ref} {...props} />
  </Suspense>
));

DonutEarthModelWrapper.displayName = 'DonutEarthModelWrapper';

export { DonutEarthModelWrapper as DonutEarthModel };
