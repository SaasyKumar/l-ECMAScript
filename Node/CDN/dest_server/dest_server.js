import express from "express";
import path from "path";

const app = express();
const dir = path.join(process.cwd(), "static_files");

app.use(express.static(dir,{
	maxAge: "1y",
	etag: true,
	immutable: true
}));
app.use((req, res,next)=>{
	console.log(req.url);
	next();
});

const PORT = 4000;
app.listen(PORT, ()=>{
	console.log("running cdn");
});
