import React, { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'

import { MdSkipNext } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getAdminOrders, processOrder } from '../../redux/actions/admin'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Loading from '../Layout/Loading'


const Orders = () => {

    const dispatch = useDispatch();

    const { loading, error, message, orders } = useSelector(state => state.admin);

    const processOrderHandler = (id) => {
        dispatch(processOrder(id))
    }


    useEffect(() => {
        dispatch(getAdminOrders());
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" })
        }
    }, [dispatch, error, message])

    return (
        <section className='myadminorders'>
            {
                loading === false && orders !== undefined ?
                    <main>
                        <h2>Orders</h2>

                        {orders && orders.map((i) => {

                            const id = i._id;
                            const status = i.orderStatus;
                            const qty = i.orderItems.cheeseBurger.quantity + i.orderItems.vegCheeseBurger.quantity + i.orderItems.burgerWithFries.quantity;
                            const price = i.totalAmount;
                            const method = i.paymentMethod;
                            const user = i.user.name;

                            return (
                                <div className='adminorders' key={id}>
                                    <table>
                                        <tbody>
                                            <tr>

                                                <td className='absolute'>
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
                                                    <div className="row">
                                                        User: {user}
                                                    </div>
                                                </td>

                                                <td className='colordedoadmin'>
                                                    <div className='actionadmin'>
                                                        <Link to={`/order/${id}`}> <AiOutlineEye /> </Link>
                                                        <button onClick={() => processOrderHandler(id)} > <MdSkipNext /> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })}

                    </main>
                    : <Loading />
            }
        </section>
    )
}

export default Orders
