var express= require('express');
var app= express();

app.get("/" , function(res,req){
    res.send("hello world");
});

app.listen( process.env.PORT||3000 , ()=>console.log("ok running"));