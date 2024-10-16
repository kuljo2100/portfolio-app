import React, { useCallback, useEffect, useMemo, useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import ColumnClock from './components/ColumnClock';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MoonMouse from './components/MoonMouse';
import { soundManager } from './utils/SoundManager';

// Utility function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const [currentColor, setCurrentColor] = useState(getRandomColor());
  const [cursorEnabled, setCursorEnabled] = useState(true);

  const toggleCursor = useCallback(() => {
    setCursorEnabled(!cursorEnabled);
    soundManager.playRandomCatSound();
  }, [setCursorEnabled, cursorEnabled]);

  useEffect(() => {
    if (cursorEnabled) {
      document.body.classList.add('custom-cursor-enabled');
    } else {
      document.body.classList.remove('custom-cursor-enabled');
    }
  }, [cursorEnabled]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'm' || event.key === 'M') {
      toggleCursor();
    }
  }, [toggleCursor]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  const theme = useMemo(() => 
    extendTheme({
      styles: {
        global: {
          // Scrollbar styles for WebKit-based browsers
          '::-webkit-scrollbar': {
            width: '1px',
            borderRadius: '6px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: currentColor,
            borderRadius: '6px',
            border: `1px solid ${currentColor}`,
          },
          '::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.25)',
          },
          // Scrollbar styles for Firefox
          html: {
            scrollbarWidth: 'thin',
            scrollbarColor: `${currentColor} rgba(0, 0, 0, 0.25)`,
          },
        },
      },
    }), 
    [currentColor]
  );

  return (
  <>
    <ChakraProvider theme={theme}>
      <Router>
      <Routes>
        <Route path="/" element={<Home currentColor={currentColor} setCurrentColor={setCurrentColor} getRandomColor={getRandomColor} />} />
        <Route path="/page" element={<Page currentColor={currentColor} setCurrentColor={setCurrentColor} getRandomColor={getRandomColor} />} />
        <Route path="/clock" element={<ColumnClock currentColor={currentColor} />} />
      </Routes>
      </Router>
      <MoonMouse
        cursorEnabled={cursorEnabled}
        toggleCursor={toggleCursor}
        currentColor={currentColor}
      />
    </ChakraProvider>
  </>
  )
}

export default App
