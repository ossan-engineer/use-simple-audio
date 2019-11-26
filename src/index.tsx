import { useEffect } from 'react';

const useAudio = (src: string, loop: boolean = false) => {
  const audio = new Audio(src);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;

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
    },
  };
};

export default useAudio;
