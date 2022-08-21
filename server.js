// Prompt new users for options (view all departments/ roles/ employees/ add a department/ add a role/ add an employee/ update an employee role) ** use inquirer and import entire database folder
const db = require('./db');
const inquirer = require('inquirer');
const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please choose what you woud like to do.',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
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
// Add role
    // Enter name, salary, department
// Add employee
    // enter first name, last name, role, manager
// Update employee
    // select employee - enter new role