import React, { useEffect, useRef } from 'react';

interface Sound {
  key: string;
  label: string;
  src: string;
}

interface DrumPadProps {
  sound: Sound;
  onPlay: (label: string) => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ sound, onPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      onPlay(sound.label);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toUpperCase() === sound.key) {
        playSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <button className="drum-pad" onClick={playSound} id={sound.label}>
      {sound.key}
      <audio ref={audioRef} className="clip" id={sound.key} src={sound.src}></audio>
    </button>
  );
};

export default DrumPad;
