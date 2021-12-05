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
  const updateOptions = {
    gitRepo: "psychiatry", // [Required] Your Repo Name
    gitUsername: "alnoorimustafa", // [Required] Your GitHub Username.
    //   gitRepoToken: "abc123", // {Default is null} [Optional] The Token from GitHub to Access a Private Repo.  Only for Private Repos.

    appName: "psychiatry", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "psychiatry.exe", //[Required] The Executable of the Application to be Run after updating.

    //   appDirectory: "C:/Users/alnoo/AppData/Local/Programs/electron", //{Default is "Application Data/AppName"} [Optional]  Where the app will receide, make sure your app has permissions to be there.
    //   versionFile: "/path/to/version.json", // {Default is "Application directory/settings/version.json"} [Optional] The Path to the Local Version File.
    //   tempDirectory: "/tmp", // {Default is "Application directory/tmp"} [Optional] Where the Update archive will download to.

    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
  };
  uaup.Update(updateOptions);
});
