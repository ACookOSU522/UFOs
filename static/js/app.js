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

  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 };
 clear()