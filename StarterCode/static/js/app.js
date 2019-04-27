// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");


var possibleFilters = ["datetime","city","state","country","shape"];

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var filterValues = []

    possibleFilters.forEach((pf, index) => {
        var inputElement = d3.select("#"+pf);
        var inputValue = inputElement.property("value");
        var filterObject = {}
        filterObject[pf]= inputValue;
        filterValues.push(filterObject)
    });

    console.log(filterValues)

    var filteredData = tableData;

    filterValues.forEach((fv) => {
        currentKey = Object.keys(fv)[0]
        if (fv[currentKey] !== "") {
            console.log(filteredData)
            filteredData = filteredData.filter(siting => siting[currentKey] === fv[currentKey]);
            console.log(filteredData)
            }
    });

var tbody = d3.select("tbody")
tbody.selectAll("tr").remove();

filteredData.forEach((fd) => {
    var row = tbody.append("tr");
    Object.entries(fd).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


});