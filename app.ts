const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World!");
})


//chạy ứng dụng

app.listen(8080, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})