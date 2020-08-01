#!/usr/bin/env node

const inquirer = require("inquirer")
const chalk = require("chalk")
const figlet = require("figlet")


const init = () => {
    console.log(
      chalk.green(
        figlet.textSync("Chadify 2.0", {
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
  };
  
  const askQuestions = () => {
    const questions = [
      {
        name: "QUESTION",
        type: "input",
        message: "Ask me anything.\n\n"
      }
    ];
    return inquirer.prompt(questions)
  };

  const yes = () => {
    console.log(
      chalk.green.bgBlack.bold("\nYes.\n")
    );
  };

  const kBro = () => {
    console.log(
      chalk.green.bgBlack.bold("\nK bro, have a nice day.\n")
    );
  };

  module.exports = async function chad () {
    init();

    const answers = await askQuestions()
    const { QUESTION } = answers 

    if(QUESTION === "") {
        setTimeout(() => {kBro()}, 1000)
    } else {setTimeout(() => {yes()}, 1000)}

  };
  