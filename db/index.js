const connection = require('./connection');

class userChoice {
    constructor (connection) {
        this.connection = connection
    }
    findDepartments () {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;');
    }
    findRoles () {
        return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;");
    }
    findEmployees () {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;;");
    }
    // using SET ? to pass in user input from server functions (addNewDepartment, addNewRole, addNewEmployee) to table
    makeNewDepartment (name) {
        return this.connection.promise().query("INSERT INTO department SET ?", name);
    }
    makeNewRole (role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }
    makeNewEmployee (employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }
}

module.exports = new userChoice(connection);