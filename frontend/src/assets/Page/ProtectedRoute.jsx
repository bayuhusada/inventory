import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user')); // Ambil informasi pengguna dari local storage

    if (!user) {
        return <Navigate to="/login" />; // Redirect ke halaman login jika tidak ada pengguna
    }

    return children; // Kembalikan anak jika pengguna ada
};

export default ProtectedRoute;
