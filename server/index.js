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

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});