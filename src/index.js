// todo consider adding user input validations for the Class js files

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let engineers = [];
let interns = [];

// const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.



// start user prompts
async function initPrompts() {
  const manager = new Manager(await promptManagerInfo());
  let memberChoice;
  do {
    memberChoice = await promptTeamMember();
  } while (memberChoice !== "Finish building team") 
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

async function promptTeamMember() {
  const response = await inquirer.prompt([
    {
    type: "list",
    name: "memberChoice",
    message: "Which team member would you like to add? ",
    choices: ["Add an engineer", "Add an intern", "Finish building team"]
    }
  ]);
    switch (response.memberChoice) {
      case "Add an engineer":
        // call function to prompt for engineer details
        const engineerDetails = await promptEngineerInfo();
        // create new engineer 
        const engineer = new Engineer(engineerDetails);
        engineers.push(engineer);
        break;
      case "Add an intern":
        // call function to prompt for interns details
        const internDetails = await promptInternInfo()
        // create new intern
        const intern = new Intern(internDetails);
        interns.push(intern);
        break;
      case "Finish building team":
        console.log("Creating the team...");
        return response.memberChoice;
    }
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


