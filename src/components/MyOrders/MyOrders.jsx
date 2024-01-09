import React, { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMyOrders } from '../../redux/actions/order'
import Loading from '../Layout/Loading'
import toast from 'react-hot-toast'



const Orders = ({ id, status, qty, price, method }) => (

    <div className='orders'>
        <table>
            <tbody>
                <tr>

                    <td>
                        <div className="row">
                            Order ID: {id}
                        </div>
                        <div className='row'>
                            Item Qty: {qty}
                        </div>
                        <div className="row">
                            Order Status: {status}
                        </div>
                        <div className="row">
                            Amount: ₹{price}
                        </div>
                        <div className="row">
                            Payment Method: {method}
                        </div>
                    </td>

                    <td className='colordedoorder'>
                        <div className='actionorder'>
                            <Link to={`/order/${id}`}> <AiOutlineEye /> </Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

const MyOrders = () => {


    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector(state => state.orders);


    useEffect(() => {
        dispatch(getMyOrders());
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [dispatch, error])



    return (
        <section className='myorders'>
            {
                loading === false && orders !== undefined ?
                    <main>
                        <h2>My Orders</h2>

                        {orders && orders.map((i) =>
                            <Orders key={i._id} id={i._id} status={i.orderStatus}
                                qty={
                                    i.orderItems.cheeseBurger.quantity
                                    + i.orderItems.vegCheeseBurger.quantity
                                    + i.orderItems.burgerWithFries.quantity
                                }
                                price={i.totalAmount} method={i.paymentMethod} />
                        )}

                    </main>
                    : <Loading />
            }
        </section>
    )
}

export default MyOrders
