const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI

const connectToMongo = () => {
    mongoose.connect(String(mongoURI)).then(() => {
        console.log('connect to MongoDb successfully')
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = connectToMongo 