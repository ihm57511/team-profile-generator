// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter your team manager's name.",
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Please enter your team manager's employee ID number.",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter your team manager's email address.",
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please enter your team manager's office number.",
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter your engineer's name.",
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "Please enter your engineer's ID number.",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter your engineer's email address.",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please enter your engineer's GitHub username.",
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Please enter your intern's name.",
    },
    {
        type: 'input',
        name: 'internID',
        message: "Please enter your intern's ID number.",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter your intern's email address.",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Please enter your intern's school.",
    },
]

const menuQuestion = [
    {
        type: 'rawlist',
        name: 'menu',
        message: "Would you like to add an engineer or intern to your team?",
        choices: [
            'Engineer',
            'Intern',
            'No, team is complete.'
        ]
    }
]

function addManager() {
    inquirer.prompt(managerQuestions) 
    .then(data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber);
        team.push(manager);
        addTeamMember();
    })
}

addManager();

function addTeamMember() {
    inquirer.prompt(menuQuestion)
    .then(data => {
        switch(data.menu) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                buildHTML();
        }
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.gitHub);
        team.push(engineer);
        addTeamMember();
    });

}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(data => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        team.push(intern);
        addTeamMember();
    });
}

function buildHTML() {
    if (!fs.existsSync(path.resolve(__dirname, 'HTML'))) {
        fs.mkdirSync(path.resolve(__dirname, 'HTML'));
    }
    fs.writeFileSync(path.join(path.resolve(__dirname, 'HTML'), 'index.html'), render(team), 'utf-8');
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
