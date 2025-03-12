import { easeOut } from 'motion'
import { motion } from 'motion/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
  
const Navbar = () => {
  return (
    <div className='p-2'>
       <motion.ul  className=' flex items-center justify-between font-bold'
       initial='hidden'
       animate='visible'
             variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.4} // Delay between children animations
          }
        }}
       
        
       >
          <motion.li 
           variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <NavLink to="/" className={({isActive})=>isActive ? "font-bold":""}>Home</NavLink>
            </motion.li>
          <motion.li
             variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
           
          
          >
            <NavLink to="/memeexplorer" className={({isActive})=>isActive?"font-bold":""}>MemeExplorer</NavLink>
          </motion.li>
          <motion.li 
             variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <NavLink to="/memeupload" className={({isActive})=>isActive?"font-bold":""}>MemeUpload</NavLink>
          </motion.li>
          <motion.li 
             variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <NavLink to="/meme/:id" className={({isActive})=>isActive?"font-bold":""}>MemeDetails</NavLink>
          </motion.li>

          <motion.li 
             variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <NavLink to="/userprofile" className={({isActive})=>isActive?"font-bold":""}>UserProfile</NavLink>
          </motion.li>

          <motion.li 
             variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
          >
            <NavLink to="/leaderboard" className={({isActive})=>isActive?"font-bold":""}>LeaderBoard</NavLink>
          </motion.li>

       </motion.ul>
    </div>
  )
}

export default Navbar
