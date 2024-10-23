const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        const connect = await mongoose.
        connect(proccess.env.CONNECTION_STRING);
        console.log(
            "Database Connected: ",
            connect.connection.name
        
        );
    } catch (err) {
        console.log(err);
        // process.exit(1);
        //terminate the procces immedaitely
        //0 - succues
        //1 - fail
    }
};

module.exports = connectDb;