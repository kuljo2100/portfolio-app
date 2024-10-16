import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { ScreenSpace, Text, Text3D } from "@react-three/drei";
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';
import moudlycheese from '../assets/fonts/Mouldy_Cheese_Regular.json';
import * as THREE from 'three';

export const LandingPageTitle = ({ titleWord, nameWord, currentColor, isHovered }) => {
  const title2Ref = useRef();
  const name2Ref = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0); // Only track x-axis scroll
  const [scrolling, setScrolling] = useState(false); // Track if scrolling
  const [isLocked, setIsLocked] = useState(false);
  const initialPosition = { x: 0, y: 0 };

  // Handle mouse movement
  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth) * 2 - 1;
    const y = -(event.clientY / innerHeight) * 2 + 1;
    setMousePos({ x, y });
  };

  // Handle scroll movement (only x-axis)
  const handleScroll = (event) => {
    setScrollPos((prev) => prev + event.deltaY * 0.005); // Adjust sensitivity
    setScrolling(true); // Indicate that scrolling is happening
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setScrolling(false); // Reset scroll state after some time
    }, 200); // Time in ms to consider scrolling stopped
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Rotate the text based on mouse movement or scroll input
  useFrame(() => {
    if (title2Ref.current) {
      if (isHovered && !isLocked) {
        // Reset and lock the rotation when hovered
        title2Ref.current.rotation.x = initialPosition.x;
        title2Ref.current.rotation.y = initialPosition.y;
        setIsLocked(true);
      } else if (!isHovered && isLocked) {
        // Unlock after hover is done
        setIsLocked(false);
      } else if (!isLocked) {
        // Rotate based on scroll or mouse movement
        if (scrolling) {
          title2Ref.current.rotation.x = scrollPos; // Use scroll input for y-axis rotation
        } else {
          // Use mouse movement when not scrolling
          title2Ref.current.rotation.x = mousePos.y * 2;
          title2Ref.current.rotation.y = mousePos.x * 2;
        }
      }
    }
  });
  
  useFrame(() => {
    if (name2Ref.current) {
      if (isHovered && !isLocked) {
        // Reset and lock the rotation when hovered
        name2Ref.current.rotation.x = initialPosition.x;
        name2Ref.current.rotation.y = initialPosition.y;
        setIsLocked(true);
      } else if (!isHovered && isLocked) {
        // Unlock after hover is done
        setIsLocked(false);
      } else if (!isLocked) {
        // Rotate based on scroll or mouse movement
        if (scrolling) {
          name2Ref.current.rotation.x = scrollPos; // Use scroll input for y-axis rotation
        } else {
          // Use mouse movement when not scrolling
          name2Ref.current.rotation.x = mousePos.y * 2;
          name2Ref.current.rotation.y = mousePos.x * 2;
        }
      }
    }
  });

  return (
    <>
    <group ref={name2Ref}>
      <ScreenSpace depth={9}>
        <Text
          position={[0, 4.75, 0]}
          color={currentColor}
          fontSize={1.25}
          font={mouldyc}
          fontStyle={"italic"}
          maxWidth={20}
          lineHeight={1}
          letterSpacing={0.1}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {nameWord || "@kuljo2100"}
        </Text>
        <Text
          position={[-0.05, 4.7, -0.05]}
          color="#000000"
          fontSize={1.25}
          font={mouldyc}
          fontStyle={"italic"}
          maxWidth={20}
          lineHeight={1}
          letterSpacing={0.1}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {nameWord || "@kuljo2100"}
        </Text>
        </ScreenSpace>
        </group>
        <group ref={title2Ref} >
        <ScreenSpace depth={9}>
        <Text
          position={[0, 2.75, 0]}
          color={currentColor}
          fontSize={1.25}
          font={mouldyc}
          fontStyle={"italic"}
          maxWidth={20}
          lineHeight={1}
          letterSpacing={0.1}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {titleWord || "Portfolio Page"}
        </Text>
        <Text
          position={[-0.05, 2.7, -0.05]}
          color="#000000"
          fontSize={1.25}
          font={mouldyc}
          fontStyle={"italic"}
          maxWidth={20}
          lineHeight={1}
          letterSpacing={0.1}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {titleWord || "Portfolio Page"}
        </Text>
      </ScreenSpace>
    </group>
    </>
  );
};

export const LandingPageTitle3D = ({ titleWord, nameWord, currentColor, isHovered }) => {
  const titleGroupRef = useRef(); // Main group for rotation
  const titleGroup2Ref = useRef(); // Main group for rotation
  const textRef = useRef();
  const nameRef = useRef(); // Reference for the text
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0); // Only track x-axis scroll
  const [scrolling, setScrolling] = useState(false); // Track if scrolling
  const [isLocked, setIsLocked] = useState(false);
  const initialPosition = { x: 0, y: 0 };
  const [textCenterOffset, setTextCenterOffset] = useState(0); // Offset for centering pivot
  const [textCenterOffset2, setTextCenterOffset2] = useState(0); // Offset for centering pivot

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth) * 2 - 1;
    const y = -(event.clientY / innerHeight) * 2 + 1;
    setMousePos({ x, y });
  };

  // Handle scroll movement (only x-axis)
  const handleScroll = (event) => {
    setScrollPos((prev) => prev + event.deltaY * 0.005); // Adjust sensitivity
    setScrolling(true); // Indicate that scrolling is happening
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setScrolling(false); // Reset scroll state after some time
    }, 200); // Time in ms to consider scrolling stopped
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Rotate the group based on mouse movement or scroll input
  useFrame(() => {
    if (titleGroupRef.current) {
      if (isHovered && !isLocked) {
        // Reset and lock the rotation when hovered
        titleGroupRef.current.rotation.x = initialPosition.x;
        titleGroupRef.current.rotation.y = initialPosition.y;
        setIsLocked(true);
      } else if (!isHovered && isLocked) {
        // Unlock after hover is done
        setIsLocked(false);
      } else if (!isLocked) {
        // Rotate based on scroll or mouse movement
        if (scrolling) {
          titleGroupRef.current.rotation.x = scrollPos; // Use scroll input for y-axis rotation
        } else {
          // Use mouse movement when not scrolling
          titleGroupRef.current.rotation.x = mousePos.y * 2;
          titleGroupRef.current.rotation.y = mousePos.x * 2;
        }
      }
    }
  });
  
  useFrame(() => {
    if (titleGroup2Ref.current) {
      if (isHovered && !isLocked) {
        // Reset and lock the rotation when hovered
        titleGroup2Ref.current.rotation.x = initialPosition.x;
        titleGroup2Ref.current.rotation.y = initialPosition.y;
        setIsLocked(true);
      } else if (!isHovered && isLocked) {
        // Unlock after hover is done
        setIsLocked(false);
      } else if (!isLocked) {
        // Rotate based on scroll or mouse movement
        if (scrolling) {
          titleGroup2Ref.current.rotation.x = scrollPos; // Use scroll input for y-axis rotation
        } else {
          // Use mouse movement when not scrolling
          titleGroup2Ref.current.rotation.x = mousePos.y * 2;
          titleGroup2Ref.current.rotation.y = mousePos.x * 2;
        }
      }
    }
  });

  // Calculate the bounding box and center the text
  useEffect(() => {
    if (textRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(textRef.current);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Calculate the offset to center the text (half of the width)
      const centerOffset = size.x / 2;
      setTextCenterOffset(centerOffset);
    }
  }, [titleWord]);
  
  // Calculate the bounding box and center the text
  useEffect(() => {
    if (nameRef.current) {
      const boundingBox = new THREE.Box3().setFromObject(nameRef.current);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Calculate the offset to center the text (half of the width)
      const centerOffset = size.x / 2;
      setTextCenterOffset2(centerOffset);
    }
  }, [nameWord]);

  return (
    <>
    <group ref={titleGroup2Ref}>
      <group position={[-textCenterOffset2, 0, 0]}>
      <ScreenSpace depth={9}>
        <Text3D
          ref={nameRef}
          position={[0, 4.05, 0]}
          rotation={[0, 0, 0]}
          material={new THREE.MeshPhysicalMaterial({
            color: currentColor || "white",
            roughness: 0.25,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          })}
          font={moudlycheese}
          size={0.9}
          height={0.5}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.003}
        >
          {nameWord || "@kuljo2100"}
        </Text3D>
        <Text3D
          position={[-0.05, 4.0, -0.05]}
          rotation={[0, 0, 0]}
          material={new THREE.MeshPhysicalMaterial({
            color: "#000000",
            roughness: 0.5,
            clearcoat: 0.5,
            clearcoatRoughness: 0.5,
          })}
          font={moudlycheese}
          size={0.9}
          height={0.5}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.003}
        >
          {nameWord || "@kuljo2100"}
        </Text3D>
        </ScreenSpace>
        </group>
        </group>
        <group ref={titleGroupRef}>
      <group position={[-textCenterOffset, 0, 0]}>
      <ScreenSpace depth={9}>
        <Text3D
          ref={textRef}
          position={[0, 2.05, 0]}
          rotation={[0, 0, 0]}
          material={new THREE.MeshPhysicalMaterial({
            color: currentColor || "white",
            roughness: 0.25,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          })}
          font={moudlycheese}
          size={0.9}
          height={0.5}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.003}
        >
          {titleWord || "Portfolio Page"}
        </Text3D>
        <Text3D
          position={[-0.05, 2.0, -0.05]}
          rotation={[0, 0, 0]}
          material={new THREE.MeshPhysicalMaterial({
            color: "#000000",
            roughness: 0.5,
            clearcoat: 0.5,
            clearcoatRoughness: 0.5,
          })}
          font={moudlycheese}
          size={0.9}
          height={0.5}
          bevelEnabled
          bevelThickness={0.005}
          bevelSize={0.003}
        >
          {titleWord || "Portfolio Page"}
        </Text3D>
        </ScreenSpace>
      </group>
    </group>
    </>
  );
};