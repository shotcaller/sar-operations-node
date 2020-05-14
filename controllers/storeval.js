const inputVals = require('../models/inputModel')

// @desc find basic input
// @access public
// @route GET /api/v1/storage

exports.displayAllInputs = async (req, res, next) => {
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

exports.storeAllInputs = async (req, res, next) => {
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
// @route GET /api/v1/creation

exports.displayInputCreation = async (req, res, next) => {
    try {
        const showDate = await inputVals.find({}, {identifier: 1})

        return res.status(200).json({
            success: true,
            data: showDate
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server error' })
    }
}
