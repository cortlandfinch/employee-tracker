// Prompt new users for options (view all departments/ roles/ employees/ add a department/ add a role/ add an employee/ update an employee role) ** use inquirer and import entire database folder
const db = require('./db');
const inquirer = require('inquirer');
const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please choose what you woud like to do.',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a New Department', 'Add a New Role', 'Add a New Employee', 'Update an Employee Role']
        },
    ])
        .then((answer) => {
            console.log(answer.options);
            switch (answer.options) {
                case 'View all Departments':
                    viewDepartments();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'Add a New Department':
                    addNewDepartment();
                    break;
                
                default:
                    console.log('You are finished.');
            }
        });
};

questions();

// Show table for all departments
function viewDepartments () {
    db.findDepartments()
    .then (([rows]) => {
        let departments = rows
        console.table(departments);
    })
    .then (() => questions());
};

// Show table for all roles (job title, role id, department, salary)
function viewRoles () {
    db.findRoles()
    .then (([rows]) => {
        let roles = rows
        console.table(roles);
    })
    .then (() => questions());
};

// Show table for employees (id, first name, last name, job title, department, salary, managers)
function viewEmployees () {
    db.findEmployees()
    .then (([rows]) => {
        let employees = rows
        console.table(employees);
    })
    .then (() => questions());
};

// Add department 
    // Enter name of department
const addNewDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the New Department?',
            validate: (departmentInput) => {
                if(departmentInput) {
                    console.log('You have successfully added a New Department!');
                    return true;
                } else {
                    console.log('You need to provide the New Name of the Department you are adding!');
                    return false;
                }
            }
        }
    ])
    .then((answer) => {
        db.makeNewDepartment(answer)
        .then(() => questions());
    })
};


// Add role
    // Enter name, salary, department
// Add employee
    // enter first name, last name, role, manager
// Update employee
    // select employee - enter new role