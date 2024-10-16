/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 portal_companion_cube.glb 
Author: Anthony Yanez (https://sketchfab.com/paulyanez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/portal-companion-cube-3248a94658e84150a817887696b4812d
Title: Portal: Companion Cube
*/

import React, { forwardRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import companion from '../assets/models/portal_companion_cube.glb'

const CompanionCubeModel = forwardRef((props, ref) => {
  const { currentColor } = props;
  const { nodes, materials } = useGLTF(companion);

  return (
    <group scale={.005} ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes['Companion_Cube_02_-_Default_0'].geometry}
        material={materials['02_-_Default']}
        material-color={currentColor}
      />
      <mesh
        geometry={nodes['Companion_Cube_03_-_Default_0'].geometry}
        material={materials['03_-_Default']} 
        // material-color={currentColor}
      />
      <mesh
        geometry={nodes['Companion_Cube_08_-_Default_0'].geometry}
        material={materials['08_-_Default']} 
        // material-color={currentColor}
      />
      <mesh
        geometry={nodes['Companion_Cube_07_-_Default_0'].geometry}
        material={materials['07_-_Default']} 
        // material-color={currentColor}
      />
    </group>
  );
});

CompanionCubeModel.displayName = 'CompanionCubeModel';

useGLTF.preload(companion);

const CompanionCubeModelWrapper = forwardRef((props, ref) => (
  <Suspense fallback={null}>
    <CompanionCubeModel ref={ref} {...props} />
  </Suspense>
));

CompanionCubeModelWrapper.displayName = 'CompanionCubeModelWrapper';

export { CompanionCubeModelWrapper as CompanionCubeModel };
