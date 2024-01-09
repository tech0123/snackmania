import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../components/Layout/Loading';


export const UserLoggedRoutes = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    return loading === false ? (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    ) : (
        <Loading />
    );
};


export const AdminRoutes = () => {
    const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

    return loading === false ? (
        isAuthenticated && user && user.role === "admin" ? <Outlet /> : <Navigate to="/me" />
    ) : (
        <Loading />
    );
};



export const UserNotLoggedRoutes = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    return loading === false ? (
        !isAuthenticated ? <Outlet /> : <Navigate to="/me" />
    ) : (
        <Loading />
    );
};
