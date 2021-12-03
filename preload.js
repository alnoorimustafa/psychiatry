// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const PouchDB = require("pouchdb");
// PouchDB.plugin(require("pouchdb-find"));

// const local_db = new PouchDB("patients");
// const remote_db = new PouchDB("http://localhost:5984/patients");

// local_db.sync(remote_db, { live: true, retry: true });

// db.get("mittens").then(function (doc) {
//   console.log(doc);
// });

// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/", async (req, res) => {
//   let received = req.body;
//   received._id = new Date().toJSON();
//   local_db
//     .put(received)
//     .then(() => {
//       local_db.get(received._id).then((doc) => res.send(doc));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/", (req, res) => {
//   local_db.allDocs({ include_docs: true }).then((docs) => res.send(docs));
// });
// app.get("/:id", (req, res) => {
//   local_db
//     .get(req.params.id)
//     .then(function (doc) {
//       res.send(doc);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });

// app.listen(4000);
