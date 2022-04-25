import express from "express";
import db from "./init_lowdb.js";
import cors from "cors"; // Cross-Origin Resource Sharing
import {appendFile} from "fs"

const app = express();
app.use(cors()); // allow all request
app.use(express.json());



app.get("/notfound", (req, res, next) => {
  try{
  const myErr = new Error("not-found")
  myErr.type = "not-found"
  next(err)
} catch(err){
  console.log("hier im err")
  next(err)
}})

app.get("/404" , (req,res) => {
  res.status(404).send("Server not found")
}) 


app.use((err, req, res, next) => {
  const date = new Date().toLocaleString()
  let text = "\n"+ date  + "\n" + err.type;
  appendFile("./error_log.txt", text , () => {});
  console.log("hallo")
  res.redirect("/404")
})


app.get("/", (req, res) => {
  res.send(db.data.comments);
});

app.post("/", async (req, res) => {
  console.log("recieved");
  // console.log(db);
  console.log(req.body);
  db.data["comments"].push(req.body);
  await db.write();
  res.end()
  ;
});

app.delete("/", (req,res) => {
  const id = req.body.id;
  console.log("id",id)
  
  db.data["comments"] = db.data["comments"].filter((comment) => comment.id !== id)
  db.write();
  res.end();

})

app.put("/",(req,res) => {

})

app.use((req,res) =>{
  res.redirect("/notfound")
})

app.listen(4000, () => console.log("Listening on port 4000"));
