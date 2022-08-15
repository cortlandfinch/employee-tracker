INSERT INTO department 
(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal')

INSERT INTO role
(title, department_id, salary)
VALUES
('Sales Lead', 'Sales', 100000),
('Salesperson', 'Sales', 80000),
('Lead Engineer', 'Engineering', 150000),
('Software Engineer', 'Engineering', 120000),
('Account Manager', 'Finance', 160000),
('Accountant', 'Finance', 125000),
('Legal Team Lead', 'Legal', 250000),
('Lawyer', 'Legal', 190000)

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Joey', 'Tribbiani', 1, 1),
('Chandler', 'Bing', 1, 0),
('Ross', 'Geller', 2, 1),
('Rachel', 'Green', 2, 0),
('Monica', 'Geller', 3, 1),
('Phoebe', 'Buffay', 3, 0),
('Richard', 'Burke', 4, 1),
('Janice', 'Hosenstein', 4, 0)

