const express = require('express');
//const csv = require('csv-parser');
const axios = require('axios');
//const fs = require('fs')
const app = express();
const port = 3000;
//app.use(express.static("display_zomato_restaurants"));


app.get('/',(req,res)=>{
      res.sendFile('/Users/mukhaambika/Desktop/display_zomato_restaurants/AJAX/HtmlToSendAjax.html'); 
});
  
app.listen(port,()=>{
    console.log(`listen port at http://localhost:${port}`)
})