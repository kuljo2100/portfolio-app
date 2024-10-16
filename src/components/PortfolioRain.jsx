import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

const PortfolioRain = ({ resetColors, rainAmount, singleColor, enableYRotation, rotationSpeed, currentColor, rainWord }) => {
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
        const y = item.position[1] - 0.01;
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
          <Text
            position={item.position}
            rotation={[0, enableYRotation ? item.rotation : 0, Math.PI / -2]}
            // color={colorRef.current[index]}
            color={currentColor}
            fontSize={0.175}
            font={mouldyc}
            // fontWeight={'bold'}
            fontStyle={'italic'}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.05}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            {rainWord || 'PORTFOLIO'} 
          </Text>
          <Text
            position={[
              item.position[0] - 0.0075,
              item.position[1] + 0.0075,
              item.position[2] - 0.0075,
            ]}
            rotation={[0, enableYRotation ? item.rotation : 0, Math.PI / -2]}
            color="#000000"
            fontSize={0.175}
            font={mouldyc}
            // fontWeight={'bold'}
            fontStyle={'italic'}
            maxWidth={2}
            lineHeight={1}
            letterSpacing={0.05}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            {rainWord || 'PORTFOLIO'} 
          </Text>
        </React.Fragment>
      ))}
    </>
  );
};

export default PortfolioRain;
