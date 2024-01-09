import React from 'react'
import { motion } from 'framer-motion';
import burger from "../../assets/burger2.png"


const contact = () => {
  return (
    <section className='contact'>
      <motion.form

        initial={{
          x: "-100vh",
          opacity: 0
        }}
        animate={{
          x: "0",
          opacity: 1
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder='Email' />
        <textarea placeholder="Message..." name='message' id='message' cols="30" rows="10"></textarea>
        <button type='submit'>Send</button>
      </motion.form>

      <motion.formborder className="formBorder"

        initial={{
          x: "100vh",
          opacity: 0
        }}
        animate={{
          x: "0",
          opacity: 1
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            x: "32%",
            y:"-100vh",
            opacity: 0
          }}
          animate={{
            x: "32%",
            y:"-50%",
            opacity: 1
          }}
          transition={{ delay: 1 }}
        >
          <img src={burger} alt="burger" />
        </motion.div>
      </motion.formborder>

    </section>
  )
}

export default contact
