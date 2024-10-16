import React from 'react';
import MousePositionWrapper from './MousePositionWrapper';
import { Text as ChakraText } from '@chakra-ui/react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

const MoonMouse = ({ toggleCursor, cursorEnabled, currentColor }) => {
  return (
    <>
      <ChakraText
        onClick={toggleCursor}
        fontSize="small"
        fontFamily={mouldyc}
        color="white"
        textShadow={`1px 1px ${currentColor}`}
        padding={0}
        position="absolute"
        top="1%"
        right="1.5%"
        overflow={'hidden'}
        zIndex={101}
        _hover={{
          transform: 'scale(1.2)',
          cursor: 'pointer',
        }}
        transition="transform 0.2s ease-in-out"
      >
        {cursorEnabled ? 'Disable Moon Mouse (M)' : 'Enable Mouse Ball (M)'}
      </ChakraText>

      {cursorEnabled && (
        <MousePositionWrapper
          toggleCursor={toggleCursor}
          enabled={cursorEnabled}
          currentColor={currentColor}
        />
      )}
    </>
  );
};

export default MoonMouse;
