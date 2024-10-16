import React, { useState, useEffect, useCallback, useRef, forwardRef, Suspense } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import moudlycheese from '../assets/fonts/Mouldy_Cheese_Regular.json';

const PortfolioRain3D = ({ resetColors, rainAmount, singleColor, enableYRotation, rotationSpeed, currentColor, rainWord }) => {
  const [items, setItems] = useState([]);
  const colorRef = useRef([]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateItems = useCallback(() => {
    const newItems = Array.from({ length: rainAmount }).map(() => ({
      position: [
        Math.random() * 9 - 4, // X-axis position
        Math.random() * 7 * 2 - 2, // Y-axis position
        Math.random() * 9 - 4.5, // Z-axis position
      ],
      rotation: Math.random() * Math.PI,
    }));
    setItems(newItems);

    // Initialize colors
    colorRef.current = Array.from({ length: rainAmount }).map(() =>
      singleColor ? singleColor : getRandomColor()
    );
  }, [rainAmount, singleColor]);

  useEffect(() => {
    generateItems(); // Generate items initially
  }, [generateItems]);

  // Reset colors without re-rendering
  useEffect(() => {
    if (resetColors) {
      colorRef.current = Array.from({ length: rainAmount }).map(() =>
        singleColor || getRandomColor()
      );
    }
  }, [resetColors, rainAmount, singleColor]);

  useFrame(() => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        const y = item.position[1] - 0.015;
        const newY = y < -5 ? 5 : y; // Increased the reset height by 6x
        const newRotation = enableYRotation ? item.rotation + rotationSpeed : item.rotation; // Use rotation speed
        return {
          ...item,
          position: [item.position[0], newY, item.position[2]],
          rotation: newRotation,
        };
      })
    );
  });

  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {/* Main 3D text */}
          <Text3D
            position={item.position}
            rotation={[0, enableYRotation ? item.rotation : 0, Math.PI / -2]}
            material={
              new THREE.MeshPhysicalMaterial({
                color: currentColor,
                roughness: 0.25,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
              })
            }
            font={moudlycheese}
            size={0.15}
            height={0.05}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.003}
            bevelOffset={0}
            bevelSegments={3}
          >
            {rainWord || 'PORTFOLIO'} 
          </Text3D>

          {/* Shadow effect text, slightly offset */}
          <Text3D
            position={[
              item.position[0] - 0.0075,
              item.position[1] + 0.0075,
              item.position[2] - 0.0075,
            ]}
            rotation={[0, enableYRotation ? item.rotation : 0, Math.PI / -2]}
            material={
              new THREE.MeshPhysicalMaterial({
                color: '#000000',
                roughness: 0.5,
                clearcoat: 0.5, 
                clearcoatRoughness: 0.5,
              })
            }
            font={moudlycheese}
            size={0.15}
            height={0.05}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.003}
            bevelOffset={0}
            bevelSegments={3}
          >
            {rainWord || 'PORTFOLIO'} 
          </Text3D>
        </React.Fragment>
      ))}
    </>
  );
};

export default PortfolioRain3D;

const PortfolioRain3DWrapper = forwardRef((props, ref) => (
  <Suspense fallback={null}>
    <PortfolioRain3D ref={ref} {...props} />
  </Suspense>
));

PortfolioRain3DWrapper.displayName = 'PortfolioRain3DWrapper';

export { PortfolioRain3DWrapper as PortfolioRain3D }
