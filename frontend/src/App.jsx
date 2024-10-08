import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // Pastikan untuk mengimpor CSS Tailwind
import Login from './assets/Page/login';
import Register from './assets/Page/Register';
import Dashboard from './Components/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/" element={<Dashboard />} /> {/* Halaman utama default */}
            </Routes>
        </Router>
    );
}

export default App;
