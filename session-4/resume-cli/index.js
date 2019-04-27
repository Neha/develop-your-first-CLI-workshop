const Aboutme = require("./commands/Aboutme");
const Options = require("./Options");
const chalk = require("chalk");

const Index = () => {
  console.log(chalk.yellow("Welcome to my resume"));
  Options();
};

Index();
