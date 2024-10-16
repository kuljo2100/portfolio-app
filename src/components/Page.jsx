import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Box as ChakraBox } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { soundManager } from '../utils/SoundManager';
import { TextOverlay } from './TextOverlay';
import { Scene } from './Scene';
import aicoding5 from '../assets/images/aicoding5.png'
import PortfolioRain from './PortfolioRain';
import PortfolioRain3D from './PortfolioRain3D';
import WordRainUI from './WordRainUI';
import PageUI from './PageUI';

function Page({ currentColor, setCurrentColor, getRandomColor }) {
  const [resetColors, setResetColors] = useState(false);
  const [rainAmount, setRainAmount] = useState(50);
  const [rainWord, setRainWord] = useState('Add Text Here');
  const [singleColor, setSingleColor] = useState('');
  const [enableYRotation, setEnableYRotation] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.1);
  const [rotationDirection, setRotationDirection] = useState(1);
  const [showClock, setShowClock] = useState(false);
  const [use3DVersion, setUse3DVersion] = useState(false);
  const [showWordRainUI, setShowWordRainUI] = useState(false);

  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
    soundManager.playRandomCatSound();
  };

  const [visibleOverlays, setVisibleOverlays] = useState({
    rubiks: false,
    thinkingEmoji: false,
    companionCube: false,
    laughingCat: false,
    sideEye: false,
    controller: false,
  });

  const handleLinkClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  const handleResetColors = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
    // Optionally, update any other state or perform additional actions when the color is reset.
  };

  const handleColorChange = (color) => {
    setCurrentColor(color); // Update the ChakraBox with the current TextOverlay color
  };
  
const handleRotationDirectionToggle = () => {
  setRotationDirection((prev) => (prev === -1 ? 1 : -1));
};

  return (
    <>
    <ChakraBox 
    width="100vw" 
    height="100vh"
    position="visible"
    borderRadius={0}
    p={0} 
    bgColor="#000000" 
    boxShadow={`0 5px 10px ${currentColor}`}
    overflow="hidden" 
    backgroundImage={aicoding5}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
>
  <PageUI
  toHome={toHome} currentColor={currentColor} showWordRainUI={showWordRainUI} setShowWordRainUI={setShowWordRainUI} handleResetColors={handleResetColors} showClock={showClock} setShowClock={setShowClock}
  />
  
<WordRainUI
showWordRainUI={showWordRainUI} currentColor={currentColor} enableYRotation={enableYRotation} setEnableYRotation={setEnableYRotation} use3DVersion={use3DVersion} setUse3DVersion={setUse3DVersion} rainWord={rainWord} setRainWord={setRainWord} rainAmount={rainAmount} setRainAmount={setRainAmount} rotationSpeed={rotationSpeed} setRotationSpeed={setRotationSpeed} rotationDirection={rotationDirection} handleRotationDirectionToggle={handleRotationDirectionToggle} setShowWordRainUI={setShowWordRainUI}
/>

      <group position={[0, 0, 0]}>
      <TextOverlay text="Marble Game" isVisible={visibleOverlays.sunglasses} onClick={() => handleLinkClick('https://pegghero.netlify.app')}
      onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
      /><TextOverlay text="Undead Garden Chess" isVisible={visibleOverlays.donutEarth} onClick={() => handleLinkClick('https://undead-garden-chess.netlify.app')} 
          onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
          />
        <TextOverlay text="Carousel Of Awesomeness" isVisible={visibleOverlays.sideEyeModel} onClick={() => handleLinkClick('https://kaykuls-app.netlify.app')} 
        onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
        />
        <TextOverlay text="6th Gr Girls BBall Social App" isVisible={visibleOverlays.peashooter} onClick={() => handleLinkClick('https://lekul-basketball-fw.vercel.app/')} 
        onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
        />
        <TextOverlay text="Garden VS Undead Memory" isVisible={visibleOverlays.companionCube} onClick={() => handleLinkClick('https://garden-vs-undead-memory.netlify.app')} 
        onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
        />
        <TextOverlay text="2023 Lekul BBall Season" isVisible={visibleOverlays.controller} onClick={() => handleLinkClick('https://2023-5th-grade-lady-indians-ball.netlify.app')} 
        onColorChange={handleColorChange} currentColor={currentColor} getRandomColor={getRandomColor}
        />
      </group>

      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ height: '100vh', width: '100vw', background: 'transparent' }}>
      {use3DVersion ? (
          <PortfolioRain3D 
            currentColor={currentColor}
            resetColors={resetColors}
            rainAmount={rainAmount}
            singleColor={singleColor}
            enableYRotation={enableYRotation}
            rotationSpeed={rotationSpeed * rotationDirection}
            rainWord={rainWord}
          />
        ) : (
          <PortfolioRain 
            currentColor={currentColor}
            resetColors={resetColors}
            rainAmount={rainAmount}
            singleColor={singleColor}
            enableYRotation={enableYRotation}
            rotationSpeed={rotationSpeed * rotationDirection}
            rainWord={rainWord}
          />
        )}
        <group position={[0, -1.5, 0]}>
          <ScrollControls pages={8} damping={-3}>
          <Scroll >
              <Scene setVisibleOverlays={setVisibleOverlays} currentColor={currentColor} />
            </Scroll>
          </ScrollControls>
        </group>
      </Canvas>
</ChakraBox>
</>
  );
}

export default Page;
