DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL  
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    -- set relationship between role department id and id from department
    FOREIGN KEY (department_id) REFERENCES department(id)
    -- ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    -- set relationship between roles id and id in roles
     FOREIGN KEY (role_id) REFERENCES role(id),
    -- ON DELETE CASCADE
    -- set relationship between managers id and employee id
    -- INDEX manager_ind(manager_id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
--     ON DELETE set NULL
);

