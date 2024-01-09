import React from 'react'
import { motion } from 'framer-motion';
import me from "../../assets/founder.jpg";


const Founder = () => {

    const options= {
        initial:{
          x: "-100%",
          opacity: 0
        },
        whileInView:{
          x: 0,
          opacity: 1
        },
        transition:{
            delay:0.2,
        }
      }


    return (
        <section className='founder'>

            <motion.div
            {...options}
            >

                <img src={me} alt="founder" height={200} width={200} />

                <h3>HD</h3>
                <p>Hey, Everyone I am HD, the Founder of BurgerLife.
                    <br />
                    Our Aim is to Create the Most Tasty Burger On Planet.
                </p>

            </motion.div>

        </section>
    )
}

export default Founder