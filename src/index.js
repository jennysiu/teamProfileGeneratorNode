// todo consider adding user input validations for the Class js files

import Manager from "../lib/Manager";
import Engineer from "../lib/Engineer";
import Intern from "../lib/Intern";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const manager = new Manager(promptManagerInfo());
// const engineer = new Engineer(promptEngineerInfo());
// const intern = new Intern(promptInternInfo());

// start user prompts
function initPrompts() {
  promptManagerInfo();
  promptTeamMember();
  while (!answers.memberChoice === "Finish building team") {
    promptTeamMember();
  }
}

initPrompts();

function promptManagerInfo() {
  console.log("Please enter the team manager's details: ");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Team manager's name: "
    },
    {
      type: "input",
      name: "id",
      message: "Team manager's ID: "
    },
    {
      type: "input",
      name: "email",
      message: "Team manager's email: "
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Team manager's office number: "
    }
  ])
}

function promptTeamMember() {
  return inquirer.prompt([
    {
    type: "list",
    name: "memberChoice",
    message: "Which team member would you like to add? ",
    choices: ["Add an Engineer", "Add an Intern", "Finish building team"]
    }
  ]).then(answers => {
    switch (answers.action) {
      case "Add an engineer":
        // call function to prompt for engineer details
        promptEngineerInfo();
        break;
      case "Add an intern":
        // call function to prompt for interns details
        promptInternInfo();
        break;
      case "Finish building team":
        console.log("Creating the team...");
        break;
    }
  })
} 

function promptEngineerInfo() {
  console.log("Please enter the engineer's details: ");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Engineer's name: "
    },
    {
      type: "input",
      name: "id",
      message: "Engineer's ID: "
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Engineer's email: "
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Engineer's GitHub username: "
    }
  ])
}

function promptInternInfo() {
  console.log("Please enter the Intern's details: ");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Intern's name: "
    },
    {
      type: "input",
      name: "id",
      message: "Intern's ID: "
    },
    {
      type: "input",
      name: "email",
      message: "Intern's email: "
    },
    {
      type: "input",
      name: "school",
      message: "Intern's school: "
    }
  ])
}


