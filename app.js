const express = require('express');
const path = require ('path');
const app = express();

//app.use(express.static('/public'));
app.use(express.static(path.resolve(__dirname + '/public')));
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.listen(3030,()=> console.log('servidor en funcionamiento'));



