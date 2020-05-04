const inputVals = require('../models/inputModel')

// @desc find basic input
// @access public
// @route GET /api/v1/storage

exports.displayInput = async (req, res, next) => {
    try {
        const showInput = await inputVals.find()

        return res.status(200).json({
            success: true,
            count: showInput.length,
            data: showInput
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
}

// @desc store basic input
// @access public
// @route POST /api/v1/storage

exports.storeInput = async (req, res, next) => {
    try {
        const storeVal = await inputVals.create(req.body)
        return res.status(200).json({
            success: true,
            data: storeVal
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
}


// @desc fetch only created timestamp
// @access public
// @route GET /api/v1/storage

exports.displayInputCreation = async (req, res, next) => {
    try {
        const showInput = await inputVals.find({}, {_createdAt: 1})

        return res.status(200).json({
            success: true,
            data: showInput
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
}