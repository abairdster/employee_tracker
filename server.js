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

// app.get("/api/reviews", (req, res) => {
//   db.query("SELECT id, movie_name AS title FROM movies", (err, rows) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json(rows);
//   })
//  // res.send("hello from api/movies")
// });

// app.post("/api/add-movie", (req, res) => {
//   const sql = "INSERT INTO movies (movie_name) VALUES(?)"
//   db.query(sql,req.body.title, (err,result) => {
//     if (err) {
//       res.status(500).json({error:err.message});
//       return;
//     }
//     res.json(req.body);
//   });
// });

// app.put("/api/review/:id", (req, res) => {
//   const sql = "UPDATE reviews SET review = ? WHERE id = ?";
//   const params = [req.body.review, req.params.id];
//   db.query(sql,params,(err, result)=> {
//     if (err) {
//       res.status(400).json({error: err.message})
//       return;
//     } else if (!result.affectedRows) {
//       res.json({ message:"Movie not found"})
//     }
//     res.json({
//       data: req.body,
//       changes: result.affectedRows,
//     });
//   });
// });

// app.get("/api/reviews", (req, res) => {
//   db.query("SELECT id, movie_name AS title FROM movies", (err, rows) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json(rows);
//   })

// app.delete("/api/movie/:id", (req, res) => {
//   const sql = "DELETE FROM movies WHERE id = ?";
//   db.query(sql,req.params.id, (err, result)=> {
//     if (err) {
//       res.statusMessage(400).json({error: res.message});
//     } else if (!result.affectedRows) {
//       res.json({
//         message:"Movie not found"
//       });
//     } else {
//       res.json({
//         message: "deleted",
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });