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

const uaup = require("uaup-js");

const defaultStages = {
  Checking: "Checking For Updates!", // When Checking For Updates.
  Found: "Update Found!", // If an Update is Found.
  NotFound: "No Update Found.", // If an Update is Not Found.
  Downloading: "Downloading...", // When Downloading Update.
  Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
  Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
  Launch: "Launching...", // When Launching the Application.
};

window.addEventListener("DOMContentLoaded", () => {
  const defaultStages = {
    Checking: "Checking For Updates!", // When Checking For Updates.
    Found: "Update Found!", // If an Update is Found.
    NotFound: "No Update Found.", // If an Update is Not Found.
    Downloading: "Downloading...", // When Downloading Update.
    Unzipping: "Installing...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizing...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Launching...", // When Launching the Application.
  };
  const updateOptions = {
    gitRepo: "psychiatry", // [Required] Your Repo Name
    gitUsername: "alnoorimustafa", // [Required] Your GitHub Username.
    //   gitRepoToken: "abc123", // {Default is null} [Optional] The Token from GitHub to Access a Private Repo.  Only for Private Repos.

    appName: "psychiatry", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "psychiatry.exe", //[Required] The Executable of the Application to be Run after updating.

    //   appDirectory: "C:/Users/alnoo/AppData/Local/Programs/electron", //{Default is "Application Data/AppName"} [Optional]  Where the app will receide, make sure your app has permissions to be there.
    //   versionFile: "/path/to/version.json", // {Default is "Application directory/settings/version.json"} [Optional] The Path to the Local Version File.
    //   tempDirectory: "/tmp", // {Default is "Application directory/tmp"} [Optional] Where the Update archive will download to.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
  };
  uaup.Update(updateOptions);
});
