const connection = require('./connection');

class userChoice {
    constructor (connection) {
        this.connection = connection
    }
    departments () {
        return this.connection.promise().query('SELECT department.id, department.name FROM department')
    }
}

module.exports = new userChoice(connection);