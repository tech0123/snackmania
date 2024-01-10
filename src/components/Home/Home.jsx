import React from 'react'
import { motion } from 'framer-motion';
import Founder from './Founder';
import Menu from './Menu';
import Typewriter from 'typewriter-effect';

const Home = () => {

  const options = {
    initial: {
      x: "-100%",
      opacity: 0
    },
    whileInView: {
      x: 0,
      opacity: 1
    },
  }

  return (

    <>

      <section className='home'>

        <div>
          <motion.h1 {...options}>

            <Typewriter

              options={{
                strings: "SnacksMania",
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriter",
                skipAddStyles: true,
              }}
            />


          </motion.h1>

          <motion.p
            {...options}
            transition={{
              delay: 0.2,
            }}
          >
            Give Yourself A Tasty Snacks</motion.p>
        </div>

        <motion.a href="#menu"
          initial={{
            y: "-100%",
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.6,
          }}

        >
          Explore Menu</motion.a>

      </section>
      <Founder />
      <Menu />

    </>
  )
}

export default Home