import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Founder from './Founder';
import Menu from './Menu';


const Home = () => {



  const text = 'nacksMania';
  const [displayText, setDisplayText] = useState('');


  useEffect(() => {
    let isMounted = true;

    const typeText = async () => {
      while (isMounted) {
        for (let i = 0; i <= text.length; i++) {
          if (!isMounted) break;

          setDisplayText(text.slice(0, i));
          await sleep(240); // Front speed: Adjust the time delay for each character

          if (i === text.length) {
            await sleep(1000); // Pause after completion of front effect (1,000 milliseconds)

            for (let j = text.length; j >= 0; j--) {
              if (!isMounted) break;

              setDisplayText(text.slice(0, j));
              await sleep(150); // Back speed: Adjust the time delay for each character
            }
          }
        }
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, []);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));



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



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            S{displayText}
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