import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, paymentVerification } from '../../redux/actions/order';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { server1 } from '../../redux/store';
import axios from 'axios';
import Loading from '../Layout/Loading'


const Confirmorder = () => {


    const [paymentMethod, setPaymentMethod] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } = useSelector(state => state.cart);
    const { message, error, loading } = useSelector(state => state.order);



    const submitHandler = async (e) => {

        e.preventDefault();
        setDisableBtn(true);

        if (paymentMethod === "COD") {

            dispatch(createOrder(shippingInfo, cartItems, paymentMethod, subTotal, tax, shippingCharges, total))

        } else {


            const { data: { order, orderOptions } } = await axios.post(`${server1}/createorderonline`, {
                shippingInfo, orderItems: cartItems, paymentMethod, itemsPrice: subTotal, taxPrice: tax, shippingCharges, totalAmount: total
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            const response = await axios.get(`${server1}/razorkey`, {
                withCredentials: true
            });

            const key = response.data.key;


            const options = {
                "key": key,
                "amount": order.amount,
                "currency": "INR",
                "name": "SnackMania",
                "description": "Snacks App",
                "order_id": order.id,
                "handler": function (response) {


                    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

                    dispatch(paymentVerification(razorpay_payment_id, razorpay_order_id, razorpay_signature, orderOptions))
                },

                "theme": {
                    "color": "#9c003c"
                }
            };
            const razorpay = new window.Razorpay(options);
            razorpay.open();

        }


    }


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
            setDisableBtn(false);
        }

        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" })
            dispatch({ type: "emptyState" })
            navigate("/paymentsuccess")
        }
    }, [dispatch, error, message, navigate])



    return (
        <section className='confirmorder'>
            {
                loading === true ?
                    <Loading />
                    :
                    <main>
                        <h2>Confrim Order</h2>

                        <form onSubmit={submitHandler}>
                            <div>
                                <label>Cash on Delivery</label>
                                <input type="radio" name="payment" id="payment" required onChange={() => setPaymentMethod("COD")} />
                            </div>
                            <div>
                                <label>Online Payment</label>
                                <input type="radio" name="payment" id="payment" onChange={() => setPaymentMethod("online")} />
                            </div>
                            <button disabled={disableBtn} type="submit">Place Order</button>
                        </form>
                    </main>
            }
        </section>
    )
}

export default Confirmorder
