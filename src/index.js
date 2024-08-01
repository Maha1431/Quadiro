const express = require('express');
const connectDB = require('./Config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send('Assignment for Quadiro Technologies'));

app.use('/api/auth', require('./Routers/authRoutes'));
app.use('/api/cars', require('./Routers/carRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
