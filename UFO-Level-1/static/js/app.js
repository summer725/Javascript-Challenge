// from data.js
var tableData = data;

// Get the table body
var tbody = d3.select("tbody");

console.log(tableData);

//Append rows for data table

tableData.forEach(function(sighting){
    
    console.log(sighting)
   
    // Appending one table row `tr` to the table body
    var row = tbody.append("tr");
    
    Object.entries(sighting).forEach(function([key, value]){
       
        console.log(key,value);
        
        // Appending a cell to the row for each value
        var cell = row.append("td");

        cell.text(value);
    });
});

// Use filter button to adjust the date by user input
var button = d3.select("#filter-btn")
var dateInput = d3.select("#datetime");

// Create an event handler
button.on("click", function() {

    // No page refresh 
    d3.event.preventDefault();

    // Get the value property of the input element
    var userInput = dateInput.property("value");

// Filtering through the table based on user input
    var filteredTime = tableData.filter(sightTime => sightTime.datetime == userInput);

// log each sighting
// forEach: executes a provided function once for each array element
filteredTime.forEach(sighting => {

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {

        console.log(key,value);
    
        var cell = row.append("td");

      cell.text(value);

    });
  });
});