const connection = require('./connection');

class userChoice {
    constructor (connection) {
        this.connection = connection
    }
    findDepartments () {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;')
    }
    findRoles () {
        return this.connection.promise().query('SELECT role.department_id, role.title, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    }
}

module.exports = new userChoice(connection);