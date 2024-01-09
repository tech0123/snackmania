import React from 'react'
import { Link } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user';
import Loading from '../Layout/Loading';



const Profile = () => {


    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    }

    const { loading, user } = useSelector(state => state.auth);



    return (
        <section className='profile'>
            {
                loading === false ?
                    <main>
                        <img src={user.photo} alt="user" />
                        <h2>{user.name}</h2>
                        {user.role === "admin" && (
                            <div>
                                <Link to="/admin/dashboard" style={{ backgroundColor: '#333333' }}> <MdDashboard /> Dashboard</Link>
                            </div>
                        )}

                        <div>
                            <Link to="/myorders"><FaShoppingCart /> Orders</Link>
                        </div>
                        <div>
                            <button style={{ backgroundColor: '#cccccc' }} onClick={logoutHandler} ><IoLogOut /> Logout</button>
                        </div>
                    </main>
                    : <Loading />
            }
        </section>
    )
}

export default Profile
