const express = require('express')
const app = express()

app.use(require('cors')())

require('./plugins/db')(app)
require('./routes/admin')(app)

app.get('/test', function(req, res) { res.end('xixixi') })
app.use(express.json())
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})