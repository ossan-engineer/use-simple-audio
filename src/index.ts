import { useMemo, useEffect, useCallback } from 'react';

const useAudio = (src: string, loop: boolean = false) => {
  const audio = useMemo(() => new Audio(src), [src]);

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
    play: useCallback(() => {
      audio.currentTime = 0;
      audio.play();
    }, [audio]),
    pause: useCallback(() => audio.pause(), [audio]),
    stop: useCallback(() => {
      audio.currentTime = 0;
      audio.pause();
    }, [audio]),
  };
};

export default useAudio;
