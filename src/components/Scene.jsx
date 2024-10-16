import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CompanionCubeModel } from "../models/Portal_companion_cube";
import { SideEyeModel } from "../models/Side_eye_emoji_guy";
import { ControllerModel } from "../models/Ps5_controller";
import { SunglassesModel } from "../models/Sunglasses";
import { DonutEarthModel } from "../models/Donut_earth";
import { MegaGattlingPeaModel } from "../models/Mega_gattling_pea";

const objectsDistance = 5; // Vertical distance between models

export const Scene = ({ setVisibleOverlays, currentColor }) => { 
    const scroll = useScroll();
    const groupRef = useRef();
  
    const sunglassesRef = useRef();
    const donutEarthRef = useRef();
    const sideEyeModelRef = useRef();
    const peashooterRef = useRef();
    const companionCubeRef = useRef();
    const controllerRef = useRef();
  
    useFrame(() => {
      const scrollOffset = scroll.offset; // Normalized scroll position between 0 and 1
  
      // Calculate scroll offsets for each model's section
      const sunglassesSection = 0;
      const donutEarthSection = 1 / 5.4;
      const sideEyeModelSection = 2 / 5.4;
      const peashooterSection = 3 / 5.4;
      const companionCubeSection = 4 / 5.4;
      const controllerSection = 5 / 5.4;
  
      // Determine when to show text for each model
      setVisibleOverlays({
        sunglasses: scrollOffset >= sunglassesSection && scrollOffset < donutEarthSection,
        donutEarth: scrollOffset >= donutEarthSection && scrollOffset < sideEyeModelSection,
        sideEyeModel: scrollOffset >= sideEyeModelSection && scrollOffset < peashooterSection,
        peashooter: scrollOffset >= peashooterSection && scrollOffset < companionCubeSection,
        companionCube: scrollOffset >= companionCubeSection && scrollOffset < controllerSection,
        controller: scrollOffset >= controllerSection && scrollOffset <= 1,
      });
  
      // Apply rotation and movement for the Rubiks model (right to left)
      if (sunglassesRef.current && scrollOffset >= sunglassesSection && scrollOffset < donutEarthSection) {
        const rotationAmount = (scrollOffset - sunglassesSection) * Math.PI * 12;
        sunglassesRef.current.rotation.x = rotationAmount * 0;
        sunglassesRef.current.rotation.y = rotationAmount * 2;
  
        // Move right to left
        sunglassesRef.current.position.x = 6 - (scrollOffset - sunglassesSection) * 50; // Right to left
      }
  
      // Apply rotation and movement for the Thinking Emoji model (left to right)
      if (donutEarthRef.current && scrollOffset >= donutEarthSection && scrollOffset < sideEyeModelSection) {
        const rotationAmount = (scrollOffset - donutEarthSection) * Math.PI * 12;
        donutEarthRef.current.rotation.x = rotationAmount * 0;
        donutEarthRef.current.rotation.y = rotationAmount * 1.2;
  
        // Move left to right
        donutEarthRef.current.position.x = -3.5 + (scrollOffset - donutEarthSection) * 40; // Left to right
      }
  
      // Apply rotation and movement for the Companion Cube model (right to left)
      if (sideEyeModelRef.current && scrollOffset >= sideEyeModelSection && scrollOffset < peashooterSection) {
        const rotationAmount = (scrollOffset - sideEyeModelSection) * Math.PI * 18;
        sideEyeModelRef.current.rotation.x = rotationAmount * 0;
        sideEyeModelRef.current.rotation.y = rotationAmount * -1.2;
  
        // Move right to left
        sideEyeModelRef.current.position.x = 4.5 - (scrollOffset - sideEyeModelSection) * 50;
      }
  
      // Apply rotation and movement for the Laughing Cat model (left to right)
      if (peashooterRef.current && scrollOffset >= peashooterSection && scrollOffset < companionCubeSection) {
        const rotationAmount = (scrollOffset - peashooterSection) * Math.PI * 18;
        peashooterRef.current.rotation.x = rotationAmount * -0;
        peashooterRef.current.rotation.y = rotationAmount * 1.2;
  
        // Move left to right
        peashooterRef.current.position.x = -5.5 + (scrollOffset - peashooterSection) * 50;
      }
  
      // Apply rotation and movement for the Side Eye model (right to left)
      if (companionCubeRef.current && scrollOffset >= companionCubeSection && scrollOffset < controllerSection) {
        const rotationAmount = (scrollOffset - companionCubeSection) * Math.PI * 18;
        companionCubeRef.current.rotation.x = rotationAmount * 0;
        companionCubeRef.current.rotation.y = rotationAmount * -1.2;
  
        // Move right to left
        companionCubeRef.current.position.x = 3 - (scrollOffset - companionCubeSection) * 45;
      }
  
      // Apply rotation and movement for the Controller model (left to right)
      if (controllerRef.current && scrollOffset >= controllerSection && scrollOffset <= 1) {
        const rotationAmount = (scrollOffset - controllerSection) * Math.PI * 24;
        controllerRef.current.rotation.x = rotationAmount * -0;
        controllerRef.current.rotation.y = rotationAmount * 1.2;
  
        // Move left to right
        controllerRef.current.position.x = -4 + (scrollOffset - controllerSection) * 100;
      }
  
      // Move the entire group based on the scroll offset
      groupRef.current.position.y = -scrollOffset * objectsDistance * 5;
    });
  
    return (
      <group ref={groupRef}>
        <group
        position={[0, -1.5, 0]}
        >
        <DonutEarthModel ref={sunglassesRef} position={[6, 2, -2]} currentColor={currentColor} />
        </group>
        <MegaGattlingPeaModel ref={donutEarthRef} position={[-3.5, -objectsDistance * 1, 0]} currentColor={currentColor} />
        <SideEyeModel ref={sideEyeModelRef} position={[4.5, -objectsDistance * 2, 0]} currentColor={currentColor} />
        <SunglassesModel ref={peashooterRef} position={[-5.5, -objectsDistance * 3, 0]} currentColor={currentColor} />
        <CompanionCubeModel ref={companionCubeRef} position={[3, -objectsDistance * 4, 0]} currentColor={currentColor} />
        <ControllerModel ref={controllerRef} position={[-4, -objectsDistance * 5, 0]} currentColor={currentColor} />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[1, 1, 0]} />
      </group>
    );
  };