import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Box as ChakraBox } from '@chakra-ui/react';
import LandingPageTitleBox from "./LandingPageTitleBox";
import { LandingPageTitle, LandingPageTitle3D } from "./LandingPageText";
import { LaptopModel } from "../models/Laptop";

const LandingScene = ({ currentColor, setCurrentColor, getRandomColor, isHovered, setIsHovered }) => {
  const [nameWord, setNameWord] = useState('@kuljo2100');
  const [titleWord, setTitleWord] = useState('Portfolio Page');
  const [showTitleWordUI, setShowTitleWordUI] = useState(false);
  const [use3DVersion, setUse3DVersion] = useState(false);

  return (
    <>
      <ChakraBox zIndex={1} position="absolute">
        <Canvas camera={{ position: [0, 8, 8] }} style={{ height: '100vh', width: '100vw' }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          {use3DVersion ? (
          <LandingPageTitle3D nameWord={nameWord} titleWord={titleWord} currentColor={currentColor} isHovered={isHovered} />
          ) : (
           <LandingPageTitle nameWord={nameWord} titleWord={titleWord} currentColor={currentColor} isHovered={isHovered} /> 
          )}
          <group 
            rotation={[-Math.PI/6, 0, 0]}
            position={[0, -15, 0]}
          >
          <LaptopModel currentColor={currentColor} setIsHovered={setIsHovered} />
          </group>
        </Canvas>
      </ChakraBox>

      <LandingPageTitleBox
        currentColor={currentColor}
        showTitleWordUI={showTitleWordUI}
        setShowTitleWordUI={setShowTitleWordUI}
        titleWord={titleWord}
        setTitleWord={setTitleWord}
        nameWord={nameWord}
        setNameWord={setNameWord}
        setUse3DVersion={setUse3DVersion}
        use3DVersion={use3DVersion}
        getRandomColor={getRandomColor}
        setCurrentColor={setCurrentColor}
        isHovered={isHovered} 
        setIsHovered={setIsHovered}
      />
    </>
  );
};

export default LandingScene;
