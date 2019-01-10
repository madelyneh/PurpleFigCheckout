let mysql = require('mysql');
let http = require('http');
// let keyDisplay = require('./key-display');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "purple_figDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");

  database.read();
});

let database = {

  write: function() {

  },

  read: function() {
    console.log("Selecting all products...\n");
    connection.query(`SELECT * FROM item_keys`, function(error, response) {
      if (error) throw error;
      // Log all results of the SELECT statement
    console.log(response);

    let newKey = new keyDisplay("key", response);
    console.log(newKey);
    connection.end()
    });
  },
};

