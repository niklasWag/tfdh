import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css'
import './App.css'
import { HeaderMenu } from './components/header/Header'
import icon from './assets/images/android-chrome-512x512.png'

import { MantineProvider, Button, Image, Center } from '@mantine/core'

const maintenance = true

function App() {
  const [count, setCount] = useState(0)

  if (maintenance) {
    return (<MantineProvider defaultColorScheme='dark'>{
      <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Image
            src={icon}
            h={200}
            w='auto'
            fit='contain'
          />
          <h1>Maintenance</h1>
        </div>
      </>
    }</MantineProvider>)
  }

  return (
    <MantineProvider defaultColorScheme='dark'>{
      <>
        <div className='container'>
          <HeaderMenu />
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <Button onClick={() => alert()}>TEST</Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </>
    }</MantineProvider>
  )
}

export default App


function alert() {
  window.alert('Hello, world!')
}