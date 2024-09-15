import {RiReactjsLine} from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { animate, motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }

    }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
          whileInView={{opacity:1,y:0}} 
          initial={{opacity:0,y:-100}} 
          transition={{duration:1.5}} 
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}} 
        initial={{opacity:0,x:-100}} 
        transition={{duration:1.5}} 
        
        className='flex flex-wrap items-center justify-center gap-4'>
       
         <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         
         className='rounded-2xl border-4 border-neutral-800 p4'>
        <FaHtml5 className='text-7xl text-green-400'></FaHtml5>
        </motion.div>
         <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate" className='rounded-2xl border-4 border-neutral-800 p4'>
        <IoLogoJavascript className='text-7xl text-yellow-400'></IoLogoJavascript>
        </motion.div>
         <motion.div   variants={iconVariants(4)}
         initial="initial"
         animate="animate" 
         className='rounded-2xl border-4 border-neutral-800 p4'>
        <FaCss3Alt className='text-7xl text-blue-400'></FaCss3Alt>
        </motion.div>
         <motion.div   variants={iconVariants(5)}
         initial="initial"
         animate="animate"  className='rounded-2xl border-4 border-neutral-800 p4'>
        <AiOutlineDotNet className='text-7xl text-purple-400'></AiOutlineDotNet>
        </motion.div>
         <motion.div  
          variants={iconVariants(6)}
         initial="initial"
         animate="animate"  className='rounded-2xl border-4 border-neutral-800 p4'>
        <FaAngular className='text-7xl text-red-700'></FaAngular>
        </motion.div>
         <motion.div  
          variants={iconVariants(2.5)}
         initial="initial"
         animate="animate" className='rounded-2xl border-4 border-neutral-800 p4'>
        <AiOutlineConsoleSql className='text-7xl text-blue-700'></AiOutlineConsoleSql>
        </motion.div>
         <motion.div  
          variants={iconVariants(3)}
         initial="initial"
         animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p4'>
        <DiMongodb className='text-7xl text-green-700'></DiMongodb>
        </motion.div>
        
        <motion.div  
          variants={iconVariants(4)}
         initial="initial"
         animate="animate" className='rounded-2xl border-4 border-neutral-800 p4'>
        <RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
        </motion.div>
        <motion.div  
          variants={iconVariants(5)}
         initial="initial"
         animate="animate" className='rounded-2xl border-4 border-neutral-800 p4'>
        <FaBootstrap className='text-7xl text-blue-400'></FaBootstrap>
        </motion.div> 
        <motion.div  
          variants={iconVariants(4)}
         initial="initial"
         animate="animate" className='rounded-2xl border-4 border-neutral-800 p4'>
        <FaNodeJs className='text-7xl text-green-700'></FaNodeJs>
        </motion.div> 
        </motion.div>
    </div>
  )
}

export default Technologies
