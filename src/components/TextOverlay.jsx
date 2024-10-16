import { Box as ChakraBox, Text as ChakraText } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

export const TextOverlay = ({ text, isVisible, onClick, onColorChange, currentColor, getRandomColor }) => {
  const [randomColor, setRandomColor] = useState(currentColor || getRandomColor());

  useEffect(() => {
    if (isVisible) {
      const newColor = getRandomColor();
      setRandomColor(newColor);
      if (onColorChange) {
        onColorChange(newColor);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    if (currentColor) {
      setRandomColor(currentColor);
    }
  }, [currentColor]);

  return (
    <ChakraBox
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={isVisible ? 1 : -1}
      backgroundColor="rgba(0, 0, 0, 0.0)"
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s ease"
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <ChakraBox
        backgroundColor="rgba(0, 0, 0, 0.65)"
        borderRadius={20}
        padding={4}
        boxShadow={`0px 4px 12px ${randomColor}`}
        pointerEvents="auto"
        onClick={onClick}
        maxW={'100vw'}
        cursor="pointer"
        _hover={{
          transform: 'scale(1.1)',
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }}
      >
        <ChakraText
          fontFamily={mouldyc}
          fontSize="4xl"
          color={randomColor}
          textShadow="1px 1px white"
          textAlign="center"
          bgColor="transparent"
        >
          {text}
        </ChakraText>
      </ChakraBox>
    </ChakraBox>
  );
};

