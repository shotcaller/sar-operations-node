const express = require('express')
const Input = require('../models/inputModel')
const {
    storeAllInputs,
    displayAllInputs,
    displayInputCreation
} = require('../controllers/storeval')

const router = express.Router()

router.route('/api/v1/storage').get(displayAllInputs).post(storeAllInputs)
router.route('/api/v1/enumerate').get(displayInputCreation)

router.route('/api/v1/testparams/:idt')
.get(function(req, res){
    const identify = Input.findOne({identifier: req.params.idt}, function(err, data){
        if(!err) {
            return res.status(200).json ({
                success: true,
                data: data
            })
        } else {
            console.log('Not found')
        }
    })
})

module.exports = router