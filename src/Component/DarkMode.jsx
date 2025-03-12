import { button } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Context/DarkModeContext';
import { FaSun, FaMoon } from "react-icons/fa";
const DarkMode = () => {
    const{darkMode,setDarkMode}=useTheme();

  
  return (
  
       <button onClick={()=>setDarkMode(!darkMode)}>
       {darkMode ? <FaSun size={24} className='text-yellow-500'/>:<FaMoon size={24} className='text-blue-500'/>}
       </button>
   
  )
}

export default DarkMode;
