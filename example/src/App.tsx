import React, { useEffect } from 'react';
import useSimpleAudio from 'use-simple-audio';

const App: React.FC = () => {
  const { play, pause, stop } = useSimpleAudio('/sample.mp3', true);
  return (
    <div>
      <button onClick={play}>PLAY</button>
      <button onClick={pause}>PAUSE</button>
      <button onClick={stop}>STOP</button>
    </div>
  );
};

export default App;
