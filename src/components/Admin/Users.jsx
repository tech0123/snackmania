import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getAdminUsers } from '../../redux/actions/admin';
import Loading from '../Layout/Loading';

const User = ({ id, uname, role, since, img }) => (

    <div className='user'>
        <table>
            <tbody>
                <tr>
                    <td className='colordedo2'>
                        <div className='action'>
                            <img src={img} alt="DP" />
                        </div>
                    </td>

                    <td>
                        <div className="row">
                            UserID: {id}
                        </div>
                        <div className='row'>
                            Name: {uname}
                        </div>

                        <div className="row">
                            Role: {role}
                        </div>
                        <div className="row">
                            Since: {since}
                        </div>
                    </td>

                </tr>
            </tbody>

        </table>
    </div>
)

const Users = () => {


    const dispatch = useDispatch();
    const { loading, error, users } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getAdminUsers());
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
    }, [dispatch, error])


    return (
        <section className='users'>
            {
                loading === false && users !== undefined ?

                    <main>
                        <h2>Users</h2>
                        {users && users.map((i) =>
                            <User key={i._id} id={i._id} uname={i.name} img={i.photo} role={i.role} since={i.createdAt.split("T")[0]} />
                        )}
                    </main>

                    : <Loading />
            }
        </section>
    )
}

export default Users
