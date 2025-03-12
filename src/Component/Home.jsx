

import React, { useEffect, useState } from 'react'
import DarkMode from './DarkMode';
import { useTheme } from '../Context/DarkModeContext';
import { motion } from 'motion/react';
import MemeCard from './MemeCard';


const Home = () => {
    const[memes,setMemes]=useState([]);
    const{darkMode}=useTheme();

    useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        setMemes(data.data.memes.slice(0,20));
      })
      .catch((error)=>{
    alert(error);
      })
    },[])
  return (
    
    <div className={` min-h-screen p-5 ${darkMode?"bg-black text-white":"bg-white text-black sm:text-3xl sm:font-bold "}`}>
          <DarkMode />
           <div className='grid sm:grid-cols-2 md:grid-cols-3  sm:gap-4  '>
      {memes.map((meme)=>(
        <motion.div 
         key={meme.id}
         className='bg-gray-800 text-white p-4 rounded-lg shadow-lg w-full mt-4 '
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.8}}
         >
        <img src={meme.url} className='rounded-lg  '/>
         <h3 className='text-center font-bold'>{meme.name}</h3>
          <MemeCard key={meme.id} meme={meme} />
          </motion.div>
      ))}
      </div>
    </div>
  )
}

export default Home

