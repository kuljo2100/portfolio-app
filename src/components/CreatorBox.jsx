import React, { useEffect, useRef, useState } from "react";
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText, Switch } from '@chakra-ui/react';
import { Canvas } from "@react-three/fiber";
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';
import { HologramModel } from "../models/Hologram_globe";
import { SparkleComponents } from "./Sparkles";
const CreatorBox = ({ 
    currentColor,
    setCurrentColor, 
    setIsHovered,
    getRandomColor,
 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on cleanup
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [boxRef]);

  // Toggle pop-up
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleResetColors = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      {/* Button to open the creator box */}
      <ChakraBox position="absolute" bottom="1%" left="1%" zIndex={3}>
        <ChakraButton
          size="small"
          bgColor="white"
          onClick={togglePopup}
          width="min-content"
          border={'2px solid black'}
          borderRadius={20}
          boxShadow={`0 4px 10px ${currentColor}`}
          _hover={{
            transform: 'scale(1.2)',
            bgColor: 'transparent',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <ChakraText
            pl={2}
            pr={2}
            fontSize="medium"
            fontFamily={mouldyc}
            color={currentColor}
            textShadow={`1px 1px rgba(0, 0, 0, 1)`}
          >
            Creator Info
          </ChakraText>
        </ChakraButton>
      </ChakraBox>

      {/* Creator Info Pop-up */}
      {isOpen && (
        <ChakraBox
          ref={boxRef}
          position="absolute"
          top="25%"
          left="25%"
          width="50%"
          height="50%"
          backgroundColor="rgba(180, 180, 180, 1)"
        //   backgroundColor="rgba(255, 255, 255, .5)"
          borderRadius="20px"
          padding={6}
          boxShadow={`0 4px 20px ${currentColor}`}
          zIndex={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
            
          <ChakraText
            fontSize="2xl"
            fontFamily={mouldyc}
            fontWeight={'bold'}
            color='black'
            textShadow={`1px 1px ${currentColor}`}
            textAlign="center"
            zIndex={4}
          >
            Creator Information
          </ChakraText>
          
          <ChakraText
            fontSize="large"
            fontFamily={mouldyc}
            color='black'
            textShadow={`1px 1px ${currentColor}`}
            textAlign="center"
            mt={4}
            zIndex={4}
          >
            This is where you can add in-depth details about the yourself, your work, your goals, and any additional info you want to showcase. Fill in this section with as much detail as needed.
          </ChakraText>

          {/* Example of extra information and/or settings */}
          <ChakraBox mt={10} display="flex" flexDirection="column" alignItems="center" zIndex={4}>
            <ChakraText
              fontSize="2xl"
              fontFamily={mouldyc}
              fontWeight={'bold'}
              color='black'
              textShadow={`1px 1px ${currentColor}`}
              mt={8}
              mb={2}
              zIndex={4}
            >
              {'Extra Information and/or Option(s):'}
            </ChakraText>
            <ChakraText
              fontSize="large"
              fontFamily={mouldyc}
              color='black'
              textShadow={`1px 1px ${currentColor}`}
              m={2}
              zIndex={4}
            >
              Add More Text Here!!!
            </ChakraText>

            <ChakraText mt={4} pl={2} pr={2} fontSize="large" fontWeight={'bold'} fontFamily={mouldyc} color='black'
            textShadow={`1px 1px ${currentColor}`}>
              {'Color Switch'}
            </ChakraText>
            <Switch
              size="md"
              onChange={handleResetColors}
              sx={{
                'span.chakra-switch__track': {
                  bgColor: 'white',
                },
                'span.chakra-switch__thumb': {
                  bgColor: currentColor,
                },
                'span.chakra-switch__border': {
                  borderColor: 'black',
                },
              }}
              _hover={{
                transform: 'scale(1.2)',
              }}
              borderColor={'black'}
              mt={4}
              zIndex={4}
            />
          <ChakraButton
            size="small"
            bgColor="white"
            onClick={togglePopup}
            width="min-content"
            border={'2px solid black'}
            borderRadius={20}
            boxShadow={`0 4px 10px ${currentColor}`}
            // alignSelf="flex-center"
            _hover={{
              transform: 'scale(1.1)',
              bgColor: 'transparent',
            }}
            mt={4}
            mb={4}
            zIndex={4}
          >
            <ChakraText
              pl={2}
              pr={2}
              fontSize="sm"
              fontFamily={mouldyc}
              color='rgba(0, 0, 0, 1)'
              textShadow={`1px 1px ${currentColor}`}
            >
              Close
            </ChakraText>
          </ChakraButton>
          </ChakraBox>
          
          <ChakraBox
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            borderRadius="20px"
            overflow="hidden"
          >
            <Canvas
              camera={{ position: [0, 8, 8] }}
              style={{ height: '100%', width: '100%', backgroundColor: 'transparent', }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[0, 5, 5]} intensity={1} />
              <SparkleComponents currentColor={currentColor} />
              <HologramModel currentColor={currentColor} />
            </Canvas>
          </ChakraBox>
        </ChakraBox>
      )}
    </>
  );
};

export default CreatorBox;
