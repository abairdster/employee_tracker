const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@llMyP@ssw0rdsL1v3',
  database: 'employee_db'

})

db.connect(function (err) {
  if (err) {
    throw err
  } else console.log("connected to db")
});

// first ques what would you like to do?
function askQuestion() {
  inquirer.prompt({
    name: "question",
    type: "list",
    choices: ["Add employee", "Update Employee Role", "See View all Employees", "Add role", "View all Roles", "View all Dept", "Add Dept"]
  }).then(function (response) {
    console.log(response);
    switch (response.question) {
      case "Add employee":
        console.log("added employee")
        //add function
        break;
    }
  })
}
askQuestion()

