const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const paths = {
    'fuckoff': 'Hey, fuck off!',
    'eatshit': 'hey why dont you eat shit',
    
}

app.get('/', (req, res)=>{
    res.send('give me a command to tell people to fuck off')
})

app.get('/:path', (request, response)=> {
    const statement = paths?.[path] 
    const path = request.params.path
    response.json({statement: statement })
})


app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})