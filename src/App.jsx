import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import DarkMode from './Component/DarkMode'
import DarkModeprovider from './Context/DarkModeprovider'
import MemeExplorer from './Component/MemeExplorer'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import MemeUpload from './Component/MemeUpload'
import MemeDetails from './Component/MemeDetails'
import UserProfile from './Component/UserProfile'
import Leaderboard from './Component/LeaderboardPage'
import DarkModeToggle from './Component/DarkModeToggle'
 
function App() {
  

  return (
    <>
       {/* <DarkModeprovider>
          <Navbar/>
       
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/memeexplorer" element={<MemeExplorer/>}/>
        <Route path="/memeupload" element={<MemeUpload/>}/>
        <Route path="/meme/:id" element={<MemeDetails />} />
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/leaderboard" element={<h1>LeaderBoard</h1>}/>
      </Routes>
      
      </DarkModeprovider> */}
     <DarkModeToggle/>

    </>
  )
}

export default App
