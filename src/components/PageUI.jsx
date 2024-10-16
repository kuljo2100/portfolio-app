import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText} from '@chakra-ui/react';
import ColumnClock from './ColumnClock';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';
import { soundManager } from '../utils/SoundManager';

const PageUI = ({ 
     toHome, currentColor, showWordRainUI, setShowWordRainUI, handleResetColors, showClock, setShowClock
}) => {
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [alarmTime, setAlarmTime] = useState({ hours: '', minutes: '', period: 'AM' });
    const [currentTime, setCurrentTime] = useState({
      hours: '00',
      minutes: '00',
      seconds: '00',
      period: 'AM',
    });
  
    const handleAlarmTrigger = () => {
      setShowClock(true); // Reopen the clock
      playSelectedSound(); // Play the alarm sound
    };
  
    const updateCurrentTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
  
      hours = hours % 12 || 12;
      const hoursStr = hours.toString().padStart(2, '0');
  
      setCurrentTime({ hours: hoursStr, minutes, seconds, period });
    };
  
    const checkAlarm = () => {
      const currentHour = parseInt(currentTime.hours, 10);
      const currentMinute = parseInt(currentTime.minutes, 10);
      const currentPeriod = currentTime.period;
  
      const alarmHour = parseInt(alarmTime.hours, 10);
      const alarmMinute = parseInt(alarmTime.minutes, 10);
      const alarmPeriod = alarmTime.period;
  
      if (
        isAlarmSet &&
        currentHour === alarmHour &&
        currentMinute === alarmMinute &&
        currentPeriod === alarmPeriod
      ) {
        setIsAlarmSet(false); // Reset the alarm
        handleAlarmTrigger(); // Trigger the alarm
      }
    };
  
    const playSelectedSound = () => {
      soundManager.playRandomCatSound(); // You can replace this with your selected sound logic
    };
  
    useEffect(() => {
      const intervalId = setInterval(updateCurrentTime, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      checkAlarm();
    }, [currentTime, isAlarmSet]);

    return (
        <>
        <ChakraBox
        position={'absolute'}
        top={5}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        flexDirection={'row'}
        justifyContent="center"
        alignItems="center"
        display="flex"
        zIndex={3}
        >
        <ChakraButton
          size="sm"
          bgColor="white"
          onClick={toHome}
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
        >
          <ChakraText pl={2} pr={2} fontSize="xl" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
            {'Back'}
          </ChakraText>
        </ChakraButton>
        <ChakraButton
          size="sm"
          bgColor="white"
          onClick={() => setShowWordRainUI(!showWordRainUI)}
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
        >
          <ChakraText pl={2} pr={2} fontSize="xl" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
            {'Text Settings'}
          </ChakraText>
        </ChakraButton>
        <ChakraButton
          size="sm"
          bgColor="white"
          onClick={handleResetColors}
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
        >
          <ChakraText pl={2} pr={2} fontSize="xl" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
            {'Color Theme'}
          </ChakraText>
        </ChakraButton>
        <ChakraButton
        size="sm"
        bgColor="white"
        onClick={() => setShowClock(prev => !prev)}
        border={'2px solid black'}
        borderRadius={20}
        boxShadow={`0 4px 10px ${currentColor}`}
        padding={0}
        m={1}
        _hover={{
          transform: 'scale(1.1)',
          bgColor: 'transparent',
        }}
      >
        <ChakraText pl={2} pr={2} fontSize="xl" fontFamily={mouldyc} color={`${currentColor}`} textShadow={`1px 1px rgba(0, 0, 0, 1)`}>
          {'Clock'}
        </ChakraText>
      </ChakraButton>
      {isAlarmSet && !showClock && (
        <ChakraBox 
        color={`${currentColor}`} 
        textShadow={`1px 1px rgba(0, 0, 0, 1)`}
        size="sm"
        bgColor="white"
        border={'2px solid black'}
        borderRadius={20}
        boxShadow={`0 4px 10px ${currentColor}`}
        // position="absolute" top="10%" left="50%" transform="translateX(-50%)" 
        zIndex={3}
        >
          <ChakraText pl={2} pr={2} fontSize="xl" fontFamily={mouldyc} color={currentColor} textShadow={`1px 1px black`}>
            {`Alarm ${alarmTime.hours}:${alarmTime.minutes}${alarmTime.period.toLowerCase()}`}
          </ChakraText>
        </ChakraBox>
      )}
      </ChakraBox>
      
      {showClock && (
        <ChakraBox
          position="absolute"
          top="3%"
          right="1%"
          zIndex={4}
        >
          <ColumnClock 
          setShowClock={setShowClock} 
          currentColor={currentColor}
          alarmTime={alarmTime}
          setAlarmTime={setAlarmTime}
          isAlarmSet={isAlarmSet}
          setIsAlarmSet={setIsAlarmSet}
          onAlarmTrigger={handleAlarmTrigger}
          />
        </ChakraBox>
      )}
        </>
    )
}

export default PageUI