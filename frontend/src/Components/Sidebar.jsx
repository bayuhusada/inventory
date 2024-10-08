import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')); // Ambil informasi pengguna dari local storage

    const handleLogout = () => {
        localStorage.removeItem('user'); // Hapus status login
        navigate('/login'); // Redirect ke halaman login
    };

    // Jika tidak ada pengguna, tidak tampilkan sidebar
    if (!user) return null; 

    return (
        <div className="bg-gray-800 text-white w-64 h-screen px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Menu</h2>
            <ul>
                <li className="mb-4">
                    <Link to="/" className="hover:text-gray-300">
                        Dashboard
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/kasir" className="hover:text-gray-300">
                        Kasir
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/barang" className="hover:text-gray-300">
                        Barang
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/barang-masuk" className="hover:text-gray-300">
                        Barang Masuk
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/barang-keluar" className="hover:text-gray-300">
                        Barang Keluar
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/stock" className="hover:text-gray-300">
                        Stock
                    </Link>
                </li>
                <li className="mt-6">
                    <button
                        onClick={handleLogout}
                        className="w-full text-left bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
