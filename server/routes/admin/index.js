module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categories', async(req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.get('/test', (req, res) => {
        console.log('请求有效')
        res.end('success')
    })
    app.use('/admin/api', router)
}