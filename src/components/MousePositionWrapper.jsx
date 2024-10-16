import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Text as ChakraText } from '@chakra-ui/react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

const CustomCursor = lazy(() => import('./CustomCursor'));

const MousePositionWrapper = ({ enabled, currentColor }) => {
  const [showCursor, setShowCursor] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    let timer;
    if (enabled) {
      setShowLoadingText(true);
      timer = setTimeout(() => {
        setShowCursor(true);
        setShowLoadingText(false);
      }, 3000);
    } else {
      setShowCursor(false);
      setShowLoadingText(false);
    }

    return () => clearTimeout(timer);
  }, [enabled]);

  return (
    <>
      {showLoadingText && (
        <ChakraText
          fontSize="7xl"
          fontFamily={mouldyc}
          color={"white"}
          textShadow={`2px 2px ${currentColor}`}
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={100}
        >
          {'Enabling Cursor...'}
        </ChakraText>
      )}
      
      <Suspense fallback={null}>
        {showCursor && <CustomCursor enabled={enabled} currentColor={currentColor} />}
      </Suspense>
    </>
  );
};

export default MousePositionWrapper;
