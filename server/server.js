const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/text', (req, res) =>{
    res.send('서버 연결됨')
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); 
})