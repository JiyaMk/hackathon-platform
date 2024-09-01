const app = require('./app');
const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose
    .connect('mongodb://127.0.0.1:27017/hackScore')
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