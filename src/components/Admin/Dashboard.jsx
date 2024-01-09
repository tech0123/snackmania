import { Chart, Tooltip, ArcElement, Legend } from 'chart.js'
import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loading from '../Layout/Loading'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { getDashboardStats } from '../../redux/actions/admin'

Chart.register(Tooltip, ArcElement, Legend)


const Circle = ({ rupee, title, value }) => (
    <div>
        <h3>
            {rupee && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>
)

const Dashboard = () => {

    const dispatch = useDispatch();
    const { loading, error, totalIncome, ordersCount, usersCount } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getDashboardStats());
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [dispatch, error])

    const data = {
        labels: ["Preparing", "Shipped", "Delivered"],
        datasets: [
            {
                label: "# of Orders",
                data: ordersCount ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered] : [0, 0, 0],
                backgroundColor: ["rgba(159,63,176,0.1)", "rgba(78,63,176,0.2)", "rgba(156,0,60,0.3)"],
                borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
                borderWidth: 1,
            }
        ]
    }

    return (
        <section className='dashboard'>

            {
                loading === false ?

                    <main>
                        <h2>Dashboard</h2>
                        <article>
                            <Circle rupee={false} title={"Total User"} value={usersCount} />
                            <Circle rupee={false} title={"Total Order"} value={ordersCount.total} />
                            <Circle rupee={true} title={"Total Income"} value={totalIncome} />
                        </article>

                        <section>
                            <div>
                                <aside>
                                    <Doughnut data={data} />
                                </aside>
                            </div>

                            <div>
                                <Link to="/admin/orders"><FaShoppingCart />View Orders</Link>
                                <Link to="/admin/users"><FaUser />View Users</Link>
                            </div>
                        </section>
                    </main>

                    : <Loading />
            }

        </section>
    )
}

export default Dashboard
