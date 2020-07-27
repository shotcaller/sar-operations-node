const fs = require('fs')

fs.stat('./shargs/temp.json', (err, stats) => {
    if(err) return console.log('File not found.')

    console.log(stats.birthtime.toString())
})