module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', function () { 
        console.log('Mongoose connection open to mongodb://localhost:27017/node-vue-moba'); });
}