const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    console.log('hello get method is working');
    
})
app.listen(3030,()=>console.log(`Listening at Port 3030`))