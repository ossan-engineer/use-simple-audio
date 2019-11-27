import { useEffect } from 'react';

const useAudio = (src: string, loop: boolean = false) => {
  const audio = new Audio(src);

  useEffect(() => {
    const handleEnded = () => {
      audio.currentTime = 0;

      if (loop) {
        audio.play();
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
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

export default useAudio;