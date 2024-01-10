import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>

            <div>
                <h2>SnacksMania</h2>
                <br />
                <p>We are Trying to give You the Best Taste Possible.</p>
                <br />
                <em>We Give Attention to Genuine Feedback.</em>
                <br />
                <br />
                <aside>
                    <h4>Follow Us</h4>
                    <a href="#instagram"><AiFillInstagram /></a>
                    <a href="#facebook"><AiFillFacebook /></a>
                    <a href="#twitter"><AiFillTwitterSquare /></a>
                    <a href="#youtube"><AiFillYoutube /></a>
                </aside>

                
                <br />
                <br />
                
                <strong>All Rights Reserved @SnacksMania</strong>
                
            </div>

        </footer>
    )
}

export default Footer
