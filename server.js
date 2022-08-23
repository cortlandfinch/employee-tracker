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
                case 'Add a New Role':
                    addNewRole();
                    break;
                case 'Add a New Employee':
                    addNewEmployee();
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
                    return true;
                } else {
                    console.log('You need to provide the New Name of the Department!');
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
const addNewRole = () => {
    db.findDepartments().then(([rows]) => {
        let departments = rows;
        const departmentTable = departments.map(({ name, id }) => ({
            name: name,
            value: id
        }));
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the Name of the New Role?',
                validate: (titleInput) => {
                    if(titleInput) {
                        return true;
                    } else {
                        console.log('You need to provide the New Name of the Role!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the Salary of the New Role?',
                validate: (salaryInput) => {
                    if(salaryInput) {
                        return true;
                    } else {
                        console.log('You need to provide the Salary of the New Role!');
                        return false;
                    }
                }
            },
            {
               type: 'list',
               name: 'department_id',
               message: 'What Department does this New Role belong to?',
               choices: departmentTable,
            }
        ])
        .then((answer) => {
            db.makeNewRole(answer)
            .then (() => questions());
        })
    });
};

// Add employee
//     enter first name, last name, role, manager
const addNewEmployee = () => {
    db.findRoles().then(([rows]) => {
        let roles = rows;
        const roleTable = roles.map(({ name, id }) => ({
            name: name,
            value: id
        }));
        inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the First Name of the New Employee?',
                validate: (firstNameInput) => {
                    if(firstNameInput) {
                        return true;
                    } else {
                        console.log('You need to provide a First Name for the New Employee!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the Last Name of the New Employee?',
                validate: (lastNameInput) => {
                    if(lastNameInput) {
                        return true;
                    } else {
                        console.log('You need to provide a Last Name for the New Employee!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Please choose a Role for this New Employee.',
                choices: roleTable,
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Please choose a Manager ID for this New Employee.',
                validate: (managerIdInput) => {
                    if(managerIdInput) {
                        return true;
                    } else {
                        console.log('You need to provide a Manager ID for the New Employee!');
                        return false;
                    }
                }
            }
        ])
        .then((answer) => {
            db.makeNewEmployee(answer)
            .then(() => questions());
        })
    });
};

// Update employee
    // select employee - enter new role