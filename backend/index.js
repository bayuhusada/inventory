const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Impor cors
const app = express();
const port = 3001;

app.use(cors()); // Gunakan middleware CORS
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Ganti dengan origin frontend Anda
}));


// Koneksi ke database MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'invent-kasir'
});

// Koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint untuk login
app.post('/api/login', (req, res) => {
    const { username, password, role } = req.body;

    // Mencari pengguna di database
    db.query('SELECT * FROM users WHERE username = ? AND role = ?', [username, role], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];

        // Membandingkan password yang di-hash
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (isMatch) {
                // Login berhasil
                res.json({ message: 'Login successful', user });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    });
});

// Endpoint untuk registrasi
app.post('/api/register', (req, res) => {
    const { username, password, role } = req.body;

    // Hash password sebelum menyimpannya
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Simpan pengguna baru di database
        db.query('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, hashedPassword, role], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ id: results.insertId, username, role });
        });
    });
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
