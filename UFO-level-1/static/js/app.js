// from data.js
var tableData = data;

// YOUR CODE HERE!

// table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tbody.html("");

  // loop through each object in the data
  //  append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply filter to the table data to only keep the
    // rows where the datetime value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Attach event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


buildTable(tableData);

