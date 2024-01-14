const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const mysql = require('mysql2');
const { log } = require("console");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydatabase'
});

const querying = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error: ', err);
        reject(err);
      }
      console.log("a data inserted successfully");
      resolve(results)
      
    });
  });
};

app.post('/login', async (req, res) => {
  const query = `SELECT * FROM users WHERE username = '${req.body.name}' AND password = '${req.body.password}'`
  const result = await querying(query)
  console.log(result);
  if (result.length > 0) {
    res.send({ status: true, id: result[0].user_id });
  }
  else {
    res.send({ status: false });
  }
})

app.post('/add/costumers/:userId', async (req, res) => {
  const query = `INSERT INTO costumers (user_id, costumer_name, pc, occupation, email, mobile, bankNumber ,branchNumber ,accountNumber) VALUES ('${req.params.userId}','${req.body.name}','${req.body.pc ? req.body.pc :  0}','${req.body.occupation}','${req.body.email}','${req.body.mobile}','${req.body.bankNumber}','${req.body.branchNumber}','${req.body.accountNumber}')`;
  await querying(query)
  // res.send();
})

app.post('/register', (req, res) => {
  const insert = `INSERT INTO users (username, password) VALUES('${req.body.name}', '${req.body.password}')`;
  querying(insert);
  res.send()
})

app.get('/user/:userId', async (req, res) => {
  const query = `SELECT * FROM costumers  WHERE user_id =' ${req.params.userId}'`
  res.send(await querying(query))
});

app.listen(8000, () => console.log("listning to port 8000...."));
