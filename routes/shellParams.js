const express = require('express')
const router = express.Router()
const { shellScriptParams } =  require('../public/shFileArgs')

router.route('/').post(shellScriptParams)

module.exports  = router