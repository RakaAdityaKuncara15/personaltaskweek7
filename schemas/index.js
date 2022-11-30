const mongoose = require("mongoose");

const connect = () => {
    mongoose
        // .connect("mongodb://localhost:27017/voyage_blog") //local
        .connect("mongodb+srv://projectminggu6raka:projectminggu6raka@cluster0.eloac4s.mongodb.net/?retryWrites=true&w=majority") //server
        .catch(err=>console.log(err))
}

mongoose.connection.on('error', err=> {
    console.error('MongoDB connection error', err);
})

module.exports = connect;