// Prompt new users for options (view all departments/ roles/ employees/ add a department/ add a role/ add an employee/ update an employee role) ** use inquirer and import entire database folder
const db = require('./db/connection');
const inquirer = require('inquirer');
const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please choose what you woud like to do.',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
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

function viewDepartments () {
    const sql  = `SELECT id AS department_id,
    name AS department_name
    FROM department`;
    db.query(sql, (err, row) => {
        if (err) {
            console.log(err.message);
        }
        console.table(row);
    });
};

function viewRoles () {
    const sql = `SELECT id AS role_id,
    title AS role_title,
    salary AS role_salary,
    department_id AS role_department_id
    FROM role
    LEFT JOIN department ON role.department_id = department.name`;
    db.query(sql, (err, row) => {
        if (err) {
            console.log(err.message);
        }
        console.table(row);
    });
};

function viewEmployees () {
    const sql = ``
}

// Show table for all departments
// Show table for all roles (job title, role id, department, salary)
// SHow table for employees (id, first name, last name, job title, department, salary, managers)

// Add department 
    // Enter name of department
// Add role
    // Enter name, salary, department
// Add employee
    // enter first name, last name, role, manager
// Update employee
    // select employee - enter new role