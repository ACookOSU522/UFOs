// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  };
 
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  };
  console.log(addition(4, 5));

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };
    // Functions can call other functions
function doubleAddition(4, 5) {
  var total = addition(4, 5) * 2;
  return total;
};

  // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  };
  printHello = () => "Hello there!";

  // Original addition function
function addition(a, b) {
    return a + b;
  };
 // Converted to an arrow function
addition = (a, b) => a + b; 

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };

  // converted to arrow
  doubleAddition = (c, d)=> addition(c, d) * 2;

  //skill drill Use the newly refactored doubleAddition function to find the total of 33 and 25.
  doubleAddition = (35, 25)=> addition(35, 25) * 2;

  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 };

 // to clear browser
 clear()

//forloops
 let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
 function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
};

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
};

for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
};

//BUILD TABLE step 1
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
};