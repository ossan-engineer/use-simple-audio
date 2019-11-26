# use-simple-audio

The simplest React hook to play SE.

[![NPM](https://img.shields.io/npm/v/use-simple-audio.svg)](https://www.npmjs.com/package/use-simple-audio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-simple-audio
```

## Usage

```tsx
import * as React from 'react';
import useSimpleAudio from 'use-simple-audio';

const App = () => {
  const { play, pause, stop } = useSimpleAudio('/sample.mp3');

  return (
    <div>
      <button onClick={play}>PLAY</button>
      <button onClick={pause}>PAUSE</button>
      <button onClick={stop}>STOP</button>
    </div>
  );
};
```

## License

MIT © [ossan-engineer](https://github.com/ossan-engineer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
