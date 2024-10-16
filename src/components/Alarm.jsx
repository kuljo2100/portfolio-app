import React, { useState } from 'react';
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText, Select } from '@chakra-ui/react';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

function Alarm({ currentColor, alarmTime, handleAlarmChange, generateOptions, cancelAlarm, setAlarm }) {
  const [showAlarmUI, setShowAlarmUI] = useState(false);

  const handleSetAlarm = () => {
    setAlarm();
    setShowAlarmUI(false); // Close the popup when the alarm is set
  };

  const handleOutsideClick = () => {
    setShowAlarmUI(false); // Close the popup when clicking outside
  };

  return (
    <ChakraBox display="flex" flexDirection="column" alignItems="center">
      <ChakraButton
        size="small"
        bgColor="white"
        onClick={() => setShowAlarmUI(!showAlarmUI)}
        border="2px solid black"
        borderRadius={20}
        boxShadow={`0 4px 10px ${currentColor}`}
        padding={0}
        m={2}
        _hover={{
          transform: 'scale(1.1)',
          bgColor: 'transparent',
        }}
      >
        <ChakraText ml={1} mr={1} fontSize="small" fontFamily={mouldyc} color={currentColor} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
          {'Set Alarm'}
        </ChakraText>
      </ChakraButton>

      {showAlarmUI && (
        <>
        {/* Overlay to close on outside click */}
        <ChakraBox
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.500"
            zIndex={999}
            onClick={handleOutsideClick} // Close the popup on overlay click
          />
        
        <ChakraBox
          position="fixed"
          top="10%"
          right="10%"
          // transform="translate(-50%, -50%)" // Corrects the position to center
          zIndex={1000}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={4}
          p={4}
          border="2px solid black"
          borderRadius={10}
          boxShadow={`0 4px 15px ${currentColor}`}
          bg="blackAlpha.700"
        >
          <ChakraBox display="flex" alignItems="center" flexDirection="row" gap={4}>
            <Select
              placeholder="HH"
              value={alarmTime.hours}
              onChange={(e) => handleAlarmChange('hours', e.target.value)}
              width="5.5em"
              fontSize={"medium"}
              bg="rgba(0, 0, 0, .5)"
              color={currentColor}
              textShadow={`1px 1px white`}
              border="2px solid"
              borderColor={currentColor}
              borderRadius={10}
              boxShadow={`0px 2px 5px ${currentColor}`}
              _hover={{ borderColor: 'rgba(255, 255, 255, 1)' }}
              _focus={{ borderColor: 'rgba(255, 255, 255, 1)', boxShadow: `0px 0px 5px ${currentColor}` }}
              sx={{
                'option': {
                  bg: 'rgba(0, 0, 0, .25)',
                  color: 'rgba(255, 255, 255, 1)',
                  textShadow: `1px 1px ${currentColor}`,
                  _hover: { bg: currentColor },
                },
                'svg': {
                  display: 'none',
                }
              }}
            >
              {generateOptions(Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')))}
            </Select>
            <Select
              placeholder="MM"
              value={alarmTime.minutes}
              onChange={(e) => handleAlarmChange('minutes', e.target.value)}
              width="5.5em"
              fontSize={"medium"}
              bg="rgba(0, 0, 0, .5)"
              color={currentColor}
              textShadow={`1px 1px white`}
              border="2px solid"
              borderColor={currentColor}
              borderRadius={10}
              boxShadow={`0px 2px 5px ${currentColor}`}
              _hover={{ borderColor: 'rgba(255, 255, 255, 1)' }}
              _focus={{ borderColor: 'rgba(255, 255, 255, 1)', boxShadow: `0px 0px 5px ${currentColor}` }}
              sx={{
                'option': {
                  bg: 'rgba(0, 0, 0, .25)',
                  color: 'rgba(255, 255, 255, 1)',
                  textShadow: `1px 1px ${currentColor}`,
                  _hover: { bg: currentColor },
                },
                'svg': {
                  display: 'none',
                }
              }}
            >
              {generateOptions(Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')))}
            </Select>
            <Select
              value={alarmTime.period}
              onChange={(e) => handleAlarmChange('period', e.target.value)}
              width="5.5em"
              fontSize={"medium"}
              bg="rgba(0, 0, 0, .5)"
              color={currentColor}
              textShadow={`1px 1px white`}
              border="2px solid"
              borderColor={currentColor}
              borderRadius={10}
              boxShadow={`0px 2px 5px ${currentColor}`}
              _hover={{ borderColor: 'rgba(255, 255, 255, 1)' }}
              _focus={{ borderColor: 'rgba(255, 255, 255, 1)', boxShadow: `0px 0px 5px ${currentColor}` }}
              sx={{
                'option': {
                  bg: 'rgba(0, 0, 0, .25)',
                  color: 'rgba(255, 255, 255, 1)',
                  textShadow: `1px 1px ${currentColor}`,
                  _hover: { bg: currentColor },
                },
                'svg': {
                  display: 'none',
                }
              }}
            >
              <option value="AM">
                AM
                </option>
              <option value="PM">
                PM 
                </option>
            </Select>
          </ChakraBox>

          <ChakraBox display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
            <ChakraButton
              size="sm"
              bgColor="white"
              onClick={handleSetAlarm}
              border="2px solid black"
              borderRadius={20}
              boxShadow={`0 4px 10px ${currentColor}`}
              padding={2}
              m={1}
              _hover={{
                transform: 'scale(1.2)',
                bgColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 1)',
              }}
            >
              <ChakraText 
              fontSize={"small"} 
              fontFamily={mouldyc} 
              color={currentColor} 
              textShadow={`1px 1px rgba(0, 0, 0, 1)`}
              _hover={{
                textColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.2)',
                textShadow: `1px 1px ${currentColor}`,
              }}
              >
                {'Set'}
              </ChakraText>
            </ChakraButton>
            <ChakraButton
              size="sm"
              bgColor="white"
              onClick={cancelAlarm}
              border="2px solid black"
              borderRadius={20}
              boxShadow={`0 4px 10px ${currentColor}`}
              padding={2}
              m={1}
              _hover={{
                transform: 'scale(1.2)',
                bgColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 1)',
              }}
            >
              <ChakraText fontSize={"small"} fontFamily={mouldyc} color={currentColor} textShadow={`1px 1px rgba(0, 0, 0, 1)`}
              _hover={{
                textColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.2)',
                textShadow: `1px 1px ${currentColor}`,
              }}
              >
                {'Reset'}
              </ChakraText>
            </ChakraButton>
            <ChakraButton
              size="sm"
              bgColor="white"
              onClick={() => setShowAlarmUI(false)} // Close the popup
              border="2px solid black"
              borderRadius={20}
              boxShadow={`0 4px 10px ${currentColor}`}
              padding={2}
              m={1}
              _hover={{
                transform: 'scale(1.2)',
                bgColor: 'transparent',
                borderColor: 'rgba(255, 255, 255, 1)',
              }}
            >
              <ChakraText fontSize={"small"} fontFamily={mouldyc} color={currentColor} textShadow={`1px 1px rgba(0, 0, 0, 1)`}
              _hover={{
                textColor: 'rgba(255, 255, 255, 1)',
                transform: 'scale(1.2)',
                textShadow: `1px 1px ${currentColor}`,
              }}
              >
                {'Cancel'}
              </ChakraText>
            </ChakraButton>
          </ChakraBox>
        </ChakraBox>
        </>
      )}
    </ChakraBox>
  );
}

export default Alarm;
