import React, { useState, useEffect, useRef } from 'react';
import { Button as ChakraButton, Box as ChakraBox, Text as ChakraText, Divider, Select } from '@chakra-ui/react';
import cattime from '../assets/images/cattime.png';
import { soundManager } from '../utils/SoundManager';
import Alarm from './Alarm';
import mouldyc from '../assets/fonts/MouldyCheeseRegular-WyMWG.ttf';

function ColumnClock({ setShowClock, currentColor, alarmTime, setAlarmTime, isAlarmSet, setIsAlarmSet, onAlarmTrigger }) {
  const numHeight = 20;
  const [selectedSound, setSelectedSound] = useState('');
  const [showSoundDropdown, setShowSoundDropdown] = useState(false);

  // Store sound names/identifiers, not the function calls
  const [alarmSounds] = useState([
    'Linging Sound',
    'Toon Giggle',
    'Random Cat Sound',
    'Mew Sound',
    'Sinister Laugh',
    'Toon Girl No Click'
  ]);

  const [currentTime, setCurrentTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    period: 'AM',
    date: '',
  });

  // const [alarmTime, setAlarmTime] = useState({
  //   hours: '',
  //   minutes: '',
  //   period: 'AM',
  // });
  // const [isAlarmSet, setIsAlarmSet] = useState(false);

  // Refs for digits
  const hourDigitsTens = useRef(null);
  const hourDigitsUnits = useRef(null);
  const minuteDigitsTens = useRef(null);
  const minuteDigitsUnits = useRef(null);
  const secondDigitsTens = useRef(null);
  const secondDigitsUnits = useRef(null);

  const createDigits = (max, currentValue) =>
    Array.from({ length: max }, (_, i) => (
      <div key={i} className="num" style={currentValue === i ? { ...styles.numStyle, ...styles.highlightStyle } : styles.numStyle}>
        {i}
      </div>
    ));

  const update = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const hoursStr = hours.toString().padStart(2, '0');

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const dateStr = `${month}-${day}-${year}`;

    setCurrentTime({ hours: hoursStr, minutes, seconds, period, date: dateStr });

    const timeParts = [
      [seconds, secondDigitsUnits, secondDigitsTens],
      [minutes, minuteDigitsUnits, minuteDigitsTens],
      [hoursStr, hourDigitsUnits, hourDigitsTens]
    ];

    timeParts.forEach(([time, unitsRef, tensRef]) => {
      unitsRef.current.style.transform = `translateY(-${parseInt(time[1], 10) * numHeight}px)`;
      tensRef.current.style.transform = `translateY(-${parseInt(time[0], 10) * numHeight}px)`;
    });
  };

  // Function to compare current time with the set alarm time
  const checkAlarm = () => {
    const currentHour = parseInt(currentTime.hours, 10);
    const currentMinute = parseInt(currentTime.minutes, 10);
    const currentPeriod = currentTime.period;

    const alarmHour = parseInt(alarmTime.hours, 10);
    const alarmMinute = parseInt(alarmTime.minutes, 10);
    const alarmPeriod = alarmTime.period;

    // Compare time and period (AM/PM)
    if (
      isAlarmSet &&
      currentHour === alarmHour &&
      currentMinute === alarmMinute &&
      currentPeriod === alarmPeriod
    ) {
      playSelectedSound();
      setIsAlarmSet(false); // Reset the alarm state after triggering
      onAlarmTrigger(); // Trigger to reopen clock
    }
  };

  const playSelectedSound = () => {
    // Play the selected sound
    switch (selectedSound) {
      case 'Linging Sound':
        soundManager.playLingingSound();
        break;
      case 'Toon Giggle':
        soundManager.playToonGiggleSound();
        break;
      case 'Random Cat Sound':
        soundManager.playRandomCatSound();
        break;
      case 'Mew Sound':
        soundManager.playMewSound();
        break;
      case 'Sinister Laugh':
        soundManager.playSinisterLaughSound();
        break;
      case 'Toon Girl No Click':
        soundManager.playToonGirlNoClickSound();
        break;
      default:
        console.log('No sound selected');
    }
  };

  useEffect(() => {
    const intervalId = setInterval(update, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkAlarm();
  }, [currentTime, isAlarmSet]);

  const closeClock = () => {
    setShowClock(false);
    soundManager.playRandomCatSound();
  };

  const handleAlarmChange = (field, value) => {
    setAlarmTime((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const setAlarm = () => {
    if (alarmTime.hours && alarmTime.minutes && alarmTime.period) {
      setIsAlarmSet(true);
    }
  };

  const cancelAlarm = () => {
    setIsAlarmSet(false);
    setAlarmTime({ hours: '', minutes: '', period: 'AM' });
  };

  const generateOptions = (range) => {
    return range.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));
  };

  const toggleSoundDropdown = () => {
    setShowSoundDropdown((prev) => !prev);
  };

  const handleSoundSelection = (e) => {
    setSelectedSound(e.target.value);
    setShowSoundDropdown(false); // Close the dropdown after selecting a sound
  };

  const styles = {
    buttonsStyle: {
      position: 'absolute',
      left: '2.5%',
      top: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translateY(-50%)'
    },
    buttonStyle: {
      boxShadow: `0 5px 10px ${currentColor}`,
      fontSize: '1em',
      fontFamily: mouldyc,
      color: currentColor,
      textShadow: '1px 1px black',
      width: '4vw',
      height: '3vh',
      borderRadius: 20,
      borderColor: 'black',
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      margin: 1,
      marginTop: 4,
      marginBottom: 4,
      padding: 0,
    },
    containerStyle: {
      margin: 1,
      padding: 0,
      display: 'flex',
      position: 'relative',
      transform: 'translateY(40%)',
    },
    digitsStyle: {
      display: 'flex',
      alignItems: 'flex-start',
      margin: '0 0',
    },
    digitStyle: {
      boxShadow: `0 1px 10px ${currentColor}`,
      transition: 'all 0.25s ease-in-out',
      width: '2.0vw',
      margin: 5,
      padding: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: currentColor,
      textShadow: '1px 1px white',
      fontSize: '0.8em',
      fontFamily: mouldyc,
      textAlign: 'center',
      borderRadius: 5,
      position: 'relative',
      overflow: 'hidden',
    },
    numStyle: {
      height: `${numHeight}px`,
    },
    highlightStyle: {
      boxShadow: '0 1px 10px rgba(255, 255, 255, 1)',
      backgroundColor: currentColor,
      color: '#ffffff',
      textShadow: '1px 1px black',
      borderRadius: 5,
    }
  };

  return (
    <>
      <ChakraBox 
          width= '31vw'
          height= '35vh'
          borderRadius= '20px'
          boxShadow= {`0px 4px 12px ${currentColor}`}
          overflow= 'hidden'
          display= 'flex'
          flexDirection= 'row'
          alignItems= 'center'
          justifyContent= 'center'
          backgroundImage= {`url(${cattime})`}
          backgroundSize= 'cover'
          backgroundPosition= 'center'
          backgroundRepeat= 'no-repeat'
      >
        <ChakraBox display="flex" flexDirection="column" alignItems="center">
          <ChakraBox bgColor={currentColor} borderRadius="10">
            <ChakraText pl={1} pr={1} fontSize="x-large" fontFamily={mouldyc} color="black" textShadow="1px 1px white" textAlign={"center"}>
              {currentTime.date}
            </ChakraText>
            {isAlarmSet && (
              <ChakraText fontSize="x-large" fontFamily={mouldyc} color="black" textShadow="1px 1px white" textAlign={"center"} >
                {alarmTime.hours}:{alarmTime.minutes} {alarmTime.period}
              </ChakraText>
            )}
          </ChakraBox>

          <Divider borderColor={currentColor} borderWidth="2px" my={2} opacity={1} />

          <Alarm
            currentColor={currentColor}
            alarmTime={alarmTime}
            handleAlarmChange={handleAlarmChange}
            generateOptions={generateOptions}
            cancelAlarm={cancelAlarm}
            setAlarm={setAlarm}
          />

          {/* Alarm Sounds Button and Dropdown */}
          <ChakraButton
            size="small"
            bgColor="white"
            onClick={toggleSoundDropdown}
            border="2px solid black"
            borderRadius={20}
            boxShadow={`0 4px 10px ${currentColor}`}
            m={1}
            _hover={{
              transform: 'scale(1.1)',
              bgColor: 'transparent',
            }}
          >
            <ChakraText fontSize="small" fontFamily={mouldyc} color={currentColor} textShadow="1px 1px black">
              {'Alarm Sounds'}
            </ChakraText>
          </ChakraButton>

          {showSoundDropdown && (
            <Select
              value={selectedSound}
              onChange={handleSoundSelection} // Close the dropdown after selection
              fontSize="small"
              border="2px solid black"
              borderRadius={10}
              boxShadow={`0 4px 10px ${currentColor}`}
              bg="rgba(0, 0, 0, 0.5)"
              color={currentColor}
              textShadow="1px 1px white"
              _hover={{ borderColor: 'white' }}
            >
              {alarmSounds.map((sound, index) => (
                <option key={index} value={sound}>
                  {sound}
                </option>
              ))}
            </Select>
          )}

          <ChakraButton
            size="small"
            bgColor="white"
            onClick={closeClock}
            width="min-content"
            border="2px solid black"
            borderRadius={20}
            boxShadow={`0 4px 10px ${currentColor}`}
            padding={0}
            m={1}
            _hover={{
              transform: 'scale(1.15)',
              bgColor: 'transparent',
            }}
          >
            <ChakraText
              ml={1}
              mr={1}
              fontSize="small"
              fontFamily={mouldyc}
              color={currentColor}
              textShadow="1px 1px rgba(0, 0, 0, 1)"
            >
              {'Close'}
            </ChakraText>
          </ChakraButton>
        </ChakraBox>

        <ChakraBox m={1}>
          <main style={styles.containerStyle}>
            {[3, 10, 6, 10, 6, 10].map((max, index) => {
              let currentValue;
              if (index === 0) {
                currentValue = parseInt(currentTime.hours[0], 10);
              } else if (index === 1) {
                currentValue = parseInt(currentTime.hours[1], 10);
              } else if (index === 2) {
                currentValue = parseInt(currentTime.minutes[0], 10);
              } else if (index === 3) {
                currentValue = parseInt(currentTime.minutes[1], 10);
              } else if (index === 4) {
                currentValue = parseInt(currentTime.seconds[0], 10);
              } else if (index === 5) {
                currentValue = parseInt(currentTime.seconds[1], 10);
              }

              return (
                <section key={index} style={styles.digitsStyle}>
                  <div
                    style={styles.digitStyle}
                    ref={
                      index === 0
                        ? hourDigitsTens
                        : index === 1
                        ? hourDigitsUnits
                        : index === 2
                        ? minuteDigitsTens
                        : index === 3
                        ? minuteDigitsUnits
                        : index === 4
                        ? secondDigitsTens
                        : secondDigitsUnits
                    }
                  >
                    {createDigits(max, currentValue)}
                  </div>
                </section>
              );
            })}
            <ChakraText
              ml={1}
              mr={1}
              fontSize={'medium'}
              fontFamily={mouldyc}
              color={`${currentColor}`}
              textShadow={`1px 1px rgba(255, 255, 255, 1)`}
            >
              {currentTime.period}
            </ChakraText>
          </main>
        </ChakraBox>
      </ChakraBox>
    </>
  );
}

export default ColumnClock;
