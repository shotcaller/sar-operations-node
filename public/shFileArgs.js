const fs = require('fs')

exports.shellScriptParams = (req, res) => {

    const params = req.body
    paramStr = params.join(' ')
    console.log(paramStr)

    fs.open(`${__dirname}/shargs/args.sh`, 'a+', (err, fd) => {
        if(err) console.log(err)

        fs.readFile(`${__dirname}/shargs/args.sh`, (err, data) => {
            if(err) console.log(err)
    
            let fileDataArray = data.toString().split('\n')
            let arg = fileDataArray[10]
            newArgs = `${arg.split(' ')[0]} ${arg.split(' ')[1]} ${paramStr}`
            fileDataArray[10] = newArgs
            let fileData = fileDataArray.join('\n')
    
            fs.writeFile(`${__dirname}/shargs/args.sh`,fileData, 'utf-8', (err) => {
                if(err) console.log(err)
    
                console.log('Written to file.')
            })
        })
    })

    res.send('Changed script!')

}

    
   
    
