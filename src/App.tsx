import './App.css'
import { HeaderMenu } from './components/header/Header'
import icon from './assets/images/android-chrome-512x512.png'

import { Image } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { Demo } from './pages/demo/Demo'
import { Router } from './components/router/Router'

const maintenance = true

function App() {

  if (maintenance) {
    return (
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
    )
  }

  return (
    <>
      <div className='container'>
        <HeaderMenu />
        <Router />
      </div>
    </>
  )
}

export default App