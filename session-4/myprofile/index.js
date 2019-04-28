#!/usr/bin/env node

const Aboutme = require("./commands/Aboutme");
const Options = require("./options");
const chalk = require("chalk");

const Index = () => {
  console.log(chalk.yellow("Welcome to my resume"));
  Options();
};

Index();
