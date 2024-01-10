import React from 'react'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import me from "../../assets/founder.jpg";


const About = () => {
    return (
        <section className='about'>
            <main>
                <h2>About Us</h2>

                <article>
                    <h2>SnacksMania</h2>
                    <p>We are SnacksMania. The Place for Most Tasty Snacks on the Entire Earth.</p>
                    <p>Explore the Various type of Food and Snacks. Click Below to see the Menu.</p>
                    <Link to="/"><MdSearch /></Link>
                </article>

                <h2>Founder</h2>

                <article>
                    <div>
                        <img src={me} alt="Founder" />

                        <h3>HD</h3>
                        <p>I am HD, The Founder of SnacksMania. Affiliated To Good Taste.</p>
                    </div>

                </article>


            </main>
        </section>
    )
}

export default About
