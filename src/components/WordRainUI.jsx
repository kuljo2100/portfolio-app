import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Input, Switch, Divider } from '@chakra-ui/react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

const WordRainUI = ({ 
    showWordRainUI, currentColor, enableYRotation, setEnableYRotation, use3DVersion, setUse3DVersion, rainWord, setRainWord, rainAmount, setRainAmount, rotationSpeed, setRotationSpeed, rotationDirection, handleRotationDirectionToggle, setShowWordRainUI 
}) => {
    const boxRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
          setShowWordRainUI(false);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on cleanup
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [boxRef]);
    
    return (
        <>
        {showWordRainUI && (
        <>
      <ChakraBox
        // ref={boxRef}
        position="absolute"
        top="1%" 
        left="1%" 
        backgroundColor="rgba(220, 220, 190, 1)"
        borderRadius="20px"
        padding={1}
        boxShadow={`0px 4px 12px ${currentColor}`}
        border={"1px solid rgba(0, 0, 0, 1)"}
        width="300px"
        height={enableYRotation ? '440px' : '320px'}
        transition="height 0.0001s ease" // Smooth transition for height change
        zIndex={3}
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
  
    <ChakraBox mt={1} zIndex={3}
    flexDirection={'column'}
    justifyContent="center"
    alignItems="center"
    display="flex"
    >
      <ChakraText
        mb={1}
        fontSize="l"
        fontFamily={mouldyc}
        color='rgba(0, 0, 0, 1)'
        textShadow={`1px 1px ${currentColor}`}
      >
          3D Rain Mode: {!use3DVersion ? 'Off' : 'On'}
      </ChakraText>
        <Switch
          isChecked={use3DVersion}
          onChange={() => setUse3DVersion(!use3DVersion)}
          mb={1}
          sx={{
            'span.chakra-switch__track': {
              bgColor: use3DVersion ? currentColor : 'white',
            },
            'span.chakra-switch__thumb': {
              bgColor: use3DVersion ? 'white' : currentColor,
            },
          }}
        />
      </ChakraBox>
    <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
    {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
  {/* Input for New Word(s) */}
  <ChakraBox 
  mt={1} 
  zIndex={3}
  flexDirection={'column'}
  justifyContent="center"
  alignItems="center"
  display="flex"
  >
    <ChakraText
      mb={1}
      fontSize="l"
      fontFamily={mouldyc}
      color='rgba(0, 0, 0, 1)'
      textShadow={`1px 1px ${currentColor}`}
    >
      Set Rain Word:
    </ChakraText>
    <Input
      placeholder="Enter new word(s)"
      value={rainWord}
      onChange={(e) => setRainWord(e.target.value)}
      fontSize="xl"
      fontFamily={mouldyc}
      color={`white`}
      bgColor={'rgba(0, 0, 0, 0.75)'}
      textShadow={`1px 1px ${currentColor}`}
      boxShadow={`0px 2px 6px ${currentColor}`}
      borderColor={"rgba(255, 255, 255, 1)"}
      height={5}
      mb={1}
      textAlign={'center'}
    />
  </ChakraBox>

  <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
  {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
  
        <ChakraBox 
        mt={1} 
        zIndex={3}
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        display="flex"
        >
          <ChakraText 
          mb={1} 
          fontSize="l" 
          fontFamily={mouldyc} 
          color='rgba(0, 0, 0, 1)'
          textShadow={`1px 1px ${currentColor}`}
          >
            Rain Amount: {rainAmount}
          </ChakraText>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={50}
            min={10}
            max={500}
            step={5}
            onChange={(value) => setRainAmount(value)}
            mb={1}
          >
            <SliderTrack
             bgColor={'white'}
            >
              <SliderFilledTrack 
              bgColor={currentColor}
              />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </ChakraBox>

        <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
        {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
        
  <ChakraBox 
  mt={1} 
  mb={2} 
  zIndex={3}
  flexDirection={'column'}
  justifyContent="center"
  alignItems="center"
  display="flex"
  >
    <ChakraText 
    mb={1} 
    fontSize="l" 
    fontFamily={mouldyc} 
    color='rgba(0, 0, 0, 1)'
    textShadow={`1px 1px ${currentColor}`}
    >
      Y-Axis Rotation:
    </ChakraText>
    <Switch 
    isChecked={enableYRotation} 
    onChange={() => setEnableYRotation(!enableYRotation)} 
    mb={1}
    sx={{
      'span.chakra-switch__track': {
        bgColor: use3DVersion ? currentColor : 'white',
      },
      'span.chakra-switch__thumb': {
        bgColor: use3DVersion ? 'white' : currentColor,
      },
    }}
      />
  </ChakraBox>
  
  {enableYRotation && (
    <>
      <ChakraBox mt={1} zIndex={3}
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      display="flex"
      >
        <ChakraText 
        mb={1} 
        fontSize="l" 
        fontFamily={mouldyc} 
        color='rgba(0, 0, 0, 1)'
        textShadow={`1px 1px ${currentColor}`}
        >
          Rotation Speed: {rotationSpeed.toFixed(2)}
        </ChakraText>
        <Slider
          aria-label="slider-ex-2"
          defaultValue={0.1}
          min={0.01}
          max={0.5}
          step={0.01}
          onChange={(value) => setRotationSpeed(value)}
        >
          <SliderTrack bgColor={"white"}>
            <SliderFilledTrack bgColor={currentColor} />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </ChakraBox>

      <ChakraBox mt={1} zIndex={3}
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      display="flex"
      >
  <ChakraText 
  mb={1} 
  fontSize="l" 
  fontFamily={mouldyc} 
  color='rgba(0, 0, 0, 1)'
  textShadow={`1px 1px ${currentColor}`}
  >
    Rotation Direction:
  </ChakraText>
  <Switch
    isChecked={rotationDirection === 1}
    onChange={handleRotationDirectionToggle}
    sx={{
      'span.chakra-switch__track': {
        bgColor: use3DVersion ? currentColor : 'white',
      },
      'span.chakra-switch__thumb': {
        bgColor: use3DVersion ? 'white' : currentColor,
      },
    }}
  />
  <ChakraText 
  fontSize="l" 
  mt={1} 
  mb={1}
  color='rgba(0, 0, 0, 1)'
  textShadow={`1px 1px ${currentColor}`}
  >
    {rotationDirection === -1 ? 'ClockWise' : 'CounterClockWise'}
  </ChakraText>
</ChakraBox>
    </>
  )}

<Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
{/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}

  <ChakraButton
          size="small"
          bgColor="white"
          onClick={() => setShowWordRainUI(!showWordRainUI)}
          width="min-content"
          border={'2px solid black'}
          borderRadius={20}
          boxShadow={`0 4px 10px ${currentColor}`}
          padding={0}
          mt={4}
          _hover={{
            transform: 'scale(1.1)',
            bgColor: 'transparent',
          }}
        >
          <ChakraText 
          pl={2} 
          pr={2} 
          fontSize="medium" 
          fontFamily={mouldyc} 
          color='rgba(0, 0, 0, 1)'
          textShadow={`1px 1px ${currentColor}`}
          >
            {'Close'}
          </ChakraText>
        </ChakraButton>
      </ChakraBox>
      </>
)} 
        </>
    )
}

export default WordRainUI;