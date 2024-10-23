// const mongoose = require("mongoose");

// const connectDb = async () => {
//     try{
//         const connect = await mongoose.
//         connect(proccess.env.CONNECTION_STRING);
//         console.log(
//             "Database Connected: ",
//             connect.connection.name
        
//         );
//     } catch (err) {
//         console.log(err);
//         // process.exit(1);
//         //terminate the procces immedaitely
//         //0 - succues
//         //1 - fail
//     }
// };

// module.exports = connectDb;


// mongoose module require maane package install krna pdega
const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        const connect = await mongoose.connect("mongodb://localhost:27017/healthcare_project")
        console.log("Database Connected: ",connect.connection.name)
        

    }catch(error){
        console.log(error)
    }
}
module.exports=connectDb;

