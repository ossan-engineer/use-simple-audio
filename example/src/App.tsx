import React, { useEffect } from "react";

const useAudio = (src: string, loop: boolean = false) => {
  const audio = new Audio(src);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      console.log("ENDED");

      if (loop) {
        audio.play();
      }
    });
  }, [audio, loop]);

  return {
    play: () => audio.play(),
    pause: () => audio.pause(),
    stop: () => {
      audio.currentTime = 0;
      audio.pause();
    }
  };
};

const App: React.FC = () => {
  const { play, pause, stop } = useAudio("/sample.mp3", true);
  return (
    <div className="App">
      <button onClick={play}>PLAY</button>
      <button onClick={pause}>PAUSE</button>
      <button onClick={stop}>STOP</button>
    </div>
  );
};

export default App;
