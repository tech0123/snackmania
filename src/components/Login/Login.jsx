import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { server1 } from '../../redux/store'

const Login = () => {

    const loginHandler = () => {
        window.open(`${server1}/googlelogin`, "_self");
    }

    return (
        <section className='login'>

            <button onClick={loginHandler} ><FcGoogle /> Login With Google</button>

        </section>
    )
}

export default Login
