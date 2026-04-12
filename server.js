
/* Replace server.js with this */

const express = require('express');
const path = require('path');
const cors = require('cors');
require('./db');

const authRoutes = require('./auth');
const productRoutes = require('./products');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);

app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,'nimisha.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});