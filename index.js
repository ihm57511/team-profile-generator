const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./lib/htmlRenderer');

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
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter your engineer's name.",
    },
    {
        type: 'input',
        name: 'engineeID',
        message: "Please enter your engineer's ID number.",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter your engineer's email address.",
    },
    {
        type: 'input',
        name: 'engineerGitHub',
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
        type: 'list',
        name: 'menu',
        message: "Would you like to add an engineer or intern to your team?",
        choices: [
            'Engineer',
            'Intern',
            'No, team is complete.'
        ]
    }
]

// const employeeQuestions = [
//     {
//         type: 'input',
//         name: 'employeeName',
//         message: "Please enter the employee's name.",
//     },
//     {
//         type: 'input',
//         name: 'employeeID',
//         message: "Please enter the employee's ID number.",
//     },
//     {
//         type: 'input',
//         name: 'employeeEmail',
//         message: "Please enter the employee's email address.",
//     },
// ];

// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'managerOfficeNumber',
//         message: "Please enter your team manager's office number.",
//     }
// ];

// const engineerQuestions = [
//     {
//         type: 'input',
//         name: 'engineerGitHub',
//         message: "Please enter your engineer's GitHub username.",
//     },
// ];

// const internQuestions = [
//     {
//         type: 'input',
//         name: 'internSchool',
//         message: "Please enter your intern's school.",
//     },
// ];

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function (err) {
//         if (err) throw err;
//     })
// };

// function init() {
//     inquirer.prompt()
//         .then(() => {
//             writeToFile or writeFileSync???????????
//         })
// }