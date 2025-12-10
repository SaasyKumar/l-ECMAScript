const exp = require("express");
const app =exp();
const port = 3000;


app.use(require("morgan")("dev"));

function HelloWorld(req, resp){
	resp.send("Hello World");
}
app.get("/", HelloWorld);

function logParam(req, resp){
	console.log(req.params.test);
}
app.get("/logParam:test?", logParam);

const PORT = 3000;
app.listen(PORT,()=>{
	console.log("starting zuko.in in port "+PORT);
});

