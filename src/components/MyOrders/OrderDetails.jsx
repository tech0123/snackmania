import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../redux/actions/order';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loading from '../Layout/Loading';

const OrderDetails = () => {

    const dispatch = useDispatch();
    const { loading, error, order } = useSelector(state => state.orders);
    const params = useParams()

    useEffect(() => {

        dispatch(getOrderDetails(params.id));
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [dispatch, error, params.id])



    return (
        <section className='orderDetails'>
            {
                loading === false && order !== undefined ?

                    <main>
                        <h2>Order Details</h2>

                        <article>
                            <h2>Ordered Items</h2>

                            <div>
                                <h4>Cheese Burger</h4>
                                <div>
                                    <span>{order.orderItems.cheeseBurger.quantity}</span> x <span>{order.orderItems.cheeseBurger.price}</span>
                                </div>
                            </div>

                            <div>
                                <h4>Veg Cheese Burger</h4>
                                <div>
                                    <span>{order.orderItems.vegCheeseBurger.quantity}</span> x <span>{order.orderItems.vegCheeseBurger.price}</span>

                                </div>
                            </div>

                            <div>
                                <h4>Cheese Burger with French Fries</h4>
                                <div>
                                    <span>{order.orderItems.burgerWithFries.quantity}</span> x <span>{order.orderItems.burgerWithFries.price}</span>

                                </div>
                            </div>

                            <div style={{ border: "1px solid #bbbbbb" }}>
                                <h4>Sub Total</h4>
                                <b>₹{order.itemsPrice}</b>
                            </div>

                        </article>



                        <div>
                            <h2>Shipping</h2>
                            <p>
                                <b>Address:</b>
                                {`${order.shippingInfo.address} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pincode}`}
                            </p>
                        </div>

                        <div>
                            <h2>Contact</h2>
                            <p>
                                <b>Name:</b>
                                {order.user.name}
                            </p>
                            <p>
                                <b>Mobile No:</b>
                                {order.shippingInfo.mobile}
                            </p>
                        </div>

                        <div>
                            <h2>Status</h2>
                            <p>
                                <b>Order Status:</b>
                                {order.orderStatus}
                            </p>

                            <p>
                                <b>Placed At:</b>
                                {order.createdAt.split("T")[0]}
                            </p>

                            <p>
                                <b>Delivered At:</b>
                                {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}

                            </p>
                        </div>

                        <div>
                            <h2>Payment</h2>
                            <p>
                                <b>Payment Method:</b>
                                {order.paymentMethod}
                            </p>

                            <p>
                                <b>Payment Reference:</b>
                                {order.paymentMethod === "online" ? `#${order.paymentInfo}` : "NA"}
                            </p>

                            <p>
                                <b>Paid At:</b>
                                {order.paymentMethod === "online" ? order.paidAt.split("T")[0] : "NA"}
                            </p>
                        </div>

                        <div>
                            <h2>Amount</h2>
                            <p>
                                <b>Items Total:</b>
                                ₹{order.itemsPrice}
                            </p>

                            <p>
                                <b>Shipping Charges:</b>
                                ₹{order.shippingCharges}
                            </p>

                            <p>
                                <b>Tax:</b>
                                ₹{order.taxPrice}
                            </p>

                            <p>
                                <b>Total Amount:</b>
                                ₹{order.totalAmount}
                            </p>
                        </div>
                    </main>

                    : <Loading />

            }
        </section>
    )
}

export default OrderDetails
