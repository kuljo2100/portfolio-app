/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ps5_controller.glb 
Author: Fred Drabble (https://sketchfab.com/FredDrabble)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ps5-controller-f75caead1dc1474195eb32a7f4c71117
Title: ps5 controller
*/

import React, { forwardRef, Suspense } from 'react'
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import controller from '../assets/models/ps5_controller.glb'

const ControllerModel = forwardRef((props, ref) => {
  const { currentColor } = props;
  const { nodes, materials } = useGLTF(controller)
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={.035}
      >
        <group
         rotation={[Math.PI / 2, 0, 0]}
         >
          <group position={[-0.057, 18.346, 5.655]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[29.939, -0.093, -3.709]}>
              <mesh geometry={nodes['Plane002_10_-_Default_0'].geometry} material={materials['10_-_Default']} 
              // material-color={currentColor}
              />
              <mesh geometry={nodes['Plane002_11_-_Default_0'].geometry} material={materials['11_-_Default']}
              // material-color={currentColor}
              />
              <mesh geometry={nodes['Plane002_16_-_Default_0'].geometry} material={materials['16_-_Default']}
              // material-color={currentColor}
               />
              <mesh geometry={nodes.Plane002_ultrablack_0.geometry} material={materials.ultrablack} 
              // material-color={currentColor}
              />
              <mesh geometry={nodes.Plane002_standard_steel_0.geometry} material={materials.standard_steel}
              // material-color={currentColor}
               />
            </group>
          </group>
          <group position={[-0.057, 22.221, -26.994]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['touchpad_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[29.939, -31.784, -7.037]} 
            // material-color={currentColor}
            />
          </group>
          <group position={[21.02, 27.17, 4.469]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.506, 1.506, 2.421]}>
            <group position={[0, 0, -2.617]}>
              <mesh geometry={nodes['Cylinder005_10_-_Default_0'].geometry} material={materials['10_-_Default']} 
              // material-color={currentColor}
              />
              <mesh geometry={nodes.Cylinder005_ultrablack_0.geometry} material={materials.ultrablack} 
              // material-color={currentColor}
              />
            </group>
          </group>
          <group position={[-20.825, 27.17, 4.469]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.506, 1.506, 2.421]}>
            <group position={[0, 0, -2.617]}>
              <mesh geometry={nodes['Cylinder006_10_-_Default_0'].geometry} material={materials['10_-_Default']} 
              // material-color={currentColor}
              />
              <mesh geometry={nodes.Cylinder006_ultrablack_0.geometry} material={materials.ultrablack} 
              // material-color={currentColor}
              />
            </group>
          </group>
          <group position={[41.139, 19.117, -38.601]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.topbuttons_ultrablack_0.geometry} material={materials.ultrablack} position={[-10.359, -45.182, -4.479]}
            material-color={currentColor} 
            />
          </group>
          <group position={[-41.22, 19.117, -38.601]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.topbuttons001_ultrablack_0.geometry} material={materials.ultrablack} position={[-10.359, -45.182, -4.479]}
            material-color={currentColor} 
            />
          </group>
          <mesh geometry={nodes.Box001_clear_0.geometry} material={materials.clear} position={[-43.195, 25.408, -23.138]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.727, 1.727, 0.504]}
          // material-color={currentColor}
           />
          <mesh geometry={nodes.Box002_clear_0.geometry} material={materials.clear} position={[-43.195, 25.408, -7.998]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[1.727, 1.727, 0.504]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.Box003_clear_0.geometry} material={materials.clear} position={[-50.765, 25.408, -15.568]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.727, 1.727, 0.504]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.Box004_clear_0.geometry} material={materials.clear} position={[-35.625, 25.408, -15.568]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[1.727, 1.727, 0.504]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.Cylinder001_clear_0.geometry} material={materials.clear} position={[42.71, 23.075, -25.445]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.926, 0.926, 1.01]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.Cylinder002_clear_0.geometry} material={materials.clear} position={[42.71, 23.075, -5.726]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.926, 0.926, 1.01]} 
          material-color={currentColor}
          />
          <mesh geometry={nodes.Cylinder003_clear_0.geometry} material={materials.clear} position={[33.283, 23.075, -15.732]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.926, 0.926, 1.01]}
          // material-color={currentColor}
           />
          <mesh geometry={nodes.Cylinder004_clear_0.geometry} material={materials.clear} position={[52.412, 23.075, -15.732]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.926, 0.926, 1.01]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.Cylinder007_rubber_0.geometry} material={materials.rubber} position={[21.072, 34.686, 4.492]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.124, 1.124, 0.235]} 
          material-color={currentColor}
          />
          <mesh geometry={nodes.Cylinder008_rubber_0.geometry} material={materials.rubber} position={[-20.863, 34.686, 4.492]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.124, 1.124, 0.235]} 
          material-color={currentColor}
          />
          <mesh geometry={nodes['Box005_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[-32.271, 26.369, -31.563]} rotation={[-1.769, 0, 0]} scale={[1, 1, 0.564]} 
          // material-color={currentColor}
          />
          <mesh geometry={nodes.bottombuttons_ultrablack_0.geometry} material={materials.ultrablack} position={[40.836, 6.454, -36.655]} rotation={[-Math.PI / 2, 0, 0]} 
          material-color={currentColor}
          />
          <mesh geometry={nodes.bottombuttons001_ultrablack_0.geometry} material={materials.ultrablack} position={[-41.089, 6.454, -36.655]} rotation={[-Math.PI / 2, 0, 0]} 
          material-color={currentColor}
          />
        </group>
      </group>
    </group>
  )
});

ControllerModel.displayName = 'ControllerModel';

useGLTF.preload(controller)

const ControllerModelWrapper = forwardRef((props, ref) => (
  <Suspense fallback={null}>
    <ControllerModel ref={ref} {...props} />
  </Suspense>
));

ControllerModelWrapper.displayName = 'ControllerModelWrapper';

export { ControllerModelWrapper as ControllerModel };