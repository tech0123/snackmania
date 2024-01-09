import React from 'react'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='notfound'>
        <main>
            <div>
                <MdError />
                <h2>404</h2>
            </div>
                <p>Page Not Found.</p>
                <p>Click Below To Go To Home Page.</p>
                <Link to="/">Go To Home</Link>
        </main>
      
    </section>
  )
}

export default NotFound
