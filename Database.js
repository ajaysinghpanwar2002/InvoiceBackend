const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI

const connectToMongo = () => {
    console.log(mongoURI, typeof mongoURI)
    mongoose.connect(String(mongoURI)).then(() => {
        console.log('connect to MongoDb successfully')
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = connectToMongo 