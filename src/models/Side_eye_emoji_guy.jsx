/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 side_eye_emoji_guy.glb 
Author: Erik Woods (https://sketchfab.com/erikwoods)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shifty-eye-emoji-guy-63e6d5556d1c41e186c791863730ec4a
Title: Shifty-eye emoji guy
*/

import React, { forwardRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import sideeyeemoji from '../assets/models/side_eye_emoji_guy.glb'

const SideEyeModel = forwardRef((props, ref) => {
  const { currentColor } = props;
  const { nodes, materials } = useGLTF(sideeyeemoji)
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={1.75} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.25, -0.757, 0.256]}>
          <mesh geometry={nodes.Eye_0.geometry} material={materials.Eye_Ball} material-color={currentColor} />
          <mesh geometry={nodes.Eye_1.geometry} material={materials.Eye_Edge} />
          <mesh geometry={nodes.Eye_2.geometry} material={materials.Face} />
        </group>
        <group position={[0, -0.749, 0.292]}>
          <mesh geometry={nodes.Eye_Ball_Right_0.geometry} material={materials.Eye_Edge} position={[-0.377, 0.013, 0.016]} />
          <mesh geometry={nodes.Eye_Ball_Left_0.geometry} material={materials.Eye_Edge} position={[0.131, -0.048, 0.028]} />
        </group>
        <mesh geometry={nodes.Head_0.geometry} material={materials.Face} />
        <mesh geometry={nodes.Mouth_0.geometry} material={materials.Eye_Edge} position={[0, -0.833, 0.044]} />
      </group>
    </group>
  )
});

SideEyeModel.displayName = 'SideEyeModel';

useGLTF.preload(sideeyeemoji)

const SideEyeModelWrapper = forwardRef((props, ref) => (
  <Suspense fallback={null}>
    <SideEyeModel ref={ref} {...props} />
  </Suspense>
));

SideEyeModelWrapper.displayName = 'SideEyeModelWrapper';

export { SideEyeModelWrapper as SideEyeModel };