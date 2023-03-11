const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://rohit:rohit@cluster0.k8unhys.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo;