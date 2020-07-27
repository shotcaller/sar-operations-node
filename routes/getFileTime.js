const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res) => { 

fs.stat('public/shargs/385944.jpg', (err, stats) => {
    if(err) return res.status(404).send('File not found.')

    res.send(stats.birthtime.toString())
    console.log(stats.birthtime.toString())
})
})

module.exports = router