import React from 'react'

import { useMyHook } from 'use-simple-audio'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
