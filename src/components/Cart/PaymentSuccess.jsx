import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h2>Order Confirmed</h2>
            <p>Order Placed Successfully!</p>
            <p>You Can Check Order Status Below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess
