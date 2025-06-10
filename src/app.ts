// const express = require('express');
import express from 'express'; // sử dụng TypeScript để import express
import 'dotenv/config'; // sử dụng TypeScript để import dotenv
// require('dotenv').config(); // sử dụng CommonJS để import dotenv: javaScript
import webRoutes from './routes/web'; // import các route từ file web.ts
const app = express();


const PORT = process.env.PORT || 8080;

//config view engine để sử dụng EJS
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

//config red.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// chú ý: cấu hình xong hết rồi mới chạy (cấu hình route sau)


//chạy ứng dụng config routers
webRoutes(app); // sử dụng các route đã import

//config static file
app.use(express.static('public'));

app.listen(8080, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})