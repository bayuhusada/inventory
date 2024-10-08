import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'; // Pastikan untuk mengimpor CSS Tailwind
import Login from './assets/Page/login';
import Register from './assets/Page/Register';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import ProtectedRoute from './assets/Page/ProtectedRoute';

function App() {
    return (
      <Router>
      <div className="flex">
          <Sidebar /> {/* Menampilkan sidebar */}
          <div className="flex-grow p-4">
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={
                    <ProtectedRoute>
                      <Dashboard/>
                    </ProtectedRoute>
                  } /> {/* Halaman utama */}
                  {/* Tambahkan rute lainnya di sini */}
              </Routes>
          </div>
      </div>
  </Router>
    );
}

export default App;
