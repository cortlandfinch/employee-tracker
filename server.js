// Prompt new users for options (view all departments/ roles/ employees/ add a department/ add a role/ add an employee/ update an employee role) ** use inquirer and import entire database folder
const db = require('./db');
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
                case 'View all departments':
                    viewDepartments();
                    break;
                default:
                    console.log('You are finished.');
            }
        });
};

questions();

function viewDepartments () {
    const sql  = `SELECT department_id AS id,
    department_name AS name
    FROM department`;
    db.query(sql, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
};

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