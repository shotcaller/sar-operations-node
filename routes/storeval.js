const express = require('express')
const {
    storeInput,
    displayInput
} = require('../controllers/storeval')

const router = express.Router()

router.route('/').get(displayInput).post(storeInput)

module.exports = router