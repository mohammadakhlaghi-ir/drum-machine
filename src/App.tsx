import React, { useState } from 'react';
import DrumPad from './components/DrumPad';

const sounds = [
  { key: 'Q', label: 'Heater-1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', label: 'Heater-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', label: 'Heater-3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', label: 'Heater-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', label: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', label: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', label: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', label: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', label: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

const App: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handlePlay = (label: string) => {
    setDisplay(label);
  };

  return (
    <div id="drum-machine" className="container">
      <h1>Drum Machine</h1>
      <div id="display">{display}</div>
      <div className="pad-grid">
        {sounds.map((sound) => (
          <DrumPad key={sound.key} sound={sound} onPlay={handlePlay} />
        ))}
      </div>
    </div>
  );
};

export default App;
