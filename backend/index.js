import express from "express";
import db from "./init_lowdb.js";
import cors from "cors"; // Cross-Origin Resource Sharing

const app = express();
app.use(cors()); // allow all request
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send();
});

app.post("/", async (req, res) => {
  console.log("recieved");
  console.log(db);
  console.log(req.body);
  db.data["comments"].push(req.body);
  await db.write();
  //   res.send(db.data);
});

app.listen(4000, () => console.log("Listening on port 4000"));
