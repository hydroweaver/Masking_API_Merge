const express = require('express')

const app = express()
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.send("Hello!")
})

app.post('/', (req, res)=>{
    res.send(JSON.stringify({
        "res": "Call posted"
    }))
})


app.post('/ivr', (req, res)=>{
    console.log(req.url);
    res.send(JSON.stringify({
        "val": "Hello! Welcome, please input the extension"
    }))
})

app.post('/number', (req, res)=>{
    console.log(req.url);
    res.send(JSON.stringify({
        "num": "32477874767"
    }))
})

app.listen(3000, ()=>{
    console.log('Server running...')
})
