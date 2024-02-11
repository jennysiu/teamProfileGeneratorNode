// todo consider adding user input validations for the Class js files

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fsp = require("fs/promises");
const { type } = require("os");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("../src/page-template");
const pageTemplate = require("../src/page-template");

let engineers = [];
let interns = [];

// -- TODO: Write Code to gather information about the development team members, and render the HTML file.

// start user prompts
async function initPrompts() {
  let manager = await promptManagerInfo()
  // console.log(managerDetails)
  let memberChoice;
  do {
    memberChoice = await promptTeamMember();
  } while (memberChoice !== "Finish building team") 

  let team = [manager, engineers, interns]
  // console.log(team)
  writeToFile(team);
}

initPrompts();

async function promptManagerInfo() {
  console.log("Please enter the team manager's details: ");
  const answers = await inquirer.prompt([
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
  return new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

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
        // call function to prompt for engineer details to create new engineer
        const engineer = await promptEngineerInfo();
        engineers.push(engineer);
        break;
      case "Add an intern":
        // call function to prompt for interns details to create new intern
        const intern = await promptInternInfo()
        interns.push(intern);
        break;
      case "Finish building team":
        return response.memberChoice;
    }
}

async function promptEngineerInfo() {
  console.log("Please enter the engineer's details: ");
  const answers = await inquirer.prompt([
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
      name: "email",
      message: "Engineer's email: "
    },
    {
      type: "input",
      name: "github",
      message: "Engineer's GitHub username: "
    }
  ])
  return new Engineer(answers.name, answers.id, answers.email, answers.github);

}

async function promptInternInfo() {
  console.log("Please enter the Intern's details: ");
  const answers = await inquirer.prompt([
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
  return new Intern(answers.name, answers.id, answers.email, answers.school);
}

async function writeToFile(team) {
  console.log("Starting write to file..");
  console.log(team)

  try {
    const html = pageTemplate(team);

    await fsp.writeFile(outputPath, html);
    console.log("Successfully wrote to file");
  } catch (err) {
    console.log(err);
  }
}

