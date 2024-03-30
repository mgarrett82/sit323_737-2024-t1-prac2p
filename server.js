const express = require("express"); // loads the express module framework
const res = require("express/lib/response");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("Hello I'm listening to port"+port);
})
