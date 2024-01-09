import { motion } from 'framer-motion'
import React from 'react'
import { IoFastFood } from 'react-icons/io5'



const Loading = () => {


  const options = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }

  return (
    <motion.div className='loader' {...options}>
      <IoFastFood />
    </motion.div>
  )
}

export default Loading
