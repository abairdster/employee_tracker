USE department_db;

INSERT INTO department (department_name)
VALUES  ("engineering"),
        ("finance"),
        ("marketing"),
        ("sales");
SELECT *  FROM department;
   

INSERT INTO role_id (title, salary, department_id)
VALUES ("UX lead des", 100,000, 1)
       ("Product manager", 100,000, 1)
       ("Sales rep", 100,000, 4)
       ("Fullstack dev", 100,000,1)
       ("Marketing lead", 100,000,3)
       ("Accoutant", 100,000, 2)
SELECT * FROM role_id;

INSERT INTO employee(first_name, last_name, role_id, manager_id, department_id)
VALUES ("Wally","Schang",1,3)
       ("Joe", "Judge",4,1)
       ("Rogers", "Hornsby",3,2)
       ("Pie", "Traynor",2,4)
       ("Joe", "Sewell",1,3)
       ("Tris","Speaker",3,2)
       ("Harry", "Heilmann",2,2)
SELECT *  FROM employee;