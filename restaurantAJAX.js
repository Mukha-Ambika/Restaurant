const express = require('express');
const app = express();
const port = 3000;

//when we hit http://localhost:3000 we will recieve request here and we are sending HtmlToSendAjax.html to browser
app.get('/',(req,res)=>{
      res.sendFile('/Users/mukhaambika/Desktop/display_zomato_restaurants/AJAX/HtmlToSendAjax.html'); 
});
  
app.listen(port,()=>{
    console.log(`listen port at http://localhost:${port}`)
})