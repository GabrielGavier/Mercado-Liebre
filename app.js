const express = require('express');
const path = require('path');
const app = express();

const publicPath= path.join(__dirname,'public');

const port = 3300;

app.use(express.static(publicPath));
app.listen(port, ()=>{
    console.log('server started on http://localhost:3300');
});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
});
app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'));
});
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'));
});