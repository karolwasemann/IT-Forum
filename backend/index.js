import express from "express";
import db from "./init_lowdb.js";
import cors from "cors"; // Cross-Origin Resource Sharing

const app = express();
app.use(cors()); // allow all request
app.use(express.json()); //

app.get("/", (req, res) => {
  res.send(db.data.comments);
});

app.post("/", async (req, res, next) => {
  console.log("recieved");
  // console.log(db);
  console.log(req.body);
  db.data["comments"].push(req.body);
  await db.write();

  res.end();
});
app.delete("/", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.data["comments"] = db.data["comments"].filter(
    (comment) => comment.id !== id
  );
  // db.data["comments"] = newdb;
  db.write();

  res.end();
});

app.put("/", (req, res) => {
  const id = req.body.id;
  const message = req.body.message;

  db.data["comments"].forEach((comment) =>
    comment.id === id ? (comment.message = message) : null
  );

  db.write();
  res.end();
});

app.listen(4000, () => console.log("Listening on port 4000"));
