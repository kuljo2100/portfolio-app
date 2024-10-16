import funnycat from '../assets/sounds/funnycat.wav'
import fallinghit from '../assets/sounds/fallinghit.wav'
import boing from '../assets/sounds/boing.wav'
import lion from '../assets/sounds/lion.wav'
import meow from '../assets/sounds/meow.wav'
import meowangrytoon from '../assets/sounds/meowangrytoon.wav'
import meowpain from '../assets/sounds/meowpain.wav'
import toonsplat from '../assets/sounds/toonsplat.wav'
import teleport3 from '../assets/sounds/teleport3.mp3'
import tileclick3 from '../assets/sounds/tileclick3.mp3'
import clickon from '../assets/sounds/click-on.mp3'
import removeclick from '../assets/sounds/removeclick.mp3'
import toongiggle from '../assets/sounds/toongiggle.wav'
import toongirlno from '../assets/sounds/toongirlno.wav'
import yay from '../assets/sounds/yay.mp3'
import sinisterlaugh from '../assets/sounds/sinister-laugh.mp3'
import losefunny from '../assets/sounds/lose_funny.mp3'
import laughhighpitch from '../assets/sounds/laugh-high-pitch.mp3'
import funnyspring from '../assets/sounds/funny-spring.mp3'
import quackingduck from '../assets/sounds/duck-quacking.mp3'
import cringe from '../assets/sounds/cringe.mp3'
import toongameover from '../assets/sounds/toongameover.wav'
import phonelinging from '../assets/sounds/yo_phone_linging.mp3'

class SoundManager {
  constructor() {
    this.mewSound = new Audio(meow);
    this.lingingSound = new Audio(phonelinging);
    this.yaySound = new Audio(yay);
    this.sinisterLaughSound = new Audio(sinisterlaugh);
    this.toonGirlNoSound = new Audio(toongirlno);
    this.toonGiggleSound = new Audio(toongiggle);
    this.tileClickSound = new Audio(tileclick3);
    this.removeClickSound = new Audio(removeclick);
    this.clickonSound = new Audio(clickon);
    this.teleportSound = new Audio(teleport3);
    this.fireSound = new Audio(lion);
    this.hitSound = new Audio(fallinghit);
    this.megaProjectileSound = new Audio(boing);
    this.splatSound = new Audio(toonsplat);
    this.loseFunnySound = new Audio(losefunny);
    this.toonGameOverSound = new Audio(toongameover);
    this.cringeSound = new Audio(cringe);
    this.quackingDuckSound = new Audio(quackingduck);
    this.funnySpringSound = new Audio(funnyspring);
    this.laughHighPitchSound = new Audio(laughhighpitch);
    this.catSounds = [
      new Audio(lion),
      new Audio(losefunny),
      new Audio(toongameover),
      new Audio(cringe),
      new Audio(quackingduck),
      new Audio(funnyspring),
      new Audio(laughhighpitch),
      new Audio(toongiggle),
      new Audio(toongirlno),
      new Audio(funnycat),
      new Audio(meowangrytoon),
      new Audio(meowpain),
      new Audio(toonsplat),
      new Audio(boing),
      new Audio(sinisterlaugh),
      new Audio(yay),
    ];
  }
  playMewSound() {
    this.mewSound.play()
  }
  
  playLingingSound() {
    this.lingingSound.play()
  }
  
  playSinisterLaughSound() {
    this.sinisterLaughSound.play()
  }
  
  playYaySound() {
    this.yaySound.play()
  }
  
  playToonGirlNoClickSound() {
    this.toonGirlNoSound.play()
  }
  
  playToonGiggleSound() {
    this.toonGiggleSound.play()
  }
  
  playSplatSound() {
    this.splatSound.play()
  }

  playTileClickSound() {
    this.tileClickSound.play()
  }
  
  playRemoveClickSound() {
    this.removeClickSound.play()
  }
  
  playClickonSound() {
    this.clickonSound.play()
  }

  playTeleportSound() {
    this.teleportSound.play()
  }

  playFireSound() {
    this.fireSound.play();
  }

  playHitSound() {
    this.hitSound.play();
  }

  playMegaProjectileSound() {
    this.megaProjectileSound.play();
  }

  playRandomCatSound() {
    const randomIndex = Math.floor(Math.random() * this.catSounds.length);
    this.catSounds[randomIndex].play();
  }
}

export const soundManager = new SoundManager();