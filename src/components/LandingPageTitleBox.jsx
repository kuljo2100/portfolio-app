import React, { useRef, useState, useEffect } from "react";
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText, Input, Switch, Divider } from '@chakra-ui/react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

const LandingPageTitleBox = ({ currentColor, setCurrentColor, titleWord, setTitleWord, nameWord, setNameWord, showTitleWordUI, setShowTitleWordUI, use3DVersion, setUse3DVersion, getRandomColor, setIsHovered }) => {
    const boxRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (boxRef.current && !boxRef.current.contains(event.target)) {
          setShowTitleWordUI(false);
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on cleanup
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [boxRef]);

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
        <ChakraBox position={'absolute'} top={'0%'} zIndex={3}>
          <ChakraButton
            size="sm"
            bgColor="white"
            onClick={() => setShowTitleWordUI(!showTitleWordUI)}
            width="min-content"
            border={'2px solid black'}
            borderRadius={20}
            boxShadow={`0 4px 10px ${currentColor}`}
            padding={0}
            m={1}
            _hover={{
              transform: 'scale(1.1)',
              bgColor: 'transparent',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ChakraText pl={2} pr={2} fontSize="m" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
              {"Settings UI"}
            </ChakraText>
          </ChakraButton>
        </ChakraBox>
  
        {showTitleWordUI && (
          <ChakraBox
            ref={boxRef}
            position="absolute"
            top="1%"
            left="1%"
            backgroundColor="rgba(220, 220, 190, 1)"
            borderRadius="20px"
            border={"1px solid rgba(0, 0, 0, 1)"}
            padding={1}
            boxShadow={`0px 4px 12px ${currentColor}`}
            width={"330px"}
            height={'270px'}
            zIndex={4}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ChakraBox
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            display="flex"
            >
        <ChakraText
        m={1}
        fontSize="m"
        fontFamily={mouldyc}
        color='rgba(0, 0, 0, 1)'
        textShadow={`1px 1px ${currentColor}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
            3D Title Mode: {!use3DVersion ? 'Off' : 'On'}
          </ChakraText>
          <Switch
            isChecked={use3DVersion}
            onChange={() => setUse3DVersion(!use3DVersion)}
            m={1}
            sx={{
              'span.chakra-switch__track': {
                bgColor: use3DVersion ? currentColor : 'white',
              },
              'span.chakra-switch__thumb': {
                bgColor: use3DVersion ? 'white' : currentColor,
              },
            }}
          />
          <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
          {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
              <ChakraText mb={1} fontSize="m" fontFamily={mouldyc} color='rgba(0, 0, 0, 1)'
        textShadow={`1px 1px ${currentColor}`}
              m={1}
              >
                Set Name & Title:
              </ChakraText>
              <Input
                placeholder="Enter new word(s)"
                value={nameWord}
                onChange={(e) => setNameWord(e.target.value)}
                fontSize="medium"
                fontFamily={mouldyc}
                color={`white`}
                bgColor={'rgba(0, 0, 0, 0.75)'}
                textShadow={`1px 1px ${currentColor}`}
                boxShadow={`0px 2px 6px ${currentColor}`}
                borderColor={"rgba(255, 255, 255, 1)"}
                textAlign={"center"}
                height={5}
                mb={1}
              />
              <Input
                placeholder="Enter new word(s)"
                value={titleWord}
                onChange={(e) => setTitleWord(e.target.value)}
                fontSize="medium"
                fontFamily={mouldyc}
                color={`white`}
                bgColor={'rgba(0, 0, 0, 0.75)'}
                textShadow={`1px 1px ${currentColor}`}
                boxShadow={`0px 2px 6px ${currentColor}`}
                borderColor={"rgba(255, 255, 255, 1)"}
                textAlign={"center"}
                height={5}
                mt={1}
                mb={1}
              />
              <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
              {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
            <ChakraText m={1} pl={2} pr={2} fontSize="Medium" fontFamily={mouldyc} color='rgba(0, 0, 0, 1)'
        textShadow={`1px 1px ${currentColor}`}
        >
              {'Color Switch'}
            </ChakraText>
            <Switch
              size={"md"}
              onChange={handleResetColors}
              sx={{
                'span.chakra-switch__track': {
                  bgColor: currentColor,
                },
                'span.chakra-switch__thumb': {
                  bgColor: 'white',
                },
              }}
              _hover={{
                transform: 'scale(1.2)',
              }}
              mb={1}
              zIndex={4}
            />
          <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={currentColor} variant={'solid'} />
          {/* <Divider borderWidth="1px" mt={1} orientation='horizontal' borderColor={"rgbs(0, 0, 0, 1)"} variant={"solid"} /> */}
          <ChakraButton
            size="small"
            bgColor="white"
            onClick={() => setShowTitleWordUI(!showTitleWordUI)}
            width="min-content"
            border={'2px solid black'}
            borderRadius={20}
            boxShadow={`0 4px 10px ${currentColor}`}
            padding={0}
            mt={3}
            _hover={{
              transform: 'scale(1.1)',
              bgColor: 'transparent',
            }}
          >
            <ChakraText pl={2} pr={2} fontSize="small" fontFamily={mouldyc} 
            color='rgba(0, 0, 0, 1)'
            textShadow={`1px 1px ${currentColor}`}
            >
              {'Close'}
            </ChakraText>
          </ChakraButton>
          </ChakraBox>
        </ChakraBox>
        )}
      </>
    );
  };

export default LandingPageTitleBox