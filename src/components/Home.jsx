import React, { useState } from 'react';
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { soundManager } from '../utils/SoundManager';
import aicoding6 from '../assets/images/aicoding6.png';
import LandingScene from './LandingPageTitle';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';
import CreatorBox from './CreatorBox';

const Home = ({ currentColor, getRandomColor, setCurrentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    const toPage = () => {
      navigate('/page');
      soundManager.playRandomCatSound();
    };

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };

  return (
    <ChakraBox 
      width="100vw" 
      height="100vh" 
      p={4} 
      bgColor="transparent"
      position="relative" 
      overflow="hidden" 
      backgroundImage={aicoding6}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      zIndex={0}
    >
<LandingScene currentColor={currentColor} setCurrentColor={setCurrentColor} getRandomColor={getRandomColor} isHovered={isHovered} setIsHovered={setIsHovered} />
<CreatorBox currentColor={currentColor} setCurrentColor={setCurrentColor} getRandomColor={getRandomColor} isHovered={isHovered} setIsHovered={setIsHovered} />
      <ChakraBox
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex={3}
      >
        <ChakraButton
          size="sm"
          bgColor="white"
          onClick={toPage}
          width="min-content"
          border={'2px solid black'}
          borderRadius={20}
          boxShadow={`0 4px 10px ${currentColor}`}
          padding={0}
          mt={3}
          ml={5}
          _hover={{
            transform: 'scale(1.1)',
            bgColor: 'transparent',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <ChakraText pl={2} pr={2} fontSize="x-large" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
            {'ENTER'}
          </ChakraText>
        </ChakraButton>
      </ChakraBox>
    </ChakraBox>
  );
};

export default Home;
