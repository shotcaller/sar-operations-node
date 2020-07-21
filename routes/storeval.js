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

router.get('/api/pycode',(req, res) => {
    let resData
    const exec = require('child_process').exec;
        
        const myShellScript = exec(`bash bashscript.sh`);
        myShellScript.stdout.on('data', (data)=>{
            console.log(data); 
            resData = data
            res.send(data)
            // do whatever you want here with data
        });
        myShellScript.stderr.on('data', (data)=>{
            console.log(data)


        })

})

// router.get('/api/pycode',(req, res) => {
//     let resData
//     const { PythonShell } = require('python-shell')

//     if(Object.keys(req.body).length>0){
//     options = {
//         args : req.body
//         }
//     }
//     else options=null
    
//     console.log(Object.keys(req.body).length)

//     PythonShell.run(`${__dirname}/samplepy.py`,options, (err, result) => {
//         if(err) throw err
//         console.log('Python Output:')
//         console.log(result)
//         resData = result
//         res.send(resData)
//     })


// })


module.exports = router