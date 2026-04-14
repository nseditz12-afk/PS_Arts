const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ps_arts')
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));