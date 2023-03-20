const express = require('express');
const app = express();
const debug = require('debug')('app'); //ใช้สำหรับดูการเก็บ การทำงาน บนเบาว์เซอร์
const morgan = require('morgan'); //มิลเดิลเเวร์ของตัวเเอปพลิเคชั่น
const port = 3000;

app.use(morgan('combined'));

app.get("/" , (req , res) => {

    res.send("Hello Kantikorn")
})

app.listen(port , () => {
   debug("Listenning on port 3000") //ไห้เเสดงที่พอร์ต 3000
})

