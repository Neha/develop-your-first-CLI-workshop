const inquirer = require("inquirer");
const Aboutme = require("./commands/Aboutme");
const Contactme = require("./commands/Contactme");

const Options = () => {
  console.log("Please select the options from the below:");
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Pick your option",
        choices: ["aboutme", "contactme"]
      }
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.option == "aboutme") {
        Aboutme();
      }
      if (answer.option == "contactme") {
        Contactme();
      }
    });
};

module.exports = Options;
