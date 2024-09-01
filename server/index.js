const app = require('./app');
const mongoose = require("mongoose");
require('dotenv').config({ path: './config/config.env' });
const connectDatabase = ()=>{
    mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true 
    })
    .then((con)=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>console.log(err));
};
connectDatabase();
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});